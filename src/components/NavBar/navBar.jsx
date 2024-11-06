import styles from "./NavBar.module.css";
// MUI icons
import StoreIcon from "@mui/icons-material/Store";
import MenuIcon from "@mui/icons-material/Menu";
// MUI hooks to enable responsive navbar adjustments
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function NavBar() {
  // array to contain whatever page names or links need to be in the NavBar
  const navBarItems = [`Home`, `About`, `Login/Signup`, `Contact`, `Jobs`];

  const theme = useTheme();
  //sets up the check for adjusting the nav list for smaller screens
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // function to add a nav button per page or link in the array navBarLinks
  const navBarDisplay = navBarItems.map((link, index) => {
    return (
      <li className={styles.navLinks} key={index}>
        <a>{link}</a>
      </li>
    );
  });

  return (
    <div className={styles.navContainer}>
      <nav>
        <div className={styles.logo}>
          {/* placeholder logo */}
          <StoreIcon
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem" }, // adjusts size for smaller screens
            }}
          />
        </div>
        {/* conditional to resize nav elements into small menu icon */}
        {isSmallScreen ? (
          <MenuIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
        ) : (
          <ul className={styles.navList}>{navBarDisplay}</ul>
        )}
      </nav>
    </div>
  );
}
