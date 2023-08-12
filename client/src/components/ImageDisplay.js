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
            <img className="mx-auto border-light-purple border-solid border-4 rounded-lg mb-4 text-color-white" 
                key={p}src={p} alt="could not load, sorry!"/>
        );
        if (!image_elements.length) {
            return (
                <>
                    <p className="mx-auto text-white text-center">
                        No images attached, maybe you'll find something by clicking the tweet date!
                    </p>
                    <p className="text-xs italic mx-auto text-white text-center">
                        (This usually happens when the tweet is just a link to AO3, FanFiction.net, or whatever else)
                    </p>
                </>
            )
        }
        return (
            <div className="text-center">
                {image_elements}
            </div>
        );
    }
}

export default ImageDisplay;