const React = require("react");
const MyProvider = require("./src/theme/Provider").myProvider

exports.wrapPageElement = ({ element, props }) => {
  return (
      <MyProvider {...props}>{element}</MyProvider>
  );
};


