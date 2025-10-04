"use client";

import clsx from "clsx";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { MouseEventHandler, ReactNode } from "react";
import { useRouter } from "next/navigation";

const Button = ({
  isSubmitting,
  className,
  text,
  iconLeft,
  iconRight,
  onClick,
}: {
  isSubmitting?: boolean;
  className?: string;
  text: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: string;
}) => {
  const router = useRouter();

  return (
    <button
      type="submit"
      onClick={onClick ? () => router.push(onClick) : undefined}
      className={clsx(
        "flex gap-1 items-center hover:gap-2 border-[#242424] hover:border-[#292929] justify-center py-2 px-4 hover:text-white rounded-md active-nav-link border-[1px] font-medium text-md hover:bg-[#202020] transition-all ease-out duration-150 disabled:gap-2",
        className
      )}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <LoaderCircle className="h-5 w-5 animate-spin" />
      ) : (
        <>
          {iconLeft ? iconLeft : undefined}
          {text}
          {iconRight ? iconRight : undefined}
        </>
      )}
    </button>
  );
};

export default Button;
