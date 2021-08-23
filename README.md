# Clínicas-Web

Aplicación web de gestión de datos de donadores para el Hospital de Clínicas “José de San Martín”. Las funcionalidades propuestas hasta el momento son:

- Pagina principal como herramienta de difusión y promoción de la donación de plasma, sangre y plaquetas
- Cuestionario básico para determinar si un usuario es un potencial donante.
- Gestión de datos de donadores.
- Acceso a datos de donadores mediante usuario y contraseña.
- Gestión de roles y privilegios de acceso para personal medico y/o competente.

## Instalación :wrench:

> Nota: La aplicación se ejecuta bajo entorno [`nodejs`](https://nodejs.org/es/). Asegúrese tener instalado el mismo para poder continuar. 
>
> Para instalar en `nodejs` en Windows 10, solo debe descargar e instalar el ejecutable `lts` del siguiente [enlace](https://nodejs.org/es/).
>
> Para instalar `nodejs` en Linux, se recomienda instalar previamente `nvm` mediante alguno de los siguientes comandos
>
> ```
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
> ```
>
> ```
> wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
> ```
>
> Luego, en una terminal separada ejecutar el siguiente comando para terminar de instalar `nodejs`
>
> ```
> nvm install --lts
> ```
>
> 




Una vez descargado el código fuente, se debe ejecutar siguiente comando para instalar las dependencias del sistema.

```shell
npm install
```

Para ejecutar la aplicación en modo de desarrollo, ejecute el siguiente comando.

```shell
npm run dev
```

> Nota: Para poder ejecutar el resto de los posibles comandos, leer el `package.json` de la carpeta raíz del código fuente.

Es muy probable que esto habrá un navegador con una dirección en el `http://localhost:3000`. Si no es así, habrá un navegador en la dirección mencionada.

## Construido con :hammer_and_wrench:

- [NextJS](https://nextjs.org/)
- [ReactJS](https://es.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/es)
- [Bootstrap](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)

## Material de consulta para la construcción de la aplicación

- [Curso de React.js](https://www.youtube.com/watch?v=Di4eAxkPNp0)
- [Guía practica para React.js](https://bluuweb.github.io/react-udemy/)
- [Curso de Next.js](https://www.youtube.com/watch?v=AOpcZdYeUAs&list=PLPl81lqbj-4JgsUXNxAK2wQ2ynbfg0L5X)
- [Curso de Next.js (Fundamentos)](https://bluuweb.github.io/nextjs/01-fundamentos/#requisitos)
- [Guías practicas para desarrollo web](https://bluuweb.github.io/)

> Agradecimientos a [Bluuweb!](https://bluuweb.github.io/) por todo el material subido.

