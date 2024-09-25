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

// const MAILCHIMP_MEMBER_TO_PERSON = {
//   _externalId: 'unique_email_id',
//   firstName: 'merge_fields.FNAME',
//   lastName: 'merge_fields.LNAME',
//   email: 'email_address',
//   phone: 'merge_fields.PHONE',
//   birthday: 'merge_fields.BIRTHDAY',
//   address: (m: MailchimpMember) => getPath(m, 'merge_fields.ADDRESS.addr1'),
//   address2: (m: MailchimpMember) => getPath(m, 'merge_fields.ADDRESS.addr2'),
//   city: (m: MailchimpMember) => getPath(m, 'merge_fields.ADDRESS.city'),
//   state: (m: MailchimpMember) => getPath(m, 'merge_fields.ADDRESS.state'),
//   zipcode: (m: MailchimpMember) => getPath(m, 'merge_fields.ADDRESS.zip'),
//   country: (m: MailchimpMember) => getPath(m, 'merge_fields.ADDRESS.country'),
//   // tags: (m: MailchimpMember) => m.tags?.map((tag: { name: string }) => tag.name).join(', '),
// };

// export const mapMailchimpMemberToPersonRecord = (member: MailchimpMember) => {
//   return Object.entries(MAILCHIMP_MEMBER_TO_PERSON).reduce((acc, [key, path]) => {
//     acc[key] = typeof path === 'function' ? path(member) : getPath(member, path);

//     if (acc[key]) {
//       acc[key] = acc[key].trim();
//     }

//     return acc;
//   }, {} as Record<string, any>);
// };
