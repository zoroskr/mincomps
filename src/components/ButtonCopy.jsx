
import React from 'react';
import BxCopy from '../images/bx-copy.svg';

class CopyToClipboardButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buttonText: 'Copy to clipboard' };
    }

    copyToClipboard = () => {
        navigator.clipboard.writeText(this.props.textToCopy)
            .then(() => this.setState({ buttonText: 'Copied!' }))
            .catch(() => this.setState({ buttonText: 'Failed to copy' }));
    }

    render() {
        return (
            <div className='flex justify-center h-auto w-auto p-3'>
                <button onClick={this.copyToClipboard}>
                    <img src={BxCopy.src} alt="Copy to clipboard" />
                </button>
            </div>
        );
    }
}

export default CopyToClipboardButton;