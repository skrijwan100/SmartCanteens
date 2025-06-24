import React, { useEffect } from 'react'
import Addfoood from '../component/Addfoood'
import { handleError } from '../component/ErrorMessage'
export default function Addfood() {
    useEffect(()=>{
        handleError('not allow')
    })
    return (
        <div>
            <div className='w-full h-[85vh] flex items-center justify-center'>
                <Addfoood />
            </div>
        </div>
    )
}
