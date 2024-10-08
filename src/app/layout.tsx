import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AuthSessionProvider from "./authSessionProvider";

const inter = Inter({ subsets: ["latin"] });

//os metadatas podem estar dentro de todas as paginas da aplicaçao web, não apenas no root layout
//é recomendado aplicar metadata apenas em paginas renderizadas no server side

export const metadata: Metadata = {
  title: "Tarefas+ | Organize suas tarefas de forma fácil",
  description: "Generated by create next app",
  keywords: ["Tarefas", "Organizador"],
  openGraph: {
    images: [
      "https://media.licdn.com/dms/image/v2/D4D22AQEA4JFzUHIWsw/feedshare-shrink_1280/feedshare-shrink_1280/0/1713022589795?e=1726704000&v=beta&t=ZIleONxjDZPagq1XHZ_SBonR4klWU77qh4l1cR_I7ng",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthSessionProvider>
          <Header />
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
