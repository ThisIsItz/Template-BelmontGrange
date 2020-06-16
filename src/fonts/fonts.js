import { createGlobalStyle } from 'styled-components';

import NolanMedium from './nolan-medium-webfont.woff';
import NolanMedium2 from './nolan-medium-webfont.woff2';



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
