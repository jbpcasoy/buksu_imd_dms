import AdminLayout from "@/components/admin/AdminLayout";
import AdminCITLDirector from "@/components/admin/citl_director/AdminCITLDirector";
import ExportButton from "@/components/admin/ExportButton";
import frontendCreateCITLDirector from "@/services/frontend/citl_director/frontendCreateCITLDirector";
import frontendReadCITLDirectors from "@/services/frontend/citl_director/frontendReadCITLDirectors";
import AdminAddCITLDirectorForm from "@/views/admin/citl_director/AdminAddCITLDirectorForm";
import Sort from "@/views/admin/Sort";
import ActiveFilter from "@/views/forms/ActiveFilter";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

export default function AdminCITLDirectorPage() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [total, setTotal] = useState(0);
  const [cITLDirectors, setCITLDirectors] = useState([]);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    openAdd: false,
    name: "",
    sortColumn: "User.name",
    sortOrder: "asc",
    email: "",
    active: null,
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadCITLDirectors({
      limit: state.limit,
      page: state.page + 1,
      name: state.name,
      email: state.email,
      active: state.active,
      sortColumn: state.sortColumn,
      sortOrder: state.sortOrder,
    }).then((res) => {
      if (!subscribe) return;

      setCITLDirectors(res.data);
      setTotal(res.total);
    });
    return () => {
      subscribe = false;
    };
  }, [state]);

  useEffect(() => {
    console.log({ cITLDirectors });
  }, [cITLDirectors]);

  function handleChangePage(_, page) {
    setState((prev) => ({ ...prev, page }));
  }

  function handleChangeRowsPerPage(event) {
    setState((prev) => ({
      ...prev,
      limit: parseInt(event.target.value, 10),
      page: 0,
    }));
  }

  function openAddDialog(open) {
    setState((prev) => ({ ...prev, openAdd: open }));
  }

  async function onAdd(value) {
    const { userId } = value;

    return frontendCreateCITLDirector({ userId })
      .then((res) => {
        enqueueSnackbar({
          message: "CITL Director added successfully",
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to add CITL Director",
          variant: "error",
        });
      });
  }

  function handleNameChange(e) {
    setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  const debouncedHandleNameChange = _.debounce(handleNameChange, 800);

  function handleEmailChange(e) {
    setState((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  }
  const debouncedHandleEmailChange = _.debounce(handleEmailChange, 800);

  function handleActiveChange(active) {
    setState((prev) => ({
      ...prev,
      active,
    }));
  }

  function handleSortByChange(e) {
    setState((prev) => ({
      ...prev,
      sortColumn: e.target.value,
    }));
  }
  function handleSortOrderChange(e, value) {
    setState((prev) => ({
      ...prev,
      sortOrder: value,
    }));
  }

  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Typography variant='h6'>CITL Directors</Typography>
            <Tooltip title='Add'>
              <IconButton onClick={() => openAddDialog(true)}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>

        <Stack direction='row' spacing={1} sx={{ px: 2 }}>
          <TextField
            size='small'
            label='Name'
            onChange={debouncedHandleNameChange}
          />
          <TextField
            size='small'
            label='Email'
            onChange={debouncedHandleEmailChange}
          />
          <ActiveFilter onChange={handleActiveChange} />

          <Sort
            onChangeSortColumn={handleSortByChange}
            onChangeSortOrder={handleSortOrderChange}
            sortColumn={state.sortColumn}
            sortOptions={[
              { value: "User.name", label: "Name" },
              { value: "User.email", label: "Email" },
            ]}
            sortOrder={state.sortOrder}
          />
          <ExportButton link='/api/export/citl_director' />
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align='center'>Active</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cITLDirectors.map((cITLDirector) => (
                <AdminCITLDirector
                  cITLDirector={cITLDirector}
                  key={cITLDirector.id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={total}
          rowsPerPage={state.limit}
          page={state.page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <AdminAddCITLDirectorForm
        open={state.openAdd}
        onClose={() => openAddDialog(false)}
        onSubmit={onAdd}
      />
    </AdminLayout>
  );
}
