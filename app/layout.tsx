import { Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Unforget — Memory for AI Agents',
    template: '%s | Unforget',
  },
  description:
    'Fast, self-hosted memory layer for AI agents. Zero-LLM writes, 4-channel hybrid retrieval, PostgreSQL + pgvector.',
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.2rem' }}>
    <img src="/logo.png" alt="" style={{ height: '1.6rem' }} />
    Unforget
  </span>
)

const footer = (
  <div key="footer" style={{ padding: '2rem 0', textAlign: 'center', opacity: 0.6 }}>
    Apache 2.0 ·{' '}
    <a href="https://github.com/unforget-ai/unforget" target="_blank" rel="noopener">
      Unforget
    </a>
  </div>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/unforget-ai/unforget/tree/main/docs"
          editLink="Edit this page on GitHub"
          navbar={
            <Navbar
              logo={logo}
              projectLink="https://github.com/unforget-ai/unforget"
            />
          }
          footer={footer}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true,
          }}
          toc={{
            float: true,
            title: 'On this page',
            backToTop: true,
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
