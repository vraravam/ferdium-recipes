const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    // Initialize empty vars
    var unread = 0;
    var match = [];
    // Define RegExp to replace occasionally &nbsp
    var re = new RegExp(String.fromCodePoint(160), "g");
    // Get value of <title> tag where in case of new feed elements the number of elements appear
    const titleValue = document.querySelector('title').text.replace(re, "");
    // Extract the number from the tag
    match = titleValue.match(/[\d\s]+/);
    // Some logic to handle the match groups
    unread = match != null && match.length > 0 ? match[0] : 0;
    // Set unread msgs badge
    Ferdium.setBadge(Number.parseInt(unread, 10));
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
