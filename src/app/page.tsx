import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Hero /> {/* <-- Add Hero here */}

      <h2 className="text-3xl font-bold my-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Portfolio Website"
          description="A modern portfolio website built with Next.js and Tailwind CSS."
          imgSrc="/images/project1.png"
        />
        <ProjectCard
          title="E-commerce App"
          description="A full-stack e-commerce web application using React, Node.js, and MongoDB."
          imgSrc="/images/project2.png"
        />
        <ProjectCard
          title="Chat App"
          description="A real-time chat application using WebSockets and React."
          imgSrc="/images/project3.png"
        />
      </div>
    </div>
  )
}
