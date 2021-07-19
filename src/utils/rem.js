export function rem() {
  let clientWidth = document.documentElement.clientWidth
  let size = 50 * clientWidth / 375
  document.documentElement.style.fontSize = size + 'px'
}