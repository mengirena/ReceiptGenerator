import React, { Component } from 'react';
import axios from "axios"; //for 
import { saveAs } from "file-saver";
import './App.css';



class App extends Component {
  state = {
    name:'',
    receiptID: 0,
    price1: 0,
    price2: 0,
  }

  handleChange = ({target: { value, name }}) => this.setState({[name]: value })

  createAndDownloadPdf = () => {
    axios.post('/create-pdf', this.state)
    .then(() => axios.get('fetch-pdf', { responseType: 'blob'})) // blob is immutable object that holds raw data
    .then((res) => {
      const pdfBlob = new Blob([res.data], {type: 'application/pdf'})

      saveAs(pdfBlob, 'newPdf.pdf')
    })
  }

  render(){
    return (
      <div className="App">
        <input type='text' placeholder="Name" name="name" onChange={this.handleChange} />
        <input type='number' placeholder="Receipt ID" name="receiptId" onChange={this.handleChange} />
        <input type='number' placeholder="Price 1" name="price1" onChange={this.handleChange} />
        <input type='number' placeholder="Price 2" name="price2" onChange={this.handleChange} />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    )
  }
}

export default App;
