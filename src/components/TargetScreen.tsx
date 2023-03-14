import { useGetUsers } from "@/drivers/useGetUsers"

export const TargetScreen = ()=>{
    const {users, isLoading} = useGetUsers()

    if(isLoading && !Boolean(users)) return <text>isLoading...</text>

    return <>
        {users?.map(user=><li key={user.id}>{user.name}</li>)}
    </>
    
}