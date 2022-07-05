(() => {
  const btn = document.createElement("a")
  btn.classList.add("printButton")
  btn.addEventListener("click", () => {
    alert("To print this page, please enable 'Background graphics', select paper A4 and the scale to around 45")
    window.print()
  })

  document.body.append(btn)
})()
