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
            inputBerat: ""
            ,
            index: -1
        }
    }



    submitFrom = (event) => {
        event.preventDefault()

        this.setState({
            daftarHargaBuah: [...this.state.dataHargaBuah, this.state.inputNama]
        })

        console.log(this.state.dataHargaBuah);
        console.log(this.state.inputData);



    }

    deleteDaftar(event) {
        var index = event.target.value
        var newDaftar = this.state.daftarHargaBuah
        newDaftar.splice(index, 1)
        this.setState({
            daftarHargaBuah: [...newDaftar],
            inputNama: "",
            inputHarga: "",
            inputBerat: "",
            index: -1
        })
    }


    changeInputNama = (event) => {
        var value = event.target.value
        this.setState({
            inputNama: value
        })
    }

    changeInputHarga = (event) => {
        var value = event.target.value
        this.setState({
            inputHarga: value
        })
    }

    changeInputBerat = (event) => {
        var value = event.target.value
        this.setState({
            inputBerat: value
        })
    }

    render() {
        return (
            <div class="container container-table-harga">
                <h1>Tabel Harga Buah</h1>
                <table class="table-harga">
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                        <th>Aksi</th>
                    </tr>

                    {this.state.dataHargaBuah.map((e) => {
                        return (
                            <tr class="tr-table-harga">
                                <td>{e.nama}</td>
                                <td>{e.harga}</td>
                                <td>{e.berat / 1000} kg</td>
                                <td>
                                    <button>Edit</button>
                                    <button onClick={this.deleteDaftar}>Delete</button>
                                </td>

                            </tr>
                        );
                    })}
                </table>
                <form onSubmit={this.submitFrom}>
                    <table>Nama</table>
                    <input type="text" required value={this.state.inputNama} onChange={this.changeInputNama}></input>
                    <table>Harga</table>
                    <input type="text" required value={this.state.inputHarga} onChange={this.changeInputHarga}></input>
                    <table>Berat (gram)</table>
                    <input type="text" required value={this.state.inputBerat} onChange={this.changeInputBerat}></input><br />
                    <button>Save</button>
                </form>
            </div >
        );
    }
}

export default Tugas12;