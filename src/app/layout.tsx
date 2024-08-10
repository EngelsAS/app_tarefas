import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AuthSessionProvider from "./authSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tarefas+ | Organize suas tarefas de forma fácil",
  description: "Generated by create next app",
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
