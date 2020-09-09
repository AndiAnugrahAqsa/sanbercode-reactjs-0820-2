import React from "react";
import "../App.css";


// JSON.parse(dataHargaBuah)

class Tugas12 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataHargaBuah:
                [
                    { nama: "Semangka", harga: 10000, berat: 1000 },
                    { nama: "Anggur", harga: 40000, berat: 500 },
                    { nama: "Strawberry", harga: 30000, berat: 400 },
                    { nama: "Jeruk", harga: 30000, berat: 1000 },
                    { nama: "Mangga", harga: 30000, berat: 500 },
                ]
            ,
            inputNama: "",
            inputHarga: "",
            inputBerat: 0,
            indexOfForm: -1
        }
    }




    editData = (event) => {
        let index = event.target.value
        let dataBuah = this.state.dataHargaBuah[index]
        this.setState({
            inputNama: dataBuah.nama,
            inputHarga: dataBuah.harga,
            inputBerat: dataBuah.berat,
            indexOfForm: index
        })

    }


    deleteDaftar = (event) => {
        var index = event.target.value
        var newDaftar = this.state.dataHargaBuah
        newDaftar.splice(index, 1)
        this.setState({
            dataHargaBuah: [...newDaftar],
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            index: -1
        })
    }
    submitFrom = (event) => {
        event.preventDefault()
        var nama = this.state.inputNama
        var harga = this.state.inputHarga.toString()
        var berat = this.state.inputBerat



        let newDaftarBuah = this.state.dataHargaBuah
        let index = this.state.indexOfForm



        if (index === -1) {
            newDaftarBuah = [...newDaftarBuah, { nama, harga, berat }]
        } else {
            newDaftarBuah[index] = { nama, harga, berat }
        }

        this.setState({
            dataHargaBuah: newDaftarBuah,
            inputNama: "",
            inputHarga: "",
            inputBerat: 0
        })


    }


    changeInputData = (event) => {
        var nameOfInput = event.target.name

        switch (nameOfInput) {
            case "nama": {
                this.setState({
                    inputNama: event.target.value
                })
                break
            }
            case "harga": {
                this.setState({
                    inputHarga: event.target.value
                })
                break
            }
            case "berat": {
                this.setState({
                    inputBerat: event.target.value
                })
                break
            }
            default: {
                break
            }

        }
        // this.setState({

        // })
    }



    render() {
        return (
            <div class="container container-table-harga" >
                <h1>Tabel Harga Buah</h1>
                <table class="table-harga">
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>

                    {this.state.dataHargaBuah.map((item, index) => {
                        return (
                            <tr class="tr-table-harga">
                                <td>{item.nama}</td>
                                <td>{item.harga}</td>
                                <td>{item.berat / 1000} kg</td>
                                <td>
                                    <button onClick={this.editData} value={index}>Edit</button>
                                    <button onClick={this.deleteDaftar} value={index}>Delete</button>
                                </td>

                            </tr>
                        );
                    })}
                </table>
                <form onSubmit={this.submitFrom}>
                    <table>Nama</table>
                    <input type="text" required value={this.state.inputNama} name="nama" onChange={this.changeInputData}></input>
                    <table>Harga</table>
                    <input type="text" required value={this.state.inputHarga} name="harga" onChange={this.changeInputData}></input>
                    <table>Berat (gram)</table>
                    <input type="number" required value={this.state.inputBerat} name="berat" onChange={this.changeInputData}></input><br />
                    <button>Save</button>
                </form>
            </div >
        );
    }
}

export default Tugas12;