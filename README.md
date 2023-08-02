![Tradehelm](./assets/tradehelm-logo.svg "TradeHelm")

En el camino desde mi casa al supermercado, mi cerebro pierde la capacidad de retener información, por ende necesito hacer una aplicación que se encargue de esa difícil tarea. No, no puedo usar Google Keep, Evernote, nada, soy dev, la tengo que hacer, además esto es un challenge así que agarrá la pala.

### La aplicación debe:

- Mostrar un formulario para agregar elementos a la lista.
- Poder borrar cada elemento de la lista independientemente.
- Mantener los elementos de la lista cuando vuelvo a la aplicación después de cerrarla.

> En caso de guardar los datos solo en `localStorage`, se debe simular un delay al cargar, guardar y borrar los elementos, como si interactuaramos con un servicio externo.

### Es necesario:

- Cumplir con las reglas de linting del .eslintrc
- Tipar el item de lista de supermercado.
- Cumplir con las especificaciones visuales.

### Es muy importante:

- Pensar en la experiencia de usuario, minimizar la cantidad de interacciónes necesarias para usar la aplicación.
- Ser ordenada/o a la hora de codear y estructurar archivos. Keep it simple.

### No es necesario, pero suma:

- Tipar todos los elementos que usa la aplicación.
- Agregar tests unitarios, con jest para funciones, con react-testing-library para componentes.
- Agregar tests de integración, con Cypress o afínes.

Cualquier adicional que contribuya a la aplicación sin complicarla, suma, dark mode por ejemplo.

### Se puede usar:

- Cualquier solución de estilos (CSS Modules, CSS Plano, SASS).

### Modalidad de entrega:

- Repositorio público subido a GitHub, Gitlab, Bitbucket.
- Link a la aplicación funcionando.

### Ejemplos:

> ![Vacío](./assets/screenshots/vacio.png "Vacío") > ![Formulario](./assets/screenshots/formulario.png "Formulario") > ![Lleno](./assets/screenshots/lleno.png "Lleno")

# Solution

![](assets/screenshots/desktop-view.png)

![](assets/screenshots/form-active.png)

![](assets/screenshots/form-items.png)

![](assets/screenshots/mobile-view.png)

### Link

- [Live site](https://tradehelm-challenge-two.vercel.app/)

### Built with

<p>
 <a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/-TypeScript-007acc?style=flat-square&logo=TypeScript&logoColor=white" height="30" alt="TypeScript"/>
 </a>
  <a href="https://sass-lang.com/">
  <img src="https://img.shields.io/badge/-Sass-ff69b4?style=flat-square&logo=SASS&logoColor=white" height="30" alt="Sass"/>
 </a>
  <a href="https://react.dev/blog/2023/03/16/introducing-react-dev">
  <img src="https://img.shields.io/badge/-React-17A1E6?style=flat-square&logo=react&logoColor=white" height="30" alt="React"/>
 </a>
  <a href="https://vitejs.dev/">
  <img src="https://img.shields.io/badge/-ViteJS-purple?style=flat-square&logo=Vite&logoColor=white" height="30" alt="ViteJs"/>
 </a>
</p>

## Run the project locally

1. Clone this repository

2. Install dependencies

  ```sh
   npm install
   ```

3. Start the local server

  ```sh
   npm run dev
   ```

4. Open http://localhost:5173/ in your browser