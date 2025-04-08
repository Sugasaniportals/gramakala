import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#fff8f0] to-[#fce9db] text-[#2e180d] px-4">
      <div className="flex flex-col items-center space-y-6 text-center max-w-xl">
        <Image
          src="/logo.png"
          alt="GramaKala Logo"
          width={140}
          height={140}
        />
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">GramaKala</h1>
        <p className="text-lg md:text-xl text-[#6d4c41]">
          Empowering Rural Talent 
        </p>
        <p className="text-md md:text-lg text-[#7e5d4e]">
          A marketplace for skilled hands and humble hearts 💛
        </p>
        <div className="text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} GramaKala. All rights reserved.
        </div>
      </div>
    </div>
  );
}
