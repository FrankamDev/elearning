import "../css/app.css";
import "./app.css";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthContext";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";



function initializeTheme() {
 const savedTheme = localStorage.getItem("theme") || "light";
 document.querySelector("html")?.setAttribute("data-theme", savedTheme);
}

createInertiaApp({
 title: (title) => (title ? `${title} - ${appName}` : appName),
 resolve: (name) =>
  resolvePageComponent(
   `./pages/${name}.tsx`,
   import.meta.glob("./pages/**/*.tsx")
  ),
 setup({ el, App, props }) {
  const root = createRoot(el);

  root.render(
   <AuthProvider>
    <App {...props} />
   </AuthProvider>
  );
 },
 progress: {
  color: "cyan",
 },
});


initializeTheme();

export function toggleTheme() {
 const current = document.querySelector("html")?.getAttribute("data-theme");
 const newTheme = current === "light" ? "dark" : "light";
 document.querySelector("html")?.setAttribute("data-theme", newTheme);
 localStorage.setItem("theme", newTheme);
}
