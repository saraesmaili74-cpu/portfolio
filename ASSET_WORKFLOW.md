# Images for the portfolio

1. Put a source PNG or JPG into `assets/`.
2. Run `powershell -ExecutionPolicy Bypass -File tools/optimize-images.ps1` from the `portfolio` folder.
3. Use the generated `-web` file in the page and keep the original only as source material.

Research diagrams are kept up to 4000px wide for legibility. Photos and product screenshots are limited to 2400px. All non-hero images should use `loading="lazy"` and `decoding="async"`.
