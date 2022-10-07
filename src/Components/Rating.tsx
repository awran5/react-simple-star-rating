import {
  useMemo,
  useReducer,
  useCallback,
  Fragment,
  ReactNode,
  CSSProperties,
  MouseEvent,
  PointerEvent,
  useEffect
} from 'react'
import { StarIcon, StarIconProps } from './StarIcon'
import { reducer } from '../reducer'
import css from '../style.module.css'

export interface RatingProps extends StarIconProps {
  /** Handles the returned rating value */
  onClick?: (value: number, index: number, event?: MouseEvent<HTMLSpanElement>) => void
  /** onPointerMove callback function with `hover`, `index` alongside `event` values passed */
  onPointerMove?: (value: number, index: number, event: PointerEvent<HTMLSpanElement>) => void
  /** onPointerEnter callback function */
  onPointerEnter?: (event: PointerEvent<HTMLSpanElement>) => void
  /** onPointerLeave callback function */
  onPointerLeave?: (event: PointerEvent<HTMLSpanElement>) => void
  /** Set initial value */
  initialValue?: number
  /** Number of the icons */
  iconsCount?: number
  /** Read only mode */
  readonly?: boolean
  /** Add a group of icons */
  customIcons?: {
    icon: ReactNode
  }[]
  /** RTL mode */
  rtl?: boolean
  /** Enable a fractional rate (half icon) */
  allowFraction?: boolean
  /** Enable / Disable hover effect on empty icons */
  allowHover?: boolean
  /** Enable / Disable hover effect on filled icons */
  disableFillHover?: boolean
  /** Enable / Disable transition effect on mouse hover */
  transition?: boolean
  /** Applied to the `main` span */
  className?: string
  /** Inline style applied to the `main` span */
  style?: CSSProperties

  /** Custom fill icon SVG */
  fillIcon?: ReactNode | null
  /** Filled icons color */
  fillColor?: string
  /** Array of string to add color range */
  fillColorArray?: string[]
  /** Inline style applied to `filled-icons` icon span  */
  fillStyle?: CSSProperties
  /** Filled icons `span` className */
  fillClassName?: string

  /** Custom empty icon SVG */
  emptyIcon?: ReactNode | null
  /** Empty icons color */
  emptyColor?: string
  /** Inline style applied to `empty-icons` span  */
  emptyStyle?: CSSProperties
  /** ٌُEmpty icons `span` className */
  emptyClassName?: string

  /** Show a tooltip with live values */
  showTooltip?: boolean
  /** Initial tooltip text if there is no rating value */
  tooltipDefaultText?: string
  /** Array of strings that will show inside the tooltip */
  tooltipArray?: string[]
  /** Inline style applied to the `tooltip` span */
  tooltipStyle?: CSSProperties
  /** Tooltip CSS className */
  tooltipClassName?: string
  /** Separator word in a title of a rating star `(1 out of 5)` */
  titleSeparator?: string
}

export function Rating({
  onClick,
  onPointerMove,
  onPointerEnter,
  onPointerLeave,
  initialValue = 0,
  iconsCount = 5,
  size = 40,
  readonly = false,
  rtl = false,
  customIcons = [],
  allowFraction = false,
  style,
  className = 'react-simple-star-rating',
  transition = false,

  allowHover = true,
  disableFillHover = false,

  fillIcon = null,
  fillColor = '#ffbc0b',
  fillColorArray = [],
  fillStyle,
  fillClassName = 'filled-icons',

  emptyIcon = null,
  emptyColor = '#cccccc',
  emptyStyle,
  emptyClassName = 'empty-icons',

  showTooltip = false,
  tooltipDefaultText = 'Your Rate',
  tooltipArray = [],
  tooltipStyle,
  tooltipClassName = 'react-simple-star-rating-tooltip',

  SVGclassName = 'star-svg',
  titleSeparator = 'out of',
  SVGstyle,
  SVGstorkeWidth = 0,
  SVGstrokeColor = 'currentColor'
}: RatingProps) {
  const [{ ratingValue, hoverValue, hoverIndex, valueIndex }, dispatch] = useReducer(reducer, {
    hoverIndex: 0,
    valueIndex: 0,
    ratingValue: 0,
    hoverValue: null
  })

  /**
   * Check for touch devices
   * @returns `boolean`
   */
  const isTouchDevice = useMemo(() => !!window?.ontouchstart || (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0), [])
  const totalIcons = useMemo(() => (allowFraction ? iconsCount * 2 : iconsCount), [allowFraction, iconsCount])

  // Convert local rating value to precentage
  const localRating = useMemo(() => {
    if (initialValue > totalIcons) return 0

    // Check for a decimal value
    if (!allowFraction && Math.floor(initialValue) !== initialValue) {
      return Math.ceil(initialValue) * 2 * 10
    }

    return Math.round((initialValue / iconsCount) * 100)
  }, [allowFraction, initialValue, iconsCount, totalIcons])

  const localRatingIndex = useMemo(() => (allowFraction ? initialValue * 2 - 1 : initialValue - 1) || 0, [
    allowFraction,
    initialValue
  ])

  const renderValue = useCallback((value: number) => (iconsCount % 2 !== 0 ? value / 2 / 10 : value / iconsCount), [
    iconsCount
  ])

  const handlePointerMove = (event: PointerEvent<HTMLSpanElement>) => {
    const { clientX, currentTarget } = event
    // Get main span element position and width
    const { left, right, width } = currentTarget.children[0].getBoundingClientRect()

    // Handle RTL
    const positionX = rtl ? right - clientX : clientX - left

    // Get current pointer position while moves over the icons
    let currentValue = totalIcons
    const iconWidth = Math.round(width / totalIcons)

    for (let i = 0; i <= totalIcons; i = i + 1) {
      if (positionX <= iconWidth * i) {
        if (i === 0 && positionX < iconWidth) currentValue = 0
        else currentValue = i
        break
      }
    }

    const index = currentValue - 1

    if (currentValue > 0) {
      // Set value and index state
      dispatch({ type: 'PointerMove', payload: (currentValue * 100) / totalIcons, index })

      if (onPointerMove) {
        if (hoverValue) onPointerMove(renderValue(hoverValue), index, event)
      }
    }
  }

  const handlePointerEnter = (event: PointerEvent<HTMLSpanElement>) => {
    if (onPointerEnter) onPointerEnter(event)
    // Enable only on touch devices
    if (!isTouchDevice) return

    handlePointerMove(event)
  }

  const handleClick = (event?: MouseEvent<HTMLSpanElement>) => {
    if (hoverValue) {
      dispatch({ type: 'MouseClick', payload: hoverValue })
      if (onClick) onClick(renderValue(hoverValue), hoverIndex, event)
    }
  }

  const handlePointerLeave = (event: PointerEvent<HTMLSpanElement>) => {
    if (isTouchDevice) handleClick()

    dispatch({ type: 'PointerLeave' })
    if (onPointerLeave) onPointerLeave(event)
  }

  const valuePercentage = useMemo(() => {
    if (allowHover) {
      if (disableFillHover) {
        const currentValue = (ratingValue && ratingValue) || localRating
        return hoverValue && hoverValue > currentValue ? hoverValue : currentValue
      }
      return (hoverValue && hoverValue) || (ratingValue && ratingValue) || localRating
    }

    return (ratingValue && ratingValue) || localRating
  }, [allowHover, disableFillHover, hoverValue, ratingValue, localRating])

  useEffect(() => {
    if (tooltipArray.length > totalIcons) {
      console.error('tooltipArray Array length is bigger then Icons Count length.')
    }
  }, [tooltipArray.length, totalIcons])

  // const handleTooltip = useCallback(
  //   (value: number) => {
  //     return tooltipArray.length > 0
  //       ? tooltipArray[hoverIndex || valueIndex || localRatingIndex]
  //       : renderValue(value) || 0
  //   },
  //   [tooltipArray, hoverIndex, valueIndex, localRatingIndex, renderValue]
  // )

  const ratingArray = useCallback(
    (array: string[]) => {
      return (
        (hoverValue && array[hoverIndex]) ||
        (ratingValue && array[valueIndex]) ||
        (initialValue && array[localRatingIndex])
      )
    },
    [hoverValue, hoverIndex, ratingValue, valueIndex, initialValue, localRatingIndex]
  )

  const ratingRenderValues = useMemo(() => {
    return (
      (hoverValue && renderValue(hoverValue)) ||
      (ratingValue && renderValue(ratingValue)) ||
      (initialValue && renderValue(localRating))
    )
  }, [hoverValue, renderValue, ratingValue, initialValue, localRating])

  return (
    <span className={css.starRatingWrap} style={{ direction: `${rtl ? 'rtl' : 'ltr'}` }}>
      <span
        className={`${css.simpleStarRating} ${className}`}
        style={{
          cursor: readonly ? '' : 'pointer',
          ...style
        }}
        onPointerMove={readonly ? undefined : handlePointerMove}
        onPointerEnter={readonly ? undefined : handlePointerEnter}
        onPointerLeave={readonly ? undefined : handlePointerLeave}
        onClick={readonly ? undefined : handleClick}
        aria-hidden='true'
      >
        <span
          className={`${css.emptyIcons} ${emptyClassName}`}
          style={{
            color: emptyColor,
            ...emptyStyle
          }}
        >
          {[...Array(iconsCount)].map((_, index) => (
            <Fragment key={index}>
              {customIcons[index]?.icon || emptyIcon || (
                <StarIcon
                  SVGclassName={SVGclassName}
                  SVGstyle={SVGstyle}
                  SVGstorkeWidth={SVGstorkeWidth}
                  SVGstrokeColor={SVGstrokeColor}
                  size={size}
                />
              )}
            </Fragment>
          ))}
        </span>

        <span
          className={`${css.fillIcons} ${fillClassName}`}
          style={{
            [rtl ? 'right' : 'left']: 0,
            color: ratingArray(fillColorArray) || fillColor,

            transition: transition ? 'width .2s ease, color .2s ease' : '',
            width: `${valuePercentage}%`,
            ...fillStyle
          }}
          title={`${
            (hoverValue && renderValue(hoverValue)) || renderValue(localRating)
          } ${titleSeparator} ${iconsCount}`}
        >
          {[...Array(iconsCount)].map((_, index) => (
            <Fragment key={index}>
              {customIcons[index]?.icon || fillIcon || (
                <StarIcon
                  SVGclassName={SVGclassName}
                  SVGstyle={SVGstyle}
                  SVGstorkeWidth={SVGstorkeWidth}
                  SVGstrokeColor={SVGstrokeColor}
                  size={size}
                />
              )}
            </Fragment>
          ))}
        </span>
      </span>

      {showTooltip && (
        <span
          className={`${css.tooltip} ${tooltipClassName}`}
          style={{
            [rtl ? 'marginRight' : 'marginLeft']: 20,
            ...tooltipStyle
          }}
        >
          {/* {tooltipArray.length > 0
            ? (hoverValue && tooltipArray[hoverIndex]) ||
              (ratingValue && tooltipArray[valueIndex]) ||
              (initialValue && tooltipArray[localRatingIndex])
            : (hoverValue && renderValue(hoverValue)) ||
              (ratingValue && renderValue(ratingValue)) ||
              renderValue(localRating) ||
              tooltipDefaultText} */}

          {(tooltipArray.length > 0 ? ratingArray(tooltipArray) : ratingRenderValues) || tooltipDefaultText}
        </span>
      )}
    </span>
  )
}
