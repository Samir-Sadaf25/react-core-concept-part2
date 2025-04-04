export default function allPosts({pst})
{
    const {title,body} = pst;
    return(
        <div className="card">
            <h4>post title:{title}</h4>
            <p>{body}</p>
        
        </div>
    )
}