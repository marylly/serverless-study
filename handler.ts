import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event) => {
  let greeting = 'Hello World!';
  if (event.multiValueQueryStringParameters != null) {
    greeting = 'Hello ' + event.multiValueQueryStringParameters['name']
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: greeting,
      input: event,
    }, null, 2),
  };
}
