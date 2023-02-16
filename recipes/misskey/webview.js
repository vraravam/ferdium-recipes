const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    // check notification badge for Ferdium badge
    let hasNotification = !!document.querySelector(
      '#app div.notifications > button > i.circle',
    );
    Ferdium.setBadge(0, hasNotification ? 1 : 0);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
