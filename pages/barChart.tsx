import Head from "next/head";
import { useEffect } from "react";
import BarChartA from "../components/barChartA";
import * as d3 from "d3";



const BarChartContainer = () => {
    const pathA = [0, 1];
    useEffect(() => {
        let scaleY = d3.scaleLinear().domain([0, 1]).range([0, 500]);
        const axiosY = d3.axisRight(scaleY);
        const svg = d3
        .select(".scrollContainer")
        // .style("background", "gray");

        const mainG = svg.append("g")

        mainG
        .append("path")
        .attr("d", "M0 0, M0 500")
        .attr("color", "red")
        .attr("fill", "red")
        .attr("stroke", "red")
        .attr("stroke-width", "20")

    },[])
    return (
        <>
        <Head>
            <title>Barchart</title>
        </Head>
        <div className="barLists">
            <svg className="scrollContainer">

            </svg>
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
                right: 20px;
                transform: translate(0%, -50%);
                width: 30px;
                height: 60vh;
                z-index: 2;
              
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