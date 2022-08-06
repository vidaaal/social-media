import { Request, Response } from 'express';
import { PostsRepository } from '../../repositories/implementations/PostsRepository';
import { FindAllPostsUseCase } from './findAllPostsUseCase';

class FindAllPostsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllPostsUseCase = new FindAllPostsUseCase(new PostsRepository());

    const posts = await findAllPostsUseCase.execute();

    return response.json(posts);
  }
}

export { FindAllPostsController };
