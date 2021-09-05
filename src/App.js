import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mode: 'light',
      progress: 0
    }
  }

  componentDidMount() {
    this.toggleMode();
  }


  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = 'grey';
    }
    else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
    }
  }


  render() {

    

    const handleProgress = (prog) => {
      this.setState({progress:prog});
    }

    return (

      <div className={`App `} >
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Switch>
            <Route exact path="/"> <News handleProgress = {handleProgress} mode={this.state.mode} country='in' category='general' pageSize={6} /> </Route>
            <Route exact path="/business" > <News handleProgress = {handleProgress} mode={this.state.mode} key='business' country='in' category='business' pageSize={6} /> </Route>
            <Route exact path="/entertainment"> <News handleProgress = {handleProgress} mode={this.state.mode} key='entertainment' country='in' category='entertainment' pageSize={6} /> </Route>
            <Route exact path="/general"> <News handleProgress = {handleProgress} mode={this.state.mode} key='general' country='in' category='general' pageSize={6} /> </Route>
            <Route exact path="/health"> <News handleProgress = {handleProgress} mode={this.state.mode} key='health' country='in' category='health' pageSize={6} /> </Route>
            <Route exact path="/science"> <News handleProgress = {handleProgress} mode={this.state.mode} key='science' country='in' category='science' pageSize={6} /> </Route>
            <Route exact path="/sports"> <News handleProgress = {handleProgress} mode={this.state.mode} key='sports' country='in' category='sports' pageSize={6} /> </Route>
            <Route exact path="/technology"> <News handleProgress = {handleProgress} mode={this.state.mode} key='technology' country='in' category='technology' pageSize={6} /> </Route>
          </Switch>
        </Router>

      </div>

    );
  }
}

export default App;
