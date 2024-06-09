# awscdk-construct-file-publisher
[![View on Construct Hub](https://constructs.dev/badge?package=awscdk-construct-file-publisher)](https://constructs.dev/packages/awscdk-construct-file-publisher)

CDK Construct for making local files publicly available
* Specify a path to a local folder that contains files
* FilePublisher creates an S3 bucket and uploads all the files to the bucket
* FilePublisher creates a CloudFront distribution and set the bucket as its origin via Origin Access Identity (OAI)
* You can access the files via CloudFront as the S3 bucket remains private


## Install
[![NPM](https://nodei.co/npm/awscdk-construct-file-publisher.png?mini=true)](https://nodei.co/npm/awscdk-construct-file-publisher/)

## Usage
```ts
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { FilePublisher } from 'awscdk-construct-file-publisher';

export class ExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Upload all the files in the local folder (./upload) to S3
    const publicFolder = new FilePublisher(this, 'FilePublisher', {
      path: './upload',
    });

    // You can access the file via Internet
    new cdk.CfnOutput(this, "PublicURL", {
      value: `${publicFolder.url}/dog.mp4`,,
      exportName: cdk.Aws.STACK_NAME + "PublicURL",
      description: "Public URL",
    });
  }
}
```
