let selectedPanel = null

function toggleOpen() {
  const panel = this
  if(selectedPanel && selectedPanel !== panel)
    selectedPanel.classList.remove('open');
  selectedPanel = panel
  selectedPanel.classList.toggle('open')
}

function toggleActive(e) {
  if(e.propertyName.includes('flex'))
    this.classList.toggle('open-active');
}

document.querySelectorAll('.panel').forEach(panel => {
  panel.addEventListener('click', toggleOpen)
  panel.addEventListener('transitionend', toggleActive)
})