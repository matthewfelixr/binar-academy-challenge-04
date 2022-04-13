import React from 'react'
import './searchbar.css'
import { Link } from 'react-router-dom'

const SecondSearch = (props) => {
  return (
    <div className="row justify-content-center">
        <div className="row rounded-2 py-3 shadow-sm bg-white position-absolute SearchBar">
            {/* <h6 className="fw-bold px-4">{!props.cari ? "Pencarianmu" : ""}</h6> */}
            <h6 className="fw-bold px-4">Pencarianmu</h6>
            <div className="d-flex col-11 col-12">
                <div className="col-3 px-2 dropDown">
                    <div className="my-3">
                    <label className="form-label fs-6">Tipe Driver</label>
                    <select id="InputSelect" className="form-select">
                        <option selected>Pilih Tpe Driver</option>
                        <option>Dengan Sopir</option>
                        <option>Tanpa Sopir (lepas kunci)</option> 
                    </select>
                    </div>
                </div>
                
                <div className="col-3 px-2 dropDown">
                    <div className="my-3">
                        <label className="form-label">Tanggal</label>
                        <input type="date" className="form-control"/>
                    </div>
                </div>

                <div className="col-2 px-2 dropDown">
                    <div className="my-3">
                        <label className="form-label">Waktu jemput/ambil</label>
                        <input type="time" className="form-control"  />
                    </div>
                </div>
                <div className="col-3 px-2 dropDown">
                    <div className="my-3">
                        <label className="form-label">Jumlah penumpang (opsional)</label>
                        <input type="number" className="form-control" />
                    </div>
                </div>
                
                <div className="cari col my-5  text-center">
                <Link to={"/result"}><button className="btn bg-primary">Edit</button></Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SecondSearch