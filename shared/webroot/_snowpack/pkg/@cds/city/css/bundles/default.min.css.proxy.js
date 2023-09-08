// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@font-face{font-family:'Clarity City';font-weight:300;font-style:normal;font-display:swap;src:local('Clarity City'),url(../../Webfonts/WOFF2/ClarityCity-Light.woff2) format('woff2'),url(../../Webfonts/WOFF/ClarityCity-Light.woff) format('woff')}@font-face{font-family:'Clarity City';font-weight:400;font-style:normal;font-display:swap;src:local('Clarity City'),url(../../Webfonts/WOFF2/ClarityCity-Regular.woff2) format('woff2'),url(../../Webfonts/WOFF/ClarityCity-Regular.woff) format('woff')}@font-face{font-family:'Clarity City';font-weight:500;font-style:normal;font-display:swap;src:local('Clarity City'),url(../../Webfonts/WOFF2/ClarityCity-Medium.woff2) format('woff2'),url(../../Webfonts/WOFF/ClarityCity-Medium.woff) format('woff')}@font-face{font-family:'Clarity City';font-weight:600;font-style:normal;font-display:swap;src:local('Clarity City'),url(../../Webfonts/WOFF2/ClarityCity-SemiBold.woff2) format('woff2'),url(../../Webfonts/WOFF/ClarityCity-SemiBold.woff) format('woff')}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}