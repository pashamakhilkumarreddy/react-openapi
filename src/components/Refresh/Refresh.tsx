import React, { memo } from 'react';

interface RefreshIconProps {
  pullChange?: number;
}

/**
 * A memoized refresh icon component that renders an SVG.
 * The icon can be rotated based on the `pullChange` prop.
 * @param {RefreshIconProps} props - The properties for the component.
 * @param {number} [props.pullChange=0] - The degree of rotation for the icon.
 * @example
 * // Example usage
 * <RefreshIcon pullChange={45} />
 * @returns {JSX.Element} The rendered SVG element.
 */
const RefreshIcon: React.FC<RefreshIconProps> = memo(({ pullChange = 0 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#000"
      className="h-6 w-6"
      style={{ transform: `rotate(${pullChange}deg)` }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
});

export default RefreshIcon;
