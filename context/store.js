import { useState, createContext } from "react";

export const Context = createContext();

const Store = ({ children }) => {
  const [detail, setDetail] = useState({
    isLogin: false,
  });

  function updateIsLogin(data) {
    setDetail({ ...detail, isLogin: data });
  }

  const value = {
    detail,
    updateIsLogin,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default Store;
