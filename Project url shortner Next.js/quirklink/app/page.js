import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
     <section className="grid grid-cols-2">

      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to QuirkLink</h1>
        <p>Your one-stop solution for URL shortening!</p>
        
         <div className='flex gap-4 justify-start'>
        <Link href="/shorten"><button className='bg-pink-500 shadow-lg rounded-full p-3 py-1.5 text-white'>Try Now</button></Link>
        <Link href="/github">
          <button className='bg-pink-500 shadow-lg rounded-full p-3 py-1.5 text-white'>Github</button>
        </Link>
        </div>
      </div>

      <div className="py-20 p-30">
        <div className="h-[460px] overflow-hidden rounded-xl">
          <Image
            alt="Vector illustration"
            src="/vector.jpg/369728-PBA6Z8-97.jpg"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 98%', transform: 'scale(1.16)' }}
          />
        </div>
      </div>

      </section>
    </main>
  );
}
