import { InternalUserServiceClient } from '@teamest/internal-user-client';
import Logger from '@danielemeryau/logger';

const testLogger = new Logger('integration-test');

const client = new InternalUserServiceClient(
  'http://localhost:3000',
  'integration-test-client',
);

async function performTest() {
  testLogger.info('FindUser');
  const result = await client.FindUser({
    id: 'some-uuid',
  });
  testLogger.info('FindUserResult', result);
}

performTest()
  .then(() => {
    testLogger.info('Test successful');
  })
  .catch((err) => {
    testLogger.error(err?.message || err);
  });
