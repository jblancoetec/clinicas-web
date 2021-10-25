import Encabezado from "./Encabezado";
import Metadata from "./Metadata";
import PieDePagina from "./PieDePagina";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <>
    <Metadata />
    <Encabezado />
    <main>{children}</main>
    <PieDePagina />
  </>
);

export default Layout;
