import React from 'react';
import { Platform } from 'react-native';
import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from '../src';
import App from './src/App';

// Creating the custom props that I want that will be plugged into each function
const customViewProps = {
  style: {
    backgroundColor: '#d3d3d3' // light gray
  }
};

const customTextInputProps = {
  underlineColorAndroid: 'rgba(0,0,0,0)',
  style: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  }
};

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
    color: 'black'
  }
};

const customImageProps = {
  resizeMode: 'cover'
};

const customTouchableOpacityProps = {
  hitSlop: { top: 15, right: 15, left: 15, bottom: 15 }
};

// Calling the functions and passing the custom props into their respective params
setCustomView(customViewProps);
setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);
setCustomImage(customImageProps);
setCustomTouchableOpacity(customTouchableOpacityProps);

const Main = () => {
  return (
    <App />
  );
};

export default Main;
