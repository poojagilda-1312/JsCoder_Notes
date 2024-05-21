import useFetch from "../hooks/use-fetch"

const PostList  = ()=>{
    
    const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/posts")
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>
    return (
        <div>
            <h1>Post List</h1>
            {
                data && (
                    <ul>
                        {data.map((post)=>(
                            <li key={post.id}>
                                 <h3>{post.title}</h3>
                                 <p>{post.body}</p>
                            </li>
                        )
                                                                                                    
                        )}
                    </ul>
                )
            }
        </div>
    )
}
export default PostList