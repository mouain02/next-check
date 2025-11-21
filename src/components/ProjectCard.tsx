import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  imgSrc: string
  projectLink?: string
  githubLink?: string
}

export default function ProjectCard({ title, description, imgSrc, projectLink, githubLink }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image src={imgSrc} alt={title} width={400} height={250} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between">
          {projectLink && (
            <a href={projectLink} target="_blank" className="text-blue-500 hover:underline">
              Live Demo
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" className="text-gray-800 hover:underline">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
