import {MdOutlineStar} from 'react-icons/md'
import './index.css'

const Discover = () => (
  <div>
    <h1 className="discover-heading">Discover</h1>
    <div className="discover-container">
      <div className="profile-bg-container">
        <div className="profilr-container">
          <div>
            <img
              className="profile"
              src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
              alt="profile1"
            />
          </div>
          <div>
            <h1 className="profile-name">Arjun Raghava</h1>
            <div>
              <MdOutlineStar className="star" />
              <MdOutlineStar className="star" />
              <MdOutlineStar className="star" />
              <MdOutlineStar className="star" />
            </div>
          </div>
        </div>
        <p className="comment">
          I am writing this after reflecting on my one month stay with Bricabin
          in Ladakh. Right from picking us up at the airport to dropping us back
          there after a month, Urgan was very responsible and took good care of
          my friends and me. <span className="span-element">read more</span>
        </p>
      </div>
      <div className="ocean-profile-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png"
          alt="ocean"
          className="ocean-image"
        />
        <div className="">
          <div className="profilr-container">
            <div>
              <img
                className="profile"
                src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
                alt="profile1"
              />
            </div>
            <div>
              <h1 className="profile-name">Arjun Raghava</h1>
              <div>
                <MdOutlineStar className="star" />
                <MdOutlineStar className="star" />
                <MdOutlineStar className="star" />
                <MdOutlineStar className="star" />
              </div>
            </div>
          </div>
          <p className="comment">
            I am writing this after reflecting on my one month stay with
            Bricabin in Ladakh. Right from picking us up at the airport to
            dropping us back there after a month, Urgan was very responsible and
            took good care of my friends and me.{' '}
            <span className="span-element">read more</span>
          </p>
        </div>
      </div>
      <div>
        <div className="profile-bg-container">
          <div className="profilr-container">
            <div>
              <img
                className="profile"
                src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
                alt="profile1"
              />
            </div>
            <div>
              <h1 className="profile-name">Arjun Raghava</h1>
              <div>
                <MdOutlineStar className="star" />
                <MdOutlineStar className="star" />
                <MdOutlineStar className="star" />
                <MdOutlineStar className="star" />
              </div>
            </div>
          </div>
          <p className="comment">
            I am writing this after reflecting on my one month stay with
            Bricabin in Ladakh. Right from picking us up at the airport to
            dropping us back there after a month, Urgan was very responsible and
            took good care of my friends and me.{' '}
            <span className="span-element">read more</span>
          </p>
        </div>
        <div className="profile-bg-container">
          <div className="profilr-container">
            <div>
              <img
                className="profile"
                src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
                alt="profile1"
              />
            </div>
            <div>
              <h1 className="profile-name">Arjun Raghava</h1>
              <div>
                <MdOutlineStar className="star" />
                <MdOutlineStar className="star" />
                <MdOutlineStar className="star" />
                <MdOutlineStar className="star" />
              </div>
            </div>
          </div>
          <p className="comment">
            I am writing this after reflecting on my one month stay with
            Bricabin in Ladakh. Right from picking us up at the airport to
            dropping us back there after a month, Urgan was very responsible and
            took good care of my friends and me.{' '}
            <span className="span-element">read more</span>
          </p>
        </div>
      </div>
    </div>
  </div>
)
export default Discover
