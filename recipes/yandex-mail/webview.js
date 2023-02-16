const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    let count = 0;

    if (document.querySelectorAll('.mail-LabelList-Item_count').length > 1) {
      count = Ferdium.safeParseInt(document.querySelectorAll('.mail-LabelList-Item_count')[1].textContent);
    }

    Ferdium.setBadge(count);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
