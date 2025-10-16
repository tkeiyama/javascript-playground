# JavaScript Playground

## Environments

| name        | version |
| ----------- | ------- |
| Debian      | 12.12   |
| Node.js     | 22.20.0 |
| pnpm        | 10.18.3 |
| claude-code | 2.0.15  |

## Development

1. Install packages

```
pnpm install
```

## How to Add a New Pacakge

You can use the following helper script to add a new pacakge.  

```shell
pnpm new {package name}
```

ex. `pnpm new react-vite`

## Package Names

### `@javascript-playground/{core}-{purpose}`

ex. `@javascript-playground/react-vite`

- `{core}` is a core tech.
  - ex. `typescript`, `react`
- `{purpose}` is what the package does.
  - ex. `vite`, `custom-hook`
