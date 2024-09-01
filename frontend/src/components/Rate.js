import React from 'react'
import '../App.css';

const Rate = () => {
  return (
  <>
 <marquee behavior="alternate" direction="right"><h1>My Shop Rates And My Art</h1></marquee> 
    <div className='rate-art'>
<div className='Rate-cart'>
<table>
    <tr>
        <td>Cutting</td>
        <td>60</td>
    </tr>
    <tr>
        <td>Sheving</td>
        <td>30</td>
    </tr>
    <tr>
        <td>Cutting+Sheving</td>
        <td>80</td>
    </tr>
</table>
</div>
<div className='poster'>
 <button>read more...</button>
</div>
    </div>
    </>
  )
}

export default Rate