'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'Navbar',
    summary: 'A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site.',
    import: '',
    withStyles: true,
    extractProps: ['link', 'brand', 'image'],
    stories: [{
        name: 'Basic',
        summary: '',
        code: '<Navbar\n              transparent={false}\n              fixed={false}\n              brandName=""\n              brandLink="https://front10.com"\n              brandLogo="https://front10.com/landing-page-book/images/logo/front10.png"\n              expand="md"\n              rightItems={[\n                  {title: \'Services\'},\n                  {title: \'Contact\'}\n              ]}\n              leftItems={[\n                  {\n                      title: \'Google\',\n                      href: \'https://google.com\',\n                      target: \'_blank\',\n                      icon: \'fa fa-google\'\n                  },\n                  {\n                      title: \'Facebook\',\n                      href: \'https://facebook.com\',\n                      target: \'_blank\',\n                      icon: \'fa fa-facebook-official\'\n                  }\n              ]}\n          />',
        tabsActive: ['code']
    }, {
        name: 'Container Mode',
        summary: '',
        code: '<Navbar expand="lg">\n      <Container>\n          <NavbarCollapse>\n              <NavbarBrand>\n                  <Image \n                      width="120"\n                      src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"\n                      alt="Webpack logo"\n                  />\n              </NavbarBrand>\n              <NavbarNav alignItems="right">\n                  <NavbarLink>Docs</NavbarLink>\n                  <NavbarLink>Contribute</NavbarLink>\n                  <NavbarLink>Blog</NavbarLink>\n                  <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>\n                  <NavbarLink><Icon icon="fa fa-github" /></NavbarLink>\n                  <LanguageSwitcher showArrow={false} selectedLanguage="US" />\n              </NavbarNav>\n          </NavbarCollapse>\n      </Container>\n  </Navbar>',
        tabsActive: []
    }, {
        name: 'Reverse',
        summary: '',
        code: '<Navbar expand="lg">\n      <Container>\n          <NavbarCollapse>\n              <NavbarNav>\n                  <LanguageSwitcher showArrow={false} selectedLanguage="US" />\n                  <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>\n                  <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>\n                  <NavbarLink>Blog</NavbarLink>\n                  <NavbarLink>Contribute</NavbarLink>\n                  <NavbarLink>Docs</NavbarLink>\n              </NavbarNav>\n              <NavbarNav alignItems="right">\n                  <NavbarBrand>\n                      <Image\n                          width="120"\n                          src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"\n                          alt="Webpack logo"\n                      />\n                  </NavbarBrand>\n              </NavbarNav>\n          </NavbarCollapse>\n      </Container>\n  </Navbar>',
        tabsActive: []
    }, {
        name: 'Via children',
        summary: '',
        code: '<Navbar expand="md">\n      <NavbarCollapse>\n          <NavbarBrand>\n              <Image\n                  width="120"\n                  src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"\n                  alt="Webpack logo"\n              />\n          </NavbarBrand>\n          <NavbarNav alignItems="right">\n              <NavbarLink>Docs</NavbarLink>\n              <NavbarLink>Contribute</NavbarLink>\n              <NavbarLink>Blog</NavbarLink>\n              <NavbarLink><Icon icon="fa fa-search"/></NavbarLink>\n              <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>\n              <LanguageSwitcher showArrow={false} selectedLanguage="US" />\n          </NavbarNav>\n      </NavbarCollapse>\n  </Navbar>',
        tabsActive: []
    }, {
        name: 'With search',
        summary: '',
        code: '<Navbar \n      transparent={false} fixed={false} brandName="Front10" \n      brandLink="https://front10.com" brandLogo="https://front10.com/landing-page-book/images/logo/front10.png" expand="md"\n  >\n      <NavbarNav alignItems="right">\n          <Input placeholder="Search" icon="fa fa-search" />\n      </NavbarNav>\n  </Navbar>',
        tabsActive: []
    }, {
        name: 'With user avatar',
        summary: '',
        code: '<Navbar expand="md">\n      <NavbarCollapse>\n          <NavbarBrand>\n              <Image\n                  width="120"\n                  src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"\n                  alt="Webpack logo"\n              />\n          </NavbarBrand>\n          <NavbarNav alignItems="right">\n              <NavbarLink><Icon icon="fa fa-search"/></NavbarLink>\n              <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>\n              <NavbarLink><Icon icon="fa fa-stack-overflow"/></NavbarLink>\n              <LanguageSwitcher showArrow={false} selectedLanguage="US" />\n              <NavbarLink href="https://twitter.com/ycgarrido">\n                  <Image className="mr-2" rounded width="30" src="https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg"/>\n                      ycgarrido\n              </NavbarLink>\n          </NavbarNav>\n      </NavbarCollapse>\n  </Navbar>',
        tabsActive: []
    }]
};