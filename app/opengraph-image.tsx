import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'
export const alt = 'Unforget — Memory for AI Agents'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const logoData = await readFile(join(process.cwd(), 'public', 'logo.png'))
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <img src={logoBase64} width={120} height={120} style={{ marginBottom: 24 }} />
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'white',
            marginBottom: 16,
          }}
        >
          Unforget
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            maxWidth: 800,
            textAlign: 'center',
          }}
        >
          Fast, self-hosted memory for AI agents
        </div>
        <div
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 48,
            fontSize: 22,
            color: '#60a5fa',
          }}
        >
          <span>~7ms writes</span>
          <span>·</span>
          <span>~25ms recall</span>
          <span>·</span>
          <span>PostgreSQL + pgvector</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
