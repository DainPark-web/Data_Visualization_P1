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
        <nav>
            <Link href="/">
                <a className="backBtn">
                    <FontAwesomeIcon icon={["fas", "arrow-left"]} />
                </a>
            </Link>
            <div className="title">BAR CHART</div>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
        <div className="barLists">
            <div>
                <div>
                   <div>Bar Chart 01</div>
                </div>
                <BarChartA />
            </div>
        </div>
        <style jsx>
        {`
            nav{
                position: fixed;
                top:0;
                left:0;
                display: flex;
                width: 100vw;
                height: 80px;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 80px;
                padding: 0 50px;
                background: linear-gradient(0.25turn, #eeaeca, #94bbe9);
            }
            .title{
                font-size: 30px;
                font-weight: 600;
            }
            .barLists{
                margin-top: 80px;
                background-color: white;
            }
            .backBtn{
                width: 50px;
                height: 50px;
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;
            } 

        `}
        </style>
        </>
    )
}

export default BarChartContainer;