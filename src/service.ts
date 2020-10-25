import IInternalUser from "@teamest/internal-user-server/dist/IInternalUser";
import {
  FindUserRequest,
  FindUserResponse,
} from "@teamest/internal-user-server/dist/InternalUser.types";

export class Service implements IInternalUser {
  FindUser(FindUserRequest: FindUserRequest): Promise<FindUserResponse> {
    return Promise.resolve({
      user: {
        id: FindUserRequest.id,
        name: 'Some Name',
      }
    });
  }
}
