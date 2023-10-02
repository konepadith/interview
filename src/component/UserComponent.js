import { useEffect,useState } from "react";
function UserComponent(){

    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json() )
        .then(json => setUser(json))
    })
    
    return(
        <>
        {user.map((element)=>{
            return (<ul>
            <li key={element.id}>user id: {element.id}  user title: {element.title}</li>
           
            </ul>)
        })}
        </>
    )
}

export default UserComponent