import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import BarChartA from "../components/barChartA";



const BarChartContainer = () => {
    return (
        <>
        <Head>
            <title>Barchart</title>
        </Head>
        <div className="barLists">
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