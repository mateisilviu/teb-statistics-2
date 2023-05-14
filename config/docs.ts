import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs",
        },
        {
            title: "Components",
            href: "/docs/components/accordion",
        },
        {
            title: "Examples",
            href: "/examples",
        },
        {
            title: "Figma",
            href: "/figma",
        },
        {
            title: "GitHub",
            href: "https://github.com/shadcn/ui",
            external: true,
        },
        {
            title: "Twitter",
            href: "https://twitter.com/shadcn",
            external: true,
        },
    ],
    sidebarNav: [
        {
            title: "Sectoare",
            items: [
                {
                    title: "Sectorul 1",
                    href: "/sector1",
                    items: [],
                },
                {
                    title: "Sectorul 2",
                    href: "/sector2",
                    items: [],
                },
                {
                    title: "Sectorul 3",
                    href: "/sector3",
                    items: [],
                },
                {
                    title: "Sectorul 4",
                    href: "/sectorul4",
                    items: [],
                },
                {
                    title: "Sectorul 5",
                    href: "/sectorul5",
                    items: [],
                },
                {
                    title: "Sectorul 6",
                    href: "/sectorul6",
                    items: [],
                },
            ],
        },
        {
            title: "Avarii",
            items: [],
        },
    ],
}