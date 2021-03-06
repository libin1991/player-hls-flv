import {videoConfig} from '@interfaces/index';
import NaitvePlayer from './native-player';
import FlvPlayer from './flv-player';
import HlsPlayer from './hls-player';

let videoPlayer:Player;

export default class Player {
  constructor(config: videoConfig) {
    // 判断类型
    switch(config.type) {
      case 'hls':
      case 'm3u8': {
        return new HlsPlayer(config);
      }
      case 'flv': {
        return new FlvPlayer(config);
      }
      case 'mp4': {
        return new NaitvePlayer(config);
      }
      default: {
            throw new Error('unsupport media type');
        }
    }
  }
}

export const getVideoPlayer = () => {
  return videoPlayer;
}

export const initPlayer = (config: videoConfig) => {
  videoPlayer = new Player(config);
  return videoPlayer;
}