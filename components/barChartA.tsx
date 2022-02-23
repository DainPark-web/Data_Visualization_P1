// BarChart 01
import * as d3 from "d3"
import { useEffect, useRef } from "react";

const BarChartA =() => {
    const svgContainer:any = useRef<HTMLDivElement>();

   
    
    useEffect(() => {
        const WIDTH = svgContainer.current.clientWidth;
        const HEIGHT = svgContainer.current.clientHeight;
        
        const margin = {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
        }
        
        const svg = d3
        .select("svg")
        .style("background", "orange");



    },[])
    return (
        <>
        <div ref={svgContainer} className="svgContainer">
            <svg>

            </svg>
        </div>
        <style jsx>{`
            .svgContainer{
                width: 100vw;
                height: 100vh;
                background: orange;
            }
        `}</style>
        </>
    )
}

export default BarChartA;