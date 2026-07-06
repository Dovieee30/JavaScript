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

      <div className="py-20 p-8">
        <div className="h-[460px] w-full overflow-hidden rounded-xl border border-slate-200 shadow-md bg-white">
          <img
            alt="Web design concept illustration"
            src="/web-design-concept.jpg"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      </section>
    </main>
  );
}
