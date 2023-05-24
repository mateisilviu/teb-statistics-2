import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site-footer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DocsSidebarNav } from "@/components/sidebar"
import { docsConfig } from "@/config/docs"
import getAvarii from "./actions/getAvarii"
import { NavItemWithChildren } from "@/types/nav"
import dashify from "dashify"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  const avariiRecente = await getAvarii();
  console.log("avarii layout " + avariiRecente?.termoModel.length)

  const avariiItems = docsConfig.sidebarNav[1].items;

  avariiRecente?.termoModel.forEach(element => {

    const streetNavItem = avariiItems.find(sideBarElement => sideBarElement.title === element.street)

    if (streetNavItem === undefined) {
      const newSideBarItem1: NavItemWithChildren = {
        title: element.street,
        href: "/sector/" + element.sector + "/" + dashify(element.street),
        items: [{
          title: element.flat,
          href: "/sector/" + element.sector + "/" + dashify(element.street) + "/" + dashify(element.flat),
          items: []
        }
        ]
      }
      avariiItems.push(newSideBarItem1);
    } else {
      const titlehref = element.street + " bloc " + element.flat + " sector " + element.sector;
      const newSideBarItem: NavItemWithChildren = {
        title: titlehref,
        href: "/sector/" + element.sector + "/" + dashify(element.street) + "/" + dashify(element.flat),
        items: []
      }
      streetNavItem.items.push(newSideBarItem);
    }
  });

  avariiItems.forEach(element => {
    element.label = element.items.length.toString();
  });

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />

              <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
                  <ScrollArea className="py-6 pr-6 lg:py-8">
                    <DocsSidebarNav items={docsConfig.sidebarNav} />
                  </ScrollArea>
                </aside>
                {children}
              </div>
              <SiteFooter />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
