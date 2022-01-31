import logo from '../../images/ironhack-logo-xs.png';
import menu from '../../images/menu-top-xs.png'
import {Button} from "./Button"
import "./index.css"

function Header() {
    return (
        <header>

            <div className='logos'>

                <a href="home">
                <img src={logo} alt="Iron Hack Logo"/>
                </a>

                <a href="home">
                    <img src={menu} alt="MenuImage"/>
                </a>

            </div>

            <div className='texts'>

                <h1>
                    Say hello to <br />ReactJs
                </h1>

                <p>
                    You will learn how to use <br/> the most popular fronted library, <br /> and become a super Ninja developer.
                </p>

            </div>
            <Button />
            
        </header>
    );
}

export {Header}

