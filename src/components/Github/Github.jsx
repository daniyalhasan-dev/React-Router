import React, { useEffect, useState } from 'react';

export default function Github() {
    const [data , setData] = useState()
    useEffect(()=>{
        fetch('https://api.github.com/users/daniyalhasan-dev')
        .then(response => response.json())
        .then(data => {
            console.log (data);
            setData(data)
        }).catch((err)=>console.log(err.message))
    } , [])
    return(
        <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl' >Github Followers: {data ? data?.followers : 'Loading...'} 
            <img className='mx-auto mt-4 rounded-full' src={data?.avatar_url} alt='Git Pic'/>
        </div>
    )
}