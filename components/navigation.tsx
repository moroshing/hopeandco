"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react"; // Import useRef
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the timeout ID

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blog" },
  ];

  const productCategories = [
    {
      title: "Dreamy Hope Mini Donuts",
      description:
        "Delicious, customizable mini donuts for special events and sweet cravings.",
      href: "/donuts",
      icon: "🍩",
    },
    {
      title: "Hopeful Delights",
      description:
        "Homemade Filipino kakanin, savory treats, and affordable snacks made with love.",
      href: "/delicacies",
      icon: "🍱",
    },
    {
      title: "FleurKraft",
      description:
        "Handcrafted wire bouquets, keychains, and DIY kits with thoughtful details.",
      href: "/crafts",
      icon: "🌸",
    },
    {
      title: "WebKraft",
      description:
        "Custom, responsive, SEO-optimized websites for personal brands and small businesses.",
      href: "/webdev",
      icon: "💻",
    },
  ];

  // Function to open the dropdown
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current); // Clear any pending close timeouts
    }
    setIsProductsDropdownOpen(true);
  };

  // Function to close the dropdown with a delay
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 200); // 200ms delay
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/images/logo.png"
              alt="CraftHub Logo"
              width={120}
              height={80}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter} // Use new handler
              onMouseLeave={handleMouseLeave} // Use new handler
            >
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
              >
                Products{" "}
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isProductsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
              {isProductsDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white border border-gray-200 rounded-lg shadow-lg p-6 grid grid-cols-2 gap-4 z-50">
                  {productCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block p-4 rounded-md hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        setIsProductsDropdownOpen(false); // Close on click
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current); // Clear timeout on click
                        }
                      }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <span className="font-semibold text-gray-900">
                          {category.title}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {category.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-400 shadow-lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Mobile Products Dropdown - simplified for mobile */}
              <div className="border-t pt-2 mt-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-orange-600 px-3 py-2 text-base font-medium transition-colors flex items-center"
                  onClick={() =>
                    setIsProductsDropdownOpen(!isProductsDropdownOpen)
                  }
                >
                  Products{" "}
                  <ChevronDown
                    className={`ml-auto h-4 w-4 transition-transform ${
                      isProductsDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
                {isProductsDropdownOpen && (
                  <div className="pl-4 pb-2 space-y-1">
                    {productCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block text-gray-600 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsProductsDropdownOpen(false);
                        }}
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="text-white bg-orange-500 hover:bg-orange-600 block px-3 py-2 text-base font-medium transition-colors rounded-md mx-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
