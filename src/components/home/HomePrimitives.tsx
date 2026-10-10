import {
  Activity,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Building2,
  Cpu,
  Factory,
  HeartPulse,
  Hotel,
  Leaf,
  Lightbulb,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import {
  type CSSProperties,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { Language } from '../../types';
import type { IconKey } from './homeContent';

const localeByLanguage: Record<Language, string> = {
  FA: 'fa-IR',
  AR: 'ar',
  EN: 'en-US',
};

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduced(mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference);
      return () => mediaQuery.removeEventListener('change', updatePreference);
    }

    if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(updatePreference);
      return () => mediaQuery.removeListener(updatePreference);
    }
  }, []);

  return reduced;
}

export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  options: { startViewportRatio?: number; endViewportRatio?: number } = {},
) {
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();
  const startViewportRatio = options.startViewportRatio ?? 0.72;
  const endViewportRatio = options.endViewportRatio ?? 0.24;

  useEffect(() => {
    if (reducedMotion) {
      setProgress(1);
      return;
    }

    let frame = 0;

    const measure = () => {
      frame = 0;
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * startViewportRatio;
      const available = Math.max(rect.height - viewportHeight * endViewportRatio, 1);
      const nextProgress = Math.min(Math.max((start - rect.top) / available, 0), 1);
      setProgress((current) => (Math.abs(current - nextProgress) > 0.003 ? nextProgress : current));
    };

    const requestMeasure = () => {
      if (frame === 0) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', requestMeasure, { passive: true });
    window.addEventListener('resize', requestMeasure, { passive: true });

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestMeasure);
      window.removeEventListener('resize', requestMeasure);
    };
  }, [endViewportRatio, reducedMotion, ref, startViewportRatio]);

  return progress;
}

interface RevealProps {
  key?: string | number;
  children?: ReactNode;
  as?: 'div' | 'article' | 'li';
  className?: string;
  delay?: number;
}

export function Reveal({ children, as = 'div', className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.16, rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const Component = as;
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

  return (
    <Component
      ref={ref as never}
      className={`obc-reveal ${className}`.trim()}
      data-visible={visible}
      style={style}
    >
      {children}
    </Component>
  );
}

interface CountUpProps {
  value: number;
  lang: Language;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ value, lang, prefix = '', suffix = '', className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef(0);
  const hasAnimatedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (reducedMotion) {
      hasAnimatedRef.current = true;
      setDisplayValue(value);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      hasAnimatedRef.current = true;
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;
        observer.disconnect();

        const duration = 1_300;
        const startTime = performance.now();

        const update = (now: number) => {
          const elapsed = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - elapsed, 3);
          setDisplayValue(Math.round(value * eased));
          if (elapsed < 1) frameRef.current = window.requestAnimationFrame(update);
        };

        frameRef.current = window.requestAnimationFrame(update);
      },
      { threshold: 0.55 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [reducedMotion, value]);

  const formatted = new Intl.NumberFormat(localeByLanguage[lang], {
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(displayValue);

  return (
    <span ref={ref} className={className} dir="ltr" aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'start' | 'center';
  inverse?: boolean;
  titleId?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  inverse = false,
  titleId,
}: SectionHeadingProps) {
  return (
    <Reveal className={`obc-section-heading obc-section-heading--${align}`}>
      <div className="obc-eyebrow" data-inverse={inverse}>
        <span aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 id={titleId}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </Reveal>
  );
}

export function DirectionalArrow({ isRtl, diagonal = false }: { isRtl: boolean; diagonal?: boolean }) {
  if (diagonal) {
    return isRtl ? <ArrowDownLeft aria-hidden="true" /> : <ArrowDownRight aria-hidden="true" />;
  }

  return isRtl ? <ArrowLeft aria-hidden="true" /> : <ArrowRight aria-hidden="true" />;
}

const iconMap = {
  activity: Activity,
  agriculture: Leaf,
  building: Building2,
  energy: Zap,
  globe: Sparkles,
  healthcare: HeartPulse,
  industry: Factory,
  infrastructure: Building2,
  realEstate: Building2,
  search: Search,
  shield: ShieldCheck,
  technology: Cpu,
  tourism: Hotel,
  users: Users,
} satisfies Record<IconKey, typeof Activity>;

export function HomeIcon({ name, className = '' }: { name: IconKey; className?: string }) {
  const Icon = iconMap[name] ?? Lightbulb;
  return <Icon className={className} aria-hidden="true" strokeWidth={1.7} />;
}
