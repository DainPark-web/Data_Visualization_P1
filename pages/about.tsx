import Head from "next/head";
import Link from "next/link";
const About = () => {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
        <div className="container">
            <div className="mainContainer">
                <h2>
                    Über das Projekt
                </h2>
                <p>
                    Das Projekt ist für Datei Visualisierung.
                    Besonders wollte ich verschiedene Charts probieren. 
                    Dafür wollte ich auch Datei vorbereiten und analysieren.
                    Wenn Sie sich für das Code interessieren, dann können Sie in meinem <Link href="https://github.com/DainPark-web/Data_Visualization_P1"><a className="githubT">Github</a></Link> sehen. 
                </p>
            </div>
        </div>
        <style jsx>{`
            .container{
                width: 100vw;
                height: 100vh;
                background: white;
                padding: 0 20px;
                padding-top: 100px;
                display: flex;
                justify-content: center;
            }

            .mainContainer{
                width: 1024px;
                
            }
            p{
                font-size: 20px;
            }
            .githubT{
                color: royalblue;
                text-decoration: underline;
            }

            @media screen and (max-width: 600px) {
                .container{
                    padding: 0 20px;
                    padding-top: 100px;
            }
                .mainContainer{
                 width: 100%;
             
            }
      }
            `}</style>
        </>
    )
}

export default About;