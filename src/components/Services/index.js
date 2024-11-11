import {FaWifi, FaCarAlt} from 'react-icons/fa'
import {
  MdFastfood,
  MdHomeFilled,
  MdImportContacts,
  MdFlag,
} from 'react-icons/md'
import {IoMdBicycle} from 'react-icons/io'
import {FaCartShopping} from 'react-icons/fa6'
import './index.css'

const Services = () => (
  <div className="services-bg-container">
    <h1 className="services-heading">Services</h1>
    <ul className="services-container">
      <li className="services-item-container">
        <FaWifi className="services-icon" />
        <h1 className="services-name">High Speed Internet</h1>
        <p className="services-description">
          Optical fiber connections provided in not only in your cabins but
          rather to all of the BriSphere scenic working spaces and dinning
          areas.
        </p>
      </li>
      <li className="services-item-container">
        <MdFastfood className="services-icon" />
        <h1 className="services-name">Healthy Meals</h1>
        <p className="services-description">
          A healthy breakfast and pleasant dinner will be serviced at your space
          every single day for your entire duration of stay with option of paid
          order within BriSphere.
        </p>
      </li>
      <li className="services-item-container">
        <MdHomeFilled className="services-icon" />
        <h1 className="services-name">Homely Stay</h1>
        <p className="services-description">
          Designed for working professionals with spacious interiors,
          comfortable beds and sleekly attached kitchen are some of the comforts
          providedin your space.
        </p>
      </li>
      <li className="services-item-container">
        <FaCarAlt className="services-icon" />
        <h1 className="services-name">Transportation</h1>
        <p className="services-description">
          Optical fiber connections provided in not only in your cabins but
          rather to all of the BriSphere scenic working spaces and dinning
          areas.
        </p>
      </li>
      <li className="services-item-container">
        <IoMdBicycle className="services-icon" />
        <h1 className="services-name">Food Delivery</h1>
        <p className="services-description">
          Optical fiber connections provided in not only in your cabins but
          rather to all of the BriSphere scenic working spaces and dinning
          areas.
        </p>
      </li>
      <li className="services-item-container">
        <MdImportContacts className="services-icon" />
        <h1 className="services-name">Tourism</h1>
        <p className="services-description">
          Optical fiber connections provided in not only in your cabins but
          rather to all of the BriSphere scenic working spaces and dinning
          areas.
        </p>
      </li>
      <li className="services-item-container">
        <MdFlag className="services-icon" />
        <h1 className="services-name">Job</h1>
        <p className="services-description">
          Optical fiber connections provided in not only in your cabins but
          rather to all of the BriSphere scenic working spaces and dinning
          areas.
        </p>
      </li>
      <li className="services-item-container">
        <FaCarAlt className="services-icon" />
        <h1 className="services-name">Rental Service</h1>
        <p className="services-description">
          Optical fiber connections provided in not only in your cabins but
          rather to all of the BriSphere scenic working spaces and dinning
          areas.
        </p>
      </li>
      <li className="services-item-container">
        <FaCartShopping className="services-icon" />
        <h1 className="services-name">Online Shop</h1>
        <p className="services-description">
          Optical fiber connections provided in not only in your cabins but
          rather to all of the BriSphere scenic working spaces and dinning
          areas.
        </p>
      </li>
    </ul>
  </div>
)

export default Services
