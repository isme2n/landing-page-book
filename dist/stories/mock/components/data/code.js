"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var navBarCode = "\nclass App extends Component {\n    render() {\n        return (\n            <Hero\n                backgroundColor=\"#212529\"\n                header=\"Front10\"\n                minHeight=\"400px\"\n                subHeader=\"Rewriting the world with React\"\n                image=\"images/hero/map-image.png\"\n              />\n        );\n    }\n}\n  ";

var importThemes = "\nimport \"@front10/landing-page-book/dist/themes/default/style.css\";\nimport { Hero } from \"@front10/landing-page-book/dist/components\";\n";

var customCss = "\n:root{\n    --Button-borderRadius: 5px;\n    --Button-fontSize: 16px;\n    --Button-padding: 6px 12px;\n}\n";

var customizedButton = "\nimport \"bootstrap/dist/css/bootstrap.min.css\";\nimport \"@front10/landing-page-book/dist/dist/components/Button/style.css\";\nimport \"./custom-theme.css\";\nimport { Button } from \"@front10/landing-page-book/dist/components\";\n\nclass MyComponent extends Component {\n  render() {\n    return <Button>Explore</Button>;\n  }\n}\n";

exports.navBarCode = navBarCode;
exports.importThemes = importThemes;
exports.customCss = customCss;
exports.customizedButton = customizedButton;