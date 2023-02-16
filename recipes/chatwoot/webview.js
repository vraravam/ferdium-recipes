const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    const unreadBadges = document.querySelectorAll("span.unread");
    const unreadBadgesArray = [...unreadBadges];
    const unreadMessagesCount = unreadBadgesArray.reduce(
      (previousValue, currentBadge) =>
        previousValue + Ferdium.safeParseInt(currentBadge.textContent),
      0,
    );
    Ferdium.setBadge(unreadMessagesCount);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
