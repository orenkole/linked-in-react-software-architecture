# 2. Server-side rendering (SSR)

## Routing with server-side rendering

`ReactDOM.hydrate` - add react to prerendered html. It than updates when data changes

After changes in _server.js_ run `npm run build` to rebuild frontend
Than run `npx nodemon --exec npx babel-node server.js`
now we can see our whole app

## Styling with server-side rendering

The correct way to add styles is webpack
But we don't go deep, so we'll use another approach.
We'll use styled components
`npm i styled-components`

## Server-side rendering caveats

There is no such entities as _window_, _document_ and other browser APIs on server

# 4. Data loading and WebSockets

## When should we load data

`main` branch
