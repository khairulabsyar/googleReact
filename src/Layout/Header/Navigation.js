import { forwardRef } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  useTheme,
  IconButton,
} from "@mui/material";
import { UseAuth, UseDarkMode, UseDialog } from "../../Hooks";
import { SignInSignUp, NavbarComponent } from "../../Components";
import { Dark, Light } from "../../Assets";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const style = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "normal",
});

const linkList = [
  { url: "google", name: "Google" },
  { url: "about", name: "About" },
  { url: "profile", name: "Profile" },
];

function Navigation() {
  const theme = useTheme();
  const { logout, token } = UseAuth();
  const { showDialog, closeDialog, open } = UseDialog();
  const colorMode = UseDarkMode();

  const handleClickOpen = () => {
    showDialog();
  };

  const handleClickClose = () => {
    closeDialog();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "10vh",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: 1,
      }}
    >
      {/* Right side */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 1,
          pl: 1,
        }}
      >
        {linkList.map((list) => {
          return (
            <NavbarComponent url={list.url} name={list.name} style={style} />
          );
        })}
      </Box>

      {/* Left side , sign in*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
          pr: 1,
        }}
      >
        {/* light / dark mode */}
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{ bgcolor: "white" }}
        >
          {theme.palette.mode === "dark" ? (
            <img src={Light} alt="light mode" />
          ) : (
            <img src={Dark} alt="dark mode" />
          )}
        </IconButton>

        {/* Button to show sign in sign up popup */}
        {!token ? (
          <Button variant="outlined" onClick={handleClickOpen}>
            Sign In
          </Button>
        ) : (
          <Button onClick={() => handleLogout()}>Log Out</Button>
        )}

        {/* Popup for rsign in sign up  */}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClickClose}
          aria-describedby="alert-dialog-slide-description"
          fullWidth
          maxWidth="xl"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DialogTitle>
              {"Hey You Need To Sign Up / Sign In To Enter This World"}
            </DialogTitle>
          </Box>
          <DialogContent>
            <SignInSignUp />
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
}

export default Navigation;
