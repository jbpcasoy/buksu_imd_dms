import ApartmentIcon from "@mui/icons-material/Apartment";
import BadgeIcon from "@mui/icons-material/Badge";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment, useState } from "react";

const menuItems = [
  {
    label: "Home",
    icon: <HomeIcon />,
    link: "/admin",
  },
  {
    label: "Users",
    icon: <PersonIcon />,
    link: "/admin/user",
  },
  {
    label: "Faculties",
    icon: <BadgeIcon />,
    link: "#",
  },
  {
    label: "Colleges",
    icon: <BusinessIcon />,
    link: "/admin/college",
  },
  {
    label: "Departments",
    icon: <ApartmentIcon />,
    link: "/admin/department",
  },
  {
    label: "IMs",
    icon: <DescriptionIcon />,
    link: "#",
  },
];

export default function AdminDrawerMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Fragment>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
        onClick={() => setOpenMenu(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor='left' open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem disablePadding key={item.label}>
                <ListItemButton component='a' href={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Fragment>
  );
}
