import { Inter } from "next/font/google";
import "./globals.css";
import Navi from "@/components/Common/Navi";
import Footer from "@/components/Common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "A portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`@${inter.className} bg-dark text-white`}>
        <Navi />
        {children}
        <Footer />
      </body>
    </html>
  );
}
