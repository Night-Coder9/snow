import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import ModalProvider from "@/providers/modal-providers";
import { Toaster } from "@/components/ui/toaster";


const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snow-All-In-One-CRM",
  description: "All in one agency management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" suppressHydrationWarning>
    <body className={font.className}>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
      
        <ModalProvider>
        {children}
        <Toaster/>
        </ModalProvider>
        </ThemeProvider>
        </body>
    </html>
  
  );
}
