import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="256" height="256" fill="none" />
    <path
      d="M128,128,80,224l48,0,48-96Z"
      opacity="0.2"
      className="fill-primary"
    />
    <path
      d="M176,32,128,128,80,32,32,224h48l32-96,32,96h48Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);
