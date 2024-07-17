import React, { useState } from 'react';

const runStep = (items,updateItem)=>{
    const steps = ["process","finish"];
    const [indexs,setIndex] = useState([0,1])
    let i = indexs[0];
    let j = indexs[1];
    if(i<3){
      setTimeout(()=>{
          console.log("i:"+i+"||j:"+j);
          if (steps[j]=="process"){
              updateItem(1,i,items[i].title,steps[j],true);
              j += 1;
          }
          else{
              updateItem(2,i,items[i].title,steps[j],false);
              i += 1;
              j = 1;
          }
          setIndex([i,j]);
      },3000);
    }
}


export default runStep;