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
        return(
            <div class="text-center">
                {attached_images.map(p => {
                    return [<img class="mx-auto border-light-purple border-solid border-4 rounded-lg" key={p} src={p} alt="some fanfic" />, <br/>];
                })}
            </div>
        )
    }
}

export default ImageDisplay;