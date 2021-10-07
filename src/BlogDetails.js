import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, isPending, myerror } = useFetch('http://localhost:8000/blogs/' + id);


    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {myerror && <div>{myerror}</div>}
            {
                blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                        <div>{blog.body}</div>

                    </article>
                )
            }

        </div>
    );
}

export default BlogDetails;