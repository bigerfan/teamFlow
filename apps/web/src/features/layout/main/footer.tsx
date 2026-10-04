"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        // mt: 10,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: 6,
            display: "flex",
            justifyContent: "space-between",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {/* Description */}
          <Box sx={{ maxWidth: 360 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              TeamFlow
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Simple project and task management for teams. Organize your work,
              collaborate with your team, and keep everything in one place.
            </Typography>
          </Box>

          {/* Social links */}
          <Stack direction="row" spacing={1}>
            <IconButton
              component={Link}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component={Link}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component={Link}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Box>

        <Divider />

        <Box
          sx={{
            py: 3,
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 TeamFlow. All rights reserved.
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Built with Next.js & MUI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
