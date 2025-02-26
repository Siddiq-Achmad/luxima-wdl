"use client";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TiktokIcon,
  TwitterIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "@/components/icons";
import { Link } from "@heroui/react";
import { JSX } from "react";

interface SocialLinksProps {
  social: {
    facebook?: string | undefined;
    instagram?: string | undefined;
    twitter?: string | undefined;
    linkedin?: string | undefined;
    youtube?: string | undefined;
    whatsapp?: string | undefined;
    telegram?: string | undefined;
    github?: string | undefined;
    tiktok?: string | undefined;
  };
}

// Mapping platform ke ikon
const iconMap: Record<string, JSX.Element> = {
  facebook: <FacebookIcon size={24} />,
  github: <GithubIcon size={24} />,
  instagram: <InstagramIcon size={24} />,
  linkedin: <LinkedinIcon size={24} />,
  youtube: <YoutubeIcon size={24} />,
  whatsapp: <WhatsappIcon size={24} />,
  telegram: <TelegramIcon size={24} />,
  twitter: <TwitterIcon size={24} />,
  tiktok: <TiktokIcon size={24} />,
};

export default function SocialLinks({ social }: SocialLinksProps) {
  return (
    <>
      {Object.entries(social).map(([platform, url]) => (
        <div
          key={platform}
          className="rounded-xl text-center flex flex-col justify-center items-center"
        >
          <Link href={url} isExternal color="primary">
            {iconMap[platform] ?? platform}
          </Link>
          <p className="mt-1 hidden md:block text-tiny font-light text-primary capitalize">
            {platform}
          </p>
        </div>
      ))}
    </>
  );
}
