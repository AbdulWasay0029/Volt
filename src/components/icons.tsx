import type { SVGProps } from 'react';

export const Icons = {
  logo: ({ className, ...props }: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-48,60v20h-28l32,56H134l-32-52v52H88V92Z"
      />
    </svg>
  ),
};
