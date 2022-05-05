import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { Props } from './types';

const activeXml = `
  <?xml version="1.0" encoding="utf-8"?>
  <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
  <style type="text/css">
    .st0{fill:#FFC112;}
    .st1{fill:#141C28;}
  </style>
  <title>checklist-flat</title>
  <path class="st0" d="M396.8,38.4h-57.6c4.2,5.5,6.5,12.3,6.5,19.2V96c0,17.7-14.3,32-32,32H198.4c-17.7,0-32-14.3-32-32V57.6
    c0-6.9,2.3-13.7,6.4-19.2h-57.6c-35.3,0.1-63.9,28.7-64,64V448c0.1,35.3,28.7,63.9,64,64h281.6c35.3-0.1,63.9-28.7,64-64V102.4
    C460.7,67.1,432.1,38.5,396.8,38.4z"/>
  <path class="st1" d="M358.4,230.4H256c-7.1,0-12.8-5.7-12.8-12.8s5.7-12.8,12.8-12.8l0,0h102.4c7.1,0,12.8,5.7,12.8,12.8
    S365.5,230.4,358.4,230.4z"/>
  <path class="st1" d="M179.2,243.2c-2,0-3.9-0.5-5.7-1.4L147.9,229c-6.3-3.2-8.9-10.9-5.7-17.2c3.2-6.3,10.9-8.9,17.2-5.7l15.5,7.8
    l19.3-29c4-5.9,11.9-7.4,17.8-3.4c5.8,3.9,7.4,11.8,3.5,17.6l-25.6,38.4C187.5,241.1,183.5,243.2,179.2,243.2z"/>
  <path class="st1" d="M358.4,320H256c-7.1,0-12.8-5.7-12.8-12.8c0-7.1,5.7-12.8,12.8-12.8l0,0h102.4c7.1,0,12.8,5.7,12.8,12.8
    C371.2,314.3,365.5,320,358.4,320z"/>
  <path class="st1" d="M179.2,332.8c-2,0-3.9-0.5-5.7-1.4l-25.6-12.8c-6.3-3.2-8.9-10.9-5.7-17.2c3.2-6.3,10.9-8.9,17.2-5.7l15.5,7.8
    l19.3-29c4-5.9,11.9-7.4,17.8-3.4c5.8,3.9,7.4,11.8,3.5,17.6l-25.6,38.4C187.5,330.7,183.5,332.8,179.2,332.8z"/>
  <path class="st1" d="M358.4,409.6H256c-7.1,0-12.8-5.7-12.8-12.8c0-7.1,5.7-12.8,12.8-12.8l0,0h102.4c7.1,0,12.8,5.7,12.8,12.8
    C371.2,403.9,365.5,409.6,358.4,409.6z"/>
  <path class="st1" d="M179.2,422.4c-2,0-3.9-0.5-5.7-1.4l-25.6-12.8c-6.3-3.2-8.9-10.9-5.7-17.2c3.2-6.3,10.9-8.9,17.2-5.7l0,0
    l15.5,7.8l19.3-29c4-5.9,11.9-7.4,17.8-3.4c5.8,3.9,7.4,11.8,3.5,17.6l-25.6,38.4C187.5,420.3,183.5,422.4,179.2,422.4z"/>
  <path class="st1" d="M313.6,25.6h-21.4c-7-20-28.9-30.5-48.9-23.4c-11,3.9-19.6,12.5-23.4,23.4h-21.4c-17.7,0-32,14.3-32,32V96
    c0,17.7,14.3,32,32,32h115.2c17.7,0,32-14.3,32-32V57.6C345.6,39.9,331.3,25.6,313.6,25.6z M256,51.2c-7.1,0-12.8-5.7-12.8-12.8
    c0-7.1,5.7-12.8,12.8-12.8s12.8,5.7,12.8,12.8c0,0,0,0,0,0C268.8,45.5,263.1,51.2,256,51.2z"/>
  </svg>
`;
const inactiveXml = `
 <?xml version="1.0" encoding="utf-8"?>
  <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
  <style type="text/css">
    .st0{fill:#EEAD14;}
    .st1{fill:#141C28;}
  </style>
  <title>checklist-outline</title>
  <path class="st0" d="M358.4,204.8H256c-7.1,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8l0,0h102.4c7.1,0,12.8-5.7,12.8-12.8
    S365.5,204.8,358.4,204.8z"/>
  <path class="st0" d="M211.9,181.3c-5.9-3.9-13.8-2.3-17.8,3.6l-19.3,29l-15.5-7.8c-6.3-3.2-14-0.6-17.2,5.7
    c-3.2,6.3-0.6,14,5.7,17.2l25.6,12.8c5.8,2.9,12.8,1,16.4-4.4l25.6-38.4C219.4,193.2,217.8,185.3,211.9,181.3
    C211.9,181.4,211.9,181.4,211.9,181.3z"/>
  <path class="st0" d="M358.4,294.4H256c-7.1,0-12.8,5.7-12.8,12.8c0,7.1,5.7,12.8,12.8,12.8l0,0h102.4c7.1,0,12.8-5.7,12.8-12.8
    C371.2,300.1,365.5,294.4,358.4,294.4z"/>
  <path class="st0" d="M211.9,271c-5.9-3.9-13.8-2.3-17.8,3.5l-19.3,29l-15.5-7.8c-6.3-3.2-14-0.6-17.2,5.7c-3.2,6.3-0.6,14,5.7,17.2
    l25.6,12.8c5.8,2.9,12.8,1,16.4-4.4l25.6-38.4C219.4,282.8,217.8,274.9,211.9,271C211.9,271,211.9,271,211.9,271z"/>
  <path class="st0" d="M358.4,384H256c-7.1,0-12.8,5.7-12.8,12.8c0,7.1,5.7,12.8,12.8,12.8l0,0h102.4c7.1,0,12.8-5.7,12.8-12.8
    C371.2,389.7,365.5,384,358.4,384z"/>
  <path class="st0" d="M211.9,360.5c-5.9-3.9-13.8-2.3-17.8,3.5l-19.3,29l-15.5-7.8c-6.3-3.2-14-0.6-17.2,5.7
    c-3.2,6.3-0.6,14,5.7,17.2l0,0l25.6,12.8c5.8,2.9,12.8,1,16.4-4.4l25.6-38.4C219.4,372.4,217.8,364.5,211.9,360.5
    C211.9,360.6,211.9,360.6,211.9,360.5z"/>
  <path class="st1" d="M396.8,38.4H339c-6-8-15.4-12.8-25.4-12.8h-21.4c-7-20-28.9-30.5-48.9-23.4c-11,3.9-19.6,12.5-23.4,23.4h-21.4
    c-10,0-19.4,4.8-25.4,12.8h-57.8c-35.3,0.1-63.9,28.7-64,64V448c0.1,35.3,28.7,63.9,64,64h281.6c35.3-0.1,63.9-28.7,64-64V102.4
    C460.7,67.1,432.1,38.5,396.8,38.4z M256,25.6c7.1,0,12.8,5.7,12.8,12.8s-5.7,12.8-12.8,12.8s-12.8-5.7-12.8-12.8
    C243.2,31.3,248.9,25.6,256,25.6z M192,57.6c0-3.5,2.9-6.4,6.4-6.4h21.4c7,20,28.9,30.5,48.9,23.4c11-3.9,19.6-12.5,23.4-23.4h21.4
    c3.5,0,6.4,2.9,6.4,6.4V96c0,3.5-2.9,6.4-6.4,6.4H198.4c-3.5,0-6.4-2.9-6.4-6.4V57.6z M435.2,448c0,21.2-17.2,38.4-38.4,38.4H115.2
    c-21.2,0-38.4-17.2-38.4-38.4V102.4C76.8,81.2,94,64,115.2,64h51.2v32c0,17.7,14.3,32,32,32h115.2c17.7,0,32-14.3,32-32V64h51.2
    c21.2,0,38.4,17.2,38.4,38.4V448z"/>
  </svg>
`;

export default ({ focused, ...props }: Props) => {
  if (focused) return <SvgCss xml={activeXml} width='100%' height='100%' />;

  return <SvgCss xml={inactiveXml} width='100%' height='100%' />;
};
