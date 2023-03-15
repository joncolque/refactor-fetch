import { User } from "core/entities/User"
import { GetUsers } from "core/interactors/GetUsers"
import { useEffect, useState } from "react"

export const useGetUsers = () => {
    const [users, setUsers] = useState<User[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getUsersInteractor = new GetUsers()

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