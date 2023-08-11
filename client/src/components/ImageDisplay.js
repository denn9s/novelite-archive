import React, { Component } from 'react';

class ImageDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attached_images: this.props.attached_images,
        };
    }

    render() {
        const {attached_images} = this.props;
        const image_elements = attached_images.map((p) =>
            <img className="mx-auto border-light-purple border-solid border-4 rounded-lg" key={p}src={p} alt="could not load, sorry!"/>
        );
        return(
            <div className="text-center">
                {image_elements}
            </div>
        );
    }
}

export default ImageDisplay;