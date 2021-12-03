const root = document.querySelector('html')
// Alternatively: document.documentElement
const rootControl = getComputedStyle(root)
const baseColor = rootControl.getPropertyValue('--base')

function handleUpdate(ev) {
  const input = ev.currentTarget
  const varName = input.name
  const newValue = input.value
  const suffix = input.dataset.sizing ?? ''
  root.style.setProperty(`--${varName}`, `${newValue}${suffix}`)
}

const inputs = document.querySelectorAll('.controls input')

inputs.forEach(input => {
  input.addEventListener('change', handleUpdate)
})
