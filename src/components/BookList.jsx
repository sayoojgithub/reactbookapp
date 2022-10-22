import React from 'react'
import '../App'

import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const BookList = () => {
    const API_URL='https://example-data.draftbit.com/books?_limit=10'
    const [books,setBooks]=useState([]);
    const navigate=useNavigate();


   



    useEffect(()=>{
        axios.get(API_URL).then(res=>{
            console.log(res.data)
            setBooks(res.data)
        })

    },[])

  return (
    <div className='book-list'>
        {books.map((book)=>(
            <div key={book.id} className="book">
                <div><h4>{book.title}</h4></div>
                <div><img src={book.image_url} alt="#"  /></div>
                <div><button onClick={()=>navigate(`/books/${book.id}`)}>MORE INFO</button></div>

            </div>
        ))}




    </div>
  )
}

export default BookList