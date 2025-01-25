import Link from "next/link";
import { Crown, Instagram, Facebook, Twitter } from "lucide-react";
import { TiktokIcon, Logo } from "./icons";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-light">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link href={siteConfig.links.home}>
                <Logo color="primary" />
                <span className="text-2xl font-bold">
                  {siteConfig.info.title}
                </span>
              </Link>
            </div>
            <p className=" mb-4">{siteConfig.info.description}</p>
            <div className="flex space-x-4 ">
              <Link
                href={siteConfig.links.instagram}
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href={siteConfig.links.tiktok}
                className="hover:text-primary transition-colors"
              >
                <TiktokIcon className="h-6 w-6" />
              </Link>
              <Link
                href={siteConfig.links.facebook}
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href={siteConfig.links.twitter}
                className="hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Find Vendors
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Wedding Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Vendor Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/venues"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Wedding Venues
                </Link>
              </li>
              <li>
                <Link
                  href="/photographers"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Photographers
                </Link>
              </li>
              <li>
                <Link
                  href="/florists"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Florists
                </Link>
              </li>
              <li>
                <Link
                  href="/caterers"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Caterers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: {siteConfig.info.email}</li>
              <li>Phone: {siteConfig.info.phone}</li>
              <li>Address: {siteConfig.info.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.info.title}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
