// creating a custom hook
// every custom hook should start with use or else react does not identify it as a hook
//  we create custom hooks so that we can reuse data, set a generalised template
import { useEffect, useState } from "react";
const useFetch = (url) => {

    // blogs is an array of blogs - edited to data for generalisation
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [myerror, setMyError] = useState(null);

    useEffect(() => {
        fetch(url).then(res => {
            if (!res.ok) {
                throw Error('could not fetch data');
            }
            // res is not the output data but the response of the server
            return res.json();//this is async
        }).then((data) => {//here we get our data
            setData(data);
            setIsPending(false);
            setMyError(null);//if the user hits reload after the error then reinitialise after no error is found

        }).catch(err => {
            console.log(err.message);
            setMyError(err.message);
            setIsPending(false);
        });
    }, []);//*here we pass an empty dependency, so that blogs are set only on initial render
    console.log(data);
    return { data, isPending, myerror };
}


export default useFetch;