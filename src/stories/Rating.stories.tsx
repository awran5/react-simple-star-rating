/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import {
  MdFavoriteBorder,
  MdFavorite,
  MdOutlineSentimentDissatisfied,
  MdOutlineSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVeryDissatisfied,
  MdOutlineSentimentVerySatisfied
} from 'react-icons/md'

import { Rating } from '../components/Rating'

export default {
  title: 'Example',
  component: Rating,
  argTypes: {}
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => {
  const [rating, setRating] = useState(0)
  const handleClick = (value: number) => setRating(value)

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        direction: `${args.rtl ? 'rtl' : 'ltr'}`,
        touchAction: 'none'
      }}
    >
      <Rating {...args} onClick={handleClick} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const TransitionEffect = Template.bind({})
TransitionEffect.args = {
  transition: true,
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const InitialValue = Template.bind({})
InitialValue.args = {
  initialValue: 3,
  transition: true,
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const ColorRange = Template.bind({})
ColorRange.args = {
  transition: true,
  fillColorArray: ['#f14f45', '#f16c45', '#f18845', '#f1b345', '#f1d045'],
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const WithTooltip = Template.bind({})
WithTooltip.args = {
  showTooltip: true,
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const CustomTooltip = Template.bind({})
CustomTooltip.args = {
  showTooltip: true,
  tooltipArray: ['Terrible', 'Bad', 'Average', 'Great', 'Perfect'],
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const ReadOnlyMode = Template.bind({})
ReadOnlyMode.args = {
  initialValue: 2,
  readonly: true,
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const FractionRate = Template.bind({})
FractionRate.args = {
  allowFraction: true,
  transition: true,
  showTooltip: true,
  tooltipArray: [
    'Terrible',
    'Terrible+',
    'Bad',
    'Bad+',
    'Average',
    'Average+',
    'Great',
    'Great+',
    'Awesome',
    'Awesome+'
  ],
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const CustomSVG = Template.bind({})
CustomSVG.args = {
  fillIcon: <MdFavorite size={50} />,
  emptyIcon: <MdFavoriteBorder size={50} />,
  transition: true,
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const CustomSVGGroup = Template.bind({})
CustomSVGGroup.args = {
  customIcons: [
    { icon: <MdOutlineSentimentDissatisfied size={50} /> },
    { icon: <MdOutlineSentimentNeutral size={50} /> },
    { icon: <MdOutlineSentimentSatisfied size={50} /> },
    { icon: <MdOutlineSentimentVeryDissatisfied size={50} /> },
    { icon: <MdOutlineSentimentVerySatisfied size={50} /> }
  ],
  transition: true,
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const DisableHover = Template.bind({})
DisableHover.args = {
  allowHover: false,
  disableFillHover: false,
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const DisableFillHover = Template.bind({})
DisableFillHover.args = {
  disableFillHover: true,
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const IconsCount = Template.bind({})
IconsCount.args = {
  iconsCount: 10,
  showTooltip: true,
  transition: true,
  tooltipArray: [
    'Terrible',
    'Terrible+',
    'Bad',
    'Bad+',
    'Average',
    'Average+',
    'Great',
    'Great+',
    'Awesome',
    'Awesome+'
  ],
  fillColorArray: [
    '#f14f45',
    '#f14f45',
    '#f16c45',
    '#f17a45',
    '#f18845',
    '#f19745',
    '#f1b345',
    '#f1c245',
    '#f1d045',
    '#f1de45'
  ],
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const RTLSupport = Template.bind({})
RTLSupport.args = {
  rtl: true,
  showTooltip: true,
  titleSeparator: 'من',
  tooltipDefaultText: 'التقييم',
  tooltipArray: ['سيئ جدا', 'سيئ', 'متوسط', 'رائع', 'ممتاز'],
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const onPointerEnter = Template.bind({})
onPointerEnter.args = {
  onClick: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}

export const onPointerLeave = Template.bind({})
onPointerLeave.args = {
  onClick: undefined,
  onPointerEnter: undefined,
  onPointerMove: undefined
}

export const onPointerMove = Template.bind({})
onPointerMove.args = {
  onClick: undefined,
  onPointerEnter: undefined,
  onPointerLeave: undefined
}

export const ResetRating: ComponentStory<typeof Rating> = (args) => {
  const [rating, setRating] = useState(0)
  const handleClick = (value: number) => setRating(value)
  const handleReset = () => setRating(0)

  return (
    <div
      style={{
        direction: `${args.rtl ? 'rtl' : 'ltr'}`,
        touchAction: 'none'
      }}
    >
      <Rating {...args} onClick={handleClick} initialValue={rating} />
      <button style={{ marginLeft: 10 }} onClick={handleReset}>
        reset
      </button>
    </div>
  )
}
ResetRating.args = {
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerMove: undefined
}
