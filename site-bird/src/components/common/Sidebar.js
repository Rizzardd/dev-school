import { useState } from "react"
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        {!isOpen ? 
            (
            <button className="fixed  right-4 " onClick={()=> setIsOpen(!isOpen)}>
                <IoMdMenu className="w-6 h-6"/>
            </button>
            ): 

            (
                <button className="fixed  right-4 z-10" onClick={()=> setIsOpen(!isOpen)}>
                <IoMdClose className="w-6 h-6"/>
            </button>
            )
        }
            <div className={`right-0 top-0 fixed bg-white w-[75vw] h-full p-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                
            </div> 
        </>
    )
}