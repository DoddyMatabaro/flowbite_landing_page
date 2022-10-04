import { Card, Pagination } from 'flowbite-react'
import { useState, useEffect } from 'react'
import { projects } from '../assets/data'

function Projects() {
  const itemsPerPage = 10
  const numberOfPages = Math.ceil(projects.length / itemsPerPage)
  const paginate = (projectsItems) => {
    const newProjectsItems = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return projectsItems.slice(start, start + itemsPerPage)
    })
    return newProjectsItems
  }

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const getProjects = () => {
    setData(paginate(projects))
    setLoading(false)
  }

  useEffect(()=>{
      getProjects()
  },[])
  
  const [page, setPage] = useState(0)
  const [projectsWrapped, setProjectsWrapped] = useState([])
 
  useEffect(() => {
    if (loading) return
    setProjectsWrapped(data[page])
  }, [loading, page])

  const handlePage = (index) => {
    setPage(index)
  }

  console.log(projectsWrapped)
  return (
    <Card>
        <h5 className="mb-2 text-4xl  text-center  uppercase font-bold text-gray-900 dark:text-white">
            Notre Gallerie
        </h5>
      <div className='grid grid-cols-4 gap-2 sm:grid-cols-1 md:grid-cols-2'>
        {projectsWrapped.map((project)=>{
          return(
            <Card class="bg-inherit h-72 ">
              <img class="w-full h-full rounded-lg object-scale-down transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={project} alt="project" />
            </Card>
          )
        })}
      </div>
      <div className="flex items-center justify-center text-center">
        <Pagination
          currentPage={page}
          layout="paginate"
          // onPageChange={getProducts()}
          showIcons={true}
          totalPages={numberOfPages}
          previouslabel="Go back"
          nextlabel="Go forward"
          />
      </div>
    </Card>
      
  )
}

export default Projects