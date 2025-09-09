

import "../globals.css";
import Navigation from "@/components/Navigation";
export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body className="pt-20">
      <Navigation/>
        {children}
      </body>
    </html>
  );
}
