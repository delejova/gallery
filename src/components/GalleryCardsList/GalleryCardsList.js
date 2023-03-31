import React, { useState } from "react"
import GalleryCard from "./_components/GalleryCard"
import AddCategory from "./_components/AddCategory"

import AddModal from "../AddModal"

import images from "../../assets/images"

import styles from "./GalleryCardsList.module.scss"

const CATEGORIES = [
  {
    id: "nature",
    label: "Príroda",
    image: images.nature,
    numberOfPhotos: 10,
  },
  {
    id: "architecture",
    label: "Architektúra",
    image: images.architecture,
    numberOfPhotos: 6,
  },
  {
    id: "people",
    label: "Ľudia",
    image: images.people,
    numberOfPhotos: 2,
  },
  {
    id: "food",
    label: "Jedlo",
    image: images.food,
    numberOfPhotos: 10,
  },
  {
    id: "abstract",
    label: "Abstraktné",
    image: images.abstract,
    numberOfPhotos: 10,
  },
]

const GalleryCardsList = () => {
  const [showLayout, setShowLayout] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {CATEGORIES.map((category) => (
          <GalleryCard category={category} key={category.id} />
        ))}
        <AddCategory setShowLayout={setShowLayout} />
      </div>
      {showLayout === true && <AddModal setShowLayout={setShowLayout} />}
    </div>
  )
}

export default GalleryCardsList
