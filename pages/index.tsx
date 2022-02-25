// import * as d3 from "d3";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <Link href="/about">
        <a className="infoBtn">
           <FontAwesomeIcon icon={["fas", "circle-question"]} />
        </a>
      </Link>
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

      .titleContainer{
        width: 100vw;
        height: 350px;
        background: #00b4d8;
        display: flex;
        padding: 60px;
      }
      .title{
          font-size: calc(3vw + 10px);
          text-transform: uppercase;
          font-weight: 600;
          color: #001219;
          align-self: center;
      }
      .infoBtn{
        position: absolute;
        bottom: 40px;
        right: 40px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 40px;

        &:hover{
          opacity: 0.4;
        }
        cursor: pointer;
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
          main{
              /* background: red; */
          }
         
      }
      
      
     `}
    </style>
    </>
  )
}

export default Home
