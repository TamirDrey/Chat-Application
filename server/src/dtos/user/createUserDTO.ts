import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

class CreateUserDTO {
  _id: string;
  email: string;
  name: string;
  password: string;

  constructor(email: string, name: string, password: string) {
    this._id = uuidv4();
    this.email = email;
    this.name = name;
    this.password = bcrypt.hashSync(password, 10);
  }

}
export default CreateUserDTO;
