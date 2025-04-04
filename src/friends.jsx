import { use } from "react"

export default function friends({friendsPromise})
{
   const data = use(friendsPromise)
   console.log(data)
    return(
     <div className="card">
         <h3>friends : {data.length} </h3>
     </div>
   )
}