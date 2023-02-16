const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    // Initialize empty vars
    var unread = 0;
    var match = [];
    // Extract the number from the title
    match = document.title.match(/^\((\d+)\) Tiny Tiny RSS$/);
    // Some logic to handle the match groups
    unread = match != null && match.length > 0 ? match[1] : 0;
    // Set unread msgs badge
    Ferdium.setBadge(Number.parseInt(unread, 10));
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
