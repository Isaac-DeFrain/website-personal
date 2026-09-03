import Image from "next/image";
import { NavButtons } from "@/components/NavButtons";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main className="landing">
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
