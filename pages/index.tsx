// import * as d3 from "d3";
import Link from "next/link";
import Head from "next/head";
import ListBox from "../components/ListBox";

const Home = () => {
  return (
    <>
    <Head>
      <title>HOME | DATA_VISUALIZATION</title>
    </Head>
    <main>
      <div className="listContainer">
        <ListBox pathName="/barChart" listName="BarChart" />
      </div>
     
    </main>
    
    <style jsx>
      {`
      main{
        width: 100vw;
        height: 100vh;
        background: white;

        display: flex;
        justify-content: center;
        align-items: flex-start;
      

      }
      .listContainer{
          width: 70vw;
          min-height: 100vh;
          padding-top: 80px;
      
          display: grid;
          grid-template-columns: repeat(4, 1fr);
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
