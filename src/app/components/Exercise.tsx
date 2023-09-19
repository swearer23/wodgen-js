import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import {BiBracket} from "react-icons/bi"

export default function InsetList({lines} : {
  lines: string[]
}) {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      {
        lines.map(item => {
          return (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BiBracket />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          )
        })
      }
    </List>
  );
}