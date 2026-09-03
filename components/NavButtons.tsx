export function NavButtons() {
  const links = [
    { href: "https://blog.isaacdefrain.com", label: "blog" },
    { href: "https://projects.isaacdefrain.com", label: "projects" },
    { href: "https://github.com/isaac-defrain", label: "github" },
    { href: "https://linkedin.com/in/isaac-defrain", label: "linkedin" },
  ] as const;

  return (
    <nav className="nav-buttons" aria-label="Site">
      {links.map(({ href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ))}
    </nav>
  );
}
