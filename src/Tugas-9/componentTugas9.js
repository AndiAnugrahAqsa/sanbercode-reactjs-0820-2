import React from "react";
import '../App.css'

class ComponentTugas9 extends React.Component {
  render(){
    return(

<div class="container">
  <h1>Form Pembelian Buah</h1>
  <div class="isi-form">
      <form>
          <table>
              <tr>
                  <td>
                      <label><span>Nama Pelanggan</span></label>
                  </td>
                  <td><input type="text"></input></td>
              </tr>
              <tr>
                  <td class="label-form" rowspan="5">
                      <label><span>Daftar Item</span></label>
                  </td>
                  <td class="isi-checkbox">
                      <input type="checkbox"></input>
                      <label>Semangka</label>
                  </td>
              </tr>
              <tr>
                  <td>
                      <input type="checkbox"></input>
                      <label>Jeruk</label>
                  </td>
              </tr>
              <tr>
                  <td><input type="checkbox"></input>
                      <label>Nanas</label></td>
              </tr>
              <tr>
                  <td><input type="checkbox"></input>
                      <label>Salak</label></td>
              </tr>
              <tr>
                  <td><input type="checkbox"></input>
                      <label>Anggur</label></td>
              </tr>
          </table>


      </form>
      <button>Kirim</button>
  </div>
</div>


)
}
}

export default ComponentTugas9
