import React, { useMemo, useReducer, useCallback, Fragment } from 'react'
import { StarIcon } from './StarIcon'

function calculateCurrentPosition(totalIcons: number, positionX: number, width: number) {
  const singleHalfValue = 100 / totalIcons
  const iconWidth = width / totalIcons
  let currentValue = 100

  for (let i = 0; i < totalIcons; i += 1) {
    // if position less then quarter icon
    if (positionX <= iconWidth * i + iconWidth / 4) {
      // if there is no value return 0
      if (i === 0 && positionX < iconWidth / 2) currentValue = 0
      else currentValue = singleHalfValue * i
      break
    }
  }

  return currentValue
}

type State = {
  defaultValue: number | null
  hoverValue: number | null
}

type Action =
  | { type: 'PointerMove'; payload: number | null }
  | { type: 'PointerLeave' }
  | { type: 'MouseClick'; payload: number }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'PointerMove':
      return {
        ...state,
        hoverValue: action.payload
      }

    case 'PointerLeave':
      return {
        defaultValue: state.defaultValue,
        hoverValue: null
      }
    case 'MouseClick':
      return {
        ...state,
        defaultValue: action.payload
      }
    default:
      return state
  }
}

interface Props {
  onClick: (value: number) => void
  ratingValue: number
  iconsCount?: number
  size?: number
  readonly?: boolean
  fillColor?: string
  fillColorArray?: string[]
  emptyColor?: string
  fullIcon?: React.ReactElement | null
  emptyIcon?: React.ReactElement | null
  customIcons?: {
    icon: React.ReactElement
  }[]
  rtl?: boolean
  allowHalfIcon?: boolean
  allowHover?: boolean
  transition?: boolean
  className?: string
  style?: React.CSSProperties
  fullClassName?: string
  emptyClassName?: string
  fullStyle?: React.CSSProperties
  emptyStyle?: React.CSSProperties
  showTooltip?: boolean
  tooltipDefaultText?: string
  tooltipArray?: string[]
  tooltipClassName?: string
  tooltipStyle?: React.CSSProperties
}

export function Rating({
  onClick,
  ratingValue = 0,
  iconsCount = 5,
  size = 40,
  readonly = false,
  fillColor = '#ffbc0b',
  fillColorArray = [],
  emptyColor = '#cccccc',
  fullIcon = null,
  emptyIcon = null,
  customIcons = [],
  rtl = false,
  allowHalfIcon = false,
  allowHover = true,
  transition = false,
  className = 'react-simple-star-rating',
  style,
  fullClassName = 'filled-icons',
  emptyClassName = 'empty-icons',
  fullStyle,
  emptyStyle,
  showTooltip = false,
  tooltipDefaultText = 'Your Rate',
  tooltipArray = [],
  tooltipClassName = 'react-simple-star-rating-tooltip',
  tooltipStyle
}: Props) {
  const [{ defaultValue, hoverValue }, dispatch] = useReducer(reducer, {
    defaultValue: allowHalfIcon
      ? (ratingValue / iconsCount) * 100
      : (Math.round(ratingValue) / iconsCount) * 100 || null,
    hoverValue: null
  })

  /**
   * use pointer event rather than mouse event
   *
   * @param event
   * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
   */

  const onPointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    const { clientX, currentTarget } = event
    // get main span element position and width
    const { left, right, width } = currentTarget.children[0].getBoundingClientRect()

    // set for RTL
    const positionX = rtl ? right - clientX : clientX - left

    // Get current pointer position while moves over the icons
    const currentValue = calculateCurrentPosition(totalIcons, positionX, width)

    // set the value to state
    if (currentValue > 0 && hoverValue !== currentValue) {
      dispatch({ type: 'PointerMove', payload: currentValue })
    }
  }

  /**
   * reset values when poiner leave
   */
  const onPointerLeave = () => dispatch({ type: 'PointerLeave' })

  /**
   * hadnle on click function
   */
  const onRate = () => {
    if (hoverValue) {
      dispatch({ type: 'MouseClick', payload: hoverValue })
      // update value on click
      onClick(hoverValue)
    }
  }

  /**
   * handle total icons
   */
  const totalIcons = useMemo(() => (allowHalfIcon ? iconsCount * 2 : iconsCount), [allowHalfIcon, iconsCount])

  /**
   * convert value to index
   */
  const valueIndex = useCallback(
    (value: number) => {
      // start with `1` to avoid -1 values
      let index = 1

      if (allowHalfIcon) index = value / totalIcons
      else index = value / 2 / 10

      return Math.round(index - 1)
    },
    [allowHalfIcon, totalIcons]
  )

  /**
   * convert percentage value to render value
   */
  const renderValue = useCallback((value: number) => (allowHalfIcon ? value / 2 / 10 : valueIndex(value) + 1), [
    allowHalfIcon,
    valueIndex
  ])

  /**
   *
   * check for default rating or hover values
   * @returns `number` rating or hover values
   */
  const valuePercentage = useMemo(
    () => (allowHover && hoverValue && hoverValue) || (defaultValue && defaultValue) || 0,
    [allowHover, hoverValue, defaultValue]
  )

  /**
   *
   * @param value `number` default rating or hover value
   * @returns `string | number` tootip array of strings or rating values
   */
  const handleTooltip = (value: number) =>
    tooltipArray.length > 0 ? tooltipArray[valueIndex(value)] : renderValue(value)

  return (
    <span style={{ display: 'inline-block', direction: `${rtl ? 'rtl' : 'ltr'}` }}>
      <span
        className={className}
        style={{
          position: 'relative',
          display: 'inline-block',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          cursor: readonly ? '' : 'pointer',
          verticalAlign: 'middle',
          userSelect: 'none',
          ...style
        }}
        onPointerMove={readonly ? undefined : onPointerMove}
        onPointerLeave={readonly ? undefined : onPointerLeave}
        onClick={readonly ? undefined : onRate}
        aria-hidden='true'
      >
        <span
          className={emptyClassName}
          style={{
            display: 'inline-block',
            color: emptyColor,
            ...emptyStyle
          }}
        >
          {[...Array(iconsCount)].map((_, index) => (
            <Fragment key={index}>
              {customIcons[index]?.icon || emptyIcon || <StarIcon key={index} size={size} />}
            </Fragment>
          ))}
        </span>

        <span
          className={fullClassName}
          style={{
            position: 'absolute',
            top: 0,
            [rtl ? 'right' : 'left']: 0,
            color:
              (allowHover && hoverValue && fillColorArray[valueIndex(hoverValue)]) ||
              (defaultValue && fillColorArray[valueIndex(defaultValue)]) ||
              fillColor,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'inline-block',
            transition: transition ? 'width .2s ease, color .2s ease' : '',
            width: `${valuePercentage}%`,
            ...fullStyle
          }}
          title={`${
            (hoverValue && renderValue(hoverValue)) || (defaultValue && renderValue(defaultValue))
          } out of ${iconsCount}`}
        >
          {[...Array(iconsCount)].map((_, index) => (
            <Fragment key={index}>{customIcons[index]?.icon || fullIcon || <StarIcon size={size} />}</Fragment>
          ))}
        </span>
      </span>

      {showTooltip && (
        <span
          className={tooltipClassName}
          style={{
            display: 'inline-block',
            padding: '5px 15px',
            backgroundColor: '#333',
            color: '#fff',
            [rtl ? 'marginRight' : 'marginLeft']: 20,
            verticalAlign: 'middle',
            borderRadius: 5,
            ...tooltipStyle
          }}
        >
          {(hoverValue && handleTooltip(hoverValue)) ||
            (defaultValue && handleTooltip(defaultValue)) ||
            tooltipDefaultText}
        </span>
      )}
    </span>
  )
}
