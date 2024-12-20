"use client";
import { title } from "@/components/primitives";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className={`${title()} text-4xl font-bold mb-4`}>Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Whether you have questions, feedback,
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-sans font-bold">Get in Touch</h2>
                <p className="text-gray-600">
                  Have questions about our services? We'd love to hear from you.
                  Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-600">
                    123 Wedding Street, Suite 100
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-600">
                    info@elegantweddings.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-gold-500" />
                  <span className="text-gray-600">(555) 123-4567</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-950 p-8 rounded-lg shadow-sm"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Your message..." className="h-32" />
                </div>
                <Button className="w-full" color="primary" radius="full">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
