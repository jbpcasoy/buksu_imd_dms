import { Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function YearRange({ startYear, endYear, onChange }) {
  const [state, setState] = useState({
    startYear,
    endYear,
  });

  useEffect(() => {
    console.log({ state });
    onChange(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Stack direction='row' spacing={1}>
      <TextField
        label='Start'
        size='small'
        type='number'
        value={state.startYear}
        onChange={(e) => {
          setState((prev) => ({ ...prev, startYear: e.target.value }));
        }}
      />
      <TextField
        label='End'
        size='small'
        type='number'
        value={state.endYear}
        onChange={(e) => {
          setState((prev) => ({ ...prev, endYear: e.target.value }));
        }}
      />
    </Stack>
  );
}
