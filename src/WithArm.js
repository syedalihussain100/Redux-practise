import React, { Component } from 'react';
const Plan = (Men,shot) =>{  
     class WithArm extends Component {
        state={
            Gunshot:0
        }
        handleGuns=()=>{
            this.setState({Gunshot:this.state.Gunshot + shot})
        }
        render() {
            return <Men
            hocGunname={"AK46"}
             hocGunshot={this.state.Gunshot}
             hochandleGuns={this.handleGuns} 
             {...this.props}  
            />
        }
    }
    return WithArm;
}
export default Plan;