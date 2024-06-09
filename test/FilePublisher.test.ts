import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { FilePublisher } from '../src';

test('Create MediaLive', () => {
  const app = new App();
  const stack = new Stack(app, 'SmokeStack');

  new FilePublisher(stack, 'FilePublisher', {
    path: './test',
  });

  const template = Template.fromStack(stack);

  template.hasResource('AWS::S3::Bucket', 1);
  template.hasResource('AWS::CloudFront::Distribution', 1);
});
