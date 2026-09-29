import React from "react";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

// Hero Title (e.g., "Build Digital Asset: A Comprehensive Guide")
export const H1 = ({ className = "", children, ...props }: HeadingProps) => (
    <h1
        className={`text-3xl sm:text-4xl lg:text-[44px] font-bold   leading-[1.2] ${className}`.trim()}
        {...props}
    >
        {children}
    </h1>
);

// Page / Section Main Title (e.g., "Find Your Next Course")
export const H2 = ({ className = "", children, ...props }: HeadingProps) => (
    <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold   leading-tight ${className}`.trim()}
        {...props}
    >
        {children}
    </h2>
);

// Sub-section Header
export const H3 = ({ className = "", children, ...props }: HeadingProps) => (
    <h3
        className={`text-xl sm:text-2xl font-bold   text-zinc-900 dark:text-zinc-50 ${className}`.trim()}
        {...props}
    >
        {children}
    </h3>
);

// Course Card Title (e.g., "Learn Figma from Basic")
export const H4 = ({ className = "", children, ...props }: HeadingProps) => (
    <h4
        className={`text-base sm:text-lg font-bold   text-zinc-900 dark:text-zinc-100 ${className}`.trim()}
        {...props}
    >
        {children}
    </h4>
);

// Small Card / Module Title
export const H5 = ({ className = "", children, ...props }: HeadingProps) => (
    <h5
        className={`text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 ${className}`.trim()}
        {...props}
    >
        {children}
    </h5>
);

// Footer Column Header / Small Section Label (e.g., "Popular Courses", "Categories")
export const H6 = ({ className = "", children, ...props }: HeadingProps) => (
    <h6
        className={`text-xs sm:text-sm font-semibold uppercase   text-zinc-800 dark:text-zinc-200 ${className}`.trim()}
        {...props}
    >
        {children}
    </h6>
);

// Hero Tagline / Subtitle (e.g., "Unlock the Power of Digital Creation with Expert Guidance")
export const Lead = ({
    className = "",
    children,
    ...props
}: ParagraphProps) => (
    <p
        className={`text-base sm:text-lg font-normal text-white/90 leading-relaxed ${className}`.trim()}
        {...props}
    >
        {children}
    </p>
);

// Standard Body Paragraph
export const Paragraph = ({
    className = "",
    children,
    ...props
}: ParagraphProps) => (
    <p
        className={`text-sm sm:text-base font-normal text-zinc-600 dark:text-zinc-300 leading-relaxed ${className}`.trim()}
        {...props}
    >
        {children}
    </p>
);

// Accent Eyebrow / Author Byline (e.g., "by purepearl studio" in lime/neon yellow)
export const Eyebrow = ({ className = "", children, ...props }: SpanProps) => (
    <span
        className={`text-xs sm:text-sm font-semibold text-[#D4FF00]    ${className}`.trim()}
        {...props}
    >
        {children}
    </span>
);

// Filter chips, badges, and pill tags (e.g., "Intermediate", "Featured", "UI/UX Design")
export const Label = ({ className = "", children, ...props }: SpanProps) => (
    <span
        className={`text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 ${className}`.trim()}
        {...props}
    >
        {children}
    </span>
);

// Card Price (e.g., "$25")
export const Price = ({ className = "", children, ...props }: SpanProps) => (
    <span
        className={`text-base sm:text-lg font-bold text-blue-600   ${className}`.trim()}
        {...props}
    >
        {children}
    </span>
);

// Metadata & Ratings (e.g., "4.5 ★", "199 Students", "12 Lessons")
export const Stat = ({ className = "", children, ...props }: SpanProps) => (
    <span
        className={`text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 ${className}`.trim()}
        {...props}
    >
        {children}
    </span>
);

// Captions, video duration tags, and small notes
export const Caption = ({ className = "", children, ...props }: SpanProps) => (
    <span
        className={`text-xs text-zinc-500 dark:text-zinc-400 ${className}`.trim()}
        {...props}
    >
        {children}
    </span>
);

// Footer copyright and disclaimer text
export const Muted = ({
    className = "",
    children,
    ...props
}: ParagraphProps) => (
    <p
        className={`text-xs text-zinc-500 dark:text-zinc-400 ${className}`.trim()}
        {...props}
    >
        {children}
    </p>
);
