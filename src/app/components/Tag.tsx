import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function ColorChips({label, icon}: {
  label: string,
  icon: React.ReactElement
}) {
  return (
    <Chip label={label} icon={icon} variant='outlined' className='border-amber-700' />
  );
}