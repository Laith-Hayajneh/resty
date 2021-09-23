import React from "react";
import Loading from "../loading/loading";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';


function Results(props) {
  console.log(props.data, 'props data')
  
  return (


    <section className="float-child">
      <h2>Results</h2>
      {/* <pre>{props.data ? <JSONPretty data={props.data} /> : <Loading />}</pre> */}
    
      <pre>{props.data ? <JSONPretty data={props.data} /> : <Loading />}</pre>
    </section>
  );
}

export default Results;