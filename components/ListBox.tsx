import Link from "next/link";


interface IListBox {
    pathName: string;
    listName: string;
}
const ListBox = ({pathName, listName}: IListBox) => {
    return (
        <>
           <Link href={`/${pathName}`}>
               <a className="aLinks">
                   <div>
                       {listName}
                   </div>
                </a>
           </Link> 
           <style jsx>{`
            .aLinks{
                
            }
               
        `}</style>
        </>
    )
}

export default ListBox;