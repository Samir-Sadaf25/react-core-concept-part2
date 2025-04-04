import { use } from "react"
import Posts from './posts'
export default function allPost({postPromise})
{
    const post = use(postPromise)
    return(
        <div className="card">
            <h4>All post are here</h4>
            {
                post.map(pst => <Posts key={pst.id} pst = {pst}></Posts>)
            }
        </div>
    )
}