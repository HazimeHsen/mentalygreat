import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClientOnly from "@/components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MG Media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <Navbar />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
