import React from 'react'
import StarIcon from './StarIcon'

export interface RatingProps {
  ratingValue: number
  stars?: number
  size?: number
  fillColor?: string
  emptyColor?: string
  className?: string
  children?: React.ReactNode
}
export function RatingView({
  ratingValue,
  stars = 5,
  size = 25,
  fillColor = '#f1a545',
  emptyColor = '#cccccc',
  className = '',
  children
}: RatingProps): JSX.Element {
  return (
    <span className={className}>
      {[...Array(stars)].map((_, index) => (
        <span
          key={index}
          style={{
            color: ratingValue && ratingValue > index ? fillColor : emptyColor,
            width: size,
            height: size,
            display: 'inline-flex'
          }}
        >
          {children || <StarIcon size={size} />}
        </span>
      ))}
    </span>
  )
}
