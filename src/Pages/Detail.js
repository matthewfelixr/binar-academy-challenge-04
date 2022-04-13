import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import style from './pages.module.css'
import SecondSearch from '../Components/SearchBar/SecondSearch'
import SecondHeader from '../Components/Header/SecondHeader'
import {BsGear} from'react-icons/bs'
import {RiGroupLine} from 'react-icons/ri'
import {FiCalendar} from 'react-icons/fi'

const Detail = () => {

  const param = useParams()
  const [car, setCar] = useState()
  useEffect(() => {
    axios.get(`https://rent-cars-api.herokuapp.com/admin/car/${param.id}`)
        .then(res => {
            setCar(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  }, [])

  return (
    <>

        <SecondHeader/>
        <SecondSearch />
        <div className={style.detail_body}>
        <div className={`row ${style.container}`}>
            <div className='col-7'>
                <div className={`col-12 ${style.about_card}`}>
                    <h6>Tentang Paket</h6>
                    <p>Include</p>
                    <ul>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk Tiket Wisata</li>
                        <li>Sudah termasuk pajak</li>
                    </ul>
                    <p>Exclude</p>
                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                    <h6>Refund, Reschedule, Overtime</h6>
                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                </div>
            </div>
            <div className='col-5'>
                {car &&
                    <div className={style.car_card}>
                        <img src={car.image} className={style.carImage} alt=''/>
                        <div className='card-body text-left'>
                            <h6 className='font-weight-bold'>{car.name}</h6>
                            <p className={style.cardText}>
                              <RiGroupLine/><span>  </span> 4 Orang <span>    </span>
                              <BsGear/><span> </span>Manual <span>    </span>
                              <FiCalendar/><span> </span>Tahun 2020 <span>    </span>
                            </p>
                            <div className='d-flex justify-content-between'>
                              <div>
                                <p>Total</p>
                              </div>
                                <div><p className='font-weight-bold'><b>Rp. {car.price} </b></p></div>
                            </div>
                        </div>
                        <button className='btn btn-success w-100'>
                            lanjutkan pembayaran
                        </button>
                    </div>
                }
            </div>
        </div>
        </div>
    </>
  )
}

export default Detail