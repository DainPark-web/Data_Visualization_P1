import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
    const {pathname : urlName} = useRouter();
    console.log(urlName);
    return (
        <>
        <div className="navContainer">
            <Link href="/">
                <a className="title">DATA VISUALISIERUNG</a>
            </Link>
            <Link href="/about">
                <a className="infoBtn">
                    <div className="infoBtnText">
                        About
                    </div>
                    <div className="infoBtnIcon">
                        <FontAwesomeIcon icon={["fas", "circle-question"]} />
                    </div>
                </a>
             </Link>
        </div>

        <style jsx>{`

            .navContainer{
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 80px;
                background: white;
                border-bottom: 0.5px solid royalblue;
                z-index: 1;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            
          

            }
            
            .title{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 25px;
                font-weight: 600;
                font-family: 'Montserrat', sans-serif;
                letter-spacing: -0.5px;
                color: royalblue;
            }

            .infoBtn{
                height: 100%;
                background: royalblue;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 50px;
                transition: 0.2s ease-in-out;

                &:hover{
                    opacity: 0.7;
                }
            }
            .infoBtnText{
                font-family: 'Montserrat', sans-serif;
                display: block;
                font-size: 16px;
                font-weight: 400;
                color: white;
                
            }
            .infoBtnIcon{
                display: none;
            }

            @media screen and (max-width: 600px) {
                .navContainer{
                position: fixed;
                height: 70px;
                background: white;
                 }
                .title{
                left: 20px;
                transform: translate(0%, -50%);
                font-size: 20px;
            }

            .infoBtn{
                background: white;
                padding: 0px;
                margin-right: 30px;
            }
            .infoBtnText{
                display: none;
            }
            .infoBtnIcon{
                font-size: 20px;
                display: block;
                color: royalblue;
            }
         
            }

        `}</style>
        </>
    )
}

export default Nav;