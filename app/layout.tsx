import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import Favicon from "@/public/favicon.ico"
import { Metadata } from "next";
import "./globals.css";

// Metadata for the page Head
export const metadata: Metadata = {
  title: "Sports Agent",
  description: "Sports Agent",
  icons: [{rel: "icon", url: Favicon.src}],
}

// Layout for the page
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head/>
      <body>
        <div data-theme="mytheme">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
