# ElysiaJS Sample

this is a sample of how to use [elysia](https://github.com/elysiajs/elysia) and a collection of my thoughts on [elysia](https://github.com/elysiajs/elysia).

### What this project do?

this project will get random quotes from [API NINJAS](https://api-ninjas.com) and display it on frontend, simple isn't it?

#### Setup

to run this project you are required to set the following environment for each project inside [apps](/apps) folder then run command `bun run dev` then visit `http://localhost:3000`

backend
```bash
NINJAS_API_KEY= # your api_key from api ninjas
NODE_ENV= development | production # optional set to production will disabled swagger
PORT= # optional default is 8888
```

frontend
```bash
VITE_BACKEND_BASE_URL= http://localhost:8888 # example
```

### My thoughts on ElysiaJS

on my opinion elysia have one problem that is its required your structure to be in `Method Chaining` styles in order to make lsp working with [@elysiajs/eden](https://github.com/elysiajs/eden) to works, Its just that I prefer using `Sequential Method Calls` styles

Method Chaining
```typescript
const app = new Elysia()
  .use(swagger())
  .use(cors())
  .get("/", () => ...)
  .listen(8888);
```

Sequential Method Calls
```typescript
const app = new Elysia();
app.use(swagger());
app.use(cors());
app.get("/", () => ...);
app.listen(8888);
```
