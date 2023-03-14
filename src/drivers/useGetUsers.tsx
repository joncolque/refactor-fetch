import { User } from "core/entities/User"
import { useEffect, useState } from "react"

export const useGetUsers = ()=>{
    const [users, setUsers] = useState<User[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(users=>users.json())
        .then(users=>{
            setUsers(users)
            setIsLoading(false)
        })
    },[])

    return {
        users,
        isLoading
    }
}