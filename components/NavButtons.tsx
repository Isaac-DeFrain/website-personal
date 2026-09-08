import Image from "next/image";

type NavLink = { href: string; label: string; newTab?: boolean };

const primaryLinks: NavLink[] = [
  { href: "https://blog.isaacdefrain.com", label: "blog" },
  { href: "/cv.pdf", label: "cv" },
  { href: "https://projects.isaacdefrain.com", label: "projects" },
];

const socialLinks = [
  {
    href: "https://github.com/isaac-defrain",
    label: "GitHub",
    src: "/assets/github.svg",
  },
  {
    href: "https://linkedin.com/in/isaac-defrain",
    label: "LinkedIn",
    src: "/assets/linkedin.svg",
  },
];

function PrimaryLinkRow({ links }: { links: NavLink[] }) {
  return (
    <div className="nav-buttons-row">
      {links.map(({ href, label, newTab }) => (
        <a
          key={label}
          href={href}
          className="nav-text-link"
          {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

function SocialLinkRow() {
  return (
    <div className="nav-buttons-row nav-social-row">
      {socialLinks.map(({ href, label, src }) => (
        <a
          key={label}
          href={href}
          className="nav-social-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          <Image
            className="nav-social-icon"
            src={src}
            alt=""
            width={24}
            height={24}
          />
        </a>
      ))}
    </div>
  );
}

export function NavButtons() {
  return (
    <nav className="nav-buttons" aria-label="Site">
      <PrimaryLinkRow links={primaryLinks} />
      <SocialLinkRow />
    </nav>
  );
}
