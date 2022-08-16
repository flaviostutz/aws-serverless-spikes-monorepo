import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import axios from 'axios';

async function lambdaHandler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  console.log(event.body);

  const resp = await axios.get('https://randomuser.me/api/');

  return {
    statusCode: 200,
    body: JSON.stringify(resp.data),
  };
}

export const handler = middy(lambdaHandler)
  .use(jsonBodyParser())
  .use(httpHeaderNormalizer());
