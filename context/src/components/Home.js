import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Home() {
    const {info} = useContext(UserContext)
    if (!info.username){
        return (
            <div>
                <h1> Welcome, please login </h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1> Welcome back, {info.username}. You logged in at {info.lastLogIn}</h1>
            </div>
        )
    }
    
}