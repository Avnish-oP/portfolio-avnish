import Hero from "@/components/Hero";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  
  return (
    <div>
      <div>
        <Hero />
      </div>
    </div>
  );
}
