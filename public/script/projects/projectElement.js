/**
 * Generates the DOM element with project data
 *
 * @param {object} project
 * @param {string} langColor
 *
 * @returns {HTMLElement} Aside element
 */
export default function projectElement(project, langColor) {
  const aside = document.createElement("aside")
  aside.id = project.id
  aside.onclick = () => {
    location.hash = project.id
  }
  aside.innerHTML = `<h3><a rel="noopener noreferrer" target="_blank" href="${project.html_url}">${
    project.name
  }</a></h3>
<p>${project.description || ""}</p>
${
  project.homepage
    ? `
<div class="homepage">
  <a rel="noopener noreferrer" target="_blank" href="${project.homepage}">${project.homepage}</a>
</div>
  `
    : ``
}

${
  project.topics.length > 0
    ? `<div class="tags">${
        "<span>" + project.topics.join("</span><span>") + "</span>"
      }</div>`
    : ""
}

<div class="meta">
  <div class="left">
    <span class="data language">
      <span class="languageColor" style="--lang-color: ${langColor}"></span>
      <span class="language">${project.language}</span>
    </span>
  </div>
  <div class="right">
    <span class="data stars">${project.stargazers_count}</span>
    <span class="data forks">${project.forks}</span>
    ${project.license ? "<span class=\"data license\">" + project.license.spdx_id + "</span>" : ""}
  </div>
</div>
<div class="dates">
  <small>Updated ${timeSince(new Date(project.pushed_at))} ago</small>
  <span></span>
  <small>Created ${timeSince(new Date(project.created_at))} ago</small>
</div>`
  return aside
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000)
  var interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return interval + " years"
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + " months"
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + " days"
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + " hours"
  }
  interval = Math.floor(seconds / 60)
  if (interval >= 1) {
    return interval + " minutes"
  }
  return Math.floor(seconds) + " seconds"
}
