import HookEvent from "./HookEvent";
import HookEventParam from "./HookEventParam";
import SimpleEvent from "./SimpleEvent";
function App()
{
  
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <SimpleEvent />
          <HookEvent />
          <HookEventParam />
        </div>
      </div> 
    </>
  )
}

export default App
