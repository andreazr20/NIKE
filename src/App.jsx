import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import img from './assets/Yellow Shoe.png';
import img2 from './assets/zapato2.png';
import imagen6 from './assets/toppng.png';
import imagen7 from './assets/toppng.png';
import PopUp1 from './components/PopUp1';
import BarraInicialZapato from './components/BarraInicialZapato';
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.min.js' 


const App = () => {
  const [estado, setEstado] = useState(false);
  const [precio, setPrecio] = useState();
  const [imagen, setImagen] = useState();

  return (
    <div>
    
           <BarraInicialZapato />
    
     
        <div className='flex gap-5 mt-10 ml-4 mr-4'>
          <Cards precio= {20.99} imagen={img} nombre={"Air Max 97"}
          setEstado={setEstado}
          setPrecio={setPrecio}
          setImagen={setImagen}
          />
          
          <Cards precio= {25.99} imagen={img2} nombre={"React Presto"}
          setEstado={setEstado}
          setPrecio={setPrecio}
          setImagen={setImagen}
          />
  

        </div>
        <div className='flex gap-5 mt-10 ml-4 mr-4 fixed bottom-20'>
          <Cards precio= {28.99} imagen={imagen6} nombre={"Air Max 40"}
          setEstado={setEstado}
          setPrecio={setPrecio}
          setImagen={setImagen}
          />
          <Cards precio= {24.99} imagen={imagen7} nombre={"Air Max 80"}
          setEstado={setEstado}
          setPrecio={setPrecio}
          setImagen={setImagen}
          />
          
          </div>


      <Navbar/>
      
      {estado && <PopUp1 setPrecio={precio} setEstado={setEstado} setImagen={imagen}/>}
      
    </div>
  )
}

export default App