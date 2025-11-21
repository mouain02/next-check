import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          Hi, I am Acef Laatiri, a passionate Software Developer with experience in building modern web applications using Next.js, React, and Tailwind CSS. I love turning ideas into clean, efficient, and interactive digital experiences.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          My journey in programming started with Python and web development, and over time I expanded into full-stack development. I enjoy learning new technologies, solving challenging problems, and continuously improving my skills.
        </p>
        <p className="text-lg text-gray-700">
          Outside coding, I enjoy exploring tech trends, contributing to projects, and sharing knowledge with the developer community.
        </p>
      </main>
      <Footer />
    </>
  )
}
