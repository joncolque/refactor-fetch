import { User } from 'core/entities/User';

export interface IUsersRepository {
  getAll(): Promise<User[]>
}