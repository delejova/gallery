import React, { useRef } from "react"
import _ from "lodash"
import icons from "../../assets/icons"
import { ADD_CATEGORY } from "../../constants/category"

import styles from "./AddModal.module.scss"

const ADD = "Pridať"
const CATEGORY_NAME = "Názov kategórie *"

const AddCategory = ({ setShowLayout }) => {
  const inputValue = useRef("")

  const handleAddClick = () => {
    const inputText = _.trim(inputValue.current.value)
    if (inputText === "") {
      return
    }

    console.log("clicked add " + inputText)
    setShowLayout(false)
  }

  return (
    <div className={styles.layout}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <div className={styles.title__label}>{ADD_CATEGORY}</div>
          <img
            className={styles.title__icon}
            src={icons.close}
            alt=""
            onClick={() => setShowLayout(false)}
          />
        </div>

        <div className={styles.input}>
          <label className={styles.input__label}>{CATEGORY_NAME}</label>
          <input
            className={styles.input__field}
            type="text"
            ref={inputValue}
            value={inputValue.current.value}
          />
        </div>
        <button className={styles.button} onClick={handleAddClick}>
          {ADD}
        </button>
      </div>
    </div>
  )
}

export default AddCategory
