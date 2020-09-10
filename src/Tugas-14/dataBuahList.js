import React, { useContext } from 'react'
import { DataBuahContext } from "./dataBuahContext"
import axios from "axios"

const DataBuahList = () => {
    const [dataBuah, setDataBuah, , setInput] = useContext(DataBuahContext)

    const deleteData = (event) => {
        // console.log(input);
        var idBuah = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
            .then(res => {
                var newDataBuah = dataBuah.filter(x => x.id !== idBuah)
                setDataBuah(newDataBuah)
            })
    }
    const editData = (event) => {
        var idBuah = parseInt(event.target.value)
        var buah = dataBuah.find(x => x.id === idBuah)
        setInput({ id: idBuah, name: buah.name, price: buah.price, weight: buah.weight })
    }



    return (
        <>
            <div class="container container-table-harga">
                <h1>Tabel Harga Buah</h1>
                <table class="table-harga">
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>

                    {dataBuah !== null && dataBuah.map((item) => {
                        return (
                            <tr class="tr-table-harga">
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.weight / 1000} kg</td>
                                <td>
                                    <button onClick={editData} value={item.id}>Edit</button>
                                    <button onClick={deleteData} value={item.id}>Delete</button>
                                </td>

                            </tr>
                        );
                    })}
                </table>
            </div>
        </>


    );


}

export default DataBuahList