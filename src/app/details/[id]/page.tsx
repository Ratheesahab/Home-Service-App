"use client";
import GlobalApi from "@/app/_Services/GlobalApi";
import Business from "@/app/types/Business";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the required styles

interface Props {
  params: { id: string };
}

export default function BusinessDetailPage(props: Props) {
  const { id } = props.params;
  const [business, setBusiness] = useState<Business | null>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      const response = await GlobalApi.getBusinessById(id);
      setBusiness(response?.business ?? null);
    };

    if (id) {
      fetchBusiness();
    }
  }, [id]);

  if (!business) {
    return (
      <div className="p-6 text-center text-red-600 text-lg font-semibold">
        Business not found.
      </div>
    );
  }

  // Refactor the onSubmit function here
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
  
    const smsMessage = `Your service has been booked:
  Name: ${data.name}
  Email: ${data.email}
  Phone: ${data.phone}
  Date: ${data.date}
  Time: ${data.time}
  
  Business Details:
  Name: ${business?.name}
  Address: ${business?.address}
  Category: ${business?.category.name}
  Contact Person: ${business?.contactPerson}`;
  
    try {
      // Call the API route to send SMS
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: data.phone,
          message: smsMessage,
        }),
      });
  
      const result = await response.json();
      if (result.success) {
        toast.success("Booking Successful!");
      } else {
        toast.error("Booking failed to send SMS.");
      }
    } catch (err) {
      toast.error("An error occurred while sending SMS.");
      console.error("SMS error:", err);
    }
  };
  
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Business Header Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Image and Description */}
        <div className="flex-1 space-y-6">
          <Image
            src={business.images?.[1]?.url || "/placeholder.png"}
            alt={business.name}
            width={500}
            height={300}
            className="rounded-lg object-cover w-full h-64 shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">{business.name}</h1>
            <p className="mt-2 text-gray-600">{business.address}</p>
            <div className="mt-2">
              <span className="inline-block bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                {business.category.name}
              </span>
            </div>
            <p className="mt-2 text-gray-600"><strong>Contact Person:</strong> {business.contactPerson}</p>
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-center mb-4">Book This Service</h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                required
                className="mt-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                required
                className="mt-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                required
                className="mt-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                name="date"
                id="date"
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                type="time"
                name="time"
                id="time"
                required
                className="mt-2"
              />
            </div>

            <Button
              type="submit"
              className="w-full text-lg mt-4 bg-primary text-white hover:bg-primary/80"
            >
              Book Now
            </Button>
          </form>
        </div>
      </div>

      {/* ToastContainer to show toasts */}
      <ToastContainer />
    </div>
  );
}
