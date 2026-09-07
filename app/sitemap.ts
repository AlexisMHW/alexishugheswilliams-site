import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/my-work", "/life-with-lexi", "/press", "/contact"];

  return routes.map((route) => ({
    url: `https://www.alexishugheswilliams.com${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "/life-with-lexi" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/about" || route === "/my-work" ? 0.9 : 0.7,
  }));
}
