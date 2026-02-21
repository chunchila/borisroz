"use client";

const links = [
  { name: "Instagram", href: "#" },
  { name: "500px", href: "#" },
  { name: "Flickr", href: "#" },
  { name: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs text-muted/50">
          &copy; {new Date().getFullYear()} borisRo
        </p>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs text-muted/50 hover:text-foreground/60 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
