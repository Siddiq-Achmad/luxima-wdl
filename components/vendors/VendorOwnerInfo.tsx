"use client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";
import { useVendor } from "@/context/VendorContext";
import { motion } from "framer-motion";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "../icons";

const VendorOwnerInfo = () => {
  const {
    name,
    location,
    rating,
    image,
    social,
    owner,
    contact,
    workingHours,
    coordinates,
  } = useVendor();

  return (
    // <div className="w-full">
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
    >
      <Card>
        <CardHeader className="relative flex flex-col justify-end overflow-visible bg-gradient-to-br from-gray-200 via-slate-400 to-gray-300">
          <Avatar className="h-32 w-32 translate-y-14" src={image} />
          <Button
            className="absolute right-3 top-3 bg-white/20 text-white dark:bg-black/20"
            radius="full"
            size="sm"
            variant="light"
          >
            Vendor
          </Button>
        </CardHeader>
        <CardBody>
          <div className="pb-4 pt-12 text-center mb-10">
            <h4 className="text-2xl font-semibold">{name}</h4>
            <p className="text-medium text-default-400">{location}</p>
            <h6 className="text-tiny font-light">
              {contact.email && (
                <Link href={"mailto:" + contact.email}>{contact.email}</Link>
              )}
            </h6>

            <p className="py-2 text-small text-foreground">Rating : {rating}</p>
            <div className="flex gap-2 justify-center items-center"></div>
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
            <div className="flex gap-1 lg:gap-4 pb-1 p-4 items-center justify-center">
              {social.instagram && (
                <Link href={social.instagram} isExternal>
                  <InstagramIcon />
                </Link>
              )}
              {social.twitter && (
                <Link href={social.twitter} isExternal>
                  <TwitterIcon />
                </Link>
              )}
              {social.facebook && (
                <Link href={social.facebook} isExternal>
                  <FacebookIcon />
                </Link>
              )}
              {social.tiktok && (
                <Link href={social.tiktok} isExternal>
                  <TelegramIcon />
                </Link>
              )}
              {social.youtube && (
                <Link href={social.youtube} isExternal>
                  <YoutubeIcon />
                </Link>
              )}
              {social.whatsapp && (
                <Link href={social.whatsapp} isExternal>
                  <WhatsappIcon />
                </Link>
              )}
            </div>
            <Link
              className="mt-6 bg-primary uppercase text-white font-sans py-2 px-4 rounded-full"
              href={"tel:" + contact.phone} //{contact.phone}
            >
              call this vendor
            </Link>
          </div>
          <div className="p-4 mb-4 relative">
            <h4 className="text-medium font-medium uppercase text-center">
              Opening Hours
            </h4>
            <Divider className="my-2 mb-4" />
            <Button
              className="absolute right-3 top-3 bg-primary text-white dark:bg-black/20"
              radius="full"
              size="sm"
            >
              Open
            </Button>
            <div className="flex flex-wrap justify-center py-2">
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between gap-2">
                  <p>Sunday</p>
                  <span className="text-default-400 text-tiny font-light">
                    Closed
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p>Monday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {workingHours.open} - {workingHours.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p>Tuesday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {workingHours.open} - {workingHours.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p>Wednesday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {workingHours.open} - {workingHours.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p>Thursday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {workingHours.open} - {workingHours.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p>Friday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {workingHours.open} - {workingHours.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p>Saturday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {workingHours.open} - {workingHours.close}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 mb-4 relative text-center">
            <h4 className="text-medium font-medium uppercase text-center">
              Contact Person
            </h4>
            <Divider className="my-2 mb-4" />
            <Button
              className="absolute right-3 top-3 bg-primary text-white dark:bg-black/20"
              radius="full"
              size="sm"
            >
              Author
            </Button>

            <h4 className="text-medium font-sans mb-2">{owner.name}</h4>
            <Spacer y={1} />
            <div className="flex gap-1 lg:gap-4 pb-1 p-4 items-center justify-center">
              {owner.socialMedia.instagram && (
                <Link href={owner.socialMedia.instagram} isExternal>
                  <InstagramIcon />
                </Link>
              )}
              {owner.socialMedia.twitter && (
                <Link href={owner.socialMedia.twitter} isExternal>
                  <TwitterIcon />
                </Link>
              )}
              {owner.socialMedia.facebook && (
                <Link href={owner.socialMedia.facebook} isExternal>
                  <FacebookIcon />
                </Link>
              )}
            </div>
          </div>
          <Spacer y={2} />
          <div className="p-4 relative text-center">
            <h4 className="text-medium font-medium uppercase text-center">
              Location Info
            </h4>
            <Divider className="my-2 mb-4" />
            <Button
              className="absolute right-3 top-3 bg-primary text-white dark:bg-black/20"
              radius="full"
              size="sm"
            >
              Maps
            </Button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.301631381635!2d95.3304346!3d5.5221836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304039c9d8e950c7%3A0xe71e0f833ab2cf36!2sLUXIMA%20ID!5e0!3m2!1sid!2sid!4v1736139439977!5m2!1sid!2sid"
              width="300"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default VendorOwnerInfo;
