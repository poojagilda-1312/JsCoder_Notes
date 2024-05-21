import { useState } from "react";
import useDebounce from "../hooks/use-debounce";

const DebounceInput = () => {
  const [inputText, setInputText] = useState("");
  const handleInputChange = (event)=>{
    setInputText(event.target.value)
    
  }
  const debounceValue = useDebounce(inputText,1000)


  return (
    <div>
    <p>{debounceValue}</p>
      <input
        type="text"
        value={inputText}
        placeholder="type something...."
        onChange={handleInputChange}
      >
    
      </input>
    </div>
  );
};

export default DebounceInput;