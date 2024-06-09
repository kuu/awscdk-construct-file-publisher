import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kuu Miyazaki',
  authorAddress: 'miyazaqui@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'awscdk-construct-file-publisher',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/miyazaqui/awscdk-construct-file-publisher.git',
  keywords: [
    'cdk',
    'cdk-construct',
    'S3',
    'CloudFront',
  ],
  license: 'MIT',
  licensed: true,
  deps: ['aws-cdk-lib', 'constructs'],
  description: 'AWS CDK Construct to upload local files to S3 and make them publicly available via CloudFront',
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();

