import * as crypto from 'crypto';
import * as fs from 'fs';
import { RemovalPolicy } from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3_deployment from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export interface FilePublisherProps {
  readonly path: string; // Path to a local folder containing files to be published.
}

export class FilePublisher extends Construct {
  public readonly url: string; // URL of the public folder

  constructor(scope: Construct, id: string, {
    path,
  }: FilePublisherProps) {
    super(scope, id);

    if (!fs.statSync(path).isDirectory()) {
      throw new Error(`Path ${path} is not a directory`);
    }

    // Create S3 bucket
    const bucketName = `${crypto.randomUUID()}`;
    const bucket = new s3.Bucket(this, bucketName, {
      bucketName,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Upload files to S3
    new s3_deployment.BucketDeployment(this, 'DeployFiles', {
      sources: [s3_deployment.Source.asset(path)],
      destinationBucket: bucket,
      memoryLimit: 1024,
    });

    // Create an Origin Access Identity (OAI)
    const oai = new cloudfront.OriginAccessIdentity(this, 'OAI', {
      comment: 'OAI for CloudFront to access private S3 bucket',
    });

    // Grant the OAI access to the private S3 bucket
    bucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [`${bucket.bucketArn}/*`],
        principals: [new iam.CanonicalUserPrincipal(oai.cloudFrontOriginAccessIdentityS3CanonicalUserId)],
      }),
    );

    // Create a CloudFront distribution
    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(bucket, { originAccessIdentity: oai }),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.ALLOW_ALL,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
      },
      enabled: true,
    });

    this.url = `https://${distribution.distributionDomainName}`;
  }
}