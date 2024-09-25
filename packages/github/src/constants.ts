import { PropertyType } from '@kpl/core';

export const GITHUB_PULL_REQUEST_FIELDS = [
  {
    name: `title`,
    displayName: `Title`,
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: `body`,
    displayName: `Body`,
    order: 1,
    type: PropertyType.LONG_TEXT,
  },
  {
    name: `url`,
    displayName: `URL`,
    order: 2,
    type: PropertyType.URL,
  },
  {
    name: `createdAt`,
    displayName: `Created At`,
    order: 3,
    type: PropertyType.DATE,
  },
  {
    name: `state`,
    displayName: `State`,
    order: 4,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: `locked`,
    displayName: `Locked`,
    order: 5,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'labels',
    displayName: 'Labels',
    order: 6,
    type: PropertyType.BADGE_LIST,
  },
];
