import React from 'react'
import "./globals.css";

type Props = {}

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body className="flex flex-col min-h-[100dvh]">
        {children}
        </body>
    </html>
  )
}

export default layout