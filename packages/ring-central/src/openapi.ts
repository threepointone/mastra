
            export default {
  "openapi": "3.0.0",
  "info": {
    "description": "REST API for RingCentral Engage Digital",
    "termsOfService": "https://developer.ringcentral.com",
    "title": "RingCentral Engage Digital API",
    "version": "1.0.1",
    "contact": {
      "name": "RingCentral",
      "url": "https://developers.ringcentral.com/engage/api-products"
    }
  },
  "servers": [
    {
      "url": "https://{account_name}.api.{platform_hostname}/1.0",
      "description": "API server endpoint",
      "variables": {
        "account_name": {
          "default": "domain-name",
          "description": "Your own account name used as subdomain, it's the same as in the url of the engage digital service."
        },
        "platform_hostname": {
          "default": "engagement.dimelo.com",
          "description": "Depending on environment the base hostname is changing. In production, it's digital.ringcentral.com for NA customers and engagement.dimelo.com for historical customers. It's the same base hostname as in the url of engage digital service."
        }
      }
    }
  ],
  "x-tag-groups": [
    {
      "name": "Events & Notifications",
      "tags": [
        "Events",
        "Webhooks"
      ]
    },
    {
      "name": "Interactions",
      "popular": true,
      "tags": [
        "Attachments",
        "Bots",
        "Communities",
        "Contents",
        "Identities",
        "Identity Groups",
        "Intervention Comments",
        "Interventions",
        "Sources",
        "Survey Responses",
        "Surveys",
        "Threads"
      ]
    },
    {
      "name": "Provisioning",
      "tags": [
        "Categories",
        "CustomFields",
        "Locales",
        "Reply Assistant Entries",
        "Reply Assistant Groups",
        "Reply Assistant Versions",
        "Roles",
        "Settings",
        "Tags",
        "Teams",
        "Time Sheets",
        "Timezones",
        "Users",
        "Users Sources Permissions",
        "User Capacities",
        "User Signatures"
      ]
    },
    {
      "name": "Routing",
      "popular": true,
      "tags": [
        "Agent Status",
        "Channels",
        "Folders",
        "Presence Status",
        "Tasks",
        "Topologies"
      ]
    }
  ],
  "tags": [
    {
      "name": "Events"
    },
    {
      "name": "Webhooks"
    },
    {
      "name": "Attachments"
    },
    {
      "name": "Communities"
    },
    {
      "name": "Contents"
    },
    {
      "name": "Identities"
    },
    {
      "name": "Identity Groups"
    },
    {
      "name": "Intervention Comments"
    },
    {
      "name": "Interventions"
    },
    {
      "name": "Sources"
    },
    {
      "name": "Tasks"
    },
    {
      "name": "Threads"
    },
    {
      "name": "Categories"
    },
    {
      "name": "CustomFields"
    },
    {
      "name": "Locales"
    },
    {
      "name": "Reply Assistant Entries"
    },
    {
      "name": "Reply Assistant Groups"
    },
    {
      "name": "Reply Assistant Versions"
    },
    {
      "name": "Roles"
    },
    {
      "name": "Settings"
    },
    {
      "name": "Tags"
    },
    {
      "name": "Teams"
    },
    {
      "name": "Time Sheets"
    },
    {
      "name": "Timezones"
    },
    {
      "name": "Topologies"
    },
    {
      "name": "Users"
    },
    {
      "name": "Users Sources Permissions"
    },
    {
      "name": "User Capacities"
    },
    {
      "name": "User Signatures"
    },
    {
      "name": "Agent Status"
    },
    {
      "name": "Channels"
    },
    {
      "name": "Folders"
    },
    {
      "name": "Presence Status"
    },
    {
      "name": "Survey Responses"
    },
    {
      "name": "Surveys"
    },
    {
      "name": "Bots"
    }
  ],
  "paths": {
    "/topologies/{topologyId}/activate": {
      "put": {
        "description": "This method activates an existing topology from given attributes and renders it in case of success.\n\nAuthorization: Only users that have the right to manage topologies.",
        "operationId": "activateTopology",
        "parameters": [
          {
            "in": "path",
            "name": "topologyId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Topology"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Activating a topology",
        "tags": [
          "Topologies"
        ]
      }
    },
    "/topologies/{topologyId}": {
      "put": {
        "description": "This method updates an existing topology from given attributes and renders it in case of success.\n\nAuthorization: only users that have the right to manage topologies. Topology must be inactive or the response will return an error.",
        "operationId": "updateTopology",
        "parameters": [
          {
            "in": "path",
            "name": "topologyId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/CreateUpdateTopology"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Topology"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a topology",
        "tags": [
          "Topologies"
        ]
      },
      "delete": {
        "description": "This method destroys an existing topology. It renders topology itself. It renders a 404 if id is invalid.\n\nAuthorization: Only users that have the right to manage topologies.",
        "operationId": "deleteTopology",
        "parameters": [
          {
            "in": "path",
            "name": "topologyId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Topology"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a topology",
        "tags": [
          "Topologies"
        ]
      },
      "get": {
        "description": "This method renders a topology from given id.\n\nAuthorization: only users that have the right to manage topologies.",
        "operationId": "getTopology",
        "parameters": [
          {
            "in": "path",
            "name": "topologyId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Topology"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a topology from its id",
        "tags": [
          "Topologies"
        ]
      }
    },
    "/topologies": {
      "post": {
        "description": "This method creates a topology. In case of success it renders the topology, otherwise, it renders an error (422 HTTP code).\n\nAuthorization: Only users that have the right to manage topologies.",
        "operationId": "createTopology",
        "requestBody": {
          "required": true,
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/CreateUpdateTopology"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Created topology",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Topology"
                }
              }
            }
          }
        },
        "summary": "Creating a topology",
        "tags": [
          "Topologies"
        ]
      },
      "get": {
        "description": "This method renders all topologies ordered by name (in alphabetical order).\n\nAuthorization: Only users that have the right to manage topologies",
        "operationId": "getAllTopologies",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllTopologiesResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all topologies",
        "tags": [
          "Topologies"
        ]
      }
    },
    "/attachments": {
      "get": {
        "description": "This method renders attachments ordered by creation date (descending).",
        "operationId": "getAllAttachments",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "Search parameter for file extension (e.g. pdf, xlsx, jpg...)",
            "in": "query",
            "name": "extension",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Search parameter to get attachments created before a ISO 8601 datetime (inclusive)",
            "in": "query",
            "name": "created_before",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Search parameter to get attachments created after a ISO 8601 datetime (inclusive)",
            "in": "query",
            "name": "created_after",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllAttachmentsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all attachments",
        "tags": [
          "Attachments"
        ]
      },
      "post": {
        "description": "This method allows you to create an new attachment.",
        "operationId": "createAttachment",
        "requestBody": {
          "content": {
            "multipart/form-data:": {
              "schema": {
                "properties": {
                  "file": {
                    "format": "binary",
                    "type": "string"
                  },
                  "private": {
                    "enum": [
                      "true",
                      "=1"
                    ],
                    "type": "string"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Attachment"
                }
              }
            },
            "description": "Success"
          },
          "422": {
            "description": "Compose is not supported on this source (compose_disabled_on_source)"
          }
        },
        "summary": "Creating an attachment",
        "tags": [
          "Attachments"
        ]
      }
    },
    "/attachments/{attachmentId}": {
      "get": {
        "description": "This method renders an attachment from given id.",
        "operationId": "getAttachment",
        "parameters": [
          {
            "in": "path",
            "name": "attachmentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Attachment"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting an attachment from its id",
        "tags": [
          "Attachments"
        ]
      }
    },
    "/bots/engage": {
      "post": {
        "description": "This method is used to engage a thread from a bot. In case of success it renders the intervention, otherwise, it renders an error (422 HTTP code). This method opens intervention as the virtual agent user.",
        "operationId": "botEngage",
        "parameters": [
          {
            "description": "The content_id of the content for which you want to engage the bot.",
            "in": "query",
            "name": "content_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Intervention"
                }
              }
            },
            "description": "Success"
          },
          "422": {
            "description": "Unprocessable Entity"
          }
        },
        "summary": "Bot engage",
        "tags": [
          "Bots"
        ]
      }
    },
    "/bots/complete": {
      "post": {
        "description": "This method is used to complete an intervention from a bot (closing the intervention and completing the task). In case of success it renders 200, otherwise, it renders an error (422 HTTP code).",
        "operationId": "botComplete",
        "parameters": [
          {
            "description": "The intervention_id of the intervention that you want to complete.",
            "in": "query",
            "name": "intervention_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Wether if the thread should be closed at the same time.",
            "in": "query",
            "name": "close_thread",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BotCompleteResponse"
                }
              }
            },
            "description": "Success"
          },
          "422": {
            "description": "Unprocessable Entity"
          }
        },
        "summary": "Bot complete",
        "tags": [
          "Bots"
        ]
      }
    },
    "/bots/handover": {
      "post": {
        "description": "This method is used to handover a conversation between a bot and an agent. It handles 2 different cases, specific sources handover (Messenger for example, see Bots API doc) and handover between Virtual Agents and human agents. This method recategorizes the thread if the thread_category_ids parameter is provided.",
        "operationId": "handoverFromBotToAgent",
        "parameters": [
          {
            "description": "Who we are taking the conversation control from (either bot or agent).",
            "in": "query",
            "name": "from",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Who we are giving the convesation control to (either bot or agent).",
            "in": "query",
            "name": "to",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The type of handover (either type of channel or engage_virtual_agent).",
            "in": "query",
            "name": "type",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The foreign_id of the identity for which you want to do the handover (only for source specific handover).",
            "in": "query",
            "name": "identity_foreign_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The id of the Facebook's app that controls the Bot (only for source specific handover).",
            "in": "query",
            "name": "app_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The id of the intervention that we want to handover (only for Virtual Agent handover).",
            "in": "query",
            "name": "intervention_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "An array containing the new categories to set on the thread.",
            "explode": true,
            "in": "query",
            "name": "thread_category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "The string configured in the handover rules trigger field of the Virtual Agent.",
            "in": "query",
            "name": "trigger",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HandoverFromBotToAgentResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Bot handover",
        "tags": [
          "Bots"
        ]
      }
    },
    "/categories": {
      "get": {
        "description": "This method renders categories ordered by creation date (ascending).",
        "operationId": "getAllCategories",
        "parameters": [
          {
            "description": "To filter categories on given category ids (separated by commas).",
            "in": "query",
            "name": "ids",
            "example": "59248c4dae276a021cb296d2,ff0dc9ba250002871f7aabba",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter categories on given category parent id.",
            "in": "query",
            "name": "parent_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllCategoriesResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all categories",
        "tags": [
          "Categories"
        ]
      },
      "post": {
        "description": "This method creates a new team. In case of success it renders the created tag, otherwise, it renders an error (422 HTTP code).\n\nNote: The fields ​`mandatory`,​ `​multiple`,​ ​`post_qualification​`, `s​ource_ids`​ and `u​nselectable​` are accounted for only if the Category has no parent.\n\nAuthorization​: only users that can manage teams.",
        "operationId": "createCategory",
        "parameters": [
          {
            "description": "Category name.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "ID of parent category.",
            "in": "query",
            "name": "parent_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "displayed color for the category, see Category colors. ",
            "in": "query",
            "name": "color",
            "required": false,
            "schema": {
              "enum": [
                0,
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "type": "integer"
            }
          },
          {
            "description": "mandatory categorization (Boolean).",
            "in": "query",
            "name": "mandatory",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "allow to assign multiple child categories (Boolean).",
            "in": "query",
            "name": "multiple",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "post qualification (Boolean).",
            "in": "query",
            "name": "post_qualification",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "root category is unselectable (Boolean).",
            "in": "query",
            "name": "unselectable",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "List of source id.",
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Category"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a category",
        "tags": [
          "Categories"
        ]
      }
    },
    "/categories/{categoryId}": {
      "delete": {
        "description": "This method destroys an existing category. It renders the category itself. It renders a 404 if id is invalid.",
        "operationId": "deleteCategory",
        "parameters": [
          {
            "in": "path",
            "name": "categoryId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "ID of a category to recategorize (optional).",
            "in": "query",
            "name": "take_over_category_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Category"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a category",
        "tags": [
          "Categories"
        ]
      },
      "get": {
        "description": "This method renders a category from given id.",
        "operationId": "getCategory",
        "parameters": [
          {
            "in": "path",
            "name": "categoryId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Category"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a category from its id",
        "tags": [
          "Categories"
        ]
      },
      "put": {
        "description": "This method creates a new team. In case of success it renders the created tag, otherwise, it renders an error (422 HTTP code).\n\nNote: The fields ​`mandatory`,​ ​`multiple`,​ ​`post_qualification​`, `s​ource_ids​` and `u​nselectable​` are accounted for only if the Category has no parent.\n\nAuthorization​: only users that can manage teams.",
        "operationId": "updateCategory",
        "parameters": [
          {
            "in": "path",
            "name": "categoryId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Category name.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "ID of parent category.",
            "in": "query",
            "name": "parent_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "displayed color for the category, see Category colors. ",
            "in": "query",
            "name": "color",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "mandatory categorization (Boolean).",
            "in": "query",
            "name": "mandatory",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "allow to assign multiple child categories (Boolean).",
            "in": "query",
            "name": "multiple",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "post qualification (Boolean).",
            "in": "query",
            "name": "post_qualification",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "root category is unselectable (Boolean).",
            "in": "query",
            "name": "unselectable",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "List of source id.",
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Category"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a category",
        "tags": [
          "Categories"
        ]
      }
    },
    "/channels": {
      "get": {
        "description": "This method renders all channels ordered by date of creation.",
        "operationId": "getAllChannels",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllChannelsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all channels",
        "tags": [
          "Channels"
        ]
      }
    },
    "/channels/{channelId}": {
      "get": {
        "description": "This method renders a channel from given id.",
        "operationId": "getChannel",
        "parameters": [
          {
            "in": "path",
            "name": "channelId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Channel"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a channel from its id",
        "tags": [
          "Channels"
        ]
      },
      "put": {
        "description": "This method updates an existing channel from given attributes and renders it in case of success.\n\nAuthorization​: only users that are able to update channels.",
        "operationId": "updateChannel",
        "parameters": [
          {
            "in": "path",
            "name": "channelId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The name of the channel.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "An array containing id of each source assigned to a channel (multiple).",
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Number of tasks that can be assigned to agent by the routing before they are considered \"occupied\".",
            "in": "query",
            "name": "soft_capability",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "M​aximum number of tasks that can be assigned to agents.",
            "in": "query",
            "name": "hard_capability",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "this field defines the time before a task expires (in seconds).",
            "in": "query",
            "name": "task_timeout_seconds",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Agent SLA in seconds.",
            "in": "query",
            "name": "agent_sla",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Agent SLA warning threshold (must be greater than 0 and less than 100, default value is 0).",
            "in": "query",
            "name": "agent_sla_threshold",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Time before a task is auto completed (in seconds).",
            "in": "query",
            "name": "task_auto_complete_seconds",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "An array containing id of each category set when auto completing a task (multiple).",
            "in": "query",
            "name": "auto_complete_category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Channel"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a channel",
        "tags": [
          "Channels"
        ]
      }
    },
    "/communities": {
      "get": {
        "description": "This method renders communities ordered by creation date (ascending).",
        "operationId": "getAllCommunities",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllCommunitiesResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all communities",
        "tags": [
          "Communities"
        ]
      }
    },
    "/communities/{communityId}": {
      "get": {
        "description": "This method renders a community from given id.",
        "operationId": "getCommunity",
        "parameters": [
          {
            "in": "path",
            "name": "communityId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Community"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a community from its id",
        "tags": [
          "Communities"
        ]
      }
    },
    "/content_sources": {
      "get": {
        "description": "This method renders sources ordered by creation date (ascending).",
        "operationId": "getAllSources",
        "parameters": [
          {
            "description": "Filter by user permissions. Default on read for backward compatibility.",
            "in": "query",
            "name": "permission",
            "required": false,
            "schema": {
              "type": "string",
              "enum": [
                "read",
                "initiate_discussion"
              ]
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "Filter by active state",
            "in": "query",
            "name": "active",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllSourcesResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all sources",
        "tags": [
          "Sources"
        ]
      }
    },
    "/content_sources/{sourceId}": {
      "get": {
        "description": "This method renders a source from given id.",
        "operationId": "getSource",
        "parameters": [
          {
            "in": "path",
            "name": "sourceId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Source"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a source from its id",
        "tags": [
          "Sources"
        ]
      },
      "put": {
        "description": "This method updates an existing source from given attributes and renders it in case of success.",
        "operationId": "updateSource",
        "parameters": [
          {
            "in": "path",
            "name": "sourceId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Source name",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Activate/deactivate the source (Boolean)",
            "in": "query",
            "name": "active",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Channel",
            "in": "query",
            "name": "channel_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Color of the icon (see Source colors) (Integer)",
            "in": "query",
            "name": "color",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Business Hours (Limited to 1)",
            "in": "query",
            "name": "time_sheet_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Response time (seconds)",
            "in": "query",
            "name": "sla_response",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Customer SLA warning threshold (must be greater than 0 and less than 100, default value is 0).",
            "in": "query",
            "name": "sla_threshold",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Categories filtering strategy for Customer SLA indicator",
            "in": "query",
            "name": "sla_filtering_categories_strategy",
            "required": false,
            "schema": {
              "enum": [
                "ignored_categories",
                "selected_categories"
              ],
              "type": "string"
            }
          },
          {
            "description": "Filtering categories for Customer SLA indicator",
            "in": "query",
            "name": "sla_filtering_category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "SLA expired strategy (\"max\", \"half\" or \"base\")",
            "in": "query",
            "name": "sla_expired_strategy",
            "required": false,
            "schema": {
              "enum": [
                "max",
                "half",
                "base"
              ],
              "type": "string"
            }
          },
          {
            "description": "Attachments security level. (\"strict\", \"relaxed\", or \"permissive\"). Strict allows images and medias. Relaxed allows images, media and documents. Permissive allows all kind of attachments",
            "in": "query",
            "name": "attachments_security_level",
            "required": false,
            "schema": {
              "enum": [
                "strict",
                "relaxed",
                "permissive"
              ],
              "type": "string"
            }
          },
          {
            "description": "Priority boost of messages with intervention (Integer)",
            "in": "query",
            "name": "intervention_messages_boost",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Priority boost of transferred tasks (Integer)",
            "in": "query",
            "name": "transferred_tasks_boost",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Hide from statistics (Boolean)",
            "in": "query",
            "name": "hidden_from_stats",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Default categories",
            "in": "query",
            "name": "default_category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Default categories (agent messages)",
            "in": "query",
            "name": "user_thread_default_category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Signatures",
            "in": "query",
            "name": "signatures",
            "required": false,
            "schema": {
              "type": "array",
              "items": {
                "type": "object"
              },
              "example": [
                {
                  "body": "Hello World",
                  "language": "en"
                }
              ]
            }
          },
          {
            "description": "Automatic messages",
            "in": "query",
            "name": "auto_response_triggers",
            "required": false,
            "schema": {
              "type": "array",
              "items": {
                "type": "object"
              },
              "example": [
                {
                  "language": "en",
                  "created_from_trigger": "first_message_from_user",
                  "body": "Hello World"
                }
              ]
            }
          },
          {
            "description": "Enable answers to first messages",
            "in": "query",
            "name": "auto_response_trigger_enabled[first_message_from_user]",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Enable answers to messages outside business hours",
            "in": "query",
            "name": "auto_response_trigger_enabled[out_of_office_hours_message]",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Time between two messages (First message)",
            "in": "query",
            "name": "auto_response_trigger_grace_periods[first_message_from_user]",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Time between two messages (Message outside business hours)",
            "in": "query",
            "name": "auto_response_trigger_grace_periods[out_of_office_hours_message]",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Default content language",
            "in": "query",
            "name": "default_content_language",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Auto-detect content language (Boolean)",
            "in": "query",
            "name": "auto_detect_content_language",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Languages to detect",
            "in": "query",
            "name": "content_languages",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Automatic archiving of old contents (Boolean)",
            "in": "query",
            "name": "content_archiving",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Archive contents older than (seconds)",
            "in": "query",
            "name": "content_archiving_period",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Custom sender name. Only on sources which supports a custom sender name.",
            "in": "query",
            "name": "from_name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Default priority for interactions.",
            "in": "query",
            "name": "default_task_priority",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Only on Engage Messaging sources that are not on livechat mode. Enable or disable the source on Android.",
            "in": "query",
            "name": "enable_android",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Only on Engage Messaging sources that are not on livechat mode. Enable or disable the source on iOS.",
            "in": "query",
            "name": "enable_ios",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Only on Engage Messaging sources that are not on livechat mode. Enable or disable the source on the web.",
            "in": "query",
            "name": "enable_web",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Email address to synchronize. Only on Email sources",
            "in": "query",
            "name": "imap_smtp_email",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Folders to synchronize. Does not accept empty array or blank values. Only on Email sources.",
            "in": "query",
            "name": "imap_mailboxes_to_import",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Folder for 'Sent Mail'. Only on Email sources.",
            "in": "query",
            "name": "imap_mailbox_used_for_sent_mail",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "IMAP server address. Only on Email sources",
            "in": "query",
            "name": "imap_address",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "IMAP server port. Only on Email sources",
            "in": "query",
            "name": "imap_port",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "IMAP username. Only on Email sources",
            "in": "query",
            "name": "imap_username",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "IMAP password. Used when IMAP authentication type is `basic`. Only on Email sources",
            "in": "query",
            "name": "imap_password",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "IMAP OAuth 2.0 refresh token. Used when IMAP authentication type is `microsoft_identity_platform`. Only on Email sources",
            "in": "query",
            "name": "imap_oauth_refresh_token",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Use SSL/TLS protocol to establish secure IMAP connection. Only on Email sources",
            "in": "query",
            "name": "imap_use_ssl_tls",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Use STARTTLS protocol to establish secure IMAP connection. Only on Email sources",
            "in": "query",
            "name": "imap_use_start_tls",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "IMAP Authentication type (\"basic\" or \"microsoft_identity_platform\"). Only on Email sources",
            "in": "query",
            "name": "imap_authentication_type",
            "required": false,
            "schema": {
              "enum": [
                "basic",
                "microsoft_identity_platform"
              ],
              "type": "string"
            }
          },
          {
            "description": "IMAP SSL verification mode. (\"NONE\", \"PEER\", \"CLIENT_ONCE\" or \"FAIL_IF_NO_PEER_CERT\"). Only on Email sources",
            "in": "query",
            "name": "imap_ssl_verify_mode",
            "required": false,
            "schema": {
              "enum": [
                "NONE",
                "PEER",
                "CLIENT_ONCE",
                "FAIL_IF_NO_PEER_CERT"
              ],
              "type": "string"
            }
          },
          {
            "description": "SMTP server address. Only on Email sources",
            "in": "query",
            "name": "smtp_address",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "SMTP server port. Only on Email sources",
            "in": "query",
            "name": "smtp_port",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "SMTP username. Only on Email sources",
            "in": "query",
            "name": "smtp_username",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "SMTP password. Used when SMTP authentication type is `basic`. Only on Email sources",
            "in": "query",
            "name": "smtp_password",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "SMTP OAuth 2.0 refresh token. Used when SMTP authentication type is `microsoft_identity_platform`. Only on Email sources",
            "in": "query",
            "name": "smtp_oauth_refresh_token",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Use SSL/TLS protocol to establish secure SMTP connection. Only on Email sources",
            "in": "query",
            "name": "smtp_use_ssl_tls",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Use STARTTLS protocol to establish secure IMAP connection. Only on Email sources",
            "in": "query",
            "name": "smtp_use_start_tls",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "SMTP Authentication type (\"basic\" or \"microsoft_identity_platform\"). Only on Email sources",
            "in": "query",
            "name": "smtp_authentication_type",
            "required": false,
            "schema": {
              "enum": [
                "basic",
                "microsoft_identity_platform"
              ],
              "type": "string"
            }
          },
          {
            "description": "SMTP SSL verification mode. (\"NONE\", \"PEER\", \"CLIENT_ONCE\" or \"FAIL_IF_NO_PEER_CERT\"). Only on Email sources",
            "in": "query",
            "name": "smtp_ssl_verify_mode",
            "required": false,
            "schema": {
              "enum": [
                "NONE",
                "PEER",
                "CLIENT_ONCE",
                "FAIL_IF_NO_PEER_CERT"
              ],
              "type": "string"
            }
          },
          {
            "description": "Used to identify HELO/EHLO when connecting to the SMTP server. Only on Email sources",
            "in": "query",
            "name": "smtp_helo_domain",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Threading heuristics. Only on Email sources",
            "in": "query",
            "name": "threading_heuristics",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Common ancestors threading. Only on Email sources",
            "in": "query",
            "name": "common_ancestors_threading",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Spam threshold (\"disabled\", \"relaxed\", or \"strict\"). Only on Email sources",
            "in": "query",
            "name": "spam_assassin_level",
            "required": false,
            "schema": {
              "enum": [
                "disabled",
                "relaxed",
                "strict"
              ],
              "type": "string"
            }
          },
          {
            "description": "Whitelisted emails. All emails received from this address won't be threaded and can be associated with an anonymous identity or the Reply-To, if there is one. To be filled when implementing a form. Only on Email sources",
            "in": "query",
            "name": "whitelisted_emails",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Exclude from TO/CC. Only on Email sources",
            "in": "query",
            "name": "cc_blacklist",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Email parser (BBCode). Only on Email sources",
            "in": "query",
            "name": "email_parser",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Time for thread inclusion.",
            "in": "query",
            "name": "time_for_thread_inclusion",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Enable time for thread inclusion. Only on Email sources",
            "in": "query",
            "name": "time_for_thread_inclusion_enabled",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Source"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a source",
        "tags": [
          "Sources"
        ]
      }
    },
    "/content_sources/{sourceId}/email_credentials": {
      "put": {
        "description": "This method updates credentials for IMAP and SMTP adapters of email sources. In case of success it renders the content source, otherwise, it renders an error (422 HTTP code).",
        "operationId": "updateSourceEmailCredentials",
        "parameters": [
          {
            "in": "path",
            "name": "sourceId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "IMAP username",
            "in": "query",
            "name": "imap[username]",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "IMAP password",
            "in": "query",
            "name": "imap[password]",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "SMTP username",
            "in": "query",
            "name": "smtp[username]",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "SMTP password",
            "in": "query",
            "name": "smtp[password]",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Source"
                }
              }
            },
            "description": "Success"
          },
          "422": {
            "description": "Unprocessable Entity"
          }
        },
        "summary": "Updating source credentials",
        "tags": [
          "Sources"
        ]
      }
    },
    "/content_threads": {
      "get": {
        "description": "This method renders threads ordered by last content date (descending). Only threads in sources where token’s user has “read” permission are returned.\n\nAuthorization​: no.",
        "operationId": "getAllThreads",
        "parameters": [
          {
            "description": "A search query to filter threads. Please refer to ​Search & filtering parameters​ for more details.",
            "in": "query",
            "name": "q",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllThreadsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all threads",
        "tags": [
          "Threads"
        ]
      }
    },
    "/content_threads/{threadId}": {
      "get": {
        "description": "This method renders a thread from given id. If token’s user does not have “read” on thread’s source a 404 HTTP response will be returned.\n\nAuthorization​: no.",
        "operationId": "getThread",
        "parameters": [
          {
            "in": "path",
            "name": "threadId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Thread"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a thread from its id",
        "tags": [
          "Threads"
        ]
      }
    },
    "/content_threads/{threadId}/close": {
      "put": {
        "description": "Thread closure/opening is only available for the following sources:\n* Emails\n* Answers\n* Ideas\n* Facebook Messenger\n* Google+\n* Lithium\n* Mobile Messaging\n\nStarts a job to close a thread. It returns the thread but as the job is asynchronous, the state of the “close” attribute in the returned object do not is the one when the job started.\n\nIf token’s user does not have “read” on thread’s source a 404 HTTP response will be returned. Returns a 403 if the thread cannot be closed or if the user does not have the permission to close a thread.\n\nAuthorization​: no.",
        "operationId": "closeThread",
        "parameters": [
          {
            "in": "path",
            "name": "threadId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Thread"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Close a thread",
        "tags": [
          "Threads"
        ]
      }
    },
    "/content_threads/{threadId}/ignore": {
      "put": {
        "description": "Archives the contents of a thread. If token’s user does not have “read” on thread’s source a 404 HTTP response will be returned.\n\nIf the thread is already being archived, a 409 HTTP response will be returned.\n\nAuthorization​: no.",
        "operationId": "archiveThread",
        "parameters": [
          {
            "in": "path",
            "name": "threadId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Thread"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Archiving a thread",
        "tags": [
          "Threads"
        ]
      }
    },
    "/content_threads/{threadId}/open": {
      "get": {
        "description": "Thread closure/opening is only available for the following sources:\n\n* Emails\n* Answers\n* Ideas\n* Facebook Messenger\n* Google+\n* Lithium\n* Mobile Messaging\n\nStarts a job to open a thread. It returns the thread but as the job is asynchronous, the state of the “close” attribute in the returned object is the one when the job started.\n\nIf token’s user does not have “read” on thread’s source a 404 HTTP response will be returned. Returns a 403 if the thread cannot be opened or if the user does not have the permission to open a thread.\n\nAuthorization​: no.",
        "operationId": "openThread",
        "parameters": [
          {
            "in": "path",
            "name": "threadId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Thread"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Open a thread",
        "tags": [
          "Threads"
        ]
      }
    },
    "/content_threads/{threadId}/update_categories": {
      "put": {
        "description": "This method updates the categories of a thread. If token’s user does not have “read” on thread’s source a 404 HTTP response will be returned.\n\nIf the thread is already being categorized, a 409 HTTP response will be returned.\n\nAuthorization​: no.",
        "operationId": "categorizeThread",
        "parameters": [
          {
            "in": "path",
            "name": "threadId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "An array containing the new categories to set on the thread.",
            "explode": true,
            "in": "query",
            "name": "thread_category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Thread"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Categorizing a thread",
        "tags": [
          "Threads"
        ]
      }
    },
    "/contents": {
      "get": {
        "description": "This method renders contents ordered by creation date (descending). Only contents in sources where token’s user has “read” permission are returned.\n\nAuthorization​: no.",
        "operationId": "getAllContents",
        "parameters": [
          {
            "description": "To filter contents on given query. Query works exactly like threads query but only have those keywords: id, intervention, identity, identity_group, source, status_in, thread or text. Order can be created_at.desc (default) or created_at.asc. e.g. q=intervention:\"7f946431b6eebffafae642cc\"%20source:\"d19c81948c137d86dac77216\" Please refer to ​Search & filtering parameters​ for more details.",
            "in": "query",
            "name": "q",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllContentsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Contents",
        "tags": [
          "Contents"
        ]
      },
      "post": {
        "description": "This method allows you to create new content for use in discussions. It can be a reply to another piece of content or be used to initiate discussion. If authorized, the token’s user will be used as the content author. Content will be created in Engage Digital and pushed asynchronously to the source.\nReplying to a customer content is usually possible (unless the source/conversation is read only).\nComposing a content on the contrary depend on the source itself:\n* The source may not support it (and be purely reactive like Instagram, Messenger ...)\n* Some sources (usually public account) like Twitter or Facebook page allows to publish content without targeting specific individuals.\n* Some sources (usually non public media) require specific targeting (phone number for SMS, email address for email, customer_id ...) to be able to create a content. This is source specific and detailed under the generic parameters.\n\nAuthorization​: only users that can reply or initiate discussion (= compose) on given source. it renders also an error if in_reply_to isn’t synchronized or if in_reply_to content is not under an ​open intervention.",
        "operationId": "createContent",
        "parameters": [
          {
            "description": "The identity id of content. This parameter is not mandatory, by default it use the token’s user first identity on source.",
            "in": "query",
            "name": "author_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The content’s body. This parameter is mandatory.",
            "in": "query",
            "name": "body",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The content’s id you want to reply to. If omitted, a new discussion will be created. If source does not support to initiate discussion this parameter is mandatory.",
            "in": "query",
            "name": "in_reply_to_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Created contents are public by default, set this parameter to \"true\" in order to create a private reply. It is NOT supported on every source.",
            "in": "query",
            "name": "private",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The source to create content to. If you specify `in_reply_to_id` parameter, source will be determined from it. Otherwise, this parameter is mandatory.",
            "in": "query",
            "name": "source_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "An array containing the attachments’ ids that need to be attached to this content.",
            "explode": true,
            "in": "query",
            "name": "attachment_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Marks the message as automatically sent.",
            "in": "query",
            "name": "auto_submitted",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "For an email source. The subject of the email. This parameter is mandatory when initiating a discussion.",
            "in": "query",
            "name": "title",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "For a SMS, WhatsApp, Channel SDK, or Engage Messaging channel. For a WhatsApp message or a SMS, the number the message will be sent to. It must start with 00 or +, example: +33634231224 or 0033634231224. This parameter is mandatory when initiating a discussion. For a Channel SDK private content, the foreign_id of the identity to send the message to. The identity must have been imported in ED. For an Engage Messaging content, the foreign_id of the identity to send the message to. The oubound messaging option must be enabled. This parameter is mandatory when initiating a discussion and forbidden when replying to an existing message.",
            "in": "query",
            "name": "to",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "For an email source. An array containing the email addresses used in the “To” section of the email. This parameter is mandatory when initiating a discussion.",
            "explode": true,
            "in": "query",
            "name": "to[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "For an email source. An array containing the email addresses used in the “Cc” section of the email.",
            "explode": true,
            "in": "query",
            "name": "cc[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "For an email source. An array containing the email addresses used in the “Bcc” section of the email.",
            "explode": true,
            "in": "query",
            "name": "bcc[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Mandatory for a WhatsApp source. A discussion can only be initiated using a specific template created on the business manager and approved by WhatsApp. You can find all available template_names on /1.0/content_sources/source_id.",
            "explode": true,
            "in": "query",
            "name": "template_name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Mandatory for a WhatsApp source. A discussion can only be initiated using a specific template created on the business manager and approved by WhatsApp. You can find all available template_languages for a given template_name on /1.0/content_sources/source_id.",
            "explode": true,
            "in": "query",
            "name": "template_language",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Content"
                }
              }
            },
            "description": "Success"
          },
          "422": {
            "description": "Unprocessable Entity"
          }
        },
        "summary": "Creating content",
        "tags": [
          "Contents"
        ]
      }
    },
    "/contents/{contentId}": {
      "get": {
        "description": "This method renders a content from given id. If token’s user does not have “read” on content’s source a 404 HTTP response will be returned.\n\nAuthorization​: no.",
        "operationId": "getContent",
        "parameters": [
          {
            "in": "path",
            "name": "contentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Content"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a content from its id",
        "tags": [
          "Contents"
        ]
      }
    },
    "/contents/{contentId}/ignore": {
      "put": {
        "description": "Ignores a content. If token’s user does not have “read” on content’s source a 404 HTTP response will be returned.\n\nAuthorization​: no.",
        "operationId": "ignoreContent",
        "parameters": [
          {
            "in": "path",
            "name": "contentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Content"
                }
              }
            },
            "description": "Success"
          },
          "404": {
            "description": "Not Found"
          }
        },
        "summary": "Ignoring a content",
        "tags": [
          "Contents"
        ]
      }
    },
    "/contents/{contentId}/update_categories": {
      "put": {
        "description": "This method updates the categories of a content. If token’s user does not have “read” on this content’s source a 404 HTTP response will be returned.\n\nAuthorization​: no.",
        "operationId": "categorizeContent",
        "parameters": [
          {
            "in": "path",
            "name": "contentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "An array containing the new categories to set on the content.",
            "explode": true,
            "in": "query",
            "name": "category_ids[]",
            "required": true,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Content"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Categorizing a content",
        "tags": [
          "Contents"
        ]
      }
    },
    "/custom_fields": {
      "get": {
        "description": "This method renders custom fields ordered by position (ascending).\n\nAuthorization​: only users that can see custom fields in administration section.",
        "operationId": "getAllCustomFields",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllCustomFieldsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all custom fields",
        "tags": [
          "CustomFields"
        ]
      },
      "post": {
        "description": "This method creates a custom field. In case of success it renders the custom field, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that can create custom fields.",
        "operationId": "createCustomField",
        "parameters": [
          {
            "description": "The associated type of custom field. It can be IdentityGroup or Intervention.",
            "in": "query",
            "name": "associated_type_name",
            "required": true,
            "schema": {
              "enum": [
                "IdentityGroup",
                "Intervention"
              ],
              "type": "string"
            }
          },
          {
            "description": "The label of the custom field.",
            "in": "query",
            "name": "label",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The key of the custom field (example: customer_id). This is used to determine how it is stored on identity groups.",
            "in": "query",
            "name": "key",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The type of the custom field. It can be string, boolean, text, integer, float, single_choice,",
            "in": "query",
            "name": "type",
            "required": false,
            "schema": {
              "enum": [
                "string",
                "boolean",
                "text",
                "integer",
                "float",
                "single_choice",
                "multiple_choice"
              ],
              "type": "string"
            }
          },
          {
            "description": "A list of choices to be for single_choice, or multiple_choice types. This must be given",
            "explode": true,
            "in": "query",
            "name": "choices[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "true or false, this as no effect on single_choice, multiple_choice or boolean types",
            "in": "query",
            "name": "multiple",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "an integer that indicates custom field’s position between others (default: -1).",
            "in": "query",
            "name": "position",
            "required": false,
            "schema": {
              "default": -1,
              "type": "integer"
            }
          },
          {
            "description": "true or false, that indicates if the custom field is in read-only (default: false).",
            "in": "query",
            "name": "read_only",
            "required": false,
            "schema": {
              "default": false,
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CustomField"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a custom field",
        "tags": [
          "CustomFields"
        ]
      }
    },
    "/custom_fields/{customFieldId}": {
      "delete": {
        "description": "This method destroys an existing custom field. It renders custom field itself. It renders a 404 if id is invalid.\n\nAuthorization​: only users that are able to destroy custom fields..",
        "operationId": "deleteCustomField",
        "parameters": [
          {
            "in": "path",
            "name": "customFieldId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CustomField"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a custom field",
        "tags": [
          "CustomFields"
        ]
      },
      "get": {
        "description": "This method renders a custom field from given id.\n\nAuthorization​: only users that can see custom fields in administration section.",
        "operationId": "getCustomField",
        "parameters": [
          {
            "in": "path",
            "name": "customFieldId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CustomField"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a custom field from its id",
        "tags": [
          "CustomFields"
        ]
      },
      "put": {
        "description": "This method updates an existing custom field from given attributes and renders it in case of success.\n\nAuthorization​: only users that are able to update custom fields.",
        "operationId": "updateCustomField",
        "parameters": [
          {
            "in": "path",
            "name": "customFieldId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Custom field’s label.",
            "in": "query",
            "name": "label",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "explode": true,
            "in": "query",
            "name": "choices[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Custom field’s position.",
            "in": "query",
            "name": "position",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "true or false, that indicates if the custom field is in read-only (default: false).",
            "in": "query",
            "name": "read_only",
            "required": false,
            "schema": {
              "default": false,
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CustomField"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a custom field",
        "tags": [
          "CustomFields"
        ]
      }
    },
    "/events": {
      "get": {
        "description": "This method renders events ordered by creation date (descending).\n\nAuthorization​: Only users whose role can search event permission.",
        "operationId": "getAllEvents",
        "parameters": [
          {
            "description": "To filter events on given query. Query works exactly like threads query but only have those keywords: content, content_thread, name_in, created_before, created_after, user. Order can be created_at.desc (default) or created_at.asc. e.g. q=name_in:\"content.replied\"%20content_thread:\"7f946431b6eebffafae642cc\"%20created_after:\"2014-03-20\"%20user:\"4ee91f197aa58d01b500000f\"%20order:\"created_at.asc\"\n* DateTime parameters should be ISO-8601\n* you can specify multiple value for a given keyword: q=name_in:’content.replied’&name_in:’content.ignored’\nPlease refer to ​Search & filtering parameters​ for more details.",
            "in": "query",
            "name": "q",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllEventsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all events",
        "tags": [
          "Events"
        ]
      }
    },
    "/events/{eventId}": {
      "get": {
        "description": "This method renders an event from given id. If token’s user role does not have “search event” permission a 404 HTTP response will be returned.\n\nAuthorization​: Only users who’s role can search event permission.",
        "operationId": "getEvent",
        "parameters": [
          {
            "in": "path",
            "name": "eventId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Event"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting an event from its id",
        "tags": [
          "Events"
        ]
      }
    },
    "/folders": {
      "get": {
        "description": "This method renders folders (shared folders and search folders that belongs to the current user).",
        "operationId": "getAllFolders",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllFoldersResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all folders",
        "tags": [
          "Folders"
        ]
      },
      "post": {
        "description": "This method creates a new folder. In case of success it renders the created folder, otherwise an error (422 HTTP code).",
        "operationId": "createFolder",
        "parameters": [
          {
            "description": "Folder’s label (mandatory).",
            "in": "query",
            "name": "label",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "ID of the parent folder.",
            "in": "query",
            "name": "parent_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "position of the folder. ",
            "in": "query",
            "name": "position",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "query of the folder as described in ​Search API documentation.​\\n\\nExample: “​active_and_assigned_to_me:true”",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "boolean describing display of the number of threads. ",
            "in": "query",
            "name": "render_threads_count",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "list of roles allowed to see this folder. This parameter has to be a hash otherwise it will raise a 400 error. The key should be \"only\". For example: `&role_restriction[only][]=4e5596cdae70f677b5000002`",
            "in": "query",
            "name": "role_restriction[only][]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "list of teams allowed to see this folder. Same thing as role_restriction: team_restriction parameter has to be a hash with the key \"only\".",
            "in": "query",
            "name": "team_restriction[only][]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Folder"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a folder",
        "tags": [
          "Folders"
        ]
      }
    },
    "/folders/{folderId}": {
      "delete": {
        "description": "This method destroys an existing folder. It renders the folder itself. It renders a 404 if id is invalid.",
        "operationId": "deleteFolder",
        "parameters": [
          {
            "in": "path",
            "name": "folderId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Folder"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a folder",
        "tags": [
          "Folders"
        ]
      },
      "get": {
        "description": "This method renders a folder from given id.",
        "operationId": "getFolder",
        "parameters": [
          {
            "in": "path",
            "name": "folderId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Folder"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a folder from its id",
        "tags": [
          "Folders"
        ]
      },
      "put": {
        "description": "This method updates an existing folder from given attributes and renders it in case of success.",
        "operationId": "updateFolder",
        "parameters": [
          {
            "in": "path",
            "name": "folderId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Folder’s label (mandatory).",
            "in": "query",
            "name": "label",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "ID of the parent folder.",
            "in": "query",
            "name": "parent_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "position of the folder. ",
            "in": "query",
            "name": "position",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "query of the folder as described in ​Search API documentation.​\\n\\nExample: “​active_and_assigned_to_me:true”",
            "in": "query",
            "name": "query",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "boolean describing display of the number of threads. ",
            "in": "query",
            "name": "render_threads_count",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "list of roles allowed to see this folder. This parameter has to be a hash otherwise it will raise a 400 error. The key should be \"only\". For example: `&role_restriction[only][]=4e5596cdae70f677b5000002`",
            "in": "query",
            "name": "role_restriction[only][]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "list of teams allowed to see this folder. Same thing as role_restriction: team_restriction parameter has to be a hash with the key \"only\".",
            "in": "query",
            "name": "team_restriction[only][]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Folder"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a folder",
        "tags": [
          "Folders"
        ]
      }
    },
    "/identities": {
      "get": {
        "description": "This method renders identities ordered by creation date (descending). Only identities in sources where token’s user has “read” permission are returned.",
        "operationId": "getAllIdentities",
        "parameters": [
          {
            "description": "To filter identities on given community id.",
            "in": "query",
            "name": "community_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter identities on given source's community. Not used if community_id is provided.",
            "in": "query",
            "name": "source_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter on given group id.",
            "in": "query",
            "name": "identity_group_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter identities on given group ids (separated by commas).",
            "in": "query",
            "name": "identity_group_ids",
            "example": "64fb04186c98bd4ebe19cb24,64fab8d26c98bd7ab989b335",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter identities on given user id.",
            "in": "query",
            "name": "user_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To change the criteria chosen to sort the identities. The value can be “created_at” or",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "created_at",
                "updated_at"
              ],
              "type": "string"
            }
          },
          {
            "description": "To filter identities on given user id",
            "in": "query",
            "name": "foreign_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter identities on given uuid",
            "in": "query",
            "name": "uuid",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllIdentitiesResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all identities",
        "tags": [
          "Identities"
        ]
      }
    },
    "/identities/{identityId}": {
      "get": {
        "description": "This method renders an identity from given id. If token’s user does not have “read” on identity’s source community a 404 HTTP response will be returned.",
        "operationId": "getIdentity",
        "parameters": [
          {
            "in": "path",
            "name": "identityId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Identity"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting an identity from its id",
        "tags": [
          "Identities"
        ]
      }
    },
    "/identities/import": {
      "post": {
        "description": "This method imports an identity. The identity created or matching the identifier criteria will be returned. Identity import is only available for the following communities: Email, Phone. Emails identities import the following fields: company, firstname, gender, home_phone, lastname, mobile_phone, screenname, extra_values[extra_value_key] Phone identities only import the following fields: company, firstname, gender, lastname, extra_values[extra_value_key]. screenname and mobile_phone are automatically set to the identifier parameter sanitized value. identifier value must be an international phone number, it will be sanitized so \"+336.23.45.67.89\" will be stored as \"33623456789\".",
        "operationId": "importIdentity",
        "parameters": [
          {
            "description": "The community of the identity. Optional if source_id is provided.",
            "in": "query",
            "name": "community_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The source of the identity. Not used if community_id is provided.",
            "in": "query",
            "name": "source_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The identifier representing the identity on the community (email address for emails communities, phone number with international format for phone communities).",
            "in": "query",
            "name": "identifier",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "If present and an identity with the provided identifier is already existing, it'll be updated. Otherwise, the following parameters will be used only during an identity creation.",
            "in": "query",
            "name": "upsert",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Identity company.",
            "in": "query",
            "name": "company",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity firstname.",
            "in": "query",
            "name": "firstname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity’s gender. It can be \"man\", \"woman\" or empty.",
            "in": "query",
            "name": "gender",
            "required": false,
            "schema": {
              "enum": [
                "man",
                "woman"
              ],
              "type": "string"
            }
          },
          {
            "description": "Identity home phone.",
            "in": "query",
            "name": "home_phone",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity lastname.",
            "in": "query",
            "name": "lastname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity mobile phone.",
            "in": "query",
            "name": "mobile_phone",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity screenname.",
            "in": "query",
            "name": "screenname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity extra_values with key « extra_value ».",
            "in": "query",
            "name": "extra_values[extra_value_key]",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "201": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Identity"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Importing an identity",
        "tags": [
          "Identities"
        ]
      }
    },
    "/identity_groups": {
      "get": {
        "description": "This method renders identity groups ordered by creation date (descending). Note that identity_group are created in a lazily only when data are manually added to an identity OR a two identity are merged altogether. That means that some identity DON’T have identity_group, and identity_group do not cover all identities.\n\nAuthorization​: no.",
        "operationId": "getAllIdentityGroups",
        "parameters": [
          {
            "description": "To filter groups on given firstname.",
            "in": "query",
            "name": "firstname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter groups on given lastname.",
            "in": "query",
            "name": "lastname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter groups that have given email.",
            "in": "query",
            "name": "email",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter groups that have given uuid.",
            "in": "query",
            "name": "uuid",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter groups on given group ids (separated by commas).",
            "in": "query",
            "name": "ids",
            "example": "59248c4dae276a021cb296d2,ff0dc9ba250002871f7aabba",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To change the criteria chosen to sort the identities. The value can be “created_at” or “updated_at”.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "created_at",
                "updated_at"
              ],
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllIdentityGroupsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all identity groups",
        "tags": [
          "Identity Groups"
        ]
      }
    },
    "/identity_groups/{identityGroupId}": {
      "get": {
        "description": "This method renders an identity group from given id.",
        "operationId": "getIdentityGroup",
        "parameters": [
          {
            "in": "path",
            "name": "identityGroupId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityGroup"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting an identity group from its id",
        "tags": [
          "Identity Groups"
        ]
      },
      "put": {
        "description": "This method updates an identity group from given attributes and renders it in case of success.\n\nAuthorization​: no.",
        "operationId": "updateIdentityGroup",
        "parameters": [
          {
            "in": "path",
            "name": "identityGroupId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity company.",
            "in": "query",
            "name": "company",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity custom field with key « custom_field_key ». It",
            "in": "query",
            "name": "custom_field_values[custom_field_key]",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity emails (multiple).",
            "explode": true,
            "in": "query",
            "name": "emails[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Identity firstname.",
            "in": "query",
            "name": "firstname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity’s gender. It can be \"man\", \"woman\" or empty.",
            "in": "query",
            "name": "gender",
            "required": false,
            "schema": {
              "enum": [
                "man",
                "woman"
              ],
              "type": "string"
            }
          },
          {
            "description": "Identity home phones (mutiple).",
            "explode": true,
            "in": "query",
            "name": "home_phones[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Identity lastname.",
            "in": "query",
            "name": "lastname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity mobile phones (multiple).",
            "explode": true,
            "in": "query",
            "name": "mobile_phones[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Identity notes.",
            "in": "query",
            "name": "notes",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Identity tag ids (multiple).",
            "explode": true,
            "in": "query",
            "name": "tag_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityGroup"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating an identity group",
        "tags": [
          "Identity Groups"
        ]
      }
    },
    "/identity_groups/{identityGroupId}/merge": {
      "put": {
        "description": "This method merges an identity into an identity group. In case of conflicts, the attributes of the identity group will be kept. The identity group will be returned.\nAuthorization​: only users which can update identities.",
        "operationId": "mergeIdentityGroup",
        "parameters": [
          {
            "in": "path",
            "name": "identityGroupId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The identity which will be merged into the identity group.",
            "in": "query",
            "name": "associated_identity_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/IdentityGroup"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Merging an identity into an identity group",
        "tags": [
          "Identity Groups"
        ]
      }
    },
    "/interface_locales": {
      "get": {
        "description": "This method renders all available locales for user interface.",
        "operationId": "getAllUiLocales",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/UiLocale"
                  },
                  "type": "array"
                }
              }
            },
            "description": "List of all UI locales"
          }
        },
        "summary": "Getting all user interface locales",
        "tags": [
          "Locales"
        ]
      }
    },
    "/intervention_comments": {
      "get": {
        "description": "This method renders interventions comments ordered by creation date (descending). Only comments in sources where token’s user has “read” permission are returned.\n\nAuthorization​: no.",
        "operationId": "getAllInterventionComments",
        "parameters": [
          {
            "description": "To filter comments on given intervention id.",
            "in": "query",
            "name": "intervention_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter comments on given thread id.",
            "in": "query",
            "name": "thread_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter comments on given user id.",
            "in": "query",
            "name": "user_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter comments on given identity id.",
            "in": "query",
            "name": "identity_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllInterventionCommentsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all intervention comments",
        "tags": [
          "Intervention Comments"
        ]
      },
      "post": {
        "description": "This method creates a new intervention comment. In case of success it renders the created comment, otherwise, it renders an error (422 HTTP code). It creates comment as token’s user. If token’s user does not have “read” on given intervention’s source a 404 HTTP response will be returned.",
        "operationId": "createInterventionComment",
        "parameters": [
          {
            "description": "The comment body (mandatory).",
            "in": "query",
            "name": "body",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The comment intervention id (mandatory).",
            "in": "query",
            "name": "intervention_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The comment user id (mandatory).",
            "in": "query",
            "name": "user_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InterventionComment"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating an intervention comment",
        "tags": [
          "Intervention Comments"
        ]
      }
    },
    "/intervention_comments/{interventionCommentId}": {
      "delete": {
        "description": "This method destroys an intervention comment. It renders comment itself. If token’s user does not have “read” on comment’s source a 404 HTTP response will be returned.\n\nAuthorization​: no.",
        "operationId": "deleteInterventionComment",
        "parameters": [
          {
            "in": "path",
            "name": "interventionCommentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InterventionComment"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting an intervention comment",
        "tags": [
          "Intervention Comments"
        ]
      },
      "get": {
        "description": "This method renders an intervention comment from given id. If token’s user does not have “read” on comment’s source a 404 HTTP response will be returned.",
        "operationId": "getInterventionComment",
        "parameters": [
          {
            "in": "path",
            "name": "interventionCommentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InterventionComment"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting an intervention comment from its id",
        "tags": [
          "Intervention Comments"
        ]
      }
    },
    "/interventions": {
      "get": {
        "description": "This method renders interventions ordered by creation date (descending). Only interventions in sources where token’s user has “read” permission are returned.\n\nAuthorization​: no.",
        "operationId": "getAllInterventions",
        "parameters": [
          {
            "description": "To filter interventions on given thread id.",
            "in": "query",
            "name": "thread_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter interventions on given user id.",
            "in": "query",
            "name": "user_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter interventions on given identity_group_id. This will return interventions associated to any identity in the identity_group.",
            "in": "query",
            "name": "identity_group_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter interventions on given identity_id(s). Can be a single value or an array of string.",
            "explode": true,
            "in": "query",
            "name": "identity_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter on the intervention status. Possible values are:\n - active (open but not deferred)\n - closed\n - deferred\n - opened\n - reopened",
            "in": "query",
            "name": "status",
            "required": false,
            "schema": {
              "enum": [
                "active",
                "closed",
                "deferred",
                "opened",
                "reopened"
              ]
            }
          },
          {
            "description": "To change the criteria chosen to sort the interventions. The value can be “created_at” or “updated_at”.",
            "in": "query",
            "name": "sort",
            "required": false,
            "schema": {
              "enum": [
                "created_at",
                "updated_at"
              ],
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllInterventionsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all interventions",
        "tags": [
          "Interventions"
        ]
      },
      "post": {
        "description": "This method creates a new intervention or reopen it. In case of success it renders the intervention, otherwise, it renders an error (422 HTTP code). This method opens intervention as access token’s user.\n\nAuthorization​: no, but it renders an error if intervention can’t be created or reopened (already opened, etc.).",
        "operationId": "createIntervention",
        "parameters": [
          {
            "description": "The content to create intervention on (mandatory).",
            "in": "query",
            "name": "content_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Intervention"
                }
              }
            },
            "description": "Success"
          },
          "422": {
            "description": "Unprocessable Entity"
          }
        },
        "summary": "Creating an intervention",
        "tags": [
          "Interventions"
        ]
      }
    },
    "/interventions/{interventionId}": {
      "get": {
        "description": "This method renders an intervention from given id. If token’s user does not have “read” on intervention’s source a 404 HTTP response will be returned.\n\nAuthorization​: no.",
        "operationId": "getIntervention",
        "parameters": [
          {
            "in": "path",
            "name": "interventionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Intervention"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting an intervention from its id",
        "tags": [
          "Interventions"
        ]
      },
      "put": {
        "description": "This method updates intervention from given attributes and renders it in case of success.\n\nAuthorization​: no.",
        "operationId": "updateIntervention",
        "parameters": [
          {
            "in": "path",
            "name": "interventionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Intervention custom field with key \"custom_field_key\". It can be multiple if custom field is multiple or is has multiple_choice type.",
            "in": "query",
            "name": "custom_field_values[custom_field_key]",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Intervention"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating an intervention from its id",
        "tags": [
          "Interventions"
        ]
      }
    },
    "/interventions/{interventionId}/cancel": {
      "delete": {
        "description": "This method cancels (destroys) an intervention. It renders intervention itself. If token’s user does not have “read” on intervention’s source a 404 HTTP response will be returned.\n\nCaveats:\n\n* If the intervention is already being canceled, it will return a 409 error.\n* To be able to close an intervention, it must meet the following criteria otherwise a 403 will be raised:\n  * Intervention MUST NOT already be closed\n * Intervention MUST NOT have agent replies\n  * Access-Token agent MUST have read access on the source\n\nAuthorization​: no, but it renders an error if intervention can’t be destroyed (see caveats).",
        "operationId": "cancelIntervention",
        "parameters": [
          {
            "in": "path",
            "name": "interventionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Intervention"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Cancelling an intervention",
        "tags": [
          "Interventions"
        ]
      }
    },
    "/interventions/{interventionId}/close": {
      "put": {
        "description": "This method closes an intervention. Caveats:\n\n* If the intervention is already being closed, it will return a 409 error.\n* To be able to close an intervention, it must meet the following criteria otherwise a 403 will be raised:\n\n  * Intervention MUST NOT already be closed\n\n  * Intervention MUST have agent replies\n  * Access-Token agent MUST be the owner of the intervention or have the permission to edit permissions\n\n  * Access-Token agent MUST have read access on the source\n\nAuthorization​: no, but it renders an error if intervention can’t be closed (see caveats)",
        "operationId": "closeIntervention",
        "parameters": [
          {
            "in": "path",
            "name": "interventionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Intervention"
                }
              }
            },
            "description": "Success"
          },
          "409": {
            "description": "If the intervention is already being closed, it will return a 409 error."
          }
        },
        "summary": "Closing an intervention",
        "tags": [
          "Interventions"
        ]
      }
    },
    "/interventions/{interventionId}/reassign": {
      "put": {
        "description": "This method updates the user in charge of the intervention\n\nAuthorization​: Only users who can update interventions.",
        "operationId": "reassignIntervention",
        "parameters": [
          {
            "in": "path",
            "name": "interventionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "user_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Intervention"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Reassigning an intervention",
        "tags": [
          "Interventions"
        ]
      }
    },
    "/interventions/{interventionId}/update_categories": {
      "put": {
        "description": "This method updates the categories of an intervention. If token’s user does not have “read” on the intervention’s source a 404 HTTP response will be returned.\n\nAuthorization​: no.",
        "operationId": "categorizeIntervention",
        "parameters": [
          {
            "in": "path",
            "name": "interventionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "category_ids[]",
            "required": true,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Intervention"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Categorizing an intervention",
        "tags": [
          "Interventions"
        ]
      }
    },
    "/locales": {
      "get": {
        "description": "This method renders all available locales for contents.",
        "operationId": "getAllLocales",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/Locale"
                  },
                  "type": "array"
                }
              }
            },
            "description": "List of all content locales"
          }
        },
        "summary": "Getting all content locales",
        "tags": [
          "Locales"
        ]
      }
    },
    "/presence_status": {
      "get": {
        "description": "This method renders all presence statuses ordered by name (in alphabetical order).",
        "operationId": "getAllPresenceStatus",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllPresenceStatusResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all presence statuses",
        "tags": [
          "Presence Status"
        ]
      },
      "post": {
        "description": "This method creates a presence status. In case of success it renders the presence status, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that have the right to monitor the task view.",
        "operationId": "createPresenceStatus",
        "parameters": [
          {
            "description": "The name of the presence status.",
            "in": "query",
            "name": "name",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PresenceStatus"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a presence status",
        "tags": [
          "Presence Status"
        ]
      }
    },
    "/presence_status/{presenceStatusId}": {
      "delete": {
        "description": "This method destroys an existing presence status. It renders presence status itself. It renders a 404 if id is invalid.\n\nAuthorization​: only users that have the right to monitor the task view.",
        "operationId": "deletePresenceStatus",
        "parameters": [
          {
            "in": "path",
            "name": "presenceStatusId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PresenceStatus"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a presence status",
        "tags": [
          "Presence Status"
        ]
      },
      "get": {
        "description": "This method renders a presence status from given id.\n\nAuthorization​: only users that have the right to monitor the task view.",
        "operationId": "getPresenceStatus",
        "parameters": [
          {
            "in": "path",
            "name": "presenceStatusId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PresenceStatus"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a presence status from its id",
        "tags": [
          "Presence Status"
        ]
      },
      "put": {
        "description": "This method updates an existing presence status from given attributes and renders it in case of success.\n\nAuthorization​: only users that have the right to monitor the task view.",
        "operationId": "updatePresenceStatus",
        "parameters": [
          {
            "in": "path",
            "name": "presenceStatusId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The name of the presence status.",
            "in": "query",
            "name": "name",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PresenceStatus"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a presence status",
        "tags": [
          "Presence Status"
        ]
      }
    },
    "/reply_assistant/entries": {
      "get": {
        "description": "This method renders all entries ordered by creation date (ascending).\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "getAllReplyAssistantEntries",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllReplyAssistantEntriesResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting​ a​ll​ reply assistant e​ntries",
        "tags": [
          "Reply Assistant Entries"
        ]
      },
      "post": {
        "description": "This method creates a reply assistant entry. In case of success it renders the entry, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "createReplyAssistantEntry",
        "parameters": [
          {
            "description": "The name of the entry.",
            "in": "query",
            "name": "label",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantEntry"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating an entry",
        "tags": [
          "Reply Assistant Entries"
        ]
      }
    },
    "/reply_assistant/entries/{replyAssistantEntryId}": {
      "delete": {
        "description": "This method destroys an existing entry. It renders the entry itself. It renders a 404 if id is invalid.\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "deleteReplyAssistantEntry",
        "parameters": [
          {
            "in": "path",
            "name": "replyAssistantEntryId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantEntry"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a reply assistant entry",
        "tags": [
          "Reply Assistant Entries"
        ]
      },
      "get": {
        "description": "This method renders an entry from given id.\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "getReplyAssistantEntry",
        "parameters": [
          {
            "in": "path",
            "name": "replyAssistantEntryId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantEntry"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a reply assistant entry from its id",
        "tags": [
          "Reply Assistant Entries"
        ]
      },
      "put": {
        "description": "This method updates an existing entry from given attributes and renders it in case of success.\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "updateReplyAssistantEntry",
        "parameters": [
          {
            "in": "path",
            "name": "replyAssistantEntryId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The name of the entry.",
            "in": "query",
            "name": "label",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The internal/company id of the entry. This is used to match Engage Digital entry’s id with the company one. Example: KB042.",
            "in": "query",
            "name": "foreign_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To restrict the entry to a set of Engage Digital categories. Then, KB entries that do not match message’s categories to which you are replying will not be suggested.",
            "explode": true,
            "in": "query",
            "name": "category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "entry shortcuts",
            "explode": true,
            "in": "query",
            "name": "shortcuts[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Entry group id.",
            "in": "query",
            "name": "entry_group_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Source ids (array)",
            "explode": true,
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantEntry"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a reply assistant entry",
        "tags": [
          "Reply Assistant Entries"
        ]
      }
    },
    "/reply_assistant/groups": {
      "get": {
        "description": "This method renders all groups ordered by creation date (ascending).\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "getAllReplyAssistantGroups",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllReplyAssistantGroupsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting​ a​ll​ reply assistant groups",
        "tags": [
          "Reply Assistant Groups"
        ]
      },
      "post": {
        "description": "This method creates an entry group. In case of success it renders the group, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "createReplyAssistantGroup",
        "parameters": [
          {
            "description": "The name of the group.",
            "in": "query",
            "name": "name",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "List of the reply assistant entries in this group.",
            "explode": true,
            "in": "query",
            "name": "entry_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Used for autocompletion in chat.",
            "in": "query",
            "name": "autocomplete",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Used to determine the order of the groups in the interface, in ascending order.",
            "in": "query",
            "name": "position",
            "required": false,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantGroup"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a reply assistant group",
        "tags": [
          "Reply Assistant Groups"
        ]
      }
    },
    "/reply_assistant/groups/{replyAssistantGroupId}": {
      "delete": {
        "description": "This method destroys an existing group. It renders the group itself. It renders a 404 if id is invalid.\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "deleteReplyAssistantGroup",
        "parameters": [
          {
            "in": "path",
            "name": "replyAssistantGroupId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantGroup"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a reply assistant group",
        "tags": [
          "Reply Assistant Groups"
        ]
      },
      "get": {
        "description": "This method renders an entry group from given id.\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "getReplyAssistantGroup",
        "parameters": [
          {
            "in": "path",
            "name": "replyAssistantGroupId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantGroup"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a reply assistant group from its id",
        "tags": [
          "Reply Assistant Groups"
        ]
      },
      "put": {
        "description": "This method updates an existing group from given attributes and renders it in case of success.\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "updateReplyAssistantGroup",
        "parameters": [
          {
            "in": "path",
            "name": "replyAssistantGroupId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The name of the group.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "List of the reply assistant entries in this group.",
            "explode": true,
            "in": "query",
            "name": "entry_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Used for autocompletion in chat.",
            "in": "query",
            "name": "autocomplete",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Used to determine the order of the groups in the interface, in ascending order.",
            "in": "query",
            "name": "position",
            "required": false,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantGroup"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a reply assistant group",
        "tags": [
          "Reply Assistant Groups"
        ]
      }
    },
    "/reply_assistant/versions": {
      "get": {
        "description": "This method renders all reply assistant versions ordered by creation date (ascending).\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "getAllReplyAssistantVersions",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllReplyAssistantVersionsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting​ a​ll​ reply assistant versions",
        "tags": [
          "Reply Assistant Versions"
        ]
      },
      "post": {
        "description": "This method creates a reply assistant version. In case of success it renders the version, otherwise, it renders an error (422 HTTP code, 404 if the entry_id is invalid).\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "createReplyAssistantVersion",
        "parameters": [
          {
            "description": "Body of the version",
            "in": "query",
            "name": "body",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Reply assistant entry id (mandatory)",
            "in": "query",
            "name": "entry_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Source ids (array)",
            "explode": true,
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Either “text” or “html”",
            "in": "query",
            "name": "format",
            "required": false,
            "schema": {
              "enum": [
                "text",
                "html"
              ],
              "type": "string"
            }
          },
          {
            "description": "Language (ex: “fr”)",
            "in": "query",
            "name": "language",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantVersion"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a reply assistant version",
        "tags": [
          "Reply Assistant Versions"
        ]
      }
    },
    "/reply_assistant/versions/{replyAssistantVersionId}": {
      "delete": {
        "description": "This method destroys an existing version. It renders the version itself. It renders a 404 if id is invalid.\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "deleteReplyAssistantVersion",
        "parameters": [
          {
            "in": "path",
            "name": "replyAssistantVersionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantVersion"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a reply assistant version",
        "tags": [
          "Reply Assistant Versions"
        ]
      },
      "get": {
        "description": "This method renders a version from given id.\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "getReplyAssistantVersion",
        "parameters": [
          {
            "in": "path",
            "name": "replyAssistantVersionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantVersion"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a reply assistant version from its id",
        "tags": [
          "Reply Assistant Versions"
        ]
      },
      "put": {
        "description": "This method updates an existing version from given attributes and renders it in case of success.\n\nAuthorization​: only users that have the right to manage reply assistant.",
        "operationId": "updateReplyAssistantVersion",
        "parameters": [
          {
            "in": "path",
            "name": "replyAssistantVersionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Body of the version",
            "in": "query",
            "name": "body",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Reply assistant entry id.",
            "in": "query",
            "name": "entry_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Source ids (array)",
            "explode": true,
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Either “text” or “html”",
            "explode": true,
            "in": "query",
            "name": "format",
            "required": false,
            "schema": {
              "enum": [
                "text",
                "html"
              ],
              "type": "string"
            }
          },
          {
            "description": "Language (ex: “fr”)",
            "in": "query",
            "name": "language",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyAssistantVersion"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a reply assistant version",
        "tags": [
          "Reply Assistant Versions"
        ]
      }
    },
    "/roles": {
      "get": {
        "description": "This method renders roles ordered by creation date (ascending).",
        "operationId": "getAllRoles",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllRolesResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all roles",
        "tags": [
          "Roles"
        ]
      },
      "post": {
        "description": "This method creates a new role. In case of success it renders the created role, otherwise, it renders an error (422 HTTP code).",
        "operationId": "createRole",
        "parameters": [
          {
            "in": "query",
            "name": "label",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "access_help_center",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "access_previous_messages",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "access_pull_mode",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "admin_stamp_answer",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "approve_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding configuration",
            "in": "query",
            "name": "ask_an_expert",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "assign_intervention",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "author_block_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "close_content_thread",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "create_and_destroy_extension",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "create_community",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "create_content_source",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "create_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "delay_export_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "delete_content_thread",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding configuration",
            "in": "query",
            "name": "escalate_to_video",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "impersonate_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "invite_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_api_access_tokens",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_app_sdk_applications",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "manage_automatic_exports_tasks",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_categories",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_chat",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_custom_fields",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_custom_notifications",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_emails_templates",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_folders",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_ice",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_identities",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_own_notifications",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "manage_reply_assistant",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_roles",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "manage_rules_engine_rules",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "manage_surveys",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_tags",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_teams",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_topologies",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_users_of_my_teams",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "monitor_tasks",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "monitor_team_tasks",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "mute_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "open_content_thread",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "publish_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_community",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_content_source",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_event",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_export",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_identity",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_own_stats",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_presence",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_stats",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "read_surveys",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "receive_tasks",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "reply_with_assistant",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "search_contents",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "search_event",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_community",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_content_source",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_extension",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_identity",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_intervention",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_own_intervention",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_settings",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_time_sheet",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "use_emoji",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a role",
        "tags": [
          "Roles"
        ]
      }
    },
    "/roles/{roleId}": {
      "get": {
        "description": "This method renders a role from given id.\n\nAuthorization​: only users that can manage roles.",
        "operationId": "getRole",
        "parameters": [
          {
            "in": "path",
            "name": "roleId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a role from its id",
        "tags": [
          "Roles"
        ]
      },
      "put": {
        "description": "This method updates an existing role from given attributes and renders it in case of success.\n\nAuthorization​: A user can’t update roles with more permissions than himself and can’t give a role a permission he doesn’t have.\n\nAny permission updated with a user that does not have this permission will be ignored (The update is done, just not the unallowed permission)",
        "operationId": "updateRole",
        "parameters": [
          {
            "in": "path",
            "name": "roleId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "access_help_center",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "access_previous_messages",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "access_pull_mode",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "admin_stamp_answer",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "approve_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding configuration",
            "in": "query",
            "name": "ask_an_expert",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "assign_intervention",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "author_block_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "close_content_thread",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "create_and_destroy_extension",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "create_community",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "create_content_source",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "create_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "delay_export_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "delete_content_thread",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding configuration",
            "in": "query",
            "name": "escalate_to_video",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "impersonate_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "invite_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_api_access_tokens",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_app_sdk_applications",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "manage_automatic_exports_tasks",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_categories",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_chat",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_custom_fields",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_custom_notifications",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_emails_templates",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_folders",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_ice",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_identities",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_own_notifications",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "manage_reply_assistant",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_roles",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "manage_rules_engine_rules",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "manage_surveys",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_tags",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_teams",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_topologies",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "manage_users_of_my_teams",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "monitor_tasks",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "monitor_team_tasks",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "mute_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "open_content_thread",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "publish_content",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_community",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_content_source",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_event",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_export",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_identity",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_own_stats",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_presence",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_stats",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "read_surveys",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "read_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "receive_tasks",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "permission only available with the corresponding extension enabled",
            "in": "query",
            "name": "reply_with_assistant",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "search_contents",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "search_event",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_community",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_content_source",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_extension",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_identity",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_intervention",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_own_intervention",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_settings",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_time_sheet",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "update_user",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "use_emoji",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Role"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a role",
        "tags": [
          "Roles"
        ]
      }
    },
    "/settings": {
      "get": {
        "description": "This method renders all settings of your domain.",
        "operationId": "getAllSettings",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Settings"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all settings",
        "tags": [
          "Settings"
        ]
      },
      "put": {
        "description": "This method updates the current domain settings.\n\nAuthorization​: only users that can update settings.",
        "operationId": "updateSettings",
        "parameters": [
          {
            "description": "(in hours).",
            "in": "query",
            "name": "activity_presence_threshold",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "​Enable activity tracking (Boolean)",
            "in": "query",
            "name": "activity_tracking",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "(Day of week)",
            "in": "query",
            "name": "beginning_of_week",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "A​ ctivate the forced categorization by source.​ (Boolean)",
            "in": "query",
            "name": "category_tagging",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "(See format)",
            "in": "query",
            "name": "content_languages",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Activate the dashboard (Boolean)",
            "in": "query",
            "name": "dashboard",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Prevent the DD to be embed by other websites (Boolean)",
            "in": "query",
            "name": "deny_iframe_integration",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "(Boolean)",
            "in": "query",
            "name": "disable_password_autocomplete",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "password expiration delay (in seconds)",
            "in": "query",
            "name": "expire_password_after",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "enable auto scroll down (Boolean)",
            "in": "query",
            "name": "enable_auto_scroll_down",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "enable password expiration (Boolean)",
            "in": "query",
            "name": "expire_password_enabled",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "provide durations in seconds in export (Boolean)",
            "in": "query",
            "name": "export_in_seconds",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "fold archived contents (Boolean)",
            "in": "query",
            "name": "fold_useless_contents",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "FTE data period (in hours)",
            "in": "query",
            "name": "fte_duration",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "enable identity merge (Boolean)",
            "in": "query",
            "name": "identity_merge",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "(Array of times in seconds)",
            "in": "query",
            "name": "intervention_defer_rates[]",
            "required": false,
            "schema": {
              "items": {
                "type": "integer"
              },
              "type": "array"
            }
          },
          {
            "description": "(in seconds)",
            "in": "query",
            "name": "intervention_defer_threshold",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "(Array of times in seconds)",
            "in": "query",
            "name": "intervention_rates[]",
            "required": false,
            "schema": {
              "items": {
                "type": "integer"
              },
              "type": "array"
            }
          },
          {
            "description": "locale code (String)",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "activate multi language support for messages (Boolean)",
            "in": "query",
            "name": "multi_lang",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Name of the Dimelo Digital (String)",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "prohibit reusing old passwords (Boolean)",
            "in": "query",
            "name": "password_archivable_enabled",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "number of archived passwords",
            "in": "query",
            "name": "password_archivable_size",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "minimum character length",
            "in": "query",
            "name": "password_min_length",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "should contain at least 1 non alphanumeric char (Boolean)",
            "in": "query",
            "name": "password_non_word",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "should contain at least 1 number (Boolean)",
            "in": "query",
            "name": "password_numbers",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "disable password recovery by email (Boolean)",
            "in": "query",
            "name": "password_recovery_disabled",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Enable push mode (Boolean)",
            "in": "query",
            "name": "push_enabled",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Enable reply as any identity (Boolean)",
            "in": "query",
            "name": "reply_as_any_identity",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Enable right to left support (Boolean)",
            "in": "query",
            "name": "rtl_support",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "​Allow authors to ask approval of their messages (Boolean)",
            "in": "query",
            "name": "self_approval_required",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Session timeout (in minutes)",
            "in": "query",
            "name": "session_timeout",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Enable spellchecking (Boolean)",
            "in": "query",
            "name": "spellchecking",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Defines the DD’s design (String)",
            "in": "query",
            "name": "style",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Disable third-party services (tracking...) (Boolean)",
            "in": "query",
            "name": "third_party_services_disabled",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Use the timezone endpoint to get the timezone name (String)",
            "in": "query",
            "name": "timezone",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Track JS errors (Boolean)",
            "in": "query",
            "name": "track_js",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Can be ‘demo’, ‘production’ or ‘archived’",
            "in": "query",
            "name": "type",
            "required": false,
            "schema": {
              "enum": [
                "demo",
                "production",
                "archived"
              ],
              "type": "string"
            }
          },
          {
            "description": "Chat max response time (in seconds)",
            "in": "query",
            "name": "urgent_task_threshold",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "Experimental (Boolean)",
            "in": "query",
            "name": "use_system_font",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Settings"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating settings",
        "tags": [
          "Settings"
        ]
      }
    },
    "/status": {
      "get": {
        "description": "This method get all currently connected agents & their status.\n\nAuthorization​: only users that have the right to monitor the task view.",
        "operationId": "getAllAgentStatus",
        "parameters": [
          {
            "description": "To filter users on given source ids (based on reply permission).",
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "To filter users on given category ids.",
            "in": "query",
            "name": "category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "To filter users on given team ids.",
            "in": "query",
            "name": "team_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "To filter users on given locales.",
            "in": "query",
            "name": "spoken_languages[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/AgentStatus"
                  },
                  "type": "array"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Get all connected agents status",
        "tags": [
          "Agent Status"
        ]
      }
    },
    "/surveys": {
      "get": {
        "description": "This method renders all surveys ordered by creation date (ascending).",
        "operationId": "getAllSurveys",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/getAllSurveysResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all surveys",
        "tags": [
          "Surveys"
        ]
      }
    },
    "/surveys/{surveyId}": {
      "get": {
        "description": "This method renders a survey from given id.",
        "operationId": "getSurvey",
        "parameters": [
          {
            "in": "path",
            "name": "surveyId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Survey"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a survey from its id",
        "tags": [
          "Surveys"
        ]
      }
    },
    "/survey_responses/{surveyResponseId}": {
      "get": {
        "description": "This method returns information about a survey response.",
        "operationId": "getSurveyResponse",
        "parameters": [
          {
            "in": "path",
            "name": "surveyResponseId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SurveyResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Get a survey response",
        "tags": [
          "Survey Responses"
        ]
      }
    },
    "/status/{agentId}": {
      "get": {
        "description": "This method get the status of a connected agent. Returns a 404 if the user does not exist (not_found) or if he’s not connected (disconnected).\n\nAuthorization​: only users that have the right to monitor the task view or own agent status.",
        "operationId": "getAgentStatus",
        "parameters": [
          {
            "in": "path",
            "name": "agentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AgentStatus"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Get a connected agent status",
        "tags": [
          "Agent Status"
        ]
      },
      "put": {
        "description": "This method updates an agent's availability. Can be used to set either channels statuses OR custom  status. If both parameters are provided, ignores custom status.The status parameter​ **MUST** b​e either “away” or “available”.\n\nAuthorization​: only users that have the right to monitor the task view or own agent status.",
        "operationId": "changeAgentStatus",
        "parameters": [
          {
            "in": "path",
            "name": "agentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "A hash of channel_id => availability (must contain all channels).",
            "in": "query",
            "name": "status",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "id of presence status (optional)",
            "in": "query",
            "name": "custom_status_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AgentStatus"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Changing an agent's status",
        "tags": [
          "Agent Status"
        ]
      }
    },
    "/tags": {
      "get": {
        "description": "This method renders tags ordered by name (ascending).",
        "operationId": "getAllTags",
        "parameters": [
          {
            "description": "To filter tags on given tag ids (separated by commas).",
            "in": "query",
            "name": "ids",
            "example": "59248c4dae276a021cb296d2,ff0dc9ba250002871f7aabba",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllTagsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all tags",
        "tags": [
          "Tags"
        ]
      },
      "post": {
        "description": "This method creates a new tag. In case of success it renders the created tag, otherwise, it renders an error (422 HTTP code).",
        "operationId": "createTag",
        "parameters": [
          {
            "description": "Tag name (mandatory).",
            "in": "query",
            "name": "name",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tag"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a tag",
        "tags": [
          "Tags"
        ]
      }
    },
    "/tags/{tagId}": {
      "delete": {
        "description": "This method destroys an existing tag. It renders tag itself. It renders a 404 if id is invalid.\n\nAuthorization​: only users that are able to destroy tags.",
        "operationId": "deleteTag",
        "parameters": [
          {
            "in": "path",
            "name": "tagId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tag"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a tag",
        "tags": [
          "Tags"
        ]
      },
      "get": {
        "description": "This method renders a tag from given id.",
        "operationId": "getTag",
        "parameters": [
          {
            "in": "path",
            "name": "tagId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tag"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a tag from its id",
        "tags": [
          "Tags"
        ]
      },
      "put": {
        "description": "This method updates an existing tag from given attributes and renders it in case of success.\n\nAuthorization​: only users that are able to update tags.",
        "operationId": "updateTag",
        "parameters": [
          {
            "in": "path",
            "name": "tagId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Tag’s label.",
            "in": "query",
            "name": "name",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tag"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a tag",
        "tags": [
          "Tags"
        ]
      }
    },
    "/tasks": {
      "get": {
        "description": "This method renders tasks ordered by priority (highest first) and then by creation date (latest first).\n\nAuthorization​: only users that can read tasks.",
        "operationId": "getAllTasks",
        "parameters": [
          {
            "description": "To filter tasks on given queue name (filters on the “global” queue by default).The most commonly used queues are: “global” (contains every task pending assignation), “workbin_{agent_id}” (contains every tasks assigned to the {agent_id} agent, “history” (contains every processed tasks), and “undelivered” (contains every undelivered tasks). If queue is set to “workbins” all the tasks currently in a workbin will be returned.",
            "in": "query",
            "name": "queue",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter tasks on given channel id.",
            "in": "query",
            "name": "channel_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter tasks on the step they’re currently in.",
            "in": "query",
            "name": "step",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllTasksResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all tasks",
        "tags": [
          "Tasks"
        ]
      }
    },
    "/tasks/{taskId}": {
      "get": {
        "description": "This method renders a task from given id.",
        "operationId": "getTask",
        "parameters": [
          {
            "in": "path",
            "name": "taskId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a task from its id",
        "tags": [
          "Tasks"
        ]
      }
    },
    "/tasks/{taskId}/move": {
      "post": {
        "description": "This method changes a task queue and renders it in case of success. Only accepts “undelivered” and special queue defined in topology (e.g. triage).\n\nAuthorization​: only users that have the right to monitor the task view.",
        "operationId": "moveTask",
        "parameters": [
          {
            "in": "path",
            "name": "taskId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Name of the queue task has to be moved in.",
            "in": "query",
            "name": "queue",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Move a task to another queue",
        "tags": [
          "Tasks"
        ]
      }
    },
    "/tasks/{taskId}/complete": {
      "post": {
        "description": "This method completes a task.\n\nAuthorization​: for that call to succeed several conditions are required:\n  - the task must be in an agent’s workbin.\n  - the access token user must either own the task or be able to monitor all tasks or be able to monitor his team’s tasks if the task is owned by one of his team member.",
        "operationId": "completeTask",
        "parameters": [
          {
            "in": "path",
            "name": "taskId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Name of the queue task has to be moved in.",
            "in": "query",
            "name": "queue",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Complete a task",
        "tags": [
          "Tasks"
        ]
      }
    },
    "/tasks/{taskId}/transfer": {
      "post": {
        "description": "This method transfers an existing task and renders it in case of success.\n\nAuthorization​: only users that have the right to monitor the task view.",
        "operationId": "transferTask",
        "parameters": [
          {
            "in": "path",
            "name": "taskId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "List of agents to transfer the task to (multiple).",
            "explode": true,
            "in": "query",
            "name": "agent_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Force the transfer to the first agent in agent_ids if set. When bypass is used,",
            "in": "query",
            "name": "bypass",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Filter agents receiving the task depending on their categories.",
            "explode": true,
            "in": "query",
            "name": "category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Filter agents receiving the task depending on their spoken languages.",
            "in": "query",
            "name": "language",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Filter agents receiving the task depending on their teams.",
            "explode": true,
            "in": "query",
            "name": "team_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Add a comment to the task.",
            "in": "query",
            "name": "comment",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Task"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Transferring a task",
        "tags": [
          "Tasks"
        ]
      }
    },
    "/teams": {
      "get": {
        "description": "This method renders teams ordered by creation date (ascending).",
        "operationId": "getAllTeams",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllTeamsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all teams",
        "tags": [
          "Teams"
        ]
      },
      "post": {
        "description": "This method creates a new team. In case of success it renders the created tag, otherwise, it renders an error (422 HTTP code).",
        "operationId": "createTeam",
        "parameters": [
          {
            "description": "Team name.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "List of user id as leaders",
            "explode": true,
            "in": "query",
            "name": "leader_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "List of user id as team members.",
            "explode": true,
            "in": "query",
            "name": "user_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Team"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a team",
        "tags": [
          "Teams"
        ]
      }
    },
    "/teams/{teamId}": {
      "delete": {
        "description": "This method destroys an existing team. It renders the team itself. It renders a 404 if id is invalid.",
        "operationId": "deleteTeam",
        "parameters": [
          {
            "in": "path",
            "name": "teamId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "ID of a category to recategorize (optional).",
            "in": "query",
            "name": "take_over_category_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Team"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a team",
        "tags": [
          "Teams"
        ]
      },
      "get": {
        "description": "This method renders a team from given id.",
        "operationId": "getTeam",
        "parameters": [
          {
            "in": "path",
            "name": "teamId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Team"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a team from its id",
        "tags": [
          "Teams"
        ]
      },
      "put": {
        "description": "This method updates an existing team from given attributes and renders it in case of success.",
        "operationId": "updateTeam",
        "parameters": [
          {
            "in": "path",
            "name": "teamId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Team name.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "List of user id as leaders",
            "explode": true,
            "in": "query",
            "name": "leader_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "List of user id as team members.",
            "explode": true,
            "in": "query",
            "name": "user_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Team"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a team",
        "tags": [
          "Teams"
        ]
      }
    },
    "/time_sheets": {
      "get": {
        "description": "This method renders time sheets ordered by active and label.",
        "operationId": "getAllTimeSheets",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllTimeSheetsResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all time sheets",
        "tags": [
          "Time Sheets"
        ]
      },
      "post": {
        "description": "This method creates a time sheet. In case of success it renders the time sheet, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that can create time sheet.",
        "operationId": "createTimeSheet",
        "parameters": [
          {
            "description": "true or false, this field is used to enable/disable a time sheet.",
            "in": "query",
            "name": "active",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The label of the time sheet.",
            "in": "query",
            "name": "label",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "An array containing id of each source using your time sheet.",
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "A string containing the first two letters of your country (example: \"fr\"/\"en\"/\"es\"), useful to bootstrap default holidays following to a country.",
            "in": "query",
            "name": "holidays_region",
            "required": false,
            "schema": {
              "enum": [
                "de",
                "es",
                "fr",
                "gb",
                "it",
                "nl",
                "us"
              ],
              "type": "string"
            }
          },
          {
            "description": "An array containing one or more hash of holidays, a holiday must contain a name (string) and a date (string), the date must be in a valid format, a valid format is a format corresponding to your domain’s locale).",
            "in": "query",
            "name": "holidays",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. For example: “a-b,c-d”: “a” is the beginning of the first interval of the day, “b” is the ending of the first interval of the day, “c” is the beginning of the second interval of the day, “d” is the ending of the second interval of the day",
            "in": "query",
            "name": "monday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "tuesday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "wednesday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "thursday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "friday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "saturday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "sunday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSheet"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a time sheet",
        "tags": [
          "Time Sheets"
        ]
      }
    },
    "/time_sheets/{timeSheetId}": {
      "delete": {
        "description": "This method destroys an existing time sheet. It renders time sheet itself. It renders a 404 if id is invalid.",
        "operationId": "deleteTimeSheet",
        "parameters": [
          {
            "in": "path",
            "name": "timeSheetId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSheet"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a time sheet",
        "tags": [
          "Time Sheets"
        ]
      },
      "get": {
        "description": "This method renders a time sheet from given id.\n\nAuthorization​: only users that can see time sheets in administration section.",
        "operationId": "getTimeSheet",
        "parameters": [
          {
            "in": "path",
            "name": "timeSheetId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSheet"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a time sheet from its id",
        "tags": [
          "Time Sheets"
        ]
      },
      "put": {
        "description": "This method updates an existing team from given attributes and renders it in case of success.",
        "operationId": "updateTimeSheet",
        "parameters": [
          {
            "in": "path",
            "name": "timeSheetId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "true or false, this field is used to enable/disable a time sheet.",
            "in": "query",
            "name": "active",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The label of the time sheet.",
            "in": "query",
            "name": "label",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "An array containing id of each source using your time sheet.",
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "An array containing one or more hash of holidays, a holiday must contain a name (string) and a date (string), the date must be in a valid format, a valid format is a format corresponding to your domain’s locale).",
            "in": "query",
            "name": "holidays",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. For example: “a-b,c-d”: “a” is the beginning of the first interval of the day, “b” is the ending of the first interval of the day, “c” is the beginning of the second interval of the day, “d” is the ending of the second interval of the day",
            "in": "query",
            "name": "monday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "tuesday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "wednesday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "thursday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "friday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "saturday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "this field define the time intervals of the day (in secs). An empty string means that there are no business hours on this day. See `monday_hours` for the format.",
            "in": "query",
            "name": "sunday_hours",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TimeSheet"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a time sheet",
        "tags": [
          "Time Sheets"
        ]
      }
    },
    "/timezones": {
      "get": {
        "description": "This method renders all available timezones.",
        "operationId": "getAllTimezones",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "$ref": "#/components/schemas/Timezone"
                  },
                  "type": "array"
                }
              }
            },
            "description": "List of all timezones"
          }
        },
        "summary": "Getting all timezones",
        "tags": [
          "Timezones"
        ]
      }
    },
    "/user_capacities": {
      "get": {
        "description": "This method renders all user capacities ordered by creation date (ascending).\n\nAuthorization​: only users who can manage topology.",
        "operationId": "getAllUserCapacities",
        "parameters": [
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllUserCapacitiesResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all User Capacities",
        "tags": [
          "User Capacities"
        ]
      },
      "post": {
        "description": "This method creates a new user capacity. In case of success it renders the created record, otherwise, it renders an error (422 HTTP code).\n\nPlease note that the order of the parameters is important, as the `default_capacity` and `max_capacity` will apply to the immediately above `channel_id`.\n\nAuthorization​: only users who can manage topology.",
        "operationId": "createUserCapacity",
        "parameters": [
          {
            "description": "User Capacity name.",
            "in": "query",
            "name": "name",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The id of the channel on which the capacities apply.",
            "in": "query",
            "name": "channels[][channel_id]",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The default capacity to apply to the related channel.",
            "in": "query",
            "name": "channels[][default_capacity]",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "The maximum capacity to apply to the related channel.",
            "in": "query",
            "name": "channels[][max_capacity]",
            "required": false,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCapacity"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a user capacity",
        "tags": [
          "User Capacities"
        ]
      }
    },
    "/user_capacities/{userCapacityId}": {
      "delete": {
        "description": "This method destroys an existing user capacity. It renders the user capacity itself. It renders a 404 if id is invalid or already destroyed.\n\nAuthorization​: only users who can manage topology.",
        "operationId": "deleteUserCapacity",
        "parameters": [
          {
            "in": "path",
            "name": "userCapacityId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCapacity"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a user capacity",
        "tags": [
          "User Capacities"
        ]
      },
      "get": {
        "description": "This method renders the user capacity corresponding to the id given in parameter. It renders a 404 if id is invalid.\n\nAuthorization​: only users who can manage topology.",
        "operationId": "getUserCapacity",
        "parameters": [
          {
            "in": "path",
            "name": "userCapacityId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCapacity"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a user capacity from its id",
        "tags": [
          "User Capacities"
        ]
      },
      "put": {
        "description": "This method creates a new user capacity. In case of success it renders the created record, otherwise, it renders an error (422 HTTP code).\n\nPlease note that the order of the parameters is important, as the `default_capacity` and `max_capacity` will apply to the immediately above `channel_id`.\n\nAuthorization​: only users who can manage topology.",
        "operationId": "updateUserCapacity",
        "parameters": [
          {
            "in": "path",
            "name": "userCapacityId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User Capacity name.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The id of the channel on which the capacities apply.",
            "in": "query",
            "name": "channels[][channel_id]",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The default capacity to apply to the related channel.",
            "in": "query",
            "name": "channels[][default_capacity]",
            "required": false,
            "schema": {
              "type": "integer"
            }
          },
          {
            "description": "The maximum capacity to apply to the related channel.",
            "in": "query",
            "name": "channels[][max_capacity]",
            "required": false,
            "schema": {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserCapacity"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a user capacity",
        "tags": [
          "User Capacities"
        ]
      }
    },
    "/users": {
      "get": {
        "description": "This method renders users ordered by creation date (descending).\n\nAuthorization​: only users that can view users. If the user affiliated to the token has the manage_users_of_my_teams permission, only the users belonging to at least one of the teams he’s the leader of will be returned.",
        "operationId": "getAllUsers",
        "parameters": [
          {
            "description": "To filter users on given email (case-insensitive).",
            "in": "query",
            "name": "email",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter users on given category id.",
            "in": "query",
            "name": "category_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter users on given identity id.",
            "in": "query",
            "name": "identity_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter users on given external id.",
            "in": "query",
            "name": "external_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter users on given role id.",
            "in": "query",
            "name": "role_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "To filter users on given team id.",
            "in": "query",
            "name": "team_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllUsersResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all users",
        "tags": [
          "Users"
        ]
      },
      "post": {
        "description": "This method creates a new user. In case of success it renders the created user, otherwise, it renders an error (422 HTTP code).",
        "operationId": "createUser",
        "parameters": [
          {
            "description": "User list of category ids (multiple).",
            "in": "query",
            "name": "category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "User email (mandatory).",
            "in": "query",
            "name": "email",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the user is enabled or not (boolean).",
            "in": "query",
            "name": "enabled",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "User external id, used for SSO.",
            "in": "query",
            "name": "external_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User firstname (mandatory).",
            "in": "query",
            "name": "firstname",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User gender (\"man\" or \"woman\").",
            "in": "query",
            "name": "gender",
            "required": false,
            "schema": {
              "enum": [
                "man",
                "woman"
              ],
              "type": "string"
            }
          },
          {
            "description": "User list of identity ids (multiple).",
            "in": "query",
            "name": "identity_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "User lastname (mandatory).",
            "in": "query",
            "name": "lastname",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Language for the user interface.",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User nickname.",
            "in": "query",
            "name": "nickname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User plain password (mandatory).",
            "in": "query",
            "name": "password",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User role id (mandatory).",
            "in": "query",
            "name": "role_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User list of team ids (multiple).",
            "in": "query",
            "name": "team_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Use the timezone endpoint to get the timezone name (String), default is empty for domain timezone.",
            "in": "query",
            "name": "timezone",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "List of locales corresponding to the languages spoken by the user (multiple). Is not available with RingCX.",
            "in": "query",
            "name": "spoken_languages[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Whether the user is passwordless or not (boolean). Must be used with the corresponding SSO configuration.",
            "in": "query",
            "name": "no_password",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a user",
        "tags": [
          "Users"
        ]
      }
    },
    "/users/invite": {
      "post": {
        "description": "This method invites a new user. In case of success it renders the created user, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that can invite other users. If the user affiliated to the token has the manage_users_of_my_teams permission, the invited user will need to belong to at least one of the teams he’s the leader of. It will not be possible to assign the user to other teams.",
        "operationId": "inviteUser",
        "parameters": [
          {
            "description": "User list of category ids (multiple).",
            "in": "query",
            "name": "category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "User email (mandatory).",
            "in": "query",
            "name": "email",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the user is enabled or not (boolean).",
            "in": "query",
            "name": "enabled",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "User external id.",
            "in": "query",
            "name": "external_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User firstname (mandatory).",
            "in": "query",
            "name": "firstname",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User gender (\"man\" or \"woman\").",
            "in": "query",
            "name": "gender",
            "required": false,
            "schema": {
              "enum": [
                "man",
                "woman"
              ],
              "type": "string"
            }
          },
          {
            "description": "User list of identity ids (multiple).",
            "in": "query",
            "name": "identity_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "User lastname (mandatory).",
            "in": "query",
            "name": "lastname",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Language for the user interface.",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User nickname.",
            "in": "query",
            "name": "nickname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User role id (mandatory).",
            "in": "query",
            "name": "role_id",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User list of team ids (multiple).",
            "in": "query",
            "name": "team_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Use the timezone endpoint to get the timezone name (String), default is empty for",
            "in": "query",
            "name": "timezone",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "List of locales corresponding to the languages spoken by the user (multiple). Is not available with RingCX.",
            "in": "query",
            "name": "spoken_languages[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            },
            "description": "Success"
          },
          "422": {
            "description": "Unprocessable Entity"
          }
        },
        "summary": "Inviting a user",
        "tags": [
          "Users"
        ]
      }
    },
    "/users/{userId}": {
      "delete": {
        "description": "This method deletes the given user. In case of success it renders the deleted user, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that can update users. The user affiliated to the token must have at least all the permissions of the other user. If the user affiliated to the token has the manage_users_of_my_teams permission, the deleted user will need to belong to at least one of the teams he’s the leader of.",
        "operationId": "deleteUser",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a user",
        "tags": [
          "Users"
        ]
      },
      "get": {
        "description": "This method renders a user from given id.",
        "operationId": "getUser",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a user from its id",
        "tags": [
          "Users"
        ]
      },
      "put": {
        "description": "This method updates users from given attributes and renders it in case of success.\n\nAuthorization​: only users that can update users. If the user affiliated to the token has the `manage_users_of_my_teams` permission, the updated user will need to belong to at least one of the teams he’s the leader of. The teams the user affiliated to the token is the leader of will be the only ones which can be added or removed.",
        "operationId": "updateUser",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User list of category ids (multiple).",
            "in": "query",
            "name": "category_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "User email.",
            "in": "query",
            "name": "email",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the user is enabled or not (boolean).",
            "in": "query",
            "name": "enabled",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "User external id, used for SSO.",
            "in": "query",
            "name": "external_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User firstname.",
            "in": "query",
            "name": "firstname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User gender (\"man\" or \"woman\").",
            "in": "query",
            "name": "gender",
            "required": false,
            "schema": {
              "enum": [
                "man",
                "woman"
              ],
              "type": "string"
            }
          },
          {
            "description": "User list of identity ids (multiple).",
            "in": "query",
            "name": "identity_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "User lastname.",
            "in": "query",
            "name": "lastname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Language for the user interface.",
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User nickname.",
            "in": "query",
            "name": "nickname",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User plain password.",
            "in": "query",
            "name": "password",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User role id.",
            "in": "query",
            "name": "role_id",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "User list of team ids (multiple).",
            "in": "query",
            "name": "team_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Use the timezone endpoint to get the timezone name (String), default is empty for domain timezone.",
            "in": "query",
            "name": "timezone",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "List of locales corresponding to the languages spoken by the user (multiple). Is not available with RingCX.",
            "in": "query",
            "name": "spoken_languages[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "Whether the user is passwordless or not (boolean). Must be used with the corresponding SSO configuration.",
            "in": "query",
            "name": "no_password",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a user",
        "tags": [
          "Users"
        ]
      }
    },
    "/users/{userId}/sources_permissions": {
      "get": {
        "description": "This method renders the permissions the user has on each source.\nAuthorization​: only users that can view users. If the user affiliated to the token has the manage_users_of_my_teams permission, only the signatures of the users belonging to at least one of the teams he’s the leader of will be available.",
        "operationId": "getUserSourcesPermissions",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserSourcesPermissions"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a user's permissions on sources",
        "tags": [
          "Users Sources Permissions"
        ]
      },
      "put": {
        "description": "This method updates the permissions the user has on each source.\nAuthorization​: only users that can view users. If the user affiliated to the token has the manage_users_of_my_teams permission, only the signatures of the users belonging to at least one of the teams he’s the leader of will be available.",
        "operationId": "updateUserSourcesPermissions",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The parameter should be the id of a source, the value should be a string containing the list of permissions you want to give to the user on a specific source (seprated by commas).\nList of available permissions:\n  - read\n  - reply\n  - reply_with_html\n  - initiate_discussion\n  - destroy\n  - approval_required (if approval threshold is not enabled)\n  - approval_threshold_0\n  - approval_threshold_10\n  - approval_threshold_20\n  - approval_threshold_30\n  - approval_threshold_40\n  - approval_threshold_50\n  - approval_threshold_60\n  - approval_threshold_70\n  - approval_threshold_80\n  - approval_threshold_90\n  - approval_threshold_100",
            "in": "query",
            "name": "{source_x_id}",
            "example": "read,reply,approval_threshold_50",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserSourcesPermissions"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a user's permissions on sources",
        "tags": [
          "Users Sources Permissions"
        ]
      }
    },
    "/users/{userId}/signatures": {
      "get": {
        "description": "This method renders user’s signatures ordered by creation date (descending).\n\nAuthorization​: only users that can view users. If the user affiliated to the token has the manage_users_of_my_teams permission, only the signatures of the users belonging to at least one of the teams he’s the leader of will be available.",
        "operationId": "getAllUserSignatures",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllUserSignaturesResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all user's signatures",
        "tags": [
          "User Signatures"
        ]
      },
      "post": {
        "description": "This method creates a new user’s signature. In case of success it renders the created signature, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that can update users. If the user affiliated to the token has the manage_users_of_my_teams permission, the owner of the deleting signature will need to belong to at least one of the teams he’s the leader of.",
        "operationId": "createUserSignature",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The signature text (mandatory).",
            "in": "query",
            "name": "body",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The signature list of source ids (multiple). Keep it empty if you don’t need to associate the signature with any sources.",
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "The two-letter code of the signature language.",
            "in": "query",
            "name": "language",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The signature name.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserSignature"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a user's signature",
        "tags": [
          "User Signatures"
        ]
      }
    },
    "/users/{userId}/signatures/{signatureId}": {
      "delete": {
        "description": "This method deletes the given signature. In case of success it renders the deleted signature, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that can update users. If the user affiliated to the token has the manage_users_of_my_teams permission, the owner of the deleting signature will need to belong to at least one of the teams he’s the leader of.",
        "operationId": "deleteUserSignature",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "path",
            "name": "signatureId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserSignature"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a user's signature",
        "tags": [
          "User Signatures"
        ]
      },
      "get": {
        "description": "This method renders a user’s signature from a given id.",
        "operationId": "getUserSignature",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "path",
            "name": "signatureId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserSignature"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a user's signature from its id",
        "tags": [
          "User Signatures"
        ]
      },
      "put": {
        "description": "This method updates the user’s signature related to the provided id from given attributes. In case of success it renders the updated signature, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: only users that can update users. If the user affiliated to the token has the `manage_users_of_my_teams` permission, the updated user will need to belong to at least one of the teams he’s the leader of. The teams the user affiliated to the token is the leader of will be the only ones which can be added or removed.",
        "operationId": "updateUserSignature",
        "parameters": [
          {
            "in": "path",
            "name": "userId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "in": "path",
            "name": "signatureId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The signature text (not empty).",
            "in": "query",
            "name": "body",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The signature list of source ids (multiple). Keep it empty if you don’t need to associate the signature with any sources.",
            "in": "query",
            "name": "source_ids[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          },
          {
            "description": "The two-letter code of the signature language.",
            "in": "query",
            "name": "language",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The signature name.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UserSignature"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a user's signature",
        "tags": [
          "User Signatures"
        ]
      }
    },
    "/webhooks": {
      "get": {
        "description": "This method renders webhooks ordered by active and staging_use (descending).\n\nAuthorization​: users having manage_api_access_tokens permission can see all webhooks / users don’t having the manage_api_access_tokens permission can see only the webhooks belonging to access token created by them.",
        "operationId": "getAllWebhooks",
        "parameters": [
          {
            "description": "Access token.",
            "in": "query",
            "name": "access_token",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The record index to start. Default value is 0.",
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          },
          {
            "description": "The max number of records to return. Default value is 30, max value is 150.",
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "format": "int32",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GetAllWebhooksResponse"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting all webhooks",
        "tags": [
          "Webhooks"
        ]
      },
      "post": {
        "description": "This method creates a webhook. In case of success it renders the webhook, otherwise, it renders an error (422 HTTP code).\n\nAuthorization​: All users having the manage_api_access_tokens permission or all users having an api access token.",
        "operationId": "createWebhook",
        "parameters": [
          {
            "description": "Access token.",
            "in": "query",
            "name": "access_token",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "true or false, this field is used to enable/disable a webhook.",
            "in": "query",
            "name": "active",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The name of the webhook.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "true or false, this field is used to determine if a webhook will be run in staging",
            "in": "query",
            "name": "staging_use",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The url of a webhook. This is used to determine the endpoint of your webhook, where",
            "in": "query",
            "name": "url",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The token used in your webhook.",
            "in": "query",
            "name": "verify_token",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The secret key that will be served as a ​`X-Dimelo-Secret​` header in every request.",
            "in": "query",
            "name": "secret",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "An array containing all the events that your webhook wants to subscribe.",
            "in": "query",
            "name": "registered_events[]",
            "required": true,
            "schema": {
              "items": {
                "enum": [
                  "content.approved",
                  "content.discussion_initiated",
                  "content.exported",
                  "content.imported",
                  "content.replied",
                  "content.update_exported",
                  "identity.merged",
                  "identity.unmerged",
                  "intervention.assigned",
                  "intervention.canceled",
                  "intervention.closed",
                  "intervention.custom_fields_updated",
                  "intervention.deferred",
                  "intervention.opened",
                  "intervention.reactivated",
                  "intervention.recategorized",
                  "intervention.reopened",
                  "intervention.user_updated",
                  "push_agent.accept_task",
                  "push_agent.availability_change",
                  "push_agent.busyness_change",
                  "push_agent.connected",
                  "push_agent.disconnected",
                  "push_agent.missed_task",
                  "push_agent.reconnected",
                  "push_agent.request_task",
                  "survey_response.imported",
                  "task.assigned",
                  "task.completed",
                  "task.created",
                  "task.destroyed",
                  "task.expired_from_step",
                  "task.expired_from_workbin",
                  "task.recategorized",
                  "task.resume",
                  "task.supervisor_assigned",
                  "task.taken",
                  "task.transferred",
                  "task.undelivered"
                ],
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Webhook"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Creating a webhook",
        "tags": [
          "Webhooks"
        ]
      }
    },
    "/webhooks/{webhookId}": {
      "delete": {
        "description": "This method destroys an existing webhook. It renders webhook itself. It renders a 404 if id is invalid.\n\nAuthorization​: All users having the manage_api_access_tokens permission or all users having an api access token belonging to the webhook you’re deleting.",
        "operationId": "deleteWebhook",
        "parameters": [
          {
            "in": "path",
            "name": "webhookId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Access token.",
            "in": "query",
            "name": "access_token",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Webhook"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Deleting a webhook",
        "tags": [
          "Webhooks"
        ]
      },
      "get": {
        "description": "This method renders a webhook from given id.\n\nAuthorization​: users having manage_api_access_tokens permission can see any webhook / users don’t having the `manage_api_access_tokens` permission can see only the webhook in case the webhook is associated to an access token created by them.",
        "operationId": "getWebhook",
        "parameters": [
          {
            "in": "path",
            "name": "webhookId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Access token.",
            "in": "query",
            "name": "access_token",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Webhook"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Getting a webhook from its id",
        "tags": [
          "Webhooks"
        ]
      },
      "put": {
        "description": "This method updates an existing webhook from given attributes and renders it in case of success.\n\nAuthorization​: All users having the manage_api_access_tokens permission or all users having an api access token belonging to the webhook you’re updating.",
        "operationId": "updateWebhook",
        "parameters": [
          {
            "in": "path",
            "name": "webhookId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Access token.",
            "in": "query",
            "name": "access_token",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "true or false, this field is used to enable/disable a webhook.",
            "in": "query",
            "name": "active",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The name of the webhook.",
            "in": "query",
            "name": "name",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "true or false, this field is used to determine if a webhook will be run in staging",
            "in": "query",
            "name": "staging_use",
            "required": false,
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The url of a webhook. This is used to determine the endpoint of your webhook, where",
            "in": "query",
            "name": "url",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The token used in your webhook.",
            "in": "query",
            "name": "verify_token",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The secret key that will be served as a ​`X-Dimelo-Secret​` header in every request.",
            "in": "query",
            "name": "secret",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "An array containing all the events that your webhook wants to subscribe.",
            "in": "query",
            "name": "registered_events[]",
            "required": false,
            "schema": {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Webhook"
                }
              }
            },
            "description": "Success"
          }
        },
        "summary": "Updating a webhook",
        "tags": [
          "Webhooks"
        ]
      }
    }
  },
  "components": {
    "schemas": {
      "AgentCustomStatus": {
        "description": "The \"custom_status\" attribute represent the custom \"away\" status selected, it can either be:\n* 1. null — ​The agent is available or in the generic \"Away\" status\n2. { \"id\":\"5582b1f4776562af9b000008\" } — ​The id of the custom status",
        "properties": {
          "id": {
            "type": "string"
          }
        }
      },
      "AgentStatus": {
        "properties": {
          "agent_id": {
            "type": "string"
          },
          "channels": {
            "items": {
              "$ref": "#/components/schemas/AgentStatusChannel"
            },
            "type": "array"
          },
          "custom_status": {
            "$ref": "#/components/schemas/AgentCustomStatus"
          }
        }
      },
      "AgentStatusChannel": {
        "properties": {
          "busyness": {
            "enum": [
              "unoccupied",
              "ok",
              "busy",
              "full"
            ],
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "status": {
            "type": "string"
          }
        }
      },
      "Attachment": {
        "properties": {
          "content_type": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "embed": {
            "type": "boolean"
          },
          "filename": {
            "type": "string"
          },
          "foreign_id": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "public?": {
            "type": "boolean"
          },
          "size": {
            "type": "integer"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "video_metadata": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        }
      },
      "CreateUpdateTopology": {
        "properties": {
          "name": {
            "type": "string"
          },
          "json_config": {
            "type": "string"
          }
        }
      },
      "Topology": {
        "properties": {
          "name": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "config": {
            "type": "object"
          }
        }
      },
      "Category": {
        "properties": {
          "color": {
            "type": "integer"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "mandatory": {
            "type": "boolean"
          },
          "multiple": {
            "type": "boolean"
          },
          "name": {
            "type": "string"
          },
          "parent_id": {
            "type": "string"
          },
          "post_qualification": {
            "type": "boolean"
          },
          "source_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "unselectable": {
            "type": "boolean"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "Channel": {
        "properties": {
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "hard_capability": {
            "type": "integer"
          },
          "id": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "soft_capability": {
            "type": "integer"
          },
          "source_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "task_timeout_seconds": {
            "type": "integer"
          },
          "agent_sla": {
            "type": "integer"
          },
          "agent_sla_threshold": {
            "type": "integer"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "auto_complete_category_ids": {
            "description": "An array containing id of each category set when auto completing a task (multiple).",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "task_auto_complete_seconds": {
            "description": "Time before a task is auto completed (in seconds).",
            "type": "integer"
          }
        }
      },
      "Community": {
        "properties": {
          "active": {
            "type": "boolean"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        }
      },
      "Content": {
        "properties": {
          "approval_required": {
            "type": "boolean"
          },
          "attachments": {
            "items": {
              "$ref": "#/components/schemas/ContentAttachment"
            },
            "type": "array"
          },
          "attachments_count": {
            "type": "integer"
          },
          "author_id": {
            "type": "string"
          },
          "auto_submitted": {
            "type": "boolean"
          },
          "body": {
            "type": "string"
          },
          "body_formatted": {
            "$ref": "#/components/schemas/ContentBodyFormatted"
          },
          "body_input_format": {
            "description": "values can be: text or html.",
            "enum": [
              "text",
              "html"
            ],
            "type": "string"
          },
          "category_ids": {
            "description": "are content categories if none, they are default to intervention categories or thread categories",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "context_data": {
            "description": "is present only if the content has context_data associated. The context_data hash keys are the custom fields keys.",
            "type": "object"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "created_from": {
            "type": "string"
          },
          "creator_id": {
            "type": "string"
          },
          "first_in_thread": {
            "description": "is true if the content is the first in the thread.",
            "type": "boolean"
          },
          "foreign_categories": {
            "description": "is present only if the content has foreign_categories.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "foreign_id": {
            "type": "string"
          },
          "headers": {
            "description": "only if content is an email",
            "additionalProperties": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "example": {
              "Subject": [
                "Hello!"
              ],
              "X-Spam-Score": [
                "9.1"
              ],
              "X-Test": [
                "1",
                "2"
              ]
            }
          },
          "id": {
            "type": "string"
          },
          "identity_group_id": {
            "type": "string"
          },
          "in_reply_to_author_id": {
            "type": "string"
          },
          "in_reply_to_id": {
            "type": "string"
          },
          "intervention_id": {
            "type": "string"
          },
          "language": {
            "type": "string"
          },
          "private_message": {
            "type": "boolean"
          },
          "published": {
            "type": "boolean"
          },
          "rating": {
            "description": "is present only if the content supports rating and rating is filled.",
            "type": "integer"
          },
          "remotely_deleted": {
            "type": "boolean"
          },
          "source_id": {
            "type": "string"
          },
          "source_type": {
            "type": "string"
          },
          "source_url": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "synchronization_status": {
            "type": "string"
          },
          "synchronization_error": {
            "type": "string"
          },
          "thread_id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "capabilities_supported": {
            "description": "lists the types of structured messages that can be used to reply to this type of message",
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "id"
        ]
      },
      "ContentAttachment": {
        "properties": {
          "content_type": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "embed": {
            "type": "string"
          },
          "filename": {
            "type": "string"
          },
          "foreign_id": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "public?": {
            "type": "string"
          },
          "size": {
            "type": "integer"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "url": {
            "description": "You can download the attachments by using an API access token with the following URL: https://[your-domain].engagement.dimelo.com/attachments/[attachment_id]?access_token=[your_​ access_token]",
            "type": "string"
          }
        }
      },
      "ContentBodyFormatted": {
        "description": "always contains text and html versions.",
        "properties": {
          "html": {
            "type": "string"
          },
          "text": {
            "type": "string"
          }
        }
      },
      "CustomField": {
        "properties": {
          "associated_type_name": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "key": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "multiple": {
            "type": "boolean"
          },
          "position": {
            "type": "integer"
          },
          "type": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id",
          "label"
        ]
      },
      "Event": {
        "properties": {
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "extra_infos": {
            "$ref": "#/components/schemas/EventExtraInfo"
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "user_id": {
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "EventExtraInfo": {
        "description": "attributes in extra_infos are optional and unspecified/not guaranteed, don’t rely on it for critical tasks, this is provided as information only",
        "properties": {
          "authentication_strategy": {
            "type": "string"
          },
          "business/time_sheet_id": {
            "type": "string"
          },
          "category_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "closed_automatically": {
            "type": "string"
          },
          "content_id": {
            "type": "string"
          },
          "content_source_id": {
            "type": "string"
          },
          "content_thread_id": {
            "type": "string"
          },
          "deferred_duration": {
            "type": "string"
          },
          "deletions": {
            "type": "object"
          },
          "foreign_id": {
            "description": "can be null",
            "type": "string"
          },
          "intervention_id": {
            "type": "string"
          },
          "request_ip": {
            "type": "string"
          },
          "task_id": {
            "type": "string"
          },
          "user_id": {
            "type": "string"
          }
        }
      },
      "Folder": {
        "properties": {
          "id": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "parent_id": {
            "type": "string"
          },
          "position": {
            "type": "integer"
          },
          "query": {
            "type": "string"
          },
          "render_threads_count": {
            "type": "boolean"
          },
          "role_restriction": {
            "$ref": "#/components/schemas/Restriction"
          },
          "team_restriction": {
            "$ref": "#/components/schemas/Restriction"
          },
          "user_id": {
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "GetAllAttachmentsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Attachment"
            },
            "type": "array"
          }
        }
      },
      "GetAllTopologiesResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Topology"
            },
            "type": "array"
          }
        }
      },
      "GetAllCategoriesResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Category"
            },
            "type": "array"
          }
        }
      },
      "GetAllChannelsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Channel"
            },
            "type": "array"
          }
        }
      },
      "GetAllCommunitiesResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Community"
            },
            "type": "array"
          }
        }
      },
      "GetAllContentsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Content"
            },
            "type": "array"
          }
        }
      },
      "GetAllCustomFieldsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/CustomField"
            },
            "type": "array"
          }
        }
      },
      "GetAllEventsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Event"
            },
            "type": "array"
          }
        }
      },
      "GetAllFoldersResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Folder"
            },
            "type": "array"
          }
        }
      },
      "GetAllIdentitiesResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Identity"
            },
            "type": "array"
          }
        }
      },
      "GetAllIdentityGroupsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/IdentityGroup"
            },
            "type": "array"
          }
        }
      },
      "GetAllInterventionCommentsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/InterventionComment"
            },
            "type": "array"
          }
        }
      },
      "GetAllInterventionsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Intervention"
            },
            "type": "array"
          }
        }
      },
      "GetAllPresenceStatusResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/PresenceStatus"
            },
            "type": "array"
          }
        }
      },
      "GetAllReplyAssistantEntriesResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/ReplyAssistantEntry"
            },
            "type": "array"
          }
        }
      },
      "GetAllReplyAssistantGroupsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/ReplyAssistantGroup"
            },
            "type": "array"
          }
        }
      },
      "GetAllReplyAssistantVersionsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/ReplyAssistantVersion"
            },
            "type": "array"
          }
        }
      },
      "GetAllRolesResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Role"
            },
            "type": "array"
          }
        }
      },
      "GetAllSourcesResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Source"
            },
            "type": "array"
          }
        }
      },
      "getAllSurveysResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Survey"
            },
            "type": "array"
          }
        }
      },
      "GetAllTagsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Tag"
            },
            "type": "array"
          }
        }
      },
      "GetAllTasksResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Task"
            },
            "type": "array"
          }
        }
      },
      "GetAllTeamsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Team"
            },
            "type": "array"
          }
        }
      },
      "GetAllThreadsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Thread"
            },
            "type": "array"
          }
        }
      },
      "GetAllTimeSheetsResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/TimeSheet"
            },
            "type": "array"
          }
        }
      },
      "GetAllUserCapacitiesResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/UserCapacity"
            },
            "type": "array"
          }
        }
      },
      "GetAllUsersResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "type": "array"
          }
        }
      },
      "GetAllUserSignaturesResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/UserSignature"
            },
            "type": "array"
          }
        }
      },
      "GetAllWebhooksResponse": {
        "properties": {
          "count": {
            "format": "int32",
            "type": "integer"
          },
          "limit": {
            "format": "int32",
            "type": "integer"
          },
          "offset": {
            "format": "int32",
            "type": "integer"
          },
          "records": {
            "items": {
              "$ref": "#/components/schemas/Webhook"
            },
            "type": "array"
          }
        }
      },
      "BotCompleteResponse": {
        "properties": {
          "status": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        }
      },
      "HandoverFromBotToAgentResponse": {
        "properties": {
          "status": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        }
      },
      "Identity": {
        "properties": {
          "avatar_url": {
            "type": "string"
          },
          "community_id": {
            "type": "string"
          },
          "community_url": {
            "type": "string"
          },
          "company": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "display_name": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "extra_values": {
            "type": "object"
          },
          "firstname": {
            "type": "string"
          },
          "foreign_id": {
            "type": "string"
          },
          "gender": {
            "type": "string"
          },
          "home_phone": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "identity_group_id": {
            "description": "The identity group id references the identity group that contains all informations (phone, notes, etc.). Many identities may belong to this group. If the identity group id is null, it means that identity does not have a group and any extra information. Please refer to identity groups API for more informations.",
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "mobile_phone": {
            "type": "string"
          },
          "screenname": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "user_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "uuid": {
            "type": "string"
          }
        }
      },
      "IdentityGroup": {
        "properties": {
          "avatar_url": {
            "type": "string"
          },
          "company": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "custom_field_values": {
            "type": "object"
          },
          "emails": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "firstname": {
            "type": "string"
          },
          "gender": {
            "type": "string"
          },
          "home_phones": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "id": {
            "type": "string"
          },
          "identity_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "lastname": {
            "type": "string"
          },
          "mobile_phones": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "notes": {
            "type": "string"
          },
          "tag_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "Intervention": {
        "properties": {
          "category_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "closed": {
            "type": "boolean"
          },
          "closed_at": {
            "format": "date-time",
            "type": "string"
          },
          "comments_count": {
            "type": "integer"
          },
          "content_id": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "custom_fields": {
            "type": "object"
          },
          "deferred_at": {
            "format": "date-time",
            "type": "string"
          },
          "first_user_reply_id": {
            "type": "string"
          },
          "first_user_reply_in": {
            "type": "integer"
          },
          "first_user_reply_in_bh": {
            "type": "integer"
          },
          "id": {
            "type": "string"
          },
          "identity_id": {
            "type": "string"
          },
          "identity_group_id": {
            "type": "string"
          },
          "last_user_reply_in": {
            "type": "integer"
          },
          "last_user_reply_in_bh": {
            "type": "integer"
          },
          "source_id": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "thread_id": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "user_id": {
            "type": "string"
          },
          "user_replies_count": {
            "type": "integer"
          },
          "user_reply_in_average": {
            "type": "integer"
          },
          "user_reply_in_average_bh": {
            "type": "integer"
          },
          "user_reply_in_average_count": {
            "type": "integer"
          },
          "satisfaction_grade": {
            "type": "integer",
            "description": "Satisfaction grade.\nOnly present when customer satisfaction extension is enabled."
          },
          "satisfaction_answered_at": {
            "type": "string",
            "format": "date-time",
            "description": "Date and time when customer answered the survey.\nOnly present when customer satisfaction extension is enabled."
          },
          "satisfaction_sent_at": {
            "type": "string",
            "format": "date-time",
            "description": "Date and time when the satisfaction survey was sent to customer.\nOnly present when customer satisfaction extension is enabled."
          },
          "survey_response_id": {
            "type": "string",
            "description": "ED internal ID for customer response to satisfaction survey.\nOnly present when customer satisfaction extension is enabled."
          },
          "survey_id": {
            "type": "string",
            "description": "ED internal ID for satisfaction survey.\nOnly present when customer satisfaction extension is enabled."
          }
        },
        "required": [
          "id"
        ]
      },
      "InterventionComment": {
        "properties": {
          "body": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "intervention_id": {
            "type": "string"
          },
          "thread_id": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "user_id": {
            "type": "string"
          },
          "videntity_id": {
            "type": "string"
          }
        }
      },
      "InterventionSegment": {
        "properties": {
          "id": {
            "type": "string"
          },
          "foreign_id": {
            "type": "string"
          },
          "identity_id": {
            "type": "string"
          },
          "identity_foreign_id": {
            "type": "string"
          },
          "intervention_id": {
            "type": "string"
          },
          "thread_id": {
            "type": "string"
          },
          "thread_foreign_id": {
            "type": "string"
          },
          "source_id": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "user_id": {
            "type": "string"
          },
          "auto_summary": {
            "type": "string",
            "description": "Auto summary of the intervention segment.\nOnly present with RingCX."
          },
          "agent_summary": {
            "type": "string",
            "description": "Agent's summary of the intervention segment.\nOnly present with RingCX."
          },
          "summary_edited": {
            "type": "boolean",
            "description": "Indicates if the summary was edited by the agent.\nOnly present with RingCX."
          },
          "generate_auto_summary": {
            "type": "boolean",
            "description": "Indicates if the intervention segment supports summary generation.\nOnly present with RingCX."
          }
        }
      },
      "Locale": {
        "properties": {
          "code": {
            "type": "string"
          },
          "interface": {
            "type": "boolean"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "PresenceStatus": {
        "properties": {
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ]
      },
      "ReplyAssistantEntry": {
        "properties": {
          "category_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "entry_group_id": {
            "type": "string"
          },
          "foreign_id": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "shortcuts": {
            "type": "string"
          },
          "source_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "version_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "id"
        ]
      },
      "ReplyAssistantGroup": {
        "properties": {
          "autocomplete": {
            "type": "boolean"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "entry_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "position": {
            "type": "integer"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "ReplyAssistantVersion": {
        "properties": {
          "attachments_count": {
            "type": "integer"
          },
          "body": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "entry_id": {
            "type": "string"
          },
          "format": {
            "enum": [
              "text",
              "html"
            ],
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "language": {
            "type": "string"
          },
          "source_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "Restriction": {
        "properties": {
          "only": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        }
      },
      "Role": {
        "properties": {
          "access_help_center": {
            "type": "boolean"
          },
          "access_previous_messages": {
            "type": "boolean"
          },
          "access_pull_mode": {
            "type": "boolean"
          },
          "admin_stamp_answer": {
            "type": "boolean"
          },
          "anonymize_identity": {
            "type": "boolean"
          },
          "approve_content": {
            "type": "boolean"
          },
          "ask_an_expert": {
            "type": "boolean"
          },
          "assign_intervention": {
            "type": "boolean"
          },
          "author_block_content": {
            "type": "boolean"
          },
          "close_content_thread": {
            "type": "boolean"
          },
          "create_and_destroy_extension": {
            "type": "boolean"
          },
          "create_community": {
            "type": "boolean"
          },
          "create_content_source": {
            "type": "boolean"
          },
          "create_user": {
            "type": "boolean"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "delay_export_content": {
            "type": "boolean"
          },
          "delete_content_thread": {
            "type": "boolean"
          },
          "escalate_to_video": {
            "type": "boolean"
          },
          "export_identity": {
            "type": "boolean"
          },
          "id": {
            "type": "string"
          },
          "impersonate_user": {
            "type": "boolean"
          },
          "invite_user": {
            "type": "boolean"
          },
          "label": {
            "type": "string"
          },
          "lock_identity": {
            "type": "boolean"
          },
          "manage_api_access_tokens": {
            "type": "boolean"
          },
          "manage_app_sdk_applications": {
            "type": "boolean"
          },
          "manage_categories": {
            "type": "boolean"
          },
          "manage_chat": {
            "type": "boolean"
          },
          "manage_custom_fields": {
            "type": "boolean"
          },
          "manage_custom_notifications": {
            "type": "boolean"
          },
          "manage_emails_templates": {
            "type": "boolean"
          },
          "manage_folders": {
            "type": "boolean"
          },
          "manage_ice": {
            "type": "boolean"
          },
          "manage_identities": {
            "type": "boolean"
          },
          "manage_messaging": {
            "type": "boolean"
          },
          "manage_own_notifications": {
            "type": "boolean"
          },
          "manage_reply_assistant": {
            "type": "boolean"
          },
          "manage_roles": {
            "type": "boolean"
          },
          "manage_rules_engine_rules": {
            "type": "boolean"
          },
          "manage_tags": {
            "type": "boolean"
          },
          "manage_teams": {
            "type": "boolean"
          },
          "manage_topologies": {
            "type": "boolean"
          },
          "manage_users_of_my_teams": {
            "type": "boolean"
          },
          "monitor_tasks": {
            "type": "boolean"
          },
          "monitor_team_tasks": {
            "type": "boolean"
          },
          "mute_content": {
            "type": "boolean"
          },
          "open_content_thread": {
            "type": "boolean"
          },
          "publish_content": {
            "type": "boolean"
          },
          "read_community": {
            "type": "boolean"
          },
          "read_content_source": {
            "type": "boolean"
          },
          "read_event": {
            "type": "boolean"
          },
          "read_export": {
            "type": "boolean"
          },
          "read_identity": {
            "type": "boolean"
          },
          "read_own_stats": {
            "type": "boolean"
          },
          "read_presence": {
            "type": "boolean"
          },
          "read_stats": {
            "type": "boolean"
          },
          "read_user": {
            "type": "boolean"
          },
          "receive_tasks": {
            "type": "boolean"
          },
          "reply_with_assistant": {
            "type": "boolean"
          },
          "search_contents": {
            "type": "boolean"
          },
          "search_event": {
            "type": "boolean"
          },
          "update_community": {
            "type": "boolean"
          },
          "update_content_source": {
            "type": "boolean"
          },
          "update_extension": {
            "type": "boolean"
          },
          "update_identity": {
            "type": "boolean"
          },
          "update_intervention": {
            "type": "boolean"
          },
          "update_own_intervention": {
            "type": "boolean"
          },
          "update_settings": {
            "type": "boolean"
          },
          "update_time_sheet": {
            "type": "boolean"
          },
          "update_user": {
            "type": "boolean"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "use_cobrowsing": {
            "type": "boolean"
          },
          "use_emoji": {
            "type": "boolean"
          }
        }
      },
      "Settings": {
        "properties": {
          "activity_presence_threshold": {
            "type": "integer"
          },
          "activity_tracking": {
            "type": "boolean"
          },
          "beginning_of_week": {
            "type": "string"
          },
          "browser_notifications_disabled": {
            "type": "boolean"
          },
          "content_languages[]": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "deny_iframe_integration": {
            "type": "boolean"
          },
          "disable_password_autocomplete": {
            "type": "boolean"
          },
          "display_only_unknown_bbcode": {
            "type": "boolean"
          },
          "dump_in_preprod": {
            "type": "boolean"
          },
          "enable_auto_scroll_down": {
            "type": "boolean"
          },
          "expire_password_after": {
            "type": "integer"
          },
          "expire_password_enabled": {
            "type": "boolean"
          },
          "fte_duration": {
            "type": "integer"
          },
          "id": {
            "type": "string"
          },
          "identity_merge": {
            "type": "boolean"
          },
          "intervention_closing_period": {
            "type": "integer"
          },
          "intervention_defer_rates": {
            "items": {
              "type": "integer"
            },
            "type": "array"
          },
          "intervention_defer_threshold": {
            "type": "integer"
          },
          "intervention_rates": {
            "items": {
              "type": "integer"
            },
            "type": "array"
          },
          "locale": {
            "type": "string"
          },
          "multi_lang": {
            "type": "boolean"
          },
          "name": {
            "type": "string"
          },
          "password_archivable_enabled": {
            "type": "boolean"
          },
          "password_archivable_size": {
            "type": "integer"
          },
          "password_min_length": {
            "type": "integer"
          },
          "password_non_word": {
            "type": "boolean"
          },
          "password_numbers": {
            "type": "boolean"
          },
          "password_recovery_disabled": {
            "type": "boolean"
          },
          "push_enabled": {
            "type": "boolean"
          },
          "reply_as_any_identity": {
            "type": "boolean"
          },
          "rtl_support": {
            "type": "boolean"
          },
          "self_approval_required": {
            "type": "boolean"
          },
          "session_timeout": {
            "type": "integer"
          },
          "sharding_key": {
            "type": "string"
          },
          "spellchecking": {
            "type": "boolean"
          },
          "style": {
            "type": "string"
          },
          "third_party_services_disabled": {
            "type": "boolean"
          },
          "timezone": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "urgent_task_threshold": {
            "type": "integer"
          },
          "use_two_letters_avatars": {
            "type": "boolean"
          }
        }
      },
      "Source": {
        "properties": {
          "active": {
            "description": "Activate/deactivate the source",
            "type": "boolean"
          },
          "auto_detect_content_language": {
            "description": "Auto-detect content language (Boolean)",
            "type": "boolean"
          },
          "channel_id": {
            "type": "string"
          },
          "color": {
            "description": "Color of the icon: Default: 0 Blue: 1 Green: 2 Turquoise: 3 Purple: 4 Yellow: 5 Orange: 6 Red: 7 Asphalt: 8 Grey: 9",
            "format": "int32",
            "type": "integer"
          },
          "color_hex": {
            "description": "Hex code of the color of the icon",
            "example": "#A1A1A1",
            "type": "string"
          },
          "community_id": {
            "type": "string"
          },
          "content_archiving": {
            "description": "Automatic archiving of old contents (Boolean)",
            "type": "boolean"
          },
          "content_archiving_period": {
            "description": "Archive contents older than (seconds)",
            "format": "int64",
            "type": "integer"
          },
          "content_languages": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "default_category_ids": {
            "description": "Default categories",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "default_content_language": {
            "description": "Default content language",
            "type": "string"
          },
          "enable_android": {
            "description": "Only on Engage Messaging sources. Boolean describing if the source is enabled on Android or not.",
            "type": "boolean"
          },
          "enable_ios": {
            "description": "Only on Engage Messaging sources. Boolean describing if the source is enabled on iOS or not.",
            "type": "boolean"
          },
          "enable_web": {
            "description": "Only on Engage Messaging sources. Boolean describing if the source is enabled on the web or not.",
            "type": "boolean"
          },
          "auto_response_triggers": {
            "description": "Automatic Messages. Only on sources which supports Automatic Messages.",
            "type": "array",
            "items": {
              "properties": {
                "language": {
                  "type": "string"
                },
                "created_from_trigger": {
                  "type": "string"
                },
                "body": {
                  "type": "string"
                }
              }
            }
          },
          "auto_response_trigger_enabled": {
            "description": "Boolean describing if answers are enabled to first messages and/or to messages outside business hours. Only on sources which supports Automatic Messages.",
            "properties": {
              "first_message_from_user": {
                "type": "boolean"
              },
              "out_of_office_hours_message": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "auto_response_trigger_grace_periods": {
            "description": "Integer describing time between two messages. Only on sources which supports Automatic Messages.",
            "properties": {
              "first_message_from_user": {
                "type": "integer"
              },
              "out_of_office_hours_message": {
                "type": "integer"
              }
            },
            "type": "object"
          },
          "signatures": {
            "description": "Signatures.",
            "type": "array",
            "items": {
              "properties": {
                "language": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "body": {
                  "type": "string"
                }
              }
            }
          },
          "from_name": {
            "description": "Custom sender name. Only on sources which supports a custom sender name.",
            "type": "string"
          },
          "error_message": {
            "type": "string"
          },
          "template_message_namespace": {
            "description": "Only on WhatsApp Sources. Internal WhatsApp field that can also be found on the business manager (unique per WhatsApp account).",
            "type": "string"
          },
          "hidden_from_stats": {
            "description": "Hide from statistics",
            "type": "boolean"
          },
          "id": {
            "type": "string"
          },
          "intervention_messages_boost": {
            "description": "Priority boost of messages with intervention",
            "format": "int32",
            "type": "integer"
          },
          "live_chat": {
            "description": "Only on Engage Messaging sources. Boolean describing if the source is livechat or not.",
            "type": "boolean"
          },
          "name": {
            "description": "Source name",
            "type": "string"
          },
          "sla_expired_strategy": {
            "description": "SLA expired strategy (\"max\", \"half\" or \"base\")",
            "enum": [
              "max",
              "half",
              "base"
            ],
            "type": "string"
          },
          "sla_response": {
            "description": "Response time (seconds)",
            "format": "int32",
            "type": "integer"
          },
          "sla_threshold": {
            "description": "Customer SLA warning threshold (must be greater than 0 and less than 100, default value is 0).",
            "format": "int32",
            "type": "integer"
          },
          "sla_filtering_categories_strategy": {
            "description": "Categories filtering strategy for Customer SLA indicator (\"ignored_categories\" or \"selected_categories\")",
            "type": "string"
          },
          "sla_filtering_category_ids": {
            "description": "Filtering categories for Customer SLA indicator",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "default_task_priority": {
            "description": "Default priority for interactions",
            "format": "int32",
            "type": "integer"
          },
          "status": {
            "type": "string"
          },
          "template_messages": {
            "description": "Only for WhatsApp Sources, list of the available message templates that can be used to send outbound messages.",
            "items": {
              "type": "object",
              "properties": {
                "components": {
                  "items": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "string"
                      },
                      "text": {
                        "type": "string"
                      },
                      "buttons": {
                        "items": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string"
                            },
                            "text": {
                              "type": "string"
                            },
                            "phone_number": {
                              "type": "string"
                            },
                            "url": {
                              "type": "string"
                            }
                          }
                        },
                        "type": "array"
                      }
                    }
                  },
                  "type": "array"
                },
                "language": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              }
            },
            "type": "array"
          },
          "time_sheet_ids": {
            "description": "Business Hours (Limited to 1)",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "transferred_tasks_boost": {
            "description": "Priority boost of transferred tasks",
            "format": "int32",
            "type": "integer"
          },
          "attachments_security_level": {
            "description": "Attachments security level. (\"strict\", \"relaxed\", or \"permissive\"). Strict allows images and medias. Relaxed allows images, media and documents. Permissive allows all kind of attachments",
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "user_thread_default_category_ids": {
            "description": "Default categories (agent messages)",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "time_for_thread_inclusion": {
            "description": "Time for thread inclusion",
            "type": "integer"
          },
          "time_for_thread_inclusion_enabled": {
            "description": "Enable time for thread inclusion. Only on Email sources",
            "type": "boolean"
          },
          "email_parser": {
            "description": "Email parser (BBCode). Only on Email sources",
            "type": "boolean"
          },
          "imap_smtp_email": {
            "description": "Email address to synchronize. Only on Email sources",
            "type": "string"
          },
          "imap_mailboxes_to_import": {
            "description": "Folders to synchronize. Only on Email sources",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "imap_mailbox_used_for_sent_mail": {
            "description": "Folder for 'Sent Mail'. Only on Email sources",
            "type": "string"
          },
          "imap_address": {
            "description": "IMAP server address. Only on Email sources",
            "type": "string"
          },
          "imap_port": {
            "description": "IMAP server port. Only on Email sources",
            "format": "int32",
            "type": "integer"
          },
          "imap_username": {
            "description": "IMAP username. Only on Email sources",
            "type": "string"
          },
          "imap_use_ssl_tls": {
            "description": "Use SSL/TLS protocol to establish secure IMAP connection. Only on Email sources",
            "type": "boolean"
          },
          "imap_use_start_tls": {
            "description": "Use STARTTLS protocol to establish secure IMAP connection. Only on Email sources",
            "type": "boolean"
          },
          "imap_authentication_type": {
            "description": "IMAP Authentication type (\"basic\" or \"microsoft_identity_platform\"). Only on Email sources",
            "type": "string"
          },
          "imap_ssl_verify_mode": {
            "description": "IMAP SSL verification mode. (\"NONE\", \"PEER\", \"CLIENT_ONCE\" or \"FAIL_IF_NO_PEER_CERT\"). Only on Email sources",
            "type": "string"
          },
          "smtp_address": {
            "description": "SMTP server address. Only on Email sources",
            "type": "string"
          },
          "smtp_port": {
            "description": "SMTP server port. Only on Email sources",
            "format": "int32",
            "type": "integer"
          },
          "smtp_username": {
            "description": "SMTP username. Only on Email sources",
            "type": "string"
          },
          "smtp_use_ssl_tls": {
            "description": "Use SSL/TLS protocol to establish secure SMTP connection. Only on Email sources",
            "type": "boolean"
          },
          "smtp_use_start_tls": {
            "description": "Use STARTTLS protocol to establish secure SMTP connection. Only on Email sources",
            "type": "boolean"
          },
          "smtp_authentication_type": {
            "description": "SMTP Authentication type (\"basic\" or \"microsoft_identity_platform\"). Only on Email sources",
            "type": "string"
          },
          "smtp_ssl_verify_mode": {
            "description": "SMTP SSL verification mode (\"NONE\", \"PEER\", \"CLIENT_ONCE\" or \"FAIL_IF_NO_PEER_CERT\"). Only on Email sources",
            "type": "string"
          },
          "smtp_helo_domain": {
            "description": "Used to identify HELO/EHLO when connecting to the SMTP server. Only on Email sources",
            "type": "string"
          },
          "threading_heuristics": {
            "description": "Threading_heuristics. Only on Email sources",
            "type": "boolean"
          },
          "common_ancestors_threading": {
            "description": "Common ancestors threading. Only on Email sources",
            "type": "boolean"
          },
          "spam_assassin_level": {
            "description": "Spam threshold (\"disabled\", \"relaxed\", or \"strict\"). Only on Email sources",
            "type": "string"
          },
          "whitelisted_emails": {
            "description": "Whitelisted emails. All emails received from this address won't be threaded and can be associated with an anonymous identity or the Reply-To, if there is one. To be filled when implementing a form. Only on Email sources",
            "type": "string"
          },
          "cc_blacklist": {
            "description": "Exclude from TO/CC. Only on Email sources",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "postmark_enabled": {
            "description": "Enable Postmark. Only on Email sources",
            "type": "boolean"
          }
        }
      },
      "Survey": {
        "properties": {
          "id": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "name": {
            "description": "Name displayed in ED admin interface.\nIs not displayed to end users.",
            "type": "string"
          },
          "link": {
            "description": "Link to the survey on the provider website.",
            "type": "string"
          },
          "active": {
            "type": "boolean"
          },
          "from_name": {
            "description": "Name displayed as sender when survey is sent to end user.\nCurrently only applies to surveys sent by email.",
            "type": "string"
          },
          "instant_send_threshold": {
            "description": "Any intervention whose duration is shorter than this value (in seconds) will have the survey sent instantly.",
            "type": "number"
          },
          "max_time_since_last_reply": {
            "description": "If last message from end user is older than this duration (in seconds), no survey will be sent.",
            "type": "number"
          },
          "send_delay": {
            "description": "Delay before sending survey to end users.",
            "type": "number"
          },
          "category_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "team_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "source_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "type": {
            "description": "Contains the information of the survey provider used.\nCurrently, only provider supported is alchemer.",
            "enum": [
              "alchemer"
            ],
            "type": "string"
          },
          "questions": {
            "description": "Fetched from survey provider.\nList of questions asked in this survey.",
            "items": {
              "$ref": "#/components/schemas/SurveyQuestion"
            },
            "type": "array"
          }
        }
      },
      "SurveyQuestion": {
        "properties": {
          "foreign_id": {
            "description": "The survey provider's id for this question.",
            "type": "string"
          },
          "main": {
            "type": "boolean"
          },
          "text": {
            "description": "The question's body.",
            "type": "string"
          },
          "choices": {
            "description": "Fetched from survey provider.\nList of choices end user can select to answer this question.",
            "items": {
              "$ref": "#/components/schemas/SurveyQuestionChoices"
            },
            "type": "array"
          }
        }
      },
      "SurveyQuestionChoices": {
        "properties": {
          "text": {
            "description": "Choice text viewed by the end user.",
            "type": "string"
          },
          "value": {
            "description": "Technical value, same as text for text inputs.",
            "type": "string"
          }
        }
      },
      "SurveyQuestionReply": {
        "properties": {
          "text": {
            "type": "string",
            "description": "Reply as viewed/typed by the end user."
          },
          "value": {
            "type": "string",
            "description": "Technical value, same as text for text inputs."
          }
        }
      },
      "SurveyResponse": {
        "properties": {
          "id": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "main_indicator": {
            "type": "integer"
          },
          "main_indicator_scaled": {
            "type": "number"
          },
          "intervention_id": {
            "type": "string"
          },
          "survey_id": {
            "type": "string"
          },
          "source_id": {
            "type": "string"
          },
          "user_id": {
            "type": "string"
          },
          "response_foreign_id": {
            "type": "string",
            "description": "The survey provider's id for this response."
          },
          "questions": {
            "type": "array",
            "description": "Questions answered by this response.",
            "items": {
              "$ref": "#/components/schemas/SurveyResponseQuestion"
            }
          }
        }
      },
      "SurveyResponseQuestion": {
        "properties": {
          "foreign_id": {
            "type": "string",
            "description": "The survey provider's id for this question."
          },
          "text": {
            "type": "string",
            "description": "The question's body."
          },
          "replies": {
            "type": "array",
            "description": "The question's replies. Multiple choices questions can have more than 1 element.",
            "items": {
              "$ref": "#/components/schemas/SurveyQuestionReply"
            }
          }
        }
      },
      "Tag": {
        "properties": {
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ]
      },
      "Task": {
        "properties": {
          "accepted_at": {
            "format": "date-time",
            "type": "string"
          },
          "agent_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "channel_id": {
            "type": "string"
          },
          "completed_at": {
            "format": "date-time",
            "type": "string"
          },
          "content_id": {
            "type": "string"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "expire_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "intervention_id": {
            "type": "string"
          },
          "locked_at": {
            "format": "date-time",
            "type": "string"
          },
          "priority": {
            "type": "integer"
          },
          "step": {
            "type": "string"
          },
          "thread_id": {
            "type": "string"
          },
          "transfered_at": {
            "format": "date-time",
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "Team": {
        "properties": {
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "leader_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "name": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "user_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        },
        "required": [
          "id"
        ]
      },
      "Thread": {
        "properties": {
          "category_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "closed": {
            "type": "boolean"
          },
          "contents_count": {
            "type": "integer"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "extra_data": {
            "type": "object"
          },
          "foreign_id": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "interventions_count": {
            "type": "integer"
          },
          "source_id": {
            "type": "string"
          },
          "thread_category_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "title": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "TimeSheet": {
        "properties": {
          "active": {
            "type": "boolean"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "friday_hours": {
            "type": "string"
          },
          "holidays[]": {
            "items": {
              "$ref": "#/components/schemas/TimeSheetHoliday"
            },
            "type": "array"
          },
          "id": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "monday_hours": {
            "type": "string"
          },
          "saturday_hours": {
            "type": "string"
          },
          "source_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "sunday_hours": {
            "type": "string"
          },
          "thursday_hours": {
            "type": "string"
          },
          "timezone": {
            "type": "string"
          },
          "tuesday_hours": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "wednesday_hours": {
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "TimeSheetHoliday": {
        "properties": {
          "date": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "Timezone": {
        "properties": {
          "name": {
            "format": "string"
          },
          "utc_offset": {
            "format": "integer"
          }
        }
      },
      "UiLocale": {
        "properties": {
          "code": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "UserCapacity": {
        "properties": {
          "channels": {
            "items": {
              "properties": {
                "id": {
                  "type": "string"
                },
                "default_capacity": {
                  "type": "integer"
                },
                "max_capacity": {
                  "type": "integer"
                }
              },
              "type": "object"
            },
            "type": "array"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        }
      },
      "User": {
        "properties": {
          "category_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "enabled": {
            "type": "boolean"
          },
          "external_id": {
            "type": "string"
          },
          "firstname": {
            "type": "string"
          },
          "gender": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "identity_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "invitation_pending": {
            "type": "boolean"
          },
          "lastname": {
            "type": "string"
          },
          "locale": {
            "type": "string"
          },
          "nickname": {
            "type": "string"
          },
          "rc_user_id": {
            "type": "string"
          },
          "role_id": {
            "type": "string"
          },
          "spoken_languages": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "team_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "timezone": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          },
          "user_capacity_id": {
            "type": "string"
          },
          "no_password": {
            "type": "boolean"
          }
        },
        "required": [
          "id"
        ]
      },
      "UserSourcesPermissions": {
        "properties": {
          "source_1_id": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "source_2_id": {
            "items": {
              "type": "string"
            },
            "type": "array"
          }
        }
      },
      "UserSignature": {
        "properties": {
          "id": {
            "type": "string"
          },
          "body": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "source_ids": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "language": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "body"
        ]
      },
      "Webhook": {
        "properties": {
          "active": {
            "type": "boolean"
          },
          "api_access_token": {
            "$ref": "#/components/schemas/WebhookAccessToken"
          },
          "id": {
            "type": "string"
          },
          "registered_events": {
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "staging_use": {
            "type": "boolean"
          },
          "url": {
            "type": "string"
          },
          "verify_token": {
            "type": "string"
          },
          "webhook_status": {
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      },
      "WebhookAccessToken": {
        "properties": {
          "created_at": {
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "updated_at": {
            "format": "date-time",
            "type": "string"
          }
        },
        "required": [
          "id"
        ]
      }
    },
    "securitySchemes": {
      "bearerAuth": {
        "scheme": "bearer",
        "type": "http"
      }
    }
  }
} as const
            