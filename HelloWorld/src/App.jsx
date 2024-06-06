import Header from "./Header"
import Footer from "./components/Footer"

function App() {

  const name = "Ajay";
  const age = 24;
  return (
    <>
     <Header/>
     <h1>Hello World : {name } and age = {age}</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, molestias.</p>
     <Footer/>
    </>
  )
}

export default App
