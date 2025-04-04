import { use } from "react"

export default function users({fetchUsers}){
    const users = use(fetchUsers)
    // console.log(users)
    return(
        <div className="card">
            <h3>users : {users.length} </h3>
        </div>
    )
}