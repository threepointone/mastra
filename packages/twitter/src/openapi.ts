
            export default {
  "openapi": "3.0.0",
  "servers": [
    {
      "description": "Twitter API",
      "url": "https://api.twitter.com"
    }
  ],
  "info": {
    "contact": {
      "name": "Twitter Developers",
      "url": "https://developer.twitter.com/",
      "x-twitter": "twitter"
    },
    "description": "Twitter API v2 available endpoints",
    "license": {
      "name": "Twitter Developer Agreement and Policy",
      "url": "https://developer.twitter.com/en/developer-terms/agreement-and-policy.html"
    },
    "termsOfService": "https://developer.twitter.com/en/developer-terms/agreement-and-policy.html",
    "title": "Twitter API v2",
    "version": "2.62",
    "x-apisguru-categories": [
      "social"
    ],
    "x-logo": {
      "url": "https://twitter.com/twitter/profile_image?size=original"
    },
    "x-origin": [
      {
        "format": "openapi",
        "url": "https://api.twitter.com/2/openapi.json",
        "version": "3.0"
      }
    ],
    "x-providerName": "twitter.com",
    "x-serviceName": "current",
    "x-tags": [
      "pii"
    ]
  },
  "tags": [
    {
      "description": "Endpoints related to retrieving, managing bookmarks of a user",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://developer.twitter.com/en/docs/twitter-api/bookmarks"
      },
      "name": "Bookmarks"
    },
    {
      "description": "Endpoints related to keeping Twitter data in your systems compliant",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://developer.twitter.com/en/docs/twitter-api/compliance/batch-tweet/introduction"
      },
      "name": "Compliance"
    },
    {
      "description": "Endpoints related to retrieving, managing Direct Messages",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://developer.twitter.com/en/docs/twitter-api/direct-messages"
      },
      "name": "Direct Messages"
    },
    {
      "description": "Miscellaneous endpoints for general API functionality",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://developer.twitter.com/en/docs/twitter-api"
      },
      "name": "General"
    },
    {
      "description": "Endpoints related to retrieving, managing Lists",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://developer.twitter.com/en/docs/twitter-api/lists"
      },
      "name": "Lists"
    },
    {
      "description": "Endpoints related to retrieving, managing Spaces",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://developer.twitter.com/en/docs/twitter-api/spaces"
      },
      "name": "Spaces"
    },
    {
      "description": "Endpoints related to retrieving, searching, and modifying Tweets",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/lookup"
      },
      "name": "Tweets"
    },
    {
      "description": "Endpoints related to retrieving, managing relationships of Users",
      "externalDocs": {
        "description": "Find out more",
        "url": "https://developer.twitter.com/en/docs/twitter-api/users/lookup"
      },
      "name": "Users"
    }
  ],
  "paths": {
    "/2/compliance/jobs": {
      "get": {
        "description": "Returns recent Compliance Jobs for a given job type and optional job status",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs"
        },
        "operationId": "listBatchComplianceJobs",
        "parameters": [
          {
            "description": "Type of Compliance Job to list.",
            "in": "query",
            "name": "type",
            "required": true,
            "schema": {
              "enum": [
                "tweets",
                "users"
              ],
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "Status of Compliance Job to list.",
            "in": "query",
            "name": "status",
            "required": false,
            "schema": {
              "enum": [
                "created",
                "in_progress",
                "failed",
                "complete"
              ],
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/ComplianceJobFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2ComplianceJobsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "List Compliance Jobs",
        "tags": [
          "Compliance"
        ]
      },
      "post": {
        "description": "Creates a compliance for the given job type",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/post-compliance-jobs"
        },
        "operationId": "createBatchComplianceJob",
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateComplianceJobRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateComplianceJobResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Create compliance job",
        "tags": [
          "Compliance"
        ]
      }
    },
    "/2/compliance/jobs/{id}": {
      "get": {
        "description": "Returns a single Compliance Job by ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs-id"
        },
        "operationId": "getBatchComplianceJob",
        "parameters": [
          {
            "description": "The ID of the Compliance Job to retrieve.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/JobId"
            },
            "style": "simple"
          },
          {
            "$ref": "#/components/parameters/ComplianceJobFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2ComplianceJobsIdResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Get Compliance Job",
        "tags": [
          "Compliance"
        ]
      }
    },
    "/2/dm_conversations": {
      "post": {
        "description": "Creates a new DM Conversation.",
        "operationId": "dmConversationIdCreate",
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateDmConversationRequest"
              }
            }
          }
        },
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateDmEventResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "dm.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Create a new DM Conversation",
        "tags": [
          "Direct Messages"
        ]
      }
    },
    "/2/dm_conversations/with/{participant_id}/dm_events": {
      "get": {
        "description": "Returns DM Events for a DM Conversation",
        "operationId": "getDmConversationsWithParticipantIdDmEvents",
        "parameters": [
          {
            "description": "The ID of the participant user for the One to One DM conversation.",
            "in": "path",
            "name": "participant_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken32"
            },
            "style": "form"
          },
          {
            "description": "The set of event_types to include in the results.",
            "explode": false,
            "in": "query",
            "name": "event_types",
            "required": false,
            "schema": {
              "default": [
                "MessageCreate",
                "ParticipantsLeave",
                "ParticipantsJoin"
              ],
              "example": [
                "MessageCreate",
                "ParticipantsLeave"
              ],
              "items": {
                "enum": [
                  "MessageCreate",
                  "ParticipantsJoin",
                  "ParticipantsLeave"
                ],
                "type": "string"
              },
              "minItems": 1,
              "type": "array",
              "uniqueItems": true
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/DmEventFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/DmEventExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2DmConversationsWithParticipantIdDmEventsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "dm.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Get DM Events for a DM Conversation",
        "tags": [
          "Direct Messages"
        ]
      }
    },
    "/2/dm_conversations/with/{participant_id}/messages": {
      "post": {
        "description": "Creates a new message for a DM Conversation with a participant user by ID",
        "operationId": "dmConversationWithUserEventIdCreate",
        "parameters": [
          {
            "description": "The ID of the recipient user that will receive the DM.",
            "in": "path",
            "name": "participant_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateMessageRequest"
              }
            }
          }
        },
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateDmEventResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "dm.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Send a new message to a user",
        "tags": [
          "Direct Messages"
        ]
      }
    },
    "/2/dm_conversations/{dm_conversation_id}/messages": {
      "post": {
        "description": "Creates a new message for a DM Conversation specified by DM Conversation ID",
        "operationId": "dmConversationByIdEventIdCreate",
        "parameters": [
          {
            "description": "The DM Conversation ID.",
            "in": "path",
            "name": "dm_conversation_id",
            "required": true,
            "schema": {
              "type": "string"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateMessageRequest"
              }
            }
          }
        },
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateDmEventResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "dm.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Send a new message to a DM Conversation",
        "tags": [
          "Direct Messages"
        ]
      }
    },
    "/2/dm_conversations/{id}/dm_events": {
      "get": {
        "description": "Returns DM Events for a DM Conversation",
        "operationId": "getDmConversationsIdDmEvents",
        "parameters": [
          {
            "description": "The DM Conversation ID.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/DmConversationId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken32"
            },
            "style": "form"
          },
          {
            "description": "The set of event_types to include in the results.",
            "explode": false,
            "in": "query",
            "name": "event_types",
            "required": false,
            "schema": {
              "default": [
                "MessageCreate",
                "ParticipantsLeave",
                "ParticipantsJoin"
              ],
              "example": [
                "MessageCreate",
                "ParticipantsLeave"
              ],
              "items": {
                "enum": [
                  "MessageCreate",
                  "ParticipantsJoin",
                  "ParticipantsLeave"
                ],
                "type": "string"
              },
              "minItems": 1,
              "type": "array",
              "uniqueItems": true
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/DmEventFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/DmEventExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2DmConversationsIdDmEventsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "dm.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Get DM Events for a DM Conversation",
        "tags": [
          "Direct Messages"
        ]
      }
    },
    "/2/dm_events": {
      "get": {
        "description": "Returns recent DM Events across DM conversations",
        "operationId": "getDmEvents",
        "parameters": [
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken32"
            },
            "style": "form"
          },
          {
            "description": "The set of event_types to include in the results.",
            "explode": false,
            "in": "query",
            "name": "event_types",
            "required": false,
            "schema": {
              "default": [
                "MessageCreate",
                "ParticipantsLeave",
                "ParticipantsJoin"
              ],
              "example": [
                "MessageCreate",
                "ParticipantsLeave"
              ],
              "items": {
                "enum": [
                  "MessageCreate",
                  "ParticipantsJoin",
                  "ParticipantsLeave"
                ],
                "type": "string"
              },
              "minItems": 1,
              "type": "array",
              "uniqueItems": true
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/DmEventFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/DmEventExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2DmEventsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "dm.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Get recent DM Events",
        "tags": [
          "Direct Messages"
        ]
      }
    },
    "/2/lists": {
      "post": {
        "description": "Creates a new List.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists"
        },
        "operationId": "listIdCreate",
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ListCreateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ListCreateResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.read",
              "list.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Create List",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/lists/{id}": {
      "delete": {
        "description": "Delete a List that you own.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id"
        },
        "operationId": "listIdDelete",
        "parameters": [
          {
            "description": "The ID of the List to delete.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ListDeleteResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Delete List",
        "tags": [
          "Lists"
        ]
      },
      "get": {
        "description": "Returns a List.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id"
        },
        "operationId": "listIdGet",
        "parameters": [
          {
            "description": "The ID of the List.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          },
          {
            "$ref": "#/components/parameters/ListFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/ListExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2ListsIdResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "list.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "List lookup by List ID.",
        "tags": [
          "Lists"
        ]
      },
      "put": {
        "description": "Update a List that you own.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id"
        },
        "operationId": "listIdUpdate",
        "parameters": [
          {
            "description": "The ID of the List to modify.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ListUpdateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ListUpdateResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Update List.",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/lists/{id}/followers": {
      "get": {
        "description": "Returns a list of Users that follow a List by the provided List ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers"
        },
        "operationId": "listGetFollowers",
        "parameters": [
          {
            "description": "The ID of the List.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationTokenLong"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2ListsIdFollowersResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "list.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Returns User objects that follow a List by the provided List ID",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/lists/{id}/members": {
      "get": {
        "description": "Returns a list of Users that are members of a List by the provided List ID.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships"
        },
        "operationId": "listGetMembers",
        "parameters": [
          {
            "description": "The ID of the List.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationTokenLong"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2ListsIdMembersResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "list.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Returns User objects that are members of a List by the provided List ID.",
        "tags": [
          "Users"
        ]
      },
      "post": {
        "description": "Causes a User to become a member of a List.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/post-lists-id-members"
        },
        "operationId": "listAddMember",
        "parameters": [
          {
            "description": "The ID of the List for which to add a member.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ListAddUserRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ListMutateResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Add a List member",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/lists/{id}/members/{user_id}": {
      "delete": {
        "description": "Causes a User to be removed from the members of a List.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/delete-lists-id-members-user_id"
        },
        "operationId": "listRemoveMember",
        "parameters": [
          {
            "description": "The ID of the List to remove a member.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          },
          {
            "description": "The ID of User that will be removed from the List.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ListMutateResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Remove a List member",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/lists/{id}/tweets": {
      "get": {
        "description": "Returns a list of Tweets associated with the provided List ID.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets"
        },
        "operationId": "listsIdTweets",
        "parameters": [
          {
            "description": "The ID of the List.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2ListsIdTweetsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "list.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "List Tweets timeline by List ID.",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/openapi.json": {
      "get": {
        "description": "Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)",
        "operationId": "getOpenApiSpec",
        "parameters": [],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            },
            "description": "The request was successful"
          }
        },
        "summary": "Returns the OpenAPI Specification document.",
        "tags": [
          "General"
        ]
      }
    },
    "/2/spaces": {
      "get": {
        "description": "Returns a variety of information about the Spaces specified by the requested IDs",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces"
        },
        "operationId": "findSpacesByIds",
        "parameters": [
          {
            "description": "The list of Space IDs to return.",
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "items": {
                "description": "The unique identifier of this Space.",
                "example": "1SLjjRYNejbKM",
                "pattern": "^[a-zA-Z0-9]{1,13}$",
                "type": "string"
              },
              "maxItems": 100,
              "minItems": 1,
              "type": "array"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/SpaceFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/SpaceExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TopicFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2SpacesResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "space.read",
              "tweet.read",
              "users.read"
            ]
          }
        ],
        "summary": "Space lookup up Space IDs",
        "tags": [
          "Spaces"
        ]
      }
    },
    "/2/spaces/by/creator_ids": {
      "get": {
        "description": "Returns a variety of information about the Spaces created by the provided User IDs",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-by-creator-ids"
        },
        "operationId": "findSpacesByCreatorIds",
        "parameters": [
          {
            "description": "The IDs of Users to search through.",
            "in": "query",
            "name": "user_ids",
            "required": true,
            "schema": {
              "items": {
                "$ref": "#/components/schemas/UserId"
              },
              "maxItems": 100,
              "minItems": 1,
              "type": "array"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/SpaceFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/SpaceExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TopicFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2SpacesByCreatorIdsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "space.read",
              "tweet.read",
              "users.read"
            ]
          }
        ],
        "summary": "Space lookup by their creators",
        "tags": [
          "Spaces"
        ]
      }
    },
    "/2/spaces/search": {
      "get": {
        "description": "Returns Spaces that match the provided query.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search"
        },
        "operationId": "searchSpaces",
        "parameters": [
          {
            "description": "The search query.",
            "example": "crypto",
            "in": "query",
            "name": "query",
            "required": true,
            "schema": {
              "example": "crypto",
              "maxLength": 2048,
              "minLength": 1,
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "The state of Spaces to search for.",
            "in": "query",
            "name": "state",
            "required": false,
            "schema": {
              "default": "all",
              "enum": [
                "live",
                "scheduled",
                "all"
              ],
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "The number of results to return.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/SpaceFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/SpaceExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TopicFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2SpacesSearchResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "space.read",
              "tweet.read",
              "users.read"
            ]
          }
        ],
        "summary": "Search for Spaces",
        "tags": [
          "Spaces"
        ]
      }
    },
    "/2/spaces/{id}": {
      "get": {
        "description": "Returns a variety of information about the Space specified by the requested ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id"
        },
        "operationId": "findSpaceById",
        "parameters": [
          {
            "description": "The ID of the Space to be retrieved.",
            "example": "1YqKDqWqdPLsV",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "description": "The unique identifier of this Space.",
              "example": "1SLjjRYNejbKM",
              "pattern": "^[a-zA-Z0-9]{1,13}$",
              "type": "string"
            },
            "style": "simple"
          },
          {
            "$ref": "#/components/parameters/SpaceFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/SpaceExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TopicFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2SpacesIdResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "space.read",
              "tweet.read",
              "users.read"
            ]
          }
        ],
        "summary": "Space lookup by Space ID",
        "tags": [
          "Spaces"
        ]
      }
    },
    "/2/spaces/{id}/buyers": {
      "get": {
        "description": "Retrieves the list of Users who purchased a ticket to the given space",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-buyers"
        },
        "operationId": "spaceBuyers",
        "parameters": [
          {
            "description": "The ID of the Space to be retrieved.",
            "example": "1YqKDqWqdPLsV",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "description": "The unique identifier of this Space.",
              "example": "1SLjjRYNejbKM",
              "pattern": "^[a-zA-Z0-9]{1,13}$",
              "type": "string"
            },
            "style": "simple"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken32"
            },
            "style": "form"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2SpacesIdBuyersResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "space.read",
              "tweet.read",
              "users.read"
            ]
          }
        ],
        "summary": "Retrieve the list of Users who purchased a ticket to the given space",
        "tags": [
          "Spaces",
          "Tweets"
        ]
      }
    },
    "/2/spaces/{id}/tweets": {
      "get": {
        "description": "Retrieves Tweets shared in the specified Space.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-tweets"
        },
        "operationId": "spaceTweets",
        "parameters": [
          {
            "description": "The ID of the Space to be retrieved.",
            "example": "1YqKDqWqdPLsV",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "description": "The unique identifier of this Space.",
              "example": "1SLjjRYNejbKM",
              "pattern": "^[a-zA-Z0-9]{1,13}$",
              "type": "string"
            },
            "style": "simple"
          },
          {
            "description": "The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "example": 25,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2SpacesIdTweetsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "space.read",
              "tweet.read",
              "users.read"
            ]
          }
        ],
        "summary": "Retrieve Tweets from a Space.",
        "tags": [
          "Spaces",
          "Tweets"
        ]
      }
    },
    "/2/tweets": {
      "get": {
        "description": "Returns a variety of information about the Tweet specified by the requested ID.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets"
        },
        "operationId": "findTweetsById",
        "parameters": [
          {
            "description": "A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.",
            "explode": false,
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "items": {
                "$ref": "#/components/schemas/TweetId"
              },
              "maxItems": 100,
              "minItems": 1,
              "type": "array"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Tweet lookup by Tweet IDs",
        "tags": [
          "Tweets"
        ]
      },
      "post": {
        "description": "Causes the User to create a Tweet under the authorized account.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets"
        },
        "operationId": "createTweet",
        "parameters": [],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TweetCreateRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TweetCreateResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "tweet.read",
              "tweet.write",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Creation of a Tweet",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/tweets/compliance/stream": {
      "get": {
        "description": "Streams 100% of compliance data for Tweets",
        "operationId": "getTweetsComplianceStream",
        "parameters": [
          {
            "description": "The number of minutes of backfill requested.",
            "in": "query",
            "name": "backfill_minutes",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 5,
              "minimum": 0,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "The partition number.",
            "in": "query",
            "name": "partition",
            "required": true,
            "schema": {
              "format": "int32",
              "maximum": 4,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided.",
            "example": "2021-02-01T18:40:40.000Z",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided.",
            "example": "2021-02-14T18:40:40.000Z",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TweetComplianceStreamResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Tweets Compliance stream",
        "tags": [
          "Compliance"
        ],
        "x-twitter-streaming": true
      }
    },
    "/2/tweets/counts/all": {
      "get": {
        "description": "Returns Tweet Counts that match a search query.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all"
        },
        "operationId": "tweetCountsFullArchiveSearch",
        "parameters": [
          {
            "description": "One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.",
            "in": "query",
            "name": "query",
            "required": true,
            "schema": {
              "example": "(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet",
              "maxLength": 4096,
              "minLength": 1,
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.",
            "in": "query",
            "name": "since_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "Returns results with a Tweet ID less than (that is, older than) the specified ID.",
            "in": "query",
            "name": "until_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
            "in": "query",
            "name": "next_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "The granularity for the search counts results.",
            "in": "query",
            "name": "granularity",
            "required": false,
            "schema": {
              "default": "hour",
              "enum": [
                "minute",
                "hour",
                "day"
              ],
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/SearchCountFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsCountsAllResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Full archive search counts",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/tweets/counts/recent": {
      "get": {
        "description": "Returns Tweet Counts from the last 7 days that match a search query.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-recent"
        },
        "operationId": "tweetCountsRecentSearch",
        "parameters": [
          {
            "description": "One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.",
            "in": "query",
            "name": "query",
            "required": true,
            "schema": {
              "example": "(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet",
              "maxLength": 4096,
              "minLength": 1,
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.",
            "in": "query",
            "name": "since_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "Returns results with a Tweet ID less than (that is, older than) the specified ID.",
            "in": "query",
            "name": "until_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
            "in": "query",
            "name": "next_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "The granularity for the search counts results.",
            "in": "query",
            "name": "granularity",
            "required": false,
            "schema": {
              "default": "hour",
              "enum": [
                "minute",
                "hour",
                "day"
              ],
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/SearchCountFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsCountsRecentResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Recent search counts",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/tweets/firehose/stream": {
      "get": {
        "description": "Streams 100% of public Tweets.",
        "operationId": "getTweetsFirehoseStream",
        "parameters": [
          {
            "description": "The number of minutes of backfill requested.",
            "in": "query",
            "name": "backfill_minutes",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 5,
              "minimum": 0,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "The partition number.",
            "in": "query",
            "name": "partition",
            "required": true,
            "schema": {
              "format": "int32",
              "maximum": 20,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.",
            "example": "2021-02-14T18:40:40.000Z",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.",
            "example": "2021-02-14T18:40:40.000Z",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StreamingTweetResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Firehose stream",
        "tags": [
          "Tweets"
        ],
        "x-twitter-streaming": true
      }
    },
    "/2/tweets/label/stream": {
      "get": {
        "description": "Streams 100% of labeling events applied to Tweets",
        "operationId": "getTweetsLabelStream",
        "parameters": [
          {
            "description": "The number of minutes of backfill requested.",
            "in": "query",
            "name": "backfill_minutes",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 5,
              "minimum": 0,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet labels will be provided.",
            "example": "2021-02-01T18:40:40.000Z",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Tweet labels will be provided.",
            "example": "2021-02-01T18:40:40.000Z",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TweetLabelStreamResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Tweets Label stream",
        "tags": [
          "Compliance"
        ],
        "x-twitter-streaming": true
      }
    },
    "/2/tweets/sample/stream": {
      "get": {
        "description": "Streams a deterministic 1% of public Tweets.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/volume-streams/api-reference/get-tweets-sample-stream"
        },
        "operationId": "sampleStream",
        "parameters": [
          {
            "description": "The number of minutes of backfill requested.",
            "in": "query",
            "name": "backfill_minutes",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 5,
              "minimum": 0,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StreamingTweetResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Sample stream",
        "tags": [
          "Tweets"
        ],
        "x-twitter-streaming": true
      }
    },
    "/2/tweets/sample10/stream": {
      "get": {
        "description": "Streams a deterministic 10% of public Tweets.",
        "operationId": "getTweetsSample10Stream",
        "parameters": [
          {
            "description": "The number of minutes of backfill requested.",
            "in": "query",
            "name": "backfill_minutes",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 5,
              "minimum": 0,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "The partition number.",
            "in": "query",
            "name": "partition",
            "required": true,
            "schema": {
              "format": "int32",
              "maximum": 2,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.",
            "example": "2021-02-14T18:40:40.000Z",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.",
            "example": "2021-02-14T18:40:40.000Z",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsSample10StreamResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Sample 10% stream",
        "tags": [
          "Tweets"
        ],
        "x-twitter-streaming": true
      }
    },
    "/2/tweets/search/all": {
      "get": {
        "description": "Returns Tweets that match a search query.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all"
        },
        "operationId": "tweetsFullarchiveSearch",
        "parameters": [
          {
            "description": "One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.",
            "in": "query",
            "name": "query",
            "required": true,
            "schema": {
              "example": "(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet",
              "maxLength": 4096,
              "minLength": 1,
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.",
            "in": "query",
            "name": "since_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "Returns results with a Tweet ID less than (that is, older than) the specified ID.",
            "in": "query",
            "name": "until_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "The maximum number of search results to be returned by a request.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 10,
              "format": "int32",
              "maximum": 500,
              "minimum": 10,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
            "in": "query",
            "name": "next_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "This order in which to return results.",
            "in": "query",
            "name": "sort_order",
            "required": false,
            "schema": {
              "enum": [
                "recency",
                "relevancy"
              ],
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsSearchAllResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Full-archive search",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/tweets/search/recent": {
      "get": {
        "description": "Returns Tweets from the last 7 days that match a search query.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent"
        },
        "operationId": "tweetsRecentSearch",
        "parameters": [
          {
            "description": "One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.",
            "in": "query",
            "name": "query",
            "required": true,
            "schema": {
              "example": "(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet",
              "maxLength": 4096,
              "minLength": 1,
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.",
            "in": "query",
            "name": "since_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "Returns results with a Tweet ID less than (that is, older than) the specified ID.",
            "in": "query",
            "name": "until_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "The maximum number of search results to be returned by a request.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 10,
              "format": "int32",
              "maximum": 100,
              "minimum": 10,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
            "in": "query",
            "name": "next_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "This order in which to return results.",
            "in": "query",
            "name": "sort_order",
            "required": false,
            "schema": {
              "enum": [
                "recency",
                "relevancy"
              ],
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsSearchRecentResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Recent search",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/tweets/search/stream": {
      "get": {
        "description": "Streams Tweets matching the stream's active rule set.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream"
        },
        "operationId": "searchStream",
        "parameters": [
          {
            "description": "The number of minutes of backfill requested.",
            "in": "query",
            "name": "backfill_minutes",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 5,
              "minimum": 0,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided.",
            "example": "2021-02-01T18:40:40.000Z",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.",
            "example": "2021-02-14T18:40:40.000Z",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FilteredStreamingTweetResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Filtered stream",
        "tags": [
          "Tweets"
        ],
        "x-twitter-streaming": true
      }
    },
    "/2/tweets/search/stream/rules": {
      "get": {
        "description": "Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules"
        },
        "operationId": "getRules",
        "parameters": [
          {
            "description": "A comma-separated list of Rule IDs.",
            "in": "query",
            "name": "ids",
            "required": false,
            "schema": {
              "items": {
                "$ref": "#/components/schemas/RuleId"
              },
              "type": "array"
            },
            "style": "form"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 1000,
              "format": "int32",
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This value is populated by passing the 'next_token' returned in a request to paginate through results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "maxLength": 16,
              "minLength": 16,
              "type": "string"
            },
            "style": "form"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RulesLookupResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Rules lookup",
        "tags": [
          "Tweets"
        ]
      },
      "post": {
        "description": "Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules"
        },
        "operationId": "addOrDeleteRules",
        "parameters": [
          {
            "description": "Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes.",
            "in": "query",
            "name": "dry_run",
            "required": false,
            "schema": {
              "type": "boolean"
            },
            "style": "form"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AddOrDeleteRulesRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddOrDeleteRulesResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Add/Delete rules",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/tweets/{id}": {
      "delete": {
        "description": "Delete specified Tweet (in the path) by ID.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/delete-tweets-id"
        },
        "operationId": "deleteTweetById",
        "parameters": [
          {
            "description": "The ID of the Tweet to be deleted.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TweetDeleteResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "tweet.read",
              "tweet.write",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Tweet delete by Tweet ID",
        "tags": [
          "Tweets"
        ]
      },
      "get": {
        "description": "Returns a variety of information about the Tweet specified by the requested ID.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id"
        },
        "operationId": "findTweetById",
        "parameters": [
          {
            "description": "A single Tweet ID.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "simple"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsIdResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Tweet lookup by Tweet ID",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/tweets/{id}/liking_users": {
      "get": {
        "description": "Returns a list of Users that have liked the provided Tweet ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users"
        },
        "operationId": "tweetsIdLikingUsers",
        "parameters": [
          {
            "description": "A single Tweet ID.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsIdLikingUsersResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "like.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Returns User objects that have liked the provided Tweet ID",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/tweets/{id}/quote_tweets": {
      "get": {
        "description": "Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/quote-tweets/api-reference/get-tweets-id-quote_tweets"
        },
        "operationId": "findTweetsThatQuoteATweet",
        "parameters": [
          {
            "description": "A single Tweet ID.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results to be returned.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 10,
              "format": "int32",
              "maximum": 100,
              "minimum": 10,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "The set of entities to exclude (e.g. 'replies' or 'retweets').",
            "explode": false,
            "in": "query",
            "name": "exclude",
            "required": false,
            "schema": {
              "example": [
                "replies",
                "retweets"
              ],
              "items": {
                "enum": [
                  "replies",
                  "retweets"
                ],
                "type": "string"
              },
              "minItems": 1,
              "type": "array",
              "uniqueItems": true
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsIdQuoteTweetsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Retrieve Tweets that quote a Tweet.",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/tweets/{id}/retweeted_by": {
      "get": {
        "description": "Returns a list of Users that have retweeted the provided Tweet ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by"
        },
        "operationId": "tweetsIdRetweetingUsers",
        "parameters": [
          {
            "description": "A single Tweet ID.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2TweetsIdRetweetedByResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Returns User objects that have retweeted the provided Tweet ID",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/tweets/{tweet_id}/hidden": {
      "put": {
        "description": "Hides or unhides a reply to an owned conversation.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden"
        },
        "operationId": "hideReplyById",
        "parameters": [
          {
            "description": "The ID of the reply that you want to hide or unhide.",
            "in": "path",
            "name": "tweet_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TweetHideRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TweetHideResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "tweet.moderate.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Hide replies",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/users": {
      "get": {
        "description": "This endpoint returns information about Users. Specify Users by their ID.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users"
        },
        "operationId": "findUsersById",
        "parameters": [
          {
            "description": "A list of User IDs, comma-separated. You can specify up to 100 IDs.",
            "example": "2244994945,6253282,12",
            "explode": false,
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "items": {
                "$ref": "#/components/schemas/UserId"
              },
              "maxItems": 100,
              "minItems": 1,
              "type": "array"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "User lookup by IDs",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/by": {
      "get": {
        "description": "This endpoint returns information about Users. Specify Users by their username.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by"
        },
        "operationId": "findUsersByUsername",
        "parameters": [
          {
            "description": "A list of usernames, comma-separated.",
            "explode": false,
            "in": "query",
            "name": "usernames",
            "required": true,
            "schema": {
              "example": "TwitterDev,TwitterAPI",
              "items": {
                "description": "The Twitter handle (screen name) of this User.",
                "pattern": "^[A-Za-z0-9_]{1,15}$",
                "type": "string"
              },
              "maxItems": 100,
              "minItems": 1,
              "type": "array"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersByResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "User lookup by usernames",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/by/username/{username}": {
      "get": {
        "description": "This endpoint returns information about a User. Specify User by username.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username"
        },
        "operationId": "findUserByUsername",
        "parameters": [
          {
            "description": "A username.",
            "example": "TwitterDev",
            "in": "path",
            "name": "username",
            "required": true,
            "schema": {
              "pattern": "^[A-Za-z0-9_]{1,15}$",
              "type": "string"
            },
            "style": "simple"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersByUsernameUsernameResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "User lookup by username",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/compliance/stream": {
      "get": {
        "description": "Streams 100% of compliance data for Users",
        "operationId": "getUsersComplianceStream",
        "parameters": [
          {
            "description": "The number of minutes of backfill requested.",
            "in": "query",
            "name": "backfill_minutes",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 5,
              "minimum": 0,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "The partition number.",
            "in": "query",
            "name": "partition",
            "required": true,
            "schema": {
              "format": "int32",
              "maximum": 4,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided.",
            "example": "2021-02-01T18:40:40.000Z",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided.",
            "example": "2021-02-01T18:40:40.000Z",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserComplianceStreamResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          }
        ],
        "summary": "Users Compliance stream",
        "tags": [
          "Compliance"
        ],
        "x-twitter-streaming": true
      }
    },
    "/2/users/me": {
      "get": {
        "description": "This endpoint returns information about the requesting User.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me"
        },
        "operationId": "findMyUser",
        "parameters": [
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersMeResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "User lookup me",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/{id}": {
      "get": {
        "description": "This endpoint returns information about a User. Specify User by ID.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id"
        },
        "operationId": "findUserById",
        "parameters": [
          {
            "description": "The ID of the User to lookup.",
            "example": "2244994945",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "User lookup by ID",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/{id}/blocking": {
      "get": {
        "description": "Returns a list of Users that are blocked by the provided User ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking"
        },
        "operationId": "usersIdBlocking",
        "parameters": [
          {
            "description": "The ID of the authenticated source User for whom to return results.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken32"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdBlockingResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "block.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Returns User objects that are blocked by provided User ID",
        "tags": [
          "Users"
        ]
      },
      "post": {
        "description": "Causes the User (in the path) to block the target User. The User (in the path) must match the User context authorizing the request",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking"
        },
        "operationId": "usersIdBlock",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to block the target User.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BlockUserRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BlockUserMutationResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "block.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Block User by User ID",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/{id}/bookmarks": {
      "get": {
        "description": "Returns Tweet objects that have been bookmarked by the requesting User",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/get-users-id-bookmarks"
        },
        "operationId": "getUsersIdBookmarks",
        "parameters": [
          {
            "description": "The ID of the authenticated source User for whom to return results.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdBookmarksResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "bookmark.read",
              "tweet.read",
              "users.read"
            ]
          }
        ],
        "summary": "Bookmarks by User",
        "tags": [
          "Bookmarks"
        ]
      },
      "post": {
        "description": "Adds a Tweet (ID in the body) to the requesting User's (in the path) bookmarks",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/post-users-id-bookmarks"
        },
        "operationId": "postUsersIdBookmarks",
        "parameters": [
          {
            "description": "The ID of the authenticated source User for whom to add bookmarks.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/BookmarkAddRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BookmarkMutationResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "bookmark.write",
              "tweet.read",
              "users.read"
            ]
          }
        ],
        "summary": "Add Tweet to Bookmarks",
        "tags": [
          "Bookmarks"
        ]
      }
    },
    "/2/users/{id}/bookmarks/{tweet_id}": {
      "delete": {
        "description": "Removes a Tweet from the requesting User's bookmarked Tweets.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/delete-users-id-bookmarks-tweet_id"
        },
        "operationId": "usersIdBookmarksDelete",
        "parameters": [
          {
            "description": "The ID of the authenticated source User whose bookmark is to be removed.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The ID of the Tweet that the source User is removing from bookmarks.",
            "in": "path",
            "name": "tweet_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BookmarkMutationResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "bookmark.write",
              "tweet.read",
              "users.read"
            ]
          }
        ],
        "summary": "Remove a bookmarked Tweet",
        "tags": [
          "Bookmarks"
        ]
      }
    },
    "/2/users/{id}/followed_lists": {
      "get": {
        "description": "Returns a User's followed Lists.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-users-id-followed_lists"
        },
        "operationId": "userFollowedLists",
        "parameters": [
          {
            "description": "The ID of the User to lookup.",
            "example": "2244994945",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationTokenLong"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/ListFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/ListExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdFollowedListsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "list.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Get User's Followed Lists",
        "tags": [
          "Lists"
        ]
      },
      "post": {
        "description": "Causes a User to follow a List.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/post-users-id-followed-lists"
        },
        "operationId": "listUserFollow",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that will follow the List.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ListFollowedRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ListFollowedResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Follow a List",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/users/{id}/followed_lists/{list_id}": {
      "delete": {
        "description": "Causes a User to unfollow a List.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/delete-users-id-followed-lists-list_id"
        },
        "operationId": "listUserUnfollow",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that will unfollow the List.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The ID of the List to unfollow.",
            "in": "path",
            "name": "list_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ListFollowedResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Unfollow a List",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/users/{id}/followers": {
      "get": {
        "description": "Returns a list of Users who are followers of the specified User ID.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers"
        },
        "operationId": "usersIdFollowers",
        "parameters": [
          {
            "description": "The ID of the User to lookup.",
            "example": "2244994945",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken32"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdFollowersResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "follows.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Followers by User ID",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/{id}/following": {
      "get": {
        "description": "Returns a list of Users that are being followed by the provided User ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following"
        },
        "operationId": "usersIdFollowing",
        "parameters": [
          {
            "description": "The ID of the User to lookup.",
            "example": "2244994945",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken32"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdFollowingResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "follows.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Following by User ID",
        "tags": [
          "Users"
        ]
      },
      "post": {
        "description": "Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following"
        },
        "operationId": "usersIdFollow",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to follow the target User.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UsersFollowingCreateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UsersFollowingCreateResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "follows.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Follow User",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/{id}/liked_tweets": {
      "get": {
        "description": "Returns a list of Tweets liked by the provided User ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets"
        },
        "operationId": "usersIdLikedTweets",
        "parameters": [
          {
            "description": "The ID of the User to lookup.",
            "example": "2244994945",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 100,
              "minimum": 5,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdLikedTweetsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "like.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Returns Tweet objects liked by the provided User ID",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/users/{id}/likes": {
      "post": {
        "description": "Causes the User (in the path) to like the specified Tweet. The User in the path must match the User context authorizing the request.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes"
        },
        "operationId": "usersIdLike",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to like the Tweet.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UsersLikesCreateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UsersLikesCreateResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "like.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Causes the User (in the path) to like the specified Tweet",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/users/{id}/likes/{tweet_id}": {
      "delete": {
        "description": "Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-id-likes-tweet_id"
        },
        "operationId": "usersIdUnlike",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to unlike the Tweet.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The ID of the Tweet that the User is requesting to unlike.",
            "in": "path",
            "name": "tweet_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UsersLikesDeleteResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "like.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Causes the User (in the path) to unlike the specified Tweet",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/users/{id}/list_memberships": {
      "get": {
        "description": "Get a User's List Memberships.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships"
        },
        "operationId": "getUserListMemberships",
        "parameters": [
          {
            "description": "The ID of the User to lookup.",
            "example": "2244994945",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationTokenLong"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/ListFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/ListExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdListMembershipsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "list.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Get a User's List Memberships",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/users/{id}/mentions": {
      "get": {
        "description": "Returns Tweet objects that mention username associated to the provided User ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions"
        },
        "operationId": "usersIdMentions",
        "parameters": [
          {
            "description": "The ID of the User to lookup.",
            "example": "2244994945",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "description": "The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.",
            "in": "query",
            "name": "since_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.",
            "example": "1346889436626259968",
            "in": "query",
            "name": "until_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 100,
              "minimum": 5,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.",
            "example": "2021-02-01T18:40:40.000Z",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.",
            "example": "2021-02-14T18:40:40.000Z",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdMentionsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "User mention timeline by User ID",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/users/{id}/muting": {
      "get": {
        "description": "Returns a list of Users that are muted by the provided User ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting"
        },
        "operationId": "usersIdMuting",
        "parameters": [
          {
            "description": "The ID of the authenticated source User for whom to return results.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationTokenLong"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdMutingResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "mute.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Returns User objects that are muted by the provided User ID",
        "tags": [
          "Users"
        ]
      },
      "post": {
        "description": "Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting"
        },
        "operationId": "usersIdMute",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to mute the target User.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/MuteUserRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MuteUserMutationResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "mute.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Mute User by User ID.",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/{id}/owned_lists": {
      "get": {
        "description": "Get a User's Owned Lists.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists"
        },
        "operationId": "listUserOwnedLists",
        "parameters": [
          {
            "description": "The ID of the User to lookup.",
            "example": "2244994945",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "default": 100,
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get a specified 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationTokenLong"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/ListFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/ListExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdOwnedListsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "list.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Get a User's Owned Lists.",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/users/{id}/pinned_lists": {
      "get": {
        "description": "Get a User's Pinned Lists.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists"
        },
        "operationId": "listUserPinnedLists",
        "parameters": [
          {
            "description": "The ID of the authenticated source User for whom to return results.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "$ref": "#/components/parameters/ListFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/ListExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdPinnedListsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.read",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Get a User's Pinned Lists",
        "tags": [
          "Lists"
        ]
      },
      "post": {
        "description": "Causes a User to pin a List.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/post-users-id-pinned-lists"
        },
        "operationId": "listUserPin",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that will pin the List.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ListPinnedRequest"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ListPinnedResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Pin a List",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/users/{id}/pinned_lists/{list_id}": {
      "delete": {
        "description": "Causes a User to remove a pinned List.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/delete-users-id-pinned-lists-list_id"
        },
        "operationId": "listUserUnpin",
        "parameters": [
          {
            "description": "The ID of the authenticated source User for whom to return results.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The ID of the List to unpin.",
            "in": "path",
            "name": "list_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/ListId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ListUnpinResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "list.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Unpin a List",
        "tags": [
          "Lists"
        ]
      }
    },
    "/2/users/{id}/retweets": {
      "post": {
        "description": "Causes the User (in the path) to retweet the specified Tweet. The User in the path must match the User context authorizing the request.",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets"
        },
        "operationId": "usersIdRetweets",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to retweet the Tweet.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UsersRetweetsCreateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UsersRetweetsCreateResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "tweet.read",
              "tweet.write",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Causes the User (in the path) to retweet the specified Tweet.",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/users/{id}/retweets/{source_tweet_id}": {
      "delete": {
        "description": "Causes the User (in the path) to unretweet the specified Tweet. The User must match the User context authorizing the request",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/delete-users-id-retweets-tweet_id"
        },
        "operationId": "usersIdUnretweets",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to retweet the Tweet.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The ID of the Tweet that the User is requesting to unretweet.",
            "in": "path",
            "name": "source_tweet_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UsersRetweetsDeleteResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "tweet.read",
              "tweet.write",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Causes the User (in the path) to unretweet the specified Tweet",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/users/{id}/timelines/reverse_chronological": {
      "get": {
        "description": "Returns Tweet objects that appears in the provided User ID's home timeline",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-reverse-chronological"
        },
        "operationId": "usersIdTimeline",
        "parameters": [
          {
            "description": "The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.",
            "example": "791775337160081409",
            "in": "query",
            "name": "since_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.",
            "example": "1346889436626259968",
            "in": "query",
            "name": "until_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "The set of entities to exclude (e.g. 'replies' or 'retweets').",
            "explode": false,
            "in": "query",
            "name": "exclude",
            "required": false,
            "schema": {
              "example": [
                "replies",
                "retweets"
              ],
              "items": {
                "enum": [
                  "replies",
                  "retweets"
                ],
                "type": "string"
              },
              "type": "array",
              "uniqueItems": true
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.",
            "example": "2021-02-01T18:40:40.000Z",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.",
            "example": "2021-02-14T18:40:40.000Z",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdTimelinesReverseChronologicalResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "User home timeline by User ID",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/users/{id}/tweets": {
      "get": {
        "description": "Returns a list of Tweets authored by the provided User ID",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets"
        },
        "operationId": "usersIdTweets",
        "parameters": [
          {
            "description": "The ID of the User to lookup.",
            "example": "2244994945",
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          },
          {
            "description": "The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.",
            "example": "791775337160081409",
            "in": "query",
            "name": "since_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.",
            "example": "1346889436626259968",
            "in": "query",
            "name": "until_id",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/TweetId"
            },
            "style": "form"
          },
          {
            "description": "The maximum number of results.",
            "in": "query",
            "name": "max_results",
            "required": false,
            "schema": {
              "format": "int32",
              "maximum": 100,
              "minimum": 5,
              "type": "integer"
            },
            "style": "form"
          },
          {
            "description": "This parameter is used to get the next 'page' of results.",
            "in": "query",
            "name": "pagination_token",
            "required": false,
            "schema": {
              "$ref": "#/components/schemas/PaginationToken36"
            },
            "style": "form"
          },
          {
            "description": "The set of entities to exclude (e.g. 'replies' or 'retweets').",
            "explode": false,
            "in": "query",
            "name": "exclude",
            "required": false,
            "schema": {
              "example": [
                "replies",
                "retweets"
              ],
              "items": {
                "enum": [
                  "replies",
                  "retweets"
                ],
                "type": "string"
              },
              "minItems": 1,
              "type": "array",
              "uniqueItems": true
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.",
            "example": "2021-02-01T18:40:40.000Z",
            "in": "query",
            "name": "start_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "description": "YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.",
            "example": "2021-02-14T18:40:40.000Z",
            "in": "query",
            "name": "end_time",
            "required": false,
            "schema": {
              "format": "date-time",
              "type": "string"
            },
            "style": "form"
          },
          {
            "$ref": "#/components/parameters/TweetFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/TweetExpansionsParameter"
          },
          {
            "$ref": "#/components/parameters/MediaFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PollFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/UserFieldsParameter"
          },
          {
            "$ref": "#/components/parameters/PlaceFieldsParameter"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Get2UsersIdTweetsResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "BearerToken": []
          },
          {
            "OAuth2UserToken": [
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "User Tweets timeline by User ID",
        "tags": [
          "Tweets"
        ]
      }
    },
    "/2/users/{source_user_id}/blocking/{target_user_id}": {
      "delete": {
        "description": "Causes the source User to unblock the target User. The source User must match the User context authorizing the request",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking"
        },
        "operationId": "usersIdUnblock",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to unblock the target User.",
            "in": "path",
            "name": "source_user_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The ID of the User that the source User is requesting to unblock.",
            "in": "path",
            "name": "target_user_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BlockUserMutationResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "block.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Unblock User by User ID",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/{source_user_id}/following/{target_user_id}": {
      "delete": {
        "description": "Causes the source User to unfollow the target User. The source User must match the User context authorizing the request",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/delete-users-source_id-following"
        },
        "operationId": "usersIdUnfollow",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to unfollow the target User.",
            "in": "path",
            "name": "source_user_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The ID of the User that the source User is requesting to unfollow.",
            "in": "path",
            "name": "target_user_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UsersFollowingDeleteResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "follows.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Unfollow User",
        "tags": [
          "Users"
        ]
      }
    },
    "/2/users/{source_user_id}/muting/{target_user_id}": {
      "delete": {
        "description": "Causes the source User to unmute the target User. The source User must match the User context authorizing the request",
        "externalDocs": {
          "url": "https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting"
        },
        "operationId": "usersIdUnmute",
        "parameters": [
          {
            "description": "The ID of the authenticated source User that is requesting to unmute the target User.",
            "in": "path",
            "name": "source_user_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserIdMatchesAuthenticatedUser"
            },
            "style": "simple"
          },
          {
            "description": "The ID of the User that the source User is requesting to unmute.",
            "in": "path",
            "name": "target_user_id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/UserId"
            },
            "style": "simple"
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/MuteUserMutationResponse"
                }
              }
            },
            "description": "The request has succeeded."
          },
          "default": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              },
              "application/problem+json": {
                "schema": {
                  "$ref": "#/components/schemas/Problem"
                }
              }
            },
            "description": "The request has failed."
          }
        },
        "security": [
          {
            "OAuth2UserToken": [
              "mute.write",
              "tweet.read",
              "users.read"
            ]
          },
          {
            "UserToken": []
          }
        ],
        "summary": "Unmute User by User ID",
        "tags": [
          "Users"
        ]
      }
    }
  },
  "components": {
    "parameters": {
      "ComplianceJobFieldsParameter": {
        "description": "A comma separated list of ComplianceJob fields to display.",
        "explode": false,
        "in": "query",
        "name": "compliance_job.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a ComplianceJob object.",
          "example": [
            "created_at",
            "download_expires_at",
            "download_url",
            "id",
            "name",
            "resumable",
            "status",
            "type",
            "upload_expires_at",
            "upload_url"
          ],
          "items": {
            "enum": [
              "created_at",
              "download_expires_at",
              "download_url",
              "id",
              "name",
              "resumable",
              "status",
              "type",
              "upload_expires_at",
              "upload_url"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "DmConversationFieldsParameter": {
        "description": "A comma separated list of DmConversation fields to display.",
        "explode": false,
        "in": "query",
        "name": "dm_conversation.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a DmConversation object.",
          "example": [
            "id"
          ],
          "items": {
            "enum": [
              "id"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "DmEventExpansionsParameter": {
        "description": "A comma separated list of fields to expand.",
        "explode": false,
        "in": "query",
        "name": "expansions",
        "schema": {
          "description": "The list of fields you can expand for a [DmEvent](#DmEvent) object. If the field has an ID, it can be expanded into a full object.",
          "example": [
            "attachments.media_keys",
            "participant_ids",
            "referenced_tweets.id",
            "sender_id"
          ],
          "items": {
            "enum": [
              "attachments.media_keys",
              "participant_ids",
              "referenced_tweets.id",
              "sender_id"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "DmEventFieldsParameter": {
        "description": "A comma separated list of DmEvent fields to display.",
        "explode": false,
        "in": "query",
        "name": "dm_event.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a DmEvent object.",
          "example": [
            "attachments",
            "created_at",
            "dm_conversation_id",
            "event_type",
            "id",
            "participant_ids",
            "referenced_tweets",
            "sender_id",
            "text"
          ],
          "items": {
            "enum": [
              "attachments",
              "created_at",
              "dm_conversation_id",
              "event_type",
              "id",
              "participant_ids",
              "referenced_tweets",
              "sender_id",
              "text"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "ListExpansionsParameter": {
        "description": "A comma separated list of fields to expand.",
        "explode": false,
        "in": "query",
        "name": "expansions",
        "schema": {
          "description": "The list of fields you can expand for a [List](#List) object. If the field has an ID, it can be expanded into a full object.",
          "example": [
            "owner_id"
          ],
          "items": {
            "enum": [
              "owner_id"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "ListFieldsParameter": {
        "description": "A comma separated list of List fields to display.",
        "explode": false,
        "in": "query",
        "name": "list.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a List object.",
          "example": [
            "created_at",
            "description",
            "follower_count",
            "id",
            "member_count",
            "name",
            "owner_id",
            "private"
          ],
          "items": {
            "enum": [
              "created_at",
              "description",
              "follower_count",
              "id",
              "member_count",
              "name",
              "owner_id",
              "private"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "MediaFieldsParameter": {
        "description": "A comma separated list of Media fields to display.",
        "explode": false,
        "in": "query",
        "name": "media.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a Media object.",
          "example": [
            "alt_text",
            "duration_ms",
            "height",
            "media_key",
            "non_public_metrics",
            "organic_metrics",
            "preview_image_url",
            "promoted_metrics",
            "public_metrics",
            "type",
            "url",
            "variants",
            "width"
          ],
          "items": {
            "enum": [
              "alt_text",
              "duration_ms",
              "height",
              "media_key",
              "non_public_metrics",
              "organic_metrics",
              "preview_image_url",
              "promoted_metrics",
              "public_metrics",
              "type",
              "url",
              "variants",
              "width"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "PlaceFieldsParameter": {
        "description": "A comma separated list of Place fields to display.",
        "explode": false,
        "in": "query",
        "name": "place.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a Place object.",
          "example": [
            "contained_within",
            "country",
            "country_code",
            "full_name",
            "geo",
            "id",
            "name",
            "place_type"
          ],
          "items": {
            "enum": [
              "contained_within",
              "country",
              "country_code",
              "full_name",
              "geo",
              "id",
              "name",
              "place_type"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "PollFieldsParameter": {
        "description": "A comma separated list of Poll fields to display.",
        "explode": false,
        "in": "query",
        "name": "poll.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a Poll object.",
          "example": [
            "duration_minutes",
            "end_datetime",
            "id",
            "options",
            "voting_status"
          ],
          "items": {
            "enum": [
              "duration_minutes",
              "end_datetime",
              "id",
              "options",
              "voting_status"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "SearchCountFieldsParameter": {
        "description": "A comma separated list of SearchCount fields to display.",
        "explode": false,
        "in": "query",
        "name": "search_count.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a SearchCount object.",
          "example": [
            "end",
            "start",
            "tweet_count"
          ],
          "items": {
            "enum": [
              "end",
              "start",
              "tweet_count"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "SpaceExpansionsParameter": {
        "description": "A comma separated list of fields to expand.",
        "explode": false,
        "in": "query",
        "name": "expansions",
        "schema": {
          "description": "The list of fields you can expand for a [Space](#Space) object. If the field has an ID, it can be expanded into a full object.",
          "example": [
            "creator_id",
            "host_ids",
            "invited_user_ids",
            "speaker_ids",
            "topic_ids"
          ],
          "items": {
            "enum": [
              "creator_id",
              "host_ids",
              "invited_user_ids",
              "speaker_ids",
              "topic_ids"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "SpaceFieldsParameter": {
        "description": "A comma separated list of Space fields to display.",
        "explode": false,
        "in": "query",
        "name": "space.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a Space object.",
          "example": [
            "created_at",
            "creator_id",
            "ended_at",
            "host_ids",
            "id",
            "invited_user_ids",
            "is_ticketed",
            "lang",
            "participant_count",
            "scheduled_start",
            "speaker_ids",
            "started_at",
            "state",
            "subscriber_count",
            "title",
            "topic_ids",
            "updated_at"
          ],
          "items": {
            "enum": [
              "created_at",
              "creator_id",
              "ended_at",
              "host_ids",
              "id",
              "invited_user_ids",
              "is_ticketed",
              "lang",
              "participant_count",
              "scheduled_start",
              "speaker_ids",
              "started_at",
              "state",
              "subscriber_count",
              "title",
              "topic_ids",
              "updated_at"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "TopicFieldsParameter": {
        "description": "A comma separated list of Topic fields to display.",
        "explode": false,
        "in": "query",
        "name": "topic.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a Topic object.",
          "example": [
            "description",
            "id",
            "name"
          ],
          "items": {
            "enum": [
              "description",
              "id",
              "name"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "TweetExpansionsParameter": {
        "description": "A comma separated list of fields to expand.",
        "explode": false,
        "in": "query",
        "name": "expansions",
        "schema": {
          "description": "The list of fields you can expand for a [Tweet](#Tweet) object. If the field has an ID, it can be expanded into a full object.",
          "example": [
            "attachments.media_keys",
            "attachments.poll_ids",
            "author_id",
            "edit_history_tweet_ids",
            "entities.mentions.username",
            "geo.place_id",
            "in_reply_to_user_id",
            "referenced_tweets.id",
            "referenced_tweets.id.author_id"
          ],
          "items": {
            "enum": [
              "attachments.media_keys",
              "attachments.poll_ids",
              "author_id",
              "edit_history_tweet_ids",
              "entities.mentions.username",
              "geo.place_id",
              "in_reply_to_user_id",
              "referenced_tweets.id",
              "referenced_tweets.id.author_id"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "TweetFieldsParameter": {
        "description": "A comma separated list of Tweet fields to display.",
        "explode": false,
        "in": "query",
        "name": "tweet.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a Tweet object.",
          "example": [
            "attachments",
            "author_id",
            "context_annotations",
            "conversation_id",
            "created_at",
            "edit_controls",
            "edit_history_tweet_ids",
            "entities",
            "geo",
            "id",
            "in_reply_to_user_id",
            "lang",
            "non_public_metrics",
            "organic_metrics",
            "possibly_sensitive",
            "promoted_metrics",
            "public_metrics",
            "referenced_tweets",
            "reply_settings",
            "source",
            "text",
            "withheld"
          ],
          "items": {
            "enum": [
              "attachments",
              "author_id",
              "context_annotations",
              "conversation_id",
              "created_at",
              "edit_controls",
              "edit_history_tweet_ids",
              "entities",
              "geo",
              "id",
              "in_reply_to_user_id",
              "lang",
              "non_public_metrics",
              "organic_metrics",
              "possibly_sensitive",
              "promoted_metrics",
              "public_metrics",
              "referenced_tweets",
              "reply_settings",
              "source",
              "text",
              "withheld"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "UserExpansionsParameter": {
        "description": "A comma separated list of fields to expand.",
        "explode": false,
        "in": "query",
        "name": "expansions",
        "schema": {
          "description": "The list of fields you can expand for a [User](#User) object. If the field has an ID, it can be expanded into a full object.",
          "example": [
            "pinned_tweet_id"
          ],
          "items": {
            "enum": [
              "pinned_tweet_id"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      },
      "UserFieldsParameter": {
        "description": "A comma separated list of User fields to display.",
        "explode": false,
        "in": "query",
        "name": "user.fields",
        "required": false,
        "schema": {
          "description": "The fields available for a User object.",
          "example": [
            "created_at",
            "description",
            "entities",
            "id",
            "location",
            "name",
            "pinned_tweet_id",
            "profile_image_url",
            "protected",
            "public_metrics",
            "url",
            "username",
            "verified",
            "verified_type",
            "withheld"
          ],
          "items": {
            "enum": [
              "created_at",
              "description",
              "entities",
              "id",
              "location",
              "name",
              "pinned_tweet_id",
              "profile_image_url",
              "protected",
              "public_metrics",
              "url",
              "username",
              "verified",
              "verified_type",
              "withheld"
            ],
            "type": "string"
          },
          "minItems": 1,
          "type": "array",
          "uniqueItems": true
        },
        "style": "form"
      }
    },
    "schemas": {
      "AddOrDeleteRulesRequest": {
        "oneOf": [
          {
            "$ref": "#/components/schemas/AddRulesRequest"
          },
          {
            "$ref": "#/components/schemas/DeleteRulesRequest"
          }
        ]
      },
      "AddOrDeleteRulesResponse": {
        "description": "A response from modifying user-specified stream filtering rules.",
        "properties": {
          "data": {
            "description": "All user-specified stream filtering rules that were created.",
            "items": {
              "$ref": "#/components/schemas/Rule"
            },
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "meta": {
            "$ref": "#/components/schemas/RulesResponseMetadata"
          }
        },
        "required": [
          "meta"
        ],
        "type": "object"
      },
      "AddRulesRequest": {
        "description": "A request to add a user-specified stream filtering rule.",
        "properties": {
          "add": {
            "items": {
              "$ref": "#/components/schemas/RuleNoId"
            },
            "type": "array"
          }
        },
        "required": [
          "add"
        ],
        "type": "object"
      },
      "Aggregate": {
        "description": "The sum of results returned in this response.",
        "format": "int32",
        "type": "integer"
      },
      "AnimatedGif": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Media"
          },
          {
            "properties": {
              "preview_image_url": {
                "format": "uri",
                "type": "string"
              },
              "variants": {
                "$ref": "#/components/schemas/Variants"
              }
            },
            "type": "object"
          }
        ]
      },
      "BlockUserMutationResponse": {
        "properties": {
          "data": {
            "properties": {
              "blocking": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "BlockUserRequest": {
        "properties": {
          "target_user_id": {
            "$ref": "#/components/schemas/UserId"
          }
        },
        "required": [
          "target_user_id"
        ],
        "type": "object"
      },
      "BookmarkAddRequest": {
        "properties": {
          "tweet_id": {
            "$ref": "#/components/schemas/TweetId"
          }
        },
        "required": [
          "tweet_id"
        ],
        "type": "object"
      },
      "BookmarkMutationResponse": {
        "properties": {
          "data": {
            "properties": {
              "bookmarked": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "CashtagEntity": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityIndicesInclusiveExclusive"
          },
          {
            "$ref": "#/components/schemas/CashtagFields"
          }
        ]
      },
      "CashtagFields": {
        "description": "Represent the portion of text recognized as a Cashtag, and its start and end position within the text.",
        "properties": {
          "tag": {
            "example": "TWTR",
            "type": "string"
          }
        },
        "required": [
          "tag"
        ],
        "type": "object"
      },
      "ClientDisconnectedProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          }
        ],
        "description": "Your client has gone away."
      },
      "ClientForbiddenProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "reason": {
                "enum": [
                  "official-client-forbidden",
                  "client-not-enrolled"
                ],
                "type": "string"
              },
              "registration_url": {
                "format": "uri",
                "type": "string"
              }
            },
            "type": "object"
          }
        ],
        "description": "A problem that indicates your client is forbidden from making this request."
      },
      "ComplianceJob": {
        "properties": {
          "created_at": {
            "$ref": "#/components/schemas/CreatedAt"
          },
          "download_expires_at": {
            "$ref": "#/components/schemas/DownloadExpiration"
          },
          "download_url": {
            "$ref": "#/components/schemas/DownloadUrl"
          },
          "id": {
            "$ref": "#/components/schemas/JobId"
          },
          "name": {
            "$ref": "#/components/schemas/ComplianceJobName"
          },
          "status": {
            "$ref": "#/components/schemas/ComplianceJobStatus"
          },
          "type": {
            "$ref": "#/components/schemas/ComplianceJobType"
          },
          "upload_expires_at": {
            "$ref": "#/components/schemas/UploadExpiration"
          },
          "upload_url": {
            "$ref": "#/components/schemas/UploadUrl"
          }
        },
        "required": [
          "id",
          "type",
          "created_at",
          "upload_url",
          "download_url",
          "upload_expires_at",
          "download_expires_at",
          "status"
        ],
        "type": "object"
      },
      "ComplianceJobName": {
        "description": "User-provided name for a compliance job.",
        "example": "my-job",
        "maxLength": 64,
        "type": "string"
      },
      "ComplianceJobStatus": {
        "description": "Status of a compliance job.",
        "enum": [
          "created",
          "in_progress",
          "failed",
          "complete",
          "expired"
        ],
        "type": "string"
      },
      "ComplianceJobType": {
        "description": "Type of compliance job to list.",
        "enum": [
          "tweets",
          "users"
        ],
        "type": "string"
      },
      "ConflictProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          }
        ],
        "description": "You cannot create a new job if one is already in progress."
      },
      "ConnectionExceptionProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "connection_issue": {
                "enum": [
                  "TooManyConnections",
                  "ProvisioningSubscription",
                  "RuleConfigurationIssue",
                  "RulesInvalidIssue"
                ],
                "type": "string"
              }
            },
            "type": "object"
          }
        ],
        "description": "A problem that indicates something is wrong with the connection."
      },
      "ContextAnnotation": {
        "description": "Annotation inferred from the Tweet text.",
        "properties": {
          "domain": {
            "$ref": "#/components/schemas/ContextAnnotationDomainFields"
          },
          "entity": {
            "$ref": "#/components/schemas/ContextAnnotationEntityFields"
          }
        },
        "required": [
          "domain",
          "entity"
        ],
        "type": "object"
      },
      "ContextAnnotationDomainFields": {
        "description": "Represents the data for the context annotation domain.",
        "properties": {
          "description": {
            "description": "Description of the context annotation domain.",
            "type": "string"
          },
          "id": {
            "description": "The unique id for a context annotation domain.",
            "pattern": "^[0-9]{1,19}$",
            "type": "string"
          },
          "name": {
            "description": "Name of the context annotation domain.",
            "type": "string"
          }
        },
        "required": [
          "id"
        ],
        "type": "object"
      },
      "ContextAnnotationEntityFields": {
        "description": "Represents the data for the context annotation entity.",
        "properties": {
          "description": {
            "description": "Description of the context annotation entity.",
            "type": "string"
          },
          "id": {
            "description": "The unique id for a context annotation entity.",
            "pattern": "^[0-9]{1,19}$",
            "type": "string"
          },
          "name": {
            "description": "Name of the context annotation entity.",
            "type": "string"
          }
        },
        "required": [
          "id"
        ],
        "type": "object"
      },
      "CountryCode": {
        "description": "A two-letter ISO 3166-1 alpha-2 country code.",
        "example": "US",
        "pattern": "^[A-Z]{2}$",
        "type": "string"
      },
      "CreateAttachmentsMessageRequest": {
        "properties": {
          "attachments": {
            "$ref": "#/components/schemas/DmAttachments"
          },
          "text": {
            "description": "Text of the message.",
            "minLength": 1,
            "type": "string"
          }
        },
        "required": [
          "attachments"
        ],
        "type": "object"
      },
      "CreateComplianceJobRequest": {
        "description": "A request to create a new batch compliance job.",
        "properties": {
          "name": {
            "$ref": "#/components/schemas/ComplianceJobName"
          },
          "resumable": {
            "description": "If true, this endpoint will return a pre-signed URL with resumable uploads enabled.",
            "type": "boolean"
          },
          "type": {
            "description": "Type of compliance job to list.",
            "enum": [
              "tweets",
              "users"
            ],
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "type": "object"
      },
      "CreateComplianceJobResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/ComplianceJob"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "CreateDmConversationRequest": {
        "additionalProperties": false,
        "properties": {
          "conversation_type": {
            "description": "The conversation type that is being created.",
            "enum": [
              "Group"
            ],
            "type": "string"
          },
          "message": {
            "$ref": "#/components/schemas/CreateMessageRequest"
          },
          "participant_ids": {
            "$ref": "#/components/schemas/DmParticipants"
          }
        },
        "required": [
          "conversation_type",
          "participant_ids",
          "message"
        ],
        "type": "object"
      },
      "CreateDmEventResponse": {
        "properties": {
          "data": {
            "properties": {
              "dm_conversation_id": {
                "$ref": "#/components/schemas/DmConversationId"
              },
              "dm_event_id": {
                "$ref": "#/components/schemas/DmEventId"
              }
            },
            "required": [
              "dm_conversation_id",
              "dm_event_id"
            ],
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "CreateMessageRequest": {
        "anyOf": [
          {
            "$ref": "#/components/schemas/CreateTextMessageRequest"
          },
          {
            "$ref": "#/components/schemas/CreateAttachmentsMessageRequest"
          }
        ]
      },
      "CreateTextMessageRequest": {
        "properties": {
          "attachments": {
            "$ref": "#/components/schemas/DmAttachments"
          },
          "text": {
            "description": "Text of the message.",
            "minLength": 1,
            "type": "string"
          }
        },
        "required": [
          "text"
        ],
        "type": "object"
      },
      "CreatedAt": {
        "description": "Creation time of the compliance job.",
        "example": "2021-01-06T18:40:40.000Z",
        "format": "date-time",
        "type": "string"
      },
      "DeleteRulesRequest": {
        "description": "A response from deleting user-specified stream filtering rules.",
        "properties": {
          "delete": {
            "description": "IDs and values of all deleted user-specified stream filtering rules.",
            "properties": {
              "ids": {
                "description": "IDs of all deleted user-specified stream filtering rules.",
                "items": {
                  "$ref": "#/components/schemas/RuleId"
                },
                "type": "array"
              },
              "values": {
                "description": "Values of all deleted user-specified stream filtering rules.",
                "items": {
                  "$ref": "#/components/schemas/RuleValue"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        },
        "required": [
          "delete"
        ],
        "type": "object"
      },
      "DisallowedResourceProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "resource_id": {
                "type": "string"
              },
              "resource_type": {
                "enum": [
                  "user",
                  "tweet",
                  "media",
                  "list",
                  "space"
                ],
                "type": "string"
              },
              "section": {
                "enum": [
                  "data",
                  "includes"
                ],
                "type": "string"
              }
            },
            "required": [
              "resource_id",
              "resource_type",
              "section"
            ],
            "type": "object"
          }
        ],
        "description": "A problem that indicates that the resource requested violates the precepts of this API."
      },
      "DmAttachments": {
        "description": "Attachments to a DM Event.",
        "items": {
          "$ref": "#/components/schemas/DmMediaAttachment"
        },
        "type": "array"
      },
      "DmConversationId": {
        "description": "Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.",
        "example": "123123123-456456456",
        "pattern": "^([0-9]{1,19}-[0-9]{1,19}|[0-9]{15,19})$",
        "type": "string"
      },
      "DmEvent": {
        "properties": {
          "attachments": {
            "description": "Specifies the type of attachments (if any) present in this DM.",
            "properties": {
              "card_ids": {
                "description": "A list of card IDs (if cards are attached).",
                "items": {
                  "type": "string"
                },
                "minItems": 1,
                "type": "array"
              },
              "media_keys": {
                "description": "A list of Media Keys for each one of the media attachments (if media are attached).",
                "items": {
                  "$ref": "#/components/schemas/MediaKey"
                },
                "minItems": 1,
                "type": "array"
              }
            },
            "type": "object"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "dm_conversation_id": {
            "$ref": "#/components/schemas/DmConversationId"
          },
          "event_type": {
            "example": "MessageCreate",
            "type": "string"
          },
          "id": {
            "$ref": "#/components/schemas/DmEventId"
          },
          "participant_ids": {
            "description": "A list of participants for a ParticipantsJoin or ParticipantsLeave event_type.",
            "items": {
              "$ref": "#/components/schemas/UserId"
            },
            "minItems": 1,
            "type": "array"
          },
          "referenced_tweets": {
            "description": "A list of Tweets this DM refers to.",
            "items": {
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/TweetId"
                }
              },
              "required": [
                "id"
              ],
              "type": "object"
            },
            "minItems": 1,
            "type": "array"
          },
          "sender_id": {
            "$ref": "#/components/schemas/UserId"
          },
          "text": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "event_type"
        ],
        "type": "object"
      },
      "DmEventId": {
        "description": "Unique identifier of a DM Event.",
        "example": "1146654567674912769",
        "pattern": "^[0-9]{1,19}$",
        "type": "string"
      },
      "DmMediaAttachment": {
        "properties": {
          "media_id": {
            "$ref": "#/components/schemas/MediaId"
          }
        },
        "required": [
          "media_id"
        ],
        "type": "object"
      },
      "DmParticipants": {
        "description": "Participants for the DM Conversation.",
        "items": {
          "$ref": "#/components/schemas/UserId"
        },
        "maxItems": 49,
        "minItems": 2,
        "type": "array"
      },
      "DownloadExpiration": {
        "description": "Expiration time of the download URL.",
        "example": "2021-01-06T18:40:40.000Z",
        "format": "date-time",
        "type": "string"
      },
      "DownloadUrl": {
        "description": "URL from which the user will retrieve their compliance results.",
        "format": "uri",
        "type": "string"
      },
      "DuplicateRuleProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "id": {
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            },
            "type": "object"
          }
        ],
        "description": "The rule you have submitted is a duplicate."
      },
      "End": {
        "description": "The end time of the bucket.",
        "format": "date-time",
        "type": "string"
      },
      "EntityIndicesInclusiveExclusive": {
        "description": "Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is exclusive.",
        "properties": {
          "end": {
            "description": "Index (zero-based) at which position this entity ends.  The index is exclusive.",
            "example": 61,
            "minimum": 0,
            "type": "integer"
          },
          "start": {
            "description": "Index (zero-based) at which position this entity starts.  The index is inclusive.",
            "example": 50,
            "minimum": 0,
            "type": "integer"
          }
        },
        "required": [
          "start",
          "end"
        ],
        "type": "object"
      },
      "EntityIndicesInclusiveInclusive": {
        "description": "Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is inclusive.",
        "properties": {
          "end": {
            "description": "Index (zero-based) at which position this entity ends.  The index is inclusive.",
            "example": 61,
            "minimum": 0,
            "type": "integer"
          },
          "start": {
            "description": "Index (zero-based) at which position this entity starts.  The index is inclusive.",
            "example": 50,
            "minimum": 0,
            "type": "integer"
          }
        },
        "required": [
          "start",
          "end"
        ],
        "type": "object"
      },
      "Error": {
        "properties": {
          "code": {
            "format": "int32",
            "type": "integer"
          },
          "message": {
            "type": "string"
          }
        },
        "required": [
          "code",
          "message"
        ],
        "type": "object"
      },
      "Expansions": {
        "properties": {
          "media": {
            "items": {
              "$ref": "#/components/schemas/Media"
            },
            "minItems": 1,
            "type": "array"
          },
          "places": {
            "items": {
              "$ref": "#/components/schemas/Place"
            },
            "minItems": 1,
            "type": "array"
          },
          "polls": {
            "items": {
              "$ref": "#/components/schemas/Poll"
            },
            "minItems": 1,
            "type": "array"
          },
          "topics": {
            "items": {
              "$ref": "#/components/schemas/Topic"
            },
            "minItems": 1,
            "type": "array"
          },
          "tweets": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "users": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "FieldUnauthorizedProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "field": {
                "type": "string"
              },
              "resource_type": {
                "enum": [
                  "user",
                  "tweet",
                  "media",
                  "list",
                  "space"
                ],
                "type": "string"
              },
              "section": {
                "enum": [
                  "data",
                  "includes"
                ],
                "type": "string"
              }
            },
            "required": [
              "resource_type",
              "field",
              "section"
            ],
            "type": "object"
          }
        ],
        "description": "A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc."
      },
      "FilteredStreamingTweetResponse": {
        "description": "A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched.",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Tweet"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "matching_rules": {
            "description": "The list of rules which matched the Tweet",
            "items": {
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/RuleId"
                },
                "tag": {
                  "$ref": "#/components/schemas/RuleTag"
                }
              },
              "required": [
                "id"
              ],
              "type": "object"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "FullTextEntities": {
        "properties": {
          "annotations": {
            "items": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/EntityIndicesInclusiveInclusive"
                },
                {
                  "description": "Represents the data for the annotation.",
                  "properties": {
                    "normalized_text": {
                      "description": "Text used to determine annotation.",
                      "example": "Barack Obama",
                      "type": "string"
                    },
                    "probability": {
                      "description": "Confidence factor for annotation type.",
                      "format": "double",
                      "maximum": 1,
                      "minimum": 0,
                      "type": "number"
                    },
                    "type": {
                      "description": "Annotation type.",
                      "example": "Person",
                      "type": "string"
                    }
                  },
                  "type": "object"
                }
              ],
              "description": "Annotation for entities based on the Tweet text."
            },
            "minItems": 1,
            "type": "array"
          },
          "cashtags": {
            "items": {
              "$ref": "#/components/schemas/CashtagEntity"
            },
            "minItems": 1,
            "type": "array"
          },
          "hashtags": {
            "items": {
              "$ref": "#/components/schemas/HashtagEntity"
            },
            "minItems": 1,
            "type": "array"
          },
          "mentions": {
            "items": {
              "$ref": "#/components/schemas/MentionEntity"
            },
            "minItems": 1,
            "type": "array"
          },
          "urls": {
            "items": {
              "$ref": "#/components/schemas/UrlEntity"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "GenericProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          }
        ],
        "description": "A generic problem with no additional information beyond that provided by the HTTP status code."
      },
      "Geo": {
        "properties": {
          "bbox": {
            "example": [
              -105.193475,
              39.60973,
              -105.053164,
              39.761974
            ],
            "items": {
              "format": "double",
              "maximum": 180,
              "minimum": -180,
              "type": "number"
            },
            "maxItems": 4,
            "minItems": 4,
            "type": "array"
          },
          "geometry": {
            "$ref": "#/components/schemas/Point"
          },
          "properties": {
            "type": "object"
          },
          "type": {
            "enum": [
              "Feature"
            ],
            "type": "string"
          }
        },
        "required": [
          "type",
          "bbox",
          "properties"
        ],
        "type": "object"
      },
      "Get2ComplianceJobsIdResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/ComplianceJob"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "Get2ComplianceJobsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/ComplianceJob"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "meta": {
            "properties": {
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2DmConversationsIdDmEventsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/DmEvent"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2DmConversationsWithParticipantIdDmEventsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/DmEvent"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2DmEventsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/DmEvent"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2ListsIdFollowersResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2ListsIdMembersResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2ListsIdResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/List"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2ListsIdTweetsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2SpacesByCreatorIdsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Space"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2SpacesIdBuyersResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2SpacesIdResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Space"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2SpacesIdTweetsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2SpacesResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Space"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2SpacesSearchResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Space"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2TweetsCountsAllResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/SearchCount"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "meta": {
            "properties": {
              "newest_id": {
                "$ref": "#/components/schemas/NewestId"
              },
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "oldest_id": {
                "$ref": "#/components/schemas/OldestId"
              },
              "total_tweet_count": {
                "$ref": "#/components/schemas/Aggregate"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2TweetsCountsRecentResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/SearchCount"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "meta": {
            "properties": {
              "newest_id": {
                "$ref": "#/components/schemas/NewestId"
              },
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "oldest_id": {
                "$ref": "#/components/schemas/OldestId"
              },
              "total_tweet_count": {
                "$ref": "#/components/schemas/Aggregate"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2TweetsFirehoseStreamResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Tweet"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2TweetsIdLikingUsersResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2TweetsIdQuoteTweetsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2TweetsIdResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Tweet"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2TweetsIdRetweetedByResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2TweetsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2TweetsSample10StreamResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Tweet"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2TweetsSampleStreamResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Tweet"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2TweetsSearchAllResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "newest_id": {
                "$ref": "#/components/schemas/NewestId"
              },
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "oldest_id": {
                "$ref": "#/components/schemas/OldestId"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2TweetsSearchRecentResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "newest_id": {
                "$ref": "#/components/schemas/NewestId"
              },
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "oldest_id": {
                "$ref": "#/components/schemas/OldestId"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2TweetsSearchStreamResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Tweet"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2UsersByResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2UsersByUsernameUsernameResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/User"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2UsersIdBlockingResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdBookmarksResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdFollowedListsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/List"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdFollowersResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdFollowingResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdLikedTweetsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdListMembershipsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/List"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdMentionsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "newest_id": {
                "$ref": "#/components/schemas/NewestId"
              },
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "oldest_id": {
                "$ref": "#/components/schemas/OldestId"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdMutingResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdOwnedListsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/List"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdPinnedListsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/List"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/User"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2UsersIdTimelinesReverseChronologicalResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "newest_id": {
                "$ref": "#/components/schemas/NewestId"
              },
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "oldest_id": {
                "$ref": "#/components/schemas/OldestId"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersIdTweetsResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Tweet"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          },
          "meta": {
            "properties": {
              "newest_id": {
                "$ref": "#/components/schemas/NewestId"
              },
              "next_token": {
                "$ref": "#/components/schemas/NextToken"
              },
              "oldest_id": {
                "$ref": "#/components/schemas/OldestId"
              },
              "previous_token": {
                "$ref": "#/components/schemas/PreviousToken"
              },
              "result_count": {
                "$ref": "#/components/schemas/ResultCount"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "Get2UsersMeResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/User"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Get2UsersResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "minItems": 1,
            "type": "array"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "HashtagEntity": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityIndicesInclusiveExclusive"
          },
          {
            "$ref": "#/components/schemas/HashtagFields"
          }
        ]
      },
      "HashtagFields": {
        "description": "Represent the portion of text recognized as a Hashtag, and its start and end position within the text.",
        "properties": {
          "tag": {
            "description": "The text of the Hashtag.",
            "example": "MondayMotivation",
            "type": "string"
          }
        },
        "required": [
          "tag"
        ],
        "type": "object"
      },
      "HttpStatusCode": {
        "description": "HTTP Status Code.",
        "maximum": 599,
        "minimum": 100,
        "type": "integer"
      },
      "InvalidRequestProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "errors": {
                "items": {
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "parameters": {
                      "additionalProperties": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "type": "object"
                    }
                  },
                  "type": "object"
                },
                "minItems": 1,
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "description": "A problem that indicates this request is invalid."
      },
      "InvalidRuleProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          }
        ],
        "description": "The rule you have submitted is invalid."
      },
      "JobId": {
        "description": "Compliance Job ID.",
        "example": "1372966999991541762",
        "pattern": "^[0-9]{1,19}$",
        "type": "string"
      },
      "List": {
        "description": "A Twitter List is a curated group of accounts.",
        "properties": {
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "follower_count": {
            "type": "integer"
          },
          "id": {
            "$ref": "#/components/schemas/ListId"
          },
          "member_count": {
            "type": "integer"
          },
          "name": {
            "description": "The name of this List.",
            "type": "string"
          },
          "owner_id": {
            "$ref": "#/components/schemas/UserId"
          },
          "private": {
            "type": "boolean"
          }
        },
        "required": [
          "id",
          "name"
        ],
        "type": "object"
      },
      "ListAddUserRequest": {
        "properties": {
          "user_id": {
            "$ref": "#/components/schemas/UserId"
          }
        },
        "required": [
          "user_id"
        ],
        "type": "object"
      },
      "ListCreateRequest": {
        "properties": {
          "description": {
            "maxLength": 100,
            "minLength": 0,
            "type": "string"
          },
          "name": {
            "maxLength": 25,
            "minLength": 1,
            "type": "string"
          },
          "private": {
            "default": false,
            "type": "boolean"
          }
        },
        "required": [
          "name"
        ],
        "type": "object"
      },
      "ListCreateResponse": {
        "properties": {
          "data": {
            "description": "A Twitter List is a curated group of accounts.",
            "properties": {
              "id": {
                "$ref": "#/components/schemas/ListId"
              },
              "name": {
                "description": "The name of this List.",
                "type": "string"
              }
            },
            "required": [
              "id",
              "name"
            ],
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "ListDeleteResponse": {
        "properties": {
          "data": {
            "properties": {
              "deleted": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "ListFollowedRequest": {
        "properties": {
          "list_id": {
            "$ref": "#/components/schemas/ListId"
          }
        },
        "required": [
          "list_id"
        ],
        "type": "object"
      },
      "ListFollowedResponse": {
        "properties": {
          "data": {
            "properties": {
              "following": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "ListId": {
        "description": "The unique identifier of this List.",
        "example": "1146654567674912769",
        "pattern": "^[0-9]{1,19}$",
        "type": "string"
      },
      "ListMutateResponse": {
        "properties": {
          "data": {
            "properties": {
              "is_member": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "ListPinnedRequest": {
        "properties": {
          "list_id": {
            "$ref": "#/components/schemas/ListId"
          }
        },
        "required": [
          "list_id"
        ],
        "type": "object"
      },
      "ListPinnedResponse": {
        "properties": {
          "data": {
            "properties": {
              "pinned": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "ListUnpinResponse": {
        "properties": {
          "data": {
            "properties": {
              "pinned": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "ListUpdateRequest": {
        "properties": {
          "description": {
            "maxLength": 100,
            "minLength": 0,
            "type": "string"
          },
          "name": {
            "maxLength": 25,
            "minLength": 1,
            "type": "string"
          },
          "private": {
            "type": "boolean"
          }
        },
        "type": "object"
      },
      "ListUpdateResponse": {
        "properties": {
          "data": {
            "properties": {
              "updated": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "Media": {
        "discriminator": {
          "mapping": {
            "animated_gif": "#/components/schemas/AnimatedGif",
            "photo": "#/components/schemas/Photo",
            "video": "#/components/schemas/Video"
          },
          "propertyName": "type"
        },
        "properties": {
          "height": {
            "$ref": "#/components/schemas/MediaHeight"
          },
          "media_key": {
            "$ref": "#/components/schemas/MediaKey"
          },
          "type": {
            "type": "string"
          },
          "width": {
            "$ref": "#/components/schemas/MediaWidth"
          }
        },
        "required": [
          "type"
        ],
        "type": "object"
      },
      "MediaHeight": {
        "description": "The height of the media in pixels.",
        "minimum": 0,
        "type": "integer"
      },
      "MediaId": {
        "description": "The unique identifier of this Media.",
        "example": "1146654567674912769",
        "pattern": "^[0-9]{1,19}$",
        "type": "string"
      },
      "MediaKey": {
        "description": "The Media Key identifier for this attachment.",
        "pattern": "^([0-9]+)_([0-9]+)$",
        "type": "string"
      },
      "MediaWidth": {
        "description": "The width of the media in pixels.",
        "minimum": 0,
        "type": "integer"
      },
      "MentionEntity": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityIndicesInclusiveExclusive"
          },
          {
            "$ref": "#/components/schemas/MentionFields"
          }
        ]
      },
      "MentionFields": {
        "description": "Represent the portion of text recognized as a User mention, and its start and end position within the text.",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/UserId"
          },
          "username": {
            "$ref": "#/components/schemas/UserName"
          }
        },
        "required": [
          "username"
        ],
        "type": "object"
      },
      "MuteUserMutationResponse": {
        "properties": {
          "data": {
            "properties": {
              "muting": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "MuteUserRequest": {
        "properties": {
          "target_user_id": {
            "$ref": "#/components/schemas/UserId"
          }
        },
        "required": [
          "target_user_id"
        ],
        "type": "object"
      },
      "NewestId": {
        "description": "The newest id in this response.",
        "type": "string"
      },
      "NextToken": {
        "description": "The next token.",
        "minLength": 1,
        "type": "string"
      },
      "NonCompliantRulesProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          }
        ],
        "description": "A problem that indicates the user's rule set is not compliant."
      },
      "Oauth1PermissionsProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          }
        ],
        "description": "A problem that indicates your client application does not have the required OAuth1 permissions for the requested endpoint."
      },
      "OldestId": {
        "description": "The oldest id in this response.",
        "type": "string"
      },
      "OperationalDisconnectProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "disconnect_type": {
                "enum": [
                  "OperationalDisconnect",
                  "UpstreamOperationalDisconnect",
                  "ForceDisconnect",
                  "UpstreamUncleanDisconnect",
                  "SlowReader",
                  "InternalError",
                  "ClientApplicationStateDegraded",
                  "InvalidRules"
                ],
                "type": "string"
              }
            },
            "type": "object"
          }
        ],
        "description": "You have been disconnected for operational reasons."
      },
      "PaginationToken32": {
        "description": "A base32 pagination token.",
        "minLength": 16,
        "type": "string"
      },
      "PaginationToken36": {
        "description": "A base36 pagination token.",
        "minLength": 1,
        "type": "string"
      },
      "PaginationTokenLong": {
        "description": "A 'long' pagination token.",
        "maxLength": 19,
        "minLength": 1,
        "type": "string"
      },
      "Photo": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Media"
          },
          {
            "properties": {
              "alt_text": {
                "type": "string"
              },
              "url": {
                "format": "uri",
                "type": "string"
              }
            },
            "type": "object"
          }
        ]
      },
      "Place": {
        "properties": {
          "contained_within": {
            "items": {
              "$ref": "#/components/schemas/PlaceId"
            },
            "minItems": 1,
            "type": "array"
          },
          "country": {
            "description": "The full name of the county in which this place exists.",
            "example": "United States",
            "type": "string"
          },
          "country_code": {
            "$ref": "#/components/schemas/CountryCode"
          },
          "full_name": {
            "description": "The full name of this place.",
            "example": "Lakewood, CO",
            "type": "string"
          },
          "geo": {
            "$ref": "#/components/schemas/Geo"
          },
          "id": {
            "$ref": "#/components/schemas/PlaceId"
          },
          "name": {
            "description": "The human readable name of this place.",
            "example": "Lakewood",
            "type": "string"
          },
          "place_type": {
            "$ref": "#/components/schemas/PlaceType"
          }
        },
        "required": [
          "id",
          "full_name"
        ],
        "type": "object"
      },
      "PlaceId": {
        "description": "The identifier for this place.",
        "example": "f7eb2fa2fea288b1",
        "type": "string"
      },
      "PlaceType": {
        "enum": [
          "poi",
          "neighborhood",
          "city",
          "admin",
          "country",
          "unknown"
        ],
        "example": "city",
        "type": "string"
      },
      "Point": {
        "description": "A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.",
        "properties": {
          "coordinates": {
            "$ref": "#/components/schemas/Position"
          },
          "type": {
            "enum": [
              "Point"
            ],
            "example": "Point",
            "type": "string"
          }
        },
        "required": [
          "type",
          "coordinates"
        ],
        "type": "object"
      },
      "Poll": {
        "description": "Represent a Poll attached to a Tweet.",
        "properties": {
          "duration_minutes": {
            "format": "int32",
            "maximum": 10080,
            "minimum": 5,
            "type": "integer"
          },
          "end_datetime": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "$ref": "#/components/schemas/PollId"
          },
          "options": {
            "items": {
              "$ref": "#/components/schemas/PollOption"
            },
            "maxItems": 4,
            "minItems": 2,
            "type": "array"
          },
          "voting_status": {
            "enum": [
              "open",
              "closed"
            ],
            "type": "string"
          }
        },
        "required": [
          "id",
          "options"
        ],
        "type": "object"
      },
      "PollId": {
        "description": "Unique identifier of this poll.",
        "example": "1365059861688410112",
        "pattern": "^[0-9]{1,19}$",
        "type": "string"
      },
      "PollOption": {
        "description": "Describes a choice in a Poll object.",
        "properties": {
          "label": {
            "$ref": "#/components/schemas/PollOptionLabel"
          },
          "position": {
            "description": "Position of this choice in the poll.",
            "type": "integer"
          },
          "votes": {
            "description": "Number of users who voted for this choice.",
            "type": "integer"
          }
        },
        "required": [
          "position",
          "label",
          "votes"
        ],
        "type": "object"
      },
      "PollOptionLabel": {
        "description": "The text of a poll choice.",
        "maxLength": 25,
        "minLength": 1,
        "type": "string"
      },
      "Position": {
        "description": "A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.",
        "example": [
          -105.18816086351444,
          40.247749999999996
        ],
        "items": {
          "type": "number"
        },
        "maxItems": 2,
        "minItems": 2,
        "type": "array"
      },
      "PreviousToken": {
        "description": "The previous token.",
        "minLength": 1,
        "type": "string"
      },
      "Problem": {
        "description": "An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807).",
        "discriminator": {
          "mapping": {
            "about:blank": "#/components/schemas/GenericProblem",
            "https://api.twitter.com/2/problems/client-disconnected": "#/components/schemas/ClientDisconnectedProblem",
            "https://api.twitter.com/2/problems/client-forbidden": "#/components/schemas/ClientForbiddenProblem",
            "https://api.twitter.com/2/problems/conflict": "#/components/schemas/ConflictProblem",
            "https://api.twitter.com/2/problems/disallowed-resource": "#/components/schemas/DisallowedResourceProblem",
            "https://api.twitter.com/2/problems/duplicate-rules": "#/components/schemas/DuplicateRuleProblem",
            "https://api.twitter.com/2/problems/invalid-request": "#/components/schemas/InvalidRequestProblem",
            "https://api.twitter.com/2/problems/invalid-rules": "#/components/schemas/InvalidRuleProblem",
            "https://api.twitter.com/2/problems/noncompliant-rules": "#/components/schemas/NonCompliantRulesProblem",
            "https://api.twitter.com/2/problems/not-authorized-for-field": "#/components/schemas/FieldUnauthorizedProblem",
            "https://api.twitter.com/2/problems/not-authorized-for-resource": "#/components/schemas/ResourceUnauthorizedProblem",
            "https://api.twitter.com/2/problems/oauth1-permissions": "#/components/schemas/Oauth1PermissionsProblem",
            "https://api.twitter.com/2/problems/operational-disconnect": "#/components/schemas/OperationalDisconnectProblem",
            "https://api.twitter.com/2/problems/resource-not-found": "#/components/schemas/ResourceNotFoundProblem",
            "https://api.twitter.com/2/problems/resource-unavailable": "#/components/schemas/ResourceUnavailableProblem",
            "https://api.twitter.com/2/problems/rule-cap": "#/components/schemas/RulesCapProblem",
            "https://api.twitter.com/2/problems/streaming-connection": "#/components/schemas/ConnectionExceptionProblem",
            "https://api.twitter.com/2/problems/unsupported-authentication": "#/components/schemas/UnsupportedAuthenticationProblem",
            "https://api.twitter.com/2/problems/usage-capped": "#/components/schemas/UsageCapExceededProblem"
          },
          "propertyName": "type"
        },
        "properties": {
          "detail": {
            "type": "string"
          },
          "status": {
            "type": "integer"
          },
          "title": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "type",
          "title"
        ],
        "type": "object"
      },
      "ReplySettings": {
        "description": "Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following.",
        "enum": [
          "everyone",
          "mentionedUsers",
          "following",
          "other"
        ],
        "pattern": "^[A-Za-z]{1,12}$",
        "type": "string"
      },
      "ResourceNotFoundProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "parameter": {
                "minLength": 1,
                "type": "string"
              },
              "resource_id": {
                "type": "string"
              },
              "resource_type": {
                "enum": [
                  "user",
                  "tweet",
                  "media",
                  "list",
                  "space"
                ],
                "type": "string"
              },
              "value": {
                "description": "Value will match the schema of the field.",
                "type": "string"
              }
            },
            "required": [
              "parameter",
              "value",
              "resource_id",
              "resource_type"
            ],
            "type": "object"
          }
        ],
        "description": "A problem that indicates that a given Tweet, User, etc. does not exist."
      },
      "ResourceUnauthorizedProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "parameter": {
                "type": "string"
              },
              "resource_id": {
                "type": "string"
              },
              "resource_type": {
                "enum": [
                  "user",
                  "tweet",
                  "media",
                  "list",
                  "space"
                ],
                "type": "string"
              },
              "section": {
                "enum": [
                  "data",
                  "includes"
                ],
                "type": "string"
              },
              "value": {
                "type": "string"
              }
            },
            "required": [
              "value",
              "resource_id",
              "resource_type",
              "section",
              "parameter"
            ],
            "type": "object"
          }
        ],
        "description": "A problem that indicates you are not allowed to see a particular Tweet, User, etc."
      },
      "ResourceUnavailableProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "parameter": {
                "minLength": 1,
                "type": "string"
              },
              "resource_id": {
                "type": "string"
              },
              "resource_type": {
                "enum": [
                  "user",
                  "tweet",
                  "media",
                  "list",
                  "space"
                ],
                "type": "string"
              }
            },
            "required": [
              "parameter",
              "resource_id",
              "resource_type"
            ],
            "type": "object"
          }
        ],
        "description": "A problem that indicates a particular Tweet, User, etc. is not available to you."
      },
      "ResultCount": {
        "description": "The number of results returned in this response.",
        "format": "int32",
        "type": "integer"
      },
      "Rule": {
        "description": "A user-provided stream filtering rule.",
        "properties": {
          "id": {
            "$ref": "#/components/schemas/RuleId"
          },
          "tag": {
            "$ref": "#/components/schemas/RuleTag"
          },
          "value": {
            "$ref": "#/components/schemas/RuleValue"
          }
        },
        "required": [
          "value"
        ],
        "type": "object"
      },
      "RuleId": {
        "description": "Unique identifier of this rule.",
        "example": "120897978112909812",
        "pattern": "^[0-9]{1,19}$",
        "type": "string"
      },
      "RuleNoId": {
        "description": "A user-provided stream filtering rule.",
        "properties": {
          "tag": {
            "$ref": "#/components/schemas/RuleTag"
          },
          "value": {
            "$ref": "#/components/schemas/RuleValue"
          }
        },
        "required": [
          "value"
        ],
        "type": "object"
      },
      "RuleTag": {
        "description": "A tag meant for the labeling of user provided rules.",
        "example": "Non-retweeted coffee Tweets",
        "type": "string"
      },
      "RuleValue": {
        "description": "The filterlang value of the rule.",
        "example": "coffee -is:retweet",
        "type": "string"
      },
      "RulesCapProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          }
        ],
        "description": "You have exceeded the maximum number of rules."
      },
      "RulesLookupResponse": {
        "properties": {
          "data": {
            "items": {
              "$ref": "#/components/schemas/Rule"
            },
            "type": "array"
          },
          "meta": {
            "$ref": "#/components/schemas/RulesResponseMetadata"
          }
        },
        "required": [
          "meta"
        ],
        "type": "object"
      },
      "RulesRequestSummary": {
        "oneOf": [
          {
            "description": "A summary of the results of the addition of user-specified stream filtering rules.",
            "properties": {
              "created": {
                "description": "Number of user-specified stream filtering rules that were created.",
                "example": 1,
                "format": "int32",
                "type": "integer"
              },
              "invalid": {
                "description": "Number of invalid user-specified stream filtering rules.",
                "example": 1,
                "format": "int32",
                "type": "integer"
              },
              "not_created": {
                "description": "Number of user-specified stream filtering rules that were not created.",
                "example": 1,
                "format": "int32",
                "type": "integer"
              },
              "valid": {
                "description": "Number of valid user-specified stream filtering rules.",
                "example": 1,
                "format": "int32",
                "type": "integer"
              }
            },
            "required": [
              "created",
              "not_created",
              "valid",
              "invalid"
            ],
            "type": "object"
          },
          {
            "properties": {
              "deleted": {
                "description": "Number of user-specified stream filtering rules that were deleted.",
                "format": "int32",
                "type": "integer"
              },
              "not_deleted": {
                "description": "Number of user-specified stream filtering rules that were not deleted.",
                "format": "int32",
                "type": "integer"
              }
            },
            "required": [
              "deleted",
              "not_deleted"
            ],
            "type": "object"
          }
        ]
      },
      "RulesResponseMetadata": {
        "properties": {
          "next_token": {
            "$ref": "#/components/schemas/NextToken"
          },
          "result_count": {
            "description": "Number of Rules in result set.",
            "format": "int32",
            "type": "integer"
          },
          "sent": {
            "type": "string"
          },
          "summary": {
            "$ref": "#/components/schemas/RulesRequestSummary"
          }
        },
        "required": [
          "sent"
        ],
        "type": "object"
      },
      "SearchCount": {
        "description": "Represent a Search Count Result.",
        "properties": {
          "end": {
            "$ref": "#/components/schemas/End"
          },
          "start": {
            "$ref": "#/components/schemas/Start"
          },
          "tweet_count": {
            "$ref": "#/components/schemas/TweetCount"
          }
        },
        "required": [
          "end",
          "start",
          "tweet_count"
        ],
        "type": "object"
      },
      "Space": {
        "description": "",
        "properties": {
          "created_at": {
            "description": "Creation time of the Space.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "creator_id": {
            "$ref": "#/components/schemas/UserId"
          },
          "ended_at": {
            "description": "End time of the Space.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "host_ids": {
            "description": "The user ids for the hosts of the Space.",
            "items": {
              "$ref": "#/components/schemas/UserId"
            },
            "type": "array"
          },
          "id": {
            "$ref": "#/components/schemas/SpaceId"
          },
          "invited_user_ids": {
            "description": "An array of user ids for people who were invited to a Space.",
            "items": {
              "$ref": "#/components/schemas/UserId"
            },
            "type": "array"
          },
          "is_ticketed": {
            "description": "Denotes if the Space is a ticketed Space.",
            "example": "false",
            "type": "boolean"
          },
          "lang": {
            "description": "The language of the Space.",
            "example": "en",
            "type": "string"
          },
          "participant_count": {
            "description": "The number of participants in a Space.",
            "example": 10,
            "format": "int32",
            "type": "integer"
          },
          "scheduled_start": {
            "description": "A date time stamp for when a Space is scheduled to begin.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "speaker_ids": {
            "description": "An array of user ids for people who were speakers in a Space.",
            "items": {
              "$ref": "#/components/schemas/UserId"
            },
            "type": "array"
          },
          "started_at": {
            "description": "When the Space was started as a date string.",
            "example": "2021-7-14T04:35:55Z",
            "format": "date-time",
            "type": "string"
          },
          "state": {
            "description": "The current state of the Space.",
            "enum": [
              "live",
              "scheduled",
              "ended"
            ],
            "example": "live",
            "type": "string"
          },
          "subscriber_count": {
            "description": "The number of people who have either purchased a ticket or set a reminder for this Space.",
            "example": 10,
            "format": "int32",
            "type": "integer"
          },
          "title": {
            "description": "The title of the Space.",
            "example": "Spaces are Awesome",
            "type": "string"
          },
          "topics": {
            "description": "The topics of a Space, as selected by its creator.",
            "items": {
              "description": "The Twitter Topic object.",
              "example": {
                "description": "All about technology",
                "id": "848920371311001600",
                "name": "Technology"
              },
              "properties": {
                "description": {
                  "description": "The description of the given topic.",
                  "type": "string"
                },
                "id": {
                  "description": "An ID suitable for use in the REST API.",
                  "type": "string"
                },
                "name": {
                  "description": "The name of the given topic.",
                  "type": "string"
                }
              },
              "required": [
                "id",
                "name"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "updated_at": {
            "description": "When the Space was last updated.",
            "example": "2021-7-14T04:35:55Z",
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id",
          "state"
        ],
        "type": "object"
      },
      "SpaceId": {
        "description": "The unique identifier of this Space.",
        "example": "1SLjjRYNejbKM",
        "pattern": "^[a-zA-Z0-9]{1,13}$",
        "type": "string"
      },
      "Start": {
        "description": "The start time of the bucket.",
        "format": "date-time",
        "type": "string"
      },
      "StreamingTweetResponse": {
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Tweet"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          },
          "includes": {
            "$ref": "#/components/schemas/Expansions"
          }
        },
        "type": "object"
      },
      "Topic": {
        "description": "The topic of a Space, as selected by its creator.",
        "properties": {
          "description": {
            "description": "The description of the given topic.",
            "example": "All about technology",
            "type": "string"
          },
          "id": {
            "$ref": "#/components/schemas/TopicId"
          },
          "name": {
            "description": "The name of the given topic.",
            "example": "Technology",
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ],
        "type": "object"
      },
      "TopicId": {
        "description": "Unique identifier of this Topic.",
        "type": "string"
      },
      "Tweet": {
        "example": {
          "author_id": "2244994945",
          "created_at": "Wed Jan 06 18:40:40 +0000 2021",
          "id": "1346889436626259968",
          "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
        },
        "properties": {
          "attachments": {
            "description": "Specifies the type of attachments (if any) present in this Tweet.",
            "properties": {
              "media_keys": {
                "description": "A list of Media Keys for each one of the media attachments (if media are attached).",
                "items": {
                  "$ref": "#/components/schemas/MediaKey"
                },
                "minItems": 1,
                "type": "array"
              },
              "poll_ids": {
                "description": "A list of poll IDs (if polls are attached).",
                "items": {
                  "$ref": "#/components/schemas/PollId"
                },
                "minItems": 1,
                "type": "array"
              }
            },
            "type": "object"
          },
          "author_id": {
            "$ref": "#/components/schemas/UserId"
          },
          "context_annotations": {
            "items": {
              "$ref": "#/components/schemas/ContextAnnotation"
            },
            "minItems": 1,
            "type": "array"
          },
          "conversation_id": {
            "$ref": "#/components/schemas/TweetId"
          },
          "created_at": {
            "description": "Creation time of the Tweet.",
            "example": "2021-01-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "edit_controls": {
            "properties": {
              "editable_until": {
                "description": "Time when Tweet is no longer editable.",
                "example": "2021-01-06T18:40:40.000Z",
                "format": "date-time",
                "type": "string"
              },
              "edits_remaining": {
                "description": "Number of times this Tweet can be edited.",
                "type": "integer"
              },
              "is_edit_eligible": {
                "description": "Indicates if this Tweet is eligible to be edited.",
                "example": false,
                "type": "boolean"
              }
            },
            "required": [
              "is_edit_eligible",
              "editable_until",
              "edits_remaining"
            ],
            "type": "object"
          },
          "edit_history_tweet_ids": {
            "description": "A list of Tweet Ids in this Tweet chain.",
            "items": {
              "$ref": "#/components/schemas/TweetId"
            },
            "minItems": 1,
            "type": "array"
          },
          "entities": {
            "$ref": "#/components/schemas/FullTextEntities"
          },
          "geo": {
            "description": "The location tagged on the Tweet, if the user provided one.",
            "properties": {
              "coordinates": {
                "$ref": "#/components/schemas/Point"
              },
              "place_id": {
                "$ref": "#/components/schemas/PlaceId"
              }
            },
            "type": "object"
          },
          "id": {
            "$ref": "#/components/schemas/TweetId"
          },
          "in_reply_to_user_id": {
            "$ref": "#/components/schemas/UserId"
          },
          "lang": {
            "description": "Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag.",
            "example": "en",
            "type": "string"
          },
          "non_public_metrics": {
            "description": "Nonpublic engagement metrics for the Tweet at the time of the request.",
            "properties": {
              "impression_count": {
                "description": "Number of times this Tweet has been viewed.",
                "format": "int32",
                "type": "integer"
              }
            },
            "type": "object"
          },
          "organic_metrics": {
            "description": "Organic nonpublic engagement metrics for the Tweet at the time of the request.",
            "properties": {
              "impression_count": {
                "description": "Number of times this Tweet has been viewed.",
                "type": "integer"
              },
              "like_count": {
                "description": "Number of times this Tweet has been liked.",
                "type": "integer"
              },
              "reply_count": {
                "description": "Number of times this Tweet has been replied to.",
                "type": "integer"
              },
              "retweet_count": {
                "description": "Number of times this Tweet has been Retweeted.",
                "type": "integer"
              }
            },
            "required": [
              "impression_count",
              "retweet_count",
              "reply_count",
              "like_count"
            ],
            "type": "object"
          },
          "possibly_sensitive": {
            "description": "Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.",
            "example": false,
            "type": "boolean"
          },
          "promoted_metrics": {
            "description": "Promoted nonpublic engagement metrics for the Tweet at the time of the request.",
            "properties": {
              "impression_count": {
                "description": "Number of times this Tweet has been viewed.",
                "format": "int32",
                "type": "integer"
              },
              "like_count": {
                "description": "Number of times this Tweet has been liked.",
                "format": "int32",
                "type": "integer"
              },
              "reply_count": {
                "description": "Number of times this Tweet has been replied to.",
                "format": "int32",
                "type": "integer"
              },
              "retweet_count": {
                "description": "Number of times this Tweet has been Retweeted.",
                "format": "int32",
                "type": "integer"
              }
            },
            "type": "object"
          },
          "public_metrics": {
            "description": "Engagement metrics for the Tweet at the time of the request.",
            "properties": {
              "impression_count": {
                "description": "Number of times this Tweet has been viewed.",
                "format": "int32",
                "type": "integer"
              },
              "like_count": {
                "description": "Number of times this Tweet has been liked.",
                "type": "integer"
              },
              "quote_count": {
                "description": "Number of times this Tweet has been quoted.",
                "type": "integer"
              },
              "reply_count": {
                "description": "Number of times this Tweet has been replied to.",
                "type": "integer"
              },
              "retweet_count": {
                "description": "Number of times this Tweet has been Retweeted.",
                "type": "integer"
              }
            },
            "required": [
              "retweet_count",
              "reply_count",
              "like_count",
              "impression_count"
            ],
            "type": "object"
          },
          "referenced_tweets": {
            "description": "A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.",
            "items": {
              "properties": {
                "id": {
                  "$ref": "#/components/schemas/TweetId"
                },
                "type": {
                  "enum": [
                    "retweeted",
                    "quoted",
                    "replied_to"
                  ],
                  "type": "string"
                }
              },
              "required": [
                "type",
                "id"
              ],
              "type": "object"
            },
            "minItems": 1,
            "type": "array"
          },
          "reply_settings": {
            "$ref": "#/components/schemas/ReplySettings"
          },
          "source": {
            "description": "This is deprecated.",
            "type": "string"
          },
          "text": {
            "$ref": "#/components/schemas/TweetText"
          },
          "withheld": {
            "$ref": "#/components/schemas/TweetWithheld"
          }
        },
        "required": [
          "id",
          "text",
          "edit_history_tweet_ids"
        ],
        "type": "object"
      },
      "TweetComplianceData": {
        "description": "Tweet compliance data.",
        "oneOf": [
          {
            "$ref": "#/components/schemas/TweetDeleteComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/TweetWithheldComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/TweetDropComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/TweetUndropComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/TweetEditComplianceSchema"
          }
        ]
      },
      "TweetComplianceSchema": {
        "properties": {
          "event_at": {
            "description": "Event time.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "quote_tweet_id": {
            "$ref": "#/components/schemas/TweetId"
          },
          "tweet": {
            "properties": {
              "author_id": {
                "$ref": "#/components/schemas/UserId"
              },
              "id": {
                "$ref": "#/components/schemas/TweetId"
              }
            },
            "required": [
              "id",
              "author_id"
            ],
            "type": "object"
          }
        },
        "required": [
          "tweet",
          "event_at"
        ],
        "type": "object"
      },
      "TweetComplianceStreamResponse": {
        "description": "Tweet compliance stream events.",
        "oneOf": [
          {
            "description": "Compliance event.",
            "properties": {
              "data": {
                "$ref": "#/components/schemas/TweetComplianceData"
              }
            },
            "required": [
              "data"
            ],
            "type": "object"
          },
          {
            "properties": {
              "errors": {
                "items": {
                  "$ref": "#/components/schemas/Problem"
                },
                "minItems": 1,
                "type": "array"
              }
            },
            "required": [
              "errors"
            ],
            "type": "object"
          }
        ]
      },
      "TweetCount": {
        "description": "The count for the bucket.",
        "type": "integer"
      },
      "TweetCreateRequest": {
        "additionalProperties": false,
        "properties": {
          "card_uri": {
            "description": "Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link.",
            "type": "string"
          },
          "direct_message_deep_link": {
            "description": "Link to take the conversation from the public timeline to a private Direct Message.",
            "type": "string"
          },
          "for_super_followers_only": {
            "default": false,
            "description": "Exclusive Tweet for super followers.",
            "type": "boolean"
          },
          "geo": {
            "additionalProperties": false,
            "description": "Place ID being attached to the Tweet for geo location.",
            "properties": {
              "place_id": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "media": {
            "additionalProperties": false,
            "description": "Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id, Poll, and Card URI.",
            "properties": {
              "media_ids": {
                "description": "A list of Media Ids to be attached to a created Tweet.",
                "items": {
                  "$ref": "#/components/schemas/MediaId"
                },
                "maxItems": 4,
                "minItems": 1,
                "type": "array"
              },
              "tagged_user_ids": {
                "description": "A list of User Ids to be tagged in the media for created Tweet.",
                "items": {
                  "$ref": "#/components/schemas/UserId"
                },
                "maxItems": 10,
                "minItems": 0,
                "type": "array"
              }
            },
            "required": [
              "media_ids"
            ],
            "type": "object"
          },
          "nullcast": {
            "default": false,
            "description": "Nullcasted (promoted-only) Tweets do not appear in the public timeline and are not served to followers.",
            "type": "boolean"
          },
          "poll": {
            "additionalProperties": false,
            "description": "Poll options for a Tweet with a poll. This is mutually exclusive from Media, Quote Tweet Id, and Card URI.",
            "properties": {
              "duration_minutes": {
                "description": "Duration of the poll in minutes.",
                "format": "int32",
                "maximum": 10080,
                "minimum": 5,
                "type": "integer"
              },
              "options": {
                "items": {
                  "description": "The text of a poll choice.",
                  "maxLength": 25,
                  "minLength": 1,
                  "type": "string"
                },
                "maxItems": 4,
                "minItems": 2,
                "type": "array"
              },
              "reply_settings": {
                "description": "Settings to indicate who can reply to the Tweet.",
                "enum": [
                  "following",
                  "mentionedUsers"
                ],
                "type": "string"
              }
            },
            "required": [
              "options",
              "duration_minutes"
            ],
            "type": "object"
          },
          "quote_tweet_id": {
            "$ref": "#/components/schemas/TweetId"
          },
          "reply": {
            "additionalProperties": false,
            "description": "Tweet information of the Tweet being replied to.",
            "properties": {
              "exclude_reply_user_ids": {
                "description": "A list of User Ids to be excluded from the reply Tweet.",
                "items": {
                  "$ref": "#/components/schemas/UserId"
                },
                "type": "array"
              },
              "in_reply_to_tweet_id": {
                "$ref": "#/components/schemas/TweetId"
              }
            },
            "required": [
              "in_reply_to_tweet_id"
            ],
            "type": "object"
          },
          "reply_settings": {
            "description": "Settings to indicate who can reply to the Tweet.",
            "enum": [
              "following",
              "mentionedUsers"
            ],
            "type": "string"
          },
          "text": {
            "$ref": "#/components/schemas/TweetText"
          }
        },
        "type": "object"
      },
      "TweetCreateResponse": {
        "properties": {
          "data": {
            "properties": {
              "id": {
                "$ref": "#/components/schemas/TweetId"
              },
              "text": {
                "$ref": "#/components/schemas/TweetText"
              }
            },
            "required": [
              "id",
              "text"
            ],
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "TweetDeleteComplianceSchema": {
        "properties": {
          "delete": {
            "$ref": "#/components/schemas/TweetComplianceSchema"
          }
        },
        "required": [
          "delete"
        ],
        "type": "object"
      },
      "TweetDeleteResponse": {
        "properties": {
          "data": {
            "properties": {
              "deleted": {
                "type": "boolean"
              }
            },
            "required": [
              "deleted"
            ],
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "TweetDropComplianceSchema": {
        "properties": {
          "drop": {
            "$ref": "#/components/schemas/TweetComplianceSchema"
          }
        },
        "required": [
          "drop"
        ],
        "type": "object"
      },
      "TweetEditComplianceObjectSchema": {
        "properties": {
          "edit_tweet_ids": {
            "items": {
              "$ref": "#/components/schemas/TweetId"
            },
            "minItems": 1,
            "type": "array"
          },
          "event_at": {
            "description": "Event time.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "initial_tweet_id": {
            "$ref": "#/components/schemas/TweetId"
          },
          "tweet": {
            "properties": {
              "id": {
                "$ref": "#/components/schemas/TweetId"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          }
        },
        "required": [
          "tweet",
          "event_at",
          "initial_tweet_id",
          "edit_tweet_ids"
        ],
        "type": "object"
      },
      "TweetEditComplianceSchema": {
        "properties": {
          "tweet_edit": {
            "$ref": "#/components/schemas/TweetEditComplianceObjectSchema"
          }
        },
        "required": [
          "tweet_edit"
        ],
        "type": "object"
      },
      "TweetHideRequest": {
        "properties": {
          "hidden": {
            "type": "boolean"
          }
        },
        "required": [
          "hidden"
        ],
        "type": "object"
      },
      "TweetHideResponse": {
        "properties": {
          "data": {
            "properties": {
              "hidden": {
                "type": "boolean"
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "TweetId": {
        "description": "Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.",
        "example": "1346889436626259968",
        "pattern": "^[0-9]{1,19}$",
        "type": "string"
      },
      "TweetLabelData": {
        "description": "Tweet label data.",
        "oneOf": [
          {
            "$ref": "#/components/schemas/TweetNoticeSchema"
          },
          {
            "$ref": "#/components/schemas/TweetUnviewableSchema"
          }
        ]
      },
      "TweetLabelStreamResponse": {
        "description": "Tweet label stream events.",
        "oneOf": [
          {
            "description": "Tweet Label event.",
            "properties": {
              "data": {
                "$ref": "#/components/schemas/TweetLabelData"
              }
            },
            "required": [
              "data"
            ],
            "type": "object"
          },
          {
            "properties": {
              "errors": {
                "items": {
                  "$ref": "#/components/schemas/Problem"
                },
                "minItems": 1,
                "type": "array"
              }
            },
            "required": [
              "errors"
            ],
            "type": "object"
          }
        ]
      },
      "TweetNotice": {
        "properties": {
          "application": {
            "description": "If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.",
            "example": "apply",
            "type": "string"
          },
          "details": {
            "description": "Information shown on the Tweet label",
            "type": "string"
          },
          "event_at": {
            "description": "Event time.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "event_type": {
            "description": "The type of label on the Tweet",
            "example": "misleading",
            "type": "string"
          },
          "extended_details_url": {
            "description": "Link to more information about this kind of label",
            "type": "string"
          },
          "label_title": {
            "description": "Title/header of the Tweet label",
            "type": "string"
          },
          "tweet": {
            "properties": {
              "author_id": {
                "$ref": "#/components/schemas/UserId"
              },
              "id": {
                "$ref": "#/components/schemas/TweetId"
              }
            },
            "required": [
              "id",
              "author_id"
            ],
            "type": "object"
          }
        },
        "required": [
          "tweet",
          "event_type",
          "event_at",
          "application"
        ],
        "type": "object"
      },
      "TweetNoticeSchema": {
        "properties": {
          "public_tweet_notice": {
            "$ref": "#/components/schemas/TweetNotice"
          }
        },
        "required": [
          "public_tweet_notice"
        ],
        "type": "object"
      },
      "TweetTakedownComplianceSchema": {
        "properties": {
          "event_at": {
            "description": "Event time.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "quote_tweet_id": {
            "$ref": "#/components/schemas/TweetId"
          },
          "tweet": {
            "properties": {
              "author_id": {
                "$ref": "#/components/schemas/UserId"
              },
              "id": {
                "$ref": "#/components/schemas/TweetId"
              }
            },
            "required": [
              "id",
              "author_id"
            ],
            "type": "object"
          },
          "withheld_in_countries": {
            "items": {
              "$ref": "#/components/schemas/CountryCode"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "required": [
          "tweet",
          "withheld_in_countries",
          "event_at"
        ],
        "type": "object"
      },
      "TweetText": {
        "description": "The content of the Tweet.",
        "example": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i",
        "type": "string"
      },
      "TweetUndropComplianceSchema": {
        "properties": {
          "undrop": {
            "$ref": "#/components/schemas/TweetComplianceSchema"
          }
        },
        "required": [
          "undrop"
        ],
        "type": "object"
      },
      "TweetUnviewable": {
        "properties": {
          "application": {
            "description": "If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.",
            "example": "apply",
            "type": "string"
          },
          "event_at": {
            "description": "Event time.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "tweet": {
            "properties": {
              "author_id": {
                "$ref": "#/components/schemas/UserId"
              },
              "id": {
                "$ref": "#/components/schemas/TweetId"
              }
            },
            "required": [
              "id",
              "author_id"
            ],
            "type": "object"
          }
        },
        "required": [
          "tweet",
          "event_at",
          "application"
        ],
        "type": "object"
      },
      "TweetUnviewableSchema": {
        "properties": {
          "public_tweet_unviewable": {
            "$ref": "#/components/schemas/TweetUnviewable"
          }
        },
        "required": [
          "public_tweet_unviewable"
        ],
        "type": "object"
      },
      "TweetWithheld": {
        "description": "Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).",
        "properties": {
          "copyright": {
            "description": "Indicates if the content is being withheld for on the basis of copyright infringement.",
            "type": "boolean"
          },
          "country_codes": {
            "description": "Provides a list of countries where this content is not available.",
            "items": {
              "$ref": "#/components/schemas/CountryCode"
            },
            "minItems": 1,
            "type": "array",
            "uniqueItems": true
          },
          "scope": {
            "description": "Indicates whether the content being withheld is the `tweet` or a `user`.",
            "enum": [
              "tweet",
              "user"
            ],
            "type": "string"
          }
        },
        "required": [
          "copyright",
          "country_codes"
        ],
        "type": "object"
      },
      "TweetWithheldComplianceSchema": {
        "properties": {
          "withheld": {
            "$ref": "#/components/schemas/TweetTakedownComplianceSchema"
          }
        },
        "required": [
          "withheld"
        ],
        "type": "object"
      },
      "UnsupportedAuthenticationProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          }
        ],
        "description": "A problem that indicates that the authentication used is not supported."
      },
      "UploadExpiration": {
        "description": "Expiration time of the upload URL.",
        "example": "2021-01-06T18:40:40.000Z",
        "format": "date-time",
        "type": "string"
      },
      "UploadUrl": {
        "description": "URL to which the user will upload their Tweet or user IDs.",
        "format": "uri",
        "type": "string"
      },
      "Url": {
        "description": "A validly formatted URL.",
        "example": "https://developer.twitter.com/en/docs/twitter-api",
        "format": "uri",
        "type": "string"
      },
      "UrlEntity": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EntityIndicesInclusiveExclusive"
          },
          {
            "$ref": "#/components/schemas/UrlFields"
          }
        ],
        "description": "Represent the portion of text recognized as a URL, and its start and end position within the text."
      },
      "UrlFields": {
        "description": "Represent the portion of text recognized as a URL.",
        "properties": {
          "description": {
            "description": "Description of the URL landing page.",
            "example": "This is a description of the website.",
            "type": "string"
          },
          "display_url": {
            "description": "The URL as displayed in the Twitter client.",
            "example": "twittercommunity.com/t/introducing-…",
            "type": "string"
          },
          "expanded_url": {
            "$ref": "#/components/schemas/Url"
          },
          "images": {
            "items": {
              "$ref": "#/components/schemas/UrlImage"
            },
            "minItems": 1,
            "type": "array"
          },
          "media_key": {
            "$ref": "#/components/schemas/MediaKey"
          },
          "status": {
            "$ref": "#/components/schemas/HttpStatusCode"
          },
          "title": {
            "description": "Title of the page the URL points to.",
            "example": "Introducing the v2 follow lookup endpoints",
            "type": "string"
          },
          "unwound_url": {
            "description": "Fully resolved url.",
            "example": "https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118",
            "format": "uri",
            "type": "string"
          },
          "url": {
            "$ref": "#/components/schemas/Url"
          }
        },
        "required": [
          "url"
        ],
        "type": "object"
      },
      "UrlImage": {
        "description": "Represent the information for the URL image.",
        "properties": {
          "height": {
            "$ref": "#/components/schemas/MediaHeight"
          },
          "url": {
            "$ref": "#/components/schemas/Url"
          },
          "width": {
            "$ref": "#/components/schemas/MediaWidth"
          }
        },
        "type": "object"
      },
      "UsageCapExceededProblem": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Problem"
          },
          {
            "properties": {
              "period": {
                "enum": [
                  "Daily",
                  "Monthly"
                ],
                "type": "string"
              },
              "scope": {
                "enum": [
                  "Account",
                  "Product"
                ],
                "type": "string"
              }
            },
            "type": "object"
          }
        ],
        "description": "A problem that indicates that a usage cap has been exceeded."
      },
      "User": {
        "description": "The Twitter User object.",
        "example": {
          "created_at": "2013-12-14T04:35:55Z",
          "id": "2244994945",
          "name": "Twitter Dev",
          "protected": false,
          "username": "TwitterDev"
        },
        "properties": {
          "created_at": {
            "description": "Creation time of this User.",
            "format": "date-time",
            "type": "string"
          },
          "description": {
            "description": "The text of this User's profile description (also known as bio), if the User provided one.",
            "type": "string"
          },
          "entities": {
            "description": "A list of metadata found in the User's profile description.",
            "properties": {
              "description": {
                "$ref": "#/components/schemas/FullTextEntities"
              },
              "url": {
                "description": "Expanded details for the URL specified in the User's profile, with start and end indices.",
                "properties": {
                  "urls": {
                    "items": {
                      "$ref": "#/components/schemas/UrlEntity"
                    },
                    "minItems": 1,
                    "type": "array"
                  }
                },
                "type": "object"
              }
            },
            "type": "object"
          },
          "id": {
            "$ref": "#/components/schemas/UserId"
          },
          "location": {
            "description": "The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.",
            "type": "string"
          },
          "name": {
            "description": "The friendly name of this User, as shown on their profile.",
            "type": "string"
          },
          "pinned_tweet_id": {
            "$ref": "#/components/schemas/TweetId"
          },
          "profile_image_url": {
            "description": "The URL to the profile image for this User.",
            "format": "uri",
            "type": "string"
          },
          "protected": {
            "description": "Indicates if this User has chosen to protect their Tweets (in other words, if this User's Tweets are private).",
            "type": "boolean"
          },
          "public_metrics": {
            "description": "A list of metrics for this User.",
            "properties": {
              "followers_count": {
                "description": "Number of Users who are following this User.",
                "type": "integer"
              },
              "following_count": {
                "description": "Number of Users this User is following.",
                "type": "integer"
              },
              "listed_count": {
                "description": "The number of lists that include this User.",
                "type": "integer"
              },
              "tweet_count": {
                "description": "The number of Tweets (including Retweets) posted by this User.",
                "type": "integer"
              }
            },
            "required": [
              "followers_count",
              "following_count",
              "tweet_count",
              "listed_count"
            ],
            "type": "object"
          },
          "url": {
            "description": "The URL specified in the User's profile.",
            "type": "string"
          },
          "username": {
            "$ref": "#/components/schemas/UserName"
          },
          "verified": {
            "description": "Indicate if this User is a verified Twitter User.",
            "type": "boolean"
          },
          "verified_type": {
            "description": "The Twitter Blue verified type of the user, eg: blue, government, business or none.",
            "type": "string"
          },
          "withheld": {
            "$ref": "#/components/schemas/UserWithheld"
          }
        },
        "required": [
          "id",
          "name",
          "username"
        ],
        "type": "object"
      },
      "UserComplianceData": {
        "description": "User compliance data.",
        "oneOf": [
          {
            "$ref": "#/components/schemas/UserProtectComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/UserUnprotectComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/UserDeleteComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/UserUndeleteComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/UserSuspendComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/UserUnsuspendComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/UserWithheldComplianceSchema"
          },
          {
            "$ref": "#/components/schemas/UserScrubGeoSchema"
          },
          {
            "$ref": "#/components/schemas/UserProfileModificationComplianceSchema"
          }
        ]
      },
      "UserComplianceSchema": {
        "properties": {
          "event_at": {
            "description": "Event time.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "user": {
            "properties": {
              "id": {
                "$ref": "#/components/schemas/UserId"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          }
        },
        "required": [
          "user",
          "event_at"
        ],
        "type": "object"
      },
      "UserComplianceStreamResponse": {
        "description": "User compliance stream events.",
        "oneOf": [
          {
            "description": "User compliance event.",
            "properties": {
              "data": {
                "$ref": "#/components/schemas/UserComplianceData"
              }
            },
            "required": [
              "data"
            ],
            "type": "object"
          },
          {
            "properties": {
              "errors": {
                "items": {
                  "$ref": "#/components/schemas/Problem"
                },
                "minItems": 1,
                "type": "array"
              }
            },
            "required": [
              "errors"
            ],
            "type": "object"
          }
        ]
      },
      "UserDeleteComplianceSchema": {
        "properties": {
          "user_delete": {
            "$ref": "#/components/schemas/UserComplianceSchema"
          }
        },
        "required": [
          "user_delete"
        ],
        "type": "object"
      },
      "UserId": {
        "description": "Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.",
        "example": "2244994945",
        "pattern": "^[0-9]{1,19}$",
        "type": "string"
      },
      "UserIdMatchesAuthenticatedUser": {
        "description": "Unique identifier of this User. The value must be the same as the authenticated user.",
        "example": "2244994945",
        "type": "string"
      },
      "UserName": {
        "description": "The Twitter handle (screen name) of this user.",
        "pattern": "^[A-Za-z0-9_]{1,15}$",
        "type": "string"
      },
      "UserProfileModificationComplianceSchema": {
        "properties": {
          "user_profile_modification": {
            "$ref": "#/components/schemas/UserProfileModificationObjectSchema"
          }
        },
        "required": [
          "user_profile_modification"
        ],
        "type": "object"
      },
      "UserProfileModificationObjectSchema": {
        "properties": {
          "event_at": {
            "description": "Event time.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "new_value": {
            "type": "string"
          },
          "profile_field": {
            "type": "string"
          },
          "user": {
            "properties": {
              "id": {
                "$ref": "#/components/schemas/UserId"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          }
        },
        "required": [
          "user",
          "profile_field",
          "new_value",
          "event_at"
        ],
        "type": "object"
      },
      "UserProtectComplianceSchema": {
        "properties": {
          "user_protect": {
            "$ref": "#/components/schemas/UserComplianceSchema"
          }
        },
        "required": [
          "user_protect"
        ],
        "type": "object"
      },
      "UserScrubGeoObjectSchema": {
        "properties": {
          "event_at": {
            "description": "Event time.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "up_to_tweet_id": {
            "$ref": "#/components/schemas/TweetId"
          },
          "user": {
            "properties": {
              "id": {
                "$ref": "#/components/schemas/UserId"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          }
        },
        "required": [
          "user",
          "up_to_tweet_id",
          "event_at"
        ],
        "type": "object"
      },
      "UserScrubGeoSchema": {
        "properties": {
          "scrub_geo": {
            "$ref": "#/components/schemas/UserScrubGeoObjectSchema"
          }
        },
        "required": [
          "scrub_geo"
        ],
        "type": "object"
      },
      "UserSuspendComplianceSchema": {
        "properties": {
          "user_suspend": {
            "$ref": "#/components/schemas/UserComplianceSchema"
          }
        },
        "required": [
          "user_suspend"
        ],
        "type": "object"
      },
      "UserTakedownComplianceSchema": {
        "properties": {
          "event_at": {
            "description": "Event time.",
            "example": "2021-07-06T18:40:40.000Z",
            "format": "date-time",
            "type": "string"
          },
          "user": {
            "properties": {
              "id": {
                "$ref": "#/components/schemas/UserId"
              }
            },
            "required": [
              "id"
            ],
            "type": "object"
          },
          "withheld_in_countries": {
            "items": {
              "$ref": "#/components/schemas/CountryCode"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "required": [
          "user",
          "withheld_in_countries",
          "event_at"
        ],
        "type": "object"
      },
      "UserUndeleteComplianceSchema": {
        "properties": {
          "user_undelete": {
            "$ref": "#/components/schemas/UserComplianceSchema"
          }
        },
        "required": [
          "user_undelete"
        ],
        "type": "object"
      },
      "UserUnprotectComplianceSchema": {
        "properties": {
          "user_unprotect": {
            "$ref": "#/components/schemas/UserComplianceSchema"
          }
        },
        "required": [
          "user_unprotect"
        ],
        "type": "object"
      },
      "UserUnsuspendComplianceSchema": {
        "properties": {
          "user_unsuspend": {
            "$ref": "#/components/schemas/UserComplianceSchema"
          }
        },
        "required": [
          "user_unsuspend"
        ],
        "type": "object"
      },
      "UserWithheld": {
        "description": "Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).",
        "properties": {
          "country_codes": {
            "description": "Provides a list of countries where this content is not available.",
            "items": {
              "$ref": "#/components/schemas/CountryCode"
            },
            "minItems": 1,
            "type": "array",
            "uniqueItems": true
          },
          "scope": {
            "description": "Indicates that the content being withheld is a `user`.",
            "enum": [
              "user"
            ],
            "type": "string"
          }
        },
        "required": [
          "country_codes"
        ],
        "type": "object"
      },
      "UserWithheldComplianceSchema": {
        "properties": {
          "user_withheld": {
            "$ref": "#/components/schemas/UserTakedownComplianceSchema"
          }
        },
        "required": [
          "user_withheld"
        ],
        "type": "object"
      },
      "UsersFollowingCreateRequest": {
        "properties": {
          "target_user_id": {
            "$ref": "#/components/schemas/UserId"
          }
        },
        "required": [
          "target_user_id"
        ],
        "type": "object"
      },
      "UsersFollowingCreateResponse": {
        "properties": {
          "data": {
            "properties": {
              "following": {
                "type": "boolean"
              },
              "pending_follow": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "UsersFollowingDeleteResponse": {
        "properties": {
          "data": {
            "properties": {
              "following": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "UsersLikesCreateRequest": {
        "properties": {
          "tweet_id": {
            "$ref": "#/components/schemas/TweetId"
          }
        },
        "required": [
          "tweet_id"
        ],
        "type": "object"
      },
      "UsersLikesCreateResponse": {
        "properties": {
          "data": {
            "properties": {
              "liked": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "UsersLikesDeleteResponse": {
        "properties": {
          "data": {
            "properties": {
              "liked": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "UsersRetweetsCreateRequest": {
        "properties": {
          "tweet_id": {
            "$ref": "#/components/schemas/TweetId"
          }
        },
        "required": [
          "tweet_id"
        ],
        "type": "object"
      },
      "UsersRetweetsCreateResponse": {
        "properties": {
          "data": {
            "properties": {
              "retweeted": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "UsersRetweetsDeleteResponse": {
        "properties": {
          "data": {
            "properties": {
              "retweeted": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "errors": {
            "items": {
              "$ref": "#/components/schemas/Problem"
            },
            "minItems": 1,
            "type": "array"
          }
        },
        "type": "object"
      },
      "Variant": {
        "properties": {
          "bit_rate": {
            "description": "The bit rate of the media.",
            "type": "integer"
          },
          "content_type": {
            "description": "The content type of the media.",
            "type": "string"
          },
          "url": {
            "description": "The url to the media.",
            "format": "uri",
            "type": "string"
          }
        },
        "type": "object"
      },
      "Variants": {
        "description": "An array of all available variants of the media.",
        "items": {
          "$ref": "#/components/schemas/Variant"
        },
        "type": "array"
      },
      "Video": {
        "allOf": [
          {
            "$ref": "#/components/schemas/Media"
          },
          {
            "properties": {
              "duration_ms": {
                "type": "integer"
              },
              "non_public_metrics": {
                "description": "Nonpublic engagement metrics for the Media at the time of the request.",
                "properties": {
                  "playback_0_count": {
                    "description": "Number of users who made it through 0% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_100_count": {
                    "description": "Number of users who made it through 100% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_25_count": {
                    "description": "Number of users who made it through 25% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_50_count": {
                    "description": "Number of users who made it through 50% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_75_count": {
                    "description": "Number of users who made it through 75% of the video.",
                    "format": "int32",
                    "type": "integer"
                  }
                },
                "type": "object"
              },
              "organic_metrics": {
                "description": "Organic nonpublic engagement metrics for the Media at the time of the request.",
                "properties": {
                  "playback_0_count": {
                    "description": "Number of users who made it through 0% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_100_count": {
                    "description": "Number of users who made it through 100% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_25_count": {
                    "description": "Number of users who made it through 25% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_50_count": {
                    "description": "Number of users who made it through 50% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_75_count": {
                    "description": "Number of users who made it through 75% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "view_count": {
                    "description": "Number of times this video has been viewed.",
                    "format": "int32",
                    "type": "integer"
                  }
                },
                "type": "object"
              },
              "preview_image_url": {
                "format": "uri",
                "type": "string"
              },
              "promoted_metrics": {
                "description": "Promoted nonpublic engagement metrics for the Media at the time of the request.",
                "properties": {
                  "playback_0_count": {
                    "description": "Number of users who made it through 0% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_100_count": {
                    "description": "Number of users who made it through 100% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_25_count": {
                    "description": "Number of users who made it through 25% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_50_count": {
                    "description": "Number of users who made it through 50% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "playback_75_count": {
                    "description": "Number of users who made it through 75% of the video.",
                    "format": "int32",
                    "type": "integer"
                  },
                  "view_count": {
                    "description": "Number of times this video has been viewed.",
                    "format": "int32",
                    "type": "integer"
                  }
                },
                "type": "object"
              },
              "public_metrics": {
                "description": "Engagement metrics for the Media at the time of the request.",
                "properties": {
                  "view_count": {
                    "description": "Number of times this video has been viewed.",
                    "format": "int32",
                    "type": "integer"
                  }
                },
                "type": "object"
              },
              "variants": {
                "$ref": "#/components/schemas/Variants"
              }
            },
            "type": "object"
          }
        ]
      }
    },
    "securitySchemes": {
      "BearerToken": {
        "scheme": "bearer",
        "type": "http"
      },
      "OAuth2UserToken": {
        "flows": {
          "authorizationCode": {
            "authorizationUrl": "https://api.twitter.com/2/oauth2/authorize",
            "scopes": {
              "block.read": "Accounts you’ve blocked.",
              "block.write": "Block and unblock accounts for you.",
              "bookmark.read": "Allows an app to read bookmarked Tweets",
              "bookmark.write": "Allows an app to create and delete bookmarks",
              "dm.read": "All your Direct Messages",
              "dm.write": "Send and manage Direct Messages for you",
              "follows.read": "People who follow you and people who you follow.",
              "follows.write": "Follow and unfollow people for you.",
              "like.read": "Tweets you’ve liked and likes you can view.",
              "like.write": "Like and un-like Tweets for you.",
              "list.read": "Lists, list members, and list followers of lists you’ve created or are a member of, including private lists.",
              "list.write": "Create and manage Lists for you.",
              "mute.read": "Accounts you’ve muted.",
              "mute.write": "Mute and unmute accounts for you.",
              "offline.access": "App can request refresh token.",
              "space.read": "Access all of the Spaces you can see.",
              "tweet.moderate.write": "Hide and unhide replies to your Tweets.",
              "tweet.read": "All the Tweets you can see, including Tweets from protected accounts.",
              "tweet.write": "Tweet and retweet for you.",
              "users.read": "Any account you can see, including protected accounts. Any account you can see, including protected accounts."
            },
            "tokenUrl": "https://api.twitter.com/2/oauth2/token"
          }
        },
        "type": "oauth2"
      },
      "UserToken": {
        "scheme": "OAuth",
        "type": "http"
      }
    }
  }
} as const
            