import * as d3 from "d3";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";


interface IScroll {
    itemAList: string[];
}
const Scrollbar = ({itemAList}:IScroll) => {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });


    return (
        <>
        <svg className="scrollContainer">
            <g>
                <motion.path style={{pathLength: pathLength}} d=" M 10,10 v 500" className="pathA" />
            </g>
        </svg>
        <style jsx>{`
        .scrollContainer{
                position: fixed;
                top: 50%;
                right: 10px;
                transform: translate(0%, -50%);
                width: 14px;
                height: 60vh;
                z-index: 2;
                display: block;

                @media screen and (max-width: 600px) {
                    display: none;
            }
            }
            .pathA{
                pathLength: ${pathLength};
                stroke: royalblue;
                stroke-width: 4;
                stroke-linecap: round;

            }
        `}</style>
        </>
    )
}

export default Scrollbar;