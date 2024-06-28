import React, { memo } from 'react';

/**
 * A close icon component typically used to represent closing or dismissing actions.
 * This component renders an 'X' mark for closing modals, menus, or dialogs.
 * @component
 * @example
 * return <CloseIcon />;
 */
const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = memo((props) => (
  <svg
    className="hidden h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
));

export default CloseIcon;
