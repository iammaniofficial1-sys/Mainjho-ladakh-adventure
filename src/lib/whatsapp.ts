import { brand } from "../data/siteData";

export function openWhatsApp(message: string) {
  const url = `https://wa.me/${brand.whatsappRaw}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function bikeEnquiryMessage(values: {
  name: string;
  phone: string;
  location: string;
  pickupDate: string;
  returnDate: string;
  bikeType: string;
  groupSize: string;
}) {
  return `Hi Jho Ladakh Adventure,

I'm interested in renting a bike in Ladakh.

Name: ${values.name || "-"}
Phone: ${values.phone || "-"}
Pickup Location: ${values.location || "-"}
Pickup Date: ${values.pickupDate || "-"}
Return Date: ${values.returnDate || "-"}
Bike Preference: ${values.bikeType || "Any bike"}
Group Size: ${values.groupSize || "-"}

Please confirm availability and pricing. Thanks!`;
}

export function packageEnquiryMessage(packageName: string, duration: string) {
  return `Hi Jho Ladakh Adventure,

I'm interested in the "${packageName}" (${duration}). Could you share the detailed itinerary, inclusions, and availability?

Thank you!`;
}

export function bikeCardEnquiryMessage(bikeName: string) {
  return `Hi Jho Ladakh Adventure,

I'm interested in renting the ${bikeName}. Please share availability and pricing for my dates.`;
}
