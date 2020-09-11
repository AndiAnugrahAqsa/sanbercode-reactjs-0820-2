import React, { useState, useEffect } from 'react'

import axios from 'axios'

const DaftarBuah = () => {

    const [dataBuah, setDataBuah] = useState(null)
    const [input, setInput] = useState({ name: "", price: "", weight: 0, id: null })

    useEffect(() => {
        if (dataBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                .then(res => {
                    setDataBuah(res.data)
                    console.log(res.data);
                })
        }
    }, [dataBuah])

    const handleInput = (event) => {
        var nameOfInput = event.target.name
        var value = event.target.value
        switch (nameOfInput) {
            case "name": {
                setInput({ ...input, name: value })


                break
            }
            case "price": {
                setInput({ ...input, price: value })
                break
            }
            case "weight": {
                setInput({ ...input, weight: value })
                break
            }
            default: {
                break
            }
        }

    }


    const submitForm = (event) => {
        event.preventDefault()
        if (input.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, { name: input.name, price: input.price, weight: input.weight })
                .then(res => {
                    var data = res.data
                    setDataBuah([...dataBuah, { id: data.id, name: data.name, price: data.price, weight: data.weight }])
                    setInput({ ...input, name: "", price: "", weight: 0 })
                })
        }
        else {
            axios.put(`http://backendexample.sanbercloud.com/api/contestants/${input.id}`)
                .then(res => {
                    var newDataBuah = dataBuah.map(x => {
                        if (x.id === input.id) {
                            x.name = input.name
                            x.price = input.price
                            x.weight = input.weight
                        }
                        return x
                    })
                    setDataBuah(newDataBuah)
                    setInput({ ...input, name: "", price: "", weight: 0 })
                })
        }

    }

    const editData = (event) => {
        var idBuah = parseInt(event.target.value)
        var buah = dataBuah.find(x => x.id === idBuah)
        setInput({ id: idBuah, name: buah.name, price: buah.price, weight: buah.weight })
    }

    const deleteData = (event) => {
        var idBuah = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
            .then(res => {
                var newDataBuah = dataBuah.filter(x => x.id !== idBuah)
                setDataBuah(newDataBuah)
            })
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
                <form onSubmit={submitForm}>
                    <table>Nama</table>
                    <input type="text" required value={input.name} name="name" onChange={handleInput}></input>
                    <table>Harga</table>
                    <input type="text" required value={input.price} name="price" onChange={handleInput}></input>
                    <table>Berat (gram)</table>
                    <input type="number" required value={input.weight} name="weight" onChange={handleInput}></input><br />
                    <button>Save</button>
                </form>
            </div >






        </>
    )
}

export default DaftarBuah