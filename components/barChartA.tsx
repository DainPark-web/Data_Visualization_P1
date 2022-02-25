// BarChart 01
import * as d3 from "d3"
import { useEffect, useRef } from "react";

const BarChartA =() => {
    const svgContainer:any = useRef<HTMLDivElement>();

    const update = (data:any) => {
        const getDataName:any = data.map((e:any) => e.Name.length > 11 ? e.Name.slice(0, 11): e.Name);
        const getMan:number[] = data.map((e:any) => Number((e.Männer).replace(",", ".")));
        const getWoman:any = data.map((e:any) => Number((e.Frauen).replace(",", ".")));
        console.log(getMan.sort((a,b) => b - a));
        const margin = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
        }
        const WIDTH = svgContainer.current.clientWidth * (svgContainer.current.clientWidth > 600 ? 0.7 : 1);
        const HEIGHT = svgContainer.current.clientHeight *(svgContainer.current.clientWidth > 600 ? 0.7 : 1);
        // console.log(data);

        const svg = d3
        .select(svgContainer.current)
        .append("svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        // .style("background", "orange");

        const mainContainer = svg
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`)

        //🐲axis
        //yAxis 
        const scaleY:any = d3.scaleBand().domain([...getDataName]).range([0, HEIGHT - (margin.left + margin.right) * 2]);
        // const scaleYY = d3.scaleLinear().domain([0, getDataName.length - 1]).range([0, HEIGHT - (margin.left + margin.right) * 2]);
        //xAxis
        const scaleX:any = d3.scaleLinear().domain([0, getMan.sort((a,b) => b - a)[0]]).range([0, WIDTH - (margin.left + margin.right) * 4]);

        let axisY = d3.axisLeft(scaleY)
        .tickPadding(10)
        .tickSize(10);

        let axisX = d3.axisBottom(scaleX)
        .tickPadding(10)
        .tickSize(10);

        const axiosXContainer = mainContainer
        .append("g")
        .attr("transform", `translate(${margin.left * 4}, ${margin.top})`)
        .style("font-size", "10px")
        .style("font-weight", "600")
        const axiosYContainer = mainContainer
        .append("g")
        .attr("transform", `translate(${margin.left * 4}, ${HEIGHT - margin.top * 3})`)
        .style("font-size", "10px")
        .style("font-weight", "600")

        axiosXContainer.call(axisY)
        axiosYContainer.call(axisX)

        const yM = 4;
        const barHiehgt = 5;
        //bar
        //Man
        mainContainer
        .append("g")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", margin.left * 4)
        .attr("y", function(d, i){ return scaleY(getDataName[i]) + scaleY.bandwidth() + yM})
        .attr("width", function(d,i){return scaleX(getMan[i])})
        .attr("height", barHiehgt)
        .attr("fill", "#457b9d")

        mainContainer
        .append("g")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", margin.left * 4)
        .attr("y", function(d, i){ return scaleY(getDataName[i]) + scaleY.bandwidth() + yM + barHiehgt})
        .attr("width", function(d,i){return scaleX(getWoman[i])})
        .attr("height", barHiehgt)
        .attr("fill", "#e63946")

    }
    
    useEffect(() => {        
        d3.csv("https://gist.githubusercontent.com/DainPark-web/10dd0a710d0c446ae1a0bbad265cbed6/raw/barChartA.csv")
        .then((data) => update(data));
        

    },[]);
    return (
        <>
        <div ref={svgContainer} className="svgContainer">
        </div>
        <style jsx>{`
            .svgContainer{
                width: 1200px;
                height: 800px;
                display: flex;
                justify-content: center;
                align-items: flex-start;
               
            }
        `}</style>
        </>
    )
}

export default BarChartA;