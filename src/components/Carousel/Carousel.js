import React from "react"
import Lightbox from "react-image-lightbox"
import { Button } from "@material-ui/core"
import "react-image-lightbox/style.css"

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state
    const { images } = this.props

    return (
      <div>
        <Button
          variant="outlined"
          color="default"
          style={{
            marginTop: "40px",
            backgroundColor: "#aad1dd",
            // border: 'none',
          }}
          type="button"
          onClick={() => this.setState({ isOpen: true })}
        >
          Press to see more
        </Button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    )
  }
}

export default Carousel
