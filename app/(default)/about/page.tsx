"use client";
import { title } from "@/components/primitives";
import Image from "next/image";
import { Award, Users, Heart, Crown } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1563212367-fa4315b77034"
          alt="About LUXIMA"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center text-white"
          >
            <h1 className={`${title()} text-5xl font-bold mb-4`}>About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Connecting couples with exceptional wedding professionals since
              2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: 0.5,
          }}
          className="container mx-auto px-4"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-8">
              LUXIMA was born from a passion for creating perfect wedding
              celebrations. We understand that your wedding day is one of life's
              most significant moments, and finding the right vendors is crucial
              to bringing your vision to life.
            </p>
            <p className="text-lg text-muted-foreground">
              Our platform connects couples with carefully curated wedding
              professionals who share our commitment to excellence, creativity,
              and exceptional service.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-primary/5 py-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: 0.8,
          }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: "Happy Couples", value: "10,000+" },
              { icon: Award, label: "Verified Vendors", value: "1,500+" },
              { icon: Crown, label: "Cities Covered", value: "50+" },
              { icon: Heart, label: "Perfect Matches", value: "15,000+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="py-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 0.5,
            delay: 1,
          }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                bio: "Former wedding planner with 15 years of industry experience.",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                bio: "Tech innovator passionate about creating seamless digital experiences.",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Vendor Relations",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                bio: "Dedicated to maintaining our high standards of vendor curation.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
