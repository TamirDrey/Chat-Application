import UserDTO from "./dtos/user/userDTO";
import { IUser } from "./entities/user";

class Extensions {
  static AsUserDto(user: IUser): UserDTO{
    return new UserDTO(user._id, user.email, user.name);
  }
}
export default Extensions;
