const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    const elements = document.querySelectorAll('.unread');

    let count = 0;
    for (const element of elements) {
      if (
        Ferdium.safeParseInt(
          element.textContent && element.textContent.replace(/[^\d.]/g, ''),
        ) > 0
      ) {
        count++; // count 1 per channel with messages
      }
    }

    Ferdium.setBadge(count);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
