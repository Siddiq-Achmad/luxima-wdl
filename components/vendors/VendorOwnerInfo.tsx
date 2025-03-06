import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@heroui/react";

import { motion } from "framer-motion";
import { useVendorContext } from "@/context/VendorContext";
import SocialLinks from "../socialLink";
import { Social } from "@/types/social";

export default function VendorOwnerInfo() {
  const { vendor } = useVendorContext();

  return (
    // <div className="w-full">
    <motion.div
      initial={{ opacity: 0, x: "-100vh" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <Card className="rounded-3xl">
        <CardHeader className="relative flex flex-col justify-end overflow-visible bg-gradient-to-bl from-yellow-600 from-0% via-violet-100 via-50% to-pink-100 to-100%">
          <Avatar className="h-32 w-32 translate-y-14" src={vendor?.image} />
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
            <h4 className="text-medium md:text-xl  uppercase font-semibold">
              {vendor?.name}
            </h4>
            <p className="text-sm font-light text-default-400">
              {vendor?.location}
            </p>
            <h6 className="text-sm font-light mb-2">
              {vendor?.contact?.email && (
                <Link size="sm" href={"mailto:" + vendor.contact.email}>
                  {vendor.contact.email}
                </Link>
              )}
            </h6>

            <p className="py-2 text-small text-foreground">
              Rating : {vendor?.rating} ({vendor?.reviewCount})
            </p>
            <div className="flex gap-2 justify-center items-center"></div>
            <div className="flex gap-2 flex-col justify-between">
              <div className="flex gap-2 justify-center items-center mt-2 mb-4">
                {vendor?.isFeatured && vendor?.isFeatured == true ? (
                  <Button
                    color="primary"
                    variant="shadow"
                    size="sm"
                    radius="full"
                    className="text-white/80"
                  >
                    Featured
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    variant="bordered"
                    size="sm"
                    radius="full"
                  >
                    Unfeatured
                  </Button>
                )}
                {vendor?.isActive && vendor?.isActive == true ? (
                  <Button
                    color="primary"
                    variant="shadow"
                    size="sm"
                    radius="full"
                    className="text-white/80"
                  >
                    Actived
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    variant="bordered"
                    size="sm"
                    radius="full"
                  >
                    Inactive
                  </Button>
                )}
                {vendor?.isVerified && vendor?.isVerified == true ? (
                  <Button
                    color="primary"
                    variant="shadow"
                    size="sm"
                    radius="full"
                    className="text-white/80"
                  >
                    Verified
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    variant="bordered"
                    size="sm"
                    radius="full"
                  >
                    Unverified
                  </Button>
                )}
              </div>
              <div className="flex gap-2 justify-center items-center mt-2 mb-4">
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

            <div className="flex gap-2 mt-4 p-4 items-center justify-center">
              {vendor?.social && <SocialLinks social={vendor.social} />}
            </div>
            <Link
              className="mt-6 bg-primary uppercase text-white font-sans py-2 px-4 rounded-full"
              href={"tel:" + vendor?.contact?.phone} //{contact.phone}
              size="sm"
            >
              call this vendor
            </Link>
          </div>
          <div className="p-4 mb-4 relative">
            <h4 className="text-medium font-semibold uppercase text-center">
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
            <div className="w-full mx-auto px-6">
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between gap-2">
                  <p className="text-sm font-light">Sunday</p>
                  <span className="text-default-400 text-tiny font-light">
                    Closed
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p className="text-sm font-light">Monday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {vendor?.workingHours?.open} - {vendor?.workingHours?.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p className="text-sm font-light">Tuesday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {vendor?.workingHours?.open} - {vendor?.workingHours?.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p className="text-sm font-light">Wednesday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {vendor?.workingHours?.open} - {vendor?.workingHours?.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p className="text-sm font-light">Thursday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {vendor?.workingHours?.open} - {vendor?.workingHours?.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p className="text-sm font-light">Friday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {vendor?.workingHours?.open} - {vendor?.workingHours?.close}
                  </span>
                </li>
                <li className="flex justify-between gap-2">
                  <p className="text-sm font-light">Saturday</p>
                  <span className="text-default-400 text-tiny font-light">
                    {vendor?.workingHours?.open} - {vendor?.workingHours?.close}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 mb-4 relative text-center flex flex-col justify-center items-center gap-2">
            <h4 className="text-medium font-semibold uppercase text-center">
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
            <div className="p-2">
              <Avatar
                isBordered
                size="lg"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </div>

            <h4 className="text-medium font-semibold mb-2 capitalize">
              {vendor?.owner?.name}
            </h4>
            <p className="text-sm font-light mb-2">{vendor?.owner?.email}</p>
            <p className="text-sm font-light mb-2">{vendor?.owner?.phone}</p>
            <p className="text-sm font-light mb-2">{vendor?.owner?.bio}</p>

            <Spacer y={1} />

            <div className="flex gap-2 mt-4 p-4 items-center justify-center">
              {vendor?.owner?.socialMedia && (
                <SocialLinks social={vendor.owner.socialMedia} />
              )}

              {/* {vendor?.owner?.socialMedia?.instagram && (
                <Link href={vendor.owner.socialMedia.instagram} isExternal>
                  <InstagramIcon />
                </Link>
              )}
              {vendor?.owner?.socialMedia?.twitter && (
                <Link href={vendor.owner.socialMedia.twitter} isExternal>
                  <TwitterIcon />
                </Link>
              )}
              {vendor?.owner?.socialMedia?.facebook && (
                <Link href={vendor.owner.socialMedia.facebook} isExternal>
                  <FacebookIcon />
                </Link>
              )} */}
            </div>
          </div>
          <Spacer y={2} />
          <div className="p-4 relative text-center">
            <h4 className="text-medium font-semibold uppercase text-center">
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
            <div className="py-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.301631381635!2d95.3304346!3d5.5221836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304039c9d8e950c7%3A0xe71e0f833ab2cf36!2sLUXIMA%20ID!5e0!3m2!1sid!2sid!4v1736139439977!5m2!1sid!2sid"
                width="100%"
                height="300"
                className="rounded-3xl"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
