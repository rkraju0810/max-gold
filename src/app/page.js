import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import MaxGoldADS from "@/components/home/MaxGoldADS";
import WhyMaxGold from "@/components/home/WhyMaxGold";
import "./globals.css";

export default function Home() {
  return (
    <div >
      <Hero />
      <HomeAbout />
      <WhyMaxGold/>
      <MaxGoldADS/>
    </div>
  );
}
