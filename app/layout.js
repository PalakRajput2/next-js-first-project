import "./globals.css";
import { Playfair_Display } from "next/font/google";

export const metadata = {
  title: "Home Page",
  icons: {
    icon: "/flower3.svg",
  },
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair-display",
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} pt-20`}>
  {children}
</body>
    </html>
  );
}
