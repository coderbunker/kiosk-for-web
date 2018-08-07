import React from 'react';
import ReactPlayer from 'react-player';
import { findDOMNode } from 'react-dom';
import screenfull from 'screenfull';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: '100%',
            videoUrl: '../media/mov_bbb.mp4',
            playing: false,
        };


    }
    onClickFullscreenStart = () => {
        screenfull.request(findDOMNode(this.refs.player)), this.setState({playing: true})
      }



    render() {
        return (
            <div className={"demo"}>

                    <ReactPlayer ref='player' className="full-screenable-node" url={require('../media/mov_bbb.mp4')} playing={this.state.playing} loop={true} width={this.state.width} />
                    <button className={"btn-player"} onClick={this.onClickFullscreenStart}> play </button>
                   
            </div>
                );
            }
        }
        
        export default Demo;
