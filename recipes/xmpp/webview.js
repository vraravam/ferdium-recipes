const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    let direct = 0;
    for (const indicator of document.querySelectorAll('.msgs-indicator')) {
      direct += Ferdium.safeParseInt(indicator.textContent)
    }

    direct = direct / 2 // as the messages are provided in 2 different locations..
    Ferdium.setBadge(direct);
  }

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
