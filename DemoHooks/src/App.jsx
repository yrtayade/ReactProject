import { useEffect, useState } from "react"
import BlogList from "./BlogList"

function App() {

const [blogs,setBlogs]  = useState(null);

  function deleteBlog(id)
  {
    const newBlogs= blogs.filter(  (blog)=> blog.id!=id  );
    setBlogs(newBlogs);
  }

  const [name, setName] = useState("Ramesh");
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
      });
  }, []);

  return (
    <>
      { blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog}/>}
      
    </>
  )
}
export default App
