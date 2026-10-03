export function ProductName({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className="group/name relative block min-w-0">
      <span className={`block truncate ${className}`}>{name}</span>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-0 top-[calc(100%+6px)] z-30 hidden w-max max-w-[min(18rem,calc(100vw-2rem))] rounded-md bg-[#031D38] px-2.5 py-1.5 text-left text-[11px] font-normal leading-snug text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] group-hover/name:block"
      >
        {name}
      </span>
    </span>
  );
}
