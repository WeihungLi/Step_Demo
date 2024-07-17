import React, { useMemo, useState } from 'react';
import UploadComponent from "./component/UploadComponent.tsx"
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined, PayCircleOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import runStep from "./demo.ts"
import "./index.sass"
const App: React.FC = () => {
  interface updateProps{
    title:string,
    newStatus:string,
    isLoading:boolean
  }
  //const steps = ["process","finish"];
  const iconStatus = {"Login":<UserOutlined />,"Verification":<SolutionOutlined />,"Pay":<PayCircleOutlined />,"Done":<SmileOutlined />,"Loading":<LoadingOutlined/>};
  const [items,setItems] = useState([{"title": 'Login',"status": 'process',"icon": <LoadingOutlined/>},
    {
      "title": 'Verification',
      "status": 'wait',
      "icon": <SolutionOutlined />
    },{
      "title": 'Pay',
      "status": 'wait',
      "icon": <PayCircleOutlined />
    },{
      "title": 'Done',
      "status": 'wait',
      "icon": <SmileOutlined />
    }]);

    const updateItem = (type:number,index:number,title:string,newStatus:string,isLoading:boolean)=>{
      if(type===1){
        console.log("type1");
        
        setItems(items.map((item)=>{
          return item.title===title && item.status!==newStatus?(isLoading===true?{...item,status: newStatus,icon:iconStatus["Loading"]}:{...item,status: newStatus,icon:iconStatus[title]}):item
        }))
      }
      else{
        //console.log("type2, "+items[index+1].title+"Real: "+item.title);
        setItems(items.map((item)=>{
          console.log("type2, "+items[index+1].title+"  Real: "+item.title);
          return item.title===title && item.status!==newStatus?{...item,status: newStatus,icon:iconStatus[title]}: item.title===items[index+1].title? item.title==="Done" ?{...item,status: 'finish',icon:iconStatus[item.title]}:{...item,status: 'process',icon:iconStatus["Loading"]}:item
        }))
      }
    }
    
  runStep(items,updateItem);


    return(
      <>
        <h1 className="title">Upload_Tool</h1>
        <div className = "uploadunit">
        <UploadComponent/>
        </div>
        <div className = "stepunit">
          <Steps items = {items}/>
        </div>
      </>
    )
};
  

export default App;
