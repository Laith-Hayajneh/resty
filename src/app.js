import React, { useEffect, useState } from 'react';

import './app.scss';
import axios from 'axios';
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';



function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  useEffect(() => {
    async function requestData() {
      if (requestParams.url) {
        const response = await axios({
          method: requestParams.method,
          url: requestParams.url,
          data: requestParams
        });
        setData(response);
        
      }
    }
    requestData()
  }, [requestParams])







  function callApi(data) {
    if (data.url !== '') {
      setData(data);
      setRequestParams(data);

    }

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
        <Results data={data} />
        <Footer />
      </React.Fragment>

    </>
  );
}







export default App;
