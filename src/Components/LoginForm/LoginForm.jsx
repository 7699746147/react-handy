import { FormEvent, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, FormControl, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import FormHelperText from "@mui/material/FormHelperText";
import { LoadingButton } from "@mui/lab";
import { emailValidator, passwordValidator } from "./validator";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    mode: "onSubmit",
  });
  const [loading, setLoading] = useState(false);

  const loginSubmit = handleSubmit(async (data) => {
    if (data.email && data.password) {
      setLoading(true);
    }
  });

  return (
    <>
      <Box
        sx={{
          backgroundImage: "linear-gradient(to right, #16549D , #C2DF71)",
          height: "100vh",
          margin: "0px",
          padding: "0px",
          display: "flex",
          alignItem: "center",
          JustifyContent: "center",
          color: "#FFF",
        }}
      >
        <Box
          sx={{
            width: {
              lg: "30%",
              md: "40%",
              sm: "50%",
              xs: "90%",
            },
            margin: "auto",
            backgroundColor: "#C7D0D9",
            borderRadius: "25px",
            border: "2px solid #F5FFF2",
            boxShadow: "#77B06C 5px 5px, #F5FFF2 7px 7px",
            textAlign: "center",
          }}
        >
          <Box sx={{ marginTop: "-60px" }}>
            <PersonOutlineIcon
              sx={{
                fontSize: "80px",
                color: "FFF !important",
                padding: "20px",
                borderRadius: "50%",
                backgroundColor: "#3273B5",
              }}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <form onSubmit={loginSubmit}>
              <FormControl variant="standard" sx={{ width: "73%" }}>
                <TextField
                  autoComplete="off"
                  label="Email"
                  type="text"
                  sx={{ marginBottom: "10px" }}
                  error={errors && errors.email ? true : false}
                  helperText={errors?.email?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon sx={{ color: "#16549D" }} />
                      </InputAdornment>
                    ),
                  }}
                  {...register("email", emailValidator())}
                />
                <TextField
                  label="Password"
                  type="password"
                  autoComplete="off"
                  inputProps={{
                    autoComplete: "password",
                    form: {
                      autoComplete: "off",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#16549D" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ marginBottom: "10px" }}
                  {...register("password", passwordValidator())}
                  error={errors && errors.password ? true : false}
                  helperText={errors?.password?.message}
                />
                <FormHelperText sx={{ color: "error.main" }}></FormHelperText>
                <LoadingButton
                  type="submit"
                  color="primary"
                  variant="contained"
                  loading={loading}
                  loadingIndicator="Loading..."
                  sx={{ marginBottom: 2 }}
                >
                  Log In
                </LoadingButton>
                <Box sx={{ marginBottom: 2 }}>
                  <a
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "#3273B5",
                    }}
                  >
                    Forgot Password?
                  </a>
                </Box>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
