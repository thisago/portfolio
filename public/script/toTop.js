const toTop = document.getElementById("toTop")

const checkToTop = () => {
  const top = window.pageYOffset || document.body.scrollTop
  if (top > 20) toTop.classList.remove("hidden")
  else toTop.classList.add("hidden")
}
document.addEventListener("scroll", checkToTop)
checkToTop()
