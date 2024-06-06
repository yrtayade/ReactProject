import { useState } from "react";

useState
function HookEventParam(){
   const [myName, setmyName] = useState('Yogesh');
   function clickHandle3(myName)
   {
      console.log(myName);

      setmyName(myName );
   }
   return(
      <>
        <div className="col-md-3 p-3">
            <div className="border text-center rounded-3 p-3">
               <h1>Hi! {myName}</h1>
               <h4>Hook With Parameter</h4>
               <button className="btn btn-primary" onClick={()=> clickHandle3("Ramesh")}>Click me</button>
            </div>
         </div>
      </>
   );
}
export default HookEventParam;