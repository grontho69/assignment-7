import React from 'react'
import bannerImg from "../assets/vector1.png"
import Container from './Container'
const Banner = ({inProgress,resolved}) => {
  return (
    <div>
      <Container>
          <div className=" w-360 mt-20 grid gap-6">
        <div  className=" flex grid-cols-3 rounded-md  h-62.5 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))]
 ">
         <div>   <img className=" overflow-hidden h-62.5" src={bannerImg} alt="" /></div>
            
            <div className=" flex flex-col items-center justify-center  "><h1 >In-Progress</h1>
              <p>{inProgress }</p></div>
            
          <div>  <img className=" overflow-hidden h-62.5 scale-x-[-1]" src={bannerImg} alt="" /></div>
 </div>
        <div  className=" flex grid-cols-3 rounded-md  h-62.5 bg-[linear-gradient(90deg,rgba(84,207,103.68,1),rgba(0,130,122.2,1))]
 ">
         <div>   <img className=" overflow-hidden h-62.5" src={bannerImg} alt="" /></div>
            
            <div className=" flex flex-col items-center justify-center  "><h1 >Resolved</h1>
              <p>{resolved }</p></div>
            
          <div>  <img className=" overflow-hidden h-62.5 scale-x-[-1]" src={bannerImg} alt="" /></div>
 </div>
</div>
</Container>
    </div>
  )
}

export default Banner
