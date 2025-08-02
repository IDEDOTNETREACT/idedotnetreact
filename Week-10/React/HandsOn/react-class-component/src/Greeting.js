import { Component } from 'react';

class Greeting extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Users!!</h1>
                <h1>Hello,{this.props.name}</h1>
            </div>
        );
    }
}
export default Greeting;