import "./Home.css";
import { Link } from 'react-router-dom';

function Home (){
    return(
        <div className="hero" >
            <div className="hero-left" >
                <p>Hey, i am Olumide</p>
                <h1><span>Front</span>end <br /> Developer </h1>
                <p>I am a frontend website developer based in Nigeria.  I will help you <br />
                   to build beautiful websites your users will love. </p>
                <div>
                    <Link to= "/contact" >
                        <button id="left">GET IN TOUCH</button>
                    </Link>  
                    <Link to= "/projects" >
                        <button id="right">BROWSE PROJECTS</button>
                    </Link>  
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-img">
                    <div className="img-div"></div>
                </div>
            </div>
        </div>
    );
}
export default Home;