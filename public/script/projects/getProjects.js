/**
 * Get the projects of user from localstorage or Github
 *
 * @param {string} user
 * @param {number} max Default 100
 * @param {number} page Default 1
 * @param {string} type Default "owner"
 * @param {string} sort Default "updated"
 * @param {boolean} forceFetch Force fetch from Github
 * @param {number} storageLife Time in seconds that data will be held in localstorage, if exeeds, then will fetch again; Default 10 minutes
 *
 * @returns {object} The projects of the user
 */
export default async function getProjects(
  user,
  max = 100,
  page = 1,
  type = "owner",
  sort = "updated",
  forceFetch = false,
  storageLife = 10 * 60
) {
  let willFetch = forceFetch
  const currentData = localStorage.getItem("gh_repos"),
    limitDataTime = new Date(
      parseInt(localStorage.getItem("gh_repos_time")) + storageLife * 1000
    ),
    nowTime = new Date()
  if (!currentData) willFetch = true
  if (nowTime > limitDataTime) willFetch = true

  if (willFetch) {
    localStorage.setItem(
      "gh_repos",
      await fetchProjects(user, max, page, type, sort)
    )
    localStorage.setItem("gh_repos_time", Date.now())
    return await getProjects(user, max, page, type, sort, false, storageLife)
  } else return JSON.parse(currentData)
}

/**
 * Fetches the projects of user from Github
 *
 * @param {string} user
 * @param {number} max
 * @param {number} page
 * @param {string} type
 * @param {string} sort
 *
 * @returns {object} The projects of the user
 */
async function fetchProjects(
  user,
  max = 100,
  page = 1,
  type = "owner",
  sort = "updated"
) {
  return await (
    await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${max}&page=${page}&type=${type}&sort=${sort}`
    )
  ).text()
}
