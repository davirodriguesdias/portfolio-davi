"use client";

import { useState, useRef } from "react";

type Project = {
  id: number;
  image: string;
  title: string;
  description: string;
};

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    setIsDragging(true);
    startX.current = e.clientX;
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging) return;
    const offset = e.clientX - startX.current;
    setDragOffset(offset);
  }

  // function handleMouseUp() {
  //   setIsDragging(false);
  //   if (dragOffset > 50) {
  //     setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  //   } else if (dragOffset < -50) {
  //     setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  //   }
  //   setDragOffset(0);
  // }

  // const currentProject = projects[currentIndex];

  // function nextProject() {
  //   setCurrentIndex((prev: number) =>
  //     prev === projects.length - 1 ? 0 : prev + 1,
  //   );
  // }

  // function previousProject() {
  //   setCurrentIndex((prev: number) =>
  //     prev === 0 ? projects.length - 1 : prev - 1,
  //   );
  // }

  return (
    <div className="projectsAnimation overflow-hidden">
      <div className={`py-10 flex gap-5 ${isDragging ? "transition-none" : "transition-transform duration-300 ease-out"} cursor-grabbing `}
           style={{ transform: `translateX(calc( ${dragOffset}px))` }}
           onMouseDown={handleMouseDown}
           onMouseMove={handleMouseMove}
          //  onMouseUp={handleMouseUp}
          //  onMouseLeave={handleMouseUp}
           >
        {/* <button onClick={previousProject}>Anterior</button> */}
        {projects.map((project) => (
          <div key={project.id}>
            <div className="w-120 rounded-[5px] overflow-hidden">
              <img className="object-cover" src={project.image} alt="Project" />
            </div>
            <div className="pl-2">
              <h3 className="text-2xl font-bold my-2">{project.title}</h3>
              <p className="text-[1em] text-gray-400 text-justify">
                {project.description}
              </p>
            </div>
          </div>
        ))}
    </div>

      {/* <button onClick={nextProject}>Próximo</button> */}
    </div>
  );
}
