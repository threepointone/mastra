// Generated by ts-to-zod
import { z } from 'zod';

export const userShortInfoSchema = z.object({
  full_name: z.string().optional(),
  id: z.string().optional(),
  profile_picture: z.string().optional(),
  username: z.string().optional(),
});

export const commentEntrySchema = z.object({
  created_time: z.string().optional(),
  from: userShortInfoSchema.optional(),
  id: z.string().optional(),
  text: z.string().optional(),
});

export const commentsCollectionSchema = z.object({
  count: z.number().optional(),
  data: z.array(commentEntrySchema).optional(),
});

export const metaDataSchema = z.object({
  code: z.number().optional(),
});

export const cursorPaginationInfoSchema = z.object({
  next_cursor: z.string().optional(),
  next_url: z.string().optional(),
});

export const idPaginationInfoSchema = z.object({
  next_max_id: z.string().optional(),
  next_url: z.string().optional(),
});

export const imageInfoSchema = z.object({
  height: z.number().optional(),
  url: z.string().optional(),
  width: z.number().optional(),
});

export const imagesDataSchema = z.object({
  low_resolution: imageInfoSchema.optional(),
  standard_resolution: imageInfoSchema.optional(),
  thumbnail: imageInfoSchema.optional(),
});

export const likesCollectionSchema = z.object({
  count: z.number().optional(),
  data: z.array(userShortInfoSchema).optional(),
});

export const locationInfoSchema = z.object({
  id: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  name: z.string().optional(),
});

export const locationInfoResponseSchema = z.object({
  data: locationInfoSchema.optional(),
  meta: metaDataSchema.optional(),
});

export const locationSearchResponseSchema = z.object({
  data: z.array(locationInfoSchema).optional(),
  meta: metaDataSchema.optional(),
});

export const captionDataSchema = z.object({
  created_time: z.string().optional(),
  from: userShortInfoSchema.optional(),
  id: z.string().optional(),
  text: z.string().optional(),
});

export const videosDataSchema = z.object({
  low_resolution: imageInfoSchema.optional(),
  standard_resolution: imageInfoSchema.optional(),
});

export const positionSchema = z.object({
  x: z.number().optional(),
  y: z.number().optional(),
});

export const relationshipInfoSchema = z.object({
  incoming_status: z.union([z.literal('none'), z.literal('followed_by'), z.literal('requested_by')]).optional(),
  outgoing_status: z.union([z.literal('none'), z.literal('follows'), z.literal('requested')]).optional(),
  target_user_is_private: z.boolean().optional(),
});

export const relationshipStatusSchema = z.object({
  outgoing_status: z.union([z.literal('none'), z.literal('follows'), z.literal('requested')]).optional(),
});

export const relationshipResponseSchema = z.object({
  data: relationshipInfoSchema.optional(),
  meta: metaDataSchema.optional(),
});

export const statusResponseSchema = z.object({
  data: z.string().optional(),
  meta: metaDataSchema.optional(),
});

export const tagInfoSchema = z.object({
  media_count: z.number().optional(),
  name: z.string().optional(),
});

export const tagInfoResponseSchema = z.object({
  data: tagInfoSchema.optional(),
  meta: metaDataSchema.optional(),
});

export const tagPaginationInfoSchema = z.object({
  deprecation_warning: z.string().optional(),
  min_tag_id: z.string().optional(),
  next_max_id: z.string().optional(),
  next_max_tag_id: z.string().optional(),
  next_min_id: z.string().optional(),
  next_url: z.string().optional(),
});

export const tagSearchResponseSchema = z.object({
  data: z.array(tagInfoSchema).optional(),
  meta: metaDataSchema.optional(),
});

export const userCountsSchema = z.object({
  followed_by: z.number().optional(),
  follows: z.number().optional(),
  media: z.number().optional(),
});

export const userInPhotoSchema = z.object({
  position: positionSchema.optional(),
  user: userShortInfoSchema.optional(),
});

export const userInfoSchema = z.object({
  bio: z.string().optional(),
  counts: userCountsSchema.optional(),
  full_name: z.string().optional(),
  id: z.string().optional(),
  profile_picture: z.string().optional(),
  username: z.string().optional(),
  website: z.string().optional(),
});

export const userResponseSchema = z.object({
  data: userInfoSchema.optional(),
  meta: metaDataSchema.optional(),
});

export const usersInfoResponseSchema = z.object({
  data: z.array(userShortInfoSchema).optional(),
  meta: metaDataSchema.optional(),
});

export const usersPagingResponseSchema = z.object({
  data: z.array(userShortInfoSchema).optional(),
  meta: metaDataSchema.optional(),
  pagination: cursorPaginationInfoSchema.optional(),
});

export const getGeographiesByGeoIdMediaRecentDataSchema = z.object({
  path: z.object({
    'geo-id': z.string(),
  }),
  query: z
    .object({
      count: z.number().optional(),
      min_id: z.string().optional(),
    })
    .optional(),
});

export const getGeographiesByGeoIdMediaRecentErrorSchema = z.unknown();

export const getLocationsSearchDataSchema = z.object({
  query: z
    .object({
      distance: z.number().optional(),
      facebook_places_id: z.string().optional(),
      foursquare_id: z.string().optional(),
      foursquare_v2_id: z.string().optional(),
      lat: z.number().optional(),
      lng: z.number().optional(),
    })
    .optional(),
});

export const getLocationsSearchResponseSchema = locationSearchResponseSchema;

export const getLocationsSearchErrorSchema = z.unknown();

export const getLocationsByLocationIdDataSchema = z.object({
  path: z.object({
    'location-id': z.string(),
  }),
});

export const getLocationsByLocationIdResponseSchema = locationInfoResponseSchema;

export const getLocationsByLocationIdErrorSchema = z.unknown();

export const getLocationsByLocationIdMediaRecentDataSchema = z.object({
  path: z.object({
    'location-id': z.string(),
  }),
  query: z
    .object({
      max_id: z.string().optional(),
      max_timestamp: z.number().optional(),
      min_id: z.string().optional(),
      min_timestamp: z.number().optional(),
    })
    .optional(),
});

export const getLocationsByLocationIdMediaRecentErrorSchema = z.unknown();

export const getMediaPopularErrorSchema = z.unknown();

export const getMediaSearchDataSchema = z.object({
  query: z.object({
    distance: z.number().optional(),
    lat: z.number(),
    lng: z.number(),
    max_timestamp: z.number().optional(),
    min_timestamp: z.number().optional(),
  }),
});

export const getMediaSearchErrorSchema = z.unknown();

export const getMediaShortcodeByShortcodeDataSchema = z.object({
  path: z.object({
    shortcode: z.string(),
  }),
});

export const getMediaShortcodeByShortcodeErrorSchema = z.unknown();

export const getMediaByMediaIdDataSchema = z.object({
  path: z.object({
    'media-id': z.string(),
  }),
});

export const getMediaByMediaIdErrorSchema = z.unknown();

export const getMediaByMediaIdCommentsDataSchema = z.object({
  path: z.object({
    'media-id': z.string(),
  }),
});

export const commentsResponseSchema = z.object({
  data: z.array(commentEntrySchema).optional(),
  meta: metaDataSchema.optional(),
});

export const getMediaByMediaIdCommentsErrorSchema = z.unknown();

export const postMediaByMediaIdCommentsDataSchema = z.object({
  path: z.object({
    'media-id': z.string(),
  }),
  query: z.object({
    text: z.string(),
  }),
});

export const postMediaByMediaIdCommentsResponseSchema = statusResponseSchema;

export const postMediaByMediaIdCommentsErrorSchema = z.unknown();

export const deleteMediaByMediaIdCommentsByCommentIdDataSchema = z.object({
  path: z.object({
    'comment-id': z.string(),
    'media-id': z.string(),
  }),
});

export const deleteMediaByMediaIdCommentsByCommentIdResponseSchema = statusResponseSchema;

export const deleteMediaByMediaIdCommentsByCommentIdErrorSchema = z.unknown();

export const deleteMediaByMediaIdLikesDataSchema = z.object({
  path: z.object({
    'media-id': z.string(),
  }),
});

export const deleteMediaByMediaIdLikesResponseSchema = statusResponseSchema;

export const deleteMediaByMediaIdLikesErrorSchema = z.unknown();

export const getMediaByMediaIdLikesDataSchema = z.object({
  path: z.object({
    'media-id': z.string(),
  }),
});

export const getMediaByMediaIdLikesResponseSchema = usersInfoResponseSchema;

export const getMediaByMediaIdLikesErrorSchema = z.unknown();

export const postMediaByMediaIdLikesDataSchema = z.object({
  path: z.object({
    'media-id': z.string(),
  }),
});

export const postMediaByMediaIdLikesResponseSchema = statusResponseSchema;

export const postMediaByMediaIdLikesErrorSchema = z.unknown();

export const getTagsSearchDataSchema = z.object({
  query: z.object({
    q: z.string(),
  }),
});

export const getTagsSearchResponseSchema = tagSearchResponseSchema;

export const getTagsSearchErrorSchema = z.unknown();

export const getTagsByTagNameDataSchema = z.object({
  path: z.object({
    'tag-name': z.string(),
  }),
});

export const getTagsByTagNameResponseSchema = tagInfoResponseSchema;

export const getTagsByTagNameErrorSchema = z.unknown();

export const getTagsByTagNameMediaRecentDataSchema = z.object({
  path: z.object({
    'tag-name': z.string(),
  }),
  query: z
    .object({
      count: z.number().optional(),
      max_tag_id: z.string().optional(),
      min_tag_id: z.string().optional(),
    })
    .optional(),
});

export const getTagsByTagNameMediaRecentErrorSchema = z.unknown();

export const getUsersSearchDataSchema = z.object({
  query: z.object({
    count: z.number().optional(),
    q: z.string(),
  }),
});

export const getUsersSearchResponseSchema = usersInfoResponseSchema;

export const getUsersSearchErrorSchema = z.unknown();

export const getUsersSelfFeedDataSchema = z.object({
  query: z
    .object({
      count: z.number().optional(),
      max_id: z.string().optional(),
      min_id: z.string().optional(),
    })
    .optional(),
});

export const getUsersSelfFeedErrorSchema = z.unknown();

export const getUsersSelfMediaLikedDataSchema = z.object({
  query: z
    .object({
      count: z.number().optional(),
      max_like_id: z.string().optional(),
    })
    .optional(),
});

export const getUsersSelfMediaLikedErrorSchema = z.unknown();

export const getUsersSelfRequestedByResponseSchema = usersInfoResponseSchema;

export const getUsersSelfRequestedByErrorSchema = z.unknown();

export const getUsersByUserIdDataSchema = z.object({
  path: z.object({
    'user-id': z.string(),
  }),
});

export const getUsersByUserIdResponseSchema = userResponseSchema;

export const getUsersByUserIdErrorSchema = z.unknown();

export const getUsersByUserIdFollowedByDataSchema = z.object({
  path: z.object({
    'user-id': z.string(),
  }),
});

export const getUsersByUserIdFollowedByResponseSchema = usersPagingResponseSchema;

export const getUsersByUserIdFollowedByErrorSchema = z.unknown();

export const getUsersByUserIdFollowsDataSchema = z.object({
  path: z.object({
    'user-id': z.string(),
  }),
});

export const getUsersByUserIdFollowsResponseSchema = usersPagingResponseSchema;

export const getUsersByUserIdFollowsErrorSchema = z.unknown();

export const getUsersByUserIdMediaRecentDataSchema = z.object({
  path: z.object({
    'user-id': z.string(),
  }),
  query: z
    .object({
      count: z.number().optional(),
      max_id: z.string().optional(),
      max_timestamp: z.number().optional(),
      min_id: z.string().optional(),
      min_timestamp: z.number().optional(),
    })
    .optional(),
});

export const getUsersByUserIdMediaRecentErrorSchema = z.unknown();

export const getUsersByUserIdRelationshipDataSchema = z.object({
  path: z.object({
    'user-id': z.string(),
  }),
});

export const getUsersByUserIdRelationshipResponseSchema = relationshipResponseSchema;

export const getUsersByUserIdRelationshipErrorSchema = z.unknown();

export const postUsersByUserIdRelationshipDataSchema = z.object({
  path: z.object({
    'user-id': z.string(),
  }),
  query: z.object({
    action: z.union([
      z.literal('follow'),
      z.literal('unfollow'),
      z.literal('block'),
      z.literal('unblock'),
      z.literal('approve'),
      z.literal('ignore'),
    ]),
  }),
});

export const relationshipPostResponseSchema = z.object({
  data: relationshipStatusSchema.optional(),
  meta: metaDataSchema.optional(),
});

export const postUsersByUserIdRelationshipErrorSchema = z.unknown();

export const mediaEntrySchema = z.object({
  attribution: z.string().optional(),
  caption: captionDataSchema.optional(),
  comments: commentsCollectionSchema.optional(),
  created_time: z.string().optional(),
  filter: z.string().optional(),
  id: z.string().optional(),
  images: imagesDataSchema.optional(),
  likes: likesCollectionSchema.optional(),
  link: z.string().optional(),
  location: locationInfoSchema.optional(),
  tags: z.array(z.string()).optional(),
  type: z.union([z.literal('image'), z.literal('video')]).optional(),
  user: userShortInfoSchema.optional(),
  user_has_liked: z.boolean().optional(),
  users_in_photo: z.array(userInPhotoSchema).optional(),
  videos: videosDataSchema.optional(),
});

export const mediaEntryResponseSchema = z.object({
  data: mediaEntrySchema.optional(),
  meta: metaDataSchema.optional(),
});

export const mediaListResponseSchema = z.object({
  data: z.array(mediaEntrySchema).optional(),
  meta: metaDataSchema.optional(),
  pagination: idPaginationInfoSchema.optional(),
});

export const mediaSearchResponseSchema = z.object({
  data: z.array(mediaEntrySchema).optional(),
  meta: metaDataSchema.optional(),
});

export const tagMediaListResponseSchema = z.object({
  data: z.array(mediaEntrySchema).optional(),
  meta: metaDataSchema.optional(),
  pagination: tagPaginationInfoSchema.optional(),
});

export const getGeographiesByGeoIdMediaRecentResponseSchema = mediaListResponseSchema;

export const getLocationsByLocationIdMediaRecentResponseSchema = mediaListResponseSchema;

export const getMediaPopularResponseSchema = mediaSearchResponseSchema;

export const getMediaSearchResponseSchema = mediaSearchResponseSchema;

export const getMediaShortcodeByShortcodeResponseSchema = mediaEntryResponseSchema;

export const getMediaByMediaIdResponseSchema = mediaEntryResponseSchema;

export const getMediaByMediaIdCommentsResponseSchema = commentsResponseSchema;

export const getTagsByTagNameMediaRecentResponseSchema = tagMediaListResponseSchema;

export const getUsersSelfFeedResponseSchema = mediaListResponseSchema;

export const getUsersSelfMediaLikedResponseSchema = mediaListResponseSchema;

export const getUsersByUserIdMediaRecentResponseSchema = mediaListResponseSchema;

export const postUsersByUserIdRelationshipResponseSchema = relationshipPostResponseSchema;