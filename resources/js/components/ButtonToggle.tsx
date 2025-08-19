import { toggleTheme } from "../app";
export default function ThemeSwitcher() {
 return (
  <button className="btn btn-primary" onClick={toggleTheme}>
   clique 
  </button>
 );
}
