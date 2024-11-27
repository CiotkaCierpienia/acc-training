import localFont from "next/font/local";
import "./globals.css";
import Nav from '@/app/_components/Nav';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Training APP",
  description: "SDK showcase for training",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Nav/>
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {children}
          </div>
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-auto w-full">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
      </body>
    </html>
  );
}
