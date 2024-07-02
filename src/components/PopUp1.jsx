import React, { useState } from 'react'
import zapato from '../assets/Yellow Shoe.png'
import nike from '../assets/NIKE.png'
import MenuFlo from './MenuFlo'
import caja from '../assets/caja.png'

const PopUp1 = ({ setEstado, setPrecio, setImagen }) => {
    const [colorFilter, setColorFilter] = useState();

    // FUNCIONES PARA CAMBIAR COLOR DE ZAPATOS
    const azul = () => {
        setColorFilter('hue-rotate(200edeg)')
    }
    const rojo = () => {
        setColorFilter('hue-rotate(350deg)')
    }


    // BARRA FLOTANDO EN LA PARTE SUPERIOR DEL POPUP
    return (
        <div className=' absolute bg-gray-200 w-screen h-screen top-0 z-20'>
            <MenuFlo setEstado={setEstado} />
            <div>

                {/* BARRA MARGEN IZQUIERDO TALLAS DE ZAPATOS */}
                <div className='absolute ml-5'>
                    <button className='border border-gray-500 w-fit p-3 rounded-md mb-3' onClick={setEstado}><strong>Cerrar</strong></button>
                    <ul className='mt-10'>
                        <li><h2 className='mb-5 ml-3'><strong>Size</strong></h2></li>
                        <li className='border border-gray-500 w-fit p-3 rounded-md'>UK 6</li>
                        <li className='border border-gray-500 w-fit p-3 rounded-md'>UK 7</li>
                        <li className='border border-gray-500 w-fit p-3 rounded-md'>UK 8</li>
                        <li className='border border-gray-500 w-fit p-3 rounded-md'>UK 9</li>
                    </ul>
                </div>

                {/* BARRA CAMBIO DE COLOR MARGEN DERECHO*/}
                <div className='absolute mt-32' >
                    <ul className='ml-96'>
                        <li><svg className='w-10 mb-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" /></svg></li>
                        <li><h3><strong>Color</strong></h3></li>
                        <li onClick={rojo} className='p-2 border border-gray-400 rounded-md w-fit'>
                            <div className='bg-red-800 w-2 p-2'></div>
                        </li>

                        <li onClick={azul} className='p-2 border border-gray-400 w-fit rounded-md '>
                            <div className='bg-blue-950 w-2 p-2'></div>
                        </li>
                    </ul>
                </div>

                {/* IMAGEN ZAPATO Y FONDO LOGO NIKE */}
                <div className='relative'>
                    <img className='mt-14 absolute w-[500px]' src={setImagen} alt="" style={{ filter: colorFilter }} />
                    <img className=' ml-40 mt-20 w-36' src={nike} alt="" />
                    <h2 className='ml-5'><strong>${setPrecio}</strong></h2>
                    <h3 className='text-rose-600 ml-5'>10% Off</h3>
                </div>

                {/* DIV CAJA ROJA PARA SWIPPE DOWN */}
                <div>
                    <h3 className='ml-40 mb-2'><strong>Swipe down to add</strong></h3>
                    <div className='bg-white rounded-full w-fit p-4 ml-48 absolute'>
                        <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" /></svg>
                        <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" /></svg>
                    </div>

                    <img className='ml-20 w-72' src={caja} alt="" />
                </div>


            </div>
        </div>
    )
}

export default PopUp1