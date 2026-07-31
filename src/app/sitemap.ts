import { MetadataRoute } from "next";
import { CRAFT_DATABASE } from "@/config/crafts";
import { SERVICE_DATABASE } from "@/config/services";
import { RESOURCE_DATABASE } from "@/config/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thehastava.com";
  
  // Base static routes
  const staticRoutes = [
    "",
    "/about",
    "/crafts",
    "/gi-tagged",
    "/how-it-works",
    "/why-hastava",
    "/blog",
    "/contact",
    "/buyers",
    "/catalog-request",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/contact" || route === "/crafts" || route === "/buyers" ? 0.9 : 0.8,
  }));

  // Dynamic Crafts
  Object.keys(CRAFT_DATABASE).forEach((slug) => {
    entries.push({
      url: `${baseUrl}/crafts/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  // Dynamic Services
  Object.keys(SERVICE_DATABASE).forEach((slug) => {
    entries.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });

  // Dynamic Resources
  Object.keys(RESOURCE_DATABASE).forEach((slug) => {
    entries.push({
      url: `${baseUrl}/resources/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    });
  });

  return entries;
}
