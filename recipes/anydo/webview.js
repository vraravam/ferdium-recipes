const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdium => {
  const getMessages = () => {
    let incompleteCount = 0;

    const countEls = document.querySelectorAll(
      '.AppSidebarGroupsItems__item__link[href^="/tasks/lists/"] .AppSidebarGroupsItems__item__badge > .AppSidebarGroupsItems__item__badge__count > div',
    );

    if (countEls.length > 0) {
      for (const el of countEls) {
        incompleteCount += Ferdium.safeParseInt(el.textContent);
      }
    }

    Ferdium.setBadge(incompleteCount);
  }

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
