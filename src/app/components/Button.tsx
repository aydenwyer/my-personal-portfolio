import Image from "next/image";

const Button = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <button
      type="submit"
      className="flex gap-2 items-center justify-center py-1 px-4 hover:text-white rounded-sm active-nav-link border-[1px] font-medium text-md hover:gap-3 hover:bg-neutral-700 transition-all ease-out duration-150 disabled:gap-2"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin motion-reduce:animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <Image
            src="/arrow-right.svg"
            width={12}
            height={7}
            alt="Arrow Right"
          />
        </>
      )}
    </button>
  );
};

export default Button;
