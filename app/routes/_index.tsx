import type { MetaFunction } from "@remix-run/node";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const theme = useTheme();
  return (
    <div>
      <h1>Test</h1>
      <Button
        variant="contained"
        color="primary"
        sx={{ backgroundColor: theme.palette.error.main }}
      >
        Hello World
      </Button>
    </div>
  );
}
