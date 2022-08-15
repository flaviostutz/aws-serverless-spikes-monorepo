import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import middy from '@middy/core';
import createHttpError from 'http-errors';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpHeaderNormalizer from '@middy/http-header-normalizer';

export const randomNumbersHandler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
) => {
  // const { group, id } = event.pathParameters;
  // throw new Error();
  return {
    statusCode: 200,
    body: JSON.stringify({
      number: Math.random() * 99999
    }),
  };
};

export const handler = middy(randomNumbersHandler)
  .use(jsonBodyParser())
  .use(httpHeaderNormalizer());
