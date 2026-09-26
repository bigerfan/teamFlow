import SignupForm from "@/src/features/auth/components/signup-form";
import { Box } from "@mui/material";

const Page = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
        background: `
          radial-gradient(900px 500px at 15% 15%, rgba(246,95,9,0.16), transparent 60%),
          radial-gradient(700px 450px at 85% 85%, rgba(246,95,9,0.10), transparent 60%),
          radial-gradient(1200px 800px at 50% 50%, rgba(246,95,9,0.05), transparent 70%),
          #05080B
        `,
        backgroundColor: "background.default",
      }}
    >
      <SignupForm />
    </Box>
  );
};

export default Page;
