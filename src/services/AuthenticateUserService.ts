import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const user = await usersRepository.findOne({ email });
    if (!user) {
      throw new Error("Incorrect email and/or password!");
    }

    const passwordMatches = await compare(password, user.password);
    if (!passwordMatches) {
      throw new Error("Incorrect email and/or password!");
    }

    const token = sign({ email: user.email }, "9c01b134e51fa61cf748dfa26024c403", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateUserService };