import { PropertyType } from '@arkw/core';

export const OAuth2CreateAccessTokenRequestFields = [
  {
    name: 'grant_type',
    displayName: 'grant_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'client_id',
    displayName: 'client_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'client_secret',
    displayName: 'client_secret',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'code',
    displayName: 'code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OAuth2RefreshAccessTokenRequestFields = [
  {
    name: 'grant_type',
    displayName: 'grant_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'client_id',
    displayName: 'client_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'client_secret',
    displayName: 'client_secret',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'refresh_token',
    displayName: 'refresh_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const OAuth2AccessTokenResponseFields = [
  {
    name: 'access_token',
    displayName: 'access_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'token_type',
    displayName: 'token_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expires_in',
    displayName: 'expires_in',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'scope',
    displayName: 'scope',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'refresh_token',
    displayName: 'refresh_token',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentListResponseFields = [
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentCreateByTemplateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'detect_title_variables',
    displayName: 'detect_title_variables',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'template_uuid',
    displayName: 'template_uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'folder_uuid',
    displayName: 'folder_uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'recipients',
    displayName: 'recipients',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tokens',
    displayName: 'tokens',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'fields',
    displayName: 'fields',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tags',
    displayName: 'tags',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'images',
    displayName: 'images',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pricing_tables',
    displayName: 'pricing_tables',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'content_placeholders',
    displayName: 'content_placeholders',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentCreateByPdfRequestFields = [
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'recipients',
    displayName: 'recipients',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parse_form_fields',
    displayName: 'parse_form_fields',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tags',
    displayName: 'tags',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'fields',
    displayName: 'fields',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentCreateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'detect_title_variables',
    displayName: 'detect_title_variables',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'template_uuid',
    displayName: 'template_uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'folder_uuid',
    displayName: 'folder_uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'owner',
    displayName: 'owner',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'recipients',
    displayName: 'recipients',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tokens',
    displayName: 'tokens',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'fields',
    displayName: 'fields',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tags',
    displayName: 'tags',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'images',
    displayName: 'images',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pricing_tables',
    displayName: 'pricing_tables',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'content_placeholders',
    displayName: 'content_placeholders',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parse_form_fields',
    displayName: 'parse_form_fields',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentCreateResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_modified',
    displayName: 'date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expiration_date',
    displayName: 'expiration_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'links',
    displayName: 'links',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'info_message',
    displayName: 'info_message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentStatusResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_modified',
    displayName: 'date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_completed',
    displayName: 'date_completed',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expiration_date',
    displayName: 'expiration_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'version',
    displayName: 'version',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentUpdateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'recipients',
    displayName: 'recipients',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'fields',
    displayName: 'fields',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tokens',
    displayName: 'tokens',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pricing_tables',
    displayName: 'pricing_tables',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentStatusChangeRequestFields = [
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'note',
    displayName: 'note',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'notify_recipients',
    displayName: 'notify_recipients',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentDetailsResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'autonumbering_sequence_name_prefix',
    displayName: 'autonumbering_sequence_name_prefix',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_modified',
    displayName: 'date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_completed',
    displayName: 'date_completed',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'content_date_modified',
    displayName: 'content_date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by',
    displayName: 'created_by',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'template',
    displayName: 'template',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expiration_date',
    displayName: 'expiration_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tokens',
    displayName: 'tokens',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'fields',
    displayName: 'fields',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pricing',
    displayName: 'pricing',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'version',
    displayName: 'version',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tags',
    displayName: 'tags',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sent_by',
    displayName: 'sent_by',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'recipients',
    displayName: 'recipients',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'grand_total',
    displayName: 'grand_total',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'linked_objects',
    displayName: 'linked_objects',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentCreateLinkRequestFields = [
  {
    name: 'recipient',
    displayName: 'recipient',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'lifetime',
    displayName: 'lifetime',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentCreateLinkResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expires_at',
    displayName: 'expires_at',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentSendRequestFields = [
  {
    name: 'message',
    displayName: 'message',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'subject',
    displayName: 'subject',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'silent',
    displayName: 'silent',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sender',
    displayName: 'sender',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'forwarding_settings',
    displayName: 'forwarding_settings',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'selected_approvers',
    displayName: 'selected_approvers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentSendResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_modified',
    displayName: 'date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'expiration_date',
    displayName: 'expiration_date',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'version',
    displayName: 'version',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shared_link',
    displayName: 'shared_link',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentAttachmentRequestFields = [
  {
    name: 'file',
    displayName: 'file',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'source',
    displayName: 'source',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentAttachmentResponseFields = [
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by',
    displayName: 'created_by',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentTransferOwnershipRequestFields = [
  {
    name: 'membership_id',
    displayName: 'membership_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentTransferAllOwnershipRequestFields = [
  {
    name: 'from_membership_id',
    displayName: 'from_membership_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'to_membership_id',
    displayName: 'to_membership_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentRecipientCreateRequestFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'kind',
    displayName: 'kind',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentRecipientEditRequestFields = [
  {
    name: 'email',
    displayName: 'email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'first_name',
    displayName: 'first_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_name',
    displayName: 'last_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'company',
    displayName: 'company',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'job_title',
    displayName: 'job_title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'phone',
    displayName: 'phone',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'state',
    displayName: 'state',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'street_address',
    displayName: 'street_address',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'city',
    displayName: 'city',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'postal_code',
    displayName: 'postal_code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentRecipientResponseFields = [
  {
    name: 'recipient_id',
    displayName: 'recipient_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LinkedObjectListResponseFields = [
  {
    name: 'linked_objects',
    displayName: 'linked_objects',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LinkedObjectCreateRequestFields = [
  {
    name: 'provider',
    displayName: 'provider',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'entity_type',
    displayName: 'entity_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'entity_id',
    displayName: 'entity_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const LinkedObjectCreateResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'provider',
    displayName: 'provider',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'entity_type',
    displayName: 'entity_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'entiry_id',
    displayName: 'entiry_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ContentLibraryItemResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_modified',
    displayName: 'date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'content_date_modified',
    displayName: 'content_date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by',
    displayName: 'created_by',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tokens',
    displayName: 'tokens',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'fields',
    displayName: 'fields',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pricing',
    displayName: 'pricing',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tags',
    displayName: 'tags',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'roles',
    displayName: 'roles',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'version',
    displayName: 'version',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'content_placeholders',
    displayName: 'content_placeholders',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'images',
    displayName: 'images',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ContentLibraryItemListResponseFields = [
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TemplateListResponseFields = [
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TemplateDetailsResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_modified',
    displayName: 'date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'content_date_modified',
    displayName: 'content_date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'created_by',
    displayName: 'created_by',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'metadata',
    displayName: 'metadata',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tokens',
    displayName: 'tokens',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'fields',
    displayName: 'fields',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'pricing',
    displayName: 'pricing',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'tags',
    displayName: 'tags',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'roles',
    displayName: 'roles',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'version',
    displayName: 'version',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'content_placeholders',
    displayName: 'content_placeholders',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'images',
    displayName: 'images',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const FormListResponseFields = [
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'has_next_page',
    displayName: 'has_next_page',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentsFolderCreateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_uuid',
    displayName: 'parent_uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentsFolderCreateResponseFields = [
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentsFolderListResponseFields = [
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentsFolderRenameRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentsFolderRenameResponseFields = [
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TemplatesFolderCreateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'parent_uuid',
    displayName: 'parent_uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TemplatesFolderCreateResponseFields = [
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TemplatesFolderListResponseFields = [
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TemplatesFolderRenameRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const TemplatesFolderRenameResponseFields = [
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const APILogDetailsResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'method',
    displayName: 'method',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'request_time',
    displayName: 'request_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'response_time',
    displayName: 'response_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'response_body',
    displayName: 'response_body',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'query_params_string',
    displayName: 'query_params_string',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'query_params_object',
    displayName: 'query_params_object',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'request_body',
    displayName: 'request_body',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'token_type',
    displayName: 'token_type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'application',
    displayName: 'application',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'key',
    displayName: 'key',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'request_id',
    displayName: 'request_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user_email',
    displayName: 'user_email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user_id',
    displayName: 'user_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const APILogListResponseFields = [
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PricingTableRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'data_merge',
    displayName: 'data_merge',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'options',
    displayName: 'options',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sections',
    displayName: 'sections',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PricingResponseFields = [
  {
    name: 'tables',
    displayName: 'tables',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'quotes',
    displayName: 'quotes',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'total',
    displayName: 'total',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const PricingTableResponseFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'total',
    displayName: 'total',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_included_in_total',
    displayName: 'is_included_in_total',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'summary',
    displayName: 'summary',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'currency',
    displayName: 'currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const QuoteResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'currency',
    displayName: 'currency',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'total',
    displayName: 'total',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'summary',
    displayName: 'summary',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'sections',
    displayName: 'sections',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'merge_rules',
    displayName: 'merge_rules',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ContactDetailsResponseFields = [
  {
    name: 'id',
    displayName: 'id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'email',
    displayName: 'email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'first_name',
    displayName: 'first_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_name',
    displayName: 'last_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'company',
    displayName: 'company',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'job_title',
    displayName: 'job_title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'phone',
    displayName: 'phone',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'state',
    displayName: 'state',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'street_address',
    displayName: 'street_address',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'city',
    displayName: 'city',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'postal_code',
    displayName: 'postal_code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ContactListResponseFields = [
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ContactCreateRequestFields = [
  {
    name: 'email',
    displayName: 'email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'first_name',
    displayName: 'first_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_name',
    displayName: 'last_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'company',
    displayName: 'company',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'job_title',
    displayName: 'job_title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'phone',
    displayName: 'phone',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'state',
    displayName: 'state',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'street_address',
    displayName: 'street_address',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'city',
    displayName: 'city',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'postal_code',
    displayName: 'postal_code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const ContactUpdateRequestFields = [
  {
    name: 'email',
    displayName: 'email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'first_name',
    displayName: 'first_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_name',
    displayName: 'last_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'company',
    displayName: 'company',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'job_title',
    displayName: 'job_title',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'phone',
    displayName: 'phone',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'state',
    displayName: 'state',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'street_address',
    displayName: 'street_address',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'city',
    displayName: 'city',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'postal_code',
    displayName: 'postal_code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MemberDetailsResponseFields = [
  {
    name: 'user_id',
    displayName: 'user_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'membership_id',
    displayName: 'membership_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'email',
    displayName: 'email',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'first_name',
    displayName: 'first_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'last_name',
    displayName: 'last_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'is_active',
    displayName: 'is_active',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'workspace',
    displayName: 'workspace',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'workspace_name',
    displayName: 'workspace_name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'emails_verified',
    displayName: 'emails_verified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'role',
    displayName: 'role',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'user_license',
    displayName: 'user_license',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_created',
    displayName: 'date_created',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'date_modified',
    displayName: 'date_modified',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const MemberListResponseFields = [
  {
    name: 'results',
    displayName: 'results',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const DocumentStatusEnumFields = [];

export const DocumentStatusRequestEnumFields = [];

export const DocumentOrderingFieldsEnumFields = [];

export const WebhookSubscriptionPayloadEnumFields = [];

export const WebhookSubscriptionTriggerEnumFields = [];

export const WebhookSubscriptionStatusEnumFields = [];

export const WebhookSubscriptionCreateRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'payload',
    displayName: 'payload',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'triggers',
    displayName: 'triggers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const WebhookSubscriptionPatchRequestFields = [
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'active',
    displayName: 'active',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'payload',
    displayName: 'payload',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'triggers',
    displayName: 'triggers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const WebhookSubscriptionItemResponseFields = [
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'active',
    displayName: 'active',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'payload',
    displayName: 'payload',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'triggers',
    displayName: 'triggers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'workspace_id',
    displayName: 'workspace_id',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'shared_key',
    displayName: 'shared_key',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'status',
    displayName: 'status',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const WebhookSubscriptionSharedKeyResponseFields = [
  {
    name: 'shared_key',
    displayName: 'shared_key',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const WebhookSubscriptionListResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const WebhookEventErrorEnumFields = [];

export const WebhookEventHttpStatusCodeGroupEnumFields = [];

export const WebhookEventTriggerEnumFields = [];

export const WebhookEventItemResponseFields = [
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'http_status_code',
    displayName: 'http_status_code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'error',
    displayName: 'error',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'delivery_time',
    displayName: 'delivery_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const WebhookEventDetailsResponseFields = [
  {
    name: 'uuid',
    displayName: 'uuid',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'name',
    displayName: 'name',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'type',
    displayName: 'type',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'http_status_code',
    displayName: 'http_status_code',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'error',
    displayName: 'error',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'delivery_time',
    displayName: 'delivery_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'url',
    displayName: 'url',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'signature',
    displayName: 'signature',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'request_body',
    displayName: 'request_body',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'response_body',
    displayName: 'response_body',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'response_headers',
    displayName: 'response_headers',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
  {
    name: 'event_time',
    displayName: 'event_time',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];

export const WebhookEventPageResponseFields = [
  {
    name: 'items',
    displayName: 'items',
    order: 0,
    type: PropertyType.SINGLE_LINE_TEXT,
  },
];
