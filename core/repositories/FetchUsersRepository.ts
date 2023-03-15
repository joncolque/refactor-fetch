import { IUsersRepository } from "core/adapters/IUsersRepository";
import { User } from "core/entities/User";

export class FetchUsersRepository implements IUsersRepository {
    getAll(): Promise<User[]> {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
    }
}