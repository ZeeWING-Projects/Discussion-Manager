import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';


class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={apiResponse:""} //This will create this varaible

  }

  callAPI()
  {
    fetch('http://localhost:9000/test-api').then((resp)=>{
      return resp.text()//this will get the response.
    }).then((response)=>{
      this.setState({apiResponse:response})//this is the reponse which is recieved from inner API
    })
  }

  componentWillMount()
  {
    this.callAPI()
  }


render() {
  return (
    <div className="App">
      <span>The Response</span>
      <p>{this.state.apiResponse}</p>
    </div>
  );
}
}

export default App;
