import React from 'react';
import { useState } from 'react/cjs/react.development';

import './form.scss';
// import './loading.css' 

function Form(props) {
  const [data, setData] = useState('');
  const [method, setMethod] = useState('get');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [showText, setShowText] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      data: `${data}`,
      method: `${method}`,
      url: `${url}`
    };

    // console.log(formData)
    props.handleApiCall(formData);
  };
  const methodSetState = (e) => {
    setMethod(e.target.id)
    setShowText(false)

  };

  const urlSet = (e) => {
    setUrl(e.target.value)
  }
  const dataSet = (e) => {
    setData(e.target.value)
  }
  const textWithMethod = (e) => {
    setMethod(e.target.value);
    setShowText(true)
  }

  return (
    <>


      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={urlSet} class="form-control" id="exampleInputEmail1" />
          <button type="submit" class="btn btn-success">GO!</button>
        </label>
        <label className="methods">
          {/* <select name="method" id="method" defaultValue='get'>

            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </select> */}
          {/* another way of selecting */}
          <span id="get" onClick={methodSetState} >GET</span>
          <span id="post" onClick={textWithMethod} >POST</span>
          <span id="put" onClick={textWithMethod}>PUT</span>
          <span id="delete" onClick={methodSetState} >DELETE</span>
        </label>
      </form>
      {

        showText && <textarea name="data" onChange={dataSet} />
      }

    </>
  );
}


export default Form;
