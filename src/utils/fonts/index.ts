import { Manrope } from "next/font/google";

const manrope_init = Manrope({
  weight: ["400", "500", "600", "700"], // Regular, Medium, Semi Bold, Bold
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const manrope = manrope_init.variable;
