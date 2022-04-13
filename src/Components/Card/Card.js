import React from 'react'
import './card.css'
import {BsGear} from'react-icons/bs'
import {RiGroupLine} from 'react-icons/ri'
import {FiCalendar} from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Card = (props) => {
  return (
    <div className='car-card m-0 me-4 mb-4'>
                    <img src={props.image} className="car-pict" alt=" "/>
                    <div className='car-card-desc'>
                        <p>{props.name}</p>
                        <h4 className='card-harga'><b>Rp {props.price} / Hari</b></h4>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <p><RiGroupLine/><span>  </span> 4 Orang</p>
                        <p><BsGear/><span> </span>Manual</p>
                        <p><FiCalendar/><span> </span>Tahun 2020</p>
                        <Link to={`/detail/${props.id}`}><div className='btn btn-success d-block mx-2 bttn-select text-decoration-none'>Pilih Mobil</div></Link>
                    </div>
                    
    </div>
  )
}


export default Card