import { createGlobalStyle } from 'styled-components';

import BellaWebFont from './f37bella-webfont.woff';
import BellaWebFont2 from './f37bella-webfont.woff2';

import NolanMedium from './nolan-medium-webfont.woff';
import NolanMedium2 from './nolan-medium-webfont.woff2';

import ParasupremeLight from './parasupreme-lightfine-webfont.woff'
import ParasupremeLight2 from './parasupreme-lightfine-webfont.woff2'

import ParasupremeRegular from './parasupreme-regularfine-webfont.woff'
import ParasupremeRegular2 from './parasupreme-regularfine-webfont.woff2'


export default createGlobalStyle`
    @font-face {
        font-family: 'Para Font';
        src: local('Para Font'), local('Parafont'),
        url(${NolanMedium2}) format('woff2'),
        url(${NolanMedium}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
