/* eslint-disable react/prop-types */
function CrossSvg({color=null, size, rotate=0, rx=0, ry=0}) {
  return (
    <svg 
      width={size}
      height={size}
      fill={color} 
      transform={rotate != 0 ? `rotate(${rotate}, ${rx}, ${ry})` : ''}
      viewBox="0 0 17.00 17.00" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <g strokeWidth="0.00017">
          <path 
            d="M16,6 L12,6 L12,2 C12,1.447 11.553,1 11,1 L7,1 C6.447,1 6,1.447 6,2 L6,6 L2,6 C1.447,6 1,6.447 1,7 L1,11 C1,11.553 1.447,12 2,12 L6,12 L6,16 C6,16.553 6.447,17 7,17 L11,17 C11.553,17 12,16.553 12,16 L12,12 L16,12 C16.553,12 17,11.553 17,11 L17,7 C17,6.447 16.553,6 16,6 L16,6 Z" 
            fill={color}>
          </path>
        </g>
      </g>
    </svg>
  )
}

export default CrossSvg;