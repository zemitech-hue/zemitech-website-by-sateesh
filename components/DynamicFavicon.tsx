"use client";

import { useEffect } from "react";

/**
 * DynamicFavicon dynamically updates the browser favicon and apple-touch-icon
 * based on the current hostname.
 * 
 * - If the domain contains "zemitech" (e.g. zemitech.in, zemitechurban.com),
 *   it applies the Zemitech brand icon (blue roof with hammer and green accents).
 * - Otherwise (e.g. zemaraspaces.com, localhost), it applies the Zemara Spaces
 *   brand icon (square mark).
 */
export default function DynamicFavicon() {
  useEffect(() => {
    try {
      const hostname = window.location.hostname.toLowerCase();
      const isZemitech = hostname.includes("zemitech");
      const brand = isZemitech ? "zemitech" : "zemara";

      const updateLink = (selector: string, rel: string, href: string, type?: string, sizes?: string) => {
        let link = document.querySelector<HTMLLinkElement>(selector);
        if (!link) {
          link = document.createElement("link");
          link.rel = rel;
          document.head.appendChild(link);
        }
        link.href = href;
        if (type) link.type = type;
        if (sizes) link.sizes = sizes;
      };

      // Set standard favicon
      updateLink("link[rel='shortcut icon']", "shortcut icon", `/favicons/${brand}/favicon.ico`);
      updateLink("link[rel='icon'][sizes='any']", "icon", `/favicons/${brand}/favicon.ico`, "image/x-icon", "any");
      updateLink("link[rel='icon'][type='image/png']", "icon", `/favicons/${brand}/icon.png`, "image/png", "512x512");
      updateLink("link[rel='apple-touch-icon']", "apple-touch-icon", `/favicons/${brand}/apple-icon.png`, undefined, "180x180");
    } catch {
      // Fallback silently if DOM is inaccessible
    }
  }, []);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var h=window.location.hostname.toLowerCase();var z=h.indexOf("zemitech")!==-1;var b=z?"zemitech":"zemara";var l=document.querySelector("link[rel*='icon']");if(l){l.href="/favicons/"+b+"/favicon.ico"}var a=document.querySelector("link[rel='apple-touch-icon']");if(a){a.href="/favicons/"+b+"/apple-icon.png"}}catch(e){}})();`,
      }}
    />
  );
}
