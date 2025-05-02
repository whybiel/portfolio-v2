import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Gabriel Moraes",
  description: "Gabriel Moraes - Portfólio",
  icons:{
    icon:'/iconLogo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <body className={workSans.className} suppressHydrationWarning>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
