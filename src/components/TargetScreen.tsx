import { useEffect, useState } from "react"

export const TargetScreen = ()=>{
    const [users, setUsers] = useState<any[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(usersResult=>{
            setUsers(usersResult)
            setIsLoading(false)
        })
    },[])

    if(isLoading && !Boolean(users)) return <text>isLoading...</text>

    return <>
        {users?.map(user=><li key={user.name}>{user.name}</li>)}
    </>
    
}