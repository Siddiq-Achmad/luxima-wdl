import { Heart, Shield, Star, Users } from 'lucide-react';
import { FeatureCard } from './feature-card';

const FEATURES = [
  {
    icon: Star,
    title: 'Curated Selection',
    description: 'We carefully vet and select only the most exceptional wedding vendors for our directory.'
  },
  {
    icon: Shield,
    title: 'Verified Reviews',
    description: 'Real reviews from real couples to help you make informed decisions.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our dedicated team is here to help you find the perfect vendors for your special day.'
  },
  {
    icon: Heart,
    title: 'Inspiration & Ideas',
    description: 'Access to trending wedding styles, themes, and creative inspiration.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose LUXIMA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to making your wedding vendor search simple, enjoyable, and successful
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}