import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { Props } from './types';

const activeXml = `
  <?xml version="1.0" encoding="utf-8"?>
  <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 402 402" style="enable-background:new 0 0 402 402;" xml:space="preserve">
  <style type="text/css">
	.st0{fill:url(#SVGID_1_);}
  </style>
  <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="200.997" x2="401.994" y2="200.997">
    <stop  offset="0" style="stop-color:#FFC112"/>
    <stop  offset="1" style="stop-color:#FFC112"/>
  </linearGradient>
  <path class="st0" d="M0,402h182.7V219.3H0V402z M36.5,255.8h109.6v109.4H36.5V255.8z M73.1,292.4h36.5v36.5H73.1V292.4z
    M292.4,365.4h36.6V402h-36.6V365.4z M365.4,365.4H402V402h-36.6V365.4z M365.4,255.8h-36.5v-36.5H219.3V402h36.5V292.4h36.5v36.5
    H402V219.3l0,0h-36.5V255.8z M0,182.7h182.7V0H0V182.7z M36.5,36.5h109.6v109.6H36.5V36.5z M73.1,73.1h36.5v36.5H73.1V73.1z
    M219.3,0v182.7H402V0H219.3z M365.4,146.2H255.8V36.5h109.6V146.2z M292.4,73.1h36.6v36.5h-36.6V73.1z"/>
  </svg>

`;
const inactiveXml = `
  <?xml version="1.0" encoding="utf-8"?>
  <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 402 402" style="enable-background:new 0 0 402 402;" xml:space="preserve">
  <style type="text/css">
    .st0{fill:url(#SVGID_1_);}
  </style>
  <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="200.997" x2="401.994" y2="200.997">
    <stop  offset="0" style="stop-color:#505050"/>
    <stop  offset="1" style="stop-color:#b9b9b9"/>
  </linearGradient>
  <path class="st0" d="M0,402h182.7V219.3H0V402z M36.5,255.8h109.6v109.4H36.5V255.8z M73.1,292.4h36.5v36.5H73.1V292.4z
    M292.4,365.4h36.6V402h-36.6V365.4z M365.4,365.4H402V402h-36.6V365.4z M365.4,255.8h-36.5v-36.5H219.3V402h36.5V292.4h36.5v36.5
    H402V219.3l0,0h-36.5V255.8z M0,182.7h182.7V0H0V182.7z M36.5,36.5h109.6v109.6H36.5V36.5z M73.1,73.1h36.5v36.5H73.1V73.1z
    M219.3,0v182.7H402V0H219.3z M365.4,146.2H255.8V36.5h109.6V146.2z M292.4,73.1h36.6v36.5h-36.6V73.1z"/>
  </svg>
`;

export default ({ focused, ...props }: Props) => {
  if (focused) return <SvgCss xml={activeXml} width='100%' height='100%' />;

  return <SvgCss xml={inactiveXml} width='100%' height='100%' />;
};
