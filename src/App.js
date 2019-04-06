import React, { Component } from 'react';
import './App.css';
import ChartBar from './components/Chart.js'
import mainchartdata from './data/mainchartdata.js'
import secondarychartdata from './data/secondarychartdata.js'
import { Tab } from 'semantic-ui-react'
import Iframe from 'react-iframe'
import ChartLine from './components/ChartLine'


class App extends Component {

  constructor() {
    super();
    this.state = {
      chartData: {},
      chart2Data: {},
      chart3Data: {},
      chart4Data: {},
      chart5Data: {},
      chart6Data: {},
      chart7Data: {},
      chart8Data: {},
      chart9Data: {},
      chart10Data:{},
      chart11Data:{}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData: mainchartdata,
      chart2Data: secondarychartdata[0],//casesmalaria
      chart3Data: secondarychartdata[1],//deathsmalaria
      chart4Data: secondarychartdata[2],
      chart5Data: secondarychartdata[3],
      chart6Data: secondarychartdata[4],
      chart7Data: secondarychartdata[5],
      chart8Data: secondarychartdata[6], 
      chart9Data: secondarychartdata[7],
      chart10Data:secondarychartdata[8],
      chart11Data:secondarychartdata[9]
    })
  }

  render() {
    const malariainfo = <div>
      <Iframe url="https://datawrapper.dwcdn.net/IarqM/1/"
        width="100%"
        height="700px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen />
        <ChartLine className="globalstats p-5" chartData={this.state.chart2Data} legendPosition="bottom" />
        <ChartLine className="globalstats p-5" chartData={this.state.chart3Data} legendPosition="bottom" />
    </div>

    const japaniinfo = <div>
      <Iframe url="https://datawrapper.dwcdn.net/FzGl9/2/"
        width="100%"
        height="700px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen />
      <ChartLine className="globalstats p-5" chartData={this.state.chart4Data} legendPosition="bottom" />
      <ChartLine className="globalstats p-5" chartData={this.state.chart5Data} legendPosition="bottom" />
    </div>

    const diareainfo = <div>
      <Iframe url="https://datawrapper.dwcdn.net/TxPlV/1/"
        width="100%"
        height="700px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen />
      <ChartLine className="globalstats p-5" chartData={this.state.chart6Data} legendPosition="bottom" />
      <ChartLine className="globalstats p-5" chartData={this.state.chart7Data} legendPosition="bottom" />
    </div>

    const resperatoryinfection = <div>
    <Iframe url="https://datawrapper.dwcdn.net/0BmUu/1/"
      width="100%"
      height="700px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
      allowFullScreen />
    <ChartLine className="globalstats p-5" chartData={this.state.chart8Data} legendPosition="bottom" />
    <ChartLine className="globalstats p-5" chartData={this.state.chart9Data} legendPosition="bottom" />
    </div>

    const viral = <div>
      <Iframe url="https://datawrapper.dwcdn.net/l27Tv/1/"
        width="100%"
        height="700px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen />
      <ChartLine className="globalstats p-5" chartData={this.state.chart10Data} legendPosition="bottom" />
      <ChartLine className="globalstats p-5" chartData={this.state.chart11Data} legendPosition="bottom" />
    </div>

    const panes = [
      { menuItem: 'Malaria', render: () => <Tab.Pane> {malariainfo} </Tab.Pane> },
      { menuItem: 'Japanese Encephalitis', render: () => <Tab.Pane>{japaniinfo}</Tab.Pane> },
      { menuItem: 'Acute Diarrhoeal Diseases', render: () => <Tab.Pane>{diareainfo}</Tab.Pane> },
      { menuItem: 'Acute Respiaratory Infection', render: () => <Tab.Pane>{resperatoryinfection}</Tab.Pane> },
      { menuItem: 'Viral Hepatitis', render: () => <Tab.Pane>{viral}</Tab.Pane> },
    ]

    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand mx-auto" href="/">Analytica</a>
        </nav>
        <div className="container">
          <h1 className="text-center p-5">Major death causing diseases</h1>

          <ChartBar className="globalstats p-5" chartData={this.state.chartData} legendPosition="bottom" />

          <hr className="p-5"/>



          {/* <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#malaria">Malaria</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#je">Japanese Encephalitis</a>
              </li>
            </ul>
            <div id="myTabContent" className="tab-content">
              <div class="tab-pane fade active show" id="malaria">
                <h1>Here I will put Malaria mosquitoes.</h1>
              </div>
              <div class="tab-pane fade active show" id="je">
                <h1>Here I will put Malaria mosquitoes.</h1>
              </div>
            </div> */}


          <Tab panes={panes} />



        </div>
      </div>
    );
  }
}

export default App;
