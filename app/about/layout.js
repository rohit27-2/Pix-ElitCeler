import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function PageLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          
          {children}
          
          </body>
      </html>
    );
  }