import Link from "next/link";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
          Find Your Perfect Wedding Vendors
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl animate-fade-up">
          Discover and connect with the finest wedding professionals in your
          area
        </p>

        <div className="w-full max-w-2xl animate-fade-up">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for vendors, venues, or services..."
              className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
