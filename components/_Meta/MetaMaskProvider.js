import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
let Web3 = require("web3");

const MMContext = createContext();

export function MetaMaskWrapper({ children }) {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    window.ethereum
      ? ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            setAddress(accounts[0]);
            let w3 = new Web3(ethereum);
            setWeb3(w3);
          })
          .catch((err) => console.log(err))
      : setWeb3("Disconnected");
  }, []);

  return (
    <MMContext.Provider value={{ global: { web3, userId: address } }}>
      {children}
    </MMContext.Provider>
  );
}

export function useMMContext() {
  return useContext(MMContext);
}
