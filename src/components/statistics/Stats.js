import React, { useEffect,useState } from "react";
import Area1 from "../elements/section1/Area1";
import Bar1 from "../elements/section1/Bar1";
import Line1 from "../elements/section1/Line1";
import Pie1 from "../elements/section1/Pie1";
import Area2 from "../elements/section2/Area2";
import Bar2 from "../elements/section2/Bar2";
import Line2 from "../elements/section2/Line2";
import Pie2 from "../elements/section2/Pie2";

import axios from "axios";
import "./Stats.css";


export default function Stats() {
  const [address, setaddress] = useState([]);
  const [crime, setcrime] = useState([]);
  const [data, setdata] = useState({})
  async function getData(){
    const response = await fetch('https://detectdo.herokuapp.com/', {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
  
    useEffect(() => {
      
      getData().then(data=>{
        var cr1=data["Address"];
         var arr1=[];
         for (const [key, value] of Object.entries(cr1)) {

          arr1.push({
            name:key,
            value:value
          });
        }
        setaddress(arr1);
         var cr=data["Crime"];
         var arr=[];
         for (const [key, value] of Object.entries(cr)) {

          arr.push({
            name:key,
            value:value
          });
        }
        setcrime(arr);
      })
      .catch(err=>{
        console.log(err);
      })
        
        
     
         
       
        
      
    }, [])

    

  return <div className="charts1">
    <div className="logo">detect.do</div>
    <div className="head">Visual representation of crime data</div>
    <div className="head_sec">Visuals of Criminals detected, Weapons detected, Knife detected and Suspicious vehicles detected</div>
    <div className="chart_wrap">

    <Bar1 data={crime}/>
    <Line1 data={crime}/>
    <Area1 data={crime}/>
    <Pie1 data={crime}/>
    </div>
    <div className="head_sec">Suspicious areas of the region</div>
    <div className="chart_wrap">

    <Bar2 data={address}/>
    <Line2 data={address}/>
    <Area2 data={address}/>
    <Pie2 data={address}/>
    </div>
  </div>;
}




