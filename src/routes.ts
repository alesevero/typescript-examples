import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Alexandre',
    email: 'alexandre@email.com',
    password: '123456',
    techs: [{title: 'Node.js', experience: 100}, { title: 'ReactJS', experience: 85}]
  });

  return response.json({user});
}