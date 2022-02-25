// import * as d3 from "d3";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  return (
    <>
    <Head>
      <title>HOME | DATA_VISUALIZATION</title>
    </Head>
    <main>
      <div className="listContainer">
        <Link href="/barChart">
          <a className="aLinks" >Bar Chart</a>
        </Link>
        <Link href="/about">
          <a className="aLinks" >Pie Chart</a>
        </Link>
      </div>
     
    </main>
    
    <style jsx>
      {`
      main{
        width: 100vw;
        height: 100vh;
        background: white;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        position: relative;

        flex-direction: column;

      }

     
      

      .listContainer{
          position: absolute;
          bottom: 50px;
          left: 50px;
          width: 70vw;
      
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 20px;
      }

      .aLinks{
          padding: 10px 20px;
          background: none;
          border: 2px solid black;
          border-radius: 5px;
          text-align: center;
          text-decoration: none;
          color: black;
          font-size: 20px;
          font-weight: 500;
          transition: 0.3s ease-in-out;   
          &:hover{
          color: white;
          background-color: black;
      }
      }

      

      @media screen and (max-width: 600px) {
         
         
      }
      
      
     `}
    </style>
    </>
  )
}

export default Home
