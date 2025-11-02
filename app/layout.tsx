import './globals.css';

export const metadata = {
  title: 'FoundrAI — AI Co-founder',
  description: 'FoundrAI — your personal AI co-founder',
}

export default function RootLayout({ children } : Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
