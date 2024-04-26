import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import * as yup from 'yup';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  Box,
  Typography,
  InputLabel,
} from "@mui/material";
import Modal from "@mui/material/Modal";

import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { Dropdown } from "semantic-ui-react";

function Users() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "8px",
    outline: "none",
    boxShadow: 24,
    p: 4,
  };

  const [role, setRole] = useState("");
  const handleAddUsersClick = () => {
    setIsModalOpen(true);
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
    role: yup.string().required('Role is required'),
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <MDTypography variant="h6" color="white">
                  Users
                </MDTypography>
                <MDButton color="white" variant="contained" onClick={handleOpen}>
                  Add Users
                </MDButton>
              </MDBox>
              {/* {isModalOpen && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 9999,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "white",
                      padding: 20,
                    }}
                  >
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={6}>
                        <TextField fullWidth label="Name" placeholder="Name" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField fullWidth label="Email" type="email" placeholder="Email" />
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            placeholder="Password"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={role}
                              label="Role"
                              sx={{ zIndex: 99 }} // Correct syntax for setting zIndex
                              onChange={(e) => setRole(e.target.value)}
                            >
                              <MenuItem value="admin">Admin</MenuItem>
                              <MenuItem value="user">User</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    
                    <Grid item xs={12} style={{ textAlign: "right" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setIsModalOpen(false)}
                        style={{ color: "white" }}
                      >
                        Close
                      </Button>
                    </Grid>
                  </div>
                </div>
              )} */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    User Information
                  </Typography>
                  <Grid container spacing={2} mt={2}>
                    <Grid item xs={6}>
                      <TextField fullWidth label="Name" placeholder="Name" />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField fullWidth label="Email" type="email" placeholder="Email" />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        placeholder="Password"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth>
                        <InputLabel id="role-select-label">Role</InputLabel>
                        <Select
                          labelId="role-select-label"
                          id="role-select"
                          value={role}
                          label="Role"
                          onChange={handleChange}
                          style={{ minWidth: "120px", height: "40px" }}
                        >
                          <MenuItem value="admin">Admin</MenuItem>
                          <MenuItem value="user">User</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "full",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "blue" }}
                      style={{ color: "white", marginTop: "12px" }}
                      onClick={handleClose}
                      mt={2}
                    >
                      Close
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "blue" }}
                      style={{ color: "white", marginTop: "12px" }}
                      onClick={handleClose}
                      mt={2}
                    >
                      Save
                    </Button>
                  </Box>
                </Box>
              </Modal>

              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Users;
