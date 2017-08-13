import React from 'react';
import Header from '../app/components/Header'
import Index from '../pages/index'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

const stories = storiesOf('Layout', module)
stories.addDecorator(withKnobs)
stories.add('Header', () => {
    const title = text('title', 'ทดสอบ')
    return (<Header title={title} />)
  }
)
stories.add('Index', () => {
    const shows = [
      {show: { id: 1, name: 'test'}},
      {show: {id: 2, name: 'test2'}}
    ]
    return (<Index shows={object('shows', shows)} />)
  }
)