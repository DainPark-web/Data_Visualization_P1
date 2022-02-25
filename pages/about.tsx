import Head from "next/head";
const About = () => {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
        <div className="container">
            <div className="mainContainer">
                About me
            </div>
        </div>
        <style jsx>{`
            .container{
                width: 100vw;
                height: 100vh;
                background: white;
                padding-top: 100px;
                display: flex;
                justify-content: center;
            }

            .mainContainer{
                width: 1024px;
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