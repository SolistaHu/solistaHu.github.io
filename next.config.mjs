import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx'
})

const nextConfig = {
  output: 'export'
}

export default withNextra(nextConfig)