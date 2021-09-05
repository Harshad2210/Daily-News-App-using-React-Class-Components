import React, { Component } from 'react'
import loaderDark from './DualRingDarks.gif'
import loaderLight from './DualRingLight.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center" >
                <img src={  this.props.mode === 'light' ? loaderDark  : loaderLight } alt="spinner" />
            </div>
        )
    }
}

export default Spinner
