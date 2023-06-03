import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 240;

const items = [
  {
    id: "1",
    label: "Email",
    icon: MailIcon,
    subnav: [{ label: "Email2", icon: MailIcon }],
  },
  { id: "2", label: "Chat", icon: MailIcon },
  { id: "3", label: "Calendar", icon: MailIcon },
  {
    id: "4",
    label: "Invoice",
    icon: MailIcon,
    subnav: [{ label: "Em", icon: MailIcon }],
  },
  {
    id: "5",
    label: "User",
    icon: MailIcon,
    subnav: [{ label: "Email2", icon: MailIcon }],
  },
  {
    id: "6",
    label: "Rolls & Permissions",
    icon: MailIcon,
    subnav: [{ label: "Email2", icon: MailIcon }],
  },
  {
    id: "7",
    label: "Pages",
    icon: MailIcon,
    subnav: [{ label: "Email2", icon: MailIcon }],
  },
  {
    id: "8",
    label: "Auth Pages",
    icon: MailIcon,
    subnav: [{ label: "Email2", icon: MailIcon }],
  },
  {
    id: "9",
    label: "Dialog Examples",
    icon: MailIcon,
    subnav: [{ label: "Email2", icon: MailIcon }],
  },
];

export default function SideBarTemplateCmp() {
  const [selectedId, setSelectedId] = React.useState<String>("");

  function handleClick(id: String) {
    if (selectedId !== id) setSelectedId(id);
    else setSelectedId("");
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {items.map((el, index) => {
            const Icon = el.icon;
            if (el.subnav === undefined) {
              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={el.label} />
                  </ListItemButton>
                </ListItem>
              );
            } else {
              const open = selectedId === el.id;
              return (
                <List
                  key={index}
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton
                    onClick={() => {
                      handleClick(el.id);
                    }}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={el.label} />
                    {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {el.subnav.map((elm, idx2) => {
                        const Icon2 = elm.icon;
                        return (
                          <ListItemButton key={idx2} sx={{ pl: 4 }}>
                            <ListItemIcon>
                              <Icon2 />
                            </ListItemIcon>
                            <ListItemText primary={elm.label} />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </List>
              );
            }
          })}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
