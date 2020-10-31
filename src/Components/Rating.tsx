import * as React from 'react'
import StarIcon from './StarIcon'

interface RatingProps {
  onClick: (index: number) => void
  ratingValue: number | null
  stars?: number | undefined
  size?: number | undefined
  transition?: boolean | undefined
  fillColor?: string | undefined
  emptyColor?: string | undefined
  label?: boolean | undefined
  className?: string | undefined
}

const Rating: React.FC<RatingProps> = ({
  onClick,
  ratingValue = null,
  stars = 5,
  size = 25,
  transition = false,
  fillColor = '#f1a545',
  emptyColor = '#cccccc',
  label = false,
  className
}) => {
  const [hoverValue, setHoverValue] = React.useState<number | null>(ratingValue)

  return (
    <span style={className ? {} : { display: 'inline-flex', verticalAlign: 'bottom' }} className={className}>
      {[...Array(stars)].map((_, index: number) => (
        <span
          key={index}
          style={{
            cursor: 'pointer',
            width: size,
            height: size
          }}
          onMouseEnter={() => setHoverValue(index + 1)}
          onMouseLeave={() => setHoverValue(null)}
          onClick={() => onClick(index + 1)}
        >
          <StarIcon
            value={hoverValue || ratingValue}
            transition={transition}
            index={index}
            fill={fillColor}
            empty={emptyColor}
          />
        </span>
      ))}
      {label && (
        <span
          className={`${className}-label`}
          style={
            className
              ? {}
              : {
                  width: size,
                  height: size,
                  fontSize: size,
                  lineHeight: `${size}px`,
                  textAlign: 'center'
                }
          }
        >
          {hoverValue || ratingValue}
        </span>
      )}
    </span>
  )
}

export default Rating
