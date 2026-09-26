import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nabbar from "@/components/Nabbar";
import Footer from "@/components/Footer";
import { UserProvider } from "@/context/FitLogContext";
import ToastProvider from "@/components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog",
  description: "Your personal workout tracker",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UserProvider>
          <Nabbar />

          <main>{children}</main>

          <Footer />

          <ToastProvider />
        </UserProvider>
      </body>
    </html>
  );
}