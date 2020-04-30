import React, { Component } from 'react'
import Plan from "./WithArm";
 class Sara extends Component {
    render() {
        return (
            <div>
            <h2>Camps: {this.props.Camps}</h2>
              <h1>Sara {this.props.hocGunname} Gunshot:{this.props.hocGunshot}</h1>
              <button onClick={this.props.hochandleGuns}>Click Gun</button>  
            </div>
        )
    }
}

export default Plan(Sara,10)