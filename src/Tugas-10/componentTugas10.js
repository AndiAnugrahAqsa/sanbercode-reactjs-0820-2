import React from "react";
import "../App.css";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class ComponentTugas10 extends React.Component {
  render() {
    return (
      <div class="container container-table-harga">
        <h1>Tabel Harga Buah</h1>
        <table class="table-harga">
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>

          {dataHargaBuah.map((e) => {
            return (
              <tr class="tr-table-harga">
                <td>{e.nama}</td>
                <td>{e.harga}</td>
                <td>{e.berat / 1000} kg</td>
              </tr>
            );
          })}
        </table>
      </div >
    );
  }
}

export default ComponentTugas10;
