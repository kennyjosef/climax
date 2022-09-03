import classes from './more.module.css';
import Logo3 from '../../assesst/client.jpeg';
import Logo4 from '../../assesst/team.JPG';
import Logo5 from '../../assesst/suppot.jpeg';
const More = () => {
    return ( 
        <div className={classes.about}>
            <div className={classes.client}>
                <div className={classes.item}>
                    <img src={Logo3} className={classes.pic} alt="pic"/>

                </div>
                <div className={classes.item}>
                    <h3>What our Readers say</h3>
                    <p>"The Climax Tech is international, their books and novels are top notch and lovely"
                        Evelin Gatewood.
                    </p>
                    <p>"This is the best place to get all you need about books,I mean books" Susan Milton</p>

                </div>

            </div>
            <div className={classes.client}>
                <div className={classes.item}>
                    <h3>Meet our Team Today</h3>
                    <p>
                        Our team  is superactive and everyone is up to task.
                        Everyone is passionate about Climax Blog and always wanting to give the best.
                        We at Climax work to serve you better.
                    </p>

                </div>
                <div className={classes.item}>
                <img src={Logo4} className={classes.pic} alt="pic"/>
                    
                </div>

            </div>
            <div className={classes.client}>
                <div  className={classes.item}>
                <img src={Logo5} className={classes.pic} alt="pic"/>

                </div>
                <div className={classes.item}>
                    <h3>Support Climx Blog Now</h3>
                    <p>
                        The best way to support Climax Blog is to support our shelves by donation of book material,
                        eBook to run our eService. Support can also be in cash to upgrade our productivity.
                        We do encourage that you visit our Blog everyday and get a book from us.
                    </p>
                    
                </div>

            </div>
            
        </div>
     );
}
 
export default More;