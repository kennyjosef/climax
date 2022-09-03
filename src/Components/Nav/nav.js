import { Link } from 'react-router-dom';
import classes from './nav.module.css';
const Nav = () => {
    return (
        <nav className={classes.header}>
            <div>
            <h2> Climax Global Tech</h2>
            </div>

            <div className={classes.nav}>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/create"> New Read</Link>
                    <Link to="/">Books</Link>
                    <Link to="/about" style={{
                        color:'black',
                        backgroundColor:"pink",
                        borderRadius:"8px"
                    }}>About Us </Link>
                </ul>
            </div> 
        
        </nav>
     );
}
 
export default Nav;