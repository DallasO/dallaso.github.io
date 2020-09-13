/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require("react");

const HeadComponents = [
  <title key="title">Dallas Opelt</title>,
  <meta
    key="Description"
    name="description"
    content="Full stack web developer located in the greater Seattle area"
  />,
  <link
    key="fa-solid"
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.7.2/css/solid.css"
    integrity="sha384-r/k8YTFqmlOaqRkZuSiE9trsrDXkh07mRaoGBMoDcmA58OHILZPsk29i2BsFng1B"
    crossOrigin="anonymous"
  />,
  <link
    key="fa-brands"
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.7.2/css/brands.css"
    integrity="sha384-BKw0P+CQz9xmby+uplDwp82Py8x1xtYPK3ORn/ZSoe6Dk3ETP59WCDnX+fI1XCKK"
    crossOrigin="anonymous"
  />,
  <link
    key="fa"
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.7.2/css/fontawesome.css"
    integrity="sha384-4aon80D8rXCGx9ayDt85LbyUHeMWd3UiBaWliBlJ53yzm9hqN21A+o1pqoyK04h+"
    crossOrigin="anonymous"
  />
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents);
};
