"use client";

import { projects, type Project } from "@/app/projects/data/projects";
import { Monitor, Search, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject && projects.length > 0) {
      setSelectedProject(projects[0]);
    }
  }, [selectedProject]);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* Sidebar izquierda */}
      <div
        className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-800 bg-black p-4 
                md:sticky md:top-0 md:h-screen overflow-y-auto"
      >
        <h1 className="text-2xl font-bold mb-4">Proyectos</h1>

        {/* Buscador */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar proyecto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-950 border border-gray-800 rounded-lg focus:outline-none text-white placeholder-gray-400 text-sm"
          />
        </div>

        {/* Lista de proyectos */}
        <div className="space-y-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`cursor-pointer rounded-lg border p-3 transition-all ${
                selectedProject?.id === project.id
                  ? "bg-gray-900 border-white/30"
                  : "bg-black border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-start space-x-2">
                <Image
                  src={project.logo || "/placeholder.svg"}
                  alt={project.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain bg-white rounded p-1"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white truncate text-sm">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-400">{project.client}</p>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-1">
                    {project.description}
                  </p>

                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>

                  {/* Extra info */}
                  <div className="mt-1 text-xs text-gray-400 space-y-1">
                    <p>{project.location}</p>
                    {project.benefits && (
                      <ul className="list-disc pl-4">
                        {project.benefits.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    )}
                    <p className="italic">{project.contact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contenido derecho - Imágenes */}
      <div className="flex-1 flex flex-col bg-black">
        {selectedProject ? (
          <>
            {/* Encabezado */}
            <div className="border-b border-gray-800 p-4 md:p-6 flex items-center space-x-4">
              <Image
                src={selectedProject.logo || "/placeholder.svg"}
                alt={selectedProject.name}
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 object-contain bg-gray-800 rounded-lg p-2"
              />
              <div>
                <h2 className="text-lg md:text-2xl font-bold">
                  {selectedProject.name}
                </h2>
                <p className="text-gray-400">{selectedProject.client}</p>
              </div>
            </div>

            {/* Imágenes centradas */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center space-y-6">
              {selectedProject.images.length > 0 ? (
                selectedProject.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`${selectedProject.name} ${i + 1}`}
                    width={800}
                    height={600}
                    className="w-full md:w-2/3 lg:w-1/2 object-contain rounded-lg shadow-lg"
                  />
                ))
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No hay imágenes disponibles
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center p-4">
              <Monitor className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                Selecciona un proyecto
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Elige un proyecto de la lista para ver sus imágenes
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
