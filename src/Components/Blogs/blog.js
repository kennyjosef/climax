import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import classes from "./blog.module.css";
const BlogList = ({blogs,title, handleDelete, readNowHandler, bookHandler}) => {
    // const blogs=props.blogs;
    // const title =props.title;

    // console.log(props, blogs);
    return (
        <div className="blog-list">
            <h3 className={classes.title}>{title}</h3>
            {blogs.map ((blog)=>(
            <div className={classes.blog_preview} key={blog.id}>
                {/* <h3><a href="/">{blog.title}</a></h3> */}
                <h3>{blog.title}</h3>
                <p>Written by {blog.author}</p>
                <button onClick={() => handleDelete (blog.id)}>Delete Blog</button>
                <br></br><button onClick={readNowHandler}>Read Now</button>
                
            </div>
            
            ))}

            {/* <button className={classes.btn} onClick={bookHandler}>More Books</button> */}
        </div>
    );
}
 
export default BlogList;