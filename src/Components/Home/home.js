import { useState, useEffect } from "react";
import BlogList from "../Blogs/blog";
import classes from "./home.module.css";

const Person = () => {
    const[blogs, setBlogs]=useState([
        {title: "My Weldson", body: "lorem lorem", author:"Chike", id: 1},
        {title: "Party Time", body: "lorem lorem", author:"Duke", id: 2},
        {title: "The Visit", body: "lorem lorem", author:"Amaka", id: 3},
        {title: "Things Fall Apart", body: "lorem lorem", author:"Chinua Achebe", id: 4},
        {title: "The Joys of Motherhood", body: "lorem lorem", author:"Chimamanda Adiche", id: 5}
    ]);
    const [name, setName]= useState("mario");

    const handleDelete=(id) =>{
        const newBlogs= blogs.filter(blog=>blog.id !==id)
        setBlogs(newBlogs);
    }
    const readNowHandler=()=>{
        // const newRead= blogs.filter(blog=>blog.body)
        console.log("was read");
    }
    const bookHandler=()=>{
        console.log("was book");
    }
    

    //  useEffect(()=>{
    //     console.log("use effect ran");
    //     console.log(name)
    // },[name ]);

    

    // const switchHandle=()=>{
        
    //     setBlogs([
    //         {title: "Purple Flower", body: "lorem lorem", author: "Lehinde", id:1}
    //     ])
    // }
    return ( 
        <div className={classes.home}>
            <h2>HOMEPAGE</h2>
            {/* <button className={classes.button} onClick={switchHandle}>Switch Author</button> */}
            <BlogList blogs={blogs} title="All Blogs !"  
            handleDelete={handleDelete} 
            readNowHandler={readNowHandler}
            bookHandler={bookHandler}/>

            {/* <button onClick={()=> setName("Luigi")}>chnage name  </button> */}
            {/* <p>{name}</p> */}
            
        </div>
     );
}
 
export default Person;
