import AlertBanner from 'components/AlertBanner'
import Footer from 'components/Footer'

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <AlertBanner preview={preview} loading={loading} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
