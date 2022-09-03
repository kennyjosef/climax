import classes from "./footer.module.css";
import Logo1 from "../../assesst/tweet.png";
import Logo2 from "../../assesst/fb.png";
import Logo3 from "../../assesst/linked.png";
import { Link } from "react-router-dom";
const Footer = () => {

    return ( 
        <div className={classes.footer}> 
            <div className={classes.mojo}>
            <h4>Join our mailing list</h4>
            <p>Be the first to know about the newest Book and best deal on Climax Tech</p>
            <form>
                <input  className={classes.form} type="text" id="email" placeholder="Input Email" required/>
                <input className={classes.submit} type="submit" value="→"></input>
                <p>Emails subject to <span>privacy policy</span></p>
            </form>
            
            </div>

            <div className={classes.social}>
                <h3>Follow us on</h3>
                <div className={classes.fb}>
                 <Link to=" "><img src={Logo1} className={classes.foot} alt="pic"/></Link>
                 <Link to=" "><img src={Logo2} className={classes.foot} alt="pic"/></Link>
                 <Link to=" "><img src={Logo3} className={classes.foot} alt="pic"/></Link>
                 </div>
            </div>
            <div className={classes.power}>
                <p>Ready to become a partner?</p>
                <button className={classes.enroll} >Enroll as Partner</button>
                <p>Want to be a reader?</p>
                <button className={classes.enroll} >Click Me</button>
                 
                
            </div>
        </div>
     );
}
 
export default Footer;