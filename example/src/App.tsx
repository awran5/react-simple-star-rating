import React, { useState } from 'react'
import { CopyBlock, monokaiSublime } from 'react-code-blocks'
import {
  MdFavoriteBorder,
  MdFavorite,
  MdOutlineSentimentDissatisfied,
  MdOutlineSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVeryDissatisfied,
  MdOutlineSentimentVerySatisfied
} from 'react-icons/md'

import './App.css'
import { Rating } from 'react-simple-star-rating'
import { UrlSVG } from './IconsSVG'

const tooltipArray = [
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
]
const fillColorArray = [
  '#f17a45',
  '#f17a45',
  '#f19745',
  '#f19745',
  '#f1a545',
  '#f1a545',
  '#f1b345',
  '#f1b345',
  '#f1d045',
  '#f1d045'
]

const customIcons = [
  {
    icon: <MdOutlineSentimentDissatisfied size={50} />
  },
  {
    icon: <MdOutlineSentimentNeutral size={50} />
  },
  {
    icon: <MdOutlineSentimentSatisfied size={50} />
  },
  {
    icon: <MdOutlineSentimentVeryDissatisfied size={50} />
  },
  {
    icon: <MdOutlineSentimentVerySatisfied size={50} />
  }
]

function App() {
  const [rating1, setRating1] = useState(0)
  const [rating2, setRating2] = useState(0)
  const [rating3, setRating3] = useState(0)
  const [rating4, setRating4] = useState(0)
  const [rating5, setRating5] = useState(0)
  const [rating6, setRating6] = useState(0)
  const [rating7, setRating7] = useState(0)
  const [rating8, setRating8] = useState(0)
  const [rating9, setRating9] = useState(0)
  const [rating10, setRating10] = useState(0)
  const [rating11, setRating11] = useState(0)
  const [rating12, setRating12] = useState(0)

  const handleRating1 = (rate: number) => setRating1(rate)
  const handleRating2 = (rate: number) => setRating2(rate)
  const handleRating3 = (rate: number) => setRating3(rate)
  const handleRating4 = (rate: number) => setRating4(rate)
  const handleRating5 = (rate: number) => setRating5(rate)
  const handleRating6 = (rate: number) => setRating6(rate)
  const handleRating7 = (rate: number) => setRating7(rate)
  const handleRating8 = (rate: number) => setRating8(rate)
  const handleRating9 = (rate: number) => setRating9(rate)
  const handleRating10 = (rate: number) => setRating10(rate)
  const handleRating11 = (rate: number) => setRating11(rate)
  const handleRating12 = (rate: number) => setRating12(rate)

  // console.log(customIcons)

  return (
    <div className='d-flex flex-column h-100 App'>
      <main className='flex-shrink-0'>
        <div className='bg-gredient'>
          <div className='container col-xxl-8 px-4 py-5'>
            <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
              <div className='col-10 col-sm-8 col-lg-6 mx-auto'>
                <h1 className='display-5 fw-bold'>React simple star rating</h1>

                <p className='lead mb-4'>
                  A simple yet powerful react component for adding a nice rating icons to your project.
                </p>
                <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                  <a
                    role='button'
                    href='https://github.com/awran5/react-simple-star-rating'
                    className='btn btn-light px-4'
                  >
                    GitHub
                  </a>
                  <a
                    role='button'
                    href='https://www.npmjs.com/package/react-simple-star-rating'
                    className='btn btn-outline-light px-4'
                  >
                    npm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container px-4 px-md-3 mt-5 pt-5'>
          <div className='row mb-5 pb-md-4 align-items-center'>
            <div className='col-12 col-lg-10 mx-auto'>
              <div className='box'>
                <h3>Demo</h3>
                <div className='demo'>
                  <Rating
                    onClick={handleRating1}
                    ratingValue={rating1}
                    size={50}
                    transition
                    allowHalfIcon
                    showTooltip
                    tooltipArray={tooltipArray}
                    fillColorArray={fillColorArray}
                  />
                </div>
              </div>

              <div className='box'>
                <h3>Installation</h3>
                <div className='py-3'>
                  <small className='text-muted'># npm</small>
                  <CopyBlock
                    language='shell'
                    text={`npm i react-simple-star-rating`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
                <div className='py-3'>
                  <small className='text-muted'># yarn</small>
                  <CopyBlock
                    language='shell'
                    text={`yarn add react-simple-star-rating`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
                <div className='py-3'>
                  <div className='preview'>
                    <CopyBlock
                      language='tsx'
                      text={`import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function App() {
  const [ratingValue, setRatingValue] = useState(0)
  
  const handleRating = (rate: number) => {
    setRatingValue(rate)
  }
  return (
    <Rating
      {/* props */}
    />
  )
`}
                      codeBlock
                      theme={monokaiSublime}
                      showLineNumbers={false}
                    />
                  </div>
                </div>
              </div>
              <div className='box'>
                <h3 id='available-props' className='pt-2 pb-4'>
                  <a href='#available-props'>
                    <UrlSVG />
                  </a>
                  Available Props
                </h3>
                <div className='table-responsive'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>Prop</th>
                        <th scope='col'>Options</th>
                        <th scope='col'>Default</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope='row'>onClick</th>
                        <td>
                          <code className='text-primary'>function</code>
                        </td>
                        <td>
                          <code>-</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>ratingValue</th>
                        <td>
                          <code className='text-primary'>number</code>
                        </td>
                        <td>
                          <code>-</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>iconsCount</th>
                        <td>
                          <code className='text-primary'>number</code>
                        </td>
                        <td>
                          <code>5</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>size</th>
                        <td>
                          <code className='text-primary'>number</code>
                        </td>
                        <td>
                          <code>25</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>readonly</th>
                        <td>
                          <code className='text-primary'>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>fillColor</th>
                        <td>
                          <code className='text-primary'>string</code>
                        </td>
                        <td>
                          <code>#f1a545</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>fillColorArray</th>
                        <td>
                          <code className='text-primary'>string[]</code>
                        </td>
                        <td>
                          <code>[]</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>emptyColor</th>
                        <td>
                          <code className='text-primary'>string</code>
                        </td>
                        <td>
                          <code>#cccccc</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>fullIcon</th>
                        <td>
                          <code className='text-primary'>React.ReactElement</code>
                        </td>
                        <td>
                          <code>null</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>emptyIcon</th>
                        <td>
                          <code className='text-primary'>React.ReactElement</code>
                        </td>
                        <td>
                          <code>null</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>customIcons</th>
                        <td>
                          <code className='text-primary'>{`[ { icon: React.ReactElement } ]`}</code>
                        </td>
                        <td>
                          <code>[]</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>rtl</th>
                        <td>
                          <code className='text-primary'>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>allowHalfIcon</th>
                        <td>
                          <code className='text-primary'>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>allowHover</th>
                        <td>
                          <code className='text-primary'>boolean</code>
                        </td>
                        <td>
                          <code>true</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>transition</th>
                        <td>
                          <code className='text-primary'>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>className</th>
                        <td>
                          <code className='text-primary'>string</code>
                        </td>
                        <td>
                          <code>react-simple-star-rating</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>style</th>
                        <td>
                          <code className='text-primary'>React.CSSProperties</code>
                        </td>
                        <td>
                          <code>-</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>fullClassName</th>
                        <td>
                          <code className='text-primary'>string</code>
                        </td>
                        <td>
                          <code>filled-icons</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>emptyClassName</th>
                        <td>
                          <code className='text-primary'>string</code>
                        </td>
                        <td>
                          <code>empty-icons</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>fullStyle</th>
                        <td>
                          <code className='text-primary'>React.CSSProperties</code>
                        </td>
                        <td>
                          <code>-</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>emptyStyle</th>
                        <td>
                          <code className='text-primary'>React.CSSProperties</code>
                        </td>
                        <td>
                          <code>-</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>showTooltip</th>
                        <td>
                          <code className='text-primary'>boolean</code>
                        </td>
                        <td>
                          <code>false</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>tooltipDefaultText</th>
                        <td>
                          <code className='text-primary'>string</code>
                        </td>
                        <td>
                          <code>Your Rate</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>tooltipArray</th>
                        <td>
                          <code className='text-primary'>string[]</code>
                        </td>
                        <td>
                          <code>[]</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>tooltipClassName</th>
                        <td>
                          <code className='text-primary'>string</code>
                        </td>
                        <td>
                          <code>rating-tooltip</code>
                        </td>
                      </tr>
                      <tr>
                        <th scope='row'>tooltipStyle</th>
                        <td>
                          <code className='text-primary'>React.CSSProperties</code>
                        </td>
                        <td>
                          <code>-</code>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='box'>
                <h3 id='transition'>
                  <a href='#transition'>#2 </a>
                  Add transition effect on mouse hover
                </h3>
                <p>
                  Using <code>transition</code> prop to add a smooth <code>width</code> and <code>fill</code> transition
                  on mouse hover.
                </p>
                <div className='demo'>
                  <Rating onClick={handleRating2} ratingValue={rating2} transition size={50} />
                </div>
                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`<Rating
  transition
  onClick={onClick}
  ratingValue={ratingValue}
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='tooltip-value'>
                  <a href='#tooltip-value'>#3 </a>Live value with tooltip
                </h3>
                <p>
                  Show live value with <code>showTooltip</code> prop.
                </p>

                <div className='demo'>
                  <Rating onClick={handleRating3} transition ratingValue={rating3} size={50} showTooltip />
                </div>

                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`<Rating
  showTooltip
  onClick={onClick}
  ratingValue={ratingValue}
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='tooltip-array'>
                  <a href='#tooltip-array'>#4 </a>Custom tooltip text based on value
                </h3>
                <p>
                  By define <code>tooltipArray</code> prop. You can display a label with live value on hover to help the
                  user pick the correct choice. <br />
                </p>

                <div className='demo'>
                  <Rating
                    onClick={handleRating4}
                    ratingValue={rating4}
                    transition
                    size={50}
                    showTooltip
                    tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
                  />
                </div>
                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`<Rating
  onClick={onClick}
  ratingValue={ratingValue}
  showTooltip
  tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='color-range'>
                  <a href='#color-range'>#5 </a>Color Range
                </h3>
                <p>
                  Add a nice color range with <code>fillColorArray</code> prop.
                </p>
                <div className='demo'>
                  <Rating
                    onClick={handleRating5}
                    ratingValue={rating5}
                    transition
                    size={50}
                    fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']}
                  />
                </div>
                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`<Rating 
  onClick={onClick}
  ratingValue={ratingValue}
  fillColorArray={['#f17a45', '#f19745', '#f1a545', '#f1b345', '#f1d045']} 
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='readonly'>
                  <a href='#readonly'>#6 </a>Readonly mode
                </h3>
                <p>
                  Readonly mode. You can set <code>readonly</code> to <b>ture</b> or use it as a condition to completely
                  disable the component when the condition is met.
                </p>
                <div className='demo'>
                  <Rating onClick={handleRating6} ratingValue={rating6} transition size={50} readonly={rating6 > 0} />
                </div>
                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`<Rating 
  onClick={onClick}
  ratingValue={ratingValue}
  readonly={rating > 0}
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='custom-svgs'>
                  <a href='#custom-svgs'>#7 </a>Use custom SVG icons
                </h3>
                <p>
                  By adding an SVG with <code>fullIcon</code> | <code>emptyIcon</code> props.
                </p>
                <p>
                  <b>Note:</b> Example below using{' '}
                  <a href='https://github.com/react-icons/react-icons' className='text-primary'>
                    react icons
                  </a>
                  . If you like to use your own custom SVG, you need to to set the <code>fill</code> attribute to{' '}
                  <code>currentColor</code>
                </p>
                <div className='demo'>
                  <Rating
                    onClick={handleRating7}
                    ratingValue={rating7}
                    transition
                    size={50}
                    fullIcon={<MdFavorite size={50} />}
                    emptyIcon={<MdFavoriteBorder size={50} />}
                  ></Rating>
                </div>
                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
  ...

<Rating 
  onClick={onClick} 
  ratingValue={ratingValue} 
  fullIcon={<MdFavorite size={50} />}
  emptyIcon={<MdFavoriteBorder size={50} 
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='custom-svgs-group'>
                  <a href='#custom-svgs-group'>#8 </a>Custom SVG group
                </h3>
                <p>
                  You can add a group of icons with <code>customIcons</code> props.
                </p>
                <div className='demo'>
                  <Rating
                    onClick={handleRating8}
                    ratingValue={rating8}
                    transition
                    size={50}
                    customIcons={customIcons}
                  />
                </div>
                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`import { MdOutlineSentimentDissatisfied,
  MdOutlineSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVeryDissatisfied,
  MdOutlineSentimentVerySatisfied
} from 'react-icons/md'

const customIcons = [
  { icon: <MdOutlineSentimentDissatisfied size={50} /> },
  { icon: <MdOutlineSentimentNeutral size={50} /> },
  { icon: <MdOutlineSentimentSatisfied size={50} /> },
  { icon: <MdOutlineSentimentVeryDissatisfied size={50} /> },
  { icon: <MdOutlineSentimentVerySatisfied size={50} /> }
]

...

<Rating 
  onClick={onClick} 
  ratingValue={ratingValue} 
  customIcons={customIcons}
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='no-hover'>
                  <a href='#no-hover'>#9 </a>Disable hover on mouse move
                </h3>
                <p>
                  If you like, you can disable hover effect with <code>allowHover</code> prop.
                </p>
                <div className='demo'>
                  <Rating onClick={handleRating9} ratingValue={rating9} allowHover={false} size={50} />
                </div>
                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`<Rating 
  onClick={onClick}
  ratingValue={ratingValue}
  allowHover={false}
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='with-fractional'>
                  <a href='#with-fractional'>#10 </a>Support fractional rating
                </h3>
                <p>
                  Enable a fractional (half icon) with <code>allowHalfIcon</code> prop.
                </p>
                <div className='demo'>
                  <Rating onClick={handleRating10} ratingValue={rating10} transition size={50} allowHalfIcon />
                </div>
                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`<Rating 
  onClick={onClick}
  ratingValue={ratingValue}
  allowHalfIcon
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='with-rtl'>
                  <a href='#with-rtl'>#11 </a>RTL Support
                </h3>
                <p>
                  support RTL languages with <code>rtl</code> prop.
                </p>
                <div className='demo' style={{ direction: 'rtl' }}>
                  <Rating
                    onClick={handleRating11}
                    ratingValue={rating11}
                    transition
                    size={50}
                    rtl
                    showTooltip
                    allowHalfIcon
                    tooltipArray={tooltipArray}
                  />
                </div>
                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`<Rating 
  onClick={onClick}
  ratingValue={ratingValue}
  rtl
/>`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>

              <div className='box'>
                <h3 id='handle-reset'>
                  <a href='#handle-reset'>#12 </a>Handle reset
                </h3>
                <p>
                  In order to reset, you need to set <code>initialValue</code> prop to your desired value, then you can
                  reset the rating value with your <code>state</code>
                </p>
                <div className='demo'>
                  <Rating
                    onClick={handleRating12}
                    ratingValue={rating12}
                    initialValue={2.5}
                    transition
                    size={50}
                    showTooltip
                    allowHalfIcon
                    tooltipArray={tooltipArray}
                  />
                  <span style={{ marginLeft: 20 }}>
                    <button type='button' className='btn btn-primary btn-sm' onClick={() => setRating12(0)}>
                      reset
                    </button>
                  </span>
                </div>

                <h4>code:</h4>
                <div className='preview'>
                  <CopyBlock
                    language='jsx'
                    text={`const [ratingValue, setRatingValue] = useState(0)
  
const handleRating = (rate: number) => {
  setRatingValue(rate)
}

// later in your code call rating 'state' with your initial value
const handleReset = () => {
  setRatingValue(2.5)
}
  
return (
  <Rating 
    onClick={handleRating}
    initialValue={2.5}
    ratingValue={ratingValue}
  />
)`}
                    codeBlock
                    theme={monokaiSublime}
                    showLineNumbers={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='footer mt-auto py-3 bg-light text-center'>
        <div className='container'>
          <span className='text-muted'>
            by <a href='https://github.com/awran5'>awran5 </a> <span className='px-2'>|</span>
            <a href='https://github.com/awran5/react-simple-star-rating'>Github</a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
