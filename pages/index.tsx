// import * as d3 from "d3";
import Link from "next/link";
import Head from "next/head";
import ListBox from "../components/ListBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
    <Head>
      <title>HOME | DATA_VISUALIZATION</title>
    </Head>
    <main>
      <div className="listContainer">
        <ListBox pathName="barChart" listName="Bar" iconT={<FontAwesomeIcon icon={["fas", "chart-bar"]} />} />
        <ListBox pathName="pieChart" listName="Pie" iconT={<FontAwesomeIcon icon={["fas", "chart-pie"]} />} />
        <ListBox pathName="lineChart" listName="Line" iconT={<FontAwesomeIcon icon={["fas", "chart-line"]} />} />
        <ListBox pathName="areaChart" listName="Area" iconT={<FontAwesomeIcon icon={["fas", "chart-area"]} />} />
        <ListBox pathName="scatterChart" listName="Scatter" iconT={<FontAwesomeIcon icon={["fas", "award"]} />} />
        <ListBox pathName="pyramidChart" listName="Pyramid" iconT={<FontAwesomeIcon icon={["fas", "award"]} />} />
        <ListBox pathName="networkChart" listName="Network" iconT={<FontAwesomeIcon icon={["fas", "award"]} />} />
        <ListBox pathName="treeMapChart" listName="Tree Map" iconT={<FontAwesomeIcon icon={["fas", "award"]} />} />
        <ListBox pathName="chartMixChart" listName="Chart Mix" iconT={<FontAwesomeIcon icon={["fas", "award"]} />} />
       
        
      </div>
     
    </main>
    
    <style jsx>
      {`
      main{
        width: 100vw;
        background: white;

        display: flex;
        justify-content: center;
        align-items: flex-start;
      

      }
      .listContainer{
          width: 70vw;
          min-height: 100vh;
          padding-top: 160px;
          padding-bottom: 100px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          grid-gap: 20px;

      }
     
      

      

      

      @media screen and (max-width: 600px) {
         
         
      }
      
      
     `}
    </style>
    </>
  )
}

export default Home
