import React from 'react'

interface StarIconProps {
  size?: number
  strokeColor?: string
  storkeWidth?: number
  className?: string
  style?: React.CSSProperties
}

export function StarIcon({
  size = 25,
  strokeColor = 'none',
  storkeWidth = 0,
  className = 'star-svg',
  style = { display: 'inline' }
}: StarIconProps) {
  return (
    <svg fill='currentColor' width={size} height={size} viewBox='0 0 24 24' className={className} style={{ ...style }}>
      <path
        fill='currentColor'
        stroke={strokeColor}
        strokeMiterlimit='10'
        strokeWidth={storkeWidth}
        d='M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z'
      />
    </svg>
  )
}
