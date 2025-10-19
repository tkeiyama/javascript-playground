import { Config } from '@react-router/dev/config'
import { vercelPreset } from '@vercel/react-router/vite'

export default {
  ssr: true,
  // Since building an application with vercelPreset generates a file for server in server/nodejs_xxx/index.js, the serve script doesn't work for local development.
  // So it'd use vercelPreset only on Vercel.
  presets: process.env.VERCEL === "1" ? [vercelPreset()] : undefined,
} satisfies Config
