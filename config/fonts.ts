import { Space_Mono as FontMono, Plus_Jakarta_Sans as FontSans, Space_Grotesk as FontSerif } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  });

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "400",
});
