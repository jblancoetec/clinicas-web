import styles from "./Layout.module.css";
import Link from "next/link";
import { Container, Button } from "react-bootstrap";
import { signOut, signIn, useSession } from "next-auth/react";
import { ReactNode } from "react";
import { NextRouter, useRouter } from "next/router";

const Layout = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const router: NextRouter = useRouter();
  const ruta: string = router.pathname;
  const rutaExacta: string = router.asPath;
  const rutaInicio: boolean = ruta === "/" || ruta === "/donar/[tipo]";

  return (
    <div
      className={`${styles.Contenedor} ${
        rutaInicio ? styles.GrillaEnUnaFila : styles.GrillaEnDosFilas
      }`}
    >
      <header
        className={`${styles.Header} ${rutaInicio ? styles.HeaderGlass : ""}`}
      >
        <Container className={styles.Enlaces}>
          <Link href="/">
            <a>HOME</a>
          </Link>
          {session ? (
            <Button
              className={styles.Boton}
              variant="light"
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
            >
              CERRAR SESION
            </Button>
          ) : (
            <Button
              className={styles.Boton}
              variant="light"
              onClick={() => signIn()}
            >
              INICIAR SESION
            </Button>
          )}
        </Container>
      </header>

      {rutaInicio && <div className={styles.SeparadorHeader} />}

      <main key={rutaExacta} className={styles.Main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
