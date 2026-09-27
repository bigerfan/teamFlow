"use client";

import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        bgcolor: "#05080B",
      }}
    >
      {/* Decorative orange shape */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 300, md: 600 },
          height: { xs: 300, md: 600 },
          right: { xs: -180, md: -250 },
          bottom: { xs: -150, md: -250 },
          borderRadius: "50%",
          bgcolor: "#F65F09",
          opacity: 0.9,
        }}
      />

      {/* Large background text */}
      <Typography
        sx={{
          position: "absolute",
          right: { xs: -40, md: 30 },
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: { xs: "25vw", md: "18vw" },
          fontWeight: 900,
          lineHeight: 0.8,
          letterSpacing: "-0.08em",
          color: "rgba(243, 237, 237, 0.035)",
          userSelect: "none",
        }}
      >
        FLOW
      </Typography>

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ maxWidth: 900 }}>
          {/* Eyebrow */}
          <Typography
            sx={{
              mb: 3,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#F65F09",
            }}
          >
            Project & Task Management
          </Typography>

          {/* Heading */}
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "clamp(4rem, 16vw, 7rem)",
                md: "clamp(6rem, 11vw, 10rem)",
              },
              fontWeight: 900,
              lineHeight: 0.82,
              letterSpacing: "-0.07em",
              textTransform: "uppercase",
              color: "#F3EDED",
            }}
          >
            Make work
            <br />
            <Box
              component="span"
              sx={{
                color: "#F65F09",
              }}
            >
              move.
            </Box>
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              mt: 5,
              maxWidth: 520,
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.7,
              color: "#8F8888",
            }}
          >
            Organize projects, manage tasks, and collaborate with your team from
            one simple workspace.
          </Typography>

          {/* CTA */}
          <Button
            component={Link}
            href="/register"
            variant="contained"
            sx={{
              mt: 4,
              px: 3,
              py: 1.5,
              borderRadius: 0,
              bgcolor: "#F65F09",
              color: "#05080B",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.04em",
              textTransform: "uppercase",

              "&:hover": {
                bgcolor: "#FF6D16",
              },
            }}
          >
            Get started →
          </Button>
        </Box>
      </Container>

      {/* Bottom information */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 24, md: 40 },
          bottom: 24,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: "#F65F09",
          }}
        />

        <Typography
          sx={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#625D5C",
          }}
        >
          Built for focused teams
        </Typography>
      </Box>
    </Box>
  );
}
