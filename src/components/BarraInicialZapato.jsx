import React from 'react'
import imagen from '../assets/Yellow Shoe.png'
import imagen2 from '../assets/zapato2.png'


const BarraInicialZapato = () => {
  return (
   
    <div >
 {/* BARRA SUPERIOR PAGINA INICIAL */}
    <div className='flex gap-96'>
    <svg className='border border-gray-500 h-10 w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>


    <svg className='border  border-gray-500  w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
    </div>



        <div id="carouselExampleCaptions" className="carousel slide mt-16 rounded-xl">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 4"></button>

  </div>
  <div className="carousel-inner bg-gray-200">
    <div className="carousel-item active">
      <img src={imagen} className="d-block w-60 ml-40" alt="..."/>
      <div className="carousel-caption d-md-block w-[150px]">
        <h1 className='text-black'><strong>25% Discount</strong></h1>
        <p className='text-black text-xs mt-2'>Some representative placeholder content for the first slide.</p>
        <button className='bg-black  rounded-xl p-2 text-xs mt-2'>Buy Now</button>
      </div>
    </div>
    <div className="carousel-item bg-gray-200">
      <img src={imagen2} class="d-block w-60 ml-40" alt="..."/>
      <div className="carousel-caption d-md-block w-[150px]">
      <h1 className='text-black'><strong>30% Discount</strong></h1>
        <p className='text-black text-xs mt-2'>Some representative placeholder content for the first slide.</p>
        <button className='bg-black  rounded-xl p-2 text-xs mt-2'>Buy Now</button>
      </div>
    </div>
    <div className="carousel-item bg-gray-200">
      <img src={imagen} class="d-block w-60 ml-40" alt="..."/>
      <div className="carousel-caption d-md-block w-[150px]">
      <h1 className='text-black'><strong>30% Discount</strong></h1>
        <p className='text-black text-xs mt-2'>Some representative placeholder content for the first slide.</p>
        <button className='bg-black  rounded-xl p-2 text-xs mt-2'>Buy Now</button>
      </div>
    </div>

    <div className="carousel-item">
      <img src={imagen2} class="d-block w-60 bg-gray-200 ml-40" alt="..."/>
      <div className="carousel-caption d-md-block w-[150px]">
      <h1 className='text-black'><strong>20% Discount</strong></h1>
        <p className='text-black text-xs mt-2'>Some representative placeholder content for the first slide.</p>
        <button className='bg-black  rounded-xl p-2 text-xs mt-2'>Buy Now</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      <div className='flex gap-8 ml-8 '> 
        <h3 className='text-slate-300 p-2'><strong>All</strong></h3>
        <h3 className='text-slate-300 p-2'><strong>Running</strong></h3>
        <h3 className='text-slate-300 p-2'><strong>Sneakers</strong></h3>
        <h3 className='text-slate-300 p-2'><strong>Formal</strong></h3>
      </div>
    </div>
  )
}

export default BarraInicialZapato