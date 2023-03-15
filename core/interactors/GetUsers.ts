import { IUsersRepository } from "core/adapters/IUsersRepository";
import { User } from "core/entities/User";

export class GetUsers {
    private usersRepository: IUsersRepository

    constructor(usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository
    }

    execute(): Promise<User[]> {
        return this.usersRepository.getAll()
    }
}