import React from 'react'
import { Button , styled, Typography} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../../Store/UserSlice';
function Home() {
  const count = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  return (

    <div>
       <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
    </div>
  )
}

export default Home
