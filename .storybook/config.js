/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);

if (typeof window === 'object') window.__storybook_stories__ = require('@storybook/react').getStorybook();
