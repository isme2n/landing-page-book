'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'GithubButton',
  summary: 'Showcase the success of any GitHub repo or user with these simple, static buttons with dynamic counts.',
  import: '',
  extractProps: ['button', 'counter'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<GithubButton\n    username="front10"\n    repository="landing-page-book"\n    color="secondary"\n/>',
    tabsActive: ['code']
  }, {
    name: 'All',
    summary: '',
    code: '<>\n    <div className="mb-3">\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="fork" text="Fork" color="secondary" />\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="follow" text="Follow" color="secondary" />\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="star" text="Stars" color="secondary"/>\n    </div>\n    <div>\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="watch" text="Watch" color="secondary" />\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="issue" text="Issues" color="secondary" />\n        <GithubButton className="mr-3" username="front10" repository="landing-page-book" type="download" text="Download" showCounter={false} color="secondary" />\n    </div>\n</>',
    tabsActive: []
  }]
};