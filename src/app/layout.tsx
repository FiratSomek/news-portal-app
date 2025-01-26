import { Header } from "@/components/Header";
import "../../styles/globals.css";
import { inter } from "@/ui/fonts";
import NewsCard from "@/components/NewsCard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
