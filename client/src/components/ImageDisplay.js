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
            <div>
                {attached_images.map(p => {
                    return [<img className="attached_images" key={p} src={p} alt="some fanfic" />, <br/>];
                })}
            </div>
        )
    }
}

export default ImageDisplay;