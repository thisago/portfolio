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
export default async function getProjects (user, max = 100, page = 1, type = "owner", sort = "updated") {
  return await (await fetch(`https://api.github.com/users/${user}/repos?per_page=${max}&page=${page}&type=${type}&sort=${sort}`)).json()
}
