import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).end();
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, "9c01b134e51fa61cf748dfa26024c403") as IPayload;

    request.user = {
      id: sub
    }

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}