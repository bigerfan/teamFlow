"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Box,
  Button,
  CssVarsTheme,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { SignupUserData, userSignupSchema } from "@teamFlow/shared";
import { toast } from "react-toastify";
import { createUser } from "../actions";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    transition: "box-shadow 0.15s ease, border-color 0.15s ease",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "primary.main",
    },
    "&.Mui-focused": {
      boxShadow: (theme: CssVarsTheme) =>
        `0 0 0 3px ${theme.palette.primary.main}22`,
    },
  },
};

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupUserData>({
    resolver: zodResolver(userSignupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: "",
    },
  });

  const onSubmit = async (data: SignupUserData) => {
    try {
      await createUser(data);
    } catch (error) {
      toast.error("something went wrong");
    }
    // later:
    // await signup(data);
  };

  return (
    <Paper
      elevation={0}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        maxWidth: 640,
        p: { xs: 3, sm: 5 },
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        boxShadow: "0 20px 60px -20px rgba(0,0,0,0.25)",
        backgroundColor: "background.paper",
      }}
    >
      {/* <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff",
          fontWeight: 800,
          fontSize: 20,
        }}
      >
        TF
      </Box> */}

      <Typography
        component="h1"
        sx={{
          mb: 1,
          fontSize: { xs: 30, sm: 36 },
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        Create account
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Start managing your projects with TeamFlow.
      </Typography>

      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label="Username"
            margin="normal"
            error={!!errors.username}
            helperText={errors.username?.message}
            sx={fieldSx}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <PersonOutlineIcon fontSize="small" color="action" />
            //     </InputAdornment>
            //   ),
            // }}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            type="email"
            label="Email"
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={fieldSx}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <MailOutlineIcon fontSize="small" color="action" />
            //     </InputAdornment>
            //   ),
            // }}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={fieldSx}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <LockOutlinedIcon fontSize="small" color="action" />
            //     </InputAdornment>
            //   ),
            // }}
          />
        )}
      />

      <Controller
        name="role"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            type="text"
            label="role"
            margin="normal"
            error={!!errors.role}
            helperText={errors.role?.message}
            sx={fieldSx}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <LockOutlinedIcon fontSize="small" color="action" />
            //     </InputAdornment>
            //   ),
            // }}
          />
        )}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disableElevation
        disabled={isSubmitting}
        sx={{
          mt: 3,
          py: 1.4,
          borderRadius: 2,
          fontWeight: 700,
          textTransform: "none",
          fontSize: 16,
          // background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          // transition: "transform 0.15s ease, box-shadow 0.15s ease",
          // "&:hover": {
          //   transform: "translateY(-1px)",
          //   boxShadow: "0 10px 25px -8px rgba(99,102,241,0.6)",
          //   background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          // },
        }}
      >
        {isSubmitting ? "Creating account..." : "Create account →"}
      </Button>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 3 }}
      >
        Already have an account?{" "}
        <Box
          component="a"
          href="/login"
          sx={{
            color: "primary.main",
            fontWeight: 600,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Sign in
        </Box>
      </Typography>
    </Paper>
  );
}
