import UserDTO from "./dtos/userDTO.";
import { IUser } from "./entities/user";

class Extensions {
  static AsUserDto(user: IUser): UserDTO {
    return {
      id: user._id,
      email: user.email,
      name: user.name,
    };
  }
}
export default Extensions;
