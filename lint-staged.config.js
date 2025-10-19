/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{ts,tsx,md,json}": ["pnpm lint", "pnpm format"]
}
