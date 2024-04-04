import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Band from './Band'
import NavBar from './NavBar'
const Blog = ()=>{
    useEffect(()=>{
        console.log("scrolled")
        window.scrollTo({
            top:window.innerHeight*0.3,
            behavior:"smooth"
        })
    },[])
    return (
        <div className="blogs">
            <NavBar/>
            <Band/>
            <article className="article-low-padding paper">
                
                <ul className="blog-list">
                    <li className="header" style={{ color:"black"}}>
                        Blog
                    </li>
                    <li>
                        <div className="blog-title">
                            <Link to="/blog/Importance_of_shallow_copy_in_useState">Importance of shallow copy in useState</Link>
                        </div>
                    </li>
                    <li>
                        <div className="blog-title">
                            <Link to="/blog/implementation-of-combination-in-recursive-way">implementation of combination in recursive way</Link>
                        </div>
                    </li>
                    <li>
                    <div className="blog-title">
                            <Link to="/blog/menu-toggle-display-problem">menu toggle play</Link>
                        </div>
                    </li>
                    <li>
                        <div className="blog-title">
                            <Link to="/blog/wave-like-css-effect">wave-like css effect</Link>
                        </div>                   
                    </li>
                </ul>
            </article>
            
        </div>
    )
}
export default Blog