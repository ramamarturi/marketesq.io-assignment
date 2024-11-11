// Write your JS code here
import {useState} from 'react'
import {FaFacebook, FaRupeeSign} from 'react-icons/fa'
import {PiInstagramLogoFill} from 'react-icons/pi'
import {BsDashCircle} from 'react-icons/bs'
import {HiMiniPlusCircle} from 'react-icons/hi2'
import {FaArrowRight} from 'react-icons/fa6'

import AboutUs from '../AboutUs'
import './index.css'

const chechInOption = [
  {
    optionId: 1,
    optionText: '01 feb 2022',
  },
  {
    optionId: 2,
    optionText: '01 march 2022',
  },
  {
    optionId: 3,
    optionText: '01 april 2022',
  },
  {
    optionId: 4,
    optionText: '01 may 2022',
  },
]
const chechOutOption = [
  {
    optionId: 1,
    optionText: '07 feb 2022',
  },
  {
    optionId: 2,
    optionText: '07 march 2022',
  },
  {
    optionId: 3,
    optionText: '07 april 2022',
  },
  {
    optionId: 4,
    optionText: '07 may 2022',
  },
]

const pageConstants = {
  home: 'HOME',
  booking: 'BOOKING',
  orderPlaced: 'ORDERPLACED',
}

const Home = () => {
  const [roomCount, setRoomCount] = useState(1)
  const [pageViews, setPageView] = useState(pageConstants.home)

  const onDecreaseRoomCount = () => {
    if (roomCount > 1) {
      setRoomCount(prevState => prevState - 1)
    } else {
      setRoomCount(1)
    }
  }

  const onIncreaseRoomCount = () => {
    setRoomCount(prevState => prevState + 1)
  }

  const onBookTheRoom = event => {
    event.preventDefault()
    setPageView(pageConstants.booking)
  }

  const onClickPayment = event => {
    event.preventDefault()
    setPageView(pageConstants.orderPlaced)
  }

  const homePage = () => (
    <div className="home-bg-container">
      <div className="home-container">
        <div className="content-container">
          <h1 className="ladakh-heading">Work from ladakh</h1>
          <p className="description">
            India first true digital tourism ecosystem
          </p>
          <div className="icons-container">
            <FaFacebook className="fb-icons" />
            <PiInstagramLogoFill className="insta-icons" />
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png"
            alt="mountain"
            className="mountain-img"
          />
        </div>
      </div>
      <form onSubmit={onBookTheRoom} className="book-button-container">
        <div>
          <h1 className="checkIn-checkOut-heading">CHECK-IN</h1>
          <select className="select-container">
            {chechInOption.map(eachOption => (
              <option
                value={eachOption.optionText}
                className="option"
                key={eachOption.optionId}
              >
                {eachOption.optionText}
              </option>
            ))}
          </select>
        </div>
        <hr className="hr-line" />
        <div>
          <h1 className="checkIn-checkOut-heading">CHECK-OUT</h1>
          <select className="select-container">
            {chechOutOption.map(eachOption => (
              <option className="option" key={eachOption.optionId}>
                {eachOption.optionText}
              </option>
            ))}
          </select>
        </div>
        <hr className="hr-line" />
        <div>
          <h1 className="room-heading">ROOMS</h1>
          <div className="room-count-container">
            <button
              type="button"
              className="button"
              onClick={onDecreaseRoomCount}
            >
              <BsDashCircle className="count-handler-minuse-icons" />.
            </button>
            <p className="count">{roomCount}</p>
            <button
              type="button"
              className="button"
              onClick={onIncreaseRoomCount}
            >
              <HiMiniPlusCircle className="count-handler-plus-icons" />.
            </button>
          </div>
        </div>
        <button type="submit" className="book-button">
          BOOK
        </button>
      </form>
    </div>
  )

  const bookingPage = () => (
    <div>
      <div className="payment-container">
        <div className="inputs-bg">
          <input placeholder="name" type="text" className="input" />
          <input placeholder="mail" type="text" className="input" />
          <input placeholder="number" type="text" className="input" />
          <input placeholder="adult" type="text" className="input2" />
          <input placeholder="childrens" type="text" className="input2" />
        </div>
        <form onSubmit={onClickPayment} className="payment-button-container">
          <div>
            <h1 className="checkIn-checkOut-heading">CHECK-IN</h1>
            <select className="select-container">
              {chechInOption.map(eachOption => (
                <option
                  value={eachOption.optionText}
                  className="option"
                  key={eachOption.optionId}
                >
                  {eachOption.optionText}
                </option>
              ))}
            </select>
          </div>
          <hr className="hr-line" />
          <div>
            <h1 className="checkIn-checkOut-heading">CHECK-OUT</h1>
            <select className="select-container">
              {chechOutOption.map(eachOption => (
                <option className="option" key={eachOption.optionId}>
                  {eachOption.optionText}
                </option>
              ))}
            </select>
          </div>
          <hr className="hr-line" />
          <div>
            <h1 className="room-heading">ROOMS</h1>
            <div className="room-count-container">
              <button
                type="button"
                className="button"
                onClick={onDecreaseRoomCount}
              >
                <BsDashCircle className="count-handler-minuse-icons" />.
              </button>
              <p className="count">{roomCount}</p>
              <button className="button" type="submit">
                <HiMiniPlusCircle className="count-handler-plus-icons" />.
              </button>
            </div>
          </div>
          <div>
            <button type="submit" className="book-button">
              <FaRupeeSign /> 12,430 <FaArrowRight className="arrow" />
            </button>
          </div>
        </form>
      </div>
      <AboutUs />
    </div>
  )

  const orderPlacedPage = () => <h1>Oreder placed</h1>

  const renderPageView = () => {
    switch (pageViews) {
      case pageConstants.home:
        return homePage()
      case pageConstants.booking:
        return bookingPage()
      case pageConstants.orderPlaced:
        return orderPlacedPage()
      default:
        return null
    }
  }

  return renderPageView()
}
export default Home
