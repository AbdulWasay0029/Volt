export const Icons = {
  logo: ({ className, ...props }: React.ComponentProps<'img'>) => (
    <img
      src="/logo.svg"
      alt="VOLT"
      className={className}
      {...props}
    />
  ),
};
