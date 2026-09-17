import { useEffect } from "react";
import { siteConfig } from "../data/site";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

function setMeta(selector: string, attribute: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    const [key, name] = attribute === "property" ? ["property", selector.match(/"(.+)"/)?.[1]] : ["name", selector.match(/"(.+)"/)?.[1]];
    if (name) element.setAttribute(key, name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

export function Seo({ title, description, path = "/" }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[property="og:url"]', "property", new URL(path, siteConfig.siteUrl).toString());

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = new URL(path, siteConfig.siteUrl).toString();
  }, [description, path, title]);

  return null;
}
