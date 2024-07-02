import React from 'react'


const Cards = ({ imagen, nombre, precio, setEstado, setPrecio, setImagen }) => {
    return (
        <div className='bg-gray-200 border w-fit justify-center rounded-xl h-56' 
        onClick={() =>{
        setEstado(true),
        setPrecio(precio),
        setImagen(imagen)
        }} >
            
            <img className='w-[200px]' src={imagen} alt="" />
            <div className='flex justify-around items-center'>
                <div>
                    <h3>{nombre}</h3>
                    <h4>${precio}</h4>
                </div>
                <div>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default Cards