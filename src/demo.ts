import React, { useState } from 'react';

const runStep = (items,updateItem)=>{
    const steps = ["process","finish"];
    const [indexs,setIndex] = useState([0,0])
    let i = indexs[0];
    let j = indexs[1];
    if(i<3){
      setTimeout(()=>{
          console.log("i:"+i+"||j:"+j);
          if (steps[j]=="process"){
              updateItem(items[i].title,steps[j],true);
          }
          else{
              updateItem(items[i].title,steps[j],false);
          }
          if(j<1){
              j += 1;
          } 
          else{
              i += 1;
              if (i==3){
                  j = 1;
                  //updateItem(items[i].title,steps[j],false);
              }else{
                  j = 0;
              }
          }
          setIndex([i,j]);
      },1000);
    }
    else if (i==3){
      updateItem(items[i].title,steps[j],false);
      i+=1;
      setIndex([i,j]);
    }
}


export default runStep;