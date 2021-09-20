import React from 'react';
import Loading from '../loading/loading';
function Results(props){
  console.log(typeof props.data,'from result')
    return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading/>}</pre>
      </section>
    );
  }


export default Results;
