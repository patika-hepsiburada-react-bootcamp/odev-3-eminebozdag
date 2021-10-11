import { useState } from "react";
import { sendMessage } from "../socketApi";
import { useVote } from "./contexts/vote-context";
import "./options.css";

const Options = () => {
  const { options } = useVote();
  const [selectedOption, setSelectedOption] = useState("vikings");

  const handleSelect = ({ target }) => setSelectedOption(target.value);

  const handleSubmit = () => {
    sendMessage("new-vote", selectedOption);
  };

  const total = Object.keys(options).reduce(
    (previous, key) => previous + options[key],
    0
  );

  return (
    <div className="options">
      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="vikings"
          onChange={handleSelect}
          checked={selectedOption === "vikings"}
        />
        Vikings
      </label>
      <progress id="file" value={options.vikings} max={total} />
      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="bridgerton"
          onChange={handleSelect}
          checked={selectedOption === "bridgerton"}
        />
        Bridgerton
      </label>
      <progress id="file" value={options.bridgerton} max={total} />
      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="the_witcher"
          onChange={handleSelect}
          checked={selectedOption === "the_witcher"}
        />
        The Witcher
      </label>
      <progress id="file" value={options.the_witcher} max={total} />
      <label htmlFor="">
        <input
          name="option"
          type="radio"
          value="anne_with_an_e"
          onChange={handleSelect}
          checked={selectedOption === "anne_with_an_e"}
        />
        Anne With An "E"
      </label>
      <progress id="file" value={options.anne_with_an_e} max={total} />
      <button className="button" onClick={handleSubmit}>
        Vote
      </button>
    </div>
  );
};

export default Options;
