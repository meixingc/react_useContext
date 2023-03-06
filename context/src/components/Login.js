import { useContext,useState } from "react"
import { UserContext } from "./UserContext"

export default function Login () {
    const initialState = {
        username : '',
        lastLogIn : ''
    }
    const {info, setInfo} = useContext(UserContext)
    const [formState, setFormState] = useState(initialState)

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInfo({...info, username: formState.username, lastLogIn: Date()})
        console.log(info)
        setFormState(initialState)
    }

    return (
        <div>
            <h1> i am login</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="UserName" id='username' value={formState.username} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => setInfo({...info, username: '', lastLogIn: ''})}>LogOut</button>
        </div>
    )
    
}