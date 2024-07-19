import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/NavBar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pixieus",
  description: "Experience the world of LED's with us. Entertainment Redefined.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        <Footer />
        </body>
    </html>
  );
}
