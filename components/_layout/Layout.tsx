import styles from "./Layout.module.css";
import Link from "next/link";
import { Container } from "react-bootstrap";

interface Props {
  children: React.ReactNode;
}

const _Layout = ({ children }: Props) => {
  return (
    <div className={styles.Contenedor}>
      <header className={styles.Header}>
        <Container className={styles.Enlaces}>
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/inicio">
            <a>ACCEDER</a>
          </Link>
        </Container>
      </header>

      <main className={styles.Main}>{children}</main>
    </div>
  );
};

export default _Layout;
