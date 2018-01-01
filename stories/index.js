import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/App';
import BirthdayForm from '../src/components/BirthdayForm/BirthdayForm';
import BirthdaySelect from '../src/components/BirthdaySelect/BirthdaySelect';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { cowboyHoroscopeReducer } from '../src/reducer';

let store = createStore(
    cowboyHoroscopeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

storiesOf('App', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
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