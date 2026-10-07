# Qrynto Tech website

Static website: HTML, Bootstrap 5, jQuery, SlickNav, Validator, Font Awesome.
No server code. Upload everything except `_dev/` to your host.

## Before going live
1. **Domain**: canonical URLs, sitemap.xml, robots.txt and social previews use
   `https://qryntotech.in`. If the live domain differs, find-and-replace
   `https://qryntotech.in` across all files.
2. **Email**: replace ` info@qryntotech.in` with the Qrynto Tech address (find-and-replace).
3. **Hosting at the domain root**: 404.html uses `<base href="/">` so it keeps
   its styling on any missing URL. This assumes the site is at the root of the
   domain (e.g. qryntotech.in/), not in a subfolder.
4. Submit `https://qryntotech.in/sitemap.xml` in Google Search Console.

## Files
- `assets/css/style.css`: all site styles (edit this). Colours and fonts are variables at the top.
- `assets/css/vendor.min.css`: Bootstrap + Font Awesome + SlickNav + font definitions,
  trimmed to only the classes this site uses (45 KB instead of 310 KB).
  If you add Bootstrap classes or Font Awesome icons that aren't on the site yet,
  link `_dev/bootstrap-full.min.css` / `_dev/fontawesome-full.min.css` temporarily,
  or ask your developer to regenerate vendor.min.css.
- `assets/webfonts/`: Font Awesome icon fonts, cut down to the ~50 icons in use (5 KB).
- `assets/fonts/`: self-hosted Bricolage Grotesque and Instrument Sans (no Google request).
- `assets/js/main.js`: menu, sample tracker, forms. WhatsApp number is at the top.
- `.htaccess`: compression, caching and security headers for Apache/Hostinger/cPanel.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`: search engine and device files.

When you change style.css or main.js, bump `?v=3` to `?v=4` in the page `<head>`
links so returning visitors get the new version.

## Forms
Forms validate input, then open WhatsApp with the enquiry filled in. Nothing is stored on the site.
