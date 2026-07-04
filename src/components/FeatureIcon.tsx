import type { FeatureIconId } from "@/config/siteConfig";
import {
  Award,
  Building2,
  Gem,
  Handshake,
  Leaf,
  Ruler,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<FeatureIconId, LucideIcon> = {
  gem: Gem,
  ruler: Ruler,
  leaf: Leaf,
  shield: Shield,
  award: Award,
  handshake: Handshake,
  building: Building2,
  sparkles: Sparkles,
};

export function FeatureIcon({
  icon,
  className,
}: {
  icon: FeatureIconId;
  className?: string;
}) {
  const Icon = MAP[icon] ?? Sparkles;
  return <Icon className={className} aria-hidden strokeWidth={1.6} />;
}
