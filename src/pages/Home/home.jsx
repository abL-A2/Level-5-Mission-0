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
                  label="Search website"
                  type="search"
                  variant="filled"
                  className="searchBox"
                  color="white" // somehow turns off label colour change on :focus
                  sx={{
                    backGround: "rgb(115, 147, 179)",
                    width: "70%",
                    maxWidth: "550px",
                    marginTop: "auto",
                  }}
                />
              </div>
            </form>
          </div>
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
