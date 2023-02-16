const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    let homework = 0;
    const upcomingAssignment = document.querySelectorAll('.hrUpcomingAssignmentGroup');
    if (upcomingAssignment.length > 0) {
      let i;
      for (i = 0; i < upcomingAssignment.length; i++) {
        homework += upcomingAssignment[i].childElementCount;
      }
    }
    Ferdium.setBadge(homework);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
