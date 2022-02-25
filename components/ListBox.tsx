import Link from "next/link";


interface IListBox {
    pathName: string;
    listName: string;
    iconT: any;
    
}
const ListBox = ({pathName, listName, iconT}: IListBox) => {
    return (
        <>
           <Link href={`/${pathName}`}>
               <a className="aLinks">
                   <div className="icon">
                       {iconT}
                   </div>
                   <div className="title">
                       {listName}
                   </div>
                </a>
           </Link> 
           <style jsx>{`
            .aLinks{
                background: white;
                border: 1px solid royalblue;
                border-radius: 20px;
                max-height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: 0.2s ease-in-out;
                &:hover{
                    background: royalblue;
                }

                &:hover .title {
                    color: white;
                }
                &:hover .icon {
                    color: white;
                }
            }
            .icon{
                transition: 0.2s ease-in-out;
                font-size: 50px;
                margin-bottom: 20px;
            }

            .title{
                transition: 0.2s ease-in-out;
                font-size: 20px;
                font-weight: 600;
                font-family: 'Montserrat', sans-serif;
            }
               
        `}</style>
        </>
    )
}

export default ListBox;