import React, { useContext } from 'react'
import { DataBuahContext } from "./dataBuahContext"
import axios from "axios"

const DataBuahForm = () => {
    const [dataBuah, setDataBuah, input, setInput] = useContext(DataBuahContext)


    const handleInput = (event) => {
        var nameOfInput = event.target.name
        var value = event.target.value
        console.log(input);
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
        console.log(input);
        if (input.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, { name: input.name, price: input.price, weight: input.weight })
                .then(res => {
                    var data = res.data
                    setDataBuah([...dataBuah, { id: data.id, name: data.name, price: data.price, weight: data.weight }])
                    setInput({ ...input, name: "", price: "", weight: 0 })
                })
        }
        else {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`)
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



    return (
        <div class="container container-table-harga">
            <form onSubmit={submitForm}>
                <table>Nama</table>
                <input type="text" required value={input.name} name="name" onChange={handleInput}></input>
                <table>Harga</table>
                <input type="text" required value={input.price} name="price" onChange={handleInput}></input>
                <table>Berat (gram)</table>
                <input type="number" required value={input.weight} name="weight" onChange={handleInput}></input><br />
                <button>Save</button>
            </form>
        </div>
    )

}
export default DataBuahForm