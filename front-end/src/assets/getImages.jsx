import CatCardImage from './images/catCard.webp'
import DefuseCardImage from './images/defuse.webp'
import ExplodedCardImage from './images/exploded.webp'
import ShuffleCardImage from './images/shuffle.png'

export const getImages = (cardType) => {
    switch (cardType) {
      case 'Cat card':
        return {
          image: CatCardImage,
          color: 'red'
        };

      case 'Defuse card':
        return {
          image: DefuseCardImage,
          color: 'blue'
        };

      case 'Shuffle card':
        return {
          image: ShuffleCardImage,
          color: 'green'
        };

      case 'Exploding kitten card':
        return {
          image: ExplodedCardImage,
          color: 'black'
        };

      default:
        return {
          image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-21060,resizemode-75,msid-100628739/news/international/us/exploding-kittens-on-netflix-see-cast-release-date-and-more.jpg',
          color: 'gray'
        };
    }
  }
  