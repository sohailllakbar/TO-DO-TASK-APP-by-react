import React, { useContext } from "react";
import styles from "./item-component.module.css";
import {MyContext} from "../store/Context"
 


function AddItem() {

  const dataObj = useContext(MyContext);

  const { textData,setTextData} = dataObj 

  function handleDelButton(index){
    const newTextData = textData.filter((item,i) => i !== index)

    setTextData(newTextData);
  }
  return (
    <ul className={styles.parentul}>
      {textData.map((item,index) => (
        <li key={index} className={styles.listitem}>
        
          <div>{item.name}</div>
          <div>{item.dueDate}</div>
          <button type="button" className={`btn btn-danger ${styles.btn1}`} onClick={() => handleDelButton(index)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AddItem
