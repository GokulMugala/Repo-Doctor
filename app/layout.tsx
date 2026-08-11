import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Repo Doctor — Engineering Health",description:"AI-powered engineering health checks for GitHub repositories."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
