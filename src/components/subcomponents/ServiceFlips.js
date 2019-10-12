// https://codesandbox.io/embed/jn3z28ry33?codemirror=1

import ReactDOM from 'react-dom'
import React from 'react'
import { Spring, Transition, animated } from 'react-spring/renderprops'
import "../../scss/ServiceFlips.scss";

const hide = { opacity: 0 }
const show = { opacity: 1 }
export default class ServiceFlips extends React.Component {
    state = { flipped: false }
    click = () => this.setState(state => ({ flipped: !state.flipped }))
    render() {
        const { flipped } = this.state
        const { front, back } = this.props
        return (
            <Spring native to={{ transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)` }}>
                {props => (
                    <animated.div class="card" onClick={this.click} style={props}>
                        <Transition native unique items={flipped} from={hide} enter={show} leave={hide}>
                            {flipped => ({ opacity }) => (
                                <animated.div
                                    style={{
                                        background: "white",
                                        transform: `rotateY(${flipped ? 180 : 0}deg)`,
                                        opacity: opacity.interpolate({ range: [0, 0.5, 1], output: [0, 0, 1] })
                                    }}>
                                    {flipped ? back : front}
                                </animated.div>
                            )}
                        </Transition>
                    </animated.div>
                )}
            </Spring>
        )
    }
}

const Front = props => <div className="front" />
const Back = props => <div className="back" />

// ReactDOM.render(<Card front={<Front />} back={<Back />} />, document.getElementById('root'))
