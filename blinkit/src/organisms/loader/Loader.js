import React from 'react'
import  spinner  from '../../images/Spinner-1s-200px.gif';

export default function Loader() {
    return (
        <div className="flex justify-center">

            <img src={spinner} alt="loader"/>
        </div>
    )
}
