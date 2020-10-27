import { InternalUserServiceServer } from '@teamest/internal-user-server';
import UserService from './src/user.service';

const service = new UserService();
const implementation = new InternalUserServiceServer(
  'internal-user-server',
  3000,
  service,
);

implementation.listen();
