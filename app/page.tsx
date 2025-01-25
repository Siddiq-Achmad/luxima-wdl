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
import { Testimonials } from "@/components/testimonials";
import { testimonials } from "@/lib/testimonialData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ScrollingVendor />
      <FeaturedVendors />
      <WhyChooseUs />
      <LatestBlog />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </div>
  );
}
