import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className="flex flex-col min-h-[100dvh]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
