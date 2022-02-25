import Head from "next/head";
import { useEffect } from "react";
import BarChartA from "../../components/barChartA";
import * as d3 from "d3";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";



const BarChartContainer = () => {
    const itemAList = ["dain1", "dain2", "dain3", "dain4"];

    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
   

    const WIDTH = 400;
    useEffect(() => {

        const scaleY = d3.scaleLinear().domain([0, itemAList.length -1]).range([10, 510]);
        const svg = d3
        .select(".scrollContainer")
        .style("width", `${WIDTH}`)
        ;
        
        //circle
        svg
        .append("g")
        .classed("circleG", true)
        .selectAll("g")
        .data(itemAList)
        .join("g")
        .classed("itemcircleG", true)
        .append("circle")
        .attr("id", function(d, i) {return i})
        .attr("cx", `${WIDTH-20}`)
        .attr("cy", function(d,i) {return scaleY(i)})
        .attr("r", 4)
        .attr("fill", "white")
        .attr("stroke", "royalblue")
        .attr("stroke-width", "3")
        .on("mouseenter", (e) => {   

            d3
            .selectAll(".svgText")
            .filter(function(d,i){
       
                return Number(e.target.id) === i;
            })
            .transition()
            .attr("x", `${WIDTH-70}`)
            .style("opacity", 1)
            
        })
        .on("mouseleave", (e) => {    
            d3
            .selectAll(".svgText")
            .filter(function(d,i){
               
                return Number(e.target.id) === i;
            })
            .transition()
            .attr("x", `${WIDTH-60}`)
            .style("opacity", 0)
            
        })

        //text
        svg
        .append("g")
        .selectAll("text")
        .data(itemAList)
        .join("text")
        .classed("svgText", true)
        .attr("x", `${WIDTH-60}`)
        .attr("y",  function(d,i) {return scaleY(i) + 5})
        .text(function(d){return d})
        .style("pointer-events", "none")
        .style("opacity", 0);
        
        
    },[yRange]);
    
    return (
        <>
        <Head>
            <title>Barchart</title>
        </Head>
        <div className="barLists">
            <svg className="scrollContainer">
                <g>
                    <motion.path style={{pathLength: pathLength}} d= {`M ${WIDTH - 20},10 v 500`} className="pathA" />
                </g>
            </svg>
            <div className="itemT">
                <div className="itemNavT">
                   <div>Bar Chart</div>
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
                width: 34px;
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
                pathLength: ${pathLength};
                stroke: royalblue;
                stroke-width: 4;
                stroke-linecap: round;

            }
            .chartContainer{
                width: 100%;
                height: calc(100vh - 200px);
                display: flex;
                justify-content: center;
               

            }
            .itemT{
                width: 70vw;
               
                &:last-child{
                   
                }
                &:not(:last-child){
                    margin-bottom: 100px;


                }
            }
            .itemNavT{
                display: flex;
                justify-content: flex-start;
                div{
                    font-size: 45px;
                    font-weight: 600;
                }
            }
            .itemNav{
                display: flex;
                justify-content: flex-start;
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