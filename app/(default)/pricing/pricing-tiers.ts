import type {Frequency, Tier} from "./pricing-types";

import {FrequencyEnum, TiersEnum} from "./pricing-types";

export const frequencies: Array<Frequency> = [
  {key: FrequencyEnum.Yearly, label: "Pay Yearly", priceSuffix: "per year"},
  {key: FrequencyEnum.Quarterly, label: "Pay Quarterly", priceSuffix: "per quarter"},
];

export const tiers: Array<Tier> = [
  {
    key: TiersEnum.Basic,
    title: "Basic",
    price: "Free",
    href: "#",
    featured: false,
    mostPopular: false,
    description: "Paket gratis untuk vendor yang ingin mencoba layanan kami.",
    features: [
      "Listing vendor terbatas",
      "5 layanan per vendor",
      "Galeri hingga 10 gambar",
      "Dukungan email",
    ],
    buttonText: "Coba Sekarang",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Pro,
    title: "Pro",
    price: {
      yearly: "Rp 99k",
      quarterly: "Rp 30k",
    },
    href: "#",
    featured: false,
    mostPopular: true,
    description: "Untuk vendor kecil hingga menengah dengan kebutuhan lebih besar.",
    features: [
      "Listing vendor tanpa batas",
      "20 layanan per vendor",
      "Galeri hingga 50 gambar",
      "Prioritas dalam pencarian",
      "Dukungan prioritas email & chat",
    ],
    buttonText: "Upgrade ke Pro",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Enterprise,
    title: "Enterprise",
    price: {
      yearly: "Rp 199k",
      quarterly: "Rp 60k",
    },
    priceSuffix: "per vendor",
    href: "#",
    featured: true,
    mostPopular: false,
    description: "Untuk vendor besar dan agensi yang membutuhkan fitur premium.",
    features: [
      "Semua fitur dari paket Pro",
      "Layanan tidak terbatas",
      "Galeri tanpa batas",
      "Iklan & promosi premium",
      "Dukungan eksklusif 24/7",
    ],
    buttonText: "Hubungi Kami",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];