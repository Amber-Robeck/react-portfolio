import "./navigation.scss"
import { Email, Phone } from '@mui/icons-material';

export default function Navigation({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navigation " + (menuOpen && "active")} id="navigation active">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">.fullStackAmber</a>
                    <div className="itemContainer">
                        <Phone className="icon" />
                        <span>218-536-9087</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>fullStackAmber@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
