import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Test() {
 const [data, setData] = useState({});

 useEffect(() => {
  axios.get('/test/api').then((response) => {
   response.json().then((data) => console.log(data)
   )
  });
 }, []);

 return (
  <div>
   <p>{data.message}</p>
  </div>
 );
}