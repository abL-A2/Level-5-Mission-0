import styles from "./home.module.css";

export default function home() {
  return (
    <div>
      <div className={styles.banner}>
        <p>Lorem Ipsum, banner background & search bar goes here</p>
        <div className={styles.searchContaner}>
          <form>
            <input type="text" placeholder="search..." name="search" />
            <button className={styles.submit}>Search</button>
          </form>
        </div>
      </div>
      <body className={styles.body}>
        This container is for the captioned thumbnails
        <div className={styles.thumbnailGrid}>{/* a function will go here that dynamically renders thumbnails */}</div>
      </body>
      <footer className={styles.footer}>Lorem ipsum dolor sit amet</footer>
    </div>
  );
}
