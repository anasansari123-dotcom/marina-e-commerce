import { DISCOUNT_PERCENT, formatPrice, listPrice } from "@/lib/products";

const sizes = {
  card: {
    price: "text-[13px] sm:text-[16px]",
    rest: "text-[10px] sm:text-[13px]",
  },
  page: {
    price: "text-[1.45rem] md:text-[2rem]",
    rest: "text-[13px] md:text-[16px]",
  },
};

export function PriceRow({
  price,
  size = "card",
  className = "",
}: {
  price: number;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const s = sizes[size];
  return (
    <p className={`flex flex-wrap items-baseline gap-x-1 leading-tight sm:gap-x-1.5 ${className}`}>
      <span className={`font-bold text-[#2F6B1F] ${s.price}`}>{formatPrice(price)}</span>
      <span className={`whitespace-nowrap text-[#595959] ${s.rest}`}>
        <span className="line-through">{formatPrice(listPrice(price))}</span>
        <span className="ml-0.5">({DISCOUNT_PERCENT}% off)</span>
      </span>
    </p>
  );
}
