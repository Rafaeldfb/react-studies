/* eslint-disable react/prop-types */
import getRootProperty from "../../assets/modules/getRootCssProperties"
import classes from "./RemoveButton.module.sass"

// AJUSTAR O BACKGROUND - VER DIFERENÇA ENTRE NAVEGADORES

function RemoveButton({callback, size='1rem', color=null, colorProperty=null, title=''}) {
  let fillColor = color ?? getRootProperty(colorProperty ?? 'color');

  return (
    <button className={classes.RemoveButton} onClick={callback} title={title}>
      <svg 
        width={size}
        height={size}
        fill={fillColor}
        transform="rotate(45)"
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg" 
      >
        <path 
          fill={fillColor}
          d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
        />
      </svg>
    </button>
  )
}

export default RemoveButton;