"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/navigation";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-orange-500" />,
      title: "Visit Our Store",
      details: ["6QQW+Q56, Minglanilla, Cebu Philippines 6046"],
    },
    {
      icon: <Phone className="h-6 w-6 text-orange-500" />,
      title: "Call Us",
      details: ["+63 926 084 0938", "Available 9AM - 8PM"],
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-500" />,
      title: "Email Us",
      details: ["hopeandco@gmail.com", "We reply within 2 hours"],
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: "Business Hours",
      details: [
        "Mon - Sat: 9:00AM - 8:00PM",
        "Sun: 10:00AM - 6:00PM",
        "Holidays: By appointment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to place an order or have questions about our products? We're
            here to help! Contact us today and let's bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +63 926 084 0938
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-orange-500 bg-transparent text-lg px-8"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-white"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="text-center mb-6">
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you within 24
                    hours with a personalized quote!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="+63 917 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select a service</option>
                        <option value="wire-crafts">Fuzzy Wire Crafts</option>
                        <option value="donuts">Fresh Donuts</option>
                        <option value="delicacies">Pinoy Delicacies</option>
                        <option value="printing">Printing Services</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full"
                        placeholder="Tell us about your project, quantity needed, timeline, or any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-3"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message & Get Quote
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to receive
                      communications from CraftHub. We respect your privacy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Embedded Map */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Find Our Location
                  </CardTitle>
                  <CardDescription>
                    Visit our store for personalized service and to see our
                    products in person.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                    <iframe
                      src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.274726924622!2d123.79276657503439!3d10.239412589878594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a97700791693c3%3A0xea4a642eec95b316!2sDreamy%20Hope%20Mini%20Donuts!5e0!3m2!1sen!2sph!4v1754354130572!5m2!1sen!2sph"
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CraftHub Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    Why Choose Hope & Co.?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>Fast Response:</strong> We reply to all
                        inquiries within 2 hours during business hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>Free Consultation:</strong> Get expert advice on
                        your project at no cost
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>Quality Guarantee:</strong> 100% satisfaction
                        guarantee on all our products and services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>Flexible Payment:</strong> Multiple payment
                        options available for your convenience
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-red-800 mb-2">
                    Urgent Orders?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-4">
                    Need something done quickly? Call our priority line for rush
                    orders and same-day service.
                  </p>
                  <Button className="w-full bg-red-500 hover:bg-red-600">
                    <Phone className="mr-2 h-4 w-4" />
                    Rush Order Hotline: +63 917 999 8888
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardTitle className="text-lg font-semibold mb-3">
                How quickly can you fulfill orders?
              </CardTitle>
              <CardDescription>
                Most orders are completed within 2-5 business days. Rush orders
                can be accommodated with our priority service.
              </CardDescription>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-lg font-semibold mb-3">
                Do you offer delivery?
              </CardTitle>
              <CardDescription>
                Yes! We offer delivery within Metro Manila and shipping
                nationwide. Delivery fees vary by location.
              </CardDescription>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-lg font-semibold mb-3">
                Can I customize my order?
              </CardTitle>
              <CardDescription>
                We specialize in custom orders. Contact us to discuss your
                specific requirements and get a personalized quote.
              </CardDescription>
            </Card>
            <Card className="p-6">
              <CardTitle className="text-lg font-semibold mb-3">
                What payment methods do you accept?
              </CardTitle>
              <CardDescription>
                We accept cash, bank transfers, GCash, PayMaya, and major credit
                cards. Payment terms can be discussed for large orders.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
