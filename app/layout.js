import CartProvider from "@/context/CartContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { HistoryProvider } from "@/context/HistoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barz Store",
  description: "Barz Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <HistoryProvider>
            <div className=" bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-200  ">
              {children}
            </div>
          </HistoryProvider>
        </CartProvider>
      </body>
    </html>
  );
}
