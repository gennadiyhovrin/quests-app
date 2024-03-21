import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escape Room",
  description: "Quests Room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="app"
        className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white min-h-screen bg-cover bg-no-repeat bg-center"
      >
        <SectionContainer>
          <div className="flex h-screen flex-col justify-between font-sans">
            <Header />
            <main className="mb-auto ">{children}</main>
            <Footer />
          </div>
        </SectionContainer>
        <Toaster />
      </body>
    </html>
  );
}
