import "./globals.css";


export const metadata = {
  title: "Fiorello - A Flower Shop and Florist",
  icons: {
    icon: "/flower3.svg",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-20">
        {children}
      </body>
    </html>
  );
}
