import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";

import { visuallyHidden } from "@mui/utils";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router'
import { fetchAllUsers, deleteUserByID } from "../../lib/rtk/user/userSlice";
import store from "../../lib/rtk/store";
//icons
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import GroupTwoToneIcon from "@mui/icons-material/GroupTwoTone";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
//components
import MuiDialog from "../Static/MuiDialog";
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "email",
    label: "Email",
  },
  {
    id: "firstName",
    label: "First Name",
  },
  {
    id: "lastName",
    label: "Last Name",
  },
  {
    id: "contactNumber",
    label: "Contact Number",
  },
  {
    id: "actions",
    label: "Actions",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{ bgcolor: "#cfd8dc" }}>
        {headCells.map((headCell) => {
          if (headCell.id == "actions")
            return (
              <TableCell
                key={headCell.id}
                align="left"
                padding="normal"
                sx={{ fontWeight: "bold" }}
              >
                {headCell.label}
              </TableCell>
            );
          else
            return (
              <TableCell
                key={headCell.id}
                align="left"
                padding="normal"
                sortDirection={orderBy === headCell.id ? order : false}
                sx={{ fontWeight: "bold" }}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            );
        })}
      </TableRow>
    </TableHead>
  );
}
const AllUserTable = () => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("email");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = React.useState([]);
  //hooks
  const dispatch = useDispatch();
  const router = useRouter();

  //fetch all users
  const fetchData = async () => {
    await dispatch(fetchAllUsers());
    let user = store.getState().user;
    setRows(user.users);
  };
  //Fetch Users At Startup
  React.useEffect(() => {
    fetchData();
  }, []);
  //delete user
  const handleDelete = async (id) => {
    await dispatch(deleteUserByID(id));
    let user = store.getState().user;
    if (user.responseOK) fetchData();
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar
          sx={{
            bgcolor: "#37474f",
            color: "white",
          }}
        >
          <GroupTwoToneIcon />
          <Typography
            sx={{ flex: "1 1 100%", ml: 1 }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            All Users
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow hover tabIndex={-1} key={row.id}>
                      <TableCell
                        align="left"
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="normal"
                      >
                        {row.email}
                      </TableCell>
                      <TableCell align="left" padding="normal">
                        {row.firstName}
                      </TableCell>
                      <TableCell align="left" padding="normal">
                        {row.lastName}
                      </TableCell>
                      <TableCell align="left" padding="normal">
                        {row.contactNumber}
                      </TableCell>
                      <TableCell align="center" padding="normal">
                        <Stack direction="row" spacing={2}>
                          <MuiDialog
                            id={row.id}
                            handleFunction={handleDelete}
                            title="Delete User"
                            icon={<DeleteTwoToneIcon sx={{ color: "red" }} />}
                            operation="Delete"
                          />

                          <Tooltip title="Edit">
                            <IconButton sx={{ color: "green" }}>
                              <EditTwoToneIcon
                                onClick={() =>  router.push(`/admin/edit/${row.id}`)}
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="View">
                            <IconButton sx={{ color: "orange" }}>
                              <RemoveRedEyeTwoToneIcon
                                onClick={() => handleView(row.id)}
                              />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default AllUserTable;
