import { Nadvar } from "@/components/Nadvar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ProviderSesione } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlanetaIp",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderSesione>
          <Nadvar />
          {children}
        </ProviderSesione>


      </body>
    </html>
  );
}
