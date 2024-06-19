import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import videoSrc from "./652333414.mp4";

const Player11 = styled.div`
  max-width: 750px;
  border: 5px solid rgba(0,0,0,0.2);
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  position: relative;
  font-size: 0;
  overflow: hidden;

  &:fullscreen {
    max-width: none;
    width: 100%;
  }

  &:hover .controls {
    transform: translateY(0);
  }

  &:hover .progress {
    height: 15px;
  }
`;

const Video11 = styled.video`
  width: 100%;
`;

const Controls11 = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(100%) translateY(-5px);
  transition: all .3s;
  flex-wrap: wrap;
  background: rgba(0,0,0,0.1);
`;

const Button11 = styled.button`
  background: none;
  border: 0;
  line-height: 1;
  color: white;
  text-align: center;
  outline: 0;
  padding: 0;
  cursor: pointer;
  max-width: 50px;

  &:focus {
    border-color: #ffc600;
  }
`;

const Slider11 = styled.input`
  width: 10px;
  height: 30px;

  &[type=range] {
    -webkit-appearance: none;
    background: transparent;
    width: 100%;
    margin: 0 5px;
  }

  &[type=range]:focus {
    outline: none;
  }

  &[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: rgba(255,255,255,0.8);
    border-radius: 1.3px;
    border: 0.2px solid rgba(1, 1, 1, 0);
  }

  &[type=range]::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffc600;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.5px;
    box-shadow:0 0 2px rgba(0,0,0,0.2);
  }

  &[type=range]:focus::-webkit-slider-runnable-track {
    background: #bada55;
  }

  &[type=range]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: #ffffff;
    border-radius: 1.3px;
    border: 0.2px solid rgba(1, 1, 1, 0);
  }

  &[type=range]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffc600;
    cursor: pointer;
  }
`;

const Progress11 = styled.div`
  flex: 10;
  position: relative;
  display: flex;
  flex-basis: 100%;
  height: 5px;
  transition: height 0.3s;
  background: rgba(0,0,0,0.5);
  cursor: ew-resize;
`;

const ProgressFilled11 = styled.div`
  width: 50%;
  background: #ffc600;
  flex: 0;
  flex-basis: 50%;
`;

const Page11 = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const method = videoRef.current.paused ? 'play' : 'pause';
    videoRef.current[method]();
    setIsPlaying(!videoRef.current.paused);
  };

  const updateButton = () => {
    setIsPlaying(!videoRef.current.paused);
  };

  const skip = (time) => {
    videoRef.current.currentTime += time;
  };

  const handleRangeUpdate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    videoRef.current[name] = value;
    if (name === 'volume') setVolume(value);
    if (name === 'playbackRate') setPlaybackRate(value);
  };

  const handleProgress = () => {
    const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(percent);
  };

  const scrub = (e) => {
    const scrubTime = (e.nativeEvent.offsetX / progressRef.current.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = scrubTime;
  };

  return (
    <Player11>
      <Video11
        ref={videoRef}
        className="viewer"
        src={videoSrc}
        onClick={togglePlay}
        onPlay={updateButton}
        onPause={updateButton}
        onTimeUpdate={handleProgress}
      />
      <Controls11 className="controls">
        <Progress11 ref={progressRef} className="progress" onClick={scrub} onMouseMove={(e) => e.buttons === 1 && scrub(e)}>
          <ProgressFilled11 style={{ flexBasis: `${progress}%` }} />
        </Progress11>
        <Button11 className="toggle" onClick={togglePlay} title="Toggle Play">{isPlaying ? '❚ ❚' : '►'}</Button11>
        <Slider11 name="volume" type="range" min="0" max="1" step="0.05" value={volume} onChange={handleRangeUpdate} />
        <Slider11 name="playbackRate" type="range" min="0.5" max="2" step="0.1" value={playbackRate} onChange={handleRangeUpdate} />
        <Button11 onClick={() => skip(-10)} data-skip="-10">« 10s</Button11>
        <Button11 onClick={() => skip(25)} data-skip="25">25s »</Button11>
      </Controls11>
    </Player11>
  );
};

export default Page11;