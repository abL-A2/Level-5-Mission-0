import styles from "./NavBar.module.css";

export default function NavBar() {
  // array to contain whatever page names or links need to be in the NavBar
  const navBarItems = [`Home`, `About`, `Login/Signup`, `Contact`, `Jobs`];

  // function to add a nav button per page or link in the array navBarLinks
  const navBarDisplay = navBarItems.map((link, index) => {
    return (
      <li key={index}>
        <a>{link}</a>
      </li>
    );
  });

  return (
    <div>
      <nav>
        <ul>{navBarDisplay}</ul>
      </nav>
    </div>
  );
}
