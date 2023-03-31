import React from "react"
import icons from "../../../../assets/icons"
import { ADD_CATEGORY } from "../../../../constants/category"

import styles from "./AddCategory.module.scss"

const AddCategory = ({ setShowLayout }) => {
  const handleOnClick = () => {
    // console.log("clicked")
    setShowLayout(true)
  }

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <div className={styles.wrapper}>
        <img className={styles.icon} src={icons.add} alt="" />
        <div className={styles.label}>{ADD_CATEGORY}</div>
      </div>
    </div>
  )
}

export default AddCategory
