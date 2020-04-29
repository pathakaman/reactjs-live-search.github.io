import React, { Component } from 'react';
import './App.css';
import Information from './jsonData';

class App extends Component {
  constructor(){
    super();
    this.state={
      search:null
    };
  }
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  render(){
    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.Country.toLowerCase().includes(this.state.search.toLowerCase()) || data.Brand.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div class="container mt-2">
        <table class="table table-striped table-dark">
          <tbody>
            <tr className="row bg-dark">
              <td className="col text-center">{data.Brand}</td>
              <td className="col text-center">{data.Variety}</td>
              <td className="col text-center">{data.Style}</td>
              <td className="col text-center">{data.Country}</td>
              <td className="col text-center">{data.Stars}</td>
              <td className="col text-center">{data["Top Ten"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
      )
    })
    return (
      <>
      <header className="header sticky-top">
        <h1 className="text-white text-uppercase font-italic">Search top Ramen restaurants Details Here</h1>  
      </header>
      <div className="container main">
        <div className="form-group has-search">
          <span className="fa fa-search"></span>
          <input type="text" class="form-control" placeholder="Enter Country or Brand to be searched" onChange={(e)=>this.searchSpace(e)}></input>
        </div>
        <div className="container bg-dark text-white">
          <div className="row">
            <div className="col text-center">Brand</div>
            <div className="col text-center">Variety</div>
            <div className="col text-center">Style</div>
            <div className="col text-center">Country</div>
            <div className="col text-center">Stars</div>
            <div className="col text-center">Top Ten</div>
          </div>
        </div>
        {items}
      </div>
      </>
    )
  }
}

export default App;
