import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpHeaderNormalizer from '@middy/http-header-normalizer';

async function lambdaHandler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  console.log(`List todos ${event.body}`);

  return {
    statusCode: 200,
    body: JSON.stringify([
      { name: 'test1', status: 'pending' },
      { name: 'test2', status: 'done' },
    ]),
  };
}

export const handler = middy(lambdaHandler)
  .use(jsonBodyParser())
  .use(httpHeaderNormalizer());
