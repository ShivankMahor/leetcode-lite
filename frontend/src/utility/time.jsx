import { useEffect, useState } from "react";

 function CurrentTime(){
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date())
    },1000)
  },[])


  return(
    <>
      {time.toLocaleTimeString()}
    </>
  )
}
export default CurrentTime;
