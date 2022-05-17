import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const usersRepositories = getCustomRepository(UsersRepositories);

  const { id } = request.user;
  const user = await usersRepositories.findOne(id);

  if (user.isAdmin) {
    return next();
  }

  return response.status(401).json({ error: "Unauthorized" });
}