import React from 'react'
import StarIcon from './StarIcon'

export interface RatingProps {
  ratingValue: number
  stars?: number
  size?: number
  fillColor?: string
  emptyColor?: string
  className?: string
  filledClassName?: string
  children?: React.ReactNode
}
export function RatingView({
  ratingValue,
  stars = 5,
  size = 25,
  fillColor = '#f1a545',
  emptyColor = '#cccccc',
  className = '',
  filledClassName = '',
  children
}: RatingProps): JSX.Element {
  return (
    <span className={className}>
      {[...Array(stars)].map((_, index) => {
        const isFilled = ratingValue && ratingValue > index

        return (
          <span
            key={index}
            className={isFilled ? filledClassName : ''}
            style={{
              color: isFilled ? fillColor : emptyColor,
              width: size,
              height: size,
              display: 'inline-flex'
            }}
          >
            {children || <StarIcon size={size} />}
          </span>
        )
      })}
    </span>
  )
}
