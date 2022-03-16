// const BlogList = (props) => {//whatever values passed from the parent component is onto this props object

//     const blogs = props.blogs;
//     const title = props.title;

const BlogList = ({ blogs, title }) => {//whatever values passed from the parent component is onto this props object
    // props can be accessed using both ways

    // never try to alter the data of the props, try editing the main list whenever possible. eg here, 
    // we do not delete the blog from the props but from the origin list in the home.js file

    return (
        <div className="blog-list">
            <h3>{title}</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> {/*key is compulsory so that react can keep track of items*/}
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>

                </div>
            ))}
                        <h3>HELLO BHADWARI</h3>


        </div>
    );
}

export default BlogList;
