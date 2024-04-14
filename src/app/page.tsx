import { Benefits, Discount, Features, Hero, Pricing } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <Discount />
    </main>
  );
}
