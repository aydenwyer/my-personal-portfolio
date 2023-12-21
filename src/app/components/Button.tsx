import Image from 'next/image'
import { experimental_useFormStatus as useFormStatus} from 'react-dom';

export default function Button() {
    const { pending } = useFormStatus();

  return (
    <button type="submit" className='flex gap-2 items-center justify-center py-1 px-4 hover:text-white rounded-sm active-nav-link border-[1px] font-medium text-md hover:gap-3 hover:bg-neutral-700 transition-all ease-out duration-150 disabled:gap-2'
    disabled={pending}
    >
        {pending ? <div className='h-5 w-5 animate-spin motion-reduce:animate-spin rounded-full border-b-2 border-white'></div> : <>
            Submit
            <Image src="/arrow-right.svg" width={12} height={7} alt="Arrow Right" />
        </>}
        
    </button>
  )
}
