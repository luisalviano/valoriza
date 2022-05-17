import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { user_receiver, tag_id, message } = request.body;
    const { id } = request.user;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({ user_sender: id, user_receiver, tag_id, message });

    return response.json(compliment);
  }
}

export { CreateComplimentController };