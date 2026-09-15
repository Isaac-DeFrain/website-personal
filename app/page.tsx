import Image from "next/image";
import { NavButtons } from "@/components/NavButtons";
import { ThemeToggle } from "@/components/ThemeToggle";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Isaac DeFrain",
  url: "https://isaacdefrain.com",
  sameAs: [
    "https://github.com/isaac-defrain",
    "https://linkedin.com/in/isaac-defrain",
    "https://blog.isaacdefrain.com",
    "https://projects.isaacdefrain.com",
  ],
};

export default function HomePage() {
  return (
    <main className="landing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ThemeToggle />
      <h1 className="name">Isaac DeFrain</h1>
      <Image
        className="profile-picture"
        src="/profile_picture_small.jpg"
        alt="Isaac DeFrain"
        width={200}
        height={200}
        priority
      />
      <NavButtons />
    </main>
  );
}
