function getDisplayName(elementType) {
  switch (elementType) {
    case "span": {
      return "text";
    }
    default:
      return elementType;
  }
}

export {
  getDisplayName,
};
