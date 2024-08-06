import './Navbar.css'
import './../colors.css'

export default function Navbar(){
    return(
        <div className="navbar">
            <a className="logo" href="/"><b>OG PIC POST</b></a>
            <div className="navlinks">
                <a className="link blocky" href="/">New</a>
            </div>
        </div>
    );
}