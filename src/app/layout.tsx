import React, { Children } from 'react'
import "./globals.css";

type Props = {}

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default layout