import { useEffect, useState } from 'react'
import './friend.css'
import Friend from './Friend'

export default function Friends(){
    const [friend,setFriend]=useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])

    return(
        <div className='box'>
            <h3>Friend: {friend.length}</h3>
            {
                friend.map(bondhu=><Friend friends={bondhu}></Friend>)
                
            }
        </div>
    )
}