
            export default {
    "swagger": "2.0",
    "info": {
        "title": "Sage One Core API - ES",
        "version": "1.0",
        "description": "Documentation of the Sage One Core API."
    },
    "host": "api-qa.sageapim.com",
    "basePath": "/es/sageone/core/v3",
    "schemes": [
        "https"
    ],
    "securityDefinitions": {
        "apiKeyHeader": {
            "type": "apiKey",
            "name": "Ocp-Apim-Subscription-Key",
            "in": "header"
        },
        "apiKeyQuery": {
            "type": "apiKey",
            "name": "subscription-key",
            "in": "query"
        }
    },
    "security": [
        {
            "apiKeyHeader": []
        },
        {
            "apiKeyQuery": []
        }
    ],
    "paths": {
        "/business": {
            "get": {
                "description": "Show business information",
                "operationId": "getBusiness",
                "summary": "Show business information",
                "tags": [
                    "business"
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Show business information",
                        "schema": {
                            "$ref": "#/definitions/Business"
                        },
                        "examples": {
                            "application/json": "{\r\n  \"created_at\": \"string\",\r\n  \"updated_at\": \"string\",\r\n  \"displayed_as\": \"string\",\r\n  \"id\": \"string\",\r\n  \"name\": \"string\",\r\n  \"address_line_1\": \"string\",\r\n  \"address_line_2\": \"string\",\r\n  \"city\": \"string\",\r\n  \"postal_code\": \"string\",\r\n  \"country\": {\r\n    \"id\": \"string\",\r\n    \"displayed_as\": \"string\"\r\n  },\r\n  \"region\": \"string\",\r\n  \"telephone\": \"string\",\r\n  \"mobile\": \"string\",\r\n  \"website\": \"string\",\r\n  \"is_demo\": true,\r\n  \"subscriptions\": [\r\n    {\r\n      \"created_at\": \"string\",\r\n      \"updated_at\": \"string\",\r\n      \"displayed_as\": \"string\",\r\n      \"id\": \"string\",\r\n      \"active\": true,\r\n      \"status\": \"string\"\r\n    }\r\n  ]\r\n}"
                        }
                    }
                }
            },
            "put": {
                "description": "Updates business information",
                "operationId": "putBusiness",
                "summary": "Updates business information",
                "tags": [
                    "business"
                ],
                "parameters": [
                    {
                        "name": "putBusiness",
                        "in": "body",
                        "schema": {
                            "$ref": "#/definitions/putBusiness"
                        }
                    }
                ],
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Updates business information",
                        "schema": {
                            "$ref": "#/definitions/Business"
                        },
                        "examples": {
                            "application/json": "{\r\n  \"created_at\": \"string\",\r\n  \"updated_at\": \"string\",\r\n  \"displayed_as\": \"string\",\r\n  \"id\": \"string\",\r\n  \"name\": \"string\",\r\n  \"address_line_1\": \"string\",\r\n  \"address_line_2\": \"string\",\r\n  \"city\": \"string\",\r\n  \"postal_code\": \"string\",\r\n  \"country\": {\r\n    \"id\": \"string\",\r\n    \"displayed_as\": \"string\"\r\n  },\r\n  \"region\": \"string\",\r\n  \"telephone\": \"string\",\r\n  \"mobile\": \"string\",\r\n  \"website\": \"string\",\r\n  \"is_demo\": true,\r\n  \"subscriptions\": [\r\n    {\r\n      \"created_at\": \"string\",\r\n      \"updated_at\": \"string\",\r\n      \"displayed_as\": \"string\",\r\n      \"id\": \"string\",\r\n      \"active\": true,\r\n      \"status\": \"string\"\r\n    }\r\n  ]\r\n}"
                        }
                    }
                }
            }
        },
        "/user": {
            "get": {
                "description": "Show user information",
                "operationId": "getUser",
                "summary": "Show user information",
                "tags": [
                    "user"
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Show user information",
                        "schema": {
                            "$ref": "#/definitions/User"
                        },
                        "examples": {
                            "application/json": "{\r\n  \"created_at\": \"string\",\r\n  \"updated_at\": \"string\",\r\n  \"displayed_as\": \"string\",\r\n  \"id\": \"string\",\r\n  \"first_name\": \"string\",\r\n  \"last_name\": \"string\",\r\n  \"initials\": \"string\",\r\n  \"email\": \"string\",\r\n  \"locale\": \"string\",\r\n  \"business_owner\": true\r\n}"
                        }
                    }
                }
            },
            "put": {
                "description": "Updates user information",
                "operationId": "putUser",
                "summary": "Updates user information",
                "tags": [
                    "user"
                ],
                "parameters": [
                    {
                        "name": "putUser",
                        "in": "body",
                        "schema": {
                            "$ref": "#/definitions/putUser"
                        }
                    }
                ],
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Updates user information",
                        "schema": {
                            "$ref": "#/definitions/User"
                        },
                        "examples": {
                            "application/json": "{\r\n  \"created_at\": \"string\",\r\n  \"updated_at\": \"string\",\r\n  \"displayed_as\": \"string\",\r\n  \"id\": \"string\",\r\n  \"first_name\": \"string\",\r\n  \"last_name\": \"string\",\r\n  \"initials\": \"string\",\r\n  \"email\": \"string\",\r\n  \"locale\": \"string\",\r\n  \"business_owner\": true\r\n}"
                        }
                    }
                }
            }
        },
        "/me": {
            "get": {
                "description": "This resource allows you to read summary information about the authenticated user account",
                "operationId": "getMe",
                "summary": "This resource allows you to read summary information about the authenticated user account",
                "tags": [
                    "me"
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "This resource allows you to read summary information about the authenticated user account",
                        "schema": {
                            "$ref": "#/definitions/Me"
                        },
                        "examples": {
                            "application/json": "{\r\n  \"user\": {\r\n    \"created_at\": \"string\",\r\n    \"updated_at\": \"string\",\r\n    \"displayed_as\": \"string\",\r\n    \"id\": \"string\",\r\n    \"first_name\": \"string\",\r\n    \"last_name\": \"string\",\r\n    \"initials\": \"string\",\r\n    \"email\": \"string\",\r\n    \"locale\": \"string\",\r\n    \"business_owner\": true\r\n  },\r\n  \"business\": {\r\n    \"created_at\": \"string\",\r\n    \"updated_at\": \"string\",\r\n    \"displayed_as\": \"string\",\r\n    \"id\": \"string\",\r\n    \"name\": \"string\",\r\n    \"address_line_1\": \"string\",\r\n    \"address_line_2\": \"string\",\r\n    \"city\": \"string\",\r\n    \"postal_code\": \"string\",\r\n    \"country\": {\r\n      \"id\": \"string\",\r\n      \"displayed_as\": \"string\"\r\n    },\r\n    \"region\": \"string\",\r\n    \"telephone\": \"string\",\r\n    \"mobile\": \"string\",\r\n    \"website\": \"string\",\r\n    \"is_demo\": true,\r\n    \"subscriptions\": [\r\n      {\r\n        \"created_at\": \"string\",\r\n        \"updated_at\": \"string\",\r\n        \"displayed_as\": \"string\",\r\n        \"id\": \"string\",\r\n        \"active\": true,\r\n        \"status\": \"string\"\r\n      }\r\n    ]\r\n  }\r\n}"
                        }
                    }
                }
            }
        },
        "/business_relationships": {
            "get": {
                "description": "Show businesses available for the current user",
                "operationId": "getBusinessRelationships",
                "summary": "Show businesses available for the current user",
                "tags": [
                    "business_relationships"
                ],
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "Show businesses available for the current user",
                        "schema": {
                            "$ref": "#/definitions/BusinessRelationshipArray"
                        },
                        "examples": {
                            "application/json": "[\r\n  {\r\n    \"id\": \"string\",\r\n    \"name\": \"string\"\r\n  }\r\n]"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "Business": {
            "type": "object",
            "properties": {
                "created_at": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The datetime when the item was created"
                },
                "updated_at": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The datetime when the item was last updated"
                },
                "displayed_as": {
                    "type": "string",
                    "description": "Display text for the item"
                },
                "id": {
                    "type": "string",
                    "description": "The unique identifier for the business"
                },
                "name": {
                    "type": "string",
                    "description": "The name of the business"
                },
                "address_line_1": {
                    "type": "string",
                    "description": "The first line of the business address"
                },
                "address_line_2": {
                    "type": "string",
                    "description": "The first line of the business address"
                },
                "city": {
                    "type": "string",
                    "description": "The business address town/city"
                },
                "postal_code": {
                    "type": "string",
                    "description": "The business address postal code/zipcode"
                },
                "country": {
                    "$ref": "#/definitions/Country",
                    "description": "The business address country"
                },
                "region": {
                    "type": "string",
                    "description": "The business address state/province/region"
                },
                "telephone": {
                    "type": "string",
                    "description": "The telephone of the business"
                },
                "mobile": {
                    "type": "string",
                    "description": "The mobile of the business"
                },
                "website": {
                    "type": "string",
                    "description": "The website of the business"
                },
                "is_demo": {
                    "type": "boolean",
                    "description": "Indicates whether the business is for demo purposes"
                },
                "subscriptions": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/Subscription"
                    },
                    "description": "The business subscriptions"
                }
            },
            "description": "Updates business information"
        },
        "Country": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string",
                    "description": "The unique identifier for the country"
                },
                "displayed_as": {
                    "type": "string",
                    "description": "Display text for the country"
                }
            }
        },
        "Subscription": {
            "type": "object",
            "properties": {
                "created_at": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The datetime when the item was created"
                },
                "updated_at": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The datetime when the item was last updated"
                },
                "displayed_as": {
                    "type": "string",
                    "description": "Display text for the item"
                },
                "id": {
                    "type": "string",
                    "description": "The unique identifier for the subscription"
                },
                "active": {
                    "type": "boolean",
                    "description": "Indicates whether the subscription is active"
                },
                "status": {
                    "type": "string"
                }
            }
        },
        "putBusiness": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The name of the business"
                },
                "address_line_1": {
                    "type": "string",
                    "description": "The first line of the business address"
                },
                "address_line_2": {
                    "type": "string",
                    "description": "The second line of the business address"
                },
                "city": {
                    "type": "string",
                    "description": "The business address town/city"
                },
                "region": {
                    "type": "string",
                    "description": "The business address state/province/region"
                },
                "postal_code": {
                    "type": "string",
                    "description": "The business address postal code/zipcode"
                },
                "telephone": {
                    "type": "string",
                    "description": "The telephone of the business"
                },
                "mobile": {
                    "type": "string",
                    "description": "The mobile of the business"
                },
                "website": {
                    "type": "string",
                    "description": "The website of the business"
                }
            },
            "description": "Updates business information"
        },
        "User": {
            "type": "object",
            "properties": {
                "created_at": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The datetime when the item was created"
                },
                "updated_at": {
                    "type": "string",
                    "format": "date-time",
                    "description": "The datetime when the item was last updated"
                },
                "displayed_as": {
                    "type": "string",
                    "description": "Display text for the item"
                },
                "id": {
                    "type": "string",
                    "description": "The unique identifier for the user"
                },
                "first_name": {
                    "type": "string",
                    "description": "The first name of the user"
                },
                "last_name": {
                    "type": "string",
                    "description": "The last name of the user"
                },
                "initials": {
                    "type": "string",
                    "description": "The initials of the user"
                },
                "email": {
                    "type": "string",
                    "description": "The email address of the user"
                },
                "locale": {
                    "type": "string",
                    "description": "The locale of the user"
                },
                "business_owner": {
                    "type": "boolean",
                    "description": "Is the current user the business owner?"
                }
            },
            "description": "Updates user information"
        },
        "putUser": {
            "type": "object",
            "properties": {
                "first_name": {
                    "type": "string",
                    "description": "The first name of the user"
                },
                "last_name": {
                    "type": "string",
                    "description": "The last name of the user"
                },
                "initials": {
                    "type": "string",
                    "description": "The initials of the use"
                },
                "locale": {
                    "type": "string",
                    "description": "The locale of the user"
                }
            },
            "description": "Updates user information"
        },
        "Me": {
            "type": "object",
            "properties": {
                "user": {
                    "$ref": "#/definitions/User",
                    "description": "The authenticated user"
                },
                "business": {
                    "$ref": "#/definitions/Business",
                    "description": "The authenticated business"
                }
            },
            "description": "This resource allows you to read summary information about the authenticated user account"
        },
        "BusinessRelationship": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "string",
                    "description": "The unique identifier for the business"
                },
                "name": {
                    "type": "string",
                    "description": "The name of the business"
                }
            },
            "description": "Show businesses available for the current user"
        },
        "BusinessRelationshipArray": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/BusinessRelationship"
            }
        }
    },
    "tags": [
        {
            "name": "business",
            "description": "Operations about businesses"
        },
        {
            "name": "user",
            "description": "Operations about users"
        },
        {
            "name": "me",
            "description": "Operations about mes"
        },
        {
            "name": "business_relationships",
            "description": "Operations about business_relationships"
        }
    ]
} as const
            