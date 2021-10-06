import { useEffect, useState } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, myerror } = useFetch('http://localhost:8000/blogs');





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