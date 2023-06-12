function getRootProperty(propertyName) {
  const root = document.querySelector('html:root')
  return window.getComputedStyle(root).getPropertyValue(typeof propertyName == 'string' ? propertyName : `${propertyName}`)
}

export default getRootProperty;