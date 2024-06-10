import { useState } from 'react'
import BlogList from './BlogList'
function App() {

  function btnHandle(author)
  {
    if(author !=='all'){
      const newBlogs =  blogs.filter(  (blog)=> blog.author === author  );
      setBlogs(newBlogs)
    }
    else{
      setBlogs(blogs)
    }    
  }

  function btnDelete(id){
    const newBlogs =  blogs.filter(  (blog)=> blog.id !== id  );
    setBlogs(newBlogs)
  }

  const [blogs,setBlogs] = useState(
    [
      {   
      title : 'My Title 1',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
      author:'Ajay',
      id : 1
    },
    {   
      title : 'My Title 2',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
      author:'Mahesh',
      id : 2
    },
    {   
      title : 'My Title 3',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
      author:'Mahesh',
      id : 3
    },
    {   
      title : 'My Title 4',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
      author:'Ajay',
      id : 4
    },
    {   
      title : 'My Title 5',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
      author:'Mahesh',
      id : 5
    },
    {   
      title : 'My Title 6',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
      author:'Mahesh',
      id : 6
    },
    {   
      title : 'My Title 7',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aut!",
      author:'Ajay',
      id : 7
    }
  ]
  );

   



  return (
    <>
      <div className='container mt-5 mb-5'>
        <BlogList blogs = {blogs} btnHandle = {btnHandle} btnDelete = {btnDelete}/>
        <hr />
        <BlogList blogs = { (blogs.filter(  (blog)=> blog.author ==='Ajay'  ))  }/>
      </div>
    </>
  )
}

export default App
