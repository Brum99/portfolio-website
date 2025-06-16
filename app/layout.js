import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"],
  variable: "--font-outfit"
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"], 
  variable: "--font-ovo"
});


export const metadata = {
  title: "Portfolio - Sam Peterson",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${ovo.variable} `}>
      <body className="antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
      dark:texxt-white">
        {children}
      </body>
    </html>
  );
}
