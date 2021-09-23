import React, { useEffect, useState, useReducer } from 'react';

import './app.scss';
import axios from 'axios';
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
 import History from './components/History/history';
const initialState = {
  history: []
};

function requestReducer(state, action) {
  console.log("action......", action)
  console.log("state.history) =", state.history)
switch (action.type) {
  case 'ADD_REQUEST':
  console.log("state.history) =", state.history)
    const request=[...state.history,action.payload];
  console.log("state.history afteeer) =", state.history)

    console.log(request,'reeeqqquest');
    console.log(action,'actionnnn');
    return{
      history:request
    }

  default:
    return state
}
 };

function addRequest(requestParams, data) {
  console.log(requestParams,'parrr')
  return {
    type:'ADD_REQUEST',
    payload:{
      url:requestParams.url,
      method:requestParams.method,
      result:data
    }
  }
};




function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [state, dispatch] = useReducer(requestReducer,initialState)



  useEffect(() => {


    async function requestData() {
      if (requestParams.url) {
        const response = await axios({
          method: requestParams.method,
          url: requestParams.url,
          data: requestParams
        });
        const action ={
          type:"ADD_REQUEST",
          payload:response
        }
        setData(response);
        dispatch(addRequest(requestParams,action))

      }
    }
    requestData()
  }, [requestParams])







  function callApi(data) {
    if (data.url !== '') {
      // alert("data empty")
      setData(data);
      setRequestParams(data);

    }
console.log(initialState,'iniii')

  }


  //  let callApi = async (requestParams) => {
  //   // mock output
  //   const datUrl=await axios.get(requestParams.url)

  //   // const data=requestParams.data
  //   const data={
  //     headers:[datUrl.headers],
  //     result:[datUrl.data.results],
  //   }

  //   setData(data);
  //   setRequestParams(requestParams);
  //   // this.setState({ data, requestParams });
  // }


  return (
    <>
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <div className="float-container">

        <History handleApiCall={callApi} requestHistory={state.history} />
        <Results data={data} />
        </div>
        
        <Footer />
      </React.Fragment>

    </>
  );
}







export default App;
