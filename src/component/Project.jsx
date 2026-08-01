import React from 'react'

const ProjectDetails = React.lazy(() => import('./ProjectDetails'))

const Project = ({title,description, subDescription,href, github, image, tags, setPreview}) => {
    const [isHidden, setIsHidden] = React.useState(false);
  return (
           <>
      <div className="flex flex-col py-10 gap-6 sm:flex-row sm:items-center sm:justify-between"
      onMouseEnter={() => setPreview(image)}
      onMouseLeave={() => setPreview(null)}>

        <div>
        <p className="text-2xl">{title}</p>
        <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag)=>(
                <span key={tag.id}>{tag.name}</span>
            ))}
            </div>
           </div>
           <button 
            onClick={() => setIsHidden(true)}
           className="flex items-center gap-1 cursor-pointer hover-animation">
            Read More
            <img src="assets/arrow-right.svg" className="w-5" alt="" loading="lazy"/>
           </button>
        </div>
        <div className="bg-gradient-to-r from-transparent
        via-neutral-700 to-transparent h-[1px] w-full"/>
        {isHidden &&(
          <React.Suspense fallback={<div className="sr-only" />}>
            <ProjectDetails
              title={title}
              description={description}
              subDescription={subDescription}
              image={image}
              tags={tags}
              href={href}
              github={github}
              closeModal={() => setIsHidden(false)}/>
          </React.Suspense>
        )}
        </>
        
  )
}

export default Project