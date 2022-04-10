import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <div>
            <div className="container-fluid bg-hero bg-hero-banner ">
        <div className="row ">
            <div className=" col-md-5 offset-md-1 my-auto ">
                <h1 className='pb-5 ps-4'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p className="mt-2 ps-4 ">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>

            </div>
            <div className="col-md-6 ml-auto ">
                <img src="images/img-hero.png " className="img-fluid content-2 " alt=" "/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header