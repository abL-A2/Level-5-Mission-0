/* eslint-disable react/prop-types */
// MUI imports for hamburger drawer menu
import { List, ListItem, ListItemText, Drawer } from "@mui/material";

export default function DrawerMenu({ open, onClose, items }) {
  return (
    // drawer menu that replaces navbar links on small screens
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List>
        {items.map((item, index) => (
          <ListItem button key={index} onClick={onClose}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
