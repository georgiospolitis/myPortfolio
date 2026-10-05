import PropTypes from "prop-types";

import { useDemo } from "./context";
import { unsplash } from "./images";

// Shared building blocks for the website-style demos. Deliberately small: each
// demo owns its own layout, typography and colours so they stay distinct.

// Root of every demo: scopes the `cq-*` container queries, sets the typeface
// and keeps demo links from navigating the portfolio. `lang="el"` makes
// uppercase Greek drop its accents, as Greek typography expects.
export const DemoRoot = ({ font, className = "", style, children }) => (
  <div
    lang="el"
    className={`demo-root antialiased overflow-x-clip ${className}`}
    style={{ fontFamily: font, ...style }}
    onClickCapture={(e) => {
      if (e.target.closest("a")) e.preventDefault();
    }}
  >
    {children}
  </div>
);

DemoRoot.propTypes = {
  font: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

// Everything below the first screen. Cards render demos in compact mode, so
// only the hero and the start of the next section are ever built for them.
export const Full = ({ children }) => (useDemo().compact ? null : children);

Full.propTypes = { children: PropTypes.node };

// `w` is the image's rendered width (px) at full size; the request is scaled
// down for small previews so cards don't download full-size photos.
export const DemoImage = ({ img, w = 800, className = "", ...rest }) => {
  const { imageScale } = useDemo();
  const dpr = typeof window === "undefined" ? 1 : Math.min(2, window.devicePixelRatio || 1);
  const width = Math.min(2000, Math.max(200, Math.ceil((w * imageScale * dpr) / 100) * 100));

  return (
    <img
      src={unsplash(img.id, width)}
      alt={img.alt}
      loading="lazy"
      decoding="async"
      className={`block w-full h-full object-cover ${className}`}
      {...rest}
    />
  );
};

DemoImage.propTypes = {
  img: PropTypes.shape({ id: PropTypes.string.isRequired, alt: PropTypes.string.isRequired })
    .isRequired,
  w: PropTypes.number,
  className: PropTypes.string,
};

// Shown in every demo footer so a fictional business is never mistaken for a client.
export const DemoDisclaimer = ({ className = "" }) => (
  <p className={`text-[12px] opacity-60 ${className}`}>
    Ενδεικτικό δείγμα σχεδιαστικής κατεύθυνσης — η επιχείρηση και το περιεχόμενο είναι
    φανταστικά.
  </p>
);

DemoDisclaimer.propTypes = { className: PropTypes.string };
