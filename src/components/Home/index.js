import {Component} from 'react'

import {CiCircleQuestion} from 'react-icons/ci'
import {SiWindows} from 'react-icons/si'
import {GoArrowLeft, GoArrowRight} from 'react-icons/go'

import {v4 as uuidv4} from 'uuid'

import TabsList from '../TabsList'
import DetailsList from '../DetailsList'
import ImagesList from '../ImagesList'

import './index.css'

const tabsList = [
  {
    tabId: 'ABOUT',
    displayText: 'About Me',
  },
  {
    tabId: 'EXPERIENCES',
    displayText: 'Experiences',
  },
  {
    tabId: 'RECOMMENED',
    displayText: 'Recommended',
  },
]

const detailList = [
  {
    category: 'ABOUT',
    description:
      'Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...',
  },
  {
    category: 'EXPERIENCES',
    description: `Till now Ive worked with two IT companies and both are of different domains. I liked working at both places as I got chance to learn and build my skills also it completely depends on how you deal with people and different situations. As in corporate it's all about teams and how good interaction between different teams`,
  },
  {
    category: 'RECOMMENED',
    description: `Are you having a hard time engaging your employees and worried about low morale? Employee engagement software is a great way to create a positive work environment while using automation to make the process easier.`,
  },
]

class Home extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
    imagesList: [],
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  onAddImage = () => {
    const newImage = {
      id: uuidv4(),
      imageUrl:
        'https://5.imimg.com/data5/SELLER/Default/2021/2/AM/DI/KN/19099136/3d-wallpapers-3d-3713-500x500.jpg',
    }
    this.setState(prevState => ({
      imagesList: [...prevState.imagesList, newImage],
    }))
  }

  getFilteredData = () => {
    const {activeTabId} = this.state
    const filteredList = detailList.filter(
      eachDetail => eachDetail.category === activeTabId,
    )
    return filteredList
  }

  render() {
    const {activeTabId, imagesList} = this.state
    const filteredList = this.getFilteredData()
    return (
      <div className="app-container">
        <div className="widget-section">
          <div className="side-bar">
            <CiCircleQuestion size={30} className="icon" />
            <SiWindows size={30} className="icon-2" />
          </div>
          <div className="detail-container">
            <ul className="button-container">
              {tabsList.map(eachTab => (
                <TabsList
                  key={eachTab.tabId}
                  tabDetails={eachTab}
                  clickTabItem={this.clickTabItem}
                  isActive={activeTabId === eachTab.tabId}
                />
              ))}
            </ul>
            <ul className="details">
              {filteredList.map(eachData => (
                <DetailsList key={eachData.category} dataDetails={eachData} />
              ))}
            </ul>
          </div>
        </div>
        <div className="gallery-widget">
          <div className="side-bar">
            <CiCircleQuestion size={30} className="icon" />
            <SiWindows size={30} className="icon-2" />
          </div>
          <div className="gallery-container">
            <nav className="nav-bar-container">
              <button className="gallery-button" type="button">
                Gallery
              </button>
              <div className="nav-add-button">
                <button
                  className="add-image-button"
                  onClick={this.onAddImage}
                  type="button"
                >
                  +ADD IMAGE
                </button>
                <GoArrowLeft size={20} className="icon" />
                <GoArrowRight size={20} className="icon" />
              </div>
            </nav>
            <ul className="images-add-container">
              {imagesList.map(eachImg => (
                <ImagesList key={eachImg.id} imagesDetails={eachImg} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
