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
                <BarChartA />
            </div>
            <div className="item">
                <div className="itemNav">
                   <div>Bar Chart 01</div>
                </div>
                <BarChartA />
            </div>
        </div>
        <style jsx>
        {`
            .barLists{
                padding-top:130px;
                background-color: white;
                width: 100vw;
                min-height: 150vh;
            }
            .backBtn{
                width: 50px;
                height: 50px;
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;
            } 

            .item{
                &:last-child{
                    padding-bottom: 100px;
                }
                &:not(:last-child){
                    margin-bottom: 200px;


                }
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