const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    let msgRaw = document.title.match(/\(\d*\)/);
    let messages = 0;

    if (msgRaw) {
      messages = Ferdium.safeParseInt(msgRaw[0].slice(1));
    }

    Ferdium.setBadge(messages, 0);
  }

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
