import React from 'react'
import { motion } from "motion/react"

const ProjectDetails = ({title, description, subDescription, image, tags, href, github, closeModal}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
        <motion.div
            className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
            <button 
            onClick={closeModal}
            className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500">
                <img src="assets/close.svg" className="w-6 h-6" alt="" loading="lazy"/></button>
                <img src={image} alt={title} className="w-full h-auto rounded-t-2xl" loading="lazy"/>
                <div className="p-6 py-5">
                    <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
                    <p className="mb-3 font-normal text-neutral-400">{description}</p>
                    {subDescription.map((subDesc, index)=>(
                        <p className="mb-3 font-normal text-neutral-400" key={index}>{subDesc}</p>
                    ))}
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-3">
                            {tags.map((tag)=>(
                                <img 
                                key={tag.id}
                                src={tag.path}
                                alt={tag.name}
                                className="rounded-lg size-10 hover-animation"
                                loading="lazy"
                                />
                            ))}
                        </div>
                        <a href={href || github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
                            View Project<img src="assets/arrow-up.svg" className="size-4" alt="" loading="lazy" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default ProjectDetails