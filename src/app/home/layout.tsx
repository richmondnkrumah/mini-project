import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header isLandingPage={false} />
      {children}
      <Footer />
    </>
  );
}
