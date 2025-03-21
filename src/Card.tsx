import { useEffect } from 'react'
import './Card.css'

const Card = ({children})=>{
    useEffect(function(){

        const handeResize= ()=>{
            console.log('Resized')
        }

        window.addEventListener("resize",handeResize)

         return ()=>{
            window.removeEventListener("resize",handeResize)
            console.log('Unmounted and event listener removed')
        }

    },[])

   
    return <div className="container">
        {children}
    </div>
}

export default Card