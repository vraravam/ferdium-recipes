const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    const directCountElement = document.querySelector(
      '.filter-list.js-notification-inboxes .count',
    );
    const directCount = directCountElement
      ? Ferdium.safeParseInt(directCountElement.textContent)
      : 0;
    const indirectCount = document.querySelector(
      '[class*="mail-status unread"]:not([hidden])',
    ) ? 1 : 0;
    Ferdium.setBadge(directCount, indirectCount);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
