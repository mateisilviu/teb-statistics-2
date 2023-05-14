export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Statistici termoenergetica",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Acasa",
      href: "/",
    },
    {
      title: "Despre proiect",
      href: "despre",
    },
    {
      title: "Preturi",
      href: "preturi",
    },
    {
      title: "Termoenergetica",
      href: "https://www.cmteb.ro/functionare_sistem_termoficare.php",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
