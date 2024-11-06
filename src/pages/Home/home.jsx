// styles
import styles from "./home.module.css";
// components
import MediaCard from "./mediacard";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.heroBanner}>
        <h1 className={styles.bannerText}>New Zealand Marketing Association</h1>
        <p className={styles.bannerText}>Lorem ipsum dolor sit amet</p>
        <div className={styles.searchContainer}>
          <form>
            <input type="text" placeholder="search..." name="search" />
            <button className={styles.submit}>Search</button>
          </form>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardGrid}>
          <MediaCard />
        </div>
      </div>
      <footer className={styles.footer}>Lorem ipsum dolor sit amet</footer>
    </div>
  );
}
