import styles from "./App.module.scss"
import GalleryCardsList from "./components/GalleryCardsList"

const FOTOGALLERY = "Fotogaleria"
const CATEGORY = "Kategoria"

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{FOTOGALLERY}</div>
      <div className={styles.subheader}>{CATEGORY}</div>
      <GalleryCardsList />
    </div>
  )
}

export default App
