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
                return <img key={p} src={p} alt="can't show" />;
            })}
            </div>
        )
    }
}

export default ImageDisplay;