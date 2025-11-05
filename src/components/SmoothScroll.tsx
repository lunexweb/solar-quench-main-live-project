import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll with enhanced smooth settings
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      resetNativeScroll: true,
      lerp: 0.08, // Ultra-smooth scrolling (lower = smoother)
      multiplier: 0.8, // Slightly slower for more elegant feel
      firefoxMultiplier: 40, // Firefox optimization
      touchMultiplier: 1.5, // Gentle touch scrolling
      smartphone: {
        smooth: true,
        breakpoint: 767,
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
      },
      scrollbarContainer: false, // Disable custom scrollbar to prevent conflicts
      getDirection: true,
      getSpeed: true,
      class: 'is-revealed',
      initClass: 'has-scroll-init',
      scrollingClass: 'has-scroll-scrolling',
      draggingClass: 'has-scroll-dragging',
      smoothClass: 'has-scroll-smooth',
      scrollbarClass: 'c-scrollbar',
      scrollbarContainerClass: 'c-scrollbar__container',
      scrollbarTrackClass: 'c-scrollbar__track',
      scrollbarThumbClass: 'c-scrollbar__thumb',
    });

    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, [location.pathname]);

  // Update scroll on route change
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update();
      locomotiveScrollRef.current.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });
    }
  }, [location.pathname]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
