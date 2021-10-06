import { useEffect, useState } from "react"
import BlogList from "./BlogList";

const Home = () => {

    // blogs is an array of blogs
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [myerror, setMyError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(res => {
            if (!res.ok) {
                throw Error('could not fetch data');
            }
            // res is not the output data but the response of the server
            return res.json();//this is async
        }).then((data) => {//here we get our data
            setBlogs(data);
            setIsPending(false);
            setMyError(null);//if the user hits reload after the error then reinitialise after no error is found

        }).catch(err => {
            console.log(err.message);
            setMyError(err.message);
            setIsPending(false);
        });
    }, []);//*here we pass an empty dependency, so that blogs are set only on initial render

    return (
        <div className="home">
            {/* Props are used to send data from one component to another */}
            {isPending && <div> Loading... </div>}
            {myerror && <div> {myerror} </div>}
            {blogs && <BlogList blogs={blogs} title="All My Blogs!" />}
            {//! what happens is that until the blogs data in filled in the var, the frontend gets rendered which is why in the bloglist, map method is called upon null value. thats why we put an AND condition
                // ! blogs is on the left because after left value is null, right is not encountered i.e does not get rendered
            }

        </div>
    );
}

export default Home;





// !================================================================================================

// import { useState } from "react"

// const Home = () => {

//     const handleClick = () => {
//         console.log('hello, bunty')
//     }


//     const handleClickAgain = (name) => {
//         console.log('hello ' + name)
//     }

//     // *===============================================

//     // let name = "mario";
//     //? usestae is a hook
//     const [name, setName] = useState('mario');
//     const [age, setAge] = useState(25);
//     // set(varname) is a general format of updating the variable where it has been used. This is similar to provider package in flutter

//     const changeTheName = () => {
//         // name = "bunty";//* this does not update the value in the p section. this is because react does not look for any changes
//         setName('bunty');
//         setAge(30);

//     }


//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me</button>
//             {/* if we invoke the function i.e  handleClick(), then it will execute even when user does not click on the button. Thus we send a reference to it*/}

//             {/* Now suppose we want to send a parameter to the function. But, we cannot do it directly since it willinvoke as mentioned earlier. So, we create an anonymous function and in that call that function as below */}
//             <button onClick={() => {
//                 handleClickAgain('bunty');
//             }}>Click me</button>
//             <p>{name} is {age} years old</p>
//             <button onClick={changeTheName}>Click to change Name displayed</button>
//         </div>
//     );
// }

// export default Home;


// !================================================================================================