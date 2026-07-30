import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.thehastava.com";
  const routes = [
    "",
    "/about",
    "/crafts",
    "/gi-tagged",
    "/how-it-works",
    "/why-hastava",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/contact" || route === "/crafts" ? 0.9 : 0.8,
  }));
}
