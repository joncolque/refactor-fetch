import { IUsersRepository } from "core/adapters/IUsersRepository"
import { User } from "core/entities/User"
import { GetUsers } from "core/interactors/GetUsers"
import { FetchUsersRepository } from "core/repositories/FetchUsersRepository"
import { MockUsersRepository } from "core/repositories/MockUsersRepository"
import { useEffect, useState } from "react"
import { useSwitcher } from "./useSwitcher"

export const useGetUsers = () => {
    const [users, setUsers] = useState<User[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const usersRepository =  useSwitcher<IUsersRepository>(new FetchUsersRepository(),new MockUsersRepository());
    const getUsersInteractor = new GetUsers(usersRepository);

    useEffect(() => {
        getUsersInteractor.execute()
            .then((users: User[]) => {
                setUsers(users)
                setIsLoading(false)
            })
    }, [])
    return {
        users,
        isLoading
    }
}