import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/App';
import BirthdayForm from '../src/components/BirthdayForm/BirthdayForm';
import BirthdaySelect from '../src/components/BirthdaySelect/BirthdaySelect';

storiesOf('App', module)
  .add('default', () => <App />);

storiesOf('BirthdayForm', module)
  .add('default', () => <BirthdayForm />);

storiesOf('BirthdaySelect', module)
  .add('Month selection', () => <BirthdaySelect
    label="Month"
    options={[
      { value: 1, label: "January" },
      { value: 2, label: "February" },
      { value: 3, label: "March" },
    ]}
    onChange={() => {}} />);