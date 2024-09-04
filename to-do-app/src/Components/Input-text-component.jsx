import React,{useContext} from "react";
import styles from './Input.module.css'
import {MyContext} from "../store/Context"



function Input() {

const dataObj = useContext(MyContext);

const {inputData,setInputData,inputDate,setInputDate,handleAddClick} = dataObj

 // function for the input text field
const getInputValue= (event) =>{

 setInputData(event.target.value)

 
};



// function for the input date field
const getDateValue = (event)=>{

  setInputDate(event.target.value)

}

 

  return (
    <div className={styles.parent}>
      <div className="container text-center">
        <div className="row">
          <div className={`col ${styles.text}`}>
            <input  type="text" value={inputData} onChange={getInputValue} placeholder="entter your tasks"/>
          </div>
          <div className={`col-4 ${styles.date}`}>
            <input type="date" value={inputDate}  onChange={getDateValue} />
          </div>
          <div className={`col-2 ${styles.btn}`}>
            <button onClick={handleAddClick} type="button" className={`btn btn-danger ${styles.btn}`}>add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
