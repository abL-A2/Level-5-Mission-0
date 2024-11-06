// styles
import styles from "./home.module.css";
// components
import Thumbnail from "./thumbnail";

export default function Home() {
  return (
    <div>
      <div className={styles.banner}>
        <p>Lorem Ipsum, banner background & search bar goes here</p>
        <div className={styles.searchContainer}>
          <form>
            <input type="text" placeholder="search..." name="search" />
            <button className={styles.submit}>Search</button>
          </form>
        </div>
      </div>
      <div className={styles.thumbnailContainer}>
        This container is for the captioned thumbnails
        <div className={styles.thumbnailGrid}>
          <Thumbnail />
        </div>
      </div>
      <footer className={styles.footer}>Lorem ipsum dolor sit amet</footer>
    </div>
  );
}
