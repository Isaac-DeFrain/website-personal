export function NavButtons() {
  const links: { href: string; label: string; newTab?: boolean }[] = [
    { href: "https://blog.isaacdefrain.com", label: "blog" },
    { href: "https://projects.isaacdefrain.com", label: "projects" },
    { href: "https://github.com/isaac-defrain", label: "github", newTab: true },
    {
      href: "https://linkedin.com/in/isaac-defrain",
      label: "linkedin",
      newTab: true,
    },
  ];

  return (
    <nav className="nav-buttons" aria-label="Site">
      {links.map(({ href, label, newTab }) => (
        <a
          key={label}
          href={href}
          {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
