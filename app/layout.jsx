import "./globals.css";
import Navbar from "@/components/Navbar";
import { AlfaSlabOne, ChivoMono } from "./helper/fonts";

export const metadata = {
  title: "Ilhan Bae",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          className={`flex min-w-screen min-h-screen ${AlfaSlabOne.variable} ${ChivoMono.variable}`}
        >
          {/* Nav */}
          <Navbar />
          {/* Children */}
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
