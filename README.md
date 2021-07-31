# Clínicas-Web

Aplicación web de gestión de datos de donadores para el Hospital de Clínicas “José de San Martín”. Las funcionalidades propuestas hasta el momento son:

- Pagina principal como herramienta de difusión y promoción de la donación de plasma, sangre y plaquetas
- Cuestionario básico para determinar si un usuario es un potencial donante.
- Gestión de datos de donadores.
- Acceso a datos de donadores mediante usuario y contraseña.
- Gestión de roles y privilegios de acceso para personal medico y/o competente.

## Instalación :wrench:

> Nota: La aplicación se ejecuta bajo entorno [`nodejs`](https://nodejs.org/es/). Asegúrese tener instalado el mismo para poder continuar. 

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

## Instalación alternativa - Docker :wrench:

> Nota: Esta alternativa se ejecuta en un entorno [Docker](https://hub.docker.com/) con una imagen basada en linux. Asegúrese tener instalado el mismo para poder continuar 

Es posible descargar la imagen del proyecto de [DockerHub](https://hub.docker.com/) con el siguiente comando.

```shell
comando
```

Una vez descargada, puede correr la imagen con el siguiente comando

```shell
comando
```

Ahora puede usar cualquier editor de código para continuar con el desarrollo.

## Construido con :hammer_and_wrench:

- [NextJS](https://nextjs.org/)
- [ReactJS](https://es.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/es)
- [Bootstrap](https://getbootstrap.com/)
- [FontAwesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)

