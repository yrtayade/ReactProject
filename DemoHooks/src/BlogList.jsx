function BlogList(props) {
   const blogs = props.blogs;
   const deleteBlog = props.deleteBlog;
   // console.log(blogs);
   return ( 
      <>
         <div className="container bg-dark">
            <div className="row mt-3">
               {
                  (blogs.map(
                     (blog)=>
                        <div className="col-md-3 p-3 border text-center bg-dark text-white" key={blog.id}>
                           <h3>{blog.id} : {blog.Title}</h3>
                           <p>{blog.Description}</p>
                           <p>{blog.Author}</p>
                           <button onClick={()=>{deleteBlog(blog.id)}} className="btn btn-light">X</button>
                        </div>
                  ))
               }
            </div>
         </div>
      </>
    );
}

export default BlogList;