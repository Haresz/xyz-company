// app/fonts.ts
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const fonts = {
  montserrat,
};
