function BlogList(props)
{
   const blogs = props.blogs;
   const btnHandle = props.btnHandle;
   const btnDelete = props.btnDelete;
   return(
      <div className="container">
         <div className="row">
            <div className="col-md-3 text-center">
               <button onClick={()=>btnHandle('all')} className="btn btn-primary">All</button>
            </div>
            <div className="col-md-3 text-center">
               <button onClick={()=>btnHandle('Mahesh')} className="btn btn-primary">Mahesh</button>
            </div>
            <div className="col-md-3 text-center">
            <button onClick={()=>btnHandle('Ajay')} className="btn btn-primary">Ajay</button>
            </div>
         </div>
        <div className="row">
          {
            (blogs.map((blog)=>
              <div className="col-md-3 p-3 mt-3" key={blog.id}>
                <div className="border p-3">
                  
                  <p><strong>{blog.title}</strong></p>
                  <p>{blog.description}</p>
                  <p>{blog.author}</p>                  
                  <button onClick={()=>btnDelete(blog.id)} className="btn btn-danger">X</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
   );
}

export default BlogList;