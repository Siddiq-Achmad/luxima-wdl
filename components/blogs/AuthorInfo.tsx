"use client";
// components/AuthorInfo.tsx
import { Blog } from "@/types/blog";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Avatar,
  Link,
  Tabs,
  Tab,
  Chip,
  Divider,
} from "@nextui-org/react";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "../icons";

export default function AuthorInfo({ author }: { author: Blog["author"] }) {
  return (
    <div className="w-full">
      <Card>
        <CardHeader className="relative flex flex-col justify-end overflow-visible bg-gradient-to-br from-gray-200 via-slate-400 to-gray-300">
          <Avatar className="h-24 w-24 translate-y-14" src={author.avatar} />
          <Button
            className="absolute right-3 top-3 bg-white/20 text-white dark:bg-black/20"
            radius="full"
            size="sm"
            variant="light"
          >
            Author
          </Button>
        </CardHeader>
        <CardBody className="text-center mt-4">
          <div className="pb-4 pt-6">
            <h4 className="text-large font-medium">{author.name}</h4>
            <p className="text-small text-default-400">{author.email}</p>
            <div className="flex gap-1 lg:gap-4 pb-1 p-4 items-center justify-center">
              {author.social && author.social.instagram && (
                <Link href={author.social.instagram} isExternal>
                  <InstagramIcon />
                </Link>
              )}
              {author.social && author.social.twitter && (
                <Link href={author.social.twitter} isExternal>
                  <TwitterIcon />
                </Link>
              )}
              {author.social && author.social.linkedin && (
                <Link href={author.social.linkedin} isExternal>
                  <LinkedinIcon />
                </Link>
              )}
              {author.social && author.social.github && (
                <Link href={author.social.github} isExternal>
                  <GithubIcon />
                </Link>
              )}
              {author.social && author.social.telegram && (
                <Link href={author.social.facebook} isExternal>
                  <FacebookIcon />
                </Link>
              )}
              {author.social && author.social.telegram && (
                <Link href={author.social.telegram} isExternal>
                  <TelegramIcon />
                </Link>
              )}
              {author.social && author.social.whatsapp && (
                <Link href={author.social.whatsapp} isExternal>
                  <WhatsappIcon />
                </Link>
              )}
            </div>
            <p className="py-2 text-small text-foreground">{author.bio}</p>
            <div className="flex gap-2 justify-center items-center">
              <p>
                <span className="text-small font-medium text-default-500">
                  13
                </span>
                &nbsp;
                <span className="text-small text-default-400">Following</span>
              </p>
              <p>
                <span className="text-small font-medium text-default-500">
                  2500
                </span>
                &nbsp;
                <span className="text-small text-default-400">Followers</span>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
