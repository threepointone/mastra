
            export default {
  "openapi": "3.0.2",
  "servers": [
    {
      "description": "Vimeo.com",
      "url": "https://api.vimeo.com"
    }
  ],
  "info": {
    "contact": {
      "url": "https://developer.vimeo.com/help",
      "x-twitter": "vimeo"
    },
    "title": "Vimeo",
    "version": "3.4",
    "x-apisguru-categories": [
      "entertainment"
    ],
    "x-logo": {
      "url": "https://twitter.com/vimeo/profile_image?size=original"
    },
    "x-origin": [
      {
        "converter": {
          "url": "https://github.com/lucybot/api-spec-converter",
          "version": "2.7.31"
        },
        "format": "openapi",
        "url": "https://raw.githubusercontent.com/vimeo/openapi/master/api.yaml",
        "version": "3.0"
      }
    ],
    "x-providerName": "vimeo.com"
  },
  "security": [
    {
      "oauth2": [
        "create",
        "delete",
        "edit",
        "email",
        "interact",
        "private",
        "promo_codes",
        "public",
        "purchase",
        "purchased",
        "stats",
        "upload",
        "video_files"
      ]
    }
  ],
  "tags": [
    {
      "name": "API Information"
    },
    {
      "name": "Albums\\Album videos"
    },
    {
      "name": "Albums\\Custom album logos"
    },
    {
      "name": "Albums\\Custom album thumbnails"
    },
    {
      "name": "Albums\\Essentials"
    },
    {
      "name": "Authentication Extras\\Essentials"
    },
    {
      "name": "Categories\\Channels"
    },
    {
      "name": "Categories\\Essentials"
    },
    {
      "name": "Categories\\Groups"
    },
    {
      "name": "Categories\\Subscriptions"
    },
    {
      "name": "Categories\\Videos"
    },
    {
      "name": "Channels\\Categories"
    },
    {
      "name": "Channels\\Essentials"
    },
    {
      "name": "Channels\\Moderators"
    },
    {
      "name": "Channels\\Private channel members"
    },
    {
      "name": "Channels\\Subscriptions and subscribers"
    },
    {
      "name": "Channels\\Tags"
    },
    {
      "name": "Channels\\Videos"
    },
    {
      "name": "Embed Presets\\Custom Logos"
    },
    {
      "name": "Embed Presets\\Essentials"
    },
    {
      "name": "Embed Presets\\Videos"
    },
    {
      "name": "Groups\\Essentials"
    },
    {
      "name": "Groups\\Subscription"
    },
    {
      "name": "Groups\\Users"
    },
    {
      "name": "Groups\\Videos"
    },
    {
      "name": "Likes\\Essentials"
    },
    {
      "name": "On Demand\\Backgrounds"
    },
    {
      "name": "On Demand\\Essentials"
    },
    {
      "name": "On Demand\\Genres"
    },
    {
      "name": "On Demand\\Posters"
    },
    {
      "name": "On Demand\\Promotions"
    },
    {
      "name": "On Demand\\Purchases and Rentals"
    },
    {
      "name": "On Demand\\Regions"
    },
    {
      "name": "On Demand\\Seasons"
    },
    {
      "name": "On Demand\\Videos"
    },
    {
      "name": "Portfolios\\Essentials"
    },
    {
      "name": "Portfolios\\Videos"
    },
    {
      "name": "Projects\\Essentials"
    },
    {
      "name": "Projects\\Videos"
    },
    {
      "name": "Tags\\Essentials"
    },
    {
      "name": "Users\\Essentials"
    },
    {
      "name": "Users\\Feed"
    },
    {
      "name": "Users\\Follows"
    },
    {
      "name": "Users\\Internal"
    },
    {
      "name": "Users\\Pictures"
    },
    {
      "name": "Users\\Watch History"
    },
    {
      "name": "Videos\\Comments"
    },
    {
      "name": "Videos\\Content Ratings"
    },
    {
      "name": "Videos\\Creative Commons"
    },
    {
      "name": "Videos\\Credits"
    },
    {
      "name": "Videos\\Embed Privacy"
    },
    {
      "name": "Videos\\Essentials"
    },
    {
      "name": "Videos\\Languages"
    },
    {
      "name": "Videos\\Recommendations"
    },
    {
      "name": "Videos\\Tags"
    },
    {
      "name": "Videos\\Text Tracks"
    },
    {
      "name": "Videos\\Thumbnails"
    },
    {
      "name": "Videos\\Upload"
    },
    {
      "name": "Videos\\Versions"
    },
    {
      "name": "Videos\\Viewing Privacy"
    },
    {
      "name": "Watch Later Queue\\Essentials"
    }
  ],
  "paths": {
    "/": {
      "get": {
        "operationId": "get_endpoints",
        "parameters": [
          {
            "description": "Return an OpenAPI specification.",
            "in": "query",
            "name": "openapi",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.endpoint+json": {
                "schema": {
                  "$ref": "#/components/schemas/endpoint"
                }
              }
            },
            "description": "Standard request."
          }
        },
        "summary": "Get an API specification",
        "tags": [
          "API Information"
        ]
      }
    },
    "/categories": {
      "get": {
        "description": "This method gets all existing categories.",
        "operationId": "get_categories",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "last_video_featured_time",
                "name"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/category"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The categories were returned."
          }
        },
        "summary": "Get all categories",
        "tags": [
          "Categories\\Essentials"
        ]
      }
    },
    "/categories/{category}": {
      "get": {
        "operationId": "get_category",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/category"
                }
              }
            },
            "description": "The category was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such category exists."
          }
        },
        "summary": "Get a specific category",
        "tags": [
          "Categories\\Essentials"
        ]
      }
    },
    "/categories/{category}/channels": {
      "get": {
        "operationId": "get_category_channels",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "followers",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/channel"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The channels were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such category exists."
          }
        },
        "summary": "Get all the channels in a category",
        "tags": [
          "Categories\\Channels"
        ]
      }
    },
    "/categories/{category}/groups": {
      "get": {
        "operationId": "get_category_groups",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "members",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.group+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/group"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The groups were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.group+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such category exists."
          }
        },
        "summary": "Get all the groups in a category",
        "tags": [
          "Categories\\Groups"
        ]
      }
    },
    "/categories/{category}/videos": {
      "get": {
        "operationId": "get_category_videos",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `conditional_featured` - Featured (promoted) videos\n",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "conditional_featured",
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "duration",
                "featured",
                "likes",
                "plays",
                "relevant"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such category exists."
          }
        },
        "summary": "Get all the videos in a category",
        "tags": [
          "Categories\\Videos"
        ]
      }
    },
    "/categories/{category}/videos/{video_id}": {
      "get": {
        "operationId": "check_category_for_video",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 273576296,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video belongs to the category."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such category exists, or the video doesn't belong to it."
          }
        },
        "summary": "Check for a video in a category",
        "tags": [
          "Categories\\Videos"
        ]
      }
    },
    "/channels": {
      "get": {
        "operationId": "get_channels",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "featured"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.\n\nOption descriptions:\n * `relevant` - Relevant sorting is available only for search queries.\n",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "followers",
                "relevant",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/channel"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The channels were returned."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The relevant sort has no search query."
          }
        },
        "summary": "Get all channels",
        "tags": [
          "Channels\\Essentials"
        ]
      },
      "post": {
        "description": "This method creates a new channel.",
        "operationId": "create_channel",
        "requestBody": {
          "content": {
            "application/vnd.vimeo.channel+json": {
              "schema": {
                "properties": {
                  "description": {
                    "description": "The description of the channel.",
                    "example": "We really love videos, and these are the videos we really, really love.",
                    "type": "string"
                  },
                  "link": {
                    "description": "The link to access the channel. You can use a custom name in the URL in place of a numeric channel ID, as in `/channels/{url_custom}`.",
                    "example": "staffpicks",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the channel.",
                    "example": "Vimeo Staff Picks",
                    "type": "string"
                  },
                  "privacy": {
                    "description": "The privacy level of the channel.",
                    "enum": [
                      "anybody",
                      "moderators",
                      "user"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "name",
                  "privacy"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/channel"
                }
              }
            },
            "description": "The channel was created."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't create a channel."
          }
        },
        "security": [
          {
            "oauth2": [
              "create"
            ]
          }
        ],
        "summary": "Create a channel",
        "tags": [
          "Channels\\Essentials"
        ]
      }
    },
    "/channels/{channel_id}": {
      "delete": {
        "operationId": "delete_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The channel was deleted."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own this channel."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a channel",
        "tags": [
          "Channels\\Essentials"
        ]
      },
      "get": {
        "operationId": "get_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/channel"
                }
              }
            },
            "description": "The channel was returned."
          }
        },
        "summary": "Get a specific channel",
        "tags": [
          "Channels\\Essentials"
        ]
      },
      "patch": {
        "description": "This method edits the specified channel.",
        "operationId": "edit_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.channel+json": {
              "schema": {
                "properties": {
                  "description": {
                    "description": "The description of the channel.",
                    "example": "We really love videos, and these are the videos we really, really love.",
                    "type": "string"
                  },
                  "link": {
                    "description": "The link to access the channel. You can use a custom name in the URL in place of a numeric channel ID, as in `/channels/{url_custom}`. Submitting `\"\"` for this field removes the link alias.",
                    "example": "staffpicks",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the channel.",
                    "example": "Vimeo Staff Picks",
                    "type": "string"
                  },
                  "privacy": {
                    "description": "The privacy level of the channel.",
                    "enum": [
                      "anybody",
                      "moderators",
                      "users"
                    ],
                    "type": "string"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/channel"
                }
              }
            },
            "description": "The channel was edited."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a channel",
        "tags": [
          "Channels\\Essentials"
        ]
      }
    },
    "/channels/{channel_id}/categories": {
      "get": {
        "description": "This method gets all the categories in the specified channel.",
        "operationId": "get_channel_categories",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/category"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The categories were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "summary": "Get all the categories in a channel",
        "tags": [
          "Channels\\Categories"
        ]
      },
      "put": {
        "description": "This method adds multiple categories to the specified channel.",
        "operationId": "add_channel_categories",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "channels": {
                    "description": "The array of category URIs to add.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "channels"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "204": {
            "description": "The categories were added."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2205: There was no request body, or the request body is malformed.\n* Error code 2204: You exceeded the maximum number of channel categories."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't add categories to the channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "summary": "Add a list of categories to a channel",
        "tags": [
          "Channels\\Categories"
        ]
      }
    },
    "/channels/{channel_id}/categories/{category}": {
      "delete": {
        "description": "This method removes a single category from the specified channel.",
        "operationId": "delete_channel_category",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The channel was removed."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user doesn't own the channel or isn't a channel moderator."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel or category exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a category from a channel",
        "tags": [
          "Channels\\Categories"
        ]
      },
      "put": {
        "description": "This method adds a channel to a category.",
        "operationId": "categorize_channel",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The channel was categorized."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: You exceeded the maximum number of channel categories."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user doesn't own the channel or isn't a channel moderator."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel or category exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Categorize a channel",
        "tags": [
          "Channels\\Categories"
        ]
      }
    },
    "/channels/{channel_id}/moderators": {
      "delete": {
        "operationId": "remove_channel_moderators",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.user+json": {
              "schema": {
                "properties": {
                  "user_uri": {
                    "description": "The URI of a user to remove as a moderator.",
                    "example": "/users/152184",
                    "type": "string"
                  }
                },
                "required": [
                  "user_uri"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "204": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            },
            "description": "The moderators were removed."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the channel, the user isn't a moderator of the channel, or you tried to remove the owner of the channel."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists, or no such user exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a list of channel moderators",
        "tags": [
          "Channels\\Moderators"
        ]
      },
      "get": {
        "operationId": "get_channel_moderators",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The moderators were returned."
          }
        },
        "summary": "Get all the moderators in a channel",
        "tags": [
          "Channels\\Moderators"
        ]
      },
      "patch": {
        "operationId": "replace_channel_moderators",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "user_uri": {
                    "description": "The URI of the user to add as a moderator.",
                    "example": "/users/152184",
                    "type": "string"
                  }
                },
                "required": [
                  "user_uri"
                ],
                "type": "object"
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
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The moderators were replaced."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2908: The list contains more than 100 users."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user owns this channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Replace the moderators of a channel",
        "tags": [
          "Channels\\Moderators"
        ]
      },
      "put": {
        "operationId": "add_channel_moderators",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "user_uri": {
                    "description": "The URI of a user to add as a moderator.",
                    "example": "/users/152184",
                    "type": "string"
                  }
                },
                "required": [
                  "user_uri"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "The moderators were added."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2908: The list contains more than 100 users."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the channel, a user is already a moderator of the channel, or you tried to add a user that the authenticated user doesn't follow."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists, or no such user exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a list of channel moderators",
        "tags": [
          "Channels\\Moderators"
        ]
      }
    },
    "/channels/{channel_id}/moderators/{user_id}": {
      "delete": {
        "operationId": "remove_channel_moderator",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The moderator was removed."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the channel, the user isn't a moderator of the channel, or you tried to remove the owner of the channel."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists, or no such user exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a specific channel moderator",
        "tags": [
          "Channels\\Moderators"
        ]
      },
      "get": {
        "operationId": "get_channel_moderator",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            },
            "description": "The moderator was returned."
          }
        },
        "summary": "Get a specific channel moderator",
        "tags": [
          "Channels\\Moderators"
        ]
      },
      "put": {
        "operationId": "add_channel_moderator",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "403": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the channel, a user is already a moderator of the channel, or you tried to add a user that the authenticated user doesn't follow."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists, or no such user exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a specific channel moderator",
        "tags": [
          "Channels\\Moderators"
        ]
      }
    },
    "/channels/{channel_id}/privacy/users": {
      "get": {
        "description": "This method gets all the users who have access to the specified private channel.",
        "operationId": "get_channel_privacy_users",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users were returned."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user doesn't own this channel."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: You can't add this user to a channel of this type."
          }
        },
        "summary": "Get all the users who can view a private channel",
        "tags": [
          "Channels\\Private channel members"
        ]
      },
      "put": {
        "description": "This method gives multiple users access to the specified private channel.",
        "operationId": "set_channel_privacy_users",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.user+json": {
              "schema": {
                "properties": {
                  "users": {
                    "description": "The array of either the user URIs or the user IDs to permit to view the private channel.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "users"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users can now view the private channel."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2205: There was no request body, or the request body is malformed.\n* Error code 2900: At least one of the specified user accounts doesn't exist."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user doesn't own this channel."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: You can't add one or more of these users to a channel of this type."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Permit a list of users to view a private channel",
        "tags": [
          "Channels\\Private channel members"
        ]
      }
    },
    "/channels/{channel_id}/privacy/users/{user_id}": {
      "delete": {
        "description": "This method prevents a single user from being able to access the specified private channel.",
        "operationId": "delete_channel_privacy_user",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user can no longer view the private channel."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user doesn't own this channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: You can't add this user to a channel of this type."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Restrict a user from viewing a private channel",
        "tags": [
          "Channels\\Private channel members"
        ]
      },
      "put": {
        "description": "This method gives a single user access to the specified private channel.",
        "operationId": "set_channel_privacy_user",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "The user can now view the private channel."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user doesn't own this channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: You can't add this user to a channel of this type."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Permit a specific user to view a private channel",
        "tags": [
          "Channels\\Private channel members"
        ]
      }
    },
    "/channels/{channel_id}/tags": {
      "get": {
        "description": "This method gets all the tags that have been added to the specified channel.",
        "operationId": "get_channel_tags",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/tag"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The tags were returned."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "summary": "Get all the tags that have been added to a channel",
        "tags": [
          "Channels\\Tags"
        ]
      },
      "put": {
        "description": "This method adds multiple tags to the specified channel.",
        "operationId": "add_tags_to_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.tag+json": {
              "schema": {
                "properties": {
                  "tag": {
                    "description": "An array of tags to assign.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "tag"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/tag"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The tags were added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* No such channel exists, or a parameter is invalid.\n* Error code 2501: You tried to add more than 20 tags to the channel.\n* Error code 2205: There was no request body, or the request body is malformed."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't add tags to this channel."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a list of tags to a channel",
        "tags": [
          "Channels\\Tags"
        ]
      }
    },
    "/channels/{channel_id}/tags/{word}": {
      "delete": {
        "description": "This method removes a single tag from the specified channel.",
        "operationId": "delete_tag_from_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The word to use as the tag.",
            "in": "path",
            "name": "word",
            "required": true,
            "schema": {
              "example": "awesome",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The tag was removed."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The tag is invalid, or a parameter is invalid."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't remove tags from this channel."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a tag from a channel",
        "tags": [
          "Channels\\Tags"
        ]
      },
      "get": {
        "description": "This method determines whether a specific tag has been added to the channel in question.",
        "operationId": "check_if_channel_has_tag",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The word to use as the tag.",
            "in": "path",
            "name": "word",
            "required": true,
            "schema": {
              "example": "awesome",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The tag has been added to the channel."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such tag exists."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: The tag exists, but the channel isn't tagged by it."
          }
        },
        "summary": "Check if a tag has been added to a channel",
        "tags": [
          "Channels\\Tags"
        ]
      },
      "put": {
        "description": "This method adds a single tag to the specified channel.",
        "operationId": "add_channel_tag",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The word to use as the tag.",
            "in": "path",
            "name": "word",
            "required": true,
            "schema": {
              "example": "awesome",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The tag was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The tag is invalid, or a parameter is invalid.\n* Error code 2501: The channel has already reached its maximum number of 20 tags."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't add tags to this channel."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a specific tag to a channel",
        "tags": [
          "Channels\\Tags"
        ]
      }
    },
    "/channels/{channel_id}/users": {
      "get": {
        "operationId": "get_channel_subscribers",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": true,
            "schema": {
              "enum": [
                "moderators"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The followers were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "summary": "Get all the followers of a channel",
        "tags": [
          "Channels\\Subscriptions and subscribers"
        ]
      }
    },
    "/channels/{channel_id}/videos": {
      "delete": {
        "operationId": "remove_videos_from_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "video_uri": {
                    "description": "The URI of a video to remove.",
                    "example": "/videos/258684937",
                    "type": "string"
                  }
                },
                "required": [
                  "video_uri"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "204": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The videos were removed."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user isn't a moderator of this channel, or you can't remove this video from the channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists, or no such user exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a list of videos from a channel",
        "tags": [
          "Channels\\Videos"
        ]
      },
      "get": {
        "operationId": "get_channel_videos",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The page that contains the video URI.",
            "in": "query",
            "name": "containing_uri",
            "required": false,
            "schema": {
              "example": "/videos/258684937",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "added",
                "alphabetical",
                "comments",
                "date",
                "default",
                "duration",
                "likes",
                "manual",
                "modified_time",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "304": {
            "description": "No videos have been added to this channel since the given `If-Modified-Since` header."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The **sort** field is `default`, but the **direction** field has a value."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "summary": "Get all the videos in a channel",
        "tags": [
          "Channels\\Videos"
        ]
      },
      "put": {
        "operationId": "add_videos_to_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "video_uri": {
                    "description": "The URI of a video to add.",
                    "example": "/videos/258684937",
                    "type": "string"
                  }
                },
                "required": [
                  "video_uri"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "The videos were added."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user isn't a moderator of the channel, or the video can't be added to the channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists, or no such user exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a list of videos to a channel",
        "tags": [
          "Channels\\Videos"
        ]
      }
    },
    "/channels/{channel_id}/videos/{video_id}": {
      "delete": {
        "operationId": "delete_video_from_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was removed."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user isn't a moderator of this channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists, or no such video exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a specific video from a channel",
        "tags": [
          "Channels\\Videos"
        ]
      },
      "get": {
        "description": "This method returns a specific video in a channel. You can use it to determine whether the video is in the channel.",
        "operationId": "get_channel_video",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "summary": "Get a specific video in a channel",
        "tags": [
          "Channels\\Videos"
        ]
      },
      "put": {
        "operationId": "add_video_to_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was added."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The video can't be added to channels, or the authenticated user isn't the moderator of this channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists, or no such video exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a specific video to a channel",
        "tags": [
          "Channels\\Videos"
        ]
      }
    },
    "/channels/{channel_id}/videos/{video_id}/comments": {
      "get": {
        "operationId": "get_comments_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/comment"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The comments were returned."
          }
        },
        "summary": "Get all the comments on a video",
        "tags": [
          "Videos\\Comments"
        ]
      },
      "post": {
        "operationId": "create_comment_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.comment+json": {
              "schema": {
                "properties": {
                  "text": {
                    "description": "The text of the comment.",
                    "example": "I love this!",
                    "type": "string"
                  }
                },
                "required": [
                  "text"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            },
            "description": "The comment was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2207: The comment text is missing."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 3413: Comments are disabled for this video.\n* Error code 3411: The authenticated user is unverified.\n* Error code 3412: The authenticated user can't comment.\n* Error code 3301: The comment was flagged as spam."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a comment to a video",
        "tags": [
          "Videos\\Comments"
        ]
      }
    },
    "/channels/{channel_id}/videos/{video_id}/credits": {
      "get": {
        "operationId": "get_video_credits_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/credit"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users were returned."
          }
        },
        "summary": "Get all the credited users in a video",
        "tags": [
          "Videos\\Credits"
        ]
      },
      "post": {
        "operationId": "add_video_credit_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.credit+json": {
              "schema": {
                "properties": {
                  "email": {
                    "description": "The email address of the credited person.",
                    "example": "user@example.com",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the credited person.",
                    "example": "Sam Doe",
                    "type": "string"
                  },
                  "role": {
                    "description": "The role of the credited person.",
                    "example": "Producer",
                    "type": "string"
                  },
                  "user_uri": {
                    "description": "The URI of the Vimeo user who should be given credit in this video.",
                    "example": "/users/152184",
                    "type": "string"
                  }
                },
                "required": [
                  "email",
                  "name",
                  "role",
                  "user_uri"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/credit"
                }
              }
            },
            "description": "The credit was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The credit was added.\n* A parameter is invalid.\n* The authenticated user has an unverified email address.\n* There is a user block between the video owner and the person receiving credit."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the video."
          }
        },
        "summary": "Credit a user in a video",
        "tags": [
          "Videos\\Credits"
        ]
      }
    },
    "/channels/{channel_id}/videos/{video_id}/likes": {
      "get": {
        "operationId": "get_video_likes_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users were returned."
          }
        },
        "summary": "Get all the users who have liked a video",
        "tags": [
          "Likes\\Essentials"
        ]
      }
    },
    "/channels/{channel_id}/videos/{video_id}/pictures": {
      "get": {
        "operationId": "get_video_thumbnails_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The thumbnails were returned."
          }
        },
        "summary": "Get all the thumbnails of a video",
        "tags": [
          "Videos\\Thumbnails"
        ]
      },
      "post": {
        "operationId": "create_video_thumbnail_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.picture+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether the image created by the `time` field should be the default thumbnail for the video.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "time": {
                    "description": "Creates an image of the video from the given time offset.",
                    "example": 300,
                    "type": "number"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The thumbnail was created."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a video thumbnail",
        "tags": [
          "Videos\\Thumbnails"
        ]
      }
    },
    "/channels/{channel_id}/videos/{video_id}/privacy/users": {
      "get": {
        "operationId": "get_video_privacy_users_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users were returned."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No users can view the private video."
          }
        },
        "summary": "Get all the users who can view a user's private videos by default",
        "tags": [
          "Videos\\Viewing Privacy"
        ]
      },
      "put": {
        "description": "The body of this request should follow our\n[batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain\na single `URI` field, and the value of this field must be the URI of the user who can view this video.",
        "operationId": "add_video_privacy_users_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users can now view the private video."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Permit a list of users to view a private video",
        "tags": [
          "Videos\\Viewing Privacy"
        ]
      }
    },
    "/channels/{channel_id}/videos/{video_id}/texttracks": {
      "get": {
        "operationId": "get_text_tracks_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/text-track"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The text tracks were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video exists."
          }
        },
        "summary": "Get all the text tracks of a video",
        "tags": [
          "Videos\\Text Tracks"
        ]
      },
      "post": {
        "description": "For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).",
        "operationId": "create_text_track_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.video.texttrack+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Active text tracks appear in the player and are visible to other users. Only one text track per language can be active.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "language": {
                    "description": "The language of the text track. For a complete list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.",
                    "example": "en-US",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the text track.",
                    "example": "Commentary",
                    "type": "string"
                  },
                  "type": {
                    "description": "The type of the text track.",
                    "enum": [
                      "captions",
                      "chapters",
                      "descriptions",
                      "metadata",
                      "subtitles"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "language",
                  "name",
                  "type"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/text-track"
                }
              }
            },
            "description": "The text track was added."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The authenticated user can't edit the text track.\n* Error code 2204: The request contains errors."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a text track to a video",
        "tags": [
          "Videos\\Text Tracks"
        ]
      }
    },
    "/contentratings": {
      "get": {
        "operationId": "get_content_ratings",
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.contentrating+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/content-rating"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The content ratings were returned."
          }
        },
        "summary": "Get all content ratings",
        "tags": [
          "Videos\\Content Ratings"
        ]
      }
    },
    "/creativecommons": {
      "get": {
        "operationId": "get_cc_licenses",
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.creativecommons+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/creative-commons"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The Creative Commons licenses were returned."
          }
        },
        "summary": "Get all Creative Commons licenses",
        "tags": [
          "Videos\\Creative Commons"
        ]
      }
    },
    "/groups": {
      "get": {
        "operationId": "get_groups",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "featured"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.\n\nOption descriptions:\n * `relevant` - Relevant sorting is available only for search queries.\n",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "followers",
                "relevant",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.group+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/group"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The groups were returned."
          }
        },
        "summary": "Get all groups",
        "tags": [
          "Groups\\Essentials"
        ]
      },
      "post": {
        "operationId": "create_group",
        "requestBody": {
          "content": {
            "application/vnd.vimeo.group+json": {
              "schema": {
                "properties": {
                  "description": {
                    "description": "The description of the new group.",
                    "example": "Want to participate in our weekly Challenges? Join the Group to receive messages and new Challenges!",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the new group.",
                    "example": "Vimeo Weekend Challenge",
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.group+json": {
                "schema": {
                  "$ref": "#/components/schemas/group"
                }
              }
            },
            "description": "The group was created."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.group+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.group+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't create groups."
          }
        },
        "security": [
          {
            "oauth2": [
              "create"
            ]
          }
        ],
        "summary": "Create a group",
        "tags": [
          "Groups\\Essentials"
        ]
      }
    },
    "/groups/{group_id}": {
      "delete": {
        "operationId": "delete_group",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The group was deleted."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user isn't the group owner."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a group",
        "tags": [
          "Groups\\Essentials"
        ]
      },
      "get": {
        "operationId": "get_group",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.group+json": {
                "schema": {
                  "$ref": "#/components/schemas/group"
                }
              }
            },
            "description": "The group was returned."
          }
        },
        "summary": "Get a specific group",
        "tags": [
          "Groups\\Essentials"
        ]
      }
    },
    "/groups/{group_id}/users": {
      "get": {
        "operationId": "get_group_members",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "moderators"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The members were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such group exists."
          }
        },
        "summary": "Get all the members of a group",
        "tags": [
          "Groups\\Users"
        ]
      }
    },
    "/groups/{group_id}/videos": {
      "get": {
        "operationId": "get_group_videos",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "duration",
                "likes",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "304": {
            "description": "No videos have been added to this group since the given `If-Modified-Since` header."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such group exists."
          }
        },
        "summary": "Get all the videos in a group",
        "tags": [
          "Groups\\Videos"
        ]
      }
    },
    "/groups/{group_id}/videos/{video_id}": {
      "delete": {
        "operationId": "delete_video_from_group",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was deleted."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't modify this group's videos."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a video from a group",
        "tags": [
          "Groups\\Videos"
        ]
      },
      "get": {
        "description": "Check if a group has a video.",
        "operationId": "get_group_video",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video or group exists."
          }
        },
        "summary": "Get a specific video in a group",
        "tags": [
          "Groups\\Videos"
        ]
      },
      "put": {
        "operationId": "add_video_to_group",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video was added."
          },
          "202": {
            "description": "The video is in pending status."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The video is already in the group.\n* The user can't add videos to the group."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a video to a group",
        "tags": [
          "Groups\\Videos"
        ]
      }
    },
    "/languages": {
      "get": {
        "operationId": "get_languages",
        "parameters": [
          {
            "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `texttracks` - Only return text track supported languages\n",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "texttracks"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.language+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/language"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The languages were returned."
          }
        },
        "summary": "Get all languages",
        "tags": [
          "Videos\\Languages"
        ]
      }
    },
    "/me": {
      "get": {
        "operationId": "get_user_alt1",
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            },
            "description": "The user was returned."
          }
        },
        "summary": "Get a user",
        "tags": [
          "Users\\Essentials"
        ]
      },
      "patch": {
        "operationId": "edit_user_alt1",
        "requestBody": {
          "content": {
            "application/vnd.vimeo.user+json": {
              "schema": {
                "properties": {
                  "bio": {
                    "description": "The user's bio.",
                    "example": "This is where you will find videos and news updates from the staff",
                    "type": "string"
                  },
                  "content_filter": {
                    "description": "A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint. You must provide a comma-separated list if you are using a query string or an array if you are using JSON.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "link": {
                    "description": "The user's custom Vimeo URL slug.",
                    "example": "staff",
                    "type": "string"
                  },
                  "location": {
                    "description": "The user's location.",
                    "example": "New York City",
                    "type": "string"
                  },
                  "name": {
                    "description": "The user's display name.",
                    "example": "Vimeo Staff",
                    "type": "string"
                  },
                  "password": {
                    "description": "The default password for all future videos that this user uploads. To use this field, the `videos.privacy.view` field must be `password`.",
                    "example": "hunter1",
                    "type": "string"
                  },
                  "videos": {
                    "properties": {
                      "privacy": {
                        "properties": {
                          "add": {
                            "description": "Whether a user can add the video to an album, channel, or group. This value becomes the default add setting for all future videos uploaded by the user.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "comments": {
                            "description": "Who can comment on the video. This value becomes the default comment setting for all future videos that this user uploads.",
                            "enum": [
                              "anybody",
                              "contacts",
                              "nobody"
                            ],
                            "type": "string"
                          },
                          "download": {
                            "description": "Whether a user can download the video. This value becomes the default download setting for all future videos that this user uploads.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "embed": {
                            "description": "The privacy for embed videos. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for adding and removing domains.",
                            "enum": [
                              "private",
                              "public",
                              "whitelist"
                            ],
                            "type": "string"
                          },
                          "view": {
                            "description": "Who can view the video. This value becomes the default view setting for all future videos that this user uploads.",
                            "enum": [
                              "anybody",
                              "contacts",
                              "disable",
                              "nobody",
                              "password",
                              "unlisted",
                              "users"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            },
            "description": "The user was edited."
          }
        },
        "summary": "Edit a user",
        "tags": [
          "Users\\Essentials"
        ]
      }
    },
    "/me/albums": {
      "get": {
        "operationId": "get_albums_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "duration",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/album"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The albums were returned."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          }
        },
        "summary": "Get all the albums that belong to a user",
        "tags": [
          "Albums\\Essentials"
        ]
      },
      "post": {
        "operationId": "create_album_alt1",
        "requestBody": {
          "content": {
            "application/vnd.vimeo.album+json": {
              "schema": {
                "properties": {
                  "brand_color": {
                    "description": "The hexadecimal code for the color of the player buttons.",
                    "example": "ff66ee",
                    "type": "string"
                  },
                  "description": {
                    "description": "The description of the album.",
                    "example": "Vimeo holiday videos!",
                    "type": "string"
                  },
                  "hide_nav": {
                    "description": "Whether to hide Vimeo navigation when displaying the album.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "layout": {
                    "description": "The type of layout for presenting the album.",
                    "enum": [
                      "grid",
                      "player"
                    ],
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the album.",
                    "example": "Vimeo Holiday Videos!",
                    "type": "string"
                  },
                  "password": {
                    "description": "The album's password. Required only if **privacy** is `password`.",
                    "example": "hunter1",
                    "type": "string"
                  },
                  "privacy": {
                    "description": "The privacy level of the album.",
                    "enum": [
                      "anybody",
                      "embed_only",
                      "password"
                    ],
                    "type": "string"
                  },
                  "review_mode": {
                    "description": "Whether album videos should use the review mode URL.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "sort": {
                    "description": "The default sort order of the album's videos.",
                    "enum": [
                      "added_first",
                      "added_last",
                      "alphabetical",
                      "arranged",
                      "comments",
                      "likes",
                      "newest",
                      "oldest",
                      "plays"
                    ],
                    "type": "string"
                  },
                  "theme": {
                    "description": "The color theme of the album.",
                    "enum": [
                      "dark",
                      "standard"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/album"
                }
              }
            },
            "description": "The album was created."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The supplied token doesn't have the proper scopes, or the authenticated user can't create an album."
          }
        },
        "security": [
          {
            "oauth2": [
              "create"
            ]
          }
        ],
        "summary": "Create an album",
        "tags": [
          "Albums\\Essentials"
        ]
      }
    },
    "/me/albums/{album_id}": {
      "delete": {
        "operationId": "delete_album_alt1",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The album was deleted."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The supplied token doesn't have the proper scopes, or the authenticated user can't delete the album."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete an album",
        "tags": [
          "Albums\\Essentials"
        ]
      },
      "get": {
        "operationId": "get_album_alt1",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/album"
                }
              }
            },
            "description": "The album was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "summary": "Get a specific album",
        "tags": [
          "Albums\\Essentials"
        ]
      },
      "patch": {
        "operationId": "edit_album_alt1",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.album+json": {
              "schema": {
                "properties": {
                  "brand_color": {
                    "description": "The hexadecimal code for the color of the player buttons.",
                    "example": "ff66ee",
                    "type": "string"
                  },
                  "description": {
                    "description": "The description of the album.",
                    "example": "Vimeo holiday videos!",
                    "type": "string"
                  },
                  "domain": {
                    "description": "The custom domain a user has selected for their album.",
                    "example": "mycustomdomain.com",
                    "nullable": true,
                    "type": "string"
                  },
                  "hide_nav": {
                    "description": "Whether to hide Vimeo navigation when displaying the album.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "layout": {
                    "description": "The type of layout for presenting the album.",
                    "enum": [
                      "grid",
                      "player"
                    ],
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the album.",
                    "example": "Vimeo Holiday Videos!",
                    "type": "string"
                  },
                  "password": {
                    "description": "The album's password. Required only if **privacy** is `password`.",
                    "example": "hunter1",
                    "type": "string"
                  },
                  "privacy": {
                    "description": "The privacy level of the album.",
                    "enum": [
                      "anybody",
                      "embed_only",
                      "password"
                    ],
                    "type": "string"
                  },
                  "review_mode": {
                    "description": "Whether album videos should use the review mode URL.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "sort": {
                    "description": "The default sort order of the album's videos.",
                    "enum": [
                      "added_first",
                      "added_last",
                      "alphabetical",
                      "arranged",
                      "comments",
                      "likes",
                      "newest",
                      "oldest",
                      "plays"
                    ],
                    "type": "string"
                  },
                  "theme": {
                    "description": "The color theme of the album.",
                    "enum": [
                      "dark",
                      "standard"
                    ],
                    "type": "string"
                  },
                  "url": {
                    "description": "The custom Vimeo URL a user has selected for their album.",
                    "example": "my-custom-url",
                    "nullable": true,
                    "type": "string"
                  },
                  "use_custom_domain": {
                    "description": "Whether the user has opted in to use a custom domain for their album.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/album"
                }
              }
            },
            "description": "The album was edited."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the album, the supplied token doesn't have the proper scopes, or the authenticated user can't edit the album."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit an album",
        "tags": [
          "Albums\\Essentials"
        ]
      }
    },
    "/me/albums/{album_id}/videos": {
      "get": {
        "operationId": "get_album_videos_alt1",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The page containing the video URI.",
            "in": "query",
            "name": "containing_uri",
            "required": false,
            "schema": {
              "example": "/videos/258684937",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The password of the album.",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": {
              "example": "hunter1",
              "type": "string"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "default",
                "duration",
                "likes",
                "manual",
                "modified_time",
                "plays"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.",
            "in": "query",
            "name": "weak_search",
            "required": false,
            "schema": {
              "example": "false",
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "summary": "Get all the videos in an album",
        "tags": [
          "Albums\\Album videos"
        ]
      },
      "put": {
        "description": "This method replaces all the existing videos in an album with one or more videos.",
        "operationId": "replace_videos_in_album_alt1",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "videos": {
                    "description": "A comma-separated list of video URIs.",
                    "example": "/videos/258684937,/videos/273576296",
                    "type": "string"
                  }
                },
                "required": [
                  "videos"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "The videos were added."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't add videos to albums."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Replace all the videos in an album",
        "tags": [
          "Albums\\Album videos"
        ]
      }
    },
    "/me/albums/{album_id}/videos/{video_id}": {
      "delete": {
        "operationId": "remove_video_from_album_alt1",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 196367152,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was removed."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The supplied token doesn't have the proper scopes, or the authenticated user can't edit the album."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a video from an album",
        "tags": [
          "Albums\\Album videos"
        ]
      },
      "get": {
        "description": "This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.",
        "operationId": "get_album_video_alt1",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 196367152,
              "type": "number"
            }
          },
          {
            "description": "The password of the album.",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": {
              "example": "hunter1",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists, or the video wasn't found in it."
          }
        },
        "summary": "Get a specific video in an album",
        "tags": [
          "Albums\\Album videos"
        ]
      },
      "put": {
        "operationId": "add_video_to_album_alt1",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 196367152,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was added."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The supplied token doesn't have the proper scopes, or the authenticated user can't edit the album."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a specific video to an album",
        "tags": [
          "Albums\\Album videos"
        ]
      }
    },
    "/me/albums/{album_id}/videos/{video_id}/set_album_thumbnail": {
      "post": {
        "operationId": "set_video_as_album_thumbnail_alt1",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 196367152,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "time_code": {
                    "description": "The video frame time in seconds to use as the album thumbnail.",
                    "example": 300,
                    "type": "number"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/album"
                }
              }
            },
            "description": "The album was updated with a new thumbnail."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3429: The authenticated user can't edit the album."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such album, or user, or video exists."
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 4016: Unexpected error while setting thumbnail."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Set a video as the album thumbnail",
        "tags": [
          "Albums\\Album videos"
        ]
      }
    },
    "/me/appearances": {
      "get": {
        "operationId": "get_appearances_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "duration",
                "likes",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "summary": "Get all the videos in which a user appears",
        "tags": [
          "Videos\\Essentials"
        ]
      }
    },
    "/me/categories": {
      "get": {
        "operationId": "get_category_subscriptions_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "name"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/category"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The categories were returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: You can't view another user."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all the categories that a user follows",
        "tags": [
          "Categories\\Subscriptions"
        ]
      }
    },
    "/me/categories/{category}": {
      "delete": {
        "operationId": "unsubscribe_from_category_alt1",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user was unsubscribed."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Unsubscribe a user from a category",
        "tags": [
          "Categories\\Subscriptions"
        ]
      },
      "get": {
        "operationId": "check_if_user_subscribed_to_category_alt1",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user is following the category."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Check if a user follows a category",
        "tags": [
          "Categories\\Subscriptions"
        ]
      },
      "put": {
        "operationId": "subscribe_to_category_alt1",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": 0,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user was subscribed."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Subscribe a user to a single category",
        "tags": [
          "Categories\\Subscriptions"
        ]
      }
    },
    "/me/channels": {
      "get": {
        "operationId": "get_channel_subscriptions_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "moderated"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "followers",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/channel"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The channels were returned."
          },
          "304": {
            "description": "No channel has been followed since the given `If-Modified-Since` header."
          }
        },
        "summary": "Get all the channels to which a user subscribes",
        "tags": [
          "Channels\\Essentials"
        ]
      }
    },
    "/me/channels/{channel_id}": {
      "delete": {
        "operationId": "unsubscribe_from_channel_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user is no longer a follower of the channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Unsubscribe a user from a specific channel",
        "tags": [
          "Channels\\Subscriptions and subscribers"
        ]
      },
      "get": {
        "operationId": "check_if_user_subscribed_to_channel_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user follows the channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "summary": "Check if a user follows a channel",
        "tags": [
          "Channels\\Subscriptions and subscribers"
        ]
      },
      "put": {
        "operationId": "subscribe_to_channel_alt1",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user is now a follower of the channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Subscribe a user to a specific channel",
        "tags": [
          "Channels\\Subscriptions and subscribers"
        ]
      }
    },
    "/me/customlogos": {
      "get": {
        "operationId": "get_custom_logos_alt1",
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The custom logos were returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The user can't view this custom logo.\n* The user can't view custom logos."
          }
        },
        "summary": "Get all the custom logos that belong to a user",
        "tags": [
          "Embed Presets\\Custom Logos"
        ]
      },
      "post": {
        "operationId": "create_custom_logo_alt1",
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom logo was created."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* You can't upload pictures for another user's videos.\n* The user can't add a custom logo."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a custom logo",
        "tags": [
          "Embed Presets\\Custom Logos"
        ]
      }
    },
    "/me/customlogos/{logo_id}": {
      "get": {
        "operationId": "get_custom_logo_alt1",
        "parameters": [
          {
            "description": "The ID of the custom logo.",
            "in": "path",
            "name": "logo_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom logo was returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The user can't view custom logos."
          }
        },
        "summary": "Get a specific custom logo",
        "tags": [
          "Embed Presets\\Custom Logos"
        ]
      }
    },
    "/me/feed": {
      "get": {
        "operationId": "get_feed_alt1",
        "parameters": [
          {
            "description": "Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "example": "280",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The feed type.",
            "in": "query",
            "name": "type",
            "required": false,
            "schema": {
              "enum": [
                "appears",
                "category_featured",
                "channel",
                "facebook_feed",
                "following",
                "group",
                "likes",
                "ondemand_publish",
                "share",
                "tagged_with",
                "twitter_timeline",
                "uploads"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.activity+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/activity-3-1"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all videos in a user's feed",
        "tags": [
          "Users\\Feed"
        ]
      }
    },
    "/me/followers": {
      "get": {
        "operationId": "get_followers_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The user's followers were returned."
          }
        },
        "summary": "Get all the followers of a user",
        "tags": [
          "Users\\Follows"
        ]
      }
    },
    "/me/following": {
      "get": {
        "operationId": "get_user_following_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "online"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The followed users were returned."
          }
        },
        "summary": "Get all the users that a user is following",
        "tags": [
          "Users\\Follows"
        ]
      },
      "post": {
        "operationId": "follow_users_alt1",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "users": {
                    "description": "An array of user URIs for the list of users to follow.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "users"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "204": {
            "description": "The users were followed."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2205: The request body is empty.\n* Error code 2205: The `users` array is invalid.\n* Error code 2205: The list of users doesn't contain URIs.\n* Error code 2900: A user in the list doesn't exist.\n* Error code 2901: The list contains more than 100 users."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user access token is invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3417: The current user can't follow other users."
          },
          "429": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 9006: The current user is rate-limited from following other users."
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 4005: An unexpected error occurred."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Follow a list of users",
        "tags": [
          "Users\\Follows"
        ]
      }
    },
    "/me/following/{follow_user_id}": {
      "delete": {
        "operationId": "unfollow_user_alt1",
        "parameters": [
          {
            "description": "The ID of the following user.",
            "in": "path",
            "name": "follow_user_id",
            "required": true,
            "schema": {
              "example": 3766357,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user was unfollowed."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Unfollow a user",
        "tags": [
          "Users\\Follows"
        ]
      },
      "get": {
        "operationId": "check_if_user_is_following_alt1",
        "parameters": [
          {
            "description": "The ID of the following user.",
            "in": "path",
            "name": "follow_user_id",
            "required": true,
            "schema": {
              "example": 3766357,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The authenticated user follows the user in question."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The user in question doesn't follow the authenticated user."
          }
        },
        "summary": "Check if a user is following another user",
        "tags": [
          "Users\\Follows"
        ]
      },
      "put": {
        "operationId": "follow_user_alt1",
        "parameters": [
          {
            "description": "The ID of the following user.",
            "in": "path",
            "name": "follow_user_id",
            "required": true,
            "schema": {
              "example": 3766357,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user was followed."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't add followers."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Follow a specific user",
        "tags": [
          "Users\\Follows"
        ]
      }
    },
    "/me/groups": {
      "get": {
        "operationId": "get_user_groups_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "moderated"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "members",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.group+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/group"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The groups were returned."
          }
        },
        "summary": "Get all the groups that a user has joined",
        "tags": [
          "Groups\\Users"
        ]
      }
    },
    "/me/groups/{group_id}": {
      "delete": {
        "operationId": "leave_group_alt1",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user left the group."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user owns the group. To remove this user, first apply a new group owner through PATCH."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Remove a user from a group",
        "tags": [
          "Groups\\Subscription"
        ]
      },
      "get": {
        "operationId": "check_if_user_joined_group_alt1",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user has joined the group."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* No such group exists.\n* The authenticated user isn't a member of this group."
          }
        },
        "summary": "Check if a user has joined a group",
        "tags": [
          "Groups\\Users"
        ]
      },
      "put": {
        "operationId": "join_group_alt1",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user joined the group."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The authenticated user can't join groups.\n* The group prohibits the authenticated user from joining, either because the group is not public or because the group's privacy setting is `members`."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a user to a group",
        "tags": [
          "Groups\\Subscription"
        ]
      }
    },
    "/me/likes": {
      "get": {
        "operationId": "get_likes_alt1",
        "parameters": [
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "duration",
                "likes",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "summary": "Get all the videos that a user has liked",
        "tags": [
          "Likes\\Essentials"
        ]
      }
    },
    "/me/likes/{video_id}": {
      "delete": {
        "operationId": "unlike_video_alt1",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was unliked."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't like videos."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Cause a user to unlike a video",
        "tags": [
          "Likes\\Essentials"
        ]
      },
      "get": {
        "operationId": "check_if_user_liked_video_alt1",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user has liked the video."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The user hasn't liked the video."
          }
        },
        "summary": "Check if a user has liked a video",
        "tags": [
          "Likes\\Essentials"
        ]
      },
      "put": {
        "operationId": "like_video_alt1",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was liked."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user owns the video."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't like videos."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Cause a user to like a video",
        "tags": [
          "Likes\\Essentials"
        ]
      }
    },
    "/me/ondemand/pages": {
      "get": {
        "operationId": "get_user_vods_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The type of On Demand pages to return.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "film",
                "series"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "added",
                "alphabetical",
                "date",
                "modified_time",
                "name",
                "publish.time",
                "rating"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-page"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The On Demand pages were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such user exists."
          }
        },
        "summary": "Get all the On Demand pages of a user",
        "tags": [
          "On Demand\\Essentials"
        ]
      },
      "post": {
        "operationId": "create_vod_alt1",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "accepted_currencies": {
                    "description": "An array of accepted currencies.\n\nOption descriptions:\n * `AUD` - Australian Dollar\n * `CAD` - Canadian Dollar\n * `CHF` - Swiss Franc\n * `DKK` - Danish Krone\n * `EUR` - Euro\n * `GBP` - British Pound\n * `JPY` - Japanese Yen\n * `KRW` - South Korean Won\n * `NOK` - Norwegian Krone\n * `PLN` - Polish Zloty\n * `SEK` - Swedish Krona\n * `USD` - US Dollar\n",
                    "enum": [
                      "AUD",
                      "CAD",
                      "CHF",
                      "DKK",
                      "EUR",
                      "GBP",
                      "JPY",
                      "KRW",
                      "NOK",
                      "PLN",
                      "SEK",
                      "USD"
                    ],
                    "type": "string"
                  },
                  "buy": {
                    "properties": {
                      "active": {
                        "description": "Whether the Buy action is active. *Required if `rent.active` is false.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "download": {
                        "description": "Whether people who buy the video can download it. To use this field, `type` must be `film`.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "price": {
                        "properties": {
                          "AUD": {
                            "description": "The purchase price of this video in AUD.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "CAD": {
                            "description": "The purchase price of this video in CAD.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "CHF": {
                            "description": "The purchase price of this video in CHF.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "DKK": {
                            "description": "The purchase price of this video in DKK.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "EUR": {
                            "description": "The purchase price of this video in EUR.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "GBP": {
                            "description": "The purchase price of this video in GBP.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "JPY": {
                            "description": "The purchase price of this video in JPY.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "KRW": {
                            "description": "The purchase price of this video in KRW.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "NOK": {
                            "description": "The purchase price of this video in NOK.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "PLN": {
                            "description": "The purchase price of this video in PLN.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "SEK": {
                            "description": "The purchase price of this video in SEK.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "USD": {
                            "description": "The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`.",
                            "example": 2.99,
                            "type": "number"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "content_rating": {
                    "description": "One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.",
                    "enum": [
                      "drugs",
                      "language",
                      "nudity",
                      "safe",
                      "unrated",
                      "violence"
                    ],
                    "type": "string"
                  },
                  "description": {
                    "description": "The description of the On Demand page.",
                    "example": "DARBY FOREVER follows the fantasies of Darby, a shopgirl at \"Bobbins & Notions\".",
                    "type": "string"
                  },
                  "domain_link": {
                    "description": "The custom domain of the On Demand page.",
                    "example": "https://example.com",
                    "type": "string"
                  },
                  "episodes": {
                    "properties": {
                      "buy": {
                        "properties": {
                          "active": {
                            "description": "Whether episodes can be bought.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "download": {
                            "description": "Whether people who buy the episode can download it. To use this field, `type` must be `series`.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "price": {
                            "properties": {
                              "USD": {
                                "description": "The purchase price per episode. *Required if `episodes.buy.active` is true.",
                                "example": 1.99,
                                "type": "number"
                              }
                            },
                            "type": "object"
                          }
                        },
                        "type": "object"
                      },
                      "rent": {
                        "properties": {
                          "active": {
                            "description": "Whether episodes can be rented",
                            "example": "true",
                            "type": "boolean"
                          },
                          "period": {
                            "description": "The period in which this episode can be rented for.",
                            "enum": [
                              "1 week",
                              "1 year",
                              "24 hour",
                              "3 month",
                              "30 day",
                              "48 hour",
                              "6 month",
                              "72 hour"
                            ],
                            "type": "string"
                          },
                          "price": {
                            "properties": {
                              "USD": {
                                "description": "The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.",
                                "example": 0.99,
                                "type": "number"
                              }
                            },
                            "type": "object"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "link": {
                    "description": "The custom string to use in this On Demand page's Vimeo URL.",
                    "example": "darbyforever",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the On Demand page.",
                    "example": "Darby Forever",
                    "type": "string"
                  },
                  "rent": {
                    "properties": {
                      "active": {
                        "description": "Whether the video can be rented. *Required if `buy.active` is false.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "period": {
                        "description": "The period in which this can be rented for.",
                        "enum": [
                          "1 week",
                          "1 year",
                          "24 hour",
                          "3 month",
                          "30 day",
                          "48 hour",
                          "6 month",
                          "72 hour"
                        ],
                        "type": "string"
                      },
                      "price": {
                        "properties": {
                          "AUD": {
                            "description": "The rental price of this video in AUD.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "CAD": {
                            "description": "The rental price of this video in CAD.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "CHF": {
                            "description": "The rental price of this video in CHF.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "DKK": {
                            "description": "The rental price of this video in DKK.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "EUR": {
                            "description": "The rental price of this video in EUR.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "GBP": {
                            "description": "The rental price of this video in GBP.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "JPY": {
                            "description": "The rental price of this video in JPY.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "KRW": {
                            "description": "The rental price of this video in KRW.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "NOK": {
                            "description": "The rental price of this video in NOK.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "PLN": {
                            "description": "The rental price of this video in PLN.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "SEK": {
                            "description": "The rental price of this video in SEK.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "USD": {
                            "description": "The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`.",
                            "example": 0.99,
                            "type": "number"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "subscription": {
                    "properties": {
                      "monthly": {
                        "properties": {
                          "active": {
                            "description": "Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "price": {
                            "properties": {
                              "USD": {
                                "description": "The monthly subscription price in USD. *Required if `subscription.active` is true.",
                                "example": 9.99,
                                "type": "number"
                              }
                            },
                            "type": "object"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "type": {
                    "description": "The type of On Demand page.",
                    "enum": [
                      "film",
                      "series"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "content_rating",
                  "description",
                  "name",
                  "type"
                ],
                "type": "object"
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
                  "$ref": "#/components/schemas/on-demand-page"
                }
              }
            },
            "description": "The On Demand page was created."
          }
        },
        "summary": "Create an On Demand page",
        "tags": [
          "On Demand\\Essentials"
        ]
      }
    },
    "/me/ondemand/purchases": {
      "get": {
        "operationId": "get_vod_purchases",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The type of On Demand videos to show.\n\nOption descriptions:\n * `important` - Will show all pages which are about to expire.\n",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "all",
                "expiring_soon",
                "film",
                "important",
                "purchased",
                "rented",
                "series",
                "subscription",
                "unwatched",
                "watched"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "added",
                "alphabetical",
                "date",
                "name",
                "purchase_time",
                "rating",
                "release_date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-page"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The purchases and rentals were returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't view the purchases and rentals for another user's account."
          }
        },
        "security": [
          {
            "oauth2": [
              "purchased"
            ]
          }
        ],
        "summary": "Get all the On Demand purchases and rentals that a user has made",
        "tags": [
          "On Demand\\Purchases and Rentals"
        ]
      }
    },
    "/me/ondemand/purchases/{ondemand_id}": {
      "get": {
        "operationId": "check_if_vod_was_purchased_alt1",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-page"
                }
              }
            },
            "description": "You have purchased the On Demand page."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The requested user isn't the same as the authenticated user."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such user or On Demand page exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "purchased"
            ]
          }
        ],
        "summary": "Check if a user has made a purchase or rental from an On Demand page",
        "tags": [
          "On Demand\\Purchases and Rentals"
        ]
      }
    },
    "/me/pictures": {
      "get": {
        "operationId": "get_pictures_alt1",
        "parameters": [
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The pictures were returned."
          }
        },
        "summary": "Get all the pictures that belong to a user",
        "tags": [
          "Users\\Pictures"
        ]
      },
      "post": {
        "operationId": "create_picture_alt1",
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The user picture was created."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a user picture",
        "tags": [
          "Users\\Pictures"
        ]
      }
    },
    "/me/pictures/{portraitset_id}": {
      "delete": {
        "operationId": "delete_picture_alt1",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "portraitset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The picture was deleted."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a user picture",
        "tags": [
          "Users\\Pictures"
        ]
      },
      "get": {
        "operationId": "get_picture_alt1",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "portraitset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The picture was returned."
          }
        },
        "summary": "Get a specific user picture",
        "tags": [
          "Users\\Pictures"
        ]
      },
      "patch": {
        "operationId": "edit_picture_alt1",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "portraitset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.picture+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether the picture is the user's active portrait.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The picture was edited."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a user picture",
        "tags": [
          "Users\\Pictures"
        ]
      }
    },
    "/me/portfolios": {
      "get": {
        "operationId": "get_portfolios_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.portfolio+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/portfolio"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The portfolios were returned."
          }
        },
        "summary": "Get all the portfolios that belong to a user",
        "tags": [
          "Portfolios\\Essentials"
        ]
      }
    },
    "/me/portfolios/{portfolio_id}": {
      "get": {
        "operationId": "get_portfolio_alt1",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.portfolio+json": {
                "schema": {
                  "$ref": "#/components/schemas/portfolio"
                }
              }
            },
            "description": "The portfolio was returned."
          }
        },
        "summary": "Get a specific portfolio",
        "tags": [
          "Portfolios\\Essentials"
        ]
      }
    },
    "/me/portfolios/{portfolio_id}/videos": {
      "get": {
        "operationId": "get_portfolio_videos_alt1",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The page that contains the video URI.",
            "in": "query",
            "name": "containing_uri",
            "required": false,
            "schema": {
              "example": "/videos/258684937",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.\n\nOption descriptions:\n * `default` - This will sort to the default sort set on the portfolio.\n",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "default",
                "likes",
                "manual",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "summary": "Get all the videos in a portfolio",
        "tags": [
          "Portfolios\\Videos"
        ]
      }
    },
    "/me/portfolios/{portfolio_id}/videos/{video_id}": {
      "delete": {
        "operationId": "delete_video_from_portfolio_alt1",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was deleted."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The portfolio wasn't found, or the video wasn't found."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a video from a portfolio",
        "tags": [
          "Portfolios\\Videos"
        ]
      },
      "get": {
        "operationId": "get_portfolio_video_alt1",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video was returned."
          }
        },
        "summary": "Get a specific video in a portfolio",
        "tags": [
          "Portfolios\\Videos"
        ]
      },
      "put": {
        "operationId": "add_video_to_portfolio_alt1",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was added."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The portfolio wasn't found, or the video wasn't found."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a video to a portfolio",
        "tags": [
          "Portfolios\\Videos"
        ]
      }
    },
    "/me/presets": {
      "get": {
        "operationId": "get_embed_presets_alt1",
        "parameters": [
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/presets"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The embed presets were returned."
          }
        },
        "summary": "Get all the embed presets that a user has created",
        "tags": [
          "Embed Presets\\Essentials"
        ]
      }
    },
    "/me/presets/{preset_id}": {
      "get": {
        "operationId": "get_embed_preset_alt1",
        "parameters": [
          {
            "description": "The ID of the preset.",
            "in": "path",
            "name": "preset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "$ref": "#/components/schemas/presets"
                }
              }
            },
            "description": "The embed preset was returned."
          }
        },
        "summary": "Get a specific embed preset",
        "tags": [
          "Embed Presets\\Essentials"
        ]
      },
      "patch": {
        "operationId": "edit_embed_preset_alt1",
        "parameters": [
          {
            "description": "The ID of the preset.",
            "in": "path",
            "name": "preset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.preset+json": {
              "schema": {
                "properties": {
                  "outro": {
                    "description": "Disable the outro.",
                    "enum": [
                      "nothing"
                    ],
                    "type": "string"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "$ref": "#/components/schemas/presets"
                }
              }
            },
            "description": "The embed preset was edited."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The outro type is invalid."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The preset doesn't exist.\n* The authenticated user doesn't own the preset."
          }
        },
        "summary": "Edit an embed preset",
        "tags": [
          "Embed Presets\\Essentials"
        ]
      }
    },
    "/me/presets/{preset_id}/videos": {
      "get": {
        "operationId": "get_embed_preset_videos_alt1",
        "parameters": [
          {
            "description": "The ID of the preset.",
            "in": "path",
            "name": "preset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "summary": "Get all the videos that have been added to an embed preset",
        "tags": [
          "Embed Presets\\Videos"
        ]
      }
    },
    "/me/projects": {
      "get": {
        "description": "This method gets all the projects that belong to the specified user.",
        "operationId": "get_projects_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "date",
                "default",
                "modified_time",
                "name"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/project"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The projects were returned."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all the projects that belong to a user",
        "tags": [
          "Projects\\Essentials"
        ]
      },
      "post": {
        "description": "This method creates a new project for the specified user.",
        "operationId": "create_project_alt1",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "name": {
                    "description": "The name of the project.",
                    "example": "Rough cuts",
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
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
                  "$ref": "#/components/schemas/project"
                }
              }
            },
            "description": "The project was created."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2205: The input is empty.\n* Error code 2204: The input is invalid."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't create projects."
          }
        },
        "security": [
          {
            "oauth2": [
              "create"
            ]
          }
        ],
        "summary": "Create a project",
        "tags": [
          "Projects\\Essentials"
        ]
      }
    },
    "/me/projects/{project_id}": {
      "delete": {
        "description": "This method deletes a project and optionally also the videos that it contains.",
        "operationId": "delete_project_alt1",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "Whether to delete all the videos in the project along with the project itself.",
            "in": "query",
            "name": "should_delete_clips",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The project was deleted."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't delete the project."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a project",
        "tags": [
          "Projects\\Essentials"
        ]
      },
      "get": {
        "description": "This method gets a single project that belongs to the specified user.",
        "operationId": "get_project_alt1",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            },
            "description": "The project was returned."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get a specific project",
        "tags": [
          "Projects\\Essentials"
        ]
      },
      "patch": {
        "description": "This method edits an existing project.",
        "operationId": "edit_project_alt1",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "name": {
                    "description": "The name of the project.",
                    "example": "Rough cuts",
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
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
                  "$ref": "#/components/schemas/project"
                }
              }
            },
            "description": "The project was edited."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2204: The input is invalid.\n* Error code 2205: The input is empty."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't edit the project."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a project",
        "tags": [
          "Projects\\Essentials"
        ]
      }
    },
    "/me/projects/{project_id}/videos": {
      "delete": {
        "description": "This method removed multiple videos from the specified project.",
        "operationId": "remove_videos_from_project_alt1",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "Whether to delete the videos when removing them from the project.",
            "in": "query",
            "name": "should_delete_clips",
            "required": false,
            "schema": {
              "example": "false",
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of the video URIs to remove.",
            "in": "query",
            "name": "uris",
            "required": true,
            "schema": {
              "example": "/videos/258684937,/videos/273576296",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The videos were removed."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: The input is invalid."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Remove a list of videos from a project",
        "tags": [
          "Projects\\Videos"
        ]
      },
      "get": {
        "description": "This method gets all the videos that belong to the specified project.",
        "operationId": "get_project_videos_alt1",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "default",
                "duration",
                "last_user_action_event_date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all the videos in a project",
        "tags": [
          "Projects\\Videos"
        ]
      },
      "put": {
        "description": "This method adds multiple videos to the specified project.",
        "operationId": "add_videos_to_project_alt1",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "A comma-separated list of video URIs to add.",
            "in": "query",
            "name": "uris",
            "required": true,
            "schema": {
              "example": "/videos/258684937,/videos/273576296",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The videos were added."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: The input is invalid."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project or video exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a list of videos to a project",
        "tags": [
          "Projects\\Videos"
        ]
      }
    },
    "/me/projects/{project_id}/videos/{video_id}": {
      "delete": {
        "description": "This method removes a single video from the specified project.",
        "operationId": "remove_video_from_project_alt1",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was removed."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: The input is invalid."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such video exists in the project."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Remove a specific video from a project",
        "tags": [
          "Projects\\Videos"
        ]
      },
      "put": {
        "description": "This method adds a single video to the specified project.",
        "operationId": "add_video_to_project_alt1",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was added."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such user, project, or video exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a specific video to a project",
        "tags": [
          "Projects\\Videos"
        ]
      }
    },
    "/me/videos": {
      "get": {
        "operationId": "get_videos_alt1",
        "parameters": [
          {
            "description": "The page that contains the video URI. Only available when not paired with `query`.",
            "in": "query",
            "name": "containing_uri",
            "required": false,
            "schema": {
              "example": "/videos/258684937",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "app_only",
                "embeddable",
                "featured",
                "playable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "Whether to filter by all playable videos or by all videos that are not  playable.",
            "in": "query",
            "name": "filter_playable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "default",
                "duration",
                "last_user_action_event_date",
                "likes",
                "modified_time",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "304": {
            "description": "This user hasn't created any videos since the given `If-Modified-Since` header."
          }
        },
        "summary": "Get all the videos that a user has uploaded",
        "tags": [
          "Videos\\Essentials"
        ]
      },
      "post": {
        "description": "Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).",
        "operationId": "upload_video_alt1",
        "requestBody": {
          "content": {
            "application/vnd.vimeo.video+json": {
              "schema": {
                "properties": {
                  "content_rating": {
                    "description": "A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "description": {
                    "description": "The description of the video.",
                    "example": "A celebration of 10 years of Staff Picks.",
                    "type": "string"
                  },
                  "embed": {
                    "properties": {
                      "buttons": {
                        "properties": {
                          "embed": {
                            "description": "Show or hide the Embed button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "fullscreen": {
                            "description": "Show or hide the Fullscreen button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "hd": {
                            "description": "Show or hide the HD button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "like": {
                            "description": "Show or hide the Like button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "scaling": {
                            "description": "Show or hide the Scaling button (shown only in Fullscreen mode).",
                            "example": "true",
                            "type": "boolean"
                          },
                          "share": {
                            "description": "Show or hide the Share button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "watchlater": {
                            "description": "Show or hide the Watch Later button.",
                            "example": "true",
                            "type": "boolean"
                          }
                        },
                        "type": "object"
                      },
                      "color": {
                        "description": "The main color of the embed player.",
                        "example": "#1ab7ea",
                        "type": "string"
                      },
                      "logos": {
                        "properties": {
                          "custom": {
                            "properties": {
                              "active": {
                                "description": "Show or hide your custom logo.",
                                "example": "true",
                                "type": "boolean"
                              },
                              "link": {
                                "description": "The URL that loads when the user clicks your custom logo.",
                                "example": "https://example.com",
                                "type": "string"
                              },
                              "sticky": {
                                "description": "Whether always to show the custom logo or to hide it after time with the rest of the UI.",
                                "example": "true",
                                "type": "boolean"
                              }
                            },
                            "type": "object"
                          },
                          "vimeo": {
                            "description": "Show or hide the Vimeo logo.",
                            "example": "true",
                            "type": "boolean"
                          }
                        },
                        "type": "object"
                      },
                      "playbar": {
                        "description": "Show or hide the playbar.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "title": {
                        "properties": {
                          "name": {
                            "description": "Show or hide the video title, or enable the user to determine whether the video title appears.",
                            "enum": [
                              "hide",
                              "show",
                              "user"
                            ],
                            "type": "string"
                          },
                          "owner": {
                            "description": "Show or hide the owner information, or enable the user to determine whether the owner information appears.",
                            "enum": [
                              "hide",
                              "show",
                              "user"
                            ],
                            "type": "string"
                          },
                          "portrait": {
                            "description": "Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.",
                            "enum": [
                              "hide",
                              "show",
                              "user"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "volume": {
                        "description": "Show or hide the volume selector.",
                        "example": "true",
                        "type": "boolean"
                      }
                    },
                    "type": "object"
                  },
                  "license": {
                    "description": "The Creative Commons license.",
                    "enum": [
                      "by",
                      "by-nc",
                      "by-nc-nd",
                      "by-nc-sa",
                      "by-nd",
                      "by-sa",
                      "cc0"
                    ],
                    "type": "string"
                  },
                  "locale": {
                    "description": "The video's default language. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.",
                    "example": "en_US",
                    "type": "string"
                  },
                  "name": {
                    "description": "The title of the video.",
                    "example": "Celebrating 10 Years of Staff Picks",
                    "type": "string"
                  },
                  "password": {
                    "description": "The password. When you set `privacy.view` to `password`, you must provide the password as an additional parameter.",
                    "example": "hunter1",
                    "type": "string"
                  },
                  "privacy": {
                    "properties": {
                      "add": {
                        "description": "Whether a user can add the video to an album, channel, or group.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "comments": {
                        "description": "The privacy level required to comment on the video.",
                        "enum": [
                          "anybody",
                          "contacts",
                          "nobody"
                        ],
                        "type": "string"
                      },
                      "download": {
                        "description": "Whether a user can download the video. Not available to users with a Basic membership",
                        "example": "true",
                        "type": "boolean"
                      },
                      "embed": {
                        "description": "The video's embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.",
                        "enum": [
                          "private",
                          "public",
                          "whitelist"
                        ],
                        "type": "string"
                      },
                      "view": {
                        "description": "The video's privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.",
                        "enum": [
                          "anybody",
                          "contacts",
                          "disable",
                          "nobody",
                          "password",
                          "unlisted",
                          "users"
                        ],
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "ratings": {
                    "properties": {
                      "mpaa": {
                        "properties": {
                          "reason": {
                            "description": "The reason for the video's MPAA rating.\n\nOption descriptions:\n * `at` - Adult themes\n * `bn` - Brief nudity\n * `n` - Nudity\n * `sl` - Strong language\n * `ss` - Sexual situations\n * `v` - Violence\n",
                            "enum": [
                              "at",
                              "bn",
                              "n",
                              "sl",
                              "ss",
                              "v"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "tv": {
                        "properties": {
                          "reason": {
                            "description": "The reason for the video's TV rating.\n\nOption descriptions:\n * `d` - Suggestive dialogue\n * `fv` - Fantasy violence\n * `l` - Language\n * `ss` - Sexual situations\n * `v` - Violence\n",
                            "enum": [
                              "d",
                              "fv",
                              "l",
                              "ss",
                              "v"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "review_page": {
                    "properties": {
                      "active": {
                        "description": "Enable or disable video review.",
                        "example": "true",
                        "type": "boolean"
                      }
                    },
                    "type": "object"
                  },
                  "spatial": {
                    "properties": {
                      "director_timeline": {
                        "description": "The 360 director timeline.",
                        "items": {
                          "properties": {
                            "pitch": {
                              "description": "The timeline pitch. This value must be between -90 and 90.",
                              "example": 70,
                              "type": "number"
                            },
                            "roll": {
                              "description": "The timeline roll.",
                              "type": "number"
                            },
                            "time_code": {
                              "description": "The 360 director timeline time code.",
                              "example": 5,
                              "type": "number"
                            },
                            "yaw": {
                              "description": "The timeline yaw. This value must be between 0 and 360.",
                              "example": 125,
                              "type": "number"
                            }
                          },
                          "required": [
                            "pitch",
                            "time_code",
                            "yaw"
                          ],
                          "type": "object"
                        },
                        "type": "array"
                      },
                      "field_of_view": {
                        "description": "The 360 field of view: default 50, minimum 30, maximum 90.",
                        "example": 50,
                        "type": "number"
                      },
                      "projection": {
                        "description": "The 360 spatial projection.",
                        "enum": [
                          "cubical",
                          "cylindrical",
                          "dome",
                          "equirectangular",
                          "pyramid"
                        ],
                        "type": "string"
                      },
                      "stereo_format": {
                        "description": "The 360 spatial stereo format.",
                        "enum": [
                          "left-right",
                          "mono",
                          "top-bottom"
                        ],
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "upload": {
                    "properties": {
                      "approach": {
                        "description": "The upload approach.",
                        "enum": [
                          "post",
                          "pull",
                          "streaming",
                          "tus"
                        ],
                        "type": "string"
                      },
                      "link": {
                        "description": "The public URL at which the video is hosted. The URL must be valid for at least 24 hours. Use this parameter when `approach` is `pull`.",
                        "example": "https://example.com/video.mp4",
                        "type": "string"
                      },
                      "redirect_url": {
                        "description": "The app's redirect URL. Use this parameter when `approach` is `post`.",
                        "example": "https://example.com",
                        "type": "string"
                      },
                      "size": {
                        "description": "The size in bytes of the video to upload.",
                        "example": "13623861",
                        "type": "string"
                      }
                    },
                    "required": [
                      "approach"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "upload"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The upload procedure has begun."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2205: The body of the request isn't formatted properly.\n* Error code 2204: The request contains invalid parameters.\n* Error code 2204: The request contains invalid body parameters.\n* Error code 2230: The upload type is invalid.\n* Error code 3116: If a `type` payload parameter was supplied instead of `upload.approach`."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8002: No user is associated with the authentication token."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 4102: The user's allotted quota has been reached.\n* Error code 4101: The user's maximum disk space has been reached."
          },
          "500": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 4003: There is a problem initiating the upload."
          }
        },
        "summary": "Upload a video",
        "tags": [
          "Videos\\Upload"
        ]
      }
    },
    "/me/videos/{video_id}": {
      "get": {
        "operationId": "check_if_user_owns_video_alt1",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The user owns the video."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the video."
          }
        },
        "summary": "Check if a user owns a video",
        "tags": [
          "Videos\\Essentials"
        ]
      }
    },
    "/me/watched/videos": {
      "delete": {
        "operationId": "delete_watch_history",
        "responses": {
          "204": {
            "description": "The watch history was deleted."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a user's watch history",
        "tags": [
          "Users\\Watch History"
        ]
      },
      "get": {
        "operationId": "get_watch_history",
        "parameters": [
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The user can't view another user's watch history."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all the videos that a user has watched",
        "tags": [
          "Users\\Watch History"
        ]
      }
    },
    "/me/watched/videos/{video_id}": {
      "delete": {
        "operationId": "delete_from_watch_history",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was deleted from your watch history."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a specific video from a user's watch history",
        "tags": [
          "Users\\Watch History"
        ]
      }
    },
    "/me/watchlater": {
      "get": {
        "operationId": "get_watch_later_queue_alt1",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "duration",
                "likes",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "304": {
            "description": "The user hasn't added any videos to their Watch Later queue since the given `If-Modified-Since` header."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all the videos in a user's Watch Later queue",
        "tags": [
          "Watch Later Queue\\Essentials"
        ]
      }
    },
    "/me/watchlater/{video_id}": {
      "delete": {
        "operationId": "delete_video_from_watch_later_alt1",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was deleted."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Remove a video from a user's Watch Later queue",
        "tags": [
          "Watch Later Queue\\Essentials"
        ]
      },
      "get": {
        "operationId": "check_watch_later_queue_alt1",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video appears in the user's Watch Later queue."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The video doesn't appear in the user's Watch Later queue."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Check if a user has added a specific video to their Watch Later queue",
        "tags": [
          "Watch Later Queue\\Essentials"
        ]
      },
      "put": {
        "operationId": "add_video_to_watch_later_alt1",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was added."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a video to a user's Watch Later queue",
        "tags": [
          "Watch Later Queue\\Essentials"
        ]
      }
    },
    "/oauth/access_token": {
      "post": {
        "operationId": "exchange_auth_code",
        "requestBody": {
          "content": {
            "application/vnd.vimeo.auth+json": {
              "schema": {
                "properties": {
                  "code": {
                    "description": "The authorization code received from the authorization server.",
                    "example": "1234abcd",
                    "type": "string"
                  },
                  "grant_type": {
                    "description": "The grant type. Must be set to `authorization_code`.",
                    "enum": [
                      "authorization_code"
                    ],
                    "type": "string"
                  },
                  "redirect_uri": {
                    "description": "The redirect URI. Must match the URI from `/oauth/authorize`.",
                    "example": "https://example.com",
                    "type": "string"
                  }
                },
                "required": [
                  "code",
                  "grant_type",
                  "redirect_uri"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/auth"
                }
              }
            },
            "description": "The authorization code was exchanged."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/auth-error"
                }
              }
            },
            "description": "* The grant type is invalid.\n* The authorization code is invalid.\n* The redirect URI doesn't match the URI to create the authorization code."
          }
        },
        "summary": "Exchange an authorization code for an access token",
        "tags": [
          "Authentication Extras\\Essentials"
        ]
      }
    },
    "/oauth/authorize/client": {
      "post": {
        "description": "For information on utilizing OAuth client authorization, see our\n[authentication](/api/authentication#generate-unauthenticated-tokens) documentation or the\n[Client Credentials Grant](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4) section of the\n[OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31.",
        "operationId": "client_auth",
        "requestBody": {
          "content": {
            "application/vnd.vimeo.auth+json": {
              "schema": {
                "properties": {
                  "grant_type": {
                    "description": "The grant type. Must be set to `client_credentials`.",
                    "enum": [
                      "client_credentials"
                    ],
                    "type": "string"
                  },
                  "scope": {
                    "description": "A space-separated list of the authentication [scopes](https://developer.vimeo.com/api/authentication#supported-scopes) that you want to access. The default is `public`.",
                    "example": "public",
                    "type": "string"
                  }
                },
                "required": [
                  "grant_type",
                  "scope"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/auth"
                }
              }
            },
            "description": "The authorization was successful."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8001: No such client secret exists."
          }
        },
        "summary": "Authorize a client with OAuth",
        "tags": [
          "Authentication Extras\\Essentials"
        ]
      }
    },
    "/oauth/authorize/vimeo_oauth1": {
      "post": {
        "operationId": "convert_access_token",
        "requestBody": {
          "content": {
            "application/vnd.vimeo.auth+json": {
              "schema": {
                "properties": {
                  "grant_type": {
                    "description": "The grant type. Must be set to `vimeo_oauth1`.",
                    "enum": [
                      "vimeo_oauth1"
                    ],
                    "type": "string"
                  },
                  "token": {
                    "description": "The OAuth 1 token.",
                    "example": "58037c0078d5f54e15e638cc0dd882a570b13c50",
                    "type": "string"
                  },
                  "token_secret": {
                    "description": "The OAuth 1 token secret.",
                    "example": "NTgwMzdjMDA3OGQ1ZjU0ZTE1ZTYzOGNjMGRkODgyYTU3MGIxM2M1MA==",
                    "type": "string"
                  }
                },
                "required": [
                  "grant_type",
                  "token",
                  "token_secret"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/auth"
                }
              }
            },
            "description": "The tokens were converted."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/auth-error"
                }
              }
            },
            "description": "* The token is invalid.\n* The token has unauthorized scopes."
          }
        },
        "summary": "Convert OAuth 1 access tokens to OAuth 2 access tokens",
        "tags": [
          "Authentication Extras\\Essentials"
        ]
      }
    },
    "/oauth/verify": {
      "get": {
        "operationId": "verify_token",
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/auth"
                }
              }
            },
            "description": "The token was verified."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The token isn't a valid OAuth 2 token."
          }
        },
        "summary": "Verify an OAuth 2 token",
        "tags": [
          "Authentication Extras\\Essentials"
        ]
      }
    },
    "/ondemand/genres": {
      "get": {
        "operationId": "get_vod_genres",
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-genre"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The On Demand genres were returned."
          }
        },
        "summary": "Get all On Demand genres",
        "tags": [
          "On Demand\\Genres"
        ]
      }
    },
    "/ondemand/genres/{genre_id}": {
      "get": {
        "operationId": "get_vod_genre",
        "parameters": [
          {
            "description": "The ID of the genre.",
            "in": "path",
            "name": "genre_id",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-genre"
                }
              }
            },
            "description": "The On Demand genre was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand genre exists."
          }
        },
        "summary": "Get a specific On Demand genre",
        "tags": [
          "On Demand\\Genres"
        ]
      }
    },
    "/ondemand/genres/{genre_id}/pages": {
      "get": {
        "operationId": "get_genre_vods",
        "parameters": [
          {
            "description": "The ID of the genre.",
            "in": "path",
            "name": "genre_id",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "country",
                "my_region"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "name",
                "publish.time",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-page"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The On Demand pages were returned."
          }
        },
        "summary": "Get all the On Demand pages in a genre",
        "tags": [
          "On Demand\\Genres"
        ]
      }
    },
    "/ondemand/genres/{genre_id}/pages/{ondemand_id}": {
      "get": {
        "description": "Check whether a genre contains an On Demand page.",
        "operationId": "get_genre_vod",
        "parameters": [
          {
            "description": "The ID of the genre.",
            "in": "path",
            "name": "genre_id",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-page"
                }
              }
            },
            "description": "The On Demand page belongs to the genre."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or genre exists."
          }
        },
        "summary": "Get a specific On Demand page in a genre",
        "tags": [
          "On Demand\\Genres"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}": {
      "delete": {
        "operationId": "delete_vod_draft",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The page draft was deleted."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a draft of an On Demand page",
        "tags": [
          "On Demand\\Essentials"
        ]
      },
      "get": {
        "operationId": "get_vod",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-page"
                }
              }
            },
            "description": "The On Demand page was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "summary": "Get a specific On Demand page",
        "tags": [
          "On Demand\\Essentials"
        ]
      },
      "patch": {
        "description": "Enable preorders or publish the page.",
        "operationId": "edit_vod",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.ondemand.page+json": {
              "schema": {
                "properties": {
                  "link": {
                    "description": "The custom string to use in this On Demand page's Vimeo URL.",
                    "example": "darbyforever",
                    "type": "string"
                  },
                  "preorder": {
                    "properties": {
                      "active": {
                        "description": "If set to true, you will enable pre-orders on the On Demand page.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "publish_time": {
                        "description": "The time that the On Demand page will be published. *Required if `preorder.active` is `true`.",
                        "example": "2017-05-16T15:05:43+00:00",
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "publish": {
                    "properties": {
                      "active": {
                        "description": "Whether to publish the On Demand page.",
                        "example": "true",
                        "type": "boolean"
                      }
                    },
                    "type": "object"
                  },
                  "publish_when_ready": {
                    "description": "Whether to publish the On Demand page automatically after all videos are finished transcoding.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-page"
                }
              }
            },
            "description": "The On Demand page was edited."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't edit the On Demand page."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit an On Demand page",
        "tags": [
          "On Demand\\Essentials"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/backgrounds": {
      "get": {
        "operationId": "get_vod_backgrounds",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The background images were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "summary": "Get all the backgrounds of an On Demand page",
        "tags": [
          "On Demand\\Backgrounds"
        ]
      },
      "post": {
        "operationId": "create_vod_background",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The background was created."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a background to an On Demand page",
        "tags": [
          "On Demand\\Backgrounds"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/backgrounds/{background_id}": {
      "delete": {
        "operationId": "delete_vod_background",
        "parameters": [
          {
            "description": "The ID of the background.",
            "in": "path",
            "name": "background_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The background image was deleted."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "If you are attempting to modify an On Demand page you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or background image exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a background from an On Demand page",
        "tags": [
          "On Demand\\Backgrounds"
        ]
      },
      "get": {
        "operationId": "get_vod_background",
        "parameters": [
          {
            "description": "The ID of the background.",
            "in": "path",
            "name": "background_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The background image was returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't view another user's On Demand page background."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or background image exists."
          }
        },
        "summary": "Get a specific background of an On Demand page",
        "tags": [
          "On Demand\\Backgrounds"
        ]
      },
      "patch": {
        "operationId": "edit_vod_background",
        "parameters": [
          {
            "description": "The ID of the background.",
            "in": "path",
            "name": "background_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.picture+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether to make this background the active background.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The background was edited."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or background image exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a background of an On Demand page",
        "tags": [
          "On Demand\\Backgrounds"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/genres": {
      "get": {
        "operationId": "get_vod_genres_by_ondemand_id",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-genre"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The genres were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "summary": "Get all the genres of an On Demand page",
        "tags": [
          "On Demand\\Genres"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/genres/{genre_id}": {
      "delete": {
        "operationId": "delete_vod_genre",
        "parameters": [
          {
            "description": "The ID of the genre.",
            "in": "path",
            "name": "genre_id",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The On Demand genre was deleted."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The On Demand page must belong to at least one genre."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or genre exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a genre from an On Demand page",
        "tags": [
          "On Demand\\Genres"
        ]
      },
      "get": {
        "operationId": "get_vod_genre_by_ondemand_id",
        "parameters": [
          {
            "description": "The ID of the genre.",
            "in": "path",
            "name": "genre_id",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-genre"
                }
              }
            },
            "description": "The On Demand page's genre was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or genre exists."
          }
        },
        "summary": "Check whether an On Demand page belongs to a genre",
        "tags": [
          "On Demand\\Genres"
        ]
      },
      "put": {
        "operationId": "add_vod_genre",
        "parameters": [
          {
            "description": "The ID of the genre.",
            "in": "path",
            "name": "genre_id",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-genre"
                }
              }
            },
            "description": "The genre was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't add more than two genres to an On Demand page."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.genre+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or genre exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a genre to an On Demand page",
        "tags": [
          "On Demand\\Genres"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/likes": {
      "get": {
        "description": "This method gets all the users who have liked a particular video on an On Demand page.",
        "operationId": "get_vod_likes",
        "parameters": [
          {
            "description": "The ID of the On Demand page.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "extra",
                "main",
                "trailer"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users were returned."
          }
        },
        "summary": "Get all the users who have liked a video on an On Demand page",
        "tags": [
          "Likes\\Essentials"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/pictures": {
      "get": {
        "operationId": "get_vod_posters",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The posters were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "summary": "Get all the posters of an On Demand page",
        "tags": [
          "On Demand\\Posters"
        ]
      },
      "post": {
        "operationId": "add_vod_poster",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The poster was added."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify another user's On Demand page."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a poster to an On Demand page",
        "tags": [
          "On Demand\\Posters"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/pictures/{poster_id}": {
      "get": {
        "operationId": "get_vod_poster",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "poster_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The poster was returned."
          }
        },
        "summary": "Get a specific poster of an On Demand page",
        "tags": [
          "On Demand\\Posters"
        ]
      },
      "patch": {
        "operationId": "edit_vod_poster",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "poster_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.picture+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether to make this picture the active picture.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The poster was edited."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a poster of an On Demand page",
        "tags": [
          "On Demand\\Posters"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/promotions": {
      "get": {
        "operationId": "get_vod_promotions",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The filter to apply to the results.",
            "in": "query",
            "name": "filter",
            "required": true,
            "schema": {
              "enum": [
                "batch",
                "default",
                "single",
                "vip"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-promotion"
                }
              }
            },
            "description": "The promotions were returned."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The filter is invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't view promotions for an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "promo_codes"
            ]
          }
        ],
        "summary": "Get all the promotions on an On Demand page",
        "tags": [
          "On Demand\\Promotions"
        ]
      },
      "post": {
        "operationId": "create_vod_promotion",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.ondemand.promotion+json": {
              "schema": {
                "properties": {
                  "access_type": {
                    "description": "The promotion access type, which is a purchase option that isn't available on the container. VIP promotions always make the content free of charge. If you use this type, you must further define the promotion with the `download` or `stream_period` fields.\n\nOption descriptions:\n * `default` - Promotions grant discount on the existing purchase options for an On Demand Container.\n * `vip` - Promotions can be used to grant free access to VOD content before it is released, or to offer a purchase option that isn't available on the container. \"vip\" promotions will always make the content free, and must be further defined with the `download` or `stream_period` fields.\n",
                    "enum": [
                      "default",
                      "vip"
                    ],
                    "type": "string"
                  },
                  "code": {
                    "description": "The promotion code. This field is ignored for batch promotions.",
                    "example": "sxsw2018",
                    "type": "string"
                  },
                  "discount_type": {
                    "description": "The type of discount offered by the promo code. When `access_type` is `vip`, the value of this field must be `free`.\n\nOption descriptions:\n * `free` - Reduces the price to zero.\n * `percent` - Reduces the price by an amount defined in the \"percent_off\" field.\n",
                    "enum": [
                      "free",
                      "percent"
                    ],
                    "type": "string"
                  },
                  "download": {
                    "description": "Whether the promotion grants download access to VOD content. This is necessary only when not previously defined in the On Demand container or when `access_type` is `vip` or `product_type` is `buy`.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "end_time": {
                    "description": "The end of the promotion period. If you don't specify a value, the promotion will never expire.",
                    "example": "1526089920",
                    "type": "string"
                  },
                  "label": {
                    "description": "The description of a batch promotion. This field is ignored for single promotions.",
                    "example": "sxsw",
                    "type": "string"
                  },
                  "percent_off": {
                    "description": "The percentage of the discount by using this promo code. This field is applicable only when `discount_type` is `percent`.",
                    "example": 50,
                    "type": "number"
                  },
                  "product_type": {
                    "description": "The type of transaction to which the promotion applies. When `access_type` is `default`, the default value is `any`, but the default value is `rent` when `access_type` is `vip`. Also, when `access_type` is `vip`, the only valid product types are `buy` and `rent`.",
                    "enum": [
                      "any",
                      "buy",
                      "buy_episode",
                      "rent",
                      "rent_episode",
                      "subscribe"
                    ],
                    "type": "string"
                  },
                  "start_time": {
                    "description": "The start of the promotion period. If you don't specify a value, the start time defaults to the time that the promotion was created.",
                    "example": "1526089920",
                    "type": "string"
                  },
                  "stream_period": {
                    "description": "The amount of time that a user has access to the VOD content upon redeeming a promo code. This field is necessary only when not defined in the On Demand container or when creating promotions when `access_type` is `vip` or `product_type` is `rent`.",
                    "enum": [
                      "1_week",
                      "1_year",
                      "24_hour",
                      "30_day",
                      "3_month",
                      "48_hour",
                      "6_month",
                      "72_hour"
                    ],
                    "type": "string"
                  },
                  "total": {
                    "description": "The number of promotions to generate when `type` is `batch`, or the number of uses of the promotion when `type` is `single`.",
                    "example": 9,
                    "type": "number"
                  },
                  "type": {
                    "description": "The type of promotion. When `access_type` is `vip`, the value for this field must be `batch`.\n\nOption descriptions:\n * `batch` - Generates many random promo codes with one use each.\n * `single` - Generates one promo code that can be used many times.\n",
                    "enum": [
                      "batch",
                      "single"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "download",
                  "stream_period",
                  "total",
                  "type"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-promotion"
                }
              }
            },
            "description": "The promotion was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* There are errors in the request.\n* The promo code already exists."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't create promotions for an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "promo_codes",
              "create"
            ]
          }
        ],
        "summary": "Add a promotion to an On Demand page",
        "tags": [
          "On Demand\\Promotions"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/promotions/{promotion_id}": {
      "delete": {
        "operationId": "delete_vod_promotion",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the promotion.",
            "in": "path",
            "name": "promotion_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The promotion was deleted."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't delete a promotion for an On Demand page that you not own."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or promotion exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "promo_codes",
              "delete"
            ]
          }
        ],
        "summary": "Remove a promotion from an On Demand page",
        "tags": [
          "On Demand\\Promotions"
        ]
      },
      "get": {
        "operationId": "get_vod_promotion",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the promotion.",
            "in": "path",
            "name": "promotion_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-promotion"
                }
              }
            },
            "description": "The promotion was returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't view a promotion for an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.promotion+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or promotion exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "promo_codes"
            ]
          }
        ],
        "summary": "Get a specific promotion on an On Demand page",
        "tags": [
          "On Demand\\Promotions"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes": {
      "get": {
        "operationId": "get_vod_promotion_codes",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the promotion.",
            "in": "path",
            "name": "promotion_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.promocode+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-promotion-code"
                }
              }
            },
            "description": "The codes were returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.promocode+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't create promotions for an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.promocode+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "promo_codes"
            ]
          }
        ],
        "summary": "Get all the codes of a promotion on an On Demand page",
        "tags": [
          "On Demand\\Promotions"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/regions": {
      "delete": {
        "operationId": "delete_vod_regions",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.ondemand.region+json": {
              "schema": {
                "properties": {
                  "countries": {
                    "description": "An array of country codes.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-region"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The On Demand regions were deleted."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or region exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a list of regions from an On Demand page",
        "tags": [
          "On Demand\\Regions"
        ]
      },
      "get": {
        "operationId": "get_vod_regions",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-region"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The regions were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "summary": "Get all the regions of an On Demand page",
        "tags": [
          "On Demand\\Regions"
        ]
      },
      "put": {
        "operationId": "set_vod_regions",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.ondemand.region+json": {
              "schema": {
                "properties": {
                  "countries": {
                    "description": "An array of country codes.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "countries"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-region"
                }
              }
            },
            "description": "The list of regions was set."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or region exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a list of regions to an On Demand page",
        "tags": [
          "On Demand\\Regions"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/regions/{country}": {
      "delete": {
        "operationId": "delete_vod_region",
        "parameters": [
          {
            "description": "The country code.",
            "in": "path",
            "name": "country",
            "required": true,
            "schema": {
              "example": "US",
              "type": "string"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The On Demand region was deleted."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or region exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a specific region from an On Demand page",
        "tags": [
          "On Demand\\Regions"
        ]
      },
      "get": {
        "description": "Checks whether an On Demand page belongs to a region.",
        "operationId": "get_vod_region",
        "parameters": [
          {
            "description": "The country code.",
            "in": "path",
            "name": "country",
            "required": true,
            "schema": {
              "example": "US",
              "type": "string"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-region"
                }
              }
            },
            "description": "The On Demand page's region was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or region exists."
          }
        },
        "summary": "Get a specific region of an On Demand page",
        "tags": [
          "On Demand\\Regions"
        ]
      },
      "put": {
        "operationId": "add_vod_region",
        "parameters": [
          {
            "description": "The country code.",
            "in": "path",
            "name": "country",
            "required": true,
            "schema": {
              "example": "US",
              "type": "string"
            }
          },
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-region"
                }
              }
            },
            "description": "The region was added."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or region exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a specific region to an On Demand page",
        "tags": [
          "On Demand\\Regions"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/seasons": {
      "get": {
        "operationId": "get_vod_seasons",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "viewable"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "date",
                "manual"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.season+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-season"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The seasons were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.season+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page exists."
          }
        },
        "summary": "Get all the seasons on an On Demand page",
        "tags": [
          "On Demand\\Seasons"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/seasons/{season_id}": {
      "get": {
        "operationId": "get_vod_season",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the season.",
            "in": "path",
            "name": "season_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.season+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-season"
                }
              }
            },
            "description": "The season was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.season+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand page or season exists."
          }
        },
        "summary": "Get a specific season on an On Demand page",
        "tags": [
          "On Demand\\Seasons"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/seasons/{season_id}/videos": {
      "get": {
        "operationId": "get_vod_season_videos",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the season.",
            "in": "path",
            "name": "season_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "viewable"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "date",
                "default",
                "manual",
                "name",
                "purchase_time",
                "release_date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "summary": "Get all the videos in a season on an On Demand page",
        "tags": [
          "On Demand\\Seasons"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/videos": {
      "get": {
        "operationId": "get_vod_videos",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "all",
                "buy",
                "expiring_soon",
                "extra",
                "main",
                "main.viewable",
                "rent",
                "trailer",
                "unwatched",
                "viewable",
                "watched"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "date",
                "default",
                "episode",
                "manual",
                "name",
                "purchase_time",
                "release_date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "* The videos were returned.\n* The videos were returned."
          }
        },
        "summary": "Get all the videos on an On Demand page",
        "tags": [
          "On Demand\\Videos"
        ]
      }
    },
    "/ondemand/pages/{ondemand_id}/videos/{video_id}": {
      "delete": {
        "operationId": "delete_video_from_vod",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was deleted."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a video from an On Demand page",
        "tags": [
          "On Demand\\Videos"
        ]
      },
      "get": {
        "operationId": "get_vod_video",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video is on the On Demand page."
          }
        },
        "summary": "Get a specific video on an On Demand page",
        "tags": [
          "On Demand\\Videos"
        ]
      },
      "put": {
        "operationId": "add_video_to_vod",
        "parameters": [
          {
            "description": "The ID of the On Demand.",
            "in": "path",
            "name": "ondemand_id",
            "required": true,
            "schema": {
              "example": 61326,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.ondemand.video+json": {
              "schema": {
                "properties": {
                  "buy": {
                    "properties": {
                      "price": {
                        "properties": {
                          "AUD": {
                            "description": "The purchase price of this video in AUD.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "CAD": {
                            "description": "The purchase price of this video in CAD.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "CHF": {
                            "description": "The purchase price of this video in CHF.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "DKK": {
                            "description": "The purchase price of this video in DKK.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "EUR": {
                            "description": "The purchase price of this video in EUR.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "GBP": {
                            "description": "The purchase price of this video in GBP.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "JPY": {
                            "description": "The purchase price of this video in JPY.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "KRW": {
                            "description": "The purchase price of this video in KRW.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "NOK": {
                            "description": "The purchase price of this video in NOK.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "PLN": {
                            "description": "The purchase price of this video in PLN.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "SEK": {
                            "description": "The purchase price of this video in SEK.",
                            "example": 1.99,
                            "type": "number"
                          },
                          "USD": {
                            "description": "The purchase price of this video in USD. *Required if `buy.active` is true.",
                            "example": 1.99,
                            "type": "number"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "position": {
                    "description": "The position of this video in the On Demand collection.",
                    "example": 10,
                    "type": "number"
                  },
                  "release_year": {
                    "description": "The video release year.",
                    "example": 2018,
                    "type": "number"
                  },
                  "rent": {
                    "properties": {
                      "price": {
                        "properties": {
                          "AUD": {
                            "description": "The rental price of this video in AUD.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "CAD": {
                            "description": "The rental price of this video in CAD.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "CHF": {
                            "description": "The rental price of this video in CHF.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "DKK": {
                            "description": "The rental price of this video in DKK.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "EUR": {
                            "description": "The rental price of this video in EUR.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "GBP": {
                            "description": "The rental price of this video in GBP.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "JPY": {
                            "description": "The rental price of this video in JPY.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "KRW": {
                            "description": "The rental price of this video in KRW.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "NOK": {
                            "description": "The rental price of this video in NOK.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "PLN": {
                            "description": "The rental price of this video in PLN.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "SEK": {
                            "description": "The rental price of this video in SEK.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "USD": {
                            "description": "The rental price of this video in USD. *Required if `rent.active` is true.",
                            "example": 0.99,
                            "type": "number"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "type": {
                    "description": "The type of video that you are adding to the On Demand page.",
                    "enum": [
                      "extra",
                      "main",
                      "trailer"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "type"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-video"
                }
              }
            },
            "description": "The video was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.ondemand.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't add the video to this On Demand page."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't modify an On Demand page that you don't own."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a video to an On Demand page",
        "tags": [
          "On Demand\\Videos"
        ]
      }
    },
    "/ondemand/regions": {
      "get": {
        "operationId": "get_regions",
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-region"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The On Demand regions were returned."
          }
        },
        "summary": "Get all the On Demand regions",
        "tags": [
          "On Demand\\Regions"
        ]
      }
    },
    "/ondemand/regions/{country}": {
      "get": {
        "operationId": "get_region",
        "parameters": [
          {
            "description": "The country code.",
            "in": "path",
            "name": "country",
            "required": true,
            "schema": {
              "example": "US",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-region"
                }
              }
            },
            "description": "The On Demand region was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.region+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such On Demand region exists."
          }
        },
        "summary": "Get a specific On Demand region",
        "tags": [
          "On Demand\\Regions"
        ]
      }
    },
    "/tags/{word}": {
      "get": {
        "operationId": "get_tag",
        "parameters": [
          {
            "description": "The tag to return.",
            "in": "path",
            "name": "word",
            "required": true,
            "schema": {
              "example": "awesome",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/tag"
                }
              }
            },
            "description": "The tag was returned."
          }
        },
        "summary": "Get a specific tag",
        "tags": [
          "Tags\\Essentials"
        ]
      }
    },
    "/tags/{word}/videos": {
      "get": {
        "operationId": "get_videos_with_tag",
        "parameters": [
          {
            "description": "The tag word.",
            "in": "path",
            "name": "word",
            "required": true,
            "schema": {
              "example": "awesome",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "created_time",
                "duration",
                "name"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such tag exists."
          }
        },
        "summary": "Get all the videos with a specific tag",
        "tags": [
          "Videos\\Tags"
        ]
      }
    },
    "/tokens": {
      "delete": {
        "description": "This method enables an app to notify the API that it is done with a token and that the token can be discarded.",
        "operationId": "delete_token",
        "responses": {
          "204": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/auth"
                }
              }
            },
            "description": "The token was revoked."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.auth+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You can't revoke access for an OAuth 1 token."
          }
        },
        "summary": "Revoke the current access token",
        "tags": [
          "Authentication Extras\\Essentials"
        ]
      }
    },
    "/users": {
      "get": {
        "operationId": "search_users",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "followers",
                "relevant",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The search results were returned."
          },
          "500": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "There was an internal search error."
          },
          "503": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "Search is disabled."
          }
        },
        "summary": "Search for users",
        "tags": [
          "Users\\Internal"
        ]
      }
    },
    "/users/{user_id}": {
      "get": {
        "operationId": "get_user",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            },
            "description": "The user was returned."
          }
        },
        "summary": "Get a user",
        "tags": [
          "Users\\Essentials"
        ]
      },
      "patch": {
        "operationId": "edit_user",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.user+json": {
              "schema": {
                "properties": {
                  "bio": {
                    "description": "The user's bio.",
                    "example": "This is where you will find videos and news updates from the staff",
                    "type": "string"
                  },
                  "content_filter": {
                    "description": "A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint. You must provide a comma-separated list if you are using a query string or an array if you are using JSON.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "link": {
                    "description": "The user's custom Vimeo URL slug.",
                    "example": "staff",
                    "type": "string"
                  },
                  "location": {
                    "description": "The user's location.",
                    "example": "New York City",
                    "type": "string"
                  },
                  "name": {
                    "description": "The user's display name.",
                    "example": "Vimeo Staff",
                    "type": "string"
                  },
                  "password": {
                    "description": "The default password for all future videos that this user uploads. To use this field, the `videos.privacy.view` field must be `password`.",
                    "example": "hunter1",
                    "type": "string"
                  },
                  "videos": {
                    "properties": {
                      "privacy": {
                        "properties": {
                          "add": {
                            "description": "Whether a user can add the video to an album, channel, or group. This value becomes the default add setting for all future videos uploaded by the user.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "comments": {
                            "description": "Who can comment on the video. This value becomes the default comment setting for all future videos that this user uploads.",
                            "enum": [
                              "anybody",
                              "contacts",
                              "nobody"
                            ],
                            "type": "string"
                          },
                          "download": {
                            "description": "Whether a user can download the video. This value becomes the default download setting for all future videos that this user uploads.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "embed": {
                            "description": "The privacy for embed videos. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for adding and removing domains.",
                            "enum": [
                              "private",
                              "public",
                              "whitelist"
                            ],
                            "type": "string"
                          },
                          "view": {
                            "description": "Who can view the video. This value becomes the default view setting for all future videos that this user uploads.",
                            "enum": [
                              "anybody",
                              "contacts",
                              "disable",
                              "nobody",
                              "password",
                              "unlisted",
                              "users"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            },
            "description": "The user was edited."
          }
        },
        "summary": "Edit a user",
        "tags": [
          "Users\\Essentials"
        ]
      }
    },
    "/users/{user_id}/albums": {
      "get": {
        "operationId": "get_albums",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "duration",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/album"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The albums were returned."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          }
        },
        "summary": "Get all the albums that belong to a user",
        "tags": [
          "Albums\\Essentials"
        ]
      },
      "post": {
        "operationId": "create_album",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.album+json": {
              "schema": {
                "properties": {
                  "brand_color": {
                    "description": "The hexadecimal code for the color of the player buttons.",
                    "example": "ff66ee",
                    "type": "string"
                  },
                  "description": {
                    "description": "The description of the album.",
                    "example": "Vimeo holiday videos!",
                    "type": "string"
                  },
                  "hide_nav": {
                    "description": "Whether to hide Vimeo navigation when displaying the album.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "layout": {
                    "description": "The type of layout for presenting the album.",
                    "enum": [
                      "grid",
                      "player"
                    ],
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the album.",
                    "example": "Vimeo Holiday Videos!",
                    "type": "string"
                  },
                  "password": {
                    "description": "The album's password. Required only if **privacy** is `password`.",
                    "example": "hunter1",
                    "type": "string"
                  },
                  "privacy": {
                    "description": "The privacy level of the album.",
                    "enum": [
                      "anybody",
                      "embed_only",
                      "password"
                    ],
                    "type": "string"
                  },
                  "review_mode": {
                    "description": "Whether album videos should use the review mode URL.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "sort": {
                    "description": "The default sort order of the album's videos.",
                    "enum": [
                      "added_first",
                      "added_last",
                      "alphabetical",
                      "arranged",
                      "comments",
                      "likes",
                      "newest",
                      "oldest",
                      "plays"
                    ],
                    "type": "string"
                  },
                  "theme": {
                    "description": "The color theme of the album.",
                    "enum": [
                      "dark",
                      "standard"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/album"
                }
              }
            },
            "description": "The album was created."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The supplied token doesn't have the proper scopes, or the authenticated user can't create an album."
          }
        },
        "security": [
          {
            "oauth2": [
              "create"
            ]
          }
        ],
        "summary": "Create an album",
        "tags": [
          "Albums\\Essentials"
        ]
      }
    },
    "/users/{user_id}/albums/{album_id}": {
      "delete": {
        "operationId": "delete_album",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The album was deleted."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The supplied token doesn't have the proper scopes, or the authenticated user can't delete the album."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete an album",
        "tags": [
          "Albums\\Essentials"
        ]
      },
      "get": {
        "operationId": "get_album",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/album"
                }
              }
            },
            "description": "The album was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "summary": "Get a specific album",
        "tags": [
          "Albums\\Essentials"
        ]
      },
      "patch": {
        "operationId": "edit_album",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.album+json": {
              "schema": {
                "properties": {
                  "brand_color": {
                    "description": "The hexadecimal code for the color of the player buttons.",
                    "example": "ff66ee",
                    "type": "string"
                  },
                  "description": {
                    "description": "The description of the album.",
                    "example": "Vimeo holiday videos!",
                    "type": "string"
                  },
                  "domain": {
                    "description": "The custom domain a user has selected for their album.",
                    "example": "mycustomdomain.com",
                    "nullable": true,
                    "type": "string"
                  },
                  "hide_nav": {
                    "description": "Whether to hide Vimeo navigation when displaying the album.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "layout": {
                    "description": "The type of layout for presenting the album.",
                    "enum": [
                      "grid",
                      "player"
                    ],
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the album.",
                    "example": "Vimeo Holiday Videos!",
                    "type": "string"
                  },
                  "password": {
                    "description": "The album's password. Required only if **privacy** is `password`.",
                    "example": "hunter1",
                    "type": "string"
                  },
                  "privacy": {
                    "description": "The privacy level of the album.",
                    "enum": [
                      "anybody",
                      "embed_only",
                      "password"
                    ],
                    "type": "string"
                  },
                  "review_mode": {
                    "description": "Whether album videos should use the review mode URL.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "sort": {
                    "description": "The default sort order of the album's videos.",
                    "enum": [
                      "added_first",
                      "added_last",
                      "alphabetical",
                      "arranged",
                      "comments",
                      "likes",
                      "newest",
                      "oldest",
                      "plays"
                    ],
                    "type": "string"
                  },
                  "theme": {
                    "description": "The color theme of the album.",
                    "enum": [
                      "dark",
                      "standard"
                    ],
                    "type": "string"
                  },
                  "url": {
                    "description": "The custom Vimeo URL a user has selected for their album.",
                    "example": "my-custom-url",
                    "nullable": true,
                    "type": "string"
                  },
                  "use_custom_domain": {
                    "description": "Whether the user has opted in to use a custom domain for their album.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/album"
                }
              }
            },
            "description": "The album was edited."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the album, the supplied token doesn't have the proper scopes, or the authenticated user can't edit the album."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.album+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit an album",
        "tags": [
          "Albums\\Essentials"
        ]
      }
    },
    "/users/{user_id}/albums/{album_id}/custom_thumbnails": {
      "get": {
        "operationId": "get_album_custom_thumbs",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The custom uploaded thumbnails were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "summary": "Get all the custom upload thumbnails of an album",
        "tags": [
          "Albums\\Custom album thumbnails"
        ]
      },
      "post": {
        "operationId": "create_album_custom_thumb",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom thumbnail was added to the album."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't modify this album."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a custom uploaded thumbnail",
        "tags": [
          "Albums\\Custom album thumbnails"
        ]
      }
    },
    "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}": {
      "delete": {
        "description": "This method removes a custom uploaded thumbnail from the specified album.",
        "operationId": "delete_album_custom_thumbnail",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the custom thumbnail.",
            "in": "path",
            "name": "thumbnail_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The custom thumbnail was removed."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't modify this album."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists, or it doesn't contain the specified custom thumbnail."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a custom uploaded album thumbnail",
        "tags": [
          "Albums\\Custom album thumbnails"
        ]
      },
      "get": {
        "operationId": "get_album_custom_thumbnail",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the custom thumbnail.",
            "in": "path",
            "name": "thumbnail_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom thumbnail was returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't view this custom thumbnail."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists, or it doesn't contain the specified custom thumbnail."
          }
        },
        "summary": "Get a specific custom uploaded album thumbnail",
        "tags": [
          "Albums\\Custom album thumbnails"
        ]
      },
      "patch": {
        "operationId": "replace_album_custom_thumb",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the custom thumbnail.",
            "in": "path",
            "name": "thumbnail_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.picture+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether to make this the active album thumbnail.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom thumbnail was replaced."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't modify this album."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists, or it doesn't contain the specified custom thumbnail."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Replace a custom uploaded album thumbnail",
        "tags": [
          "Albums\\Custom album thumbnails"
        ]
      }
    },
    "/users/{user_id}/albums/{album_id}/logos": {
      "get": {
        "operationId": "get_album_logos",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The custom logos were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "summary": "Get all the custom logos of an album",
        "tags": [
          "Albums\\Custom album logos"
        ]
      },
      "post": {
        "operationId": "create_album_logo",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The logo was added to the album."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't modify this album."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a custom album logo",
        "tags": [
          "Albums\\Custom album logos"
        ]
      }
    },
    "/users/{user_id}/albums/{album_id}/logos/{logo_id}": {
      "delete": {
        "description": "This method removes a custom logo from the specified album.",
        "operationId": "delete_album_logo",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the custom logo.",
            "in": "path",
            "name": "logo_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The custom logo was removed."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't modify this album."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists, or it doesn't contain the specified custom logo."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a custom album logo",
        "tags": [
          "Albums\\Custom album logos"
        ]
      },
      "get": {
        "operationId": "get_album_logo",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the custom logo.",
            "in": "path",
            "name": "logo_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom logo was returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't view this custom logo."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists, or it doesn't contain the specified custom logo."
          }
        },
        "summary": "Get a specific custom album logo",
        "tags": [
          "Albums\\Custom album logos"
        ]
      },
      "patch": {
        "operationId": "replace_album_logo",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the custom logo.",
            "in": "path",
            "name": "logo_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.picture+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether to make this the active album logo.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom logo was replaced."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't modify this album."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists, or it doesn't contain the specified custom logo."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Replace a custom album logo",
        "tags": [
          "Albums\\Custom album logos"
        ]
      }
    },
    "/users/{user_id}/albums/{album_id}/videos": {
      "get": {
        "operationId": "get_album_videos",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The page containing the video URI.",
            "in": "query",
            "name": "containing_uri",
            "required": false,
            "schema": {
              "example": "/videos/258684937",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The password of the album.",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": {
              "example": "hunter1",
              "type": "string"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "default",
                "duration",
                "likes",
                "manual",
                "modified_time",
                "plays"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name.",
            "in": "query",
            "name": "weak_search",
            "required": false,
            "schema": {
              "example": "false",
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "summary": "Get all the videos in an album",
        "tags": [
          "Albums\\Album videos"
        ]
      },
      "put": {
        "description": "This method replaces all the existing videos in an album with one or more videos.",
        "operationId": "replace_videos_in_album",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "videos": {
                    "description": "A comma-separated list of video URIs.",
                    "example": "/videos/258684937,/videos/273576296",
                    "type": "string"
                  }
                },
                "required": [
                  "videos"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "description": "The videos were added."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't add videos to albums."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Replace all the videos in an album",
        "tags": [
          "Albums\\Album videos"
        ]
      }
    },
    "/users/{user_id}/albums/{album_id}/videos/{video_id}": {
      "delete": {
        "operationId": "remove_video_from_album",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 196367152,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was removed."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The supplied token doesn't have the proper scopes, or the authenticated user can't edit the album."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a video from an album",
        "tags": [
          "Albums\\Album videos"
        ]
      },
      "get": {
        "description": "This method gets a single video from an album. You can use this method to determine whether the album contains the specified video.",
        "operationId": "get_album_video",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 3706071,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 196367152,
              "type": "number"
            }
          },
          {
            "description": "The password of the album.",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": {
              "example": "hunter1",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists, or the video wasn't found in it."
          }
        },
        "summary": "Get a specific video in an album",
        "tags": [
          "Albums\\Album videos"
        ]
      },
      "put": {
        "operationId": "add_video_to_album",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 196367152,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was added."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The supplied token doesn't have the proper scopes, or the authenticated user can't edit the album."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such album exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a specific video to an album",
        "tags": [
          "Albums\\Album videos"
        ]
      }
    },
    "/users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail": {
      "post": {
        "operationId": "set_video_as_album_thumbnail",
        "parameters": [
          {
            "description": "The ID of the album.",
            "in": "path",
            "name": "album_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 196367152,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "time_code": {
                    "description": "The video frame time in seconds to use as the album thumbnail.",
                    "example": 300,
                    "type": "number"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/album"
                }
              }
            },
            "description": "The album was updated with a new thumbnail."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3429: The authenticated user can't edit the album."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such album, or user, or video exists."
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 4016: Unexpected error while setting thumbnail."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Set a video as the album thumbnail",
        "tags": [
          "Albums\\Album videos"
        ]
      }
    },
    "/users/{user_id}/appearances": {
      "get": {
        "operationId": "get_appearances",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "duration",
                "likes",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "summary": "Get all the videos in which a user appears",
        "tags": [
          "Videos\\Essentials"
        ]
      }
    },
    "/users/{user_id}/categories": {
      "get": {
        "operationId": "get_category_subscriptions",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "name"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/category"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The categories were returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: You can't view another user."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all the categories that a user follows",
        "tags": [
          "Categories\\Subscriptions"
        ]
      }
    },
    "/users/{user_id}/categories/{category}": {
      "delete": {
        "operationId": "unsubscribe_from_category",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user was unsubscribed."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Unsubscribe a user from a category",
        "tags": [
          "Categories\\Subscriptions"
        ]
      },
      "get": {
        "operationId": "check_if_user_subscribed_to_category",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": "animation",
              "type": "string"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user is following the category."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Check if a user follows a category",
        "tags": [
          "Categories\\Subscriptions"
        ]
      },
      "put": {
        "operationId": "subscribe_to_category",
        "parameters": [
          {
            "description": "The name of the category.",
            "in": "path",
            "name": "category",
            "required": true,
            "schema": {
              "example": 0,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user was subscribed."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Subscribe a user to a single category",
        "tags": [
          "Categories\\Subscriptions"
        ]
      }
    },
    "/users/{user_id}/channels": {
      "get": {
        "operationId": "get_channel_subscriptions",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "moderated"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "followers",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/channel"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The channels were returned."
          },
          "304": {
            "description": "No channel has been followed since the given `If-Modified-Since` header."
          }
        },
        "summary": "Get all the channels to which a user subscribes",
        "tags": [
          "Channels\\Essentials"
        ]
      }
    },
    "/users/{user_id}/channels/{channel_id}": {
      "delete": {
        "operationId": "unsubscribe_from_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user is no longer a follower of the channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Unsubscribe a user from a specific channel",
        "tags": [
          "Channels\\Subscriptions and subscribers"
        ]
      },
      "get": {
        "operationId": "check_if_user_subscribed_to_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user follows the channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "summary": "Check if a user follows a channel",
        "tags": [
          "Channels\\Subscriptions and subscribers"
        ]
      },
      "put": {
        "operationId": "subscribe_to_channel",
        "parameters": [
          {
            "description": "The ID of the channel.",
            "in": "path",
            "name": "channel_id",
            "required": true,
            "schema": {
              "example": 927,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user is now a follower of the channel."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such channel exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Subscribe a user to a specific channel",
        "tags": [
          "Channels\\Subscriptions and subscribers"
        ]
      }
    },
    "/users/{user_id}/customlogos": {
      "get": {
        "operationId": "get_custom_logos",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The custom logos were returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The user can't view this custom logo.\n* The user can't view custom logos."
          }
        },
        "summary": "Get all the custom logos that belong to a user",
        "tags": [
          "Embed Presets\\Custom Logos"
        ]
      },
      "post": {
        "operationId": "create_custom_logo",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom logo was created."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* You can't upload pictures for another user's videos.\n* The user can't add a custom logo."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a custom logo",
        "tags": [
          "Embed Presets\\Custom Logos"
        ]
      }
    },
    "/users/{user_id}/customlogos/{logo_id}": {
      "get": {
        "operationId": "get_custom_logo",
        "parameters": [
          {
            "description": "The ID of the custom logo.",
            "in": "path",
            "name": "logo_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom logo was returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The user can't view custom logos."
          }
        },
        "summary": "Get a specific custom logo",
        "tags": [
          "Embed Presets\\Custom Logos"
        ]
      }
    },
    "/users/{user_id}/feed": {
      "get": {
        "operationId": "get_feed",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "Necessary for proper pagination. You shouldn't provide this value yourself, and instead use the pagination links in the feed response. Please see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter) for more information.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "example": "280",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The feed type.",
            "in": "query",
            "name": "type",
            "required": false,
            "schema": {
              "enum": [
                "appears",
                "category_featured",
                "channel",
                "facebook_feed",
                "following",
                "group",
                "likes",
                "ondemand_publish",
                "share",
                "tagged_with",
                "twitter_timeline",
                "uploads"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.activity+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/activity-3-1"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all videos in a user's feed",
        "tags": [
          "Users\\Feed"
        ]
      }
    },
    "/users/{user_id}/followers": {
      "get": {
        "operationId": "get_followers",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The user's followers were returned."
          }
        },
        "summary": "Get all the followers of a user",
        "tags": [
          "Users\\Follows"
        ]
      }
    },
    "/users/{user_id}/following": {
      "get": {
        "operationId": "get_user_following",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "online"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The followed users were returned."
          }
        },
        "summary": "Get all the users that a user is following",
        "tags": [
          "Users\\Follows"
        ]
      },
      "post": {
        "operationId": "follow_users",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "users": {
                    "description": "An array of user URIs for the list of users to follow.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "users"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "204": {
            "description": "The users were followed."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2205: The request body is empty.\n* Error code 2205: The `users` array is invalid.\n* Error code 2205: The list of users doesn't contain URIs.\n* Error code 2900: A user in the list doesn't exist.\n* Error code 2901: The list contains more than 100 users."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user access token is invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3417: The current user can't follow other users."
          },
          "429": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 9006: The current user is rate-limited from following other users."
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 4005: An unexpected error occurred."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Follow a list of users",
        "tags": [
          "Users\\Follows"
        ]
      }
    },
    "/users/{user_id}/following/{follow_user_id}": {
      "delete": {
        "operationId": "unfollow_user",
        "parameters": [
          {
            "description": "The ID of the following user.",
            "in": "path",
            "name": "follow_user_id",
            "required": true,
            "schema": {
              "example": 3766357,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user was unfollowed."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Unfollow a user",
        "tags": [
          "Users\\Follows"
        ]
      },
      "get": {
        "operationId": "check_if_user_is_following",
        "parameters": [
          {
            "description": "The ID of the following user.",
            "in": "path",
            "name": "follow_user_id",
            "required": true,
            "schema": {
              "example": 3766357,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The authenticated user follows the user in question."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The user in question doesn't follow the authenticated user."
          }
        },
        "summary": "Check if a user is following another user",
        "tags": [
          "Users\\Follows"
        ]
      },
      "put": {
        "operationId": "follow_user",
        "parameters": [
          {
            "description": "The ID of the following user.",
            "in": "path",
            "name": "follow_user_id",
            "required": true,
            "schema": {
              "example": 3766357,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user was followed."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't add followers."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Follow a specific user",
        "tags": [
          "Users\\Follows"
        ]
      }
    },
    "/users/{user_id}/groups": {
      "get": {
        "operationId": "get_user_groups",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "moderated"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "members",
                "videos"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.group+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/group"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The groups were returned."
          }
        },
        "summary": "Get all the groups that a user has joined",
        "tags": [
          "Groups\\Users"
        ]
      }
    },
    "/users/{user_id}/groups/{group_id}": {
      "delete": {
        "operationId": "leave_group",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user left the group."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user owns the group. To remove this user, first apply a new group owner through PATCH."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Remove a user from a group",
        "tags": [
          "Groups\\Subscription"
        ]
      },
      "get": {
        "operationId": "check_if_user_joined_group",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user has joined the group."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* No such group exists.\n* The authenticated user isn't a member of this group."
          }
        },
        "summary": "Check if a user has joined a group",
        "tags": [
          "Groups\\Users"
        ]
      },
      "put": {
        "operationId": "join_group",
        "parameters": [
          {
            "description": "The ID of the group.",
            "in": "path",
            "name": "group_id",
            "required": true,
            "schema": {
              "example": 1108,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user joined the group."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The authenticated user can't join groups.\n* The group prohibits the authenticated user from joining, either because the group is not public or because the group's privacy setting is `members`."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a user to a group",
        "tags": [
          "Groups\\Subscription"
        ]
      }
    },
    "/users/{user_id}/likes": {
      "get": {
        "operationId": "get_likes",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "duration",
                "likes",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "summary": "Get all the videos that a user has liked",
        "tags": [
          "Likes\\Essentials"
        ]
      }
    },
    "/users/{user_id}/likes/{video_id}": {
      "delete": {
        "operationId": "unlike_video",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was unliked."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't like videos."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Cause a user to unlike a video",
        "tags": [
          "Likes\\Essentials"
        ]
      },
      "get": {
        "operationId": "check_if_user_liked_video",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user has liked the video."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The user hasn't liked the video."
          }
        },
        "summary": "Check if a user has liked a video",
        "tags": [
          "Likes\\Essentials"
        ]
      },
      "put": {
        "operationId": "like_video",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was liked."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user owns the video."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't like videos."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Cause a user to like a video",
        "tags": [
          "Likes\\Essentials"
        ]
      }
    },
    "/users/{user_id}/ondemand/pages": {
      "get": {
        "operationId": "get_user_vods",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The type of On Demand pages to return.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "film",
                "series"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "added",
                "alphabetical",
                "date",
                "modified_time",
                "name",
                "publish.time",
                "rating"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/on-demand-page"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The On Demand pages were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such user exists."
          }
        },
        "summary": "Get all the On Demand pages of a user",
        "tags": [
          "On Demand\\Essentials"
        ]
      },
      "post": {
        "operationId": "create_vod",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "accepted_currencies": {
                    "description": "An array of accepted currencies.\n\nOption descriptions:\n * `AUD` - Australian Dollar\n * `CAD` - Canadian Dollar\n * `CHF` - Swiss Franc\n * `DKK` - Danish Krone\n * `EUR` - Euro\n * `GBP` - British Pound\n * `JPY` - Japanese Yen\n * `KRW` - South Korean Won\n * `NOK` - Norwegian Krone\n * `PLN` - Polish Zloty\n * `SEK` - Swedish Krona\n * `USD` - US Dollar\n",
                    "enum": [
                      "AUD",
                      "CAD",
                      "CHF",
                      "DKK",
                      "EUR",
                      "GBP",
                      "JPY",
                      "KRW",
                      "NOK",
                      "PLN",
                      "SEK",
                      "USD"
                    ],
                    "type": "string"
                  },
                  "buy": {
                    "properties": {
                      "active": {
                        "description": "Whether the Buy action is active. *Required if `rent.active` is false.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "download": {
                        "description": "Whether people who buy the video can download it. To use this field, `type` must be `film`.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "price": {
                        "properties": {
                          "AUD": {
                            "description": "The purchase price of this video in AUD.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "CAD": {
                            "description": "The purchase price of this video in CAD.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "CHF": {
                            "description": "The purchase price of this video in CHF.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "DKK": {
                            "description": "The purchase price of this video in DKK.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "EUR": {
                            "description": "The purchase price of this video in EUR.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "GBP": {
                            "description": "The purchase price of this video in GBP.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "JPY": {
                            "description": "The purchase price of this video in JPY.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "KRW": {
                            "description": "The purchase price of this video in KRW.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "NOK": {
                            "description": "The purchase price of this video in NOK.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "PLN": {
                            "description": "The purchase price of this video in PLN.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "SEK": {
                            "description": "The purchase price of this video in SEK.",
                            "example": 2.99,
                            "type": "number"
                          },
                          "USD": {
                            "description": "The purchase price of this video in USD when `type` is `film`, or the purchase price of the entire collection in USD when `type` is `series`.",
                            "example": 2.99,
                            "type": "number"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "content_rating": {
                    "description": "One or more ratings, either as a comma-separated list or as a JSON array depending on the request format.",
                    "enum": [
                      "drugs",
                      "language",
                      "nudity",
                      "safe",
                      "unrated",
                      "violence"
                    ],
                    "type": "string"
                  },
                  "description": {
                    "description": "The description of the On Demand page.",
                    "example": "DARBY FOREVER follows the fantasies of Darby, a shopgirl at \"Bobbins & Notions\".",
                    "type": "string"
                  },
                  "domain_link": {
                    "description": "The custom domain of the On Demand page.",
                    "example": "https://example.com",
                    "type": "string"
                  },
                  "episodes": {
                    "properties": {
                      "buy": {
                        "properties": {
                          "active": {
                            "description": "Whether episodes can be bought.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "download": {
                            "description": "Whether people who buy the episode can download it. To use this field, `type` must be `series`.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "price": {
                            "properties": {
                              "USD": {
                                "description": "The purchase price per episode. *Required if `episodes.buy.active` is true.",
                                "example": 1.99,
                                "type": "number"
                              }
                            },
                            "type": "object"
                          }
                        },
                        "type": "object"
                      },
                      "rent": {
                        "properties": {
                          "active": {
                            "description": "Whether episodes can be rented",
                            "example": "true",
                            "type": "boolean"
                          },
                          "period": {
                            "description": "The period in which this episode can be rented for.",
                            "enum": [
                              "1 week",
                              "1 year",
                              "24 hour",
                              "3 month",
                              "30 day",
                              "48 hour",
                              "6 month",
                              "72 hour"
                            ],
                            "type": "string"
                          },
                          "price": {
                            "properties": {
                              "USD": {
                                "description": "The default price to rent an episode. This field is applicable only when `type` is `series`. *Required if `episodes.rent.active` is true.",
                                "example": 0.99,
                                "type": "number"
                              }
                            },
                            "type": "object"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "link": {
                    "description": "The custom string to use in this On Demand page's Vimeo URL.",
                    "example": "darbyforever",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the On Demand page.",
                    "example": "Darby Forever",
                    "type": "string"
                  },
                  "rent": {
                    "properties": {
                      "active": {
                        "description": "Whether the video can be rented. *Required if `buy.active` is false.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "period": {
                        "description": "The period in which this can be rented for.",
                        "enum": [
                          "1 week",
                          "1 year",
                          "24 hour",
                          "3 month",
                          "30 day",
                          "48 hour",
                          "6 month",
                          "72 hour"
                        ],
                        "type": "string"
                      },
                      "price": {
                        "properties": {
                          "AUD": {
                            "description": "The rental price of this video in AUD.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "CAD": {
                            "description": "The rental price of this video in CAD.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "CHF": {
                            "description": "The rental price of this video in CHF.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "DKK": {
                            "description": "The rental price of this video in DKK.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "EUR": {
                            "description": "The rental price of this video in EUR.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "GBP": {
                            "description": "The rental price of this video in GBP.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "JPY": {
                            "description": "The rental price of this video in JPY.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "KRW": {
                            "description": "The rental price of this video in KRW.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "NOK": {
                            "description": "The rental price of this video in NOK.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "PLN": {
                            "description": "The rental price of this video in PLN.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "SEK": {
                            "description": "The rental price of this video in SEK.",
                            "example": 0.99,
                            "type": "number"
                          },
                          "USD": {
                            "description": "The rental price of this video in USD when `type` is `film`, or the rental price of the entire collection in USD when `type` is `series`.",
                            "example": 0.99,
                            "type": "number"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "subscription": {
                    "properties": {
                      "monthly": {
                        "properties": {
                          "active": {
                            "description": "Whether monthly subscription is active. *Required if `rent.active` and `buy.active` are false.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "price": {
                            "properties": {
                              "USD": {
                                "description": "The monthly subscription price in USD. *Required if `subscription.active` is true.",
                                "example": 9.99,
                                "type": "number"
                              }
                            },
                            "type": "object"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "type": {
                    "description": "The type of On Demand page.",
                    "enum": [
                      "film",
                      "series"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "content_rating",
                  "description",
                  "name",
                  "type"
                ],
                "type": "object"
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
                  "$ref": "#/components/schemas/on-demand-page"
                }
              }
            },
            "description": "The On Demand page was created."
          }
        },
        "summary": "Create an On Demand page",
        "tags": [
          "On Demand\\Essentials"
        ]
      }
    },
    "/users/{user_id}/ondemand/purchases": {
      "get": {
        "operationId": "check_if_vod_was_purchased",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/on-demand-page"
                }
              }
            },
            "description": "You have purchased the On Demand page."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The requested user isn't the same as the authenticated user."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.ondemand.page+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such user or On Demand page exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "purchased"
            ]
          }
        ],
        "summary": "Check if a user has made a purchase or rental from an On Demand page",
        "tags": [
          "On Demand\\Purchases and Rentals"
        ]
      }
    },
    "/users/{user_id}/pictures": {
      "get": {
        "operationId": "get_pictures",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The pictures were returned."
          }
        },
        "summary": "Get all the pictures that belong to a user",
        "tags": [
          "Users\\Pictures"
        ]
      },
      "post": {
        "operationId": "create_picture",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The user picture was created."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a user picture",
        "tags": [
          "Users\\Pictures"
        ]
      }
    },
    "/users/{user_id}/pictures/{portraitset_id}": {
      "delete": {
        "operationId": "delete_picture",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "portraitset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The picture was deleted."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a user picture",
        "tags": [
          "Users\\Pictures"
        ]
      },
      "get": {
        "operationId": "get_picture",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "portraitset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The picture was returned."
          }
        },
        "summary": "Get a specific user picture",
        "tags": [
          "Users\\Pictures"
        ]
      },
      "patch": {
        "operationId": "edit_picture",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "portraitset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.picture+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether the picture is the user's active portrait.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The picture was edited."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a user picture",
        "tags": [
          "Users\\Pictures"
        ]
      }
    },
    "/users/{user_id}/portfolios": {
      "get": {
        "operationId": "get_portfolios",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.portfolio+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/portfolio"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The portfolios were returned."
          }
        },
        "summary": "Get all the portfolios that belong to a user",
        "tags": [
          "Portfolios\\Essentials"
        ]
      }
    },
    "/users/{user_id}/portfolios/{portfolio_id}": {
      "get": {
        "operationId": "get_portfolio",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.portfolio+json": {
                "schema": {
                  "$ref": "#/components/schemas/portfolio"
                }
              }
            },
            "description": "The portfolio was returned."
          }
        },
        "summary": "Get a specific portfolio",
        "tags": [
          "Portfolios\\Essentials"
        ]
      }
    },
    "/users/{user_id}/portfolios/{portfolio_id}/videos": {
      "get": {
        "operationId": "get_portfolio_videos",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The page that contains the video URI.",
            "in": "query",
            "name": "containing_uri",
            "required": false,
            "schema": {
              "example": "/videos/258684937",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.\n\nOption descriptions:\n * `default` - This will sort to the default sort set on the portfolio.\n",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "default",
                "likes",
                "manual",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "summary": "Get all the videos in a portfolio",
        "tags": [
          "Portfolios\\Videos"
        ]
      }
    },
    "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}": {
      "delete": {
        "operationId": "delete_video_from_portfolio",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was deleted."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The portfolio wasn't found, or the video wasn't found."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a video from a portfolio",
        "tags": [
          "Portfolios\\Videos"
        ]
      },
      "get": {
        "operationId": "get_portfolio_video",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video was returned."
          }
        },
        "summary": "Get a specific video in a portfolio",
        "tags": [
          "Portfolios\\Videos"
        ]
      },
      "put": {
        "operationId": "add_video_to_portfolio",
        "parameters": [
          {
            "description": "The ID of the portfolio.",
            "in": "path",
            "name": "portfolio_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was added."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The portfolio wasn't found, or the video wasn't found."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a video to a portfolio",
        "tags": [
          "Portfolios\\Videos"
        ]
      }
    },
    "/users/{user_id}/presets": {
      "get": {
        "operationId": "get_embed_presets",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/presets"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The embed presets were returned."
          }
        },
        "summary": "Get all the embed presets that a user has created",
        "tags": [
          "Embed Presets\\Essentials"
        ]
      }
    },
    "/users/{user_id}/presets/{preset_id}": {
      "get": {
        "operationId": "get_embed_preset",
        "parameters": [
          {
            "description": "The ID of the preset.",
            "in": "path",
            "name": "preset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "$ref": "#/components/schemas/presets"
                }
              }
            },
            "description": "The embed preset was returned."
          }
        },
        "summary": "Get a specific embed preset",
        "tags": [
          "Embed Presets\\Essentials"
        ]
      },
      "patch": {
        "operationId": "edit_embed_preset",
        "parameters": [
          {
            "description": "The ID of the preset.",
            "in": "path",
            "name": "preset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.preset+json": {
              "schema": {
                "properties": {
                  "outro": {
                    "description": "Disable the outro.",
                    "enum": [
                      "nothing"
                    ],
                    "type": "string"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "$ref": "#/components/schemas/presets"
                }
              }
            },
            "description": "The embed preset was edited."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The outro type is invalid."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.preset+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The preset doesn't exist.\n* The authenticated user doesn't own the preset."
          }
        },
        "summary": "Edit an embed preset",
        "tags": [
          "Embed Presets\\Essentials"
        ]
      }
    },
    "/users/{user_id}/presets/{preset_id}/videos": {
      "get": {
        "operationId": "get_embed_preset_videos",
        "parameters": [
          {
            "description": "The ID of the preset.",
            "in": "path",
            "name": "preset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          }
        },
        "summary": "Get all the videos that have been added to an embed preset",
        "tags": [
          "Embed Presets\\Videos"
        ]
      }
    },
    "/users/{user_id}/projects": {
      "get": {
        "description": "This method gets all the projects that belong to the specified user.",
        "operationId": "get_projects",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "date",
                "default",
                "modified_time",
                "name"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/project"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The projects were returned."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all the projects that belong to a user",
        "tags": [
          "Projects\\Essentials"
        ]
      },
      "post": {
        "description": "This method creates a new project for the specified user.",
        "operationId": "create_project",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "name": {
                    "description": "The name of the project.",
                    "example": "Rough cuts",
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
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
                  "$ref": "#/components/schemas/project"
                }
              }
            },
            "description": "The project was created."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2205: The input is empty.\n* Error code 2204: The input is invalid."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't create projects."
          }
        },
        "security": [
          {
            "oauth2": [
              "create"
            ]
          }
        ],
        "summary": "Create a project",
        "tags": [
          "Projects\\Essentials"
        ]
      }
    },
    "/users/{user_id}/projects/{project_id}": {
      "delete": {
        "description": "This method deletes a project and optionally also the videos that it contains.",
        "operationId": "delete_project",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "Whether to delete all the videos in the project along with the project itself.",
            "in": "query",
            "name": "should_delete_clips",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The project was deleted."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't delete the project."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a project",
        "tags": [
          "Projects\\Essentials"
        ]
      },
      "get": {
        "description": "This method gets a single project that belongs to the specified user.",
        "operationId": "get_project",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            },
            "description": "The project was returned."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get a specific project",
        "tags": [
          "Projects\\Essentials"
        ]
      },
      "patch": {
        "description": "This method edits an existing project.",
        "operationId": "edit_project",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "name": {
                    "description": "The name of the project.",
                    "example": "Rough cuts",
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
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
                  "$ref": "#/components/schemas/project"
                }
              }
            },
            "description": "The project was edited."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2204: The input is invalid.\n* Error code 2205: The input is empty."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3200: The authenticated user can't edit the project."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a project",
        "tags": [
          "Projects\\Essentials"
        ]
      }
    },
    "/users/{user_id}/projects/{project_id}/videos": {
      "delete": {
        "description": "This method removed multiple videos from the specified project.",
        "operationId": "remove_videos_from_project",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "Whether to delete the videos when removing them from the project.",
            "in": "query",
            "name": "should_delete_clips",
            "required": false,
            "schema": {
              "example": "false",
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of the video URIs to remove.",
            "in": "query",
            "name": "uris",
            "required": true,
            "schema": {
              "example": "/videos/258684937,/videos/273576296",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The videos were removed."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: The input is invalid."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Remove a list of videos from a project",
        "tags": [
          "Projects\\Videos"
        ]
      },
      "get": {
        "description": "This method gets all the videos that belong to the specified project.",
        "operationId": "get_project_videos",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date",
                "default",
                "duration",
                "last_user_action_event_date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all the videos in a project",
        "tags": [
          "Projects\\Videos"
        ]
      },
      "put": {
        "description": "This method adds multiple videos to the specified project.",
        "operationId": "add_videos_to_project",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "A comma-separated list of video URIs to add.",
            "in": "query",
            "name": "uris",
            "required": true,
            "schema": {
              "example": "/videos/258684937,/videos/273576296",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The videos were added."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: The input is invalid."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such project or video exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a list of videos to a project",
        "tags": [
          "Projects\\Videos"
        ]
      }
    },
    "/users/{user_id}/projects/{project_id}/videos/{video_id}": {
      "delete": {
        "description": "This method removes a single video from the specified project.",
        "operationId": "remove_video_from_project",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was removed."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2204: The input is invalid."
          },
          "401": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8000: The user credentials are invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such video exists in the project."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Remove a specific video from a project",
        "tags": [
          "Projects\\Videos"
        ]
      },
      "put": {
        "description": "This method adds a single video to the specified project.",
        "operationId": "add_video_to_project",
        "parameters": [
          {
            "description": "The ID of the project.",
            "in": "path",
            "name": "project_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was added."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 5000: No such user, project, or video exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a specific video to a project",
        "tags": [
          "Projects\\Videos"
        ]
      }
    },
    "/users/{user_id}/uploads/{upload}": {
      "delete": {
        "operationId": "complete_streaming_upload",
        "parameters": [
          {
            "description": "The ID of the upload attempt.",
            "in": "path",
            "name": "upload",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The crypto signature of the completed upload.",
            "in": "query",
            "name": "signature",
            "required": true,
            "schema": {
              "example": "cd89a20adde7a608f3331e71c37bdfa087bacbf3",
              "type": "string"
            }
          },
          {
            "description": "The ID of the uploaded file.",
            "in": "query",
            "name": "video_file_id",
            "required": true,
            "schema": {
              "example": 1234,
              "type": "number"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "The streaming upload is complete."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2502: The format of the video file is invalid."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 5006: The video file doesn't exist.\n* Error code 5007: The signature doesn't exist.\n* Error code 8400: The signature is invalid."
          },
          "500": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 4011: The upload server returns an HTTP status code other than 200."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Complete a user's streaming upload",
        "tags": [
          "Videos\\Upload"
        ]
      },
      "get": {
        "operationId": "get_upload_attempt",
        "parameters": [
          {
            "description": "The ID of the upload attempt.",
            "in": "path",
            "name": "upload",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.uploadattempt+json": {
                "schema": {
                  "$ref": "#/components/schemas/upload-attempt"
                }
              }
            },
            "description": "The upload attempt was returned."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Get a user's upload attempt",
        "tags": [
          "Videos\\Upload"
        ]
      }
    },
    "/users/{user_id}/videos": {
      "get": {
        "operationId": "get_videos",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The page that contains the video URI. Only available when not paired with `query`.",
            "in": "query",
            "name": "containing_uri",
            "required": false,
            "schema": {
              "example": "/videos/258684937",
              "type": "string"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "app_only",
                "embeddable",
                "featured",
                "playable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "Whether to filter by all playable videos or by all videos that are not  playable.",
            "in": "query",
            "name": "filter_playable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "default",
                "duration",
                "last_user_action_event_date",
                "likes",
                "modified_time",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "304": {
            "description": "This user hasn't created any videos since the given `If-Modified-Since` header."
          }
        },
        "summary": "Get all the videos that a user has uploaded",
        "tags": [
          "Videos\\Essentials"
        ]
      },
      "post": {
        "description": "Begin the video upload process. For more information, see our [upload documentation](https://developer.vimeo.com/api/upload/videos).",
        "operationId": "upload_video",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.video+json": {
              "schema": {
                "properties": {
                  "content_rating": {
                    "description": "A list of values describing the content in this video. Find the full list in the [/contentratings](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "description": {
                    "description": "The description of the video.",
                    "example": "A celebration of 10 years of Staff Picks.",
                    "type": "string"
                  },
                  "embed": {
                    "properties": {
                      "buttons": {
                        "properties": {
                          "embed": {
                            "description": "Show or hide the Embed button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "fullscreen": {
                            "description": "Show or hide the Fullscreen button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "hd": {
                            "description": "Show or hide the HD button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "like": {
                            "description": "Show or hide the Like button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "scaling": {
                            "description": "Show or hide the Scaling button (shown only in Fullscreen mode).",
                            "example": "true",
                            "type": "boolean"
                          },
                          "share": {
                            "description": "Show or hide the Share button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "watchlater": {
                            "description": "Show or hide the Watch Later button.",
                            "example": "true",
                            "type": "boolean"
                          }
                        },
                        "type": "object"
                      },
                      "color": {
                        "description": "The main color of the embed player.",
                        "example": "#1ab7ea",
                        "type": "string"
                      },
                      "logos": {
                        "properties": {
                          "custom": {
                            "properties": {
                              "active": {
                                "description": "Show or hide your custom logo.",
                                "example": "true",
                                "type": "boolean"
                              },
                              "link": {
                                "description": "The URL that loads when the user clicks your custom logo.",
                                "example": "https://example.com",
                                "type": "string"
                              },
                              "sticky": {
                                "description": "Whether always to show the custom logo or to hide it after time with the rest of the UI.",
                                "example": "true",
                                "type": "boolean"
                              }
                            },
                            "type": "object"
                          },
                          "vimeo": {
                            "description": "Show or hide the Vimeo logo.",
                            "example": "true",
                            "type": "boolean"
                          }
                        },
                        "type": "object"
                      },
                      "playbar": {
                        "description": "Show or hide the playbar.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "title": {
                        "properties": {
                          "name": {
                            "description": "Show or hide the video title, or enable the user to determine whether the video title appears.",
                            "enum": [
                              "hide",
                              "show",
                              "user"
                            ],
                            "type": "string"
                          },
                          "owner": {
                            "description": "Show or hide the owner information, or enable the user to determine whether the owner information appears.",
                            "enum": [
                              "hide",
                              "show",
                              "user"
                            ],
                            "type": "string"
                          },
                          "portrait": {
                            "description": "Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.",
                            "enum": [
                              "hide",
                              "show",
                              "user"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "volume": {
                        "description": "Show or hide the volume selector.",
                        "example": "true",
                        "type": "boolean"
                      }
                    },
                    "type": "object"
                  },
                  "license": {
                    "description": "The Creative Commons license.",
                    "enum": [
                      "by",
                      "by-nc",
                      "by-nc-nd",
                      "by-nc-sa",
                      "by-nd",
                      "by-sa",
                      "cc0"
                    ],
                    "type": "string"
                  },
                  "locale": {
                    "description": "The video's default language. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.",
                    "example": "en_US",
                    "type": "string"
                  },
                  "name": {
                    "description": "The title of the video.",
                    "example": "Celebrating 10 Years of Staff Picks",
                    "type": "string"
                  },
                  "password": {
                    "description": "The password. When you set `privacy.view` to `password`, you must provide the password as an additional parameter.",
                    "example": "hunter1",
                    "type": "string"
                  },
                  "privacy": {
                    "properties": {
                      "add": {
                        "description": "Whether a user can add the video to an album, channel, or group.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "comments": {
                        "description": "The privacy level required to comment on the video.",
                        "enum": [
                          "anybody",
                          "contacts",
                          "nobody"
                        ],
                        "type": "string"
                      },
                      "download": {
                        "description": "Whether a user can download the video. Not available to users with a Basic membership",
                        "example": "true",
                        "type": "boolean"
                      },
                      "embed": {
                        "description": "The video's embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.",
                        "enum": [
                          "private",
                          "public",
                          "whitelist"
                        ],
                        "type": "string"
                      },
                      "view": {
                        "description": "The video's privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.",
                        "enum": [
                          "anybody",
                          "contacts",
                          "disable",
                          "nobody",
                          "password",
                          "unlisted",
                          "users"
                        ],
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "ratings": {
                    "properties": {
                      "mpaa": {
                        "properties": {
                          "reason": {
                            "description": "The reason for the video's MPAA rating.\n\nOption descriptions:\n * `at` - Adult themes\n * `bn` - Brief nudity\n * `n` - Nudity\n * `sl` - Strong language\n * `ss` - Sexual situations\n * `v` - Violence\n",
                            "enum": [
                              "at",
                              "bn",
                              "n",
                              "sl",
                              "ss",
                              "v"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "tv": {
                        "properties": {
                          "reason": {
                            "description": "The reason for the video's TV rating.\n\nOption descriptions:\n * `d` - Suggestive dialogue\n * `fv` - Fantasy violence\n * `l` - Language\n * `ss` - Sexual situations\n * `v` - Violence\n",
                            "enum": [
                              "d",
                              "fv",
                              "l",
                              "ss",
                              "v"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "review_page": {
                    "properties": {
                      "active": {
                        "description": "Enable or disable video review.",
                        "example": "true",
                        "type": "boolean"
                      }
                    },
                    "type": "object"
                  },
                  "spatial": {
                    "properties": {
                      "director_timeline": {
                        "description": "The 360 director timeline.",
                        "items": {
                          "properties": {
                            "pitch": {
                              "description": "The timeline pitch. This value must be between -90 and 90.",
                              "example": 70,
                              "type": "number"
                            },
                            "roll": {
                              "description": "The timeline roll.",
                              "type": "number"
                            },
                            "time_code": {
                              "description": "The 360 director timeline time code.",
                              "example": 5,
                              "type": "number"
                            },
                            "yaw": {
                              "description": "The timeline yaw. This value must be between 0 and 360.",
                              "example": 125,
                              "type": "number"
                            }
                          },
                          "required": [
                            "pitch",
                            "time_code",
                            "yaw"
                          ],
                          "type": "object"
                        },
                        "type": "array"
                      },
                      "field_of_view": {
                        "description": "The 360 field of view: default 50, minimum 30, maximum 90.",
                        "example": 50,
                        "type": "number"
                      },
                      "projection": {
                        "description": "The 360 spatial projection.",
                        "enum": [
                          "cubical",
                          "cylindrical",
                          "dome",
                          "equirectangular",
                          "pyramid"
                        ],
                        "type": "string"
                      },
                      "stereo_format": {
                        "description": "The 360 spatial stereo format.",
                        "enum": [
                          "left-right",
                          "mono",
                          "top-bottom"
                        ],
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "upload": {
                    "properties": {
                      "approach": {
                        "description": "The upload approach.",
                        "enum": [
                          "post",
                          "pull",
                          "streaming",
                          "tus"
                        ],
                        "type": "string"
                      },
                      "link": {
                        "description": "The public URL at which the video is hosted. The URL must be valid for at least 24 hours. Use this parameter when `approach` is `pull`.",
                        "example": "https://example.com/video.mp4",
                        "type": "string"
                      },
                      "redirect_url": {
                        "description": "The app's redirect URL. Use this parameter when `approach` is `post`.",
                        "example": "https://example.com",
                        "type": "string"
                      },
                      "size": {
                        "description": "The size in bytes of the video to upload.",
                        "example": "13623861",
                        "type": "string"
                      }
                    },
                    "required": [
                      "approach"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "upload"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The upload procedure has begun."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2205: The body of the request isn't formatted properly.\n* Error code 2204: The request contains invalid parameters.\n* Error code 2204: The request contains invalid body parameters.\n* Error code 2230: The upload type is invalid.\n* Error code 3116: If a `type` payload parameter was supplied instead of `upload.approach`."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8002: No user is associated with the authentication token."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 4102: The user's allotted quota has been reached.\n* Error code 4101: The user's maximum disk space has been reached."
          },
          "500": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 4003: There is a problem initiating the upload."
          }
        },
        "summary": "Upload a video",
        "tags": [
          "Videos\\Upload"
        ]
      }
    },
    "/users/{user_id}/videos/{video_id}": {
      "get": {
        "operationId": "check_if_user_owns_video",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The user owns the video."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the video."
          }
        },
        "summary": "Check if a user owns a video",
        "tags": [
          "Videos\\Essentials"
        ]
      }
    },
    "/users/{user_id}/watchlater": {
      "get": {
        "operationId": "get_watch_later_queue",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "embeddable"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). Required only if **filter** is `embeddable`.",
            "in": "query",
            "name": "filter_embeddable",
            "required": false,
            "schema": {
              "example": "true",
              "type": "boolean"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "duration",
                "likes",
                "plays"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The videos were returned."
          },
          "304": {
            "description": "The user hasn't added any videos to their Watch Later queue since the given `If-Modified-Since` header."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Get all the videos in a user's Watch Later queue",
        "tags": [
          "Watch Later Queue\\Essentials"
        ]
      }
    },
    "/users/{user_id}/watchlater/{video_id}": {
      "delete": {
        "operationId": "delete_video_from_watch_later",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was deleted."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Remove a video from a user's Watch Later queue",
        "tags": [
          "Watch Later Queue\\Essentials"
        ]
      },
      "get": {
        "operationId": "check_watch_later_queue",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video appears in the user's Watch Later queue."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The video doesn't appear in the user's Watch Later queue."
          }
        },
        "security": [
          {
            "oauth2": [
              "private"
            ]
          }
        ],
        "summary": "Check if a user has added a specific video to their Watch Later queue",
        "tags": [
          "Watch Later Queue\\Essentials"
        ]
      },
      "put": {
        "operationId": "add_video_to_watch_later",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was added."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a video to a user's Watch Later queue",
        "tags": [
          "Watch Later Queue\\Essentials"
        ]
      }
    },
    "/videos": {
      "get": {
        "operationId": "search_videos",
        "parameters": [
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The attribute by which to filter the results. `CC` and related filters target videos with the corresponding Creative Commons licenses. For more information, see our [Creative Commons](https://vimeo.com/creativecommons) page.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "CC",
                "CC-BY",
                "CC-BY-NC",
                "CC-BY-NC-ND",
                "CC-BY-NC-SA",
                "CC-BY-ND",
                "CC-BY-SA",
                "CC0",
                "categories",
                "duration",
                "in-progress",
                "minimum_likes",
                "trending",
                "upload_date"
              ],
              "type": "string"
            }
          },
          {
            "description": "A comma-separated list of video URLs to find.",
            "in": "query",
            "name": "links",
            "required": false,
            "schema": {
              "example": "https://vimeo.com/122375452,https://vimeo.com/273576296",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "Search query.",
            "in": "query",
            "name": "query",
            "required": true,
            "schema": {
              "example": "staff picks",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "comments",
                "date",
                "duration",
                "likes",
                "plays",
                "relevant"
              ],
              "type": "string"
            }
          },
          {
            "description": "The comma-separated list of videos to find.",
            "in": "query",
            "name": "uris",
            "required": false,
            "schema": {
              "example": "/videos/122375452,/videos/273576296",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The search results were returned."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2101: Either the `uris` or `links` parameter has filtering or sorting arguments.\n* Error code 2204: There is a problem with the batch request."
          },
          "503": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* Search is disabled.\n* Error code 7300: There was an internal search error."
          }
        },
        "summary": "Search for videos",
        "tags": [
          "Videos\\Essentials"
        ]
      }
    },
    "/videos/{video_id}": {
      "delete": {
        "operationId": "delete_video",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was deleted."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the video and can't delete it."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a video",
        "tags": [
          "Videos\\Essentials"
        ]
      },
      "get": {
        "operationId": "get_video",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video exists."
          }
        },
        "summary": "Get a specific video",
        "tags": [
          "Videos\\Essentials"
        ]
      },
      "patch": {
        "operationId": "edit_video",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.video+json": {
              "schema": {
                "properties": {
                  "content_rating": {
                    "description": "A list of values describing the content in this video. You can find the full list in the [`/contentratings`](https://developer.vimeo.com/api/endpoints/videos#GET/contentratings) endpoint.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "description": {
                    "description": "The new description of the video.",
                    "example": "A celebration of 10 years of Staff Picks.",
                    "type": "string"
                  },
                  "embed": {
                    "properties": {
                      "buttons": {
                        "properties": {
                          "embed": {
                            "description": "Show or hide the Embed button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "fullscreen": {
                            "description": "Show or hide the Fullscreen button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "hd": {
                            "description": "Show or hide the HD button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "like": {
                            "description": "Show or hide the Like button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "scaling": {
                            "description": "Show or hide the Scaling button (shown only in Fullscreen mode).",
                            "example": "true",
                            "type": "boolean"
                          },
                          "share": {
                            "description": "Show or hide the Share button.",
                            "example": "true",
                            "type": "boolean"
                          },
                          "watchlater": {
                            "description": "Show or hide the Watch Later button.",
                            "example": "true",
                            "type": "boolean"
                          }
                        },
                        "type": "object"
                      },
                      "color": {
                        "description": "The main color of the embed player.",
                        "example": "#1ab7ea",
                        "type": "string"
                      },
                      "logos": {
                        "properties": {
                          "custom": {
                            "properties": {
                              "active": {
                                "description": "Show or hide your custom logo.",
                                "example": "true",
                                "type": "boolean"
                              },
                              "link": {
                                "description": "The URL that loads when the user clicks your custom logo.",
                                "example": "https://example.com",
                                "type": "string"
                              },
                              "sticky": {
                                "description": "Whether always to show the custom logo or to hide it after time with the rest of the UI.",
                                "example": "true",
                                "type": "boolean"
                              }
                            },
                            "type": "object"
                          },
                          "vimeo": {
                            "description": "Show or hide the Vimeo logo.",
                            "example": "true",
                            "type": "boolean"
                          }
                        },
                        "type": "object"
                      },
                      "playbar": {
                        "description": "Show or hide the playbar.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "title": {
                        "properties": {
                          "name": {
                            "description": "Show or hide the video title, or enable the user to determine whether the video title appears.",
                            "enum": [
                              "hide",
                              "show",
                              "user"
                            ],
                            "type": "string"
                          },
                          "owner": {
                            "description": "Show or hide the owner information, or enable the user to determine whether the owner information appears.",
                            "enum": [
                              "hide",
                              "show",
                              "user"
                            ],
                            "type": "string"
                          },
                          "portrait": {
                            "description": "Show or hide the owner portrait, or enable the user to determine whether the owner portrait appears.",
                            "enum": [
                              "hide",
                              "show",
                              "user"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "volume": {
                        "description": "Show or hide the volume selector.",
                        "example": "true",
                        "type": "boolean"
                      }
                    },
                    "type": "object"
                  },
                  "license": {
                    "description": "The Creative Commons license.",
                    "enum": [
                      "by",
                      "by-nc",
                      "by-nc-nd",
                      "by-nc-sa",
                      "by-nd",
                      "by-sa",
                      "cc0"
                    ],
                    "type": "string"
                  },
                  "locale": {
                    "description": "The video's default language. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.",
                    "example": "en-US",
                    "type": "string"
                  },
                  "name": {
                    "description": "The new title for the video.",
                    "example": "Celebrating 10 Years of Staff Picks",
                    "type": "string"
                  },
                  "password": {
                    "description": "The password. When you set `privacy.view` to `password`, you must provide the password as an additional parameter.",
                    "example": "hunter1",
                    "type": "string"
                  },
                  "privacy": {
                    "properties": {
                      "add": {
                        "description": "Whether a user can add the video to an album, channel, or group.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "comments": {
                        "description": "The privacy level required to comment on the video.",
                        "enum": [
                          "anybody",
                          "contacts",
                          "nobody"
                        ],
                        "type": "string"
                      },
                      "download": {
                        "description": "Whether a user can download the video. Not available to users with a Basic membership.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "embed": {
                        "description": "The video's new embed settings. The `whitelist` value enables you to define all valid embed domains. See our [documentation](https://developer.vimeo.com/api/endpoints/videos#/{video_id}/privacy/domains) for details on adding and removing domains.",
                        "enum": [
                          "private",
                          "public",
                          "whitelist"
                        ],
                        "type": "string"
                      },
                      "view": {
                        "description": "The video's new privacy setting. When privacy is `users`, `application/json` is the only valid content type. Basic users can't set privacy to `unlisted`.",
                        "enum": [
                          "anybody",
                          "contacts",
                          "disable",
                          "nobody",
                          "password",
                          "unlisted",
                          "users"
                        ],
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "ratings": {
                    "properties": {
                      "mpaa": {
                        "properties": {
                          "reason": {
                            "description": "The reason for the video's MPAA rating.\n\nOption descriptions:\n * `at` - Adult themes\n * `bn` - Brief nudity\n * `n` - Nudity\n * `sl` - Strong language\n * `ss` - Sexual situations\n * `v` - Violence\n",
                            "enum": [
                              "at",
                              "bn",
                              "n",
                              "sl",
                              "ss",
                              "v"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      },
                      "tv": {
                        "properties": {
                          "reason": {
                            "description": "The reason for the video's TV rating.\n\nOption descriptions:\n * `d` - Suggestive dialogue\n * `fv` - Fantasy violence\n * `l` - Language\n * `ss` - Sexual situations\n * `v` - Violence\n",
                            "enum": [
                              "d",
                              "fv",
                              "l",
                              "ss",
                              "v"
                            ],
                            "type": "string"
                          }
                        },
                        "type": "object"
                      }
                    },
                    "type": "object"
                  },
                  "review_page": {
                    "properties": {
                      "active": {
                        "description": "Enable or disable video review.",
                        "example": "true",
                        "type": "boolean"
                      }
                    },
                    "type": "object"
                  },
                  "spatial": {
                    "properties": {
                      "director_timeline": {
                        "description": "The 360 director timeline.",
                        "items": {
                          "properties": {
                            "pitch": {
                              "description": "The timeline pitch. This value must be between -90 and 90.",
                              "example": 70,
                              "type": "number"
                            },
                            "roll": {
                              "description": "The timeline roll.",
                              "type": "number"
                            },
                            "time_code": {
                              "description": "The 360 director timeline time code.",
                              "example": 5,
                              "type": "number"
                            },
                            "yaw": {
                              "description": "The timeline yaw. This value must be between 0 and 360.",
                              "example": 125,
                              "type": "number"
                            }
                          },
                          "required": [
                            "pitch",
                            "time_code",
                            "yaw"
                          ],
                          "type": "object"
                        },
                        "type": "array"
                      },
                      "field_of_view": {
                        "description": "The 360 field of view: default 50, minimum 30, maximum 90.",
                        "example": 50,
                        "type": "number"
                      },
                      "projection": {
                        "description": "The 360 spatial projection.",
                        "enum": [
                          "cubical",
                          "cylindrical",
                          "dome",
                          "equirectangular",
                          "pyramid"
                        ],
                        "type": "string"
                      },
                      "stereo_format": {
                        "description": "The 360 spatial stereo format.",
                        "enum": [
                          "left-right",
                          "mono",
                          "top-bottom"
                        ],
                        "type": "string"
                      }
                    },
                    "type": "object"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/video"
                }
              }
            },
            "description": "The video was edited."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The authenticated user doesn't own the video.\n* The `privacy` field is `disable` and the authenticated user can't set extra embed options.\n* The `privacy` field is `contacts` and the authenticated user can't follow creators.\n* The authenticated user has an opted-out PRO account and `privacy.view` is `users`, `password`, `nobody`, or `public`."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a video",
        "tags": [
          "Videos\\Essentials"
        ]
      }
    },
    "/videos/{video_id}/available_channels": {
      "get": {
        "operationId": "get_available_video_channels",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/channel"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The channels were returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't add or remove this video from any channel."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.channel+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user can't moderate channels."
          }
        },
        "summary": "Get all the channels to which a user can add or remove a specific video",
        "tags": [
          "Channels\\Videos"
        ]
      }
    },
    "/videos/{video_id}/categories": {
      "get": {
        "operationId": "get_video_categories",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/category"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The categories were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video exists."
          }
        },
        "summary": "Get all the categories to which a video belongs",
        "tags": [
          "Categories\\Videos"
        ]
      },
      "put": {
        "description": "With this method, you can suggest up to two categories and one subcategory for a video. Vimeo makes the final determination about whether the video\nbelongs in these categories.",
        "operationId": "suggest_video_category",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.category+json": {
              "schema": {
                "properties": {
                  "category": {
                    "description": "The array of the names of the categories that you're suggesting.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "category"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/category"
                }
              }
            },
            "description": "The categories were suggested."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "You don't own this video."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.category+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video exists, or no such category exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Suggest categories for a video",
        "tags": [
          "Categories\\Videos"
        ]
      }
    },
    "/videos/{video_id}/comments": {
      "get": {
        "operationId": "get_comments",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/comment"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The comments were returned."
          }
        },
        "summary": "Get all the comments on a video",
        "tags": [
          "Videos\\Comments"
        ]
      },
      "post": {
        "operationId": "create_comment",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.comment+json": {
              "schema": {
                "properties": {
                  "text": {
                    "description": "The text of the comment.",
                    "example": "I love this!",
                    "type": "string"
                  }
                },
                "required": [
                  "text"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            },
            "description": "The comment was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2207: The comment text is missing."
          },
          "401": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 8003: The user credentials are invalid."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 3413: Comments are disabled for this video.\n* Error code 3411: The authenticated user is unverified.\n* Error code 3412: The authenticated user can't comment.\n* Error code 3301: The comment was flagged as spam."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a comment to a video",
        "tags": [
          "Videos\\Comments"
        ]
      }
    },
    "/videos/{video_id}/comments/{comment_id}": {
      "delete": {
        "operationId": "delete_comment",
        "parameters": [
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "comment_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The comment was deleted."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3415: The authenticated user didn't write this comment and can't delete it."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* No such video or comment exists.\n* Error code 5000: The deleted comment still exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a video comment",
        "tags": [
          "Videos\\Comments"
        ]
      },
      "get": {
        "operationId": "get_comment",
        "parameters": [
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "comment_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            },
            "description": "The comment was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video or comment exists."
          }
        },
        "summary": "Get a specific video comment",
        "tags": [
          "Videos\\Comments"
        ]
      },
      "patch": {
        "operationId": "edit_comment",
        "parameters": [
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "comment_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.comment+json": {
              "schema": {
                "properties": {
                  "text": {
                    "description": "The next text of the comment.",
                    "example": "I love this!",
                    "type": "string"
                  }
                },
                "required": [
                  "text"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            },
            "description": "The comment was edited."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2207: The comment text is missing."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 3411: The authenticated user is unverified.\n* Error code 3412: The authenticated user can't post comments.\n* Error code 3414: The authenticated user didn't write the comment and can't edit it.\n* Error code 3301: The supplied comment was flagged as spam."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a video comment",
        "tags": [
          "Videos\\Comments"
        ]
      }
    },
    "/videos/{video_id}/comments/{comment_id}/replies": {
      "get": {
        "operationId": "get_comment_replies",
        "parameters": [
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "comment_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/comment"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The replies were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video or comment exists."
          }
        },
        "summary": "Get all the replies to a video comment",
        "tags": [
          "Videos\\Comments"
        ]
      },
      "post": {
        "operationId": "create_comment_reply",
        "parameters": [
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "comment_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.comment+json": {
              "schema": {
                "properties": {
                  "text": {
                    "description": "The reply to the comment.",
                    "example": "I love this!",
                    "type": "string"
                  }
                },
                "required": [
                  "text"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/comment"
                }
              }
            },
            "description": "The reply was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 2207: The comment text is missing."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.comment+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 3413: Comments are disabled on this video.\n* Error code 3411: The authenticated user is unverified.\n* Error code 3412: The authenticated user can't comment.\n* Error code 3301: The comment was flagged as spam."
          }
        },
        "security": [
          {
            "oauth2": [
              "interact"
            ]
          }
        ],
        "summary": "Add a reply to a video comment",
        "tags": [
          "Videos\\Comments"
        ]
      }
    },
    "/videos/{video_id}/credits": {
      "get": {
        "operationId": "get_video_credits",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The search query to use to filter the results.",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "example": "Stop motion",
              "type": "string"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/credit"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users were returned."
          }
        },
        "summary": "Get all the credited users in a video",
        "tags": [
          "Videos\\Credits"
        ]
      },
      "post": {
        "operationId": "add_video_credit",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.credit+json": {
              "schema": {
                "properties": {
                  "email": {
                    "description": "The email address of the credited person.",
                    "example": "user@example.com",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the credited person.",
                    "example": "Sam Doe",
                    "type": "string"
                  },
                  "role": {
                    "description": "The role of the credited person.",
                    "example": "Producer",
                    "type": "string"
                  },
                  "user_uri": {
                    "description": "The URI of the Vimeo user who should be given credit in this video.",
                    "example": "/users/152184",
                    "type": "string"
                  }
                },
                "required": [
                  "email",
                  "name",
                  "role",
                  "user_uri"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/credit"
                }
              }
            },
            "description": "The credit was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The credit was added.\n* A parameter is invalid.\n* The authenticated user has an unverified email address.\n* There is a user block between the video owner and the person receiving credit."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user doesn't own the video."
          }
        },
        "summary": "Credit a user in a video",
        "tags": [
          "Videos\\Credits"
        ]
      }
    },
    "/videos/{video_id}/credits/{credit_id}": {
      "delete": {
        "operationId": "delete_video_credit",
        "parameters": [
          {
            "description": "The ID of the credit.",
            "in": "path",
            "name": "credit_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The credit was deleted."
          },
          "400": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The authenticated user is neither the creator of the credit nor the credited user."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Delete a credit for a user in a video",
        "tags": [
          "Videos\\Credits"
        ]
      },
      "get": {
        "operationId": "get_video_credit",
        "parameters": [
          {
            "description": "The ID of the credit.",
            "in": "path",
            "name": "credit_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/credit"
                }
              }
            },
            "description": "The credit was returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video or credit exists."
          }
        },
        "summary": "Get a specific credited user in a video",
        "tags": [
          "Videos\\Credits"
        ]
      },
      "patch": {
        "operationId": "edit_video_credit",
        "parameters": [
          {
            "description": "The ID of the credit.",
            "in": "path",
            "name": "credit_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.credit+json": {
              "schema": {
                "properties": {
                  "name": {
                    "description": "The name of the person being credited.",
                    "example": "Sam Doe",
                    "type": "string"
                  },
                  "role": {
                    "description": "The role of the person being credited.",
                    "example": "Producer",
                    "type": "string"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/credit"
                }
              }
            },
            "description": "The credit was edited."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "A parameter is invalid."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.credit+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video or credit exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a credit for a user in a video",
        "tags": [
          "Videos\\Credits"
        ]
      }
    },
    "/videos/{video_id}/likes": {
      "get": {
        "operationId": "get_video_likes",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The sort direction of the results.",
            "in": "query",
            "name": "direction",
            "required": false,
            "schema": {
              "enum": [
                "asc",
                "desc"
              ],
              "example": "asc",
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          },
          {
            "description": "The way to sort the results.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "alphabetical",
                "date"
              ],
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users were returned."
          }
        },
        "summary": "Get all the users who have liked a video",
        "tags": [
          "Likes\\Essentials"
        ]
      }
    },
    "/videos/{video_id}/pictures": {
      "get": {
        "operationId": "get_video_thumbnails",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/picture"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The thumbnails were returned."
          }
        },
        "summary": "Get all the thumbnails of a video",
        "tags": [
          "Videos\\Thumbnails"
        ]
      },
      "post": {
        "operationId": "create_video_thumbnail",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.picture+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether the image created by the `time` field should be the default thumbnail for the video.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "time": {
                    "description": "Creates an image of the video from the given time offset.",
                    "example": 300,
                    "type": "number"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The thumbnail was created."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a video thumbnail",
        "tags": [
          "Videos\\Thumbnails"
        ]
      }
    },
    "/videos/{video_id}/pictures/{picture_id}": {
      "delete": {
        "operationId": "delete_video_thumbnail",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "picture_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The thumbnail was deleted."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Delete a video thumbnail",
        "tags": [
          "Videos\\Thumbnails"
        ]
      },
      "get": {
        "operationId": "get_video_thumbnail",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "picture_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The thumbnail was returned."
          }
        },
        "summary": "Get a video thumbnail",
        "tags": [
          "Videos\\Thumbnails"
        ]
      },
      "patch": {
        "operationId": "edit_video_thumbnail",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "picture_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.picture+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether this thumbnail is the default.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The thumbnail was edited."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a video thumbnail",
        "tags": [
          "Videos\\Thumbnails"
        ]
      }
    },
    "/videos/{video_id}/presets/{preset_id}": {
      "delete": {
        "operationId": "delete_video_embed_preset",
        "parameters": [
          {
            "description": "The ID of the preset.",
            "in": "path",
            "name": "preset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The embed preset was unassigned."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video or embed preset exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove an embed preset from a video",
        "tags": [
          "Embed Presets\\Videos"
        ]
      },
      "get": {
        "operationId": "get_video_embed_preset",
        "parameters": [
          {
            "description": "The ID of the preset.",
            "in": "path",
            "name": "preset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The embed presets exists."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video or embed preset exists."
          }
        },
        "summary": "Check if an embed preset has been added to a video",
        "tags": [
          "Embed Presets\\Videos"
        ]
      },
      "put": {
        "operationId": "add_video_embed_preset",
        "parameters": [
          {
            "description": "The ID of the preset.",
            "in": "path",
            "name": "preset_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The embed preset was assigned."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add an embed preset to a video",
        "tags": [
          "Embed Presets\\Videos"
        ]
      }
    },
    "/videos/{video_id}/privacy/domains": {
      "get": {
        "operationId": "get_video_privacy_domains",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.domain+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/domain"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The domains were returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.domain+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "There are no domains on which the video can be embedded."
          }
        },
        "summary": "Get all the domains on which a video can be embedded",
        "tags": [
          "Videos\\Embed Privacy"
        ]
      }
    },
    "/videos/{video_id}/privacy/domains/{domain}": {
      "delete": {
        "operationId": "delete_video_privacy_domain",
        "parameters": [
          {
            "description": "The domain name.",
            "in": "path",
            "name": "domain",
            "required": true,
            "schema": {
              "example": "example.com",
              "type": "string"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video was disallowed from being embedded on the domain."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The video isn't set to a user-defined access list."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such domain exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Restrict a video from being embedded on a domain",
        "tags": [
          "Videos\\Embed Privacy"
        ]
      },
      "put": {
        "description": "If domain privacy is enabled for this video, this method permits the video to be embedded on the specified domain.",
        "operationId": "add_video_privacy_domain",
        "parameters": [
          {
            "description": "The domain name.",
            "in": "path",
            "name": "domain",
            "required": true,
            "schema": {
              "example": "example.com",
              "type": "string"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The video is now embeddable on the domain."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The video doesn't have a user-defined access list."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Permit a video to be embedded on a domain",
        "tags": [
          "Videos\\Embed Privacy"
        ]
      }
    },
    "/videos/{video_id}/privacy/users": {
      "get": {
        "operationId": "get_video_privacy_users",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users were returned."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No users can view the private video."
          }
        },
        "summary": "Get all the users who can view a user's private videos by default",
        "tags": [
          "Videos\\Viewing Privacy"
        ]
      },
      "put": {
        "description": "The body of this request should follow our\n[batch request format](https://developer.vimeo.com/api/common-formats#batch-requests). Each object must contain\na single `URI` field, and the value of this field must be the URI of the user who can view this video.",
        "operationId": "add_video_privacy_users",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/user"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The users can now view the private video."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Permit a list of users to view a private video",
        "tags": [
          "Videos\\Viewing Privacy"
        ]
      }
    },
    "/videos/{video_id}/privacy/users/{user_id}": {
      "delete": {
        "operationId": "delete_video_privacy_user",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The user was disallowed from viewing the private video."
          },
          "403": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The video isn't set to a user-defined access list."
          },
          "404": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such user exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Restrict a user from viewing a private video",
        "tags": [
          "Videos\\Viewing Privacy"
        ]
      },
      "put": {
        "operationId": "add_video_privacy_user",
        "parameters": [
          {
            "description": "The ID of the user.",
            "in": "path",
            "name": "user_id",
            "required": true,
            "schema": {
              "example": 152184,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            },
            "description": "The user can now view the private video."
          },
          "204": {
            "description": "The user can already view this private video."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.user+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The video doesn't have a user-defined access list."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Permit a specific user to view a private video",
        "tags": [
          "Videos\\Viewing Privacy"
        ]
      }
    },
    "/videos/{video_id}/tags": {
      "get": {
        "operationId": "get_video_tags",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/tag"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The tags were returned."
          }
        },
        "summary": "Get all the tags of a video",
        "tags": [
          "Videos\\Tags"
        ]
      },
      "put": {
        "operationId": "add_video_tags",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.tag+json": {
              "schema": {
                "properties": {
                  "name": {
                    "description": "The name of the tag to apply. See our documentation on [batch requests](https://developer.vimeo.com/api/common-formats#batch-requests) for more information.",
                    "example": "awesome",
                    "type": "string"
                  },
                  "page": {
                    "description": "The page number of the results to show.",
                    "example": 1,
                    "type": "number"
                  },
                  "per_page": {
                    "description": "The number of items to show on each page of results, up to a maximum of 100.",
                    "example": 10,
                    "type": "number"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/tag"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The tags that were added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The request body wasn't supplied.\n* A parameter is invalid.\n* The request body isn't a JSON-encoded list of tags."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The authenticated user can't add tags to a video.\n* The number of tags would exceed 20."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a list of tags to a video",
        "tags": [
          "Videos\\Tags"
        ]
      }
    },
    "/videos/{video_id}/tags/{word}": {
      "delete": {
        "operationId": "delete_video_tag",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The tag word.",
            "in": "path",
            "name": "word",
            "required": true,
            "schema": {
              "example": "awesome",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The tag was deleted."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* A parameter is invalid.\n* The tag is invalid."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Remove a tag from a video",
        "tags": [
          "Videos\\Tags"
        ]
      },
      "get": {
        "operationId": "check_video_for_tag",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The tag word.",
            "in": "path",
            "name": "word",
            "required": true,
            "schema": {
              "example": "awesome",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/tag"
                }
              }
            },
            "description": "The tag has been added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* A parameter is invalid.\n* The tag is invalid."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such tag exists within the video."
          }
        },
        "summary": "Check if a tag has been added to a video",
        "tags": [
          "Videos\\Tags"
        ]
      },
      "put": {
        "operationId": "add_video_tag",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The tag word.",
            "in": "path",
            "name": "word",
            "required": true,
            "schema": {
              "example": "awesome",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/tag"
                }
              }
            },
            "description": "The tag was added."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The tag is invalid.\n* An unsupported parameter was supplied."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.tag+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The number of tags on the video would exceed 20."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Add a specific tag to a video",
        "tags": [
          "Videos\\Tags"
        ]
      }
    },
    "/videos/{video_id}/texttracks": {
      "get": {
        "operationId": "get_text_tracks",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/text-track"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The text tracks were returned."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video exists."
          }
        },
        "summary": "Get all the text tracks of a video",
        "tags": [
          "Videos\\Text Tracks"
        ]
      },
      "post": {
        "description": "For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).",
        "operationId": "create_text_track",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.video.texttrack+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Active text tracks appear in the player and are visible to other users. Only one text track per language can be active.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "language": {
                    "description": "The language of the text track. For a complete list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.",
                    "example": "en-US",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the text track.",
                    "example": "Commentary",
                    "type": "string"
                  },
                  "type": {
                    "description": "The type of the text track.",
                    "enum": [
                      "captions",
                      "chapters",
                      "descriptions",
                      "metadata",
                      "subtitles"
                    ],
                    "type": "string"
                  }
                },
                "required": [
                  "language",
                  "name",
                  "type"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/text-track"
                }
              }
            },
            "description": "The text track was added."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The authenticated user can't edit the text track.\n* Error code 2204: The request contains errors."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a text track to a video",
        "tags": [
          "Videos\\Text Tracks"
        ]
      }
    },
    "/videos/{video_id}/texttracks/{texttrack_id}": {
      "delete": {
        "operationId": "delete_text_track",
        "parameters": [
          {
            "description": "The ID of the text track.",
            "in": "path",
            "name": "texttrack_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "The text track was deleted."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 3430: You don't have permission to access this text track.\n* Error code 3431: This text track is disabled."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* No such video or text track exists.\n* The authenticated user can't delete the text track.\n* Error code 5014: The text track that you specified doesn't exist.\n* Error code 5015: The text track that you specified belongs to a different video."
          }
        },
        "security": [
          {
            "oauth2": [
              "delete"
            ]
          }
        ],
        "summary": "Delete a text track",
        "tags": [
          "Videos\\Text Tracks"
        ]
      },
      "get": {
        "operationId": "get_text_track",
        "parameters": [
          {
            "description": "The ID of the text track.",
            "in": "path",
            "name": "texttrack_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/text-track"
                }
              }
            },
            "description": "The text track was returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 3430: You don't have permission to access this text track.\n* Error code 3431: This text track is disabled."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* No such video or text track exists.\n* Error code 5014: The text track that you specified doesn't exist.\n* Error code 5015: The text track that you specified belongs to a different video."
          }
        },
        "summary": "Get a specific text track",
        "tags": [
          "Videos\\Text Tracks"
        ]
      },
      "patch": {
        "operationId": "edit_text_track",
        "parameters": [
          {
            "description": "The ID of the text track.",
            "in": "path",
            "name": "texttrack_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.video.texttrack+json": {
              "schema": {
                "properties": {
                  "active": {
                    "description": "Whether the text track is active, meaning that it appears in the player. Only one text track per language, and type, can be active.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "language": {
                    "description": "The language of the text track. For a full list of valid languages, use the [/languages?filter=texttracks](https://developer.vimeo.com/api/endpoints/videos#GET/languages) endpoint.",
                    "example": "en-US",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name of the text track.",
                    "example": "Commentary",
                    "type": "string"
                  },
                  "type": {
                    "description": "The text track type.",
                    "enum": [
                      "captions",
                      "chapters",
                      "descriptions",
                      "metadata",
                      "subtitles"
                    ],
                    "type": "string"
                  }
                },
                "type": "object"
              }
            }
          },
          "required": false
        },
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/text-track"
                }
              }
            },
            "description": "The text track was edited."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* The authenticated user can't edit the text track.\n* Error code 2204: There are errors in the request.\n* Error code 3430: You don't have permission to access this text track.\n* Error code 3431: This text track is disabled."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video.texttrack+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "* No such video or text track exists.\n* Error code 5014: The text track that you specified doesn't exist.\n* Error code 5015: The text track that you specified belongs to a different video."
          }
        },
        "security": [
          {
            "oauth2": [
              "edit"
            ]
          }
        ],
        "summary": "Edit a text track",
        "tags": [
          "Videos\\Text Tracks"
        ]
      }
    },
    "/videos/{video_id}/timelinethumbnails": {
      "post": {
        "operationId": "create_video_custom_logo",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "Standard request."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "If the user is attempting to upload pictures for another user's videos."
          },
          "404": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "No such video exists."
          }
        },
        "security": [
          {
            "oauth2": [
              "upload"
            ]
          }
        ],
        "summary": "Add a new custom logo to a video",
        "tags": [
          "Embed Presets\\Videos"
        ]
      }
    },
    "/videos/{video_id}/timelinethumbnails/{thumbnail_id}": {
      "get": {
        "operationId": "get_video_custom_logo",
        "parameters": [
          {
            "description": "The ID of the picture.",
            "in": "path",
            "name": "thumbnail_id",
            "required": true,
            "schema": {
              "example": 12345,
              "type": "number"
            }
          },
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/picture"
                }
              }
            },
            "description": "The custom logo was returned."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.picture+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "If the user isn't permitted to view this custom logo."
          }
        },
        "summary": "Get a custom video logo",
        "tags": [
          "Embed Presets\\Videos"
        ]
      }
    },
    "/videos/{video_id}/versions": {
      "post": {
        "operationId": "create_video_version",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/vnd.vimeo.video.version+json": {
              "schema": {
                "properties": {
                  "file_name": {
                    "description": "The name of the version",
                    "example": "untitled.mp4",
                    "type": "string"
                  },
                  "upload": {
                    "properties": {
                      "approach": {
                        "description": "Upload approach",
                        "enum": [
                          "post",
                          "pull",
                          "streaming",
                          "tus"
                        ],
                        "type": "string"
                      },
                      "link": {
                        "description": "If your upload approach is pull, Vimeo will download the video hosted at this public URL. This URL must be valid for at least 24 hours.",
                        "example": "https://example.com",
                        "type": "string"
                      },
                      "redirect_url": {
                        "description": "The app's redirect URL. Use this parameter when `approach` is `post`.",
                        "example": "https://example.com",
                        "type": "string"
                      },
                      "size": {
                        "description": "Upload size",
                        "example": "13623861",
                        "type": "string"
                      }
                    },
                    "required": [
                      "approach"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "file_name",
                  "upload"
                ],
                "type": "object"
              }
            }
          },
          "required": true
        },
        "responses": {
          "201": {
            "content": {
              "application/vnd.vimeo.video.version+json": {
                "schema": {
                  "$ref": "#/components/schemas/video-versions"
                }
              }
            },
            "description": "Standard request."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.video.version+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 2204: If the request input contains invalid upload data.\n* Error code 2204: If the request input contains invalid versions data."
          },
          "403": {
            "content": {
              "application/vnd.vimeo.video.version+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "Error code 3427: If a user isn't permitted to edit the video"
          },
          "404": {
            "content": {
              "application/vnd.vimeo.video.version+json": {
                "schema": {
                  "$ref": "#/components/schemas/error"
                }
              }
            },
            "description": "* Error code 5011: If an upload associated with the version isn't found.\n* Error code 5012: If a video associated with the upload isn't found.\n* Error code 5013: If the version of the API used is less than 3.4 and isn't of approach `tus`, the endpoint isn't available."
          }
        },
        "summary": "Add a version to a video",
        "tags": [
          "Videos\\Versions"
        ]
      }
    },
    "/videos/{video_id}/videos": {
      "get": {
        "operationId": "get_related_videos",
        "parameters": [
          {
            "description": "The ID of the video.",
            "in": "path",
            "name": "video_id",
            "required": true,
            "schema": {
              "example": 258684937,
              "type": "number"
            }
          },
          {
            "description": "The attribute by which to filter the results.",
            "in": "query",
            "name": "filter",
            "required": false,
            "schema": {
              "enum": [
                "related"
              ],
              "type": "string"
            }
          },
          {
            "description": "The page number of the results to show.",
            "in": "query",
            "name": "page",
            "required": false,
            "schema": {
              "example": 1,
              "type": "number"
            }
          },
          {
            "description": "The number of items to show on each page of results, up to a maximum of 100.",
            "in": "query",
            "name": "per_page",
            "required": false,
            "schema": {
              "example": 10,
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/video"
                  },
                  "type": "array"
                }
              }
            },
            "description": "The related videos were returned."
          },
          "400": {
            "content": {
              "application/vnd.vimeo.video+json": {
                "schema": {
                  "$ref": "#/components/schemas/legacy-error"
                }
              }
            },
            "description": "The value of `filter` isn' `related`."
          }
        },
        "summary": "Get all the related videos of a video",
        "tags": [
          "Videos\\Recommendations"
        ]
      }
    }
  },
  "components": {
    "schemas": {
      "activity-3-1": {
        "properties": {
          "category": {
            "allOf": [
              {
                "$ref": "#/components/schemas/category"
              }
            ],
            "description": "The category that this event occurred for. This will be preset for only \"category\" activity types."
          },
          "channel": {
            "allOf": [
              {
                "$ref": "#/components/schemas/channel"
              }
            ],
            "description": "The channel that this event occurred for. This will be present for only \"channel\" activity types."
          },
          "clip": {
            "allOf": [
              {
                "$ref": "#/components/schemas/video"
              }
            ],
            "description": "Video associated with ths activity."
          },
          "group": {
            "allOf": [
              {
                "$ref": "#/components/schemas/group"
              }
            ],
            "description": "The group that this event occurred for. This will be present for only \"group\" activity types."
          },
          "metadata": {
            "description": "The activity's metadata.",
            "properties": {
              "connections": {
                "description": "A list of resource URIs related to the activity.",
                "properties": {
                  "related": {
                    "description": "Related content for this activity.",
                    "nullable": true,
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/activities?offset=20",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "related"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "tag": {
            "allOf": [
              {
                "$ref": "#/components/schemas/tag"
              }
            ],
            "description": "The tag that this event occurred for. This will be present for only \"tag\" activity types."
          },
          "time": {
            "description": "Time that the event occurred.",
            "example": "2017-05-17T17:46:09+00:00",
            "type": "string"
          },
          "type": {
            "description": "Activity type",
            "enum": [
              "appearance",
              "category",
              "channel",
              "facebook_feed",
              "group",
              "like",
              "ondemand",
              "share",
              "tag",
              "twitter_timeline",
              "upload"
            ],
            "example": "appearance",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The user that this event occurred for. This will be present for \"like\", \"appearance\", and \"share\" activity types."
          }
        },
        "required": [
          "clip",
          "metadata",
          "time",
          "type"
        ],
        "title": "Activity 3.1",
        "type": "object"
      },
      "album": {
        "properties": {
          "allow_continuous_play": {
            "description": "Whether an album should allow continuous play.",
            "example": "true",
            "type": "boolean"
          },
          "allow_downloads": {
            "description": "Whether an album should allow downloads.",
            "example": "true",
            "type": "boolean"
          },
          "allow_share": {
            "description": "Whether an album should allow sharing.",
            "example": "true",
            "type": "boolean"
          },
          "brand_color": {
            "description": "Hexadecimal color code for the decorative color. For example, album videos use this color for player buttons.",
            "example": "ff66ee",
            "nullable": true,
            "type": "string"
          },
          "created_time": {
            "description": "The time in ISO 8601 format that the album was created.",
            "example": "2015-12-17T21:32:44+00:00",
            "type": "string"
          },
          "custom_logo": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The custom logo for this album.",
            "nullable": true
          },
          "description": {
            "description": "A brief description of the album's content.",
            "example": "Vimeo holiday videos!",
            "nullable": true,
            "type": "string"
          },
          "domain": {
            "description": "The custom domain a user has selected for their album.",
            "example": "mycustomdomain.com",
            "nullable": true,
            "type": "string"
          },
          "duration": {
            "description": "The total duration in seconds of all the videos in the album.",
            "example": 1163,
            "type": "number"
          },
          "embed": {
            "description": "Embed data for the album.",
            "properties": {
              "html": {
                "description": "The responsive HTML code to embed the playlist on a website. This is present only when `privacy.view` isn't password and when the album has embeddable videos.",
                "nullable": true,
                "type": "string"
              }
            },
            "required": [
              "html"
            ],
            "type": "object"
          },
          "embed_brand_color": {
            "description": "Whether to show the album's custom brand color in the player of the album's embedded playlist.",
            "example": "true",
            "nullable": true,
            "type": "boolean"
          },
          "embed_custom_logo": {
            "description": "Whether to show the album's custom logo in the player of the album's embedded playlist.",
            "example": "true",
            "nullable": true,
            "type": "boolean"
          },
          "hide_nav": {
            "description": "Whether to hide the Vimeo navigation when viewing the album.",
            "example": "true",
            "type": "boolean"
          },
          "hide_vimeo_logo": {
            "description": "Whether to hide the Vimeo logo in the player of the album's embedded playlist.",
            "example": "true",
            "nullable": true,
            "type": "boolean"
          },
          "layout": {
            "description": "The album's layout preference",
            "enum": [
              "grid",
              "player"
            ],
            "example": "grid",
            "type": "string"
          },
          "link": {
            "description": "The URL to access the album.",
            "example": "https://vimeo.com/album/Vimeo Holiday Videos!",
            "type": "string"
          },
          "metadata": {
            "description": "Metadata about the album.",
            "properties": {
              "connections": {
                "description": "A collection of information that is connected to this resource.",
                "properties": {
                  "videos": {
                    "description": "Information about the videos that belong to this album.",
                    "properties": {
                      "options": {
                        "description": "An array of the HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 6,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/albums/3706071/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "videos"
                ],
                "type": "object"
              },
              "interactions": {
                "description": "A list of resource URIs related to the album.",
                "nullable": true,
                "properties": {
                  "add_custom_thumbnails": {
                    "description": "An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/users/123456/albums/654321/custom_thumbnails",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "add_logos": {
                    "description": "An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/users/123456/albums/654321/logos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "add_videos": {
                    "description": "An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods allowed on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/users/123456/albums/654321/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "add_custom_thumbnails",
                  "add_logos",
                  "add_videos"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections",
              "interactions"
            ],
            "type": "object"
          },
          "modified_time": {
            "description": "The time in ISO 8601 format when the album was last modified.",
            "example": "2018-02-06T21:24:17+00:00",
            "type": "string"
          },
          "name": {
            "description": "The album's display name.",
            "example": "Vimeo Holiday Videos!",
            "type": "string"
          },
          "pictures": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The active image for the album; defaults to the thumbnail of the last video added to the album."
          },
          "privacy": {
            "description": "The privacy settings of the album.",
            "properties": {
              "password": {
                "description": "The privacy-enabled password to see this album. Present only when `privacy.view` is `password`.",
                "example": "hunter1",
                "type": "string"
              },
              "view": {
                "description": "Who can view the album:\n\nOption descriptions:\n * `anybody` - Anyone can view the album.\n * `embed_only` - Only owner can see album, can be embedded off-site\n * `password` - Only those with the password can view the album.\n",
                "enum": [
                  "anybody",
                  "embed_only",
                  "password"
                ],
                "example": "anybody",
                "type": "string"
              }
            },
            "required": [
              "view"
            ],
            "type": "object"
          },
          "resource_key": {
            "description": "The album resource key.",
            "example": "e5595241643259c658ed6c85ca82985a6341edc7",
            "type": "string"
          },
          "review_mode": {
            "description": "Whether album videos should use the review mode URL.",
            "example": "true",
            "type": "boolean"
          },
          "sort": {
            "description": "Sort type of the album.",
            "enum": [
              "added_first",
              "added_last",
              "alphabetical",
              "arranged",
              "comments",
              "likes",
              "newest",
              "oldest",
              "plays"
            ],
            "example": "added_first",
            "type": "string"
          },
          "theme": {
            "description": "The album's color theme preference",
            "enum": [
              "dark",
              "standard"
            ],
            "example": "dark",
            "type": "string"
          },
          "uri": {
            "description": "The album's URI.",
            "example": "/albums/3706071",
            "type": "string"
          },
          "url": {
            "description": "The custom Vimeo URL a user has selected for their album.",
            "example": "my-custom-url",
            "nullable": true,
            "type": "string"
          },
          "use_custom_domain": {
            "description": "Whether the user has opted in to use a custom domain for their album.",
            "example": "false",
            "type": "boolean"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The owner of the album."
          },
          "web_brand_color": {
            "description": "Whether an album should show the brand color in the web layout.",
            "example": "true",
            "type": "boolean"
          },
          "web_custom_logo": {
            "description": "Whether an album's custom logo should be shown in the web layout.",
            "example": "true",
            "type": "boolean"
          }
        },
        "required": [
          "allow_continuous_play",
          "allow_downloads",
          "allow_share",
          "brand_color",
          "created_time",
          "custom_logo",
          "description",
          "domain",
          "duration",
          "embed",
          "embed_brand_color",
          "embed_custom_logo",
          "hide_nav",
          "hide_vimeo_logo",
          "layout",
          "link",
          "metadata",
          "modified_time",
          "name",
          "pictures",
          "privacy",
          "resource_key",
          "review_mode",
          "sort",
          "theme",
          "uri",
          "url",
          "use_custom_domain",
          "user",
          "web_brand_color",
          "web_custom_logo"
        ],
        "title": "Album",
        "type": "object"
      },
      "api-app": {
        "properties": {
          "name": {
            "description": "The name of the API app.",
            "example": "Vimeo Android",
            "type": "string"
          },
          "uri": {
            "description": "The canonical URI of the API app.",
            "example": "/apps/12345",
            "type": "string"
          }
        },
        "required": [
          "name",
          "uri"
        ],
        "title": "API App",
        "type": "object"
      },
      "auth": {
        "properties": {
          "access_token": {
            "description": "The access token string.",
            "example": "01019a4a62aec63db077317ab7bb429db75652401e",
            "type": "string"
          },
          "app": {
            "allOf": [
              {
                "$ref": "#/components/schemas/api-app"
              }
            ],
            "description": "The API application associated with the token."
          },
          "expires_on": {
            "description": "The date and time that the token expires.",
            "example": "1495048954",
            "type": "string"
          },
          "refresh_token": {
            "description": "The refresh token string.",
            "example": "3d3bc8a9cb7debfd01b270e419b2d265983362f9",
            "type": "string"
          },
          "scope": {
            "description": "The scope or scopes that the token supports.",
            "example": "private create edit upload public",
            "type": "string"
          },
          "token_type": {
            "description": "The token type:\n\nOption descriptions:\n * `bearer` - The token is of the `bearer` type.\n",
            "enum": [
              "bearer"
            ],
            "example": "bearer",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The user associated with the token."
          }
        },
        "required": [
          "access_token",
          "app",
          "scope",
          "token_type"
        ],
        "title": "Auth",
        "type": "object"
      },
      "auth-error": {
        "properties": {
          "error": {
            "description": "The name of the error.",
            "example": "server_error",
            "type": "string"
          },
          "error_description": {
            "description": "The description of the error.",
            "example": "An error has occurred on Vimeo's servers. Please try again.",
            "type": "string"
          }
        },
        "required": [
          "error",
          "error_description"
        ],
        "title": "Auth Error",
        "type": "object"
      },
      "category": {
        "properties": {
          "icon": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The active icon for the category."
          },
          "last_video_featured_time": {
            "description": "The last time, in ISO 8601 format, that a video was featured.",
            "example": "2017-05-17T17:46:09+00:00",
            "type": "string"
          },
          "link": {
            "description": "The URL to access the category in a browser.",
            "example": "https://vimeo.com/categories/animation",
            "type": "string"
          },
          "metadata": {
            "description": "Metadata about the category.",
            "properties": {
              "connections": {
                "description": "A collection of information that is connected to this resource.",
                "properties": {
                  "channels": {
                    "description": "Information about the channels related to this category.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of channels on this connection.",
                        "example": 90,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/categories/animation/channels",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "groups": {
                    "description": "Information about the groups related to this category.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of groups on this connection.",
                        "example": 15,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/categories/animation/groups",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "users": {
                    "description": "Information about the users related to this category.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of users on this connection.",
                        "example": 140,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/categories/animation/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "videos": {
                    "description": "Information about the videos related to this category.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 960,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/categories/animation/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "channels",
                  "groups",
                  "users",
                  "videos"
                ],
                "type": "object"
              },
              "interactions": {
                "description": "The permissible actions related to the category.",
                "properties": {
                  "follow": {
                    "description": "An action indicating if the authenticated user has followed this category.",
                    "properties": {
                      "added": {
                        "description": "Whether the authenticated user has followed this category.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "added_time": {
                        "description": "The time in ISO 8601 format that the user followed this category, or the null value if the user hasn't followed this category.",
                        "example": "2017-05-17T17:46:09+00:00",
                        "nullable": true,
                        "type": "string"
                      },
                      "uri": {
                        "description": "The URI for following or unfollowing this category: PUT to this URI to follow the category, or DELETE to this URI to unfollow the category.",
                        "example": "/users/152184/categories/animation",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "added_time",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "follow"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections",
              "interactions"
            ],
            "type": "object"
          },
          "name": {
            "description": "The display name that identifies the category.",
            "example": "Animation",
            "type": "string"
          },
          "parent": {
            "description": "The container of this category's parent category, if the current category is a subcategory.",
            "nullable": true,
            "properties": {
              "link": {
                "description": "The URL to access the parent category in a browser.",
                "example": "https://vimeo.com/categories/animation",
                "type": "string"
              },
              "name": {
                "description": "The display name that identifies the parent category.",
                "example": "Animation",
                "type": "string"
              },
              "uri": {
                "description": "The unique identifier to access the parent of this category resource.",
                "example": "/categories/animation",
                "type": "string"
              }
            },
            "required": [
              "link",
              "name",
              "uri"
            ],
            "type": "object"
          },
          "pictures": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The active picture for this category; defaults to vertical color bars."
          },
          "resource_key": {
            "description": "The resource key of the category.",
            "example": "e5595241643259c658ed6c85ca82985a6341edc7",
            "type": "string"
          },
          "subcategories": {
            "description": "All the subcategories that belong to this category, if the current category is a top-level parent.",
            "items": {
              "properties": {
                "link": {
                  "description": "The URL to access the subcategory in a browser.",
                  "example": "https://vimeo.com/categories/animation/2d/videos",
                  "type": "string"
                },
                "name": {
                  "description": "The display name that identifies the subcategory.",
                  "example": "2D",
                  "type": "string"
                },
                "uri": {
                  "description": "The unique identifier to access the subcategory resource.",
                  "example": "/categories/animation/subcategories/2d",
                  "type": "string"
                }
              },
              "required": [
                "link",
                "name",
                "uri"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "top_level": {
            "description": "Whether the category isn't a subcategory of another category.",
            "example": "true",
            "type": "boolean"
          },
          "uri": {
            "description": "The unique identifier to access the category resource.",
            "example": "/categories/animation",
            "type": "string"
          }
        },
        "required": [
          "last_video_featured_time",
          "link",
          "metadata",
          "name",
          "parent",
          "pictures",
          "resource_key",
          "top_level",
          "uri"
        ],
        "title": "Category",
        "type": "object"
      },
      "channel": {
        "properties": {
          "categories": {
            "description": "The categories to which this channel belongs as specified by the channel moderators.",
            "items": {
              "$ref": "#/components/schemas/category"
            },
            "type": "array"
          },
          "created_time": {
            "description": "The time in ISO 8601 format when the channel was created.",
            "example": "2007-10-23T17:00:43+00:00",
            "type": "string"
          },
          "description": {
            "description": "A brief explanation of the channel's content.",
            "example": "We really love videos, and these are the videos we really, really love.",
            "nullable": true,
            "type": "string"
          },
          "header": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The banner that appears by default at the top of the channel page."
          },
          "link": {
            "description": "The URL to access the channel in a browser.",
            "example": "https://vimeo.com/channels/staffpicks",
            "type": "string"
          },
          "metadata": {
            "description": "Metadata about the channel.",
            "properties": {
              "connections": {
                "description": "A collection of information that is connected to this resource.",
                "properties": {
                  "privacy_users": {
                    "description": "Information provided to channel moderators about which users they have specifically permitted to access a private channel. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of users on this connection. This data requires a bearer token with the `private` scope.",
                        "example": 36,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/channels/927/privacy/users",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "users": {
                    "description": "Information about the users following or moderating this channel.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of users on this connection.",
                        "example": 794634,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/channels/927/users",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "videos": {
                    "description": "Information about the videos that belong to this channel.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 12448,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/channels/927/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "privacy_users",
                  "users",
                  "videos"
                ],
                "type": "object"
              },
              "interactions": {
                "description": "A list of resource URIs related to the channel.",
                "nullable": true,
                "properties": {
                  "add_moderators": {
                    "description": "An action indicating that the authenticated user is the owner of the channel and may therefore add other users as channel moderators. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/channels/1234/moderators",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "add_to": {
                    "description": "When a channel appears in the context of adding or removing a video from it (`/videos/{video_id}/available_channels`), include information about adding or removing the video. This data requires a bearer token with the `private` scope.",
                    "nullable": true,
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/channels/1234/videos/5678",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "follow": {
                    "description": "An action indicating if the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "added": {
                        "description": "Whether the authenticated user has followed this channel. This data requires a bearer token with the `private` scope.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "added_time": {
                        "description": "The time in ISO 8601 format that the user followed this channel, or the null value if the user hasn't followed the channel. This data requires a bearer token with the `private` scope.",
                        "example": "2017-05-22T17:50:11+00:00",
                        "nullable": true,
                        "type": "string"
                      },
                      "type": {
                        "description": "Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.\n\nOption descriptions:\n * `moderator` - The authenticated user is a moderator.\n * `subscriber` - The authenticated user is a subscriber.\n",
                        "enum": [
                          "moderator",
                          "subscriber"
                        ],
                        "example": "moderator",
                        "nullable": true,
                        "type": "string"
                      },
                      "uri": {
                        "description": "The URI for following or unfollowing this channel. PUT to this URI to follow the channel, or DELETE to this URI to unfollow the channel. This data requires a bearer token with the `private` scope.",
                        "example": "/users/1234/channels/927",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "added_time",
                      "type",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "moderate_videos": {
                    "description": "An action indicating that the authenticated user is a moderator of the channel and may therefore add or remove videos from the channel. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods allowed on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/channels/1234/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "add_moderators",
                  "add_to",
                  "follow",
                  "moderate_videos"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections",
              "interactions"
            ],
            "type": "object"
          },
          "modified_time": {
            "description": "The time in ISO 8601 format when the album was last modified.",
            "example": "2018-03-21T22:52:29+00:00",
            "type": "string"
          },
          "name": {
            "description": "The display name that identifies the channel.",
            "example": "Vimeo Staff Picks",
            "type": "string"
          },
          "pictures": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The active image for the channel; defaults to the thumbnail of the last video added to the channel."
          },
          "privacy": {
            "description": "The privacy settings of the channel.",
            "properties": {
              "view": {
                "description": "Who can view the channel:\n\nOption descriptions:\n * `anybody` - Anyone can view the channel.\n * `moderators` - Only moderators can view the channel.\n * `users` - Only registered users can view the channel.\n",
                "enum": [
                  "anybody",
                  "moderators",
                  "users"
                ],
                "example": "anybody",
                "type": "string"
              }
            },
            "required": [
              "view"
            ],
            "type": "object"
          },
          "resource_key": {
            "description": "The channel resource key.",
            "example": "e5595241643259c658ed6c85ca82985a6341edc7",
            "type": "string"
          },
          "tags": {
            "description": "An array of all tags assigned to this channel.",
            "items": {
              "$ref": "#/components/schemas/tag"
            },
            "type": "array"
          },
          "uri": {
            "description": "The unique identifier to access the channel resource.",
            "example": "/channels/927",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The Vimeo user who owns the channel."
          }
        },
        "required": [
          "categories",
          "created_time",
          "description",
          "header",
          "link",
          "metadata",
          "modified_time",
          "name",
          "pictures",
          "privacy",
          "resource_key",
          "tags",
          "uri",
          "user"
        ],
        "title": "Channel",
        "type": "object"
      },
      "comment": {
        "properties": {
          "created_on": {
            "description": "The time in ISO 8601 format when the comment was posted.",
            "example": "2018-03-05T21:04:47+00:00",
            "type": "string"
          },
          "metadata": {
            "properties": {
              "connections": {
                "properties": {
                  "replies": {
                    "description": "Information about this comment's replies.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of replies on this connection.",
                        "example": 42,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/comments/12345/replies",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "replies"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "resource_key": {
            "description": "The resource key string for the comment.",
            "example": "bac1033deba2310ebba2caec33c23e4beea67aba",
            "type": "string"
          },
          "text": {
            "description": "The content of the comment.",
            "example": "I love this!",
            "type": "string"
          },
          "type": {
            "description": "The Vimeo content to which the comment relates:\n\nOption descriptions:\n * `video` - The comment is about a video.\n",
            "enum": [
              "video"
            ],
            "example": "video",
            "type": "string"
          },
          "uri": {
            "description": "The unique identifier to access the comment resource.",
            "example": "/videos/258684937/comments/12345",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The user who posted the comment.",
            "nullable": true
          }
        },
        "required": [
          "created_on",
          "metadata",
          "resource_key",
          "text",
          "type",
          "uri",
          "user"
        ],
        "title": "Comment",
        "type": "object"
      },
      "content-rating": {
        "properties": {
          "code": {
            "description": "The code that uniquely identifies this content rating:\n\nOption descriptions:\n * `drugs` - Drug or alcohol use.\n * `language` - Profanity or sexually suggestive content.\n * `nudity` - Nudity.\n * `safe` - Suitable for all audiences.\n * `unrated` - No rating.\n * `violence` - Violent or graphic content.\n",
            "enum": [
              "drugs",
              "language",
              "nudity",
              "safe",
              "unrated",
              "violence"
            ],
            "example": "violence",
            "type": "string"
          },
          "name": {
            "description": "The description of this content rating.",
            "example": "Violence",
            "type": "string"
          },
          "uri": {
            "description": "The canonical relative URI of the content rating.",
            "example": "/contentrating/violence",
            "nullable": true,
            "type": "string"
          }
        },
        "required": [
          "code",
          "name",
          "uri"
        ],
        "title": "Content Rating",
        "type": "object"
      },
      "creative-commons": {
        "properties": {
          "code": {
            "description": "The code that uniquely identifies this Creative Commons license:\n\nOption descriptions:\n * `by` - Attribution\n * `by-nc` - Attribution Non-Commercial\n * `by-nc-nd` - Attribution Non-Commercial No Derivatives\n * `by-nc-sa` - Attribution Non-Commercial Share Alike\n * `by-nd` - Attribution No Derivatives\n * `by-sa` - Attribution Share Alike\n * `cc0` - Public Domain Dedication\n",
            "enum": [
              "by",
              "by-nc",
              "by-nc-nd",
              "by-nc-sa",
              "by-nd",
              "by-sa",
              "cc0"
            ],
            "example": "by-sa",
            "type": "string"
          },
          "name": {
            "description": "The description of this Creative Commons license.",
            "example": "Attribution Share Alike",
            "type": "string"
          },
          "uri": {
            "description": "The canonical relative URI of the Creative Commons license.",
            "example": "/creativecommons/by-sa",
            "nullable": true,
            "type": "string"
          }
        },
        "required": [
          "code",
          "name",
          "uri"
        ],
        "title": "Creative Commons",
        "type": "object"
      },
      "credit": {
        "properties": {
          "name": {
            "description": "The name of the person credited.",
            "example": "Sam Doe",
            "type": "string"
          },
          "role": {
            "description": "The character that this person portrayed, or the job that this person performed.",
            "example": "Themselves",
            "type": "string"
          },
          "uri": {
            "description": "The unique identifier to access the credits resource.",
            "example": "/videos/258684937/credits/1234",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The Vimeo user associated with this credit."
          },
          "video": {
            "allOf": [
              {
                "$ref": "#/components/schemas/video"
              }
            ],
            "description": "The video associated with this credit."
          }
        },
        "required": [
          "name",
          "role",
          "uri"
        ],
        "title": "Credit",
        "type": "object"
      },
      "domain": {
        "properties": {
          "allow_hd": {
            "description": "Whether to permit HD embeds on this domain.",
            "example": "true",
            "type": "boolean"
          },
          "domain": {
            "description": "The domain name.",
            "example": "example.com",
            "type": "string"
          },
          "uri": {
            "description": "The URI of the domain.",
            "example": "/videos/258684937/privacy/domains/example.com",
            "type": "string"
          }
        },
        "required": [
          "allow_hd",
          "domain",
          "uri"
        ],
        "title": "Domain",
        "type": "object"
      },
      "embed-settings": {
        "properties": {
          "buttons": {
            "description": "A collection of information about the buttons that appear on the interface of the embeddable player.",
            "properties": {
              "embed": {
                "description": "Whether the Embed button appears in the embeddable player for this video.",
                "example": "true",
                "type": "boolean"
              },
              "fullscreen": {
                "description": "Whether the Fullscreen button appears in the embeddable player for this video.",
                "example": "true",
                "type": "boolean"
              },
              "hd": {
                "description": "Whether the HD button appears in the embeddable player for this video.",
                "example": "true",
                "type": "boolean"
              },
              "like": {
                "description": "Whether the Like button appears in the embeddable player for this video.",
                "example": "true",
                "type": "boolean"
              },
              "scaling": {
                "description": "Whether the Scaling button appears in the embeddable player for this video.",
                "example": "true",
                "type": "boolean"
              },
              "share": {
                "description": "Whether the Share button appears in the embeddable player for this video.",
                "example": "true",
                "type": "boolean"
              },
              "watchlater": {
                "description": "Whether the Watch Later button appears in the embeddable player for this video.",
                "example": "true",
                "type": "boolean"
              }
            },
            "required": [
              "embed",
              "fullscreen",
              "hd",
              "like",
              "scaling",
              "share",
              "watchlater"
            ],
            "type": "object"
          },
          "color": {
            "description": "The primary player color, which controls the color of the progress bar, buttons, and more.",
            "example": "#0a0808",
            "type": "string"
          },
          "logos": {
            "description": "A collection of information about the logo in the corner of the embeddable player.",
            "properties": {
              "custom": {
                "description": "A collection of information relating to custom logos in the embeddable player.",
                "properties": {
                  "active": {
                    "description": "Whether the custom logo appears in the embeddable player.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "link": {
                    "description": "The URL that loads upon clicking the custom logo.",
                    "example": "http://example.com",
                    "type": "string"
                  },
                  "sticky": {
                    "description": "Whether the custom logo appears even when the player interface is hidden.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "required": [
                  "active",
                  "link",
                  "sticky"
                ],
                "type": "object"
              },
              "vimeo": {
                "description": "Whether the Vimeo logo appears in the embeddable player for this video.",
                "example": "true",
                "type": "boolean"
              }
            },
            "required": [
              "custom",
              "vimeo"
            ],
            "type": "object"
          },
          "playbar": {
            "description": "Whether the playbar appears in the embeddable player for this video.",
            "example": "true",
            "type": "boolean"
          },
          "speed": {
            "description": "Whether the speed controls appear in the embeddable player for this video.",
            "example": "true",
            "type": "boolean"
          },
          "title": {
            "description": "A collection of information relating to the embeddable player's title bar.",
            "properties": {
              "name": {
                "description": "How the embeddable player handles the video title:\n\nOption descriptions:\n * `hide` - The title is hidden.\n * `show` - The title is shown.\n",
                "enum": [
                  "hide",
                  "show",
                  "user"
                ],
                "example": "hide",
                "type": "string"
              },
              "owner": {
                "description": "How the embeddable player handles the video owner's information:\n\nOption descriptions:\n * `hide` - The owner's information is hidden.\n * `show` - The owner's information is shown.\n",
                "enum": [
                  "hide",
                  "show",
                  "user"
                ],
                "example": "hide",
                "type": "string"
              },
              "portrait": {
                "description": "How the embeddable player handles the video owner's portrait:\n\nOption descriptions:\n * `hide` - The owner's portrait is hidden\n * `show` - The owner's portrait is shown.\n",
                "enum": [
                  "hide",
                  "show",
                  "user"
                ],
                "example": "hide",
                "type": "string"
              }
            },
            "required": [
              "name",
              "owner",
              "portrait"
            ],
            "type": "object"
          },
          "uri": {
            "description": "The URI of the embed preset.",
            "example": "/videos/258684937/presets/12345",
            "type": "string"
          },
          "volume": {
            "description": "Whether the volume controls appear in the embeddable player for this video.",
            "example": "true",
            "type": "boolean"
          }
        },
        "required": [
          "buttons",
          "color",
          "logos",
          "playbar",
          "speed",
          "title",
          "volume"
        ],
        "title": "Embed Settings",
        "type": "object"
      },
      "endpoint": {
        "properties": {
          "methods": {
            "description": "All HTTP methods permitted on this endpoint.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "path": {
            "description": "The path section of the URL, which, when appended to the API host `https:///api.vimeo.com`, builds a full API endpoint.",
            "example": "/me",
            "type": "string"
          }
        },
        "required": [
          "methods",
          "path"
        ],
        "title": "Endpoint",
        "type": "object"
      },
      "error": {
        "properties": {
          "developer_message": {
            "description": "The error message that developers receive.",
            "example": "The specified resource does not exist.",
            "type": "string"
          },
          "error": {
            "description": "The error message that non-developer users receive.",
            "example": "Something strange occurred. Please try again.",
            "type": "string"
          },
          "error_code": {
            "description": "The error code.",
            "example": 5000,
            "type": "number"
          },
          "link": {
            "description": "A link to more information about the error.",
            "type": "string"
          }
        },
        "required": [
          "developer_message",
          "error",
          "error_code",
          "link"
        ],
        "title": "Error",
        "type": "object"
      },
      "group": {
        "properties": {
          "created_time": {
            "description": "The time in ISO 8601 format when the group was created.",
            "example": "2008-07-05T14:52:43+00:00",
            "type": "string"
          },
          "description": {
            "description": "The group's description.",
            "example": "Want to participate in our weekly Challenges? Join the Group to receive messages and new Challenges!",
            "nullable": true,
            "type": "string"
          },
          "link": {
            "description": "The link to the group.",
            "example": "https://vimeo.com/groups/weekendchallenge",
            "type": "string"
          },
          "metadata": {
            "description": "Metadata about the group.",
            "properties": {
              "connections": {
                "description": "A collection of information that is connected to this resource.",
                "properties": {
                  "users": {
                    "description": "Information about the members or moderators of this group.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of users on this connection.",
                        "example": 25798,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/groups/1108/users",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "videos": {
                    "description": "Information about the videos contained within this group.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 7252,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/groups/1108/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "users",
                  "videos"
                ],
                "type": "object"
              },
              "interactions": {
                "description": "User actions that have involved the group. This data requires a bearer token with the `private` scope.",
                "properties": {
                  "join": {
                    "description": "An action indicating that someone has joined the group. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "added": {
                        "description": "Whether the authenticated user has followed this group. This data requires a bearer token with the `private` scope.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "added_time": {
                        "description": "The time in ISO 8601 format when the user joined this group. This data requires a bearer token with the `private` scope.",
                        "nullable": true,
                        "type": "string"
                      },
                      "title": {
                        "description": "The user's title, or the null value if not applicable. This data requires a bearer token with the `private` scope.",
                        "example": "Vimeo Staff",
                        "nullable": true,
                        "type": "string"
                      },
                      "type": {
                        "description": "Whether the authenticated user is a moderator or subscriber. This data requires a bearer token with the `private` scope.\n\nOption descriptions:\n * `member` - The authenticated user is a member.\n * `moderator` - The authenticated user is a moderator.\n",
                        "enum": [
                          "member",
                          "moderator"
                        ],
                        "example": "member",
                        "nullable": true,
                        "type": "string"
                      },
                      "uri": {
                        "description": "The URI for following. PUT to this URI to follow, or DELETE to this URI to unfollow. This data requires a bearer token with the `private` scope.",
                        "example": "/users/152184/groups/1108",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "added_time",
                      "title",
                      "type",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "join"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections",
              "interactions"
            ],
            "type": "object"
          },
          "modified_time": {
            "description": "The time in ISO 8601 format when the group was last modified.",
            "example": "2018-09-16T15:41:45+00:00",
            "type": "string"
          },
          "name": {
            "description": "The group's display name.",
            "example": "Vimeo Weekend Challenge",
            "type": "string"
          },
          "pictures": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The active picture for this group."
          },
          "privacy": {
            "description": "The group's privacy settings.",
            "properties": {
              "comment": {
                "description": "Who can comment on the group:\n\nOption descriptions:\n * `all` - Anyone can comment on the group.\n * `members` - Only members can comment on the group.\n",
                "enum": [
                  "all",
                  "members"
                ],
                "example": "all",
                "type": "string"
              },
              "invite": {
                "description": "Who can invite new members to the group:\n\nOption descriptions:\n * `all` - Anyone can invite new members to join.\n * `members` - Only group members can invite new members to join.\n",
                "enum": [
                  "all",
                  "members"
                ],
                "example": "all",
                "type": "string"
              },
              "join": {
                "description": "Who can join the group:\n\nOption descriptions:\n * `anybody` - Anyone can join the group.\n * `members` - Only people with a Vimeo account can join the group.\n",
                "enum": [
                  "anybody",
                  "members"
                ],
                "example": "anybody",
                "type": "string"
              },
              "videos": {
                "description": "Who can add videos to the group:\n\nOption descriptions:\n * `all` - Anyone can add videos to the group.\n * `members` - Only group members can add videos to the group.\n",
                "enum": [
                  "all",
                  "members"
                ],
                "example": "all",
                "type": "string"
              },
              "view": {
                "description": "Who can view the group:\n\nOption descriptions:\n * `anybody` - Anyone can view the group.\n * `members` - Only group members can view the group.\n",
                "enum": [
                  "anybody",
                  "members"
                ],
                "example": "anybody",
                "type": "string"
              }
            },
            "required": [
              "comment",
              "invite",
              "join",
              "videos",
              "view"
            ],
            "type": "object"
          },
          "resource_key": {
            "description": "The resource key of the group.",
            "example": "dc724af18fbdd4e59189f5fe768a5f8311527050",
            "type": "string"
          },
          "uri": {
            "description": "The canonical relative URI of this group.",
            "example": "/groups/1108",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The owner of the group.",
            "nullable": true
          }
        },
        "required": [
          "created_time",
          "description",
          "link",
          "metadata",
          "modified_time",
          "name",
          "pictures",
          "privacy",
          "resource_key",
          "uri"
        ],
        "title": "Group",
        "type": "object"
      },
      "language": {
        "properties": {
          "code": {
            "description": "The code that represents this language.",
            "example": "en-US",
            "type": "string"
          },
          "name": {
            "description": "The name of the language.",
            "example": "English (United States)",
            "type": "string"
          }
        },
        "required": [
          "code",
          "name"
        ],
        "title": "Language",
        "type": "object"
      },
      "legacy-error": {
        "properties": {
          "error": {
            "description": "User-friendly error message",
            "example": "Something strange occurred. Please try again.",
            "type": "string"
          }
        },
        "required": [
          "error"
        ],
        "title": "Legacy Error",
        "type": "object"
      },
      "on-demand-genre": {
        "properties": {
          "canonical": {
            "description": "The canonical name or URL slug of the genre.",
            "example": "horror",
            "type": "string"
          },
          "interactions": {
            "properties": {
              "page": {
                "description": "Interactions for On Demand pages that are in this genre.",
                "properties": {
                  "added": {
                    "description": "Whether this On Demand genre was added.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "options": {
                    "description": "An array of HTTP methods permitted on this URI.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "uri": {
                    "description": "The URI to access the On Demand page.",
                    "example": "/ondemand/genres/horror/pages/12345",
                    "type": "string"
                  }
                },
                "required": [
                  "added",
                  "options",
                  "uri"
                ],
                "type": "object"
              }
            },
            "required": [
              "page"
            ],
            "type": "object"
          },
          "link": {
            "description": "The Vimeo URL for this genre.",
            "example": "http://vimeo.com/ondemand/browse/horror",
            "type": "string"
          },
          "metadata": {
            "properties": {
              "connections": {
                "description": "A collection of information connected to this resource.",
                "properties": {
                  "pages": {
                    "description": "Information about the On Demand pages related to this group.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/ondemand/genres/horror/pages",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "pages"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "name": {
            "description": "The descriptive name of the genre.",
            "example": "Horror",
            "type": "string"
          },
          "uri": {
            "description": "The relative URI of the On Demand genre.",
            "example": "/ondemand/genres/horror",
            "type": "string"
          }
        },
        "required": [
          "canonical",
          "interactions",
          "link",
          "metadata",
          "name",
          "uri"
        ],
        "title": "On Demand Genre",
        "type": "object"
      },
      "on-demand-page": {
        "properties": {
          "background": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The background image for the On Demand page on Vimeo.",
            "nullable": true
          },
          "colors": {
            "description": "The primary and secondary colors used for rendering this On Demand page.",
            "properties": {
              "primary": {
                "description": "The hexadecimal color code for the page's primary color.",
                "example": "#0a0808",
                "type": "string"
              },
              "secondary": {
                "description": "The hexadecimal color code for the page's secondary color.",
                "example": "#ba4a17",
                "type": "string"
              }
            },
            "required": [
              "primary",
              "secondary"
            ],
            "type": "object"
          },
          "content_rating": {
            "description": "An array of the page's content ratings.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "created_time": {
            "description": "The time in ISO 8601 format when the page was created.",
            "example": "2017-05-15T13:42:25+00:00",
            "type": "string"
          },
          "description": {
            "description": "The description of this On Demand page.",
            "example": "DARBY FOREVER follows the fantasies of Darby, a shopgirl at \"Bobbins & Notions\"",
            "nullable": true,
            "type": "string"
          },
          "domain_link": {
            "description": "The link to this page on its own domain.",
            "example": "https://example.com",
            "nullable": true,
            "type": "string"
          },
          "episodes": {
            "description": "Information about this On Demand page's episodes, if the page is for a series.",
            "properties": {
              "buy": {
                "properties": {
                  "active": {
                    "description": "Whether all the videos on this On Demand page can be purchased as a whole.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "price": {
                    "description": "The default price to buy an episode.",
                    "example": 9.99,
                    "nullable": true,
                    "type": "number"
                  }
                },
                "required": [
                  "active",
                  "price"
                ],
                "type": "object"
              },
              "rent": {
                "properties": {
                  "active": {
                    "description": "Whether all the videos on this On Demand page can be rented as a whole.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "period": {
                    "description": "The rental period for the video:\n\nOption descriptions:\n * `1 day` - The rental period is one day.\n * `1 month` - The rental period is one month.\n * `1 week` - The rental period is one week.\n * `1 year` - The rental period is one year.\n * `2 day` - The rental period is two days.\n * `24 hour` - The rental period is 24 hours.\n * `3 day` - The rental period is three days.\n * `3 month` - The rental period is three months.\n * `30 day` - The rental period is 30 days.\n * `48 hour` - The rental period is 48 hours.\n * `6 month` - The rental period is six months.\n * `60 day` - The rental period is 60 days.\n * `7 day` - The rental period is 7 days.\n * `72 hour` - The rental period is 72 hours.\n",
                    "enum": [
                      "1 day",
                      "1 month",
                      "1 week",
                      "1 year",
                      "2 day",
                      "24 hour",
                      "3 day",
                      "3 month",
                      "30 day",
                      "48 hour",
                      "6 month",
                      "60 day",
                      "7 day",
                      "72 hour"
                    ],
                    "example": "1 day",
                    "nullable": true,
                    "type": "string"
                  },
                  "price": {
                    "description": "The default price to rent an episode.",
                    "example": 2.99,
                    "nullable": true,
                    "type": "number"
                  }
                },
                "required": [
                  "active",
                  "period",
                  "price"
                ],
                "type": "object"
              }
            },
            "required": [
              "buy",
              "rent"
            ],
            "type": "object"
          },
          "film": {
            "allOf": [
              {
                "$ref": "#/components/schemas/video"
              }
            ],
            "description": "This On Demand page's film, if it is a film."
          },
          "genres": {
            "description": "All the genres assigned to this page.",
            "items": {
              "$ref": "#/components/schemas/on-demand-genre"
            },
            "type": "array"
          },
          "link": {
            "description": "The link to the page on Vimeo.",
            "example": "https://vimeo.com/ondemand/darbyforever",
            "type": "string"
          },
          "metadata": {
            "description": "Metadata about the On Demand page.",
            "properties": {
              "connections": {
                "description": "A collection of information that is connected to this resource, including videos, genres, and pictures connections.",
                "properties": {
                  "metadata": {
                    "properties": {
                      "connections": {
                        "properties": {
                          "comments": {
                            "description": "Information about the comments associated with this page.",
                            "properties": {
                              "options": {
                                "description": "An array of HTTP methods permitted on this URI.",
                                "items": {
                                  "type": "string"
                                },
                                "type": "array"
                              },
                              "total": {
                                "description": "The total number of comments on this connection.",
                                "example": 4,
                                "type": "number"
                              },
                              "uri": {
                                "description": "The API URI that resolves to the connection data.",
                                "example": "/ondemand/pages/61326/comments",
                                "type": "string"
                              }
                            },
                            "required": [
                              "options",
                              "total",
                              "uri"
                            ],
                            "type": "object"
                          },
                          "genres": {
                            "description": "Information about the genres associated with this page.",
                            "properties": {
                              "options": {
                                "description": "An array of HTTP methods permitted on this URI.",
                                "items": {
                                  "type": "string"
                                },
                                "type": "array"
                              },
                              "total": {
                                "description": "The total number of genres on this connection.",
                                "example": 9,
                                "type": "number"
                              },
                              "uri": {
                                "description": "The API URI that resolves to the connection data.",
                                "example": "/ondemand/pages/61326/genres",
                                "type": "string"
                              }
                            },
                            "required": [
                              "options",
                              "total",
                              "uri"
                            ],
                            "type": "object"
                          },
                          "likes": {
                            "description": "Information about the likes associated with this page.",
                            "properties": {
                              "options": {
                                "description": "An array of HTTP methods permitted on this URI.",
                                "items": {
                                  "type": "string"
                                },
                                "type": "array"
                              },
                              "total": {
                                "description": "The total number of likes on this connection.",
                                "example": 15,
                                "type": "number"
                              },
                              "uri": {
                                "description": "The API URI that resolves to the connection data.",
                                "example": "/ondemand/pages/61326/likes",
                                "type": "string"
                              }
                            },
                            "required": [
                              "options",
                              "total",
                              "uri"
                            ],
                            "type": "object"
                          },
                          "pictures": {
                            "description": "Information about the pictures associated with this page.",
                            "properties": {
                              "options": {
                                "description": "An array of HTTP methods permitted on this URI.",
                                "items": {
                                  "type": "string"
                                },
                                "type": "array"
                              },
                              "total": {
                                "description": "The total number of pictures on this connection.",
                                "example": 3,
                                "type": "number"
                              },
                              "uri": {
                                "description": "The API URI that resolves to the connection data.",
                                "example": "/ondemand/pages/61326/pictures",
                                "type": "string"
                              }
                            },
                            "required": [
                              "options",
                              "total",
                              "uri"
                            ],
                            "type": "object"
                          },
                          "seasons": {
                            "description": "Information about the seasons associated with this page.",
                            "properties": {
                              "options": {
                                "description": "An array of HTTP methods permitted on this URI.",
                                "items": {
                                  "type": "string"
                                },
                                "type": "array"
                              },
                              "total": {
                                "description": "The total number of seasons on this connection.",
                                "example": 3,
                                "type": "number"
                              },
                              "uri": {
                                "description": "The API URI that resolves to the connection data.",
                                "example": "/ondemand/pages/61326/seasons",
                                "type": "string"
                              }
                            },
                            "required": [
                              "options",
                              "total",
                              "uri"
                            ],
                            "type": "object"
                          },
                          "videos": {
                            "description": "Information about the videos associated with this page.",
                            "properties": {
                              "extra_total": {
                                "description": "The total number of extra videos.",
                                "example": 14,
                                "type": "number"
                              },
                              "main_total": {
                                "description": "The total number of main videos.",
                                "example": 36,
                                "type": "number"
                              },
                              "options": {
                                "description": "An array of HTTP methods permitted on this URI.",
                                "items": {
                                  "type": "string"
                                },
                                "type": "array"
                              },
                              "total": {
                                "description": "The total number of videos on this connection.",
                                "example": 50,
                                "type": "number"
                              },
                              "uri": {
                                "description": "The API URI that resolves to the connection data.",
                                "example": "/ondemand/pages/61326/videos",
                                "type": "string"
                              },
                              "viewable_total": {
                                "description": "The total number of viewable videos.",
                                "example": 50,
                                "type": "number"
                              }
                            },
                            "required": [
                              "extra_total",
                              "main_total",
                              "options",
                              "total",
                              "uri",
                              "viewable_total"
                            ],
                            "type": "object"
                          }
                        },
                        "required": [
                          "comments",
                          "genres",
                          "likes",
                          "pictures",
                          "seasons",
                          "videos"
                        ],
                        "type": "object"
                      }
                    },
                    "required": [
                      "connections"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "metadata"
                ],
                "type": "object"
              },
              "interactions": {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/purchase-interaction"
                  }
                ],
                "description": "The user's available purchase interactions."
              }
            },
            "required": [
              "connections",
              "interactions"
            ],
            "type": "object"
          },
          "modified_time": {
            "description": "he time in ISO 8601 format when the page was last modified.",
            "example": "2017-05-15T13:42:25+00:00",
            "type": "string"
          },
          "name": {
            "description": "A descriptive title of this On Demand page.",
            "example": "Darby Forever",
            "type": "string"
          },
          "pictures": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The active poster for this On Demand page.",
            "nullable": true
          },
          "preorder": {
            "properties": {
              "active": {
                "description": "Whether this page is available for preorder.",
                "example": "true",
                "type": "boolean"
              },
              "cancel_time": {
                "description": "The time in ISO 8601 format when the preorder was cancelled.",
                "example": "2017-05-16T13:13:46+00:00",
                "type": "string"
              },
              "publish_time": {
                "description": "The time in ISO 8601 format when the preorder was released to the public.",
                "example": "2017-05-15T13:12:52+00:00",
                "type": "string"
              },
              "time": {
                "description": "The time in ISO 8601 format when the preorder started.",
                "example": "2017-05-15T13:13:31+00:00",
                "type": "string"
              }
            },
            "required": [
              "active",
              "cancel_time",
              "publish_time",
              "time"
            ],
            "type": "object"
          },
          "published": {
            "properties": {
              "enabled": {
                "description": "Whether this On Demand page has been published.",
                "example": "true",
                "type": "boolean"
              },
              "time": {
                "description": "The time in IS 8601 format when this page was published.",
                "example": "2017-05-15T13:12:52+00:00",
                "type": "string"
              }
            },
            "required": [
              "enabled",
              "time"
            ],
            "type": "object"
          },
          "rating": {
            "description": "The rating of this page.",
            "example": 7,
            "nullable": true,
            "type": "number"
          },
          "resource_key": {
            "description": "The VOD resource key.",
            "example": "bac1033deba2310ebba2caec33c23e4beea67aba",
            "type": "string"
          },
          "sku": {
            "description": "The creator-designated SKU for this On Demand page.",
            "example": "VIME0001",
            "nullable": true,
            "type": "string"
          },
          "subscription": {
            "description": "Information about subscribing to this On Demand page, if enabled.",
            "nullable": true,
            "properties": {
              "active": {
                "description": "Whether this product is active.",
                "example": "true",
                "type": "boolean"
              },
              "link": {
                "description": "The link to this product on Vimeo.",
                "example": "https://vimeo.com/ondemand/darbyforever",
                "nullable": true,
                "type": "string"
              },
              "period": {
                "description": "The product's rental period.",
                "type": "string"
              },
              "price": {
                "description": "The accepted currencies and respective pricing for this product.",
                "type": "object"
              }
            },
            "required": [
              "active",
              "link",
              "price"
            ],
            "type": "object"
          },
          "theme": {
            "description": "The graphical theme for this On Demand page.",
            "example": "vader",
            "type": "string"
          },
          "thumbnail": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The thumbnail image for the On Demand page on Vimeo.",
            "nullable": true
          },
          "trailer": {
            "allOf": [
              {
                "$ref": "#/components/schemas/video"
              }
            ],
            "description": "The trailer for this On Demand page.",
            "nullable": true
          },
          "type": {
            "description": "Whether this On Demand page is for a film or a series.\n\nOption descriptions:\n * `film` - The On Demand page is for a film.\n * `series` - The On Demand page is for a series.\n",
            "enum": [
              "film",
              "series"
            ],
            "example": "film",
            "type": "string"
          },
          "uri": {
            "description": "The relative URI of the On Demand page.",
            "example": "/ondemand/pages/61326",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The user who created this On Demand page.",
            "nullable": true
          }
        },
        "required": [
          "background",
          "colors",
          "content_rating",
          "description",
          "domain_link",
          "episodes",
          "genres",
          "link",
          "metadata",
          "name",
          "pictures",
          "preorder",
          "published",
          "rating",
          "resource_key",
          "subscription",
          "theme",
          "thumbnail",
          "trailer",
          "type",
          "uri",
          "user"
        ],
        "title": "On Demand Page",
        "type": "object"
      },
      "on-demand-promotion": {
        "properties": {
          "access_type": {
            "description": "The type of access that this promotion grants:\n\nOption descriptions:\n * `default` - Grants discounts on existing product offerings.\n * `vip` - Grants free access either to VOD content before it is released or to access types that aren't part of the existing product offerings.\n",
            "enum": [
              "default",
              "vip"
            ],
            "example": "default",
            "type": "string"
          },
          "discount_type": {
            "description": "The type of discount for which this promotion can be used.\n\nOption descriptions:\n * `dollars` - The discount is a certain fixed amount.\n * `free` - The discount is the full purchase price. VIP access promotions always use this discount type.\n * `percent` - The discount is a certain percentage of the full price.\n",
            "enum": [
              "dollars",
              "free",
              "percent"
            ],
            "example": "free",
            "type": "string"
          },
          "download": {
            "description": "Whether this promotion grants download access to On Demand content.",
            "example": "true",
            "type": "boolean"
          },
          "label": {
            "description": "The prefix string for batch codes, or the null value for single codes.",
            "example": "8jgaieumbzstujhn8k304iwwezawkvwm",
            "nullable": true,
            "type": "string"
          },
          "metadata": {
            "description": "The video's metadata.",
            "properties": {
              "connections": {
                "description": "A list of resource URIs related to the On Demand promotion.",
                "properties": {
                  "codes": {
                    "description": "Information about the codes associated with this promotion.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of uses on this connection.",
                        "example": 1,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/ondemand/pages/61326/promotion/12345/codes",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "codes"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "percent_off": {
            "description": "The percentage amount that is deducted from the product price.",
            "example": 100,
            "type": "number"
          },
          "product_type": {
            "description": "The type of product to which this promotion can be applied. Only `buy` and `rent` are available for the VIP access type:\n\nOption descriptions:\n * `any` - The promotion can be applied to any product.\n * `buy` - The promotion can be applied to a buyable single video.\n * `buy_episode` - The promotion can be applied to a buyable single episode.\n * `rent` - The promotion can be applied to a rentable single video.\n * `rent_episode` - The promotion can be applied to a rentable single episode.\n * `subscribe` - The promotion can be applied to a subscription.\n",
            "enum": [
              "any",
              "buy",
              "buy_episode",
              "rent",
              "rent_episode",
              "subscribe"
            ],
            "example": "any",
            "type": "string"
          },
          "stream_period": {
            "description": "The amount of time that the user has access to the VOD content after redeeming a promo code.\n\nOption descriptions:\n * `1_week` - Access lasts for one week.\n * `1_year` - Access lasts for one year.\n * `24_hour` - Access lasts for 24 hours.\n * `30_days` - Access lasts for 30 days.\n * `3_month` - Access lasts for 3 months.\n * `48_hour` - Access lasts for 48 hours.\n * `6_month` - Access lasts for 6 months.\n * `72_hour` - Access lasts for 72 hours.\n",
            "enum": [
              "1_week",
              "1_year",
              "24_hour",
              "30_days",
              "3_month",
              "48_hour",
              "6_month",
              "72_hour"
            ],
            "example": "1_week",
            "nullable": true,
            "type": "string"
          },
          "total": {
            "description": "The total amount of times that this promotion can be used.",
            "example": 1,
            "type": "number"
          },
          "type": {
            "description": "The way in which this promotion can generate promo codes:\n\nOption descriptions:\n * `batch` - Provides many unique promo codes that can only be used once each.\n * `batch_prefix` - Similar to `batch`, except that all codes have a similar prefix string. This mode is deprecated, yet it may still appear for some users.\n * `single` - Provides a single promo code with many uses.\n",
            "enum": [
              "batch",
              "batch_prefix",
              "single"
            ],
            "example": "batch",
            "type": "string"
          },
          "uri": {
            "description": "The promotion's canonical relative URI.",
            "example": "/ondemand/pages/61326/promotions/12345",
            "type": "string"
          }
        },
        "required": [
          "access_type",
          "discount_type",
          "download",
          "label",
          "metadata",
          "percent_off",
          "product_type",
          "stream_period",
          "total",
          "type",
          "uri"
        ],
        "title": "On Demand Promotion",
        "type": "object"
      },
      "on-demand-promotion-code": {
        "properties": {
          "code": {
            "description": "A promotion code that can be redeemed on Vimeo.",
            "example": "8jgaieumbzstujhn8k304iwwezawkvwm",
            "type": "string"
          },
          "link": {
            "description": "A link to redeem the promotion code instantly.",
            "example": "https://vimeo.com/r/0trBLg/OGpnYWlldW",
            "type": "string"
          },
          "max_uses": {
            "description": "The total amount of times this code can be used.",
            "example": 1,
            "type": "number"
          },
          "uses": {
            "description": "The number of times that this code has been used.",
            "example": 0,
            "type": "number"
          }
        },
        "required": [
          "code",
          "link",
          "max_uses",
          "uses"
        ],
        "title": "On Demand Promotion Code",
        "type": "object"
      },
      "on-demand-region": {
        "properties": {
          "country_code": {
            "description": "The ISO 3166-1 alpha-2 code for this country.",
            "example": "US",
            "type": "string"
          },
          "country_name": {
            "description": "The descriptive name of this country.",
            "example": "United States",
            "type": "string"
          },
          "uri": {
            "description": "The region container's relative URI.",
            "example": "/ondemand/pages/61326/regions/US",
            "type": "string"
          }
        },
        "required": [
          "country_code",
          "country_name",
          "uri"
        ],
        "title": "On Demand Region",
        "type": "object"
      },
      "on-demand-season": {
        "properties": {
          "description": {
            "description": "The description for this season.",
            "example": "Season 1",
            "type": "string"
          },
          "metadata": {
            "properties": {
              "connections": {
                "properties": {
                  "videos": {
                    "description": "The Videos connection.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 13,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection ∂data.",
                        "example": "/ondemand/pages/61326/season/12345/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "videos"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "name": {
            "description": "The descriptive name of the season.",
            "example": "Season 1",
            "type": "string"
          },
          "position": {
            "description": "The position of the season relative to other seasons in the series.",
            "example": 1,
            "type": "number"
          },
          "resource_key": {
            "description": "The unique identifier for this On Demand season.",
            "example": "bac1033deba2310ebba2caec33c23e4beea67aba",
            "type": "string"
          },
          "type": {
            "description": "The type of season.",
            "example": "main",
            "type": "string"
          },
          "uri": {
            "description": "The season container's relative URI.",
            "example": "/ondemand/pages/61326/seasons/12345",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The creator of this On Demand page.",
            "nullable": true
          }
        },
        "required": [
          "description",
          "metadata",
          "name",
          "position",
          "resource_key",
          "type",
          "uri",
          "user"
        ],
        "title": "On Demand Season",
        "type": "object"
      },
      "on-demand-video": {
        "properties": {
          "buy": {
            "description": "Information about purchasing this video.",
            "nullable": true,
            "properties": {
              "active": {
                "description": "Whether this On Demand video can be purchased.",
                "example": "true",
                "type": "boolean"
              },
              "price": {
                "description": "A map of currency type to price.",
                "type": "object"
              },
              "purchased": {
                "description": "Whether this On Demand video has been purchased.",
                "example": "true",
                "type": "boolean"
              }
            },
            "required": [
              "active",
              "price"
            ],
            "type": "object"
          },
          "description": {
            "description": "Description of the On Demand video.",
            "example": "DARBY FOREVER follows the fantasies of Darby, a shopgirl at \"Bobbins & Notions\".",
            "type": "string"
          },
          "duration": {
            "description": "The duration of the On Demand video.",
            "example": "1197",
            "type": "string"
          },
          "episode": {
            "description": "The episode number of the On Demand video.",
            "example": 1,
            "type": "number"
          },
          "interactions": {
            "description": "An object containing information about how the authenticated user can interact with this On Demand page.",
            "properties": {
              "page": {
                "description": "Information about how the authenticated user can interact with the connection to the video's On Demand page.",
                "properties": {
                  "added": {
                    "description": "Whether this On Demand page was added.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "options": {
                    "description": "An array of HTTP methods permitted on this URI.",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "uri": {
                    "description": "The URI to access the On Demand page.",
                    "example": "/ondemand/pages/61326",
                    "type": "string"
                  }
                },
                "required": [
                  "added",
                  "options",
                  "uri"
                ],
                "type": "object"
              }
            },
            "required": [
              "page"
            ],
            "type": "object"
          },
          "link": {
            "description": "The link to this video on Vimeo.",
            "example": "https://vimeo.com/ondemand/darbyforever/12345",
            "type": "string"
          },
          "metadata": {
            "description": "Metadata information about this video.",
            "properties": {
              "connections": {
                "properties": {
                  "season": {
                    "description": "Information about this season.",
                    "properties": {
                      "name": {
                        "description": "The name of the season on this connection.",
                        "example": "Season 1",
                        "type": "string"
                      },
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/ondemand/pages/61326/seasons/12345",
                        "type": "string"
                      }
                    },
                    "required": [
                      "name",
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "season"
                ],
                "type": "object"
              },
              "interactions": {
                "properties": {
                  "likes": {
                    "description": "Information about the user's Like interactions with this video.",
                    "properties": {
                      "added": {
                        "description": "Whether the user has liked this video.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "added_time": {
                        "description": "The time in ISO 8601 format when the user liked this video.",
                        "example": "2017-05-12T21:42:42+00:00",
                        "type": "string"
                      },
                      "uri": {
                        "description": "The URI for the user to like this video.",
                        "example": "/users/152184/likes/12345",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "added_time",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "watchlater": {
                    "description": "Information about the user's Watch Later interactions with this video.",
                    "properties": {
                      "added": {
                        "description": "Whether the user has added this video to their Watch Later queue.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "added_time": {
                        "description": "The time in ISO 8601 format when the user added this video to their Watch Later queue.",
                        "example": "2017-05-12T21:42:42+00:00",
                        "type": "string"
                      },
                      "uri": {
                        "description": "The URI for the user to add this video to their Watch Later queue.",
                        "example": "/users/152184/watchlater/12345",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "added_time",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "likes",
                  "watchlater"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections",
              "interactions"
            ],
            "type": "object"
          },
          "name": {
            "description": "The title of the On Demand video.",
            "example": "Darby Forever",
            "type": "string"
          },
          "options": {
            "description": "An array of HTTP methods permitted on this URI.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "pictures": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The active picture for this video."
          },
          "play_progress": {
            "description": "The user's most recent play position in seconds for this video.",
            "example": 30,
            "type": "number"
          },
          "position": {
            "description": "Describes the manual position of this video relative to the other videos owned by this On Demand page.",
            "example": 1,
            "type": "number"
          },
          "release_date": {
            "description": "The time in ISO 8601 format when the On Demand video was created or published.",
            "example": "2017-05-12T21:06:42+00:00",
            "type": "string"
          },
          "release_year": {
            "description": "The year that this On Demand video was released.",
            "example": 2016,
            "nullable": true,
            "type": "number"
          },
          "rent": {
            "description": "Information about renting this video.",
            "nullable": true,
            "properties": {
              "active": {
                "description": "Whether this On Demand video can be rented.",
                "example": "true",
                "type": "boolean"
              },
              "price": {
                "description": "A map of currency type to price.",
                "type": "object"
              },
              "purchased": {
                "description": "Whether this On Demand video has been rented.",
                "example": "true",
                "type": "boolean"
              }
            },
            "required": [
              "active",
              "price"
            ],
            "type": "object"
          },
          "type": {
            "description": "The type of the On Demand video:\n\nOption descriptions:\n * `extra` - The On Demand video is an extra feature.\n * `main` - The On Demand video is a main feature.\n * `trailer` - The On Demand video is a trailer.\n",
            "enum": [
              "extra",
              "main",
              "trailer"
            ],
            "example": "main",
            "type": "string"
          },
          "uri": {
            "description": "The video container's relative URI.",
            "example": "/ondemand/pages/61326/videos/12345",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The owner of the video."
          }
        },
        "required": [
          "buy",
          "interactions",
          "link",
          "metadata",
          "play_progress",
          "release_year",
          "rent",
          "type",
          "uri"
        ],
        "title": "On Demand Video",
        "type": "object"
      },
      "picture": {
        "properties": {
          "active": {
            "description": "Whether this picture is the active picture for its parent resource.",
            "example": "true",
            "type": "boolean"
          },
          "link": {
            "description": "The upload URL for the picture. This field appears when you create the picture resource for the first time.",
            "type": "string"
          },
          "resource_key": {
            "description": "The picture's resource key string.",
            "example": "dc724af18fbdd4e59189f5fe768a5f8311527050",
            "type": "string"
          },
          "sizes": {
            "description": "An array containing reference information about all available image files.",
            "items": {
              "properties": {
                "height": {
                  "description": "The height of the image.",
                  "example": 720,
                  "nullable": true,
                  "type": "number"
                },
                "link": {
                  "description": "The direct link to the image.",
                  "example": "https://i.vimeocdn.com/video/581495283_1280x720.jpg?r=pad",
                  "type": "string"
                },
                "link_with_play_button": {
                  "description": "The direct link to the image with a play button overlay.",
                  "example": "https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F581495283_1280x720.jpg&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png",
                  "type": "string"
                },
                "width": {
                  "description": "The width of the image.",
                  "example": 1280,
                  "type": "number"
                }
              },
              "required": [
                "height",
                "link",
                "width"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "type": {
            "description": "The type of the picture:\n\nOption descriptions:\n * `caution` - An image that is appropriate for all ages.\n * `custom` - A custom image for the video.\n * `default` - The default image for the video.\n",
            "enum": [
              "caution",
              "custom",
              "default"
            ],
            "example": "caution",
            "type": "string"
          },
          "uri": {
            "description": "The picture's URI.",
            "example": "/users/152184/pictures/12345",
            "type": "string"
          }
        },
        "required": [
          "active",
          "resource_key",
          "sizes",
          "type",
          "uri"
        ],
        "title": "Picture",
        "type": "object"
      },
      "play": {
        "properties": {
          "progressive": {
            "description": "Progressive files.",
            "items": {
              "properties": {
                "created_time": {
                  "description": "The time in ISO 8601 format when this video file was created.",
                  "example": "2017-05-16T17:21:51+00:00",
                  "type": "string"
                },
                "fps": {
                  "description": "The FPS of the video file.",
                  "example": 30,
                  "type": "number"
                },
                "height": {
                  "description": "The height in pixels of the video.",
                  "example": 720,
                  "nullable": true,
                  "type": "number"
                },
                "link": {
                  "description": "The direct link to this video file.",
                  "type": "string"
                },
                "link_expiration_time": {
                  "description": "The time in ISO 8601 format when the link to this video file expires.",
                  "example": "2017-05-16T17:21:51+00:00",
                  "type": "string"
                },
                "log": {
                  "description": "The URLs for logging events.",
                  "type": "object"
                },
                "md5": {
                  "description": "The MD5 hash of the video file.",
                  "example": "1bc29b36f623ba82aaf6724fd3b16718",
                  "type": "string"
                },
                "size": {
                  "description": "The file size in bytes of this video.",
                  "example": 5000000,
                  "nullable": true,
                  "type": "number"
                },
                "type": {
                  "description": "The type of the video file:\n\nOption descriptions:\n * `source` - The video is a source file.\n * `video/mp4` - The video is in MP4 format.\n * `video/webm` - The video is in WebM format.\n * `vp6/x-video` - The video is in VP6 format.\n",
                  "enum": [
                    "source",
                    "video/mp4",
                    "video/webm",
                    "vp6/x-video"
                  ],
                  "example": "source",
                  "nullable": true,
                  "type": "string"
                },
                "width": {
                  "description": "The width in pixels of the video.",
                  "example": 1280,
                  "nullable": true,
                  "type": "number"
                }
              },
              "required": [
                "created_time",
                "fps",
                "height",
                "link",
                "link_expiration_time",
                "md5",
                "size",
                "type",
                "width"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "status": {
            "description": "The play status of the video:\n\nOption descriptions:\n * `playable` - The video is playable.\n * `purchase_required` - The video must be purchased.\n * `restricted` - Playback for the video is restricted.\n * `unavailable` - The video is unavailable.\n",
            "enum": [
              "playable",
              "purchase_required",
              "restricted",
              "unavailable"
            ],
            "example": "playable",
            "type": "string"
          }
        },
        "required": [
          "status"
        ],
        "title": "Play",
        "type": "object"
      },
      "portfolio": {
        "properties": {
          "created_time": {
            "description": "The time in ISO 8601 format when the portfolio was created.",
            "example": "2017-05-16T19:56:07+00:00",
            "type": "string"
          },
          "description": {
            "description": "The portfolio's description.",
            "example": "The Vimeo Staff original productions.",
            "nullable": true,
            "type": "string"
          },
          "link": {
            "description": "The link to the portfolio.",
            "example": "https://vimeopro.com/staff/originals",
            "type": "string"
          },
          "metadata": {
            "description": "Metadata about the album.",
            "properties": {
              "connections": {
                "description": "A list of resource URIs related to the album.",
                "properties": {
                  "videos": {
                    "description": "Information about the videos contained within this portfolio.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 18,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/portfolios/12345/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "videos"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "modified_time": {
            "description": "The time in ISO 8601 format when the portfolio's data was last modified.",
            "example": "2017-05-17T19:56:07+00:00",
            "type": "string"
          },
          "name": {
            "description": "The display name of the portfolio.",
            "example": "Vimeo Originals!",
            "type": "string"
          },
          "sort": {
            "description": "The default video sort order for the portfolio:\n\nOption descriptions:\n * `alphabetical` - The default sort order is alphabetical by name.\n * `clips` - The default sort order is video creation date.\n * `modified` - The default sort order is the order in which the videos were modified.\n * `recent` - The default sort order is the order in which the videos were added.\n",
            "enum": [
              "alphabetical",
              "clips",
              "modified",
              "recent"
            ],
            "example": "alphabetical",
            "type": "string"
          },
          "uri": {
            "description": "The canonical relative URI of the portfolio.",
            "example": "/users/152184/portfolios/12345",
            "type": "string"
          }
        },
        "required": [
          "created_time",
          "description",
          "link",
          "metadata",
          "modified_time",
          "name",
          "sort",
          "uri"
        ],
        "title": "Portfolio",
        "type": "object"
      },
      "presets": {
        "properties": {
          "metadata": {
            "description": "Metadata about the album.",
            "properties": {
              "connections": {
                "description": "A list of resource URIs related to the album.",
                "properties": {
                  "videos": {
                    "description": "Information about the videos in this preset.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 13,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/presets/12345/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "videos"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "name": {
            "description": "The display name of the presets group.",
            "example": "Minimalism",
            "type": "string"
          },
          "settings": {
            "description": "The contents of the presets group.",
            "properties": {
              "buttons": {
                "properties": {
                  "embed": {
                    "description": "Whether the preset includes Embed button settings.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "hd": {
                    "description": "Whether the preset includes HD button settings.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "like": {
                    "description": "Whether the preset includes Like button settings.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "share": {
                    "description": "Whether the present includes Share button settings.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "vote": {
                    "description": "Whether the preset includes Vote button settings.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "watchlater": {
                    "description": "Whether the preset includes Watch Later button settings.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "required": [
                  "embed",
                  "hd",
                  "like",
                  "share",
                  "vote",
                  "watchlater"
                ],
                "type": "object"
              },
              "logos": {
                "properties": {
                  "custom": {
                    "description": "Whether the preset includes custom logo settings.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "sticky_custom": {
                    "description": "Whether the present includes sticky custom logo settings.",
                    "example": "true",
                    "type": "boolean"
                  },
                  "vimeo": {
                    "description": "Whether the preset includes Vimeo logo settings.",
                    "example": "true",
                    "type": "boolean"
                  }
                },
                "required": [
                  "custom",
                  "sticky_custom",
                  "vimeo"
                ],
                "type": "object"
              },
              "outro": {
                "properties": {
                  "clips": {
                    "description": "A comma-separated list of video URIs. Present only if the type is `uploaded_clips`.",
                    "example": "/videos/258684937,/videos/273576296",
                    "nullable": true,
                    "type": "string"
                  },
                  "link": {
                    "description": "The outro link settings. Present only if the type is `link`.",
                    "nullable": true,
                    "properties": {
                      "name": {
                        "description": "The name of the outro link.",
                        "example": "Example Outro",
                        "type": "string"
                      },
                      "url": {
                        "description": "The URL of the outro link.",
                        "example": "https://example.com",
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "text": {
                    "description": "The outro text. Present only if the type is `text`.",
                    "example": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "nullable": true,
                    "type": "string"
                  },
                  "type": {
                    "description": "The preset outro type:",
                    "enum": [
                      "link",
                      "no idea",
                      "text",
                      "uploaded_clips",
                      "uploaded_videos"
                    ],
                    "example": "link",
                    "type": "string"
                  },
                  "videos": {
                    "description": "A comma-separated list of video URIs. Present only if type is `no idea`.",
                    "example": "/videos/258684937,/videos/273576296",
                    "nullable": true,
                    "type": "string"
                  }
                },
                "required": [
                  "type"
                ],
                "type": "object"
              }
            },
            "required": [
              "buttons",
              "logos",
              "outro"
            ],
            "type": "object"
          },
          "uri": {
            "description": "The canonical relative URI of the presets object.",
            "example": "/users/152184/presets/12345",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The owner of the preset.",
            "nullable": true
          }
        },
        "required": [
          "metadata",
          "name",
          "settings",
          "uri",
          "user"
        ],
        "title": "Presets",
        "type": "object"
      },
      "project": {
        "properties": {
          "created_time": {
            "description": "The time in ISO 8601 format when the project was created.",
            "example": "2017-05-23T14:36:22+00:00",
            "type": "string"
          },
          "metadata": {
            "description": "The project's metadata.",
            "properties": {
              "connections": {
                "description": "A list of resource URIs related to the project.",
                "properties": {
                  "videos": {
                    "description": "A standard connection object indicating how to get all the videos in this project.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 12,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/projects/12345/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "videos"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "modified_time": {
            "description": "The time in ISO 8601 format when the project was last modified.",
            "example": "2017-05-23T14:36:22+00:00",
            "type": "string"
          },
          "name": {
            "description": "The name of the folder.",
            "example": "Rough cuts",
            "type": "string"
          },
          "resource_key": {
            "description": "The resource key string of the project.",
            "example": "dc724af18fbdd4e59189f5fe768a5f8311527050",
            "type": "string"
          },
          "uri": {
            "description": "The URI of the project.",
            "example": "/me/projects/12345",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The owner of the project."
          }
        },
        "required": [
          "created_time",
          "metadata",
          "modified_time",
          "name",
          "resource_key",
          "uri",
          "user"
        ],
        "title": "Project",
        "type": "object"
      },
      "purchase-interaction": {
        "properties": {
          "buy": {
            "description": "Information on purchasing this video.",
            "nullable": true,
            "properties": {
              "drm": {
                "description": "Whether the On Demand video for purchase has DRM.",
                "example": "true",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "rent": {
            "description": "Information on renting this video.",
            "nullable": true,
            "type": "object"
          },
          "subscribe": {
            "description": "Information on subscribing to this video.",
            "nullable": true,
            "properties": {
              "drm": {
                "description": "Whether the On Demand subscription has DRM.",
                "example": "true",
                "type": "boolean"
              },
              "expires_time": {
                "description": "The time in ISO 8601 format when the On Demand video will expire.",
                "example": "2018-03-05T21:04:47+00:00",
                "nullable": true,
                "type": "string"
              },
              "link": {
                "description": "The URL to purchase this On Demand subscription on Vimeo.",
                "example": "https://vimeo.com/ondemand/darbyforever",
                "nullable": true,
                "type": "string"
              },
              "purchase_time": {
                "description": "The time in ISO 8601 format when the On Demand was purchased.",
                "example": "2018-03-05T21:04:47+00:00",
                "nullable": true,
                "type": "string"
              },
              "stream": {
                "description": "The user's streaming access to this On Demand subscription:\n\nOption descriptions:\n * `available` - The On Demand subscription is available for streaming.\n * `purchased` - The On Demand subscription has been purchased.\n * `restricted` - Streaming for the On Demand subscription is restricted.\n * `unavailable` - The On Demand subscription is unavailable.\n",
                "enum": [
                  "available",
                  "purchased",
                  "restricted",
                  "unavailable"
                ],
                "example": "available",
                "type": "string"
              },
              "uri": {
                "description": "The On Demand subscription's product URI.",
                "example": "/ondemand/pages/61326/products/12345",
                "nullable": true,
                "type": "string"
              }
            },
            "type": "object"
          }
        },
        "title": "Purchase Interaction",
        "type": "object"
      },
      "tag": {
        "properties": {
          "canonical": {
            "description": "The normalized canonical tag name.",
            "example": "awesome",
            "type": "string"
          },
          "metadata": {
            "description": "Metadata about the group.",
            "properties": {
              "connections": {
                "description": "A collection of information that is connected to this resource.",
                "properties": {
                  "videos": {
                    "description": "Information about the videos related to this tag.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 34371,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/tags/awesome/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "videos"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "name": {
            "description": "The tag value.",
            "example": "awesome",
            "type": "string"
          },
          "resource_key": {
            "description": "The tag's resource key string.",
            "example": "bac1033deba2310ebba2caec33c23e4beea67aba",
            "type": "string"
          },
          "uri": {
            "description": "The canonical relative URI of the tag.",
            "example": "/videos/258684937/tags/awesome",
            "type": "string"
          }
        },
        "required": [
          "canonical",
          "metadata",
          "name",
          "resource_key",
          "uri"
        ],
        "title": "Tag",
        "type": "object"
      },
      "text-track": {
        "properties": {
          "active": {
            "description": "Whether this text track is active.",
            "example": "true",
            "type": "boolean"
          },
          "hls_link": {
            "description": "The read-only URL of the text track file, intended for use with HLS playback.",
            "type": "string"
          },
          "hls_link_expires_time": {
            "description": "The time in ISO 8601 format when the read-only HLS playback text track file expires.",
            "example": "1494888499",
            "type": "string"
          },
          "language": {
            "description": "The language code for this text track. To see a full list, request\n`/languages?filter=texttrack`.",
            "example": "en-US",
            "nullable": true,
            "type": "string"
          },
          "link": {
            "description": "The read-only URL of the text track file. You can upload to this link when you create it for the first time.",
            "type": "string"
          },
          "link_expires_time": {
            "description": "The time in ISO 8601 format when the text track link expires.",
            "example": "1494888499",
            "type": "string"
          },
          "name": {
            "description": "The descriptive name of this text track.",
            "example": "English Subtitles",
            "nullable": true,
            "type": "string"
          },
          "type": {
            "description": "The type of the text track:\n\nOption descriptions:\n * `captions` - The text track is for captions.\n * `subtitles` - The text track is for subtitles.\n",
            "enum": [
              "captions",
              "subtitles"
            ],
            "example": "captions",
            "nullable": true,
            "type": "string"
          },
          "uri": {
            "description": "The relative URI of the text track.",
            "example": "/videos/258684937/texttracks/12345",
            "type": "string"
          }
        },
        "required": [
          "active",
          "hls_link",
          "hls_link_expires_time",
          "language",
          "link",
          "link_expires_time",
          "name",
          "type",
          "uri"
        ],
        "title": "Text Track",
        "type": "object"
      },
      "upload-attempt": {
        "properties": {
          "clip": {
            "allOf": [
              {
                "$ref": "#/components/schemas/video"
              }
            ],
            "description": "The video to upload."
          },
          "complete_uri": {
            "description": "The completion URI of the upload.",
            "example": "/users/152184/uploads/12345?video_file_id=5678&upgrade=true&signature=r394y347ffefeff434",
            "type": "string"
          },
          "form": {
            "description": "The HTML upload form.",
            "type": "string"
          },
          "ticket_id": {
            "description": "The ticket identifier string for the upload.",
            "example": "3da5dac09",
            "type": "string"
          },
          "upload_link": {
            "description": "The upload URL.",
            "example": "https://123456.cloud.vimeo.com/upload?ticket_id=1234asdf",
            "type": "string"
          },
          "uri": {
            "description": "The upload URI.",
            "example": "/users/152184/uploads/12345",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The owner of the uploaded video."
          }
        },
        "required": [
          "ticket_id",
          "upload_link",
          "uri",
          "user"
        ],
        "title": "Upload Attempt",
        "type": "object"
      },
      "user": {
        "properties": {
          "account": {
            "description": "The user's account type:\n\nOption descriptions:\n * `basic` - The user has a Vimeo Basic subscription.\n * `business` - The user has a Vimeo Business subscription.\n * `live_business` - The user has a Vimeo Business Live subscription.\n * `live_premium` - The user has a Vimeo Premium subscription.\n * `live_pro` - The user has a Vimeo PRO Live subscription.\n * `plus` - The user has a Vimeo Plus subscription.\n * `pro` - The user has a Vimeo Pro subscription.\n * `pro_unlimited` - The user has a Vimeo PRO Unlimited subscription.\n * `producer` - The user has a Vimeo Producer subscription.\n",
            "enum": [
              "basic",
              "business",
              "live_business",
              "live_premium",
              "live_pro",
              "plus",
              "pro",
              "pro_unlimited",
              "producer"
            ],
            "example": "basic",
            "type": "string"
          },
          "bio": {
            "description": "The user's bio.",
            "example": "This is where you will find videos and news updates from the staff.",
            "nullable": true,
            "type": "string"
          },
          "content_filter": {
            "description": "The user's content filters:\n\nOption descriptions:\n * `drugs` - Drugs or alcohol use.\n * `language` - Profanity or sexually suggestive content.\n * `nudity` - Nudity.\n * `safe` - Suitable for all audiences.\n * `unrated` - No rating.\n * `violence` - Violent or graphic content.\n",
            "enum": [
              "drugs",
              "language",
              "nudity",
              "safe",
              "unrated",
              "violence"
            ],
            "example": "drugs",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "created_time": {
            "description": "The time in ISO 8601 format when the user account was created.",
            "example": "2007-01-18T16:40:11+00:00",
            "type": "string"
          },
          "email": {
            "description": "The user's email address. This data requires a bearer token with the `email` scope.",
            "example": "user@example.com",
            "type": "string"
          },
          "link": {
            "description": "The absolute URL of this user's profile page.",
            "example": "https://vimeo.com/staff",
            "type": "string"
          },
          "location": {
            "description": "The user's location.",
            "example": "New York City",
            "nullable": true,
            "type": "string"
          },
          "metadata": {
            "description": "The user's metadata.",
            "properties": {
              "connections": {
                "description": "The list of resource URIs related to the user.",
                "properties": {
                  "albums": {
                    "description": "Information about the albums created by this user.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of albums on this connection.",
                        "example": 3,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/albums",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "appearances": {
                    "description": "Information about the appearances of this user in other videos.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of appearances on this connection.",
                        "example": 6,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/appearances",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "block": {
                    "description": "Information on the users that the current user has blocked. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of blocked users on this connection. This data requires a bearer token with the `private` scope.",
                        "example": 73,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/me/block",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "categories": {
                    "description": "Information about this user's followed categories.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of categories on this connection.",
                        "example": 5,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/categories",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "channels": {
                    "description": "Information about this user's subscribed channels.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of channels on this connection.",
                        "example": 4,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/channels",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "feed": {
                    "description": "Information about this user's feed.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/feed",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "folders": {
                    "description": "Information about this user's folders.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of folders on this connection.",
                        "example": 9,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/me/folders",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "followers": {
                    "description": "Information about the user's followers.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of followers on this connection.",
                        "example": 12,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/followers",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "following": {
                    "description": "Information about the users that the current user is following.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of users on this connection.",
                        "example": 47,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/following",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "groups": {
                    "description": "Information about the groups created by this user.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of groups on this connection.",
                        "example": 2,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/groups",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "likes": {
                    "description": "Information about the videos that this user has liked.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of likes on this connection.",
                        "example": 300,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/likes",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "moderated_channels": {
                    "description": "Information about the channels that this user moderates.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of channels on this connection.",
                        "example": 1,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/channels?filter=moderated",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "pictures": {
                    "description": "Information about this user's portraits.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of pictures on this connection.",
                        "example": 3,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/pictures",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "portfolios": {
                    "description": "Information about this user's portfolios.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of portfolios on this connection.",
                        "example": 5,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/portfolios",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "recommended_channels": {
                    "description": "A collection of recommended channels for the current user to follow. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of channels on this connection. This data requires a bearer token with the `private` scope.",
                        "example": 4,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/me/recommendations/channels",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "recommended_users": {
                    "description": "A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of users on this connection. This data requires a bearer token with the `private` scope.",
                        "example": 6,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/me/recommendations/users",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "shared": {
                    "description": "Information about the videos that have been shared with this user.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 15,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/shared/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "videos": {
                    "description": "Information about the videos uploaded by this user.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 36,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "watched_videos": {
                    "description": "Information about the videos that this user has watched.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 322,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/me/watched/videos",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "watchlater": {
                    "description": "Information about the videos that this user wants to watch later.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 14,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/watchlater",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "albums",
                  "appearances",
                  "block",
                  "categories",
                  "channels",
                  "feed",
                  "folders",
                  "followers",
                  "following",
                  "groups",
                  "likes",
                  "moderated_channels",
                  "pictures",
                  "portfolios",
                  "recommended_channels",
                  "recommended_users",
                  "shared",
                  "videos",
                  "watched_videos",
                  "watchlater"
                ],
                "type": "object"
              },
              "interactions": {
                "properties": {
                  "add_privacy_user": {
                    "properties": {
                      "options": {
                        "description": "An array of the HTTP methods permitted on this URI. This data requires a bearer token with the `private` scope.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data. This data requires a bearer token with the `private` scope.",
                        "example": "/channels/152184/privacy/users",
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "block": {
                    "description": "Information related to the block status of this user.",
                    "properties": {
                      "added": {
                        "description": "Whether a user is blocking the current user.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "added_time": {
                        "description": "The time in ISO 8601 format when the block occurred, or the null value if no block exists.",
                        "example": "2017-05-16T15:05:43+00:00",
                        "nullable": true,
                        "type": "string"
                      },
                      "options": {
                        "description": "An array of the HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The URI to block or unblock the user.",
                        "example": "/me/block/3766357",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "added_time",
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "follow": {
                    "description": "Information related to the followed status of this user.",
                    "properties": {
                      "added": {
                        "description": "Whether a user is following the current user.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "options": {
                        "description": "An array of the HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The URI to follow the user.",
                        "example": "/users/152184/following/3766357",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "report": {
                    "description": "Information regarding where and how to report a user.",
                    "properties": {
                      "options": {
                        "description": "An array of the HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "reason": {
                        "description": "List of valid reasons for reporting a video.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/users/152184/report",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "reason",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "block",
                  "follow",
                  "report"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections",
              "interactions"
            ],
            "type": "object"
          },
          "name": {
            "description": "The user's display name.",
            "example": "Vimeo Staff",
            "type": "string"
          },
          "pictures": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The active portrait of this user."
          },
          "preferences": {
            "properties": {
              "videos": {
                "properties": {
                  "privacy": {
                    "properties": {
                      "add": {
                        "description": "Whether other users can add the user's videos.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "comments": {
                        "description": "The user's privacy preference for comments:\n\nOption descriptions:\n * `anybody` - Anyone can comment on the user's videos.\n * `contacts` - Only contacts can comment on the user's videos.\n * `nobody` - No one can comment on the user's videos.\n",
                        "enum": [
                          "anybody",
                          "contacts",
                          "nobody"
                        ],
                        "example": "anybody",
                        "type": "string"
                      },
                      "download": {
                        "description": "Whether other users can download the user's videos.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "embed": {
                        "description": "The user's privacy preference for embeds:\n\nOption descriptions:\n * `private` - Only the user can embed their own videos.\n * `public` - Anyone can embed the user's videos.\n * `whitelist` - Only those on the whitelist can embed the user's videos.\n",
                        "enum": [
                          "private",
                          "public",
                          "whitelist"
                        ],
                        "example": "private",
                        "type": "string"
                      },
                      "view": {
                        "description": "The user's privacy preference for views:\n\nOption descriptions:\n * `anybody` - Anyone can view the user's videos.\n * `contacts` - Only contacts can view the user's videos.\n * `disable` - Views are disabled for the user's videos.\n * `nobody` - No one except the user can view the user's videos.\n * `password` - Only those with the password can view the user's videos.\n * `unlisted` - Anybody can view the user's videos if they have a link.\n * `users` - Only other Vimeo members can view the user's videos.\n",
                        "enum": [
                          "anybody",
                          "contacts",
                          "disable",
                          "nobody",
                          "password",
                          "unlisted",
                          "users"
                        ],
                        "example": "anybody",
                        "type": "string"
                      }
                    },
                    "type": "object"
                  }
                },
                "type": "object"
              }
            },
            "type": "object"
          },
          "resource_key": {
            "description": "The user's resource key string.",
            "example": "bac1033deba2310ebba2caec33c23e4beea67aba",
            "type": "string"
          },
          "upload_quota": {
            "description": "Appears only when the user has upload access and is looking at their own user record.",
            "properties": {
              "lifetime": {
                "description": "Information about the user's lifetime upload usage.",
                "properties": {
                  "free": {
                    "description": "The number of bytes remaining in your lifetime maximum.",
                    "example": 5000000,
                    "nullable": true,
                    "type": "number"
                  },
                  "max": {
                    "description": "The total number of bytes that you can upload across the lifetime of your account.",
                    "example": 5368709120,
                    "nullable": true,
                    "type": "number"
                  },
                  "used": {
                    "description": "The number of bytes that you've already uploaded against your lifetime limit.",
                    "example": 5368704120,
                    "nullable": true,
                    "type": "number"
                  }
                },
                "required": [
                  "free",
                  "max",
                  "used"
                ],
                "type": "object"
              },
              "periodic": {
                "description": "Information about the user's usage for the current period.",
                "properties": {
                  "free": {
                    "description": "The number of bytes remaining in your upload quota for the current period.",
                    "example": 5000000,
                    "nullable": true,
                    "type": "number"
                  },
                  "max": {
                    "description": "The total number of bytes that you can upload per period.",
                    "example": 5368709120,
                    "nullable": true,
                    "type": "number"
                  },
                  "reset_date": {
                    "description": "The time in ISO 8601 format when your upload quota resets.",
                    "example": "2029-03-13T02:35:13-04:00",
                    "nullable": true,
                    "type": "string"
                  },
                  "used": {
                    "description": "The number of bytes that you've already uploaded against your quota in the current period.",
                    "example": 5368704120,
                    "nullable": true,
                    "type": "number"
                  }
                },
                "required": [
                  "free",
                  "max",
                  "reset_date",
                  "used"
                ],
                "type": "object"
              },
              "space": {
                "description": "Information about the user's upload space remaining for the current period.",
                "properties": {
                  "free": {
                    "description": "The number of bytes remaining in your upload quota.",
                    "example": 5000000,
                    "type": "number"
                  },
                  "max": {
                    "description": "The maximum number of bytes allotted to your upload quota.",
                    "example": 5368709120,
                    "nullable": true,
                    "type": "number"
                  },
                  "showing": {
                    "description": "Whether the values of the upload_quota.space fields are for the lifetime quota or the periodic quota.",
                    "enum": [
                      "lifetime",
                      "periodic"
                    ],
                    "example": "lifetime",
                    "type": "string"
                  },
                  "used": {
                    "description": "The number of bytes that you've already uploaded against your quota.",
                    "example": 5368704120,
                    "type": "number"
                  }
                },
                "required": [
                  "free",
                  "max",
                  "showing",
                  "used"
                ],
                "type": "object"
              }
            },
            "required": [
              "lifetime",
              "periodic",
              "space"
            ],
            "type": "object"
          },
          "uri": {
            "description": "The user's canonical relative URI.",
            "example": "/users/152184",
            "type": "string"
          },
          "websites": {
            "description": "The user's websites.",
            "items": {
              "properties": {
                "description": {
                  "description": "The website's description.",
                  "example": "Follow us on Twitter!",
                  "nullable": true,
                  "type": "string"
                },
                "link": {
                  "description": "The URL of the website.",
                  "example": "https://twitter.com/vimeo",
                  "type": "string"
                },
                "name": {
                  "description": "The name of the website.",
                  "example": "Twitter",
                  "nullable": true,
                  "type": "string"
                }
              },
              "required": [
                "description",
                "link",
                "name"
              ],
              "type": "object"
            },
            "type": "array"
          }
        },
        "required": [
          "account",
          "bio",
          "created_time",
          "link",
          "location",
          "metadata",
          "name",
          "pictures",
          "resource_key",
          "upload_quota",
          "uri",
          "websites"
        ],
        "title": "User",
        "type": "object"
      },
      "video": {
        "properties": {
          "categories": {
            "description": "The categories to which this video belongs.",
            "items": {
              "$ref": "#/components/schemas/category"
            },
            "type": "array"
          },
          "content_rating": {
            "description": "The content ratings of this video.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "context": {
            "description": "The context of the video's subscription, if this video is part of a subscription.",
            "properties": {
              "action": {
                "description": "The contextual action:\n\nOption descriptions:\n * `Added to` - An Added To action.\n * `Appearance by` - An Appearance By action.\n * `Liked by` - A Liked By action.\n * `Uploaded by` - An Unloaded By action.\n",
                "enum": [
                  "Added to",
                  "Appearance by",
                  "Liked by",
                  "Uploaded by"
                ],
                "example": "Added to",
                "type": "string"
              },
              "resource": {
                "description": "The contextual resource: a user, group, or channel representation, or an object of a tag.",
                "nullable": true,
                "type": "object"
              },
              "resource_type": {
                "description": "The contextual resource type.",
                "example": "clip",
                "type": "string"
              }
            },
            "required": [
              "action",
              "resource",
              "resource_type"
            ],
            "type": "object"
          },
          "created_time": {
            "description": "The time in ISO 8601 format when the video was created.",
            "example": "2018-03-05T21:04:47+00:00",
            "type": "string"
          },
          "description": {
            "description": "A brief explanation of the video's content.",
            "example": "A celebration of 10 years of Staff Picks.",
            "nullable": true,
            "type": "string"
          },
          "duration": {
            "description": "The video's duration in seconds.",
            "example": 81,
            "type": "number"
          },
          "embed": {
            "allOf": [
              {
                "$ref": "#/components/schemas/embed-settings"
              }
            ],
            "description": "Information about embedding this video."
          },
          "height": {
            "description": "The video's height in pixels.",
            "example": 1080,
            "type": "number"
          },
          "language": {
            "description": "The video's primary language.",
            "example": "en-US",
            "nullable": true,
            "type": "string"
          },
          "last_user_action_event_date": {
            "description": "The time in ISO 8601 format when the user last modified the video.",
            "example": "2018-03-21T23:08:22+00:00",
            "nullable": true,
            "type": "string"
          },
          "license": {
            "description": "The [Creative Commons](http://creativecommons.org/licenses/) license used for the video:\n\nOption descriptions:\n * `by` - Attribution\n * `by-nc` - Attribution Non-Commercial\n * `by-nc-nd` - Attribution Non-Commercial No Derivatives\n * `by-nc-sa` - Attribution Non-Commercial Share Alike\n * `by-nd` - Attribution No Derivatives\n * `by-sa` - Attribution Share Alike\n * `cc0` - Public Domain Dedication\n",
            "enum": [
              "by",
              "by-nc",
              "by-nc-nd",
              "by-nc-sa",
              "by-nd",
              "by-sa",
              "cc0"
            ],
            "example": "by",
            "type": "string"
          },
          "link": {
            "description": "The link to the video.",
            "example": "https://vimeo.com/258684937",
            "type": "string"
          },
          "metadata": {
            "description": "The video's metadata.",
            "properties": {
              "connections": {
                "description": "A list of resource URIs related to the video.",
                "properties": {
                  "comments": {
                    "description": "Information about the comments on this video.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of comments on this connection.",
                        "example": 14,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/comments",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "credits": {
                    "description": "Information about the users credited in this video.",
                    "nullable": true,
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of users on this connection.",
                        "example": 4,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/credits",
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "likes": {
                    "description": "Information about the users who have liked this video.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of likes on this connection.",
                        "example": 230,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/likes",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "ondemand": {
                    "description": "Information about this video's ondemand data.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "resource_key": {
                        "description": "The On Demand connection resource key.",
                        "example": "bac1033deba2310ebba2caec33c23e4beea67aba",
                        "type": "string"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/ondemand/pages/61326",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "resource_key",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "pictures": {
                    "description": "Information about this video's thumbnails.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods allowed on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "Total number of thumbnails on this connection.",
                        "example": 1,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/pictures",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "playback": {
                    "description": "The DRM playback status connection for this video.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/playback",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "recommendations": {
                    "description": "The recommendations for this video.",
                    "nullable": true,
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods allowed on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/recommendations",
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "related": {
                    "description": "Related content for this video.",
                    "nullable": true,
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods allowed on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937?offset=10",
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "season": {
                    "description": "Information about the video's season.",
                    "properties": {
                      "name": {
                        "description": "The name of this season.",
                        "example": "Season 1",
                        "type": "string"
                      },
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/ondemand/pages/61326/season/12345",
                        "type": "string"
                      }
                    },
                    "required": [
                      "name",
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "texttracks": {
                    "description": "Information about this video's text tracks.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of text tracks on this connection.",
                        "example": 2,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/texttracks",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "trailer": {
                    "description": "Information about this video's VOD trailer.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "resource_key": {
                        "description": "The trailer connection resource key.",
                        "example": "bac1033deba2310ebba2caec33c23e4beea67aba",
                        "type": "string"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/ondemand/pages/61326/videos/12345",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "resource_key",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "users_with_access": {
                    "description": "Information about the user privacy of this video, if the video privacy is `users`.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of users on this connection.",
                        "example": 8,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/privacy/users",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "versions": {
                    "description": "Information about the versions of this video.",
                    "properties": {
                      "current_uri": {
                        "description": "The URI of the current version of the video.",
                        "example": "/videos/258684937/versions/12345",
                        "type": "string"
                      },
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of versions on this connection.",
                        "example": 3,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937/versions",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "comments",
                  "credits",
                  "likes",
                  "ondemand",
                  "pictures",
                  "playback",
                  "recommendations",
                  "related",
                  "season",
                  "texttracks",
                  "trailer",
                  "users_with_access",
                  "versions"
                ],
                "type": "object"
              },
              "interactions": {
                "description": "A list of resource URIs related to the video.",
                "properties": {
                  "buy": {
                    "description": "The Buy interaction for a On Demand video.",
                    "nullable": true,
                    "properties": {
                      "currency": {
                        "description": "The currency code for the current user's region.",
                        "example": "USD",
                        "nullable": true,
                        "type": "string"
                      },
                      "display_price": {
                        "description": "Formatted price to display to buy an On Demand video.",
                        "example": "5.99",
                        "nullable": true,
                        "type": "string"
                      },
                      "download": {
                        "description": "The user's download access to this On Demand video:\n\nOption descriptions:\n * `available` - The video is available for download.\n * `purchased` - The user has purchased the video.\n * `restricted` - The user isn't permitted to download the video.\n * `unavailable` - The video isn't available for download.\n",
                        "enum": [
                          "available",
                          "purchased",
                          "restricted",
                          "unavailable"
                        ],
                        "example": "available",
                        "type": "string"
                      },
                      "drm": {
                        "description": "Whether the video has DRM.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "link": {
                        "description": "The URL to buy the On Demand video on Vimeo.",
                        "example": "https://vimeo.com/ondemand/darbyforever",
                        "nullable": true,
                        "type": "string"
                      },
                      "price": {
                        "description": "The numeric value of the price for buying the On Demand video.",
                        "example": 5.99,
                        "nullable": true,
                        "type": "number"
                      },
                      "purchase_time": {
                        "description": "The time in ISO 8601 format when the On Demand video was purchased.",
                        "example": "2018-03-05T21:04:47+00:00",
                        "nullable": true,
                        "type": "string"
                      },
                      "stream": {
                        "description": "The user's streaming access to this On Demand video:\n\nOption descriptions:\n * `available` - The video is available for streaming.\n * `purchased` - The user has purchased the video.\n * `restricted` - The user isn't permitted to stream the video.\n * `unavailable` - The video isn't available for streaming\n",
                        "enum": [
                          "available",
                          "purchased",
                          "restricted",
                          "unavailable"
                        ],
                        "example": "available",
                        "type": "string"
                      },
                      "uri": {
                        "description": "The product URI to purchase the On Demand video.",
                        "example": "/ondemand/pages/61326/products/12345",
                        "nullable": true,
                        "type": "string"
                      }
                    },
                    "required": [
                      "currency",
                      "display_price",
                      "download",
                      "drm",
                      "link",
                      "price",
                      "purchase_time",
                      "stream",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "channel": {
                    "description": "When a video is referenced by a channel URI, if the user is a moderator of the channel, include information about removing the video from the channel.",
                    "nullable": true,
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "like": {
                    "description": "Information about whether the authenticated user has liked this video.",
                    "properties": {
                      "added": {
                        "description": "Whether the user has liked the video.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "added_time": {
                        "description": "The time in ISO 8601 format when the user liked the video.",
                        "type": "string"
                      },
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "added_time",
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "rent": {
                    "description": "The Rent interaction for an On Demand video.",
                    "nullable": true,
                    "properties": {
                      "currency": {
                        "description": "The currency code for the current user's region.",
                        "example": "USD",
                        "nullable": true,
                        "type": "string"
                      },
                      "display_price": {
                        "description": "Formatted price to display to rent an On Demand video.",
                        "example": "5.99",
                        "nullable": true,
                        "type": "string"
                      },
                      "drm": {
                        "description": "Whether the video has DRM.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "expires_time": {
                        "description": "The time in ISO 8601 format when the rental period for the video expires.",
                        "example": "2018-03-05T21:04:47+00:00",
                        "nullable": true,
                        "type": "string"
                      },
                      "link": {
                        "description": "The URL to rent the On Demand video on Vimeo.",
                        "example": "https://vimeo.com/ondemand/darbyforever",
                        "nullable": true,
                        "type": "string"
                      },
                      "price": {
                        "description": "The numeric value of the price for buying the On Demand video.",
                        "example": 5.99,
                        "nullable": true,
                        "type": "number"
                      },
                      "purchase_time": {
                        "description": "The time in ISO 8601 format when the On Demand video was rented.",
                        "example": "2018-09-16T09:02:40+00:00",
                        "nullable": true,
                        "type": "string"
                      },
                      "stream": {
                        "description": "The user's streaming access to this On Demand video:\n\nOption descriptions:\n * `available` - The video is available for streaming.\n * `purchased` - The user has purchased the video.\n * `restricted` - The user isn't permitted to stream the video.\n * `unavailable` - The video isn't available for streaming.\n",
                        "enum": [
                          "available",
                          "purchased",
                          "restricted",
                          "unavailable"
                        ],
                        "example": "available",
                        "type": "string"
                      },
                      "uri": {
                        "description": "The product URI to rent the On Demand video.",
                        "example": "/ondemand/pages/61326/products/12345",
                        "nullable": true,
                        "type": "string"
                      }
                    },
                    "required": [
                      "currency",
                      "display_price",
                      "drm",
                      "expires_time",
                      "link",
                      "price",
                      "purchase_time",
                      "stream",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "report": {
                    "description": "Information about where and how to report a video.",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "reason": {
                        "description": "A list of valid reasons for reporting a video.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "reason",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "subscribe": {
                    "description": "Subscription information for an On Demand video.",
                    "nullable": true,
                    "properties": {
                      "drm": {
                        "description": "Whether the video has DRM.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "expires_time": {
                        "description": "The time in ISO 8601 format when the subscription expires.",
                        "example": "2018-03-05T21:04:47+00:00",
                        "type": "string"
                      },
                      "purchase_time": {
                        "description": "The tine in ISO 8601 format when the subscription was purchased.",
                        "example": "2018-03-02T21:04:47+00:00",
                        "type": "string"
                      },
                      "stream": {
                        "description": "The stream type.",
                        "example": "purchased",
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "watched": {
                    "description": "Information about removing this video from the user's list of watched videos.",
                    "properties": {
                      "added": {
                        "description": "Whether the user has watched the video.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "added_time": {
                        "description": "The time in ISO 8601 format when the user watched the video.",
                        "type": "string"
                      },
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "added_time",
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  },
                  "watchlater": {
                    "description": "Information about whether this video appears on the authenticated user's Watch Later list.",
                    "properties": {
                      "added": {
                        "description": "Whether the user has added the video to their Watch later list.",
                        "example": "true",
                        "type": "boolean"
                      },
                      "added_time": {
                        "description": "The time in ISO 8601 format when the user added the video to their Watch Later list.",
                        "type": "string"
                      },
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "type": "string"
                      }
                    },
                    "required": [
                      "added",
                      "added_time",
                      "options",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "buy",
                  "channel",
                  "like",
                  "rent",
                  "report",
                  "watched",
                  "watchlater"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections",
              "interactions"
            ],
            "type": "object"
          },
          "modified_time": {
            "description": "The time in ISO 8601 format when the video metadata was last modified.",
            "example": "2018-09-16T09:02:40+00:00",
            "type": "string"
          },
          "name": {
            "description": "The video's title.",
            "example": "Celebrating 10 Years of Staff Picks",
            "type": "string"
          },
          "parent_folder": {
            "allOf": [
              {
                "$ref": "#/components/schemas/project"
              }
            ],
            "description": "Information about the folder that contains this video.",
            "nullable": true
          },
          "password": {
            "description": "The privacy-enabled password to watch this video. Only users can see their own video passwords. This data requires a bearer token with the `private` scope.",
            "example": "hunter1",
            "type": "string"
          },
          "pictures": {
            "allOf": [
              {
                "$ref": "#/components/schemas/picture"
              }
            ],
            "description": "The active picture for this video."
          },
          "privacy": {
            "description": "The video's privacy setting.",
            "properties": {
              "add": {
                "description": "Whether the video can be added to collections.",
                "example": "true",
                "type": "boolean"
              },
              "comments": {
                "description": "Who can comment on the video:\n\nOption descriptions:\n * `anybody` - Anyone can comment on the video.\n * `contacts` - Only contacts can comment on the video.\n * `nobody` - No one can comment on the video.\n",
                "enum": [
                  "anybody",
                  "contacts",
                  "nobody"
                ],
                "example": "anybody",
                "type": "string"
              },
              "download": {
                "description": "The video's download permission setting.",
                "example": "true",
                "type": "boolean"
              },
              "embed": {
                "description": "The video's embed permission setting:\n\nOption descriptions:\n * `private` - The video is private.\n * `public` - Anyone can embed the video.\n",
                "enum": [
                  "private",
                  "public"
                ],
                "example": "private",
                "type": "string"
              },
              "view": {
                "description": "The general privacy setting for the video:\n\nOption descriptions:\n * `anybody` - Anyone can view the video.\n * `contacts` - Only contacts can view the video.\n * `disable` - Hide from vimeo\n * `nobody` - No one besides the owner can view the video.\n * `password` - Anyone with the video's password can view the video.\n * `unlisted` - Not searchable from vimeo.com\n * `users` - Only people with a Vimeo account can view the video.\n",
                "enum": [
                  "anybody",
                  "contacts",
                  "disable",
                  "nobody",
                  "password",
                  "unlisted",
                  "users"
                ],
                "example": "anybody",
                "type": "string"
              }
            },
            "required": [
              "add",
              "comments",
              "download",
              "embed",
              "view"
            ],
            "type": "object"
          },
          "release_time": {
            "description": "The time in ISO 8601 format when the video was released.",
            "example": "2018-03-05T21:04:47+00:00",
            "type": "string"
          },
          "resource_key": {
            "description": "The resource key string of the video.",
            "example": "bac1033deba2310ebba2caec33c23e4beea67aba",
            "type": "string"
          },
          "spatial": {
            "description": "360 spatial data.",
            "properties": {
              "director_timeline": {
                "description": "360 director timeline.",
                "items": {
                  "properties": {
                    "pitch": {
                      "description": "The director timeline pitch, from -90 (minimum) to 90 (maximum).",
                      "example": 70,
                      "type": "number"
                    },
                    "roll": {
                      "description": "The director timeline roll.",
                      "example": 0,
                      "type": "number"
                    },
                    "time_code": {
                      "description": "The director timeline time code.",
                      "example": 300,
                      "type": "number"
                    },
                    "yaw": {
                      "description": "The director timeline yaw, from 0 (minimum) to 360 (maximum).",
                      "example": 125,
                      "type": "number"
                    }
                  },
                  "type": "object"
                },
                "type": "array"
              },
              "field_of_view": {
                "description": "The 360 field of view, from 30 (minimum) to 90 (maximum). The default is 50.",
                "example": 50,
                "nullable": true,
                "type": "number"
              },
              "projection": {
                "description": "The 360 spatial projection:\n\nOption descriptions:\n * `cubical` - The spatial projection is cubical.\n * `cylindrical` - The spatial projection is cylindrical.\n * `dome` - The spatial projection is dome-shaped.\n * `equirectangular` - The spatial projection is equirectangular.\n * `pyramid` - The spatial projection is pyramid-shaped.\n",
                "enum": [
                  "cubical",
                  "cylindrical",
                  "dome",
                  "equirectangular",
                  "pyramid"
                ],
                "example": "cubical",
                "nullable": true,
                "type": "string"
              },
              "stereo_format": {
                "description": "The 360 stereo format:\n\nOption descriptions:\n * `left-right` - The stereo format is left-right.\n * `mono` - The audio is monaural.\n * `top-bottom` - The stereo format is top-bottom.\n",
                "enum": [
                  "left-right",
                  "mono",
                  "top-bottom"
                ],
                "example": "left-right",
                "nullable": true,
                "type": "string"
              }
            },
            "required": [
              "director_timeline",
              "field_of_view",
              "projection",
              "stereo_format"
            ],
            "type": "object"
          },
          "stats": {
            "description": "A collection of stats associated with this video.",
            "properties": {
              "plays": {
                "description": "The current total number of times that the video has been played.",
                "example": 20,
                "nullable": true,
                "type": "number"
              }
            },
            "required": [
              "plays"
            ],
            "type": "object"
          },
          "status": {
            "description": "The status code for the availability of the video. This field is deprecated in favor of `upload` and `transcode`.\n\nOption descriptions:\n * `available` - The video is available.\n * `quota_exceeded` - The user's quota is exceeded with this video.\n * `total_cap_exceeded` - The user has exceeded their total cap with this video.\n * `transcode_starting` - Transcoding is beginning for the video.\n * `transcoding` - Transcoding is underway for the video.\n * `transcoding_error` - There was an error in transcoding the video.\n * `unavailable` - The video is unavailable.\n * `uploading` - The video is being uploaded.\n * `uploading_error` - There was an error in uploading the video.\n",
            "enum": [
              "available",
              "quota_exceeded",
              "total_cap_exceeded",
              "transcode_starting",
              "transcoding",
              "transcoding_error",
              "unavailable",
              "uploading",
              "uploading_error"
            ],
            "example": "available",
            "nullable": true,
            "type": "string"
          },
          "tags": {
            "description": "An array of all tags assigned to this video.",
            "items": {
              "$ref": "#/components/schemas/tag"
            },
            "type": "array"
          },
          "transcode": {
            "description": "The transcode information for a video upload.",
            "nullable": true,
            "properties": {
              "status": {
                "description": "Status code for this video's availability.",
                "enum": [
                  "complete",
                  "error",
                  "in_progress"
                ],
                "example": "complete",
                "type": "string"
              }
            },
            "type": "object"
          },
          "upload": {
            "description": "The upload information for this video.",
            "nullable": true,
            "properties": {
              "approach": {
                "description": "The approach for uploading the video.",
                "enum": [
                  "post",
                  "pull",
                  "streaming",
                  "tus"
                ],
                "example": "post",
                "type": "string"
              },
              "complete_uri": {
                "description": "The URI for completing the upload.",
                "type": "string"
              },
              "form": {
                "description": "The HTML form for uploading a video through the post approach.",
                "type": "string"
              },
              "link": {
                "description": "The link of the video to capture through the pull approach.",
                "type": "string"
              },
              "redirect_url": {
                "description": "The redirect URL for the upload app.",
                "type": "string"
              },
              "size": {
                "description": "The file size in bytes of the uploaded video.",
                "example": 60000,
                "type": "number"
              },
              "status": {
                "description": "The status code for the availability of the uploaded video:\n\nOption descriptions:\n * `complete` - The upload is complete.\n * `error` - The upload ended with an error.\n * `in_progress` - The upload is underway.\n",
                "enum": [
                  "complete",
                  "error",
                  "in_progress"
                ],
                "example": "complete",
                "type": "string"
              },
              "upload_link": {
                "description": "The link for sending video file data.",
                "type": "string"
              }
            },
            "required": [
              "status"
            ],
            "type": "object"
          },
          "uri": {
            "description": "The video's canonical relative URI.",
            "example": "/videos/258684937",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The video owner.",
            "nullable": true
          },
          "width": {
            "description": "The video's width in pixels.",
            "example": 1920,
            "type": "number"
          }
        },
        "required": [
          "categories",
          "content_rating",
          "context",
          "created_time",
          "description",
          "duration",
          "embed",
          "height",
          "language",
          "license",
          "link",
          "metadata",
          "modified_time",
          "name",
          "pictures",
          "privacy",
          "release_time",
          "resource_key",
          "spatial",
          "stats",
          "status",
          "tags",
          "transcode",
          "upload",
          "uri",
          "user",
          "width"
        ],
        "title": "Video",
        "type": "object"
      },
      "video-versions": {
        "properties": {
          "active": {
            "description": "Whether this video version is the currently active one.",
            "example": "true",
            "type": "boolean"
          },
          "app": {
            "allOf": [
              {
                "$ref": "#/components/schemas/api-app"
              }
            ],
            "description": "The API app associated with the video version."
          },
          "created_time": {
            "description": "The time in ISO 8601 for when the video version was created.",
            "example": "2018-03-05T21:04:47+00:00",
            "type": "string"
          },
          "duration": {
            "description": "The duration of the video version in seconds.",
            "example": 81,
            "nullable": true,
            "type": "number"
          },
          "filename": {
            "description": "The file name of the video version.",
            "example": "rev2.mp4",
            "type": "string"
          },
          "filesize": {
            "description": "The size in byes of the video version file.",
            "example": 4025322521,
            "nullable": true,
            "type": "number"
          },
          "metadata": {
            "description": "The video version's metadata.",
            "properties": {
              "connections": {
                "properties": {
                  "video": {
                    "description": "Data from video associated with version",
                    "properties": {
                      "options": {
                        "description": "An array of HTTP methods permitted on this URI.",
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "total": {
                        "description": "The total number of videos on this connection.",
                        "example": 5,
                        "type": "number"
                      },
                      "uri": {
                        "description": "The API URI that resolves to the connection data.",
                        "example": "/videos/258684937",
                        "type": "string"
                      }
                    },
                    "required": [
                      "options",
                      "total",
                      "uri"
                    ],
                    "type": "object"
                  }
                },
                "required": [
                  "video"
                ],
                "type": "object"
              }
            },
            "required": [
              "connections"
            ],
            "type": "object"
          },
          "modified_time": {
            "description": "The time in ISO 8601 format when the video version was last modified.",
            "example": "2018-09-16T09:02:40+00:00",
            "type": "string"
          },
          "play": {
            "allOf": [
              {
                "$ref": "#/components/schemas/play"
              }
            ],
            "description": "The Play representation."
          },
          "upload": {
            "description": "The upload information for this version.",
            "nullable": true,
            "properties": {
              "approach": {
                "description": "The approach for uploading the video.",
                "enum": [
                  "post",
                  "pull",
                  "streaming",
                  "tus"
                ],
                "example": "post",
                "type": "string"
              },
              "complete_uri": {
                "description": "The URI for completing the upload.",
                "type": "string"
              },
              "form": {
                "description": "The HTML form for uploading a video through the post approach.",
                "type": "string"
              },
              "link": {
                "description": "The link of the video to capture through the pull approach.",
                "type": "string"
              },
              "redirect_url": {
                "description": "The redirect URL for the upload app.",
                "type": "string"
              },
              "size": {
                "description": "The file size in bytes of the uploaded video.",
                "example": 60000,
                "type": "number"
              },
              "status": {
                "description": "The status code for the availability of the uploaded video:\n\nOption descriptions:\n * `complete` - The upload is complete.\n * `error` - The upload ended with an error.\n * `in_progress` - The upload is underway.\n",
                "enum": [
                  "complete",
                  "error",
                  "in_progress"
                ],
                "example": "complete",
                "type": "string"
              },
              "upload_link": {
                "description": "The link for sending video file data.",
                "type": "string"
              }
            },
            "required": [
              "status"
            ],
            "type": "object"
          },
          "upload_date": {
            "description": "The time in ISO 8601 format when the video version was uploaded.",
            "example": "2018-09-16T09:02:40+00:00",
            "nullable": true,
            "type": "string"
          },
          "uri": {
            "description": "The version's canonical relative URI.",
            "example": "/videos/258684937/versions/12345",
            "type": "string"
          },
          "user": {
            "allOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ],
            "description": "The owner of the video version.",
            "nullable": true
          }
        },
        "required": [
          "active",
          "app",
          "created_time",
          "duration",
          "filename",
          "filesize",
          "metadata",
          "modified_time",
          "play",
          "upload",
          "upload_date",
          "uri",
          "user"
        ],
        "title": "Video Versions",
        "type": "object"
      }
    },
    "securitySchemes": {
      "bearer": {
        "bearerFormat": "bearer",
        "scheme": "bearer",
        "type": "http"
      },
      "oauth2": {
        "flows": {
          "authorizationCode": {
            "authorizationUrl": "/oauth/authorize",
            "scopes": {
              "create": "Create new albums, channels, and so on",
              "delete": "Delete videos, albums, channels, and so on",
              "edit": "Edit existing videos, albums, channels, and so on",
              "email": "Access to email addresses",
              "interact": "Interact with Vimeo resources on a member's behalf, such as liking a video or following another member",
              "private": "Access private member data",
              "promo_codes": "Add, remove, and review Vimeo On Demand promotions",
              "public": "Access public member data",
              "purchase": "Purchase content",
              "purchased": "Access a member's Vimeo On Demand purchase history",
              "stats": "Access video stats",
              "upload": "Upload videos",
              "video_files": "Access video files belonging to members with a PRO subscription or higher"
            },
            "tokenUrl": "/oauth/access_token"
          },
          "clientCredentials": {
            "scopes": {
              "create": "Create new albums, channels, and so on",
              "delete": "Delete videos, albums, channels, and so on",
              "edit": "Edit existing videos, albums, channels, and so on",
              "email": "Access to email addresses",
              "interact": "Interact with Vimeo resources on a member's behalf, such as liking a video or following another member",
              "private": "Access private member data",
              "promo_codes": "Add, remove, and review Vimeo On Demand promotions",
              "public": "Access public member data",
              "purchase": "Purchase content",
              "purchased": "Access a member's Vimeo On Demand purchase history",
              "stats": "Access video stats",
              "upload": "Upload videos",
              "video_files": "Access video files belonging to members with a PRO subscription or higher"
            },
            "tokenUrl": "/oauth/authorize/client"
          }
        },
        "type": "oauth2"
      }
    }
  }
} as const
            