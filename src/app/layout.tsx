import React from 'react'
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
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
        <SpeedInsights />
      </body>
    </html>
  )
}

export default layout