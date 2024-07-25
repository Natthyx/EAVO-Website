import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Layout;
