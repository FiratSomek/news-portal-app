import { Header } from "@/components/Header";
import "../../styles/globals.css";
import { inter } from "@/ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <div className="main-content ">{children}</div>
      </body>
    </html>
  );
}
