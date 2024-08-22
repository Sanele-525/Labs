import React, { createContext, useContext, useState } from 'react'; 
import Form1 from './Personal';
import Form2 from './Address';
import Form3 from './Payment';

export const UserContext = createContext();  
export const ContexForms = () => {  
  const [userInfo, setUserInfo] = useState([]);    
  return (  
    <UserContext.Provider value={{ userInfo, setUserInfo,theme,setTheme }}>  
        <Form1 userInfo={userInfo} setUserInfor={setUserInfo}/>
        <Form2 userInfo={userInfo} setUserInfor={setUserInfo}/>
        <Form3 userInfo={userInfo} setUserInfor={setUserInfo}/>
    </UserContext.Provider>  
  );  
};  
