import { IUsersRepository } from "core/adapters/IUsersRepository";
import { User } from "core/entities/User";
import mockUsers from '../../_mocks_/users.json'

export class MockUsersRepository implements IUsersRepository {
    getAll(): Promise<User[]> {
        console.log("You are using users mocks!")
        return Promise.resolve(mockUsers)
    }
}