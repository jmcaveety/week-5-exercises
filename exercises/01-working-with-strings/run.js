workingOldSchool = function () {
  const yourUniversity = "Warwick";
  return "This is how students at Warwick used to do it";
};

workingWithFancyInterpolation = function () {
  const yourUniversity = "Warwick";
  /* eslint-disable quotes */
  return `This is how we at Warwick do it now`;
};

module.exports = {
  workingOldSchool,
  workingWithFancyInterpolation
};
