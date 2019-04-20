'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _withReadme = require('storybook-readme/with-readme');

var _withReadme2 = _interopRequireDefault(_withReadme);

var _StoryHeader = require('../../../../storybook-utils/components/StoryHeader');

var _StoryHeader2 = _interopRequireDefault(_StoryHeader);

var _PropsManager = require('../../../../storybook-utils/components/PropsManager');

var _PropsManager2 = _interopRequireDefault(_PropsManager);

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _components = require('../../../components');

var _README = require('../../../components/LanguageSwitcher/README.md');

var _README2 = _interopRequireDefault(_README);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react3.storiesOf)('Components/LanguageSwitcher', module);

stories.add('Default', (0, _withReadme2.default)([_README2.default], function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(_StoryHeader2.default, {
      name: 'Language Switcher',
      description: 'Website translation, the process of converting text from a source language into a target language, is also known as website globalization. In order to translate a website into other languages, you may need both website internationalization (I18N) and website localization (L10N). This component allow you to easy change the language on your website.'
    }),
    _react2.default.createElement(
      _PropsManager2.default,
      { scope: { React: _react2.default, LanguageSwitcher: _components.LanguageSwitcher } },
      '<LanguageSwitcher\n    showLabel placeholder="Select language..."\n    languages={[\'US\', \'FR\', \'ES\', \'DE\']}\n    customLabels={{\n        US: \'English\',\n        FR: \'Fran\xE7ais\',\n        ES: \'Espa\xF1ol\',\n        DE: \'Deutsch\'\n    }}\n/>'
    )
  );
}));