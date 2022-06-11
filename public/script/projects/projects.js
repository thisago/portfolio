import getProjects from "./getProjects.js"
import languagesColor from "./languagesColor.js"
import projectElement from "./projectElement.js"

const user = "thisago"

const projects = await getProjects(user)
const container = document.querySelector("#projects .projects")

container.innerHTML = ""

let scrollTo = null
projects.map((project) => {
  if (project.fork) return
  if (!project.language) return
  const el = projectElement(project, languagesColor[project.language].color)
  container.append(el)
  if (window.location.hash.slice(1) == project.id) scrollTo = el
})


const updateStatus = document.querySelector(".updateStatus")
updateStatus.innerHTML = `Fetched from Github <span class>${projects.length}</span> projects.`


if (scrollTo) setTimeout(() => {
  scrollTo.scrollIntoView()
}, 600);
