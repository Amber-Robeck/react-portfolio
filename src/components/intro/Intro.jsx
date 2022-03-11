import "./intro.scss"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageCont">
                    <img src="assets/avatar.png" alt="" />
                    <motion.div
                        variants={scaleVariants}
                        whileInView={scaleVariants.whileInView}
                        className="app__header-circles"
                    >
                        {[images.node, images.react, images.sass].map((circle, index) => (
                            <div className="circle-cmp app__flex" key={`circle-${index}`}>
                                <img src={circle} alt="profile_bg" />
                            </div>
                        ))}
                    </motion.div>
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
