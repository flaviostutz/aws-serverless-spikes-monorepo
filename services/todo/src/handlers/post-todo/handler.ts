import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpHeaderNormalizer from '@middy/http-header-normalizer';

async function lambdaHandler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  console.log(`Post todo ${event.body}`);

  return {
    statusCode: 201,
    body: '',
  };
}

export const handler = middy(lambdaHandler)
  .use(jsonBodyParser())
  .use(httpHeaderNormalizer());
