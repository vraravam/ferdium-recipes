const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    let unread = 0;
    const notificationBadge = document.querySelectorAll('.unreadcount')[0];
    if (notificationBadge != undefined) {
      unread = Ferdium.safeParseInt(notificationBadge.textContent);
    }
    Ferdium.setBadge(unread);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
