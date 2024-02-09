import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './Dropdown.scss';

const ITEM_HEIGHT = 48;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: 100,
    },
  },
};

const names = ['Trending', 'Most popular', 'Newest', 'Name'];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Dropdown() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
   <FormControl className="select" sx={{ m: 1, width: 150, mt: 1 }}>
  <Select
    displayEmpty
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput />}
    renderValue={(selected) => {
      if (selected.length === 0) {
        return <p>Sort by: Trending</p>;
      }
      return 'Sort by: ' + selected;
    }}
    MenuProps={MenuProps}
    inputProps={{ 'aria-label': 'Without label' }}
    sx={{
      "&:before": {
        border: 'none',
      },
      border: 'none',
      outline: 'none',
      height: '30px',
      width: '158px',
      fontSize: '15px'
    }}
  >
    {names.map((name) => (
      <MenuItem
        key={name}
        value={name}
        style={getStyles(name, personName, theme)}
      >
        {name}
      </MenuItem>
    ))}
  </Select>
</FormControl>

    </div>
  );
}
