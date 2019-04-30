import React from 'react';

const shapePath = (
  <g>
    <path
      d="M27.8 117.4H117V56.9c-3.7-.4-6.3-.5-9.3-.5-35.3-.1-69.5 30-79.9 61z"
      fill="#002d5a"
    />
    <path
      d="M116.9 46.3V0c-2.9 0-7 .6-9.6 1.3-36 8.6-63.5 39-83.2 80.1h-.5C24.4 77 27.8 32.3 68 0H0v117.4h14.8c15.9-30.7 50.4-67.5 102.1-71.1z"
      fill="#005d9a"
    />
  </g>
);

const borealisNamePath = (
  <path
    d="M237.1 100.5c0-10.1-8.4-13.9-16.4-15.2 8-2 13.9-6.6 13.8-14.3-.1-9.5-7.4-15.7-24.9-15.7h-37.4v62h39.1c17.5.1 25.8-7 25.8-16.8zm-45-33.7h11.3c7.3 0 10.5 2 10.5 6.8 0 4.7-2.9 7-10.5 7h-11.3V66.8zm0 39.2V91.6h13.8c5.7 0 10.6 1.4 10.6 7.1 0 5.4-4 7.3-10.6 7.3h-13.8zm89.8 13.1c24.5 0 38-12.4 38-32.6 0-19.3-11-32.6-38-32.6-24.6 0-38 12.3-38 32.6 0 19.2 10.4 32.6 38 32.6zm0-52.6c12.8 0 17.3 8.3 17.3 19.9 0 11.5-4.6 19.9-17.3 19.9-12.9 0-17.3-8.5-17.3-19.9 0-11.5 5.1-19.9 17.3-19.9zm67.5 27.6h11c8 0 10.2 1.4 11.1 5.5.3 1.7 1 7.9 1.9 12.9.3 2 .7 3.8 1.1 5h21.1c-.4-1.1-.9-3.2-1.4-5.5-.7-3.4-2-11.3-2.6-14.4-1.4-6.9-5.1-9-13.9-10.1 8.2-1.2 15.4-6 15.4-15 0-11.3-9-16.9-24.4-16.9h-39.5v62h20.1V94.1zm0-26.7h13.2c6.8 0 10.5 1.9 10.5 7.2 0 4.8-2.8 7.6-10.5 7.6h-13.2V67.4zm111.5 37.2h-35.3V92.4h32.7V79.8h-32.7V68.2h34.7V55.4h-54.8v62h55.4v-12.8zm29 1h33.4l5.3 11.8h21.6l-30.6-62H496l-31 62h19.6l5.3-11.8zm16.9-37.1l11.1 25.2h-22.6l11.5-25.2zm100.7 35.7h-33.2V55.4h-20.2v62h53.4v-13.2zm26.9-48.8h-20.2v62h20.2v-62zm53.9 25.3l-10.9-2.5c-6.7-1.5-11.1-2.6-11.1-6.6 0-3.2 3-5.9 9.8-5.9 5.7 0 11 2.3 11.3 6.7h19.5c-.3-9.2-9.9-18.5-30.3-18.5-17.1 0-30.7 5.9-30.7 20.3 0 11.4 9.9 14.9 19.9 17.2l11.3 2.6c6.7 1.6 11.3 2.8 11.3 7.1 0 3.2-2.1 6.3-11.6 6.3-6.4 0-12-3.3-12.2-8.1h-20.3c0 4.7 6.7 19.9 31.9 19.9 16 0 32.5-5.1 32.5-20.1 0-12.8-9.4-16-20.4-18.4z"
    fill="#002d5a"
  />
);

const taglineTextPath = (
  <path
    d="M356.5 178.6h-6.7l-15.3 17.1v-17.1h-5.2v35.6h5.2v-11.6l5.4-6 11.6 17.5h6.2l-14.3-21.4 13.1-14.1zm14.3 9.7c-6.6 0-11.3 4.8-11.3 13.2 0 8.4 4.3 13.1 11.4 13.1 5.5 0 9-2.9 10.5-8.1h-5c-.8 2.5-2.9 3.6-5.5 3.6-3.3 0-6-1.7-6.3-7h17.3c0-.1.1-1 .1-1.9 0-7.3-3.7-12.9-11.2-12.9zm-6.2 10.6c.3-3.8 2.8-6.2 6.1-6.2 4.1 0 5.9 2.7 6.1 6.2h-12.2zm32.5-10.6c-6.5 0-11.3 4.8-11.3 13.2 0 8.4 4.3 13.1 11.4 13.1 5.5 0 9-2.9 10.5-8.1h-5c-.8 2.5-2.9 3.6-5.6 3.6-3.3 0-6-1.7-6.3-7h17.3c0-.1.1-1 .1-1.9.1-7.3-3.6-12.9-11.1-12.9zm-6.2 10.6c.3-3.8 2.7-6.2 6.1-6.2 4.1 0 5.9 2.7 6.1 6.2h-12.2zm34.1-10.6c-2.6 0-4.9 1-6.4 2.8v-2.4h-4.9v34.9h4.9v-11.9c1.6 1.8 3.9 2.9 6.4 2.9 6.7 0 10.5-5.5 10.5-13.2 0-7.7-4-13.1-10.5-13.1zm-.4 21.8c-4.1 0-6.2-3-6.2-8.8 0-5.7 2-8.5 6.2-8.5 4 0 6 3.2 6 8.5 0 5.5-1.7 8.8-6 8.8zm43.8-31.5H455v35.6h13.2c10 0 15.2-7.2 15.2-18.4.1-9.7-5.1-17.2-15-17.2zm.1 30.7h-8.2v-25.8h8.1c6.6 0 9.8 5 9.8 12.4 0 8.7-3.1 13.4-9.7 13.4zm20.5-24.6h5v-6.1h-5v6.1zm0 29.5h4.9v-25.6H489v25.6zm24.1-14.5c-6.4-1.7-8.4-1.7-8.4-4.1 0-1.4 1.3-3.1 4.3-3.1 3.4 0 4.9 1.6 5.1 4.1h4.9c-.3-4.8-3.6-8.3-9.9-8.3-6.5 0-9.3 4.1-9.3 7.7 0 4 2.7 6 6.6 7 6.8 1.8 8.1 1.9 8.1 4.2 0 1.8-1.9 3.1-5.2 3.1-3.3 0-5-1.5-5.2-4h-4.9c.2 4.7 4.1 8.3 10 8.3 6.4 0 10.1-3.3 10.1-7.7.1-4.3-2.4-6.2-6.2-7.2zm21.7 10.3c-4.3 0-6.7-2.8-6.7-8.6 0-5.9 2.5-8.7 6.6-8.7 3.1 0 4.8 1.6 5.4 4.1h5c-.8-5-4.4-8.6-10.3-8.6-6.8 0-11.5 4.9-11.5 13.2 0 8.2 4.5 13.1 11.6 13.1 5.5 0 9.3-3.2 10.3-8.6h-5c-.6 2.5-2.4 4.1-5.4 4.1zm25-21.7c-6.7 0-11.4 4.9-11.4 13 0 8.3 4.3 13.3 11.4 13.3 6.9 0 11.3-5 11.3-13.3.1-7.5-4.2-13-11.3-13zm0 21.7c-4.3 0-6.4-2.8-6.4-8.8 0-5.7 2.5-8.5 6.4-8.5 4.2 0 6.4 3.3 6.4 8.5 0 6-2.1 8.8-6.4 8.8zm25-2.4l-6.1-19h-5.3l9 25.6h4.9l9-25.6H591l-6.2 19zm24.9-19.3c-6.6 0-11.3 4.8-11.3 13.2 0 8.4 4.3 13.1 11.4 13.1 5.5 0 9-2.9 10.5-8.1h-5c-.8 2.5-2.9 3.6-5.5 3.6-3.3 0-6-1.7-6.3-7h17.3c0-.1.1-1 .1-1.9 0-7.3-3.7-12.9-11.2-12.9zm-6.2 10.6c.3-3.8 2.8-6.2 6.1-6.2 4.1 0 5.9 2.7 6.1 6.2h-12.2zm27.6-6.7v-3.5h-4.9v25.6h4.9v-12.4c0-6.6 3-8.4 7.1-8.4h1.6v-4.9s-.9-.3-2.3-.3c-2.6 0-4.8 1.4-6.4 3.9zm12.4-7.5h5v-6.1h-5v6.1zm.1 29.5h4.9v-25.6h-4.9v25.6zm23.5-25.9c-2.8 0-5.1.9-6.8 2.6v-2.2h-4.9v25.6h4.9v-13.9c0-5.3 2.3-7.7 5.8-7.7 3.3 0 4.9 2.6 4.9 5.8v15.8h4.9v-16.1c0-5.9-3-9.9-8.8-9.9zm31 2.7c-1.6-1.7-3.7-2.7-6.3-2.7-6.8 0-10.8 5.7-10.8 12.7 0 7.9 3.8 13.2 10.5 13.2 2.6 0 5-1.2 6.7-3v1c0 5.2-1.5 7.3-5.8 7.3-3.3 0-5-1.2-5.5-3.3H682c.7 4.5 4.4 7.8 10.4 7.8 6.9 0 10.7-4.1 10.7-11.8v-23.5h-4.9v2.3zm-6.1 18.7c-4.1 0-6.1-3-6.1-8.7 0-5 2.3-8.3 6.4-8.3 4.1 0 6 2.9 6 8.6 0 5.7-2.2 8.4-6.3 8.4z"
    fill="#002d5a"
  />
);

const taglineUnderlinePath = <path fill="#002d5a" d="M0 146.7h703v4.3H0z" />;

const Borealis = props => (
  <svg viewBox="0 0 708.7 223.9" {...props}>
    {shapePath}
    {borealisNamePath}
    {taglineUnderlinePath}
    {taglineTextPath}
  </svg>
);

export default Borealis;
