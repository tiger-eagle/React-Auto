import React, { useState, useEffect } from 'react';



import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';


import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import useAddUSer from './adminDbHooks/useAddUser';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const AddUsers = (props) => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [requirePassword, setRequirePassword] = useState(!(process.env.REACT_APP_DisableStandardLogin === 'true'))
  const passwordHelperText = "Minimum length 12 characters";
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [officeLocation, setOfficeLocation] = useState("");
  const [submit, setSubmit] = useState(false);

  const { duplicateUser, userAdded } = useAddUSer({
    submit: submit,
    user: {
      username: username,
      password: requirePassword ? password : null,
      email: email,
      givenName: givenName,
      familyName: familyName,
      phoneNumber: phoneNumber,
      officeLocation: officeLocation,
    }
  });
  const usernameHelperText = duplicateUser ? "Error: Username Exists" : "Enter a username";
  useEffect(() => {
    if (submit) {

      setSubmit(false)
    }
  }, [submit])

  useEffect(() => {
    if (duplicateUser) {
      setUsernameError(true)
      console.log("error duplicate user")
    }
    else {
      setUsernameError(false)
    }

  }, [duplicateUser])
  const classes = useStyles();

  let passwordError;

  if (password.length < 12) {
    passwordError = true;
  }
  else {
    passwordError = false;
  }
  let confirmPasswordError;
  let confirmPasswordHelperText;

  if (password == confirmPassword) {
    confirmPasswordError = false;
    confirmPasswordHelperText = "Passwords match"
  }
  else {
    confirmPasswordError = true;
    confirmPasswordHelperText = "Passwords do not match"
  }
  let addUserDisable = ((username.length > 0) && (requirePassword === false || (confirmPasswordError === false) && (passwordError === false))) ? false : true;

  return (
    <React.Fragment>
      <IconButton onClick={() => setShow(true)}>
        <AddIcon />
      </IconButton>
      <Dialog
        open={show}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-Login-title2"
        aria-describedby="alert-Login-slide-description2"
      >
        <DialogTitle id="alert-Login-title2">
          {"Add User "}
        </DialogTitle>
        <DialogContent>
          <form autoComplete="off">


            <div style={{ "overflowX": "hidden", 'overflowY': 'hidden' }}>

              <Grid
                style={{ marginTop: 8, padding: 8 }}
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={0}
              >



                <Grid item xs={12}  >


                  <Grid
                    style={{ padding: 8 }}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                  >
                    <Grid item xs={12}  >
                      <TextField
                        id="field1"
                        inputProps={{
                          autoComplete: "off",
                        }}

                        required
                        label="Username"
                        onChange={(event) => setUsername(event.target.value)}
                        variant="outlined"
                        fullWidth
                        helperText={usernameHelperText}
                        error={usernameError}
                      />
                    </Grid>

                    <Grid item xs={12}  >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={requirePassword === true}
                            onChange={(event) => (setRequirePassword(event.target.checked))}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                        }
                        label="Require Password"
                      />

                    </Grid>

                    {requirePassword && <React.Fragment>
                      <Grid item xs={12}  >
                        <TextField

                          required
                          type="password"
                          label="Password"
                          onChange={(event) => setPassword(event.target.value)}
                          variant="outlined"
                          fullWidth
                          helperText={passwordHelperText}
                          error={passwordError}
                          inputProps={{
                            autoComplete: "off",
                          }}
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}  >
                        <TextField
                          required
                          type="password"
                          label="Confirm Password"
                          onChange={(event) => setConfirmPassword(event.target.value)}
                          helperText={confirmPasswordHelperText}
                          error={confirmPasswordError}
                          variant="outlined"
                          fullWidth
                          autoComplete="off"
                        />
                      </Grid>
                    </React.Fragment>}
                    <Grid item xs={12}  >
                      <TextField
                        inputProps={{
                          autoComplete: 'off'
                        }}

                        label="Email"
                        onChange={(event) => setEmail(event.target.value)}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}  >
                      <TextField
                        inputProps={{
                          autoComplete: 'off'
                        }}
                        label="Given Name"
                        onChange={(event) => setGivenName(event.target.value)}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}  >
                      <TextField
                        inputProps={{
                          autoComplete: 'off'
                        }}
                        label="Family Name"
                        onChange={(event) => setFamilyName(event.target.value)}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}  >
                      <TextField
                        inputProps={{
                          autoComplete: 'off'
                        }}
                        label="Phone Number"
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}  >
                      <TextField
                        inputProps={{
                          autoComplete: 'off'
                        }}
                        label="Office Location "
                        onChange={(event) => setOfficeLocation(event.target.value)}
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={4}  >
                      <Button variant="contained" color="primary" disabled={addUserDisable}
                        onClick={() => setSubmit(true)}
                      >
                        Add User
                    </Button>
                    </Grid>
                    <Grid item xs={4}  >
                      {userAdded && <CheckCircleIcon
                        fontSize="large"
                        color="primary"
                        style={{
                          // color: theme.palette.error.main,
                          verticalAlign: "middle",
                        }}
                      />}
                      {usernameError && <ErrorIcon color="error" fontSize="large"
                        style={{
                          // color: theme.palette.error.main,
                          verticalAlign: "middle",
                        }}
                      />}
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        onClick={() => setShow(false)}
                        color="primary"
                      >
                        {userAdded ? "Close" : "Cancel"}
                      </Button>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>

            </div>
          </form >



        </DialogContent>
        <DialogActions>



        </DialogActions>
      </Dialog>
    </React.Fragment>




  )

}


export default AddUsers;
//export default AddUsers;
