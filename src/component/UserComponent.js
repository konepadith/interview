import { useEffect,useState } from "react";
function UserComponent(){

    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setUser(json))
    })
    
    return(
        <>
        <h1>user id: {user.userId}</h1>
        <h1>user title: {user.title}</h1>
        </>
    )
}

export default UserComponent