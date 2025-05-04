export function createElements(){
  const div = document.createElement("div")
  div.setAttribute("id", id)

  const hourElement = document.createElement("span")
  hourElement.innerText = hour

  const petnameElement = document.createElement("span")
  petnameElement.classList.add("pet-name")
  petnameElement.innerText = petname

  const nameElement = document.createElement("p")
  nameElement.innerText = name

  const descriptionElement = document.createElement("span")
  descriptionElement.innerText = description

  const buttonRemove = document.createElement("a")


  petname.appendChild(name)
  div.appendChild(hour)
  div.appendChild(petname)

  return {div, description, buttonRemove}
}