const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("E:\\project\\web-app-main\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("E:\\project\\web-app-main\\src\\pages\\404.js"))),
  "component---src-pages-careers-js": hot(preferDefault(require("E:\\project\\web-app-main\\src\\pages\\careers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("E:\\project\\web-app-main\\src\\pages\\index.js"))),
  "component---src-pages-leaderboard-js": hot(preferDefault(require("E:\\project\\web-app-main\\src\\pages\\leaderboard.js"))),
  "component---src-pages-privacy-policy-js": hot(preferDefault(require("E:\\project\\web-app-main\\src\\pages\\privacy-policy.js"))),
  "component---src-pages-profile-js": hot(preferDefault(require("E:\\project\\web-app-main\\src\\pages\\profile.js"))),
  "component---src-pages-sign-up-success-js": hot(preferDefault(require("E:\\project\\web-app-main\\src\\pages\\sign-up-success.js"))),
  "component---src-pages-terms-and-conditions-js": hot(preferDefault(require("E:\\project\\web-app-main\\src\\pages\\terms-and-conditions.js")))
}

