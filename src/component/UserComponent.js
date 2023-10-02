import { useEffect,useState } from "react";
function UserComponent(){

    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setUser(json))
    })
    
    return(
        <>
        {user.map((element)=>{
            return (<div>
            <h1 key={element.id}>user id: {element.userId}</h1>
            <h1 >user title: {element.title}</h1>
            </div>)
        })}
        </>
    )
}

export default UserComponent