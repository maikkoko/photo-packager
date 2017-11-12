import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'
import image from './image.jpg'

class App extends Component {
  render() {
    console.log(this.cropper)

    return (
      <div className="App">
        <img
          id="image"
          src={image}
          className="source-img"
          onLoad={this._handleImgLoad}
        />
      </div>
    )
  }

  _handleImgLoad = () => {
    var image = document.getElementById('image')
    this.cropper = new Cropper(image, {
      aspectRatio: 1 / 1,
      crop: function(e) {
        console.log(e.detail.x)
        console.log(e.detail.y)
        console.log(e.detail.width)
        console.log(e.detail.height)
        console.log(e.detail.rotate)
      }
    })
  }
}

export default App
