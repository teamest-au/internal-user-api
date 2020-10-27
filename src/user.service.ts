import {
  InternalUserServiceTypes,
  IInternalUserService,
} from '@teamest/internal-user-server';

export default class InternalUserService implements IInternalUserService {
  FindUser(
    FindUserRequest: InternalUserServiceTypes.FindUserRequest,
  ): Promise<InternalUserServiceTypes.FindUserResponse> {
    return Promise.resolve({
      user: {
        id: FindUserRequest.id,
        name: 'Daniel Emery',
      },
    });
  }
}
