import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {
    searchInput: '',
    errorMsg: '',
  }

  onSubmit = event => {
    event.preventDefault()
    const {searchInput} = this.state
    if (searchInput === '') {
      this.setState({errorMsg: 'Enter a Valid URL'})
    } else {
      this.setState({errorMsg: ''})
      // Add logic to handle valid URL input
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, errorMsg} = this.state
    return (
      <div className="app-container">
        <nav className="nav-container">
          <div className="logo-section">
            <img
              src="https://www.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png"
              alt="website-logo"
              className="website-logo"
            />
            <h1 className="website-name">Website Performance Analyzer</h1>
          </div>
          <p className="website-docs">Docs</p>
        </nav>
        <hr className="underline" />
        <div className="body-section">
          <div className="showing-webpages-section">
            <form className="search-container" onSubmit={this.onSubmit}>
              <input
                type="search"
                className="input-element"
                placeholder="Enter a web page URL"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <p className="errorMsg">{errorMsg}</p>

              <button className="analyzer-button" type="submit">
                Analyze
              </button>
            </form>
            <div className="making-webpages-section">
              <h1 className="making-web-pages-header">
                Make your web pages fast on all devices
              </h1>
              <div className="making-web-pages-content-section">
                <div>
                  <p>CHECK OUT</p>
                  <p className="detail-name">What&#39;s new</p>
                  <p className="detail-name">Documentation</p>
                  <p className="detail-name">Learn about web performance.</p>
                </div>
                <img
                  src="https://www.gstatic.com/pagespeed/insights/ui/img/graphic-home-hero.svg"
                  alt="insights"
                  className="insights-cimg"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="underline" />
        <div className="more-page-insights-section">
          <div className="page-insights">
            <h3 className="insight-name">More on PageSpeed Insights</h3>
            <p className="insight-name">What&#39;s new</p>
            <p className="insight-name">Documentation</p>
            <p className="insight-name">Learn about web performance</p>
            <p className="insight-name">Ask questions on Stack Overflow</p>
            <p className="insight-name">Mailing List</p>
          </div>
          <div className="page-insights">
            <h3 className="insight-name">More on PageSpeed Insights</h3>
            <p className="insight-name">Updates</p>
            <p className="insight-name">Web Fundamentals</p>
            <p className="insight-name">Case Studies</p>
            <p className="insight-name">Podcasts</p>
          </div>
          <div className="page-insights">
            <h3 className="insight-name">Connect</h3>
            <p className="insight-name">Twitter</p>
            <p className="insight-name">YouTube</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
