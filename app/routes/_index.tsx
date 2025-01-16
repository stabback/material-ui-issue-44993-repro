
import type { MetaFunction } from "@remix-run/node";
import Button from '@mui/material/Button';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Test</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  )
}