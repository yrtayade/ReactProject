function SimpleEvent(){
   function clickHandle()
  {
    alert("First Card");
  }
return(
   
   <>
      <div className="col-md-3 p-3">
         <div className="border text-center rounded-3 p-3">
            <h1>Hi! Yogesh</h1>
            <h4>Simple Event</h4>
            <button className="btn btn-primary" onClick={clickHandle}>Click me</button>
         </div>
      </div>  
   </>
);
}
export default SimpleEvent;