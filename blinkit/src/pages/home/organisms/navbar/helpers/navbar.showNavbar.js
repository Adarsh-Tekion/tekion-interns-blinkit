function showNavbar(item) {
  return (
    <a href={item.link} key={item.name} className="bar">{item.name}</a>
  )
}
export { showNavbar }