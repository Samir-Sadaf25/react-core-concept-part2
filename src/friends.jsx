import { use } from "react"
import Friend from './friend'
export default function friends({friendsPromise})
{
   const frnds = use(friendsPromise)
//    console.log(frnds)
    return(
     <div className="card">
         <h3>friends : {frnds.length} </h3>
         {
            frnds.map(friend => <Friend key={friend.id} friend = {friend}></Friend>)
         }
     </div>
   )
}