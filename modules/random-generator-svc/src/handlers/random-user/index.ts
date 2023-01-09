/* eslint-disable no-undefined */
import https from 'https';

import AWSXRay from 'aws-xray-sdk';

AWSXRay.captureHTTPsGlobal(https, undefined);

export { handler } from './handler';
