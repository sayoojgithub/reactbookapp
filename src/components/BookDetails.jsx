import React from 'react'
import '../App';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const BookDetails = () => {
  const BOOK_DETAIL_URL='https://example-data.draftbit.com/books/';
  const [book,setbook]=useState({})
  const {id}=useParams();
  useEffect(()=>{
    axios.get(`${BOOK_DETAIL_URL}/${id}`).then(res=>{
      setbook(res.data);
    })

  },[id])
  return (
    <div className='book-details'>
      <div >
        <h2 >{book?.title}</h2>
        <img className='book-image' src={book?.image_url} alt="#" />
      </div>
      <div>
        <h2 className='book-description'>Description</h2>
        <p>{book?.description}</p>
        <h2>Authors</h2>
        <p>{book?.authors}</p>
        <h2>Genres</h2>
        <p>{book?.genres}</p>

      </div>

    </div>
  )
}

export default BookDetails