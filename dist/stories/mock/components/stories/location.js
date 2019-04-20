'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var markers = [{
  icon: 'fa fa-map-marker',
  color: 'danger',
  lat: 26.5,
  lng: -80.2
}, {
  icon: 'fa fa-map-marker',
  color: 'primary',
  lat: 26.6,
  lng: -80.3
}];

exports.default = {
  name: 'Location',
  summary: 'A simple way to point out a place will be easier for users to locate.',
  import: '',
  withStyles: true,
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Location\n    apiKey="AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc"\n    lat={26.5}\n    lng={-80.2}\n    zoom={10}\n    markers={' + JSON.stringify(markers, null, 8) + '}\n/>',
    tabsActive: ['code']
  }]
};