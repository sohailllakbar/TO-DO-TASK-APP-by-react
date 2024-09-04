import React, { useState } from "react";
import Heading from "./Components/Heading-component";
import Input from "./Components/Input-text-component";
import AddItem from "./Components/item-component";
import {MyProvider} from "./store/Context"

function App() {
  // usestate for the input text field
  const [inputData, setInputData] = useState("");

  // usestate for the input date field
  const [inputDate, setInputDate] = useState("");

  // usestate for the add both data
  const [textData, setTextData] = useState([]);

  // function for the add button

  const handleAddClick = () => {
    const newItem = [...textData, { name: inputData, dueDate: inputDate }];

    setTextData(newItem);
    setInputData("");
    setInputDate("");
  };

  const complexData = {
    inputData,
    setInputData,
    inputDate,
    setInputDate,
    handleAddClick,
    textData,
    setTextData

  }

  

  return (
    <center>
      <MyProvider value = {complexData}>
      <Heading></Heading>
      <Input></Input>
      <AddItem></AddItem>
      </MyProvider>
    </center>
  );
}
export default App;
