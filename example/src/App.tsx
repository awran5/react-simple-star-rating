import React, { useState } from 'react'
import Rating from 'react-simple-star-rating'
// import 'react-simple-star-rating/dist/index.css'

const App = () => {
  const [rating, setRating] = useState<number>(0)
  const handleRating = (rate: number) => setRating(rate)
  return <Rating onClick={handleRating} ratingValue={rating} transition className='foo' />
}

export default App
