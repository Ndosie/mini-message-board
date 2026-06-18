# Mini Message Board

This repository is a small educational project for learning Express and EJS, and for practicing a minimal Model-View-Presenter (MVP) style architecture.

- Purpose: Demonstrate a simple Express app using EJS templates and a clean separation between routing (`routes/`), presentation (`views/`), and business logic (`controllers/`).
- Audience: Beginners learning server-side rendering with Express and organizing small Node.js apps.

## Prerequisites

- Node.js (v14+ recommended)

## Install

```bash
npm install
```

## Run

```bash
node app.js
# or if package.json has a start script:
# npm start
```

The app typically listens on port 3000; open http://localhost:3000 in your browser.

## Project structure

- `app.js` — application entry, Express setup, middleware, and server start.
- `routes/` — route definitions (HTTP endpoints).
- `controllers/` — handlers and business logic invoked by routes.
- `views/` — EJS templates (`index.ejs`, `form.ejs`, `message.ejs`).
- `public/` — static assets like `styles.css`.

## How this fits MVP (minimal)

- Model: In this simple app there may not be a separate persistence layer; messages can be in-memory for learning purposes.
- View: EJS templates render data into HTML (`views/`).
- Presenter (Controller): `controllers/` prepare data and orchestrate responses; `routes/` forward requests to controllers.

This separation keeps templates simple and business logic testable.

## Notes

- This project is intentionally small to highlight fundamentals. Extend it by adding a `models/` folder and persistent storage (e.g., JSON file or a database) when you're ready.

## License

For educational use.
