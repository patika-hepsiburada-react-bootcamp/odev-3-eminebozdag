import { createContext, useContext, useState } from "react";

export const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [options, setOptions] = useState({});

  const values = {
    options,
    setOptions,
  };

  console.log("provider-options", options);
  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);
