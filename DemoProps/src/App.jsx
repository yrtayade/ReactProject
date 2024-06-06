import { useState } from "react"
import BlogList from "./BlogList";

function App() {
  
    const blogs = 
      [
        {   
        title : 'My Title 1',
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
        id : 1
      },
      {   
        title : 'My Title 2',
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
        id : 2
      },
      {   
        title : 'My Title 3',
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
        id : 3
      },
      {   
        title : 'My Title 4',
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
        id : 4
      },
      {   
        title : 'My Title 5',
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
        id : 5
      },
      {   
        title : 'My Title 6',
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
        id : 6
      },
      {   
        title : 'My Title 7',
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
        id : 7
      }
    ]
    

  return (
    <>
     <BlogList blogs={blogs}/>
    </>
  )
}

export default App
