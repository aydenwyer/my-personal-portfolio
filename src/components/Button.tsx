import { ArrowUpRight, LoaderCircle } from "lucide-react";
import Image from "next/image";

const Button = ({ isSubmitting }: { isSubmitting: boolean }) => {
	return (
		<button
			type="submit"
			className="flex gap-1 items-center hover:gap-2 border-[#242424] hover:border-[#292929] justify-center py-2 px-4 hover:text-white rounded-md active-nav-link border-[1px] font-medium text-md hover:bg-[#202020] transition-all ease-out duration-150 disabled:gap-2"
			disabled={isSubmitting}
		>
			{isSubmitting ? (
				<LoaderCircle  className="h-5 w-5 animate-spin"/>
			) : (
				<>
					Submit
					<ArrowUpRight width={18}/>
				</>
			)}
		</button>
	);
};

export default Button;
