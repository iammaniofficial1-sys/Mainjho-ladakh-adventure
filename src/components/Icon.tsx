import {
  Bike,
  Wrench,
  ShieldCheck,
  MapPin,
  BadgeCheck,
  FileCheck,
  Thermometer,
  Users,
  HardHat,
  Mountain,
  Star,
  Calendar,
  MapPinned,
  Gauge,
  Fuel,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowRight,
  Check,
  Mail,
  Instagram,
  Facebook,
  Clock,
} from "lucide-react";

const icons = {
  bike: Bike,
  wrench: Wrench,
  "shield-check": ShieldCheck,
  "map-pin": MapPin,
  "badge-check": BadgeCheck,
  "file-check": FileCheck,
  thermometer: Thermometer,
  users: Users,
  helmet: HardHat,
  mountain: Mountain,
  star: Star,
  calendar: Calendar,
  "map-pinned": MapPinned,
  gauge: Gauge,
  fuel: Fuel,
  "chevron-down": ChevronDown,
  phone: Phone,
  "message-circle": MessageCircle,
  "arrow-right": ArrowRight,
  check: Check,
  mail: Mail,
  instagram: Instagram,
  facebook: Facebook,
  clock: Clock,
};

export type IconName = keyof typeof icons;

export default function Icon({
  name,
  className = "w-5 h-5",
}: {
  name: IconName;
  className?: string;
}) {
  const Component = icons[name] || Mountain;
  return <Component className={className} />;
}
