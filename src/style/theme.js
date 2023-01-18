const size = {
  mobile: "600px",
  tablet: "900px",
  desktop: "1800px",
};

const theme = {
  mainColor: "#FF3B30",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
