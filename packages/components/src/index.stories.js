import React, { useRef } from 'react';
import styled from 'styled-components';
import { storiesOf, addDecorator } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import {
  Borealis,
  Ecoplast,
  LAT,
  MtmPlastics,
  Rosier,
  Borouge,
  NutriGuide,
  MyBorealis,
  UltraPolymers,
  BorealisDigitalStudio,
} from '.';

const stories = storiesOf('components/logos', module);

const StyledWrapper = styled.div`
  margin: 0px 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: -10px;
`;

addDecorator(story => {
  const content = story();
  return <StyledWrapper>{content}</StyledWrapper>;
});

stories.addDecorator(withInfo);

stories.addDecorator(withKnobs);

const Logos = [
  {
    Source: Borealis,
    props: ['tagline', 'name', 'shape'],
  },
  {
    Source: LAT,
  },
  {
    Source: Ecoplast,
  },
  {
    Source: MtmPlastics,
  },
  {
    Source: Rosier,
  },
  {
    Source: Borouge,
  },
  {
    Source: MyBorealis,
  },
  {
    Source: NutriGuide,
    props: ['tagline'],
  },
  {
    Source: UltraPolymers,
  },
  {
    Source: BorealisDigitalStudio,
  },
];

const getLogoProps = props => {
  const returnObject = {
    color: select(
      'color',
      { colored: null, black: 'black', white: 'white' },
      null
    ),
  };
  if (props) {
    props.forEach(key => {
      returnObject[key] = boolean(key, true);
    });
  }
  return returnObject;
};

// https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
const saveSvgFile = (filename, data) => {
  data = data.replace(
    '<svg',
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'
  );
  const blob = new Blob([data], { type: 'image/svg+xml' });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  } else {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
};

const StyledButton = styled.button`
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 13px;
  align-self: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid rgb(238, 238, 238);
  border-radius: 3px;
  padding: 3px 10px;
  margin-top: 15px;
`;

const IgnoreMe = ({ children }) => {
  const logoRef = useRef(null);
  return (
    <>
      <div ref={logoRef}>{children}</div>
      <form
        onSubmit={event => {
          event.preventDefault();
          saveSvgFile(children.type.displayName, logoRef.current.innerHTML);
        }}
      >
        <StyledButton type="submit">Download</StyledButton>
      </form>
    </>
  );
};

const StyledCode = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.88em;
  font-family: Menlo, Monaco, 'Courier New', monospace;
  background-color: rgb(250, 250, 250);
  padding: 0.5rem;
  line-height: 1.5;
  overflow-x: scroll;
`;

Logos.forEach(({ Source, props }) => {
  const source = <Source />;
  const {
    type: { displayName: name },
  } = source;
  // \`import { ${name} } from '@borealisgroup/components';\`
  stories.add(
    name,
    () => (
      <IgnoreMe>
        <Source {...getLogoProps(props)} />
      </IgnoreMe>
    ),
    {
      info: {
        text: (
          <>
            <h1>For React developers</h1>
            <p>Install package</p>
            <StyledCode>npm i @borealisgroup/components</StyledCode>
            <p>Import the {name} logo from the package and use it.</p>
            <StyledCode>
              {`import { ${name} } from '@borealisgroup/components';`}
            </StyledCode>
            <p>You can ignore all the code wrapping the {name} tag</p>
          </>
        ),
        inline: true,
        styles: stylesheet => {
          return {
            // Setting the style with a function
            ...stylesheet,
            infoBody: {
              ...stylesheet.infoBody,
              border: 'none',
              padding: 0,
              marginTop: 0,
            },
            source: {
              ...stylesheet.source,
              h1: {
                ...stylesheet.source.h1,
                display: 'none',
              },
            },
          };
        },
      },
    }
  );
});
