import { useState } from "react";

function HookEvent()
{
   const [myName, setmyName] = useState('Yogesh');
   function clickHandle2()
   {
      setmyName('Rajesh');
      console.log(myName);
   }
   return(
      <>
        <div className="col-md-3 p-3">
            <div className="border text-center rounded-3 p-3">
               <h1>Hi! {myName}</h1>
               <h4>Hook Event</h4>
               <button className="btn btn-primary" onClick={clickHandle2}>Click me</button>
            </div>            
         </div>
      </>
   );
}
export default HookEvent;