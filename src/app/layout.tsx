import { Header } from "@/components/Header";
import "../../styles/globals.css";
import { inter } from "@/ui/fonts";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <UserProvider>
          <Header />
          <div className="main-content">{children}</div>
        </UserProvider>
      </body>
    </html>
  );
}
