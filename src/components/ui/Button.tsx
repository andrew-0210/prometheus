

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  eventHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  className,
  eventHandler,
  children,
}: ButtonProps) {
  return (
    <button className={className} onClick={eventHandler}>
      {children}
    </button>
  );
}
