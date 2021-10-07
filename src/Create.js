import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();//this does not refresh the page when we click the submit button
        const newblog = { title, body, author };//no need for id, as json server does that automatically for us
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            //here we define the type of request
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newblog)
        }).then(() => {
            console.log('added');
            setIsPending(false);
            // history.goBack(-1);//this more like acts like a back button
            history.push('/');
        });
    }


    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label >Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}>

                </textarea>
                <label >Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    )
}

export default Create;