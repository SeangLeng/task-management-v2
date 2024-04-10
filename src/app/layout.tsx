import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProviderContainer } from "./NextUIProvider";
import RootNavbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-primary min-h-svh">
        <NextUIProviderContainer>
          <RootNavbar />
          <div className="container mx-auto py-20 url">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </div>
          <Footer />
        </NextUIProviderContainer>
      </body>
    </html>
  );
}
