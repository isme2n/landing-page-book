'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Language Switcher',
  summary: 'Website translation, the process of converting text from a source language into a target language, is also known as website globalization. In order to translate a website into other languages, you may need both website internationalization (I18N) and website localization (L10N). This component allow you to easy change the language on your website.',
  import: '',
  withStyles: true,
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<LanguageSwitcher\n    showLabel placeholder="Select language..."\n    languages={[\'US\', \'FR\', \'ES\', \'DE\']}\n    customLabels={{\n        US: \'English\',\n        FR: \'Fran\xE7ais\',\n        ES: \'Espa\xF1ol\',\n        DE: \'Deutsch\'\n    }}\n/>',
    tabsActive: ['code']
  }]
};