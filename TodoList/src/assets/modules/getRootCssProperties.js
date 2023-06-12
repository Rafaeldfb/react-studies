/**
 * Returns the property value stored at HTML :root styles
 * @param {String} propertyName The property name to search at :root styles.
 * @returns 
 */
function getRootProperty(propertyName) {
  const root = document.querySelector('html:root')
  return window.getComputedStyle(root).getPropertyValue(typeof propertyName == 'string' ? propertyName : `${propertyName}`)
}

export default getRootProperty;