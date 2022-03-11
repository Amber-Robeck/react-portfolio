import "./intro.scss"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageCont">
                    <img src="assets/avatar.png" alt="" />

                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Nice to meet you! I'm</h2>
                    <h1>Amber Robeck</h1>
                    <h4>Freelance problem-solver</h4>
                </div>
                <div className="itemContainer">

                    <a href="#portfolio"><ArrowDownwardIcon /></a>

                </div>
            </div>
        </div>
    )
}
