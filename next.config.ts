import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a fully static site to out/ for static hosting (Render).
  output: "export",

  // Static export has no image optimisation server, so images ship as-is.
  // Pre-compress anything added to public/images/projects/.
  images: { unoptimized: true },

  // Static hosts resolve /legacy to /legacy/index.html on their own, so the
  // rewrite that used to do this is unnecessary — and unsupported by export.
  trailingSlash: false,
};

export default nextConfig;
