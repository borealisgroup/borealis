import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
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
} from '.';

const stories = storiesOf('components/logos', module);

stories.addDecorator(withInfo);

stories.addDecorator(withKnobs);

const howToImportCodeInfo = nameComponent => ({
  info: `\`import { ${nameComponent} } from '@borealisgroup/components';\``,
});

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
];

const getLogoProps = props => {
  const returnObject = {};
  if (props) {
    props.forEach(key => {
      returnObject[key] = boolean(key, true);
    });
  }
  return returnObject;
};

// https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
const saveFile = (filename, data) => {
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

const Logo = ({ Source, logoName, ...props }) => {
  const logoRef = useRef(null);
  return (
    <>
      <div ref={logoRef}>
        <Source
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          color={select(
            'color',
            { colored: null, black: 'black', white: 'white' },
            null
          )}
        />
      </div>
      <form
        onSubmit={event => {
          event.preventDefault();
          saveFile(logoName, logoRef.current.innerHTML);
        }}
      >
        <button type="submit">Download svg</button>
      </form>
    </>
  );
};

Logos.forEach(({ Source, props }) => {
  const source = <Source />;
  const { displayName: name } = source.type;
  stories.add(
    name,
    () => <Logo logoName={name} Source={Source} {...getLogoProps(props)} />,
    howToImportCodeInfo(name)
  );
});
