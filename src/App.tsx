import React, { useMemo, useState } from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined, PayCircleOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import runStep from "./demo.ts"
const App: React.FC = () => {
  //const steps = ["process","finish"];
  const iconStatus = {"Login":<UserOutlined />,"Verification":<SolutionOutlined />,"Pay":<PayCircleOutlined />,"Done":<SmileOutlined />,"Loading":<LoadingOutlined/>};
  const [items,setItems] = useState([{"title": 'Login',"status": 'wait',"icon": <UserOutlined />},
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

    const updateItem = (title:string,newStatus:string,isLoading:boolean)=>{
      setItems(items.map((item)=>{
        return item.title===title && item.status!==newStatus?(isLoading===true?{...item,status: newStatus,icon:iconStatus["Loading"]}:{...item,status: newStatus,icon:iconStatus[title]}):item
      }))
    }
    
  runStep(items,updateItem);


    return(
      <Steps items = {items}/>
    )
};
  

export default App;
