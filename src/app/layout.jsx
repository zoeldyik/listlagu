import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "List Lagu",
  description: "list lagu dari flashdisk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="garden">
      <body className={`${inter.className} text-neutral-700`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
