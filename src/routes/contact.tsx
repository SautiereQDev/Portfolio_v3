import { createFileRoute } from "@tanstack/react-router";
import Contact from "../pages/Contact.tsx";

export const Route = createFileRoute("/contact")({
  component: About,
});

function About() {
  return <Contact />;
}
