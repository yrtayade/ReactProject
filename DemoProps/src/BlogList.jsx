import { useState } from "react";

function BlogList(props){
   const blogs = props.blogs;

   const [title,setTitle] = useState();
   function clickHandle(title){
      setTitle(title);
   }
return(
   <div className="container">
        <div className="row p-3" >          
        <p className="text-danger"> You clicked {title}</p>
          {
            blogs.map( (blog)=>(
                <div className="col-md-3 mt-2" key={blog.id}>
                  <div className="p-5 text-center border rounded-5">
                    <h4>{blog.title}</h4>
                    <p>{blog.description}</p>
                    <button onClick={ ()=>{clickHandle(blog.title)} } className="btn btn-primary">Click me</button>
                  </div>
                </div>       
            ))
          }
         </div>
     </div>
);
}
export default BlogList;