import "./globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import Header from "./components/Header";
import Footer from "./components/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
    // openGraph: {
    //   images: [settings.data.og_image?.url || ""],
    // },
  };
}

// Comment for git pushing

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="select-none">
      <body className={clsx(urbanist.className, "relative min-h-screen bg-slate-900")}>
        <Header />
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
