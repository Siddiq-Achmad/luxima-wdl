"use client";
import { title } from "@/components/primitives";
import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Spacer,
  Tab,
  Tabs,
} from "@heroui/react";
import { cn } from "@heroui/react";

import { FrequencyEnum } from "./pricing-types";
import { frequencies, tiers } from "./pricing-tiers";

export default function Component() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(
    frequencies[0]
  );

  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex((f) => f.key === selectedKey);

    setSelectedFrequency(frequencies[frequencyIndex]);
  };

  return (
    <div className="relative flex max-w-4xl flex-col items-center py-24 m-auto px-5">
      <div
        aria-hidden="true"
        className="px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#9e8865] to-[#C9A9E9] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-xl flex-col text-center"
      >
        <h4 className={`${title()} font-medium leading-7 text-primary`}>
          Pricing
        </h4>
        <h1 className="text-4xl font-medium tracking-tight">
          Get unlimited access.
        </h1>
        <Spacer y={4} />
        <h2 className="text-large">
          Discover the ideal plan, beginning at under $2 per week.
        </h2>
      </motion.div>
      <Spacer y={8} />
      <Tabs
        classNames={{
          tabList: "bg-default-100/70",
          cursor: "bg-background dark:bg-default-200/30",
          tab: "data-[hover-unselected=true]:opacity-90",
        }}
        radius="full"
        onSelectionChange={onFrequencyChange}
      >
        <Tab
          key={FrequencyEnum.Yearly}
          aria-label="Pay Yearly"
          className="pr-0.5"
          title={
            <div className="flex items-center gap-2">
              <p>Pay Yearly</p>
              <Chip color="secondary" variant="flat">
                Save 25%
              </Chip>
            </div>
          }
        />
        <Tab key={FrequencyEnum.Quarterly} title="Pay Quarterly" />
      </Tabs>
      <Spacer y={12} />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.5,
          delay: 0.5,
        }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {tiers.map((tier) => (
          <Card
            key={tier.key}
            isBlurred
            className={cn("bg-background/60 p-3 dark:bg-default-100/50", {
              "!border-small border-secondary/50": tier.mostPopular,
            })}
            radius="lg"
            shadow="md"
          >
            {tier.mostPopular ? (
              <Chip
                className="absolute right-4 top-4"
                color="secondary"
                variant="flat"
              >
                Most Popular
              </Chip>
            ) : null}
            <CardHeader className="flex flex-col items-start gap-4 pb-6">
              <h2 className="font-medium text-xl">{tier.title}</h2>
              <p className="text-light text-default-500">{tier.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-4">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-3xl font-semibold leading-7 tracking-tight text-transparent">
                  {typeof tier.price === "string"
                    ? tier.price
                    : tier.price[selectedFrequency.key]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-tiny font-light text-default-400">
                    {tier.priceSuffix
                      ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                      : `/${selectedFrequency.priceSuffix}`}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                color="secondary"
                radius="full"
                href={tier.href}
                variant={tier.buttonVariant}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </motion.div>
      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400">
          Are you an open source developer?&nbsp;
          <Link color="foreground" href="#" underline="always">
            Get a discount
          </Link>
        </p>
      </div>
    </div>
  );
}
