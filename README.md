# React Simple Rating

> A simple react component for adding a star rating to your project.

[![NPM](https://img.shields.io/npm/v/react-simple-star-rating.svg)](https://www.npmjs.com/package/react-simple-star-rating)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-simple-star-rating)
![GitHub](https://img.shields.io/github/license/awran5/react-simple-star-rating)

<p align="center">
  <img src="./screenshot.gif" alt="screenshot" width="100%" />
</p>

## Install

```bash
# npm
npm i react-simple-star-rating

# Yarn
yarn add react-simple-star-rating
```

## Usage

```jsx
import React, { useState } from 'react'
import Rating from 'react-simple-star-rating'

export default function App() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
      />
      {/* Use rating value */}
      {rating}
    </div>
  )
}
```

### Available Props

| Prop          | Type     | Options  | Description                                         |  Default  |
| ------------- | -------- | -------- | --------------------------------------------------- | :-------: |
| `onClick`     | Function | Required | Handles the returned rating value                   |    `-`    |
| `ratingValue` | Integer  | Required | Rating value passed from the component              |    `-`    |
| `stars`       | Integer  | Optional | Number of the stars                                 |    `5`    |
| `size`        | integer  | Optional | Stars size in `px`                                  |    25     |
| `label`       | Boolean  | Optional | Show the value next to the starts `true` if present |   false   |
| `transition`  | Integer  | Optional | Adds a hover transition effect `true` if present    |   false   |
| `fillColor`   | String   | Optional | Full stars color                                    | `#f1a545` |
| `emptyColor`  | String   | Optional | Empty stars color                                   | `#cccccc` |
| `className`   | String   | Optional | if applied, it will **Remove** the inline style     |     -     |

### [sandbox](https://codesandbox.io/s/react-simple-star-rating-ts-fzmpu)

### License

MIT © [awran5](https://github.com/awran5/)
