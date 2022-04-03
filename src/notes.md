# Code splitting

## Code splitting basics

`const One = lazy(() => import('./One'));` only works with `export default`

## Error boundaries

To see the fallback from ErrorBoundary.js we must serve in production mode

`npm i -g serve` - serve production build

`serve -s build` - serve local build as in production mode
