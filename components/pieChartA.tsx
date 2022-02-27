import { useEffect, useRef } from "react";
import * as d3 from "d3";


const PieChartA = () => {
    const containerRef:any = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const data = [10, 40, 30, 142, 35, 96, 43, 21, 67, 53];
        // const data = [
        //     {label: "a", value: 40},
        //     {label: "b", value: 20},
        //     {label: "c", value: 10},
        //     {label: "d", value: 60},
        //     {label: "e", value: 70},
        //     {label: "f", value: 80},
        //     {label: "g", value: 90},
        // ];
        
        const pieGenerator = d3.pie();
        const arcData = pieGenerator(data.sort((a,b) => a - b));
        console.log(arcData);

        const WIDTH = containerRef.current.clientWidth;
        const HEIGHT = containerRef.current.clientHeight;

        const rSize = HEIGHT/2;
        const rW = HEIGHT/2.5;
        const arcGenerator:any = d3
        .arc()
        .innerRadius(rSize - rW)
        .outerRadius(rSize)
        .padAngle(.02)
        .padRadius(100)
        .cornerRadius(4);

        const svg = d3
        .select(".svgContainer")
        .append("svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        
        const mainG = svg
        .append("g")
        .attr("transform", `translate(${WIDTH/2},${HEIGHT/2})`);

        mainG
        .selectAll("path")
        .data(arcData)
        .join("path")
        .attr("d", arcGenerator)
        .attr("fill", "royalblue");

    },[])


    return (
        <>
        <div ref={containerRef} className="svgContainer">
        </div>
        <style jsx>{`
            .svgContainer{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: flex-start;
         
               
            }
        `}</style>
        </>
    )
}

export default PieChartA;