import Header from "@/components/commons/layout/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
