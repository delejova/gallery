import React from "react"

import styles from "./GalleryCard.module.scss"

const photos = (numberOfPhotos) => {
  if (numberOfPhotos === 1) {
    return "fotka"
  }

  if (numberOfPhotos >= 5) {
    return "fotiek"
  }

  return "fotky"
}

const GalleryCard = ({ category }) => {
  const { label, image, numberOfPhotos } = category

  return (
    <div className={styles.container}>
      <div className={styles.count}>
        {numberOfPhotos} {photos(numberOfPhotos)}
      </div>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default GalleryCard
