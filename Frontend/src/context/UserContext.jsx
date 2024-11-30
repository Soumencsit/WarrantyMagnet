import React, { createContext, useEffect, useId, useState } from "react";

export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {


  const [userEmail,setUserEmail]=useState(
    localStorage.getItem("userEmail")||""
  )
  
  const [userId,setUserId]=useState(
    localStorage.getItem("userId")
  )
  const [userName,setUserName]=useState(
    localStorage.getItem("userName")
  )
  const [password,setPassword]=useState('')
  const [isLogin,setLogin]=useState(
    localStorage.getItem("isLogin")
  )
  



  useEffect(() => {
    

    localStorage.setItem("userEmail",userEmail)
    localStorage.setItem("userId",userId)
    localStorage.setItem("userName",userName)
    localStorage.setItem("isLogin",isLogin)
  }, [userEmail,useId,isLogin]);

  const contextValue = {
    userEmail,
    setUserEmail,
    userId,
    setUserId,
    isLogin,
    setLogin,
    userName,
    setUserName,
    password,
    setPassword,
  };

  return (
    <Storecontext.Provider value={contextValue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default StorecontextProvider;
