import { useEffect, useState } from "react"
import BlogList from "./BlogList"

function App() {

  const [blogs,setBlogs]  = useState(null);
  const [isPending,setPending] = useState(true);

  function deleteBlog(id)
  {
    const newBlogs= blogs.filter(  (blog)=> blog.id!=id  );
    setBlogs(newBlogs);
  }
  useEffect(() => {
    
    setTimeout(
      ()=>
        fetch("http://localhost:8000/blogs")
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setPending(false);
      })
      
      ,1000)

  }, []);

  return (
    <>
      { isPending && <div className="container rounded-5 text-white text-center mt-5 p-5 bg-secondary">Loading..</div>}
      { blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog}/>}      
    </>
  )
}
export default App
