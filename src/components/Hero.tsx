import Image from 'next/image'

export default function Hero() {
  return (
    <div className="text-center py-10">
      <div className="relative w-64 h-64 mx-auto">
        <Image
          src="/images/profile.jpg"
          alt="Acef Laatiri"
          width={256}
          height={256}
          className="rounded-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mt-4">Acef Laatiri</h1>
      <p className="text-xl text-gray-600 mt-2">
        Passionate Full-Stack Developer | Building modern web apps with Next.js, React & Tailwind CSS | Always learning and creating impactful solutions
      </p>
    </div>
  )
}