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
        <style jsx>
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
                width: 70%;
                &:last-child{
                   
                }
                &:not(:last-child){
                    margin-bottom: 100px;


                }
            }

            .chartContainer{
                width: 100vw;
                height: 100vh;
                display: flex;
                justify-content: center;
                
            }
            .itemNav{
                display: flex;
                padding: 0 100px;
                div{
                    font-size: 25px;
                    font-weight: 600;
                }
            }

        `}
        </style>
        </>
    )
}

export default BarChartContainer;