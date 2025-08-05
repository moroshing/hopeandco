"use client";

import type React from "react";

import { TestimonialCard } from "@/components/testimonial-card";

const testimonials = [
  {
    quote:
      "CraftHub transformed my event! The custom wire crafts were a hit, and the donuts were absolutely divine. Highly recommend their services!",
    name: "Maria S.",
    title: "Event Planner",
  },
  {
    quote:
      "The printing quality for our business cards was exceptional. Fast turnaround and great attention to detail. CraftHub is our go-to now!",
    name: "David L.",
    title: "Small Business Owner",
  },
  {
    quote:
      "Their Pinoy delicacies bring back so many childhood memories. Authentic flavors, made with love. It truly tastes like home!",
    name: "Elena R.",
    title: "Food Enthusiast",
  },
  {
    quote:
      "I ordered a custom wire flower bouquet, and it exceeded all my expectations. Beautifully made and a perfect everlasting gift.",
    name: "Sophia K.",
    title: "Happy Customer",
  },
  {
    quote:
      "The donuts are seriously the best in Manila! Always fresh, always delicious. My family can't get enough of them.",
    name: "Mark J.",
    title: "Donut Lover",
  },
  {
    quote:
      "Professional, reliable, and creative. CraftHub helped us with our marketing flyers, and the results were outstanding.",
    name: "Anna P.",
    title: "Marketing Manager",
  },
];

// Define a set of colors to cycle through for the initials
const initialColors = [
  "bg-pink-500",
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-purple-500",
  "bg-red-500",
];

// Duplicate the testimonials array multiple times to ensure a seamless loop
const duplicatedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export function MarqueeTestimonials() {
  return (
    <div className="relative overflow-hidden mask-testimonials py-4">
      <div
        className="flex animate-marquee space-x-8"
        style={
          {
            "--gap": "2rem", // Corresponds to space-x-8
            "--duration": "30s", // Adjust duration as needed
          } as React.CSSProperties
        }
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            bgColor={initialColors[index % initialColors.length]} // Assign a color based on index
          />
        ))}
      </div>
    </div>
  );
}
