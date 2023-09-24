import React, { useState } from 'react'
import Card from './card'
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
function Testimonial(props) {
    let review=props.reviews
    const [index,setindex] =useState(0);
   
    function  leftShifthandler(){
        if( index-1 < 0 ){
            setindex(review.length-1)
        }
        else{
            setindex(index-1)
        }
    }
    function  rightShifthandler(){
        if(index+1>review.length-1){
            setindex(0);
        }
        else{
            setindex(index+1)
        }

    }
    function  surprisehandler(){
       let randomindex = Math.floor(Math.random() * review.length);
       setindex(randomindex)
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex-col justify-center items-center rounded-md mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
        <Card review={review[index]}/>

 <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold justify-center'>
    <button className='cursor-pointer hover:text-violet-500' onClick={leftShifthandler}><FiChevronLeft/></button>
    <button className='cursor-pointer hover:text-violet-500'onClick={rightShifthandler}><FiChevronRight/></button>
</div>
<div className='mt-6'>
    <button onClick={surprisehandler} className= 'bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' >
        Surprise Me
    </button>
</div>
    </div>
  )
}

export default Testimonial
