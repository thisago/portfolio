const toTop = document.getElementById("toTop")

const checkToTop = () => {
  const
    top = window.pageYOffset || document.body.scrollTop
    pageHeight = Math.floor(document.documentElement.getBoundingClientRect().height)
    topPlusVp = top + window.innerHeight
  
  if (top > 20 && topPlusVp < pageHeight) toTop.classList.remove("hidden")
  else toTop.classList.add("hidden")
}
document.addEventListener("scroll", checkToTop)
checkToTop()
