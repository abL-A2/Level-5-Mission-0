// styles
import styles from "./home.module.css";
// components
import MediaCard from "./mediacard";
// MUI import for the search box
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.heroBanner}>
          <h1 className={styles.bannerText}>New Zealand Marketing Association</h1>
          <p className={styles.bannerText}>Lorem ipsum dolor sit amet</p>
          <div className={styles.searchContainer}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div style={{ position: "relative", height: "100%" }}>
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                  className="searchBox"
                  sx={{
                    position: "absolute",
                    bottom: "26px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "70%",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardGrid}>
            <MediaCard />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>Lorem ipsum dolor sit amet</footer>
    </div>
  );
}
