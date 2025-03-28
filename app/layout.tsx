export const metadata = {
  title: 'Dog Website',
  description: 'The best dog website on the internet',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
