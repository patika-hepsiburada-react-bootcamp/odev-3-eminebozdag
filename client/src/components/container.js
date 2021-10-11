import { useEffect } from "react";
import { connectSocket, subscribeToNewMessages } from "../socketApi";
import { useVote } from "./contexts/vote-context";
import Options from "./options";
import Question from "./question";

const Container = () => {
  const { setOptions } = useVote();

  useEffect(() => {
    connectSocket();
    subscribeToNewMessages((data) => {
      setOptions(data);
    });
  }, []);

  return (
    <div>
      <Question />
      <Options />
    </div>
  );
};
export default Container;
