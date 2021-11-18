export default (customProps, originalProps) => {
  if (Array.isArray(originalProps.style)) {
    originalProps.style.forEach((style) => {
      customProps.style = [...customProps.style, style];
    });
  } else {
    customProps.style = [...customProps.style, originalProps.style];
  }

  return customProps;
};
