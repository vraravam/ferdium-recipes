const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    let unreadNotifications = 0;
    for (const notificationCounterElement of document.querySelectorAll(
      ".notification__count"
    )) {
      unreadNotifications =
        unreadNotifications +
        Ferdium.safeParseInt(notificationCounterElement.textContent);
    }

    Ferdium.setBadge(unreadNotifications);
  }
  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
