import { User } from "core/entities/User";

export class GetUsers {
    execute(): Promise<User[]> {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
    }
}