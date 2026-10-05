import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { DemoProvider, loadDemoFonts, styleDemos } from "./style-demos";

// Renders a style's demo homepage. `compact` keeps only the first screen
// (cards); `imageScale` sizes the photo requests to how large they'll appear.
export const DemoRenderer = ({ slug, compact = false, imageScale = 1 }) => {
  const Demo = styleDemos[slug];
  useEffect(loadDemoFonts, []);

  if (!Demo) return null;

  return (
    <DemoProvider value={{ compact, imageScale }}>
      <Suspense fallback={<DemoSkeleton />}>
        <Demo />
      </Suspense>
    </DemoProvider>
  );
};

DemoRenderer.propTypes = {
  slug: PropTypes.string.isRequired,
  compact: PropTypes.bool,
  imageScale: PropTypes.number,
};

const DemoSkeleton = () => <div className="w-full h-full min-h-[200px] bg-paper animate-pulse" />;

// Lays children out at a fixed desktop width and scales them to fit, like a
// screenshot. `scrollable` lets the visitor scroll the whole scaled page.
const ScaledViewport = ({ width = 1280, scrollable = false, label, children }) => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [scale, setScale] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!outerRef.current || !innerRef.current) return;
      setScale(outerRef.current.clientWidth / width);
      setInnerHeight(innerRef.current.offsetHeight);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(outerRef.current);
    observer.observe(innerRef.current);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={outerRef}
      className={`absolute inset-0 ${
        scrollable ? "overflow-y-auto overflow-x-hidden overscroll-contain" : "overflow-hidden"
      }`}
      tabIndex={scrollable ? 0 : undefined}
      aria-label={scrollable ? label : undefined}
      role={scrollable ? "region" : undefined}
    >
      <div
        className="relative overflow-hidden"
        style={{ height: scrollable ? innerHeight * scale : "100%" }}
      >
        <div
          ref={innerRef}
          inert=""
          style={{ width, transform: `scale(${scale})`, transformOrigin: "0 0" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

ScaledViewport.propTypes = {
  width: PropTypes.number,
  scrollable: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node,
};

// Mounts its children once the element comes within `margin` of the viewport.
const useNearViewport = (ref, enabled, margin = "600px 0px") => {
  const [near, setNear] = useState(!enabled);

  useEffect(() => {
    if (near || !ref.current) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [near, ref, margin]);

  return near;
};

export const BrowserBar = ({ label, className = "" }) => (
  <div className={`h-[26px] shrink-0 flex items-center gap-[5px] px-3 bg-[#EDEAE3] border-b border-line ${className}`}>
    <span className="w-[7px] h-[7px] rounded-full bg-[#D8D3C8]" />
    <span className="w-[7px] h-[7px] rounded-full bg-[#D8D3C8]" />
    <span className="w-[7px] h-[7px] rounded-full bg-[#D8D3C8]" />
    <span className="ml-3 h-[16px] max-w-[60%] rounded-full bg-[#F7F4EE] px-3 flex items-center text-[10px] text-stone truncate">
      {label}
    </span>
  </div>
);

BrowserBar.propTypes = { label: PropTypes.string, className: PropTypes.string };

// Card mode: first screen of the demo, scaled into a browser frame, mounted
// lazily. Detail mode: the whole homepage, scaled and scrollable.
const StylePreview = ({ style, mode = "card" }) => {
  const frameRef = useRef(null);
  const isDetail = mode === "detail";
  const near = useNearViewport(frameRef, !isDetail);

  return (
    <div
      ref={frameRef}
      className="w-full h-full rounded-[12px] overflow-hidden shadow-soft flex flex-col bg-white"
      aria-hidden={isDetail ? undefined : "true"}
    >
      <BrowserBar label={`Ενδεικτικό δείγμα · ${style.sample.brand}`} />
      <div className="relative flex-1 min-h-0">
        {near ? (
          <ScaledViewport
            scrollable={isDetail}
            label={`Προεπισκόπηση αρχικής σελίδας: ${style.name}. Κάντε κύλιση για να τη δείτε ολόκληρη.`}
          >
            <DemoRenderer slug={style.slug} compact={!isDetail} imageScale={isDetail ? 0.5 : 0.4} />
          </ScaledViewport>
        ) : (
          <DemoSkeleton />
        )}
      </div>
    </div>
  );
};

StylePreview.propTypes = {
  style: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sample: PropTypes.shape({ brand: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
  mode: PropTypes.oneOf(["card", "detail"]),
};

export default StylePreview;
