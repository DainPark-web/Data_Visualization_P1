import Head from "next/head";
import { useEffect } from "react";
import BarChartA from "../components/barChartA";
import * as d3 from "d3";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";


const BarChartContainer = () => {
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    console.log(pathLength);
    const test = "royalblue";
    useEffect(() => {
        
       

    },[yRange])
    return (
        <>
        <Head>
            <title>Barchart</title>
        </Head>
        <div className="barLists">
            <svg className="scrollContainer">
                <g>
                    <motion.path style={{pathLength}} d=" M 10,10 v 500" className="pathA" />
                </g>
            </svg>
            <div className="item">
                <div className="itemNav">
                   <div>Bar Chart 01</div>
                </div>
                <div className="chartContainer">
                    <BarChartA />
                </div>
            </div>
            <div className="item">
                <div className="itemNav">
                   <div>Bar Chart 01</div>
                </div>
                <div className="chartContainer">
                    <BarChartA />
                </div>
            </div>
            <div className="item">
                <div className="itemNav">
                   <div>Bar Chart 01</div>
                </div>
                <div className="chartContainer">
                    <BarChartA />
                </div>
            </div>
            <div className="item">
                <div className="itemNav">
                   <div>Bar Chart 01</div>
                </div>
                <div className="chartContainer">
                    <BarChartA />
                </div>
            </div>
           
        </div>
        <style jsx global>
        {`
            .barLists{
                padding-top:130px;
                background-color: white;
                width: 100vw;
                min-height: 150vh;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
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

            .item{
                width: 70vw;
                height: 100vh;
                &:last-child{
                   
                }
                &:not(:last-child){
                    margin-bottom: 100px;


                }
            }
            .pathA{
                stroke: ${test};
                stroke-width: 4;
                stroke-linecap: round;

            }
            .chartContainer{
                width: 100%;
                height: calc(100vh - 200px);
                display: flex;
                justify-content: center;
               

            }
            .itemNav{
                display: flex;
                justify-content: center;
                div{
                    font-size: 25px;
                    font-weight: 600;
                }
            }

            @media screen and (max-width: 600px) {
                .item{
                width: 98vw;
                
            }
      }

        `}
        </style>
        </>
    )
}

export default BarChartContainer;