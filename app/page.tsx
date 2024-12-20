import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import Hero from "@/components/hero";
import FeaturedVendors from "@/components/featured-vendors";
import WhyChooseUs from "@/components/why-choose-us";
import LatestBlog from "@/components/latest-blog";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollingVendor from "@/components/scrolling-banner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollingVendor />
      <FeaturedVendors />
      <WhyChooseUs />
      <LatestBlog />
      <Footer />
    </div>
  );
}
