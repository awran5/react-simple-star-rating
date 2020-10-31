import * as React from 'react'

interface StarIconProps {
  value: null | number
  transition: boolean | undefined
  index: number
  fill: string | undefined
  empty: string | undefined
}

const StarIcon: React.FC<StarIconProps> = ({
  value = null,
  transition = false,
  index = 0,
  fill = '#f1a545',
  empty = '#cccccc',
  ...props
}) => {
  return (
    <svg
      x='0px'
      y='0px'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 64 64'
      enableBackground='new 0 0 64 64'
      style={transition ? { transition: 'fill .2s ease-in-out 0s' } : {}}
      fill={value && value > index ? fill : empty}
      {...props}
    >
      <path d='M63.389 24.951L41.7 21.8 32 2.146 22.3 21.8.611 24.951l15.693 15.3L12.6 61.854 32 51.653l19.4 10.201-3.704-21.603z' />
    </svg>
  )
}

export default StarIcon
