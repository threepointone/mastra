
            export default {
  "swagger": "2.0",
  "schemes": [
    "https"
  ],
  "host": "gitlab.com",
  "basePath": "/api",
  "info": {
    "description": "The platform for modern developers\nGitLab unifies issues, code review, CI and CD into a single UI",
    "title": "Gitlab",
    "version": "v3",
    "x-apisguru-categories": [
      "developer_tools"
    ],
    "x-logo": {
      "backgroundColor": "#FFFFFF",
      "url": "https://cloud.githubusercontent.com/assets/21603/24521837/642e411c-1585-11e7-817f-61082580b6f6.png"
    },
    "x-origin": [
      {
        "format": "swagger",
        "url": "https://axil.gitlab.io/swaggerapi/static/swagger.json",
        "version": "2.0"
      },
      {
        "format": "swagger",
        "url": "https://raw.githubusercontent.com/Mermade/openapi-definitions/master/gitlab/swagger.json",
        "version": "2.0"
      }
    ],
    "x-providerName": "gitlab.com"
  },
  "produces": [
    "application/json",
    "text/plain"
  ],
  "securityDefinitions": {
    "private_token_header": {
      "in": "header",
      "name": "PRIVATE_HEADER",
      "type": "apiKey"
    },
    "private_token_query": {
      "in": "query",
      "name": "private_token",
      "type": "apiKey"
    }
  },
  "security": [
    {
      "private_token_header": []
    },
    {
      "private_token_query": []
    }
  ],
  "tags": [
    {
      "description": "Operations about groups",
      "name": "groups"
    },
    {
      "description": "Operations about projects",
      "name": "projects"
    },
    {
      "description": "Operations about internals",
      "name": "internal"
    },
    {
      "description": "Operations about issues",
      "name": "issues"
    },
    {
      "description": "Operations about keys",
      "name": "keys"
    },
    {
      "description": "Operations about cis",
      "name": "ci"
    },
    {
      "description": "Operations about namespaces",
      "name": "namespaces"
    },
    {
      "description": "Operations about notification_settings",
      "name": "notification_settings"
    },
    {
      "description": "Operations about runners",
      "name": "runners"
    },
    {
      "description": "Operations about snippets",
      "name": "snippets"
    },
    {
      "description": "Operations about hooks",
      "name": "hooks"
    },
    {
      "description": "Operations about todos",
      "name": "todos"
    },
    {
      "description": "Operations about users",
      "name": "users"
    },
    {
      "description": "Operations about users",
      "name": "user"
    },
    {
      "description": "Operations about deploy_keys",
      "name": "deploy_keys"
    },
    {
      "description": "Operations about sessions",
      "name": "session"
    },
    {
      "description": "Operations about applications",
      "name": "application"
    },
    {
      "description": "Operations about sidekiqs",
      "name": "sidekiq"
    },
    {
      "description": "Operations about licenses",
      "name": "licenses"
    },
    {
      "description": "Operations about templates",
      "name": "templates"
    },
    {
      "description": "Operations about gitignores",
      "name": "gitignores"
    },
    {
      "description": "Operations about gitlab_ci_ymls",
      "name": "gitlab_ci_ymls"
    },
    {
      "description": "Operations about dockerfiles",
      "name": "dockerfiles"
    },
    {
      "description": "Operations about versions",
      "name": "version"
    }
  ],
  "paths": {
    "/v3/application/settings": {
      "get": {
        "description": "Get the current application settings",
        "operationId": "getV3ApplicationSettings",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the current application settings",
            "schema": {
              "$ref": "#/definitions/ApplicationSetting"
            }
          }
        },
        "summary": "Get the current application settings",
        "tags": [
          "application"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Modify application settings",
        "operationId": "putV3ApplicationSettings",
        "parameters": [
          {
            "description": "Determine if developers can push to master",
            "enum": [
              0,
              1,
              2
            ],
            "format": "int32",
            "in": "formData",
            "name": "default_branch_protection",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The default project visibility",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "default_project_visibility",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The default snippet visibility",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "default_snippet_visibility",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The default group visibility",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "default_group_visibility",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Selected levels cannot be used by non-admin users for projects or snippets. If the public level is restricted, user profiles are only visible to logged in users.",
            "in": "formData",
            "items": {
              "type": "string"
            },
            "name": "restricted_visibility_levels",
            "required": false,
            "type": "array"
          },
          {
            "description": "Enabled sources for code import during project creation. OmniAuth must be configured for GitHub, Bitbucket, and GitLab.com",
            "enum": [
              "github",
              "bitbucket",
              "gitlab",
              "google_code",
              "fogbugz",
              "git",
              "gitlab_project"
            ],
            "in": "formData",
            "items": {
              "type": "string"
            },
            "name": "import_sources",
            "required": false,
            "type": "array"
          },
          {
            "description": "Disable certain OAuth sign-in sources",
            "in": "formData",
            "items": {
              "type": "string"
            },
            "name": "disabled_oauth_sign_in_sources",
            "required": false,
            "type": "array"
          },
          {
            "description": "Allow only the selected protocols to be used for Git access.",
            "enum": [
              "ssh",
              "http",
              "nil"
            ],
            "in": "formData",
            "name": "enabled_git_access_protocol",
            "required": false,
            "type": "string"
          },
          {
            "description": "Flag indicating if the Gravatar service is enabled",
            "in": "formData",
            "name": "gravatar_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "The maximum number of personal projects",
            "format": "int32",
            "in": "formData",
            "name": "default_projects_limit",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Maximum attachment size in MB",
            "format": "int32",
            "in": "formData",
            "name": "max_attachment_size",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Session duration in minutes. GitLab restart is required to apply changes.",
            "format": "int32",
            "in": "formData",
            "name": "session_expire_delay",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Allow users to register any application to use GitLab as an OAuth provider",
            "in": "formData",
            "name": "user_oauth_applications",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Newly registered users will by default be external",
            "in": "formData",
            "name": "user_default_external",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indicating if sign up is enabled",
            "in": "formData",
            "name": "signup_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Send confirmation email on sign-up",
            "in": "formData",
            "name": "send_user_confirmation_email",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "ONLY users with e-mail addresses that match these domain(s) will be able to sign-up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com",
            "in": "formData",
            "name": "domain_whitelist",
            "required": false,
            "type": "string"
          },
          {
            "description": "Enable domain blacklist for sign ups",
            "in": "formData",
            "name": "domain_blacklist_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Users with e-mail addresses that match these domain(s) will NOT be able to sign-up. Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com",
            "in": "formData",
            "name": "domain_blacklist",
            "required": true,
            "type": "string"
          },
          {
            "description": "Text shown after sign up",
            "in": "formData",
            "name": "after_sign_up_text",
            "required": false,
            "type": "string"
          },
          {
            "description": "Flag indicating if sign in is enabled",
            "in": "formData",
            "name": "signin_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Require all users to setup Two-factor authentication",
            "in": "formData",
            "name": "require_two_factor_authentication",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication",
            "format": "int32",
            "in": "formData",
            "name": "two_factor_grace_period",
            "required": true,
            "type": "integer"
          },
          {
            "description": "We will redirect non-logged in users to this page",
            "in": "formData",
            "name": "home_page_url",
            "required": false,
            "type": "string"
          },
          {
            "description": "We will redirect users to this page after they sign out",
            "in": "formData",
            "name": "after_sign_out_path",
            "required": false,
            "type": "string"
          },
          {
            "description": "The sign in text of the GitLab application",
            "in": "formData",
            "name": "sign_in_text",
            "required": false,
            "type": "string"
          },
          {
            "description": "Custom text displayed on the help page",
            "in": "formData",
            "name": "help_page_text",
            "required": false,
            "type": "string"
          },
          {
            "description": "Enable shared runners for new projects",
            "in": "formData",
            "name": "shared_runners_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Shared runners text ",
            "in": "formData",
            "name": "shared_runners_text",
            "required": true,
            "type": "string"
          },
          {
            "description": "Set the maximum file size each build's artifacts can have",
            "format": "int32",
            "in": "formData",
            "name": "max_artifacts_size",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Authorization token duration (minutes)",
            "format": "int32",
            "in": "formData",
            "name": "container_registry_token_expire_delay",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Enable the InfluxDB metrics",
            "in": "formData",
            "name": "metrics_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "The InfluxDB host",
            "in": "formData",
            "name": "metrics_host",
            "required": true,
            "type": "string"
          },
          {
            "description": "The UDP port to use for connecting to InfluxDB",
            "format": "int32",
            "in": "formData",
            "name": "metrics_port",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The amount of InfluxDB connections to open",
            "format": "int32",
            "in": "formData",
            "name": "metrics_pool_size",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The amount of seconds after which an InfluxDB connection will time out",
            "format": "int32",
            "in": "formData",
            "name": "metrics_timeout",
            "required": true,
            "type": "integer"
          },
          {
            "description": "A method call is only tracked when it takes longer to complete than the given amount of milliseconds.",
            "format": "int32",
            "in": "formData",
            "name": "metrics_method_call_threshold",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The sampling interval in seconds",
            "format": "int32",
            "in": "formData",
            "name": "metrics_sample_interval",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The amount of points to store in a single UDP packet",
            "format": "int32",
            "in": "formData",
            "name": "metrics_packet_size",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Enable Sidekiq Job Throttling",
            "in": "formData",
            "name": "sidekiq_throttling_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Choose which queues you wish to throttle",
            "in": "formData",
            "items": {
              "type": "string"
            },
            "name": "sidekiq_throttling_queus",
            "required": true,
            "type": "array"
          },
          {
            "description": "The factor by which the queues should be throttled. A value between 0.0 and 1.0, exclusive.",
            "format": "float",
            "in": "formData",
            "name": "sidekiq_throttling_factor",
            "required": true,
            "type": "number"
          },
          {
            "description": "Helps prevent bots from creating accounts",
            "in": "formData",
            "name": "recaptcha_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Generate site key at http://www.google.com/recaptcha",
            "in": "formData",
            "name": "recaptcha_site_key",
            "required": true,
            "type": "string"
          },
          {
            "description": "Generate private key at http://www.google.com/recaptcha",
            "in": "formData",
            "name": "recaptcha_private_key",
            "required": true,
            "type": "string"
          },
          {
            "description": "Helps prevent bots from creating issues",
            "in": "formData",
            "name": "akismet_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Generate API key at http://www.akismet.com",
            "in": "formData",
            "name": "akismet_api_key",
            "required": true,
            "type": "string"
          },
          {
            "description": "Abuse reports will be sent to this address if it is set. Abuse reports are always available in the admin area.",
            "in": "formData",
            "name": "admin_notification_email",
            "required": false,
            "type": "string"
          },
          {
            "description": "Sentry is an error reporting and logging tool which is currently not shipped with GitLab, get it here: https://getsentry.com",
            "in": "formData",
            "name": "sentry_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Sentry Data Source Name",
            "in": "formData",
            "name": "sentry_dsn",
            "required": true,
            "type": "string"
          },
          {
            "description": "Storage paths for new projects",
            "in": "formData",
            "name": "repository_storage",
            "required": false,
            "type": "string"
          },
          {
            "description": "GitLab will periodically run 'git fsck' in all project and wiki repositories to look for silent disk corruption issues.",
            "in": "formData",
            "name": "repository_checks_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable Koding",
            "in": "formData",
            "name": "koding_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "The Koding team URL",
            "in": "formData",
            "name": "koding_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Enable PlantUML",
            "in": "formData",
            "name": "plantuml_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "The PlantUML server URL",
            "in": "formData",
            "name": "plantuml_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Let GitLab inform you when an update is available.",
            "in": "formData",
            "name": "version_check_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Some email servers do not support overriding the email sender name. Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.",
            "in": "formData",
            "name": "email_author_in_body",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "By default GitLab sends emails in HTML and plain text formats so mail clients can choose what format to use. Disable this option if you only want to send emails in plain text format.",
            "in": "formData",
            "name": "html_emails_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable automatic repository housekeeping (git repack, git gc)",
            "in": "formData",
            "name": "housekeeping_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Creating pack file bitmaps makes housekeeping take a little longer but bitmaps should accelerate 'git clone' performance.",
            "in": "formData",
            "name": "housekeeping_bitmaps_enabled",
            "required": true,
            "type": "boolean"
          },
          {
            "description": "Number of Git pushes after which an incremental 'git repack' is run.",
            "format": "int32",
            "in": "formData",
            "name": "housekeeping_incremental_repack_period",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Number of Git pushes after which a full 'git repack' is run.",
            "format": "int32",
            "in": "formData",
            "name": "housekeeping_full_repack_period",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Number of Git pushes after which 'git gc' is run.",
            "format": "int32",
            "in": "formData",
            "name": "housekeeping_gc_period",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Modify application settings",
            "schema": {
              "$ref": "#/definitions/ApplicationSetting"
            }
          }
        },
        "summary": "Modify application settings",
        "tags": [
          "application"
        ]
      }
    },
    "/v3/ci/lint": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Validation of .gitlab-ci.yml content",
        "operationId": "postV3CiLint",
        "parameters": [
          {
            "description": "Content of .gitlab-ci.yml",
            "in": "formData",
            "name": "content",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Validation of .gitlab-ci.yml content"
          }
        },
        "summary": "Validation of .gitlab-ci.yml content",
        "tags": [
          "ci"
        ]
      }
    },
    "/v3/deploy_keys": {
      "get": {
        "operationId": "getV3DeployKeys",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "get DeployKey(s)"
          }
        },
        "tags": [
          "deploy_keys"
        ]
      }
    },
    "/v3/dockerfiles": {
      "get": {
        "description": "This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.",
        "operationId": "getV3Dockerfiles",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of the available template",
            "schema": {
              "$ref": "#/definitions/TemplatesList"
            }
          }
        },
        "summary": "Get the list of the available template",
        "tags": [
          "dockerfiles"
        ]
      }
    },
    "/v3/dockerfiles/{name}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.",
        "operationId": "getV3DockerfilesName",
        "parameters": [
          {
            "description": "The name of the template",
            "in": "path",
            "name": "name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the text for a specific template present in local filesystem",
            "schema": {
              "$ref": "#/definitions/Template"
            }
          }
        },
        "summary": "Get the text for a specific template present in local filesystem",
        "tags": [
          "dockerfiles"
        ]
      }
    },
    "/v3/gitignores": {
      "get": {
        "description": "This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.",
        "operationId": "getV3Gitignores",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of the available template",
            "schema": {
              "$ref": "#/definitions/TemplatesList"
            }
          }
        },
        "summary": "Get the list of the available template",
        "tags": [
          "gitignores"
        ]
      }
    },
    "/v3/gitignores/{name}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.",
        "operationId": "getV3GitignoresName",
        "parameters": [
          {
            "description": "The name of the template",
            "in": "path",
            "name": "name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the text for a specific template present in local filesystem",
            "schema": {
              "$ref": "#/definitions/Template"
            }
          }
        },
        "summary": "Get the text for a specific template present in local filesystem",
        "tags": [
          "gitignores"
        ]
      }
    },
    "/v3/gitlab_ci_ymls": {
      "get": {
        "description": "This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.",
        "operationId": "getV3GitlabCiYmls",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of the available template",
            "schema": {
              "$ref": "#/definitions/TemplatesList"
            }
          }
        },
        "summary": "Get the list of the available template",
        "tags": [
          "gitlab_ci_ymls"
        ]
      }
    },
    "/v3/gitlab_ci_ymls/{name}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.",
        "operationId": "getV3GitlabCiYmlsName",
        "parameters": [
          {
            "description": "The name of the template",
            "in": "path",
            "name": "name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the text for a specific template present in local filesystem",
            "schema": {
              "$ref": "#/definitions/Template"
            }
          }
        },
        "summary": "Get the text for a specific template present in local filesystem",
        "tags": [
          "gitlab_ci_ymls"
        ]
      }
    },
    "/v3/groups": {
      "get": {
        "description": "Get a groups list",
        "operationId": "getV3Groups",
        "parameters": [
          {
            "description": "Include project statistics",
            "in": "query",
            "name": "statistics",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Array of group ids to exclude from list",
            "in": "formData",
            "items": {
              "format": "int32",
              "type": "integer"
            },
            "name": "skip_groups",
            "required": false,
            "type": "array"
          },
          {
            "description": "Show all group that you have access to",
            "in": "query",
            "name": "all_available",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Search for a specific group",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "default": "name",
            "description": "Order by name or path",
            "enum": [
              "name",
              "path"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "asc",
            "description": "Sort by asc (ascending) or desc (descending)",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a groups list",
            "schema": {
              "$ref": "#/definitions/Group"
            }
          }
        },
        "summary": "Get a groups list",
        "tags": [
          "groups"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a group. Available only for users who can create groups.",
        "operationId": "postV3Groups",
        "parameters": [
          {
            "description": "The name of the group",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The path of the group",
            "in": "formData",
            "name": "path",
            "required": true,
            "type": "string"
          },
          {
            "description": "The description of the group",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The visibility level of the group",
            "format": "int32",
            "in": "formData",
            "name": "visibility_level",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Enable/disable LFS for the projects in this group",
            "in": "formData",
            "name": "lfs_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Allow users to request member access",
            "in": "formData",
            "name": "request_access_enabled",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a group. Available only for users who can create groups.",
            "schema": {
              "$ref": "#/definitions/Group"
            }
          }
        },
        "summary": "Create a group. Available only for users who can create groups.",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/owned": {
      "get": {
        "description": "Get list of owned groups for authenticated user",
        "operationId": "getV3GroupsOwned",
        "parameters": [
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Include project statistics",
            "in": "query",
            "name": "statistics",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get list of owned groups for authenticated user",
            "schema": {
              "$ref": "#/definitions/Group"
            }
          }
        },
        "summary": "Get list of owned groups for authenticated user",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}": {
      "delete": {
        "description": "Remove a group.",
        "operationId": "deleteV3GroupsId",
        "parameters": [
          {
            "description": "The ID of a group",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Remove a group."
          }
        },
        "summary": "Remove a group.",
        "tags": [
          "groups"
        ]
      },
      "get": {
        "description": "Get a single group, with containing projects.",
        "operationId": "getV3GroupsId",
        "parameters": [
          {
            "description": "The ID of a group",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single group, with containing projects.",
            "schema": {
              "$ref": "#/definitions/GroupDetail"
            }
          }
        },
        "summary": "Get a single group, with containing projects.",
        "tags": [
          "groups"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update a group. Available only for users who can administrate groups.",
        "operationId": "putV3GroupsId",
        "parameters": [
          {
            "description": "The ID of a group",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the group",
            "in": "formData",
            "name": "name",
            "required": false,
            "type": "string"
          },
          {
            "description": "The path of the group",
            "in": "formData",
            "name": "path",
            "required": false,
            "type": "string"
          },
          {
            "description": "The description of the group",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The visibility level of the group",
            "format": "int32",
            "in": "formData",
            "name": "visibility_level",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Enable/disable LFS for the projects in this group",
            "in": "formData",
            "name": "lfs_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Allow users to request member access",
            "in": "formData",
            "name": "request_access_enabled",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update a group. Available only for users who can administrate groups.",
            "schema": {
              "$ref": "#/definitions/Group"
            }
          }
        },
        "summary": "Update a group. Available only for users who can administrate groups.",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}/access_requests": {
      "get": {
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "getV3GroupsIdAccessRequests",
        "parameters": [
          {
            "description": "The group ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Gets a list of access requests for a group.",
            "schema": {
              "$ref": "#/definitions/AccessRequester"
            }
          }
        },
        "summary": "Gets a list of access requests for a group.",
        "tags": [
          "groups"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "postV3GroupsIdAccessRequests",
        "parameters": [
          {
            "description": "The group ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Requests access for the authenticated user to a group.",
            "schema": {
              "$ref": "#/definitions/AccessRequester"
            }
          }
        },
        "summary": "Requests access for the authenticated user to a group.",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}/access_requests/{user_id}": {
      "delete": {
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "deleteV3GroupsIdAccessRequestsUserId",
        "parameters": [
          {
            "description": "The group ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the access requester",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Denies an access request for the given user."
          }
        },
        "summary": "Denies an access request for the given user.",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}/access_requests/{user_id}/approve": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "putV3GroupsIdAccessRequestsUserIdApprove",
        "parameters": [
          {
            "description": "The group ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the access requester",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "A valid access level (defaults: `30`, developer access level)",
            "format": "int32",
            "in": "formData",
            "name": "access_level",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Approves an access request for the given user.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Approves an access request for the given user.",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}/issues": {
      "get": {
        "description": "Get a list of group issues",
        "operationId": "getV3GroupsIdIssues",
        "parameters": [
          {
            "description": "The ID of a group",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "default": "opened",
            "description": "Return opened, closed, or all issues",
            "enum": [
              "opened",
              "closed",
              "all"
            ],
            "in": "query",
            "name": "state",
            "required": false,
            "type": "string"
          },
          {
            "description": "Comma-separated list of label names",
            "in": "query",
            "name": "labels",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return issues for a specific milestone",
            "in": "query",
            "name": "milestone",
            "required": false,
            "type": "string"
          },
          {
            "default": "created_at",
            "description": "Return issues ordered by `created_at` or `updated_at` fields.",
            "enum": [
              "created_at",
              "updated_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return issues sorted in `asc` or `desc` order.",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of group issues",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Get a list of group issues",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}/members": {
      "get": {
        "description": "Gets a list of group or project members viewable by the authenticated user.",
        "operationId": "getV3GroupsIdMembers",
        "parameters": [
          {
            "description": "The group ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "A query string to search for members",
            "in": "query",
            "name": "query",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Gets a list of group or project members viewable by the authenticated user.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Gets a list of group or project members viewable by the authenticated user.",
        "tags": [
          "groups"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Adds a member to a group or project.",
        "operationId": "postV3GroupsIdMembers",
        "parameters": [
          {
            "description": "The group ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the new member",
            "format": "int32",
            "in": "formData",
            "name": "user_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "A valid access level (defaults: `30`, developer access level)",
            "format": "int32",
            "in": "formData",
            "name": "access_level",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Date string in the format YEAR-MONTH-DAY",
            "format": "date-time",
            "in": "formData",
            "name": "expires_at",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Adds a member to a group or project.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Adds a member to a group or project.",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}/members/{user_id}": {
      "delete": {
        "description": "Removes a user from a group or project.",
        "operationId": "deleteV3GroupsIdMembersUserId",
        "parameters": [
          {
            "description": "The group ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the member",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Removes a user from a group or project."
          }
        },
        "summary": "Removes a user from a group or project.",
        "tags": [
          "groups"
        ]
      },
      "get": {
        "description": "Gets a member of a group or project.",
        "operationId": "getV3GroupsIdMembersUserId",
        "parameters": [
          {
            "description": "The group ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the member",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Gets a member of a group or project.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Gets a member of a group or project.",
        "tags": [
          "groups"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Updates a member of a group or project.",
        "operationId": "putV3GroupsIdMembersUserId",
        "parameters": [
          {
            "description": "The group ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the new member",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "A valid access level",
            "format": "int32",
            "in": "formData",
            "name": "access_level",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Date string in the format YEAR-MONTH-DAY",
            "format": "date-time",
            "in": "formData",
            "name": "expires_at",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Updates a member of a group or project.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Updates a member of a group or project.",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}/notification_settings": {
      "get": {
        "description": "This feature was introduced in GitLab 8.12",
        "operationId": "getV3GroupsIdNotificationSettings",
        "parameters": [
          {
            "description": "The group ID or project ID or project NAMESPACE/PROJECT_NAME",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get group level notification level settings, defaults to Global",
            "schema": {
              "$ref": "#/definitions/NotificationSetting"
            }
          }
        },
        "summary": "Get group level notification level settings, defaults to Global",
        "tags": [
          "groups"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.12",
        "operationId": "putV3GroupsIdNotificationSettings",
        "parameters": [
          {
            "description": "The group ID or project ID or project NAMESPACE/PROJECT_NAME",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The group notification level",
            "in": "formData",
            "name": "level",
            "required": false,
            "type": "string"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "new_note",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "new_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reopen_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "close_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reassign_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "new_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reopen_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "close_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reassign_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "merge_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "failed_pipeline",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "success_pipeline",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update group level notification level settings, defaults to Global",
            "schema": {
              "$ref": "#/definitions/NotificationSetting"
            }
          }
        },
        "summary": "Update group level notification level settings, defaults to Global",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}/projects": {
      "get": {
        "description": "Get a list of projects in this group.",
        "operationId": "getV3GroupsIdProjects",
        "parameters": [
          {
            "description": "The ID of a group",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Limit by archived status",
            "in": "query",
            "name": "archived",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Limit by visibility",
            "enum": [
              "public",
              "internal",
              "private"
            ],
            "in": "query",
            "name": "visibility",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return list of authorized projects matching the search criteria",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "default": "created_at",
            "description": "Return projects ordered by field",
            "enum": [
              "id",
              "name",
              "path",
              "created_at",
              "updated_at",
              "last_activity_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return projects sorted in ascending and descending order",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return only the ID, URL, name, and path of each project",
            "in": "query",
            "name": "simple",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of projects in this group.",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Get a list of projects in this group.",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/groups/{id}/projects/{project_id}": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Transfer a project to the group namespace. Available only for admin.",
        "operationId": "postV3GroupsIdProjectsProjectId",
        "parameters": [
          {
            "description": "The ID of a group",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID or path of the project",
            "in": "path",
            "name": "project_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Transfer a project to the group namespace. Available only for admin.",
            "schema": {
              "$ref": "#/definitions/GroupDetail"
            }
          }
        },
        "summary": "Transfer a project to the group namespace. Available only for admin.",
        "tags": [
          "groups"
        ]
      }
    },
    "/v3/hooks": {
      "get": {
        "description": "Get the list of system hooks",
        "operationId": "getV3Hooks",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of system hooks",
            "schema": {
              "$ref": "#/definitions/Hook"
            }
          }
        },
        "summary": "Get the list of system hooks",
        "tags": [
          "hooks"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new system hook",
        "operationId": "postV3Hooks",
        "parameters": [
          {
            "description": "The URL to send the request to",
            "in": "formData",
            "name": "url",
            "required": true,
            "type": "string"
          },
          {
            "description": "The token used to validate payloads",
            "in": "formData",
            "name": "token",
            "required": false,
            "type": "string"
          },
          {
            "description": "Trigger hook on push events",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on tag push events",
            "in": "formData",
            "name": "tag_push_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Do SSL verification when triggering the hook",
            "in": "formData",
            "name": "enable_ssl_verification",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new system hook",
            "schema": {
              "$ref": "#/definitions/Hook"
            }
          }
        },
        "summary": "Create a new system hook",
        "tags": [
          "hooks"
        ]
      }
    },
    "/v3/hooks/{id}": {
      "delete": {
        "description": "Delete a hook",
        "operationId": "deleteV3HooksId",
        "parameters": [
          {
            "description": "The ID of the system hook",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a hook",
            "schema": {
              "$ref": "#/definitions/Hook"
            }
          }
        },
        "summary": "Delete a hook",
        "tags": [
          "hooks"
        ]
      },
      "get": {
        "description": "Test a hook",
        "operationId": "getV3HooksId",
        "parameters": [
          {
            "description": "The ID of the system hook",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Test a hook",
            "schema": {
              "$ref": "#/definitions/Hook"
            }
          }
        },
        "summary": "Test a hook",
        "tags": [
          "hooks"
        ]
      }
    },
    "/v3/internal/allowed": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "operationId": "postV3InternalAllowed",
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "created Allowed"
          }
        },
        "tags": [
          "internal"
        ]
      }
    },
    "/v3/internal/broadcast_message": {
      "get": {
        "operationId": "getV3InternalBroadcastMessage",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "get BroadcastMessage(s)"
          }
        },
        "tags": [
          "internal"
        ]
      }
    },
    "/v3/internal/check": {
      "get": {
        "operationId": "getV3InternalCheck",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "get Check(s)"
          }
        },
        "tags": [
          "internal"
        ]
      }
    },
    "/v3/internal/discover": {
      "get": {
        "operationId": "getV3InternalDiscover",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "get Discover(s)"
          }
        },
        "tags": [
          "internal"
        ]
      }
    },
    "/v3/internal/lfs_authenticate": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "operationId": "postV3InternalLfsAuthenticate",
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "created LfsAuthenticate"
          }
        },
        "tags": [
          "internal"
        ]
      }
    },
    "/v3/internal/merge_request_urls": {
      "get": {
        "operationId": "getV3InternalMergeRequestUrls",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "get MergeRequestUrl(s)"
          }
        },
        "tags": [
          "internal"
        ]
      }
    },
    "/v3/internal/two_factor_recovery_codes": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "operationId": "postV3InternalTwoFactorRecoveryCodes",
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "created TwoFactorRecoveryCode"
          }
        },
        "tags": [
          "internal"
        ]
      }
    },
    "/v3/issues": {
      "get": {
        "description": "Get currently authenticated user's issues",
        "operationId": "getV3Issues",
        "parameters": [
          {
            "default": "all",
            "description": "Return opened, closed, or all issues",
            "enum": [
              "opened",
              "closed",
              "all"
            ],
            "in": "query",
            "name": "state",
            "required": false,
            "type": "string"
          },
          {
            "description": "Comma-separated list of label names",
            "in": "query",
            "name": "labels",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return issues for a specific milestone",
            "in": "query",
            "name": "milestone",
            "required": false,
            "type": "string"
          },
          {
            "default": "created_at",
            "description": "Return issues ordered by `created_at` or `updated_at` fields.",
            "enum": [
              "created_at",
              "updated_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return issues sorted in `asc` or `desc` order.",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get currently authenticated user's issues",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Get currently authenticated user's issues",
        "tags": [
          "issues"
        ]
      }
    },
    "/v3/keys/{id}": {
      "get": {
        "description": "Get single ssh key by id. Only available to admin users",
        "operationId": "getV3KeysId",
        "parameters": [
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get single ssh key by id. Only available to admin users",
            "schema": {
              "$ref": "#/definitions/SSHKeyWithUser"
            }
          }
        },
        "summary": "Get single ssh key by id. Only available to admin users",
        "tags": [
          "keys"
        ]
      }
    },
    "/v3/licenses": {
      "get": {
        "description": "This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.",
        "operationId": "getV3Licenses",
        "parameters": [
          {
            "description": "If passed, returns only popular licenses",
            "in": "query",
            "name": "popular",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of the available license template",
            "schema": {
              "$ref": "#/definitions/RepoLicense"
            }
          }
        },
        "summary": "Get the list of the available license template",
        "tags": [
          "licenses"
        ]
      }
    },
    "/v3/licenses/{name}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.",
        "operationId": "getV3LicensesName",
        "parameters": [
          {
            "description": "The name of the template",
            "in": "path",
            "name": "name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the text for a specific license",
            "schema": {
              "$ref": "#/definitions/RepoLicense"
            }
          }
        },
        "summary": "Get the text for a specific license",
        "tags": [
          "licenses"
        ]
      }
    },
    "/v3/namespaces": {
      "get": {
        "description": "Get a namespaces list",
        "operationId": "getV3Namespaces",
        "parameters": [
          {
            "description": "Search query for namespaces",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a namespaces list",
            "schema": {
              "$ref": "#/definitions/Namespace"
            }
          }
        },
        "summary": "Get a namespaces list",
        "tags": [
          "namespaces"
        ]
      }
    },
    "/v3/notification_settings": {
      "get": {
        "description": "This feature was introduced in GitLab 8.12",
        "operationId": "getV3NotificationSettings",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get global notification level settings and email, defaults to Participate",
            "schema": {
              "$ref": "#/definitions/GlobalNotificationSetting"
            }
          }
        },
        "summary": "Get global notification level settings and email, defaults to Participate",
        "tags": [
          "notification_settings"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.12",
        "operationId": "putV3NotificationSettings",
        "parameters": [
          {
            "description": "The global notification level",
            "in": "formData",
            "name": "level",
            "required": false,
            "type": "string"
          },
          {
            "description": "The email address to send notifications",
            "in": "formData",
            "name": "notification_email",
            "required": false,
            "type": "string"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "new_note",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "new_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reopen_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "close_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reassign_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "new_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reopen_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "close_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reassign_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "merge_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "failed_pipeline",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "success_pipeline",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update global notification level settings and email, defaults to Participate",
            "schema": {
              "$ref": "#/definitions/GlobalNotificationSetting"
            }
          }
        },
        "summary": "Update global notification level settings and email, defaults to Participate",
        "tags": [
          "notification_settings"
        ]
      }
    },
    "/v3/projects": {
      "get": {
        "description": "Get a projects list for authenticated user",
        "operationId": "getV3Projects",
        "parameters": [
          {
            "default": "created_at",
            "description": "Return projects ordered by field",
            "enum": [
              "id",
              "name",
              "path",
              "created_at",
              "updated_at",
              "last_activity_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return projects sorted in ascending and descending order",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Limit by archived status",
            "in": "query",
            "name": "archived",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Limit by visibility",
            "enum": [
              "public",
              "internal",
              "private"
            ],
            "in": "query",
            "name": "visibility",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return list of authorized projects matching the search criteria",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Return only the ID, URL, name, and path of each project",
            "in": "query",
            "name": "simple",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a projects list for authenticated user",
            "schema": {
              "$ref": "#/definitions/BasicProjectDetails"
            }
          }
        },
        "summary": "Get a projects list for authenticated user",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create new project",
        "operationId": "postV3Projects",
        "parameters": [
          {
            "description": "The name of the project",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The path of the repository",
            "in": "formData",
            "name": "path",
            "required": false,
            "type": "string"
          },
          {
            "description": "The description of the project",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "Flag indication if the issue tracker is enabled",
            "in": "formData",
            "name": "issues_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if merge requests are enabled",
            "in": "formData",
            "name": "merge_requests_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if the wiki is enabled",
            "in": "formData",
            "name": "wiki_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if builds are enabled",
            "in": "formData",
            "name": "builds_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if snippets are enabled",
            "in": "formData",
            "name": "snippets_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if shared runners are enabled for that project",
            "in": "formData",
            "name": "shared_runners_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if the container registry is enabled for that project",
            "in": "formData",
            "name": "container_registry_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if Git LFS is enabled for that project",
            "in": "formData",
            "name": "lfs_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Create a public project. The same as visibility_level = 20.",
            "in": "formData",
            "name": "public",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Create a public project. The same as visibility_level = 20.",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "visibility_level",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Perform public builds",
            "in": "formData",
            "name": "public_builds",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Allow users to request member access",
            "in": "formData",
            "name": "request_access_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Only allow to merge if builds succeed",
            "in": "formData",
            "name": "only_allow_merge_if_build_succeeds",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Only allow to merge if all discussions are resolved",
            "in": "formData",
            "name": "only_allow_merge_if_all_discussions_are_resolved",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Namespace ID for the new project. Default to the user namespace.",
            "format": "int32",
            "in": "formData",
            "name": "namespace_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "URL from which the project is imported",
            "in": "formData",
            "name": "import_url",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create new project",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Create new project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/all": {
      "get": {
        "description": "Get all projects for admin user",
        "operationId": "getV3ProjectsAll",
        "parameters": [
          {
            "default": "created_at",
            "description": "Return projects ordered by field",
            "enum": [
              "id",
              "name",
              "path",
              "created_at",
              "updated_at",
              "last_activity_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return projects sorted in ascending and descending order",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Limit by archived status",
            "in": "query",
            "name": "archived",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Limit by visibility",
            "enum": [
              "public",
              "internal",
              "private"
            ],
            "in": "query",
            "name": "visibility",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return list of authorized projects matching the search criteria",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Return only the ID, URL, name, and path of each project",
            "in": "query",
            "name": "simple",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Include project statistics",
            "in": "query",
            "name": "statistics",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get all projects for admin user",
            "schema": {
              "$ref": "#/definitions/BasicProjectDetails"
            }
          }
        },
        "summary": "Get all projects for admin user",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/fork/{id}": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Fork new project for the current user or provided namespace.",
        "operationId": "postV3ProjectsForkId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID or name of the namespace that the project will be forked into",
            "in": "formData",
            "name": "namespace",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Fork new project for the current user or provided namespace.",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Fork new project for the current user or provided namespace.",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/owned": {
      "get": {
        "description": "Get an owned projects list for authenticated user",
        "operationId": "getV3ProjectsOwned",
        "parameters": [
          {
            "default": "created_at",
            "description": "Return projects ordered by field",
            "enum": [
              "id",
              "name",
              "path",
              "created_at",
              "updated_at",
              "last_activity_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return projects sorted in ascending and descending order",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Limit by archived status",
            "in": "query",
            "name": "archived",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Limit by visibility",
            "enum": [
              "public",
              "internal",
              "private"
            ],
            "in": "query",
            "name": "visibility",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return list of authorized projects matching the search criteria",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Return only the ID, URL, name, and path of each project",
            "in": "query",
            "name": "simple",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Include project statistics",
            "in": "query",
            "name": "statistics",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get an owned projects list for authenticated user",
            "schema": {
              "$ref": "#/definitions/BasicProjectDetails"
            }
          }
        },
        "summary": "Get an owned projects list for authenticated user",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/search/{query}": {
      "get": {
        "description": "Search for projects the current user has access to",
        "operationId": "getV3ProjectsSearchQuery",
        "parameters": [
          {
            "description": "The project name to be searched",
            "in": "path",
            "name": "query",
            "required": true,
            "type": "string"
          },
          {
            "default": "created_at",
            "description": "Return projects ordered by field",
            "enum": [
              "id",
              "name",
              "path",
              "created_at",
              "updated_at",
              "last_activity_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return projects sorted in ascending and descending order",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Search for projects the current user has access to",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Search for projects the current user has access to",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/starred": {
      "get": {
        "description": "Gets starred project for the authenticated user",
        "operationId": "getV3ProjectsStarred",
        "parameters": [
          {
            "default": "created_at",
            "description": "Return projects ordered by field",
            "enum": [
              "id",
              "name",
              "path",
              "created_at",
              "updated_at",
              "last_activity_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return projects sorted in ascending and descending order",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Limit by archived status",
            "in": "query",
            "name": "archived",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Limit by visibility",
            "enum": [
              "public",
              "internal",
              "private"
            ],
            "in": "query",
            "name": "visibility",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return list of authorized projects matching the search criteria",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Return only the ID, URL, name, and path of each project",
            "in": "query",
            "name": "simple",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Gets starred project for the authenticated user",
            "schema": {
              "$ref": "#/definitions/BasicProjectDetails"
            }
          }
        },
        "summary": "Gets starred project for the authenticated user",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/user/{user_id}": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create new project for a specified user. Only available to admin users.",
        "operationId": "postV3ProjectsUserUserId",
        "parameters": [
          {
            "description": "The name of the project",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a user",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The default branch of the project",
            "in": "formData",
            "name": "default_branch",
            "required": false,
            "type": "string"
          },
          {
            "description": "The description of the project",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "Flag indication if the issue tracker is enabled",
            "in": "formData",
            "name": "issues_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if merge requests are enabled",
            "in": "formData",
            "name": "merge_requests_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if the wiki is enabled",
            "in": "formData",
            "name": "wiki_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if builds are enabled",
            "in": "formData",
            "name": "builds_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if snippets are enabled",
            "in": "formData",
            "name": "snippets_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if shared runners are enabled for that project",
            "in": "formData",
            "name": "shared_runners_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if the container registry is enabled for that project",
            "in": "formData",
            "name": "container_registry_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if Git LFS is enabled for that project",
            "in": "formData",
            "name": "lfs_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Create a public project. The same as visibility_level = 20.",
            "in": "formData",
            "name": "public",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Create a public project. The same as visibility_level = 20.",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "visibility_level",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Perform public builds",
            "in": "formData",
            "name": "public_builds",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Allow users to request member access",
            "in": "formData",
            "name": "request_access_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Only allow to merge if builds succeed",
            "in": "formData",
            "name": "only_allow_merge_if_build_succeeds",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Only allow to merge if all discussions are resolved",
            "in": "formData",
            "name": "only_allow_merge_if_all_discussions_are_resolved",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Namespace ID for the new project. Default to the user namespace.",
            "format": "int32",
            "in": "formData",
            "name": "namespace_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "URL from which the project is imported",
            "in": "formData",
            "name": "import_url",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create new project for a specified user. Only available to admin users.",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Create new project for a specified user. Only available to admin users.",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/visible": {
      "get": {
        "description": "Get a list of visible projects for authenticated user",
        "operationId": "getV3ProjectsVisible",
        "parameters": [
          {
            "default": "created_at",
            "description": "Return projects ordered by field",
            "enum": [
              "id",
              "name",
              "path",
              "created_at",
              "updated_at",
              "last_activity_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return projects sorted in ascending and descending order",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Limit by archived status",
            "in": "query",
            "name": "archived",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Limit by visibility",
            "enum": [
              "public",
              "internal",
              "private"
            ],
            "in": "query",
            "name": "visibility",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return list of authorized projects matching the search criteria",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Return only the ID, URL, name, and path of each project",
            "in": "query",
            "name": "simple",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of visible projects for authenticated user",
            "schema": {
              "$ref": "#/definitions/BasicProjectDetails"
            }
          }
        },
        "summary": "Get a list of visible projects for authenticated user",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}": {
      "delete": {
        "description": "Remove a project",
        "operationId": "deleteV3ProjectsId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Remove a project"
          }
        },
        "summary": "Remove a project",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a single project",
        "operationId": "getV3ProjectsId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single project",
            "schema": {
              "$ref": "#/definitions/ProjectWithAccess"
            }
          }
        },
        "summary": "Get a single project",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing project",
        "operationId": "putV3ProjectsId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the project",
            "in": "formData",
            "name": "name",
            "required": false,
            "type": "string"
          },
          {
            "description": "The default branch of the project",
            "in": "formData",
            "name": "default_branch",
            "required": false,
            "type": "string"
          },
          {
            "description": "The path of the repository",
            "in": "formData",
            "name": "path",
            "required": false,
            "type": "string"
          },
          {
            "description": "The description of the project",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "Flag indication if the issue tracker is enabled",
            "in": "formData",
            "name": "issues_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if merge requests are enabled",
            "in": "formData",
            "name": "merge_requests_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if the wiki is enabled",
            "in": "formData",
            "name": "wiki_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if builds are enabled",
            "in": "formData",
            "name": "builds_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if snippets are enabled",
            "in": "formData",
            "name": "snippets_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if shared runners are enabled for that project",
            "in": "formData",
            "name": "shared_runners_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if the container registry is enabled for that project",
            "in": "formData",
            "name": "container_registry_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indication if Git LFS is enabled for that project",
            "in": "formData",
            "name": "lfs_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Create a public project. The same as visibility_level = 20.",
            "in": "formData",
            "name": "public",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Create a public project. The same as visibility_level = 20.",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "visibility_level",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Perform public builds",
            "in": "formData",
            "name": "public_builds",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Allow users to request member access",
            "in": "formData",
            "name": "request_access_enabled",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Only allow to merge if builds succeed",
            "in": "formData",
            "name": "only_allow_merge_if_build_succeeds",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Only allow to merge if all discussions are resolved",
            "in": "formData",
            "name": "only_allow_merge_if_all_discussions_are_resolved",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing project",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Update an existing project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/(ref/{ref}/)trigger/builds": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Trigger a GitLab project build",
        "operationId": "postV3ProjectsId(refRef)triggerBuilds",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit sha or name of a branch or tag",
            "in": "path",
            "name": "ref",
            "required": true,
            "type": "string"
          },
          {
            "description": "The unique token of trigger",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Trigger a GitLab project build",
            "schema": {
              "$ref": "#/definitions/TriggerRequest"
            }
          }
        },
        "summary": "Trigger a GitLab project build",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/access_requests": {
      "get": {
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "getV3ProjectsIdAccessRequests",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Gets a list of access requests for a project.",
            "schema": {
              "$ref": "#/definitions/AccessRequester"
            }
          }
        },
        "summary": "Gets a list of access requests for a project.",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "postV3ProjectsIdAccessRequests",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Requests access for the authenticated user to a project.",
            "schema": {
              "$ref": "#/definitions/AccessRequester"
            }
          }
        },
        "summary": "Requests access for the authenticated user to a project.",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/access_requests/{user_id}": {
      "delete": {
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "deleteV3ProjectsIdAccessRequestsUserId",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the access requester",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Denies an access request for the given user."
          }
        },
        "summary": "Denies an access request for the given user.",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/access_requests/{user_id}/approve": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "putV3ProjectsIdAccessRequestsUserIdApprove",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the access requester",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "A valid access level (defaults: `30`, developer access level)",
            "format": "int32",
            "in": "formData",
            "name": "access_level",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Approves an access request for the given user.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Approves an access request for the given user.",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/archive": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Archive a project",
        "operationId": "postV3ProjectsIdArchive",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Archive a project",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Archive a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/boards": {
      "get": {
        "description": "This feature was introduced in 8.13",
        "operationId": "getV3ProjectsIdBoards",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get all project boards",
            "schema": {
              "$ref": "#/definitions/Board"
            }
          }
        },
        "summary": "Get all project boards",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/boards/{board_id}/lists": {
      "get": {
        "description": "Does not include `backlog` and `done` lists. This feature was introduced in 8.13",
        "operationId": "getV3ProjectsIdBoardsBoardIdLists",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a board",
            "format": "int32",
            "in": "path",
            "name": "board_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the lists of a project board",
            "schema": {
              "$ref": "#/definitions/List"
            }
          }
        },
        "summary": "Get the lists of a project board",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in 8.13",
        "operationId": "postV3ProjectsIdBoardsBoardIdLists",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a board",
            "format": "int32",
            "in": "path",
            "name": "board_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of an existing label",
            "format": "int32",
            "in": "formData",
            "name": "label_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new board list",
            "schema": {
              "$ref": "#/definitions/List"
            }
          }
        },
        "summary": "Create a new board list",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/boards/{board_id}/lists/{list_id}": {
      "delete": {
        "description": "This feature was introduced in 8.13",
        "operationId": "deleteV3ProjectsIdBoardsBoardIdListsListId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a board",
            "format": "int32",
            "in": "path",
            "name": "board_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a board list",
            "format": "int32",
            "in": "path",
            "name": "list_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a board list",
            "schema": {
              "$ref": "#/definitions/List"
            }
          }
        },
        "summary": "Delete a board list",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "This feature was introduced in 8.13",
        "operationId": "getV3ProjectsIdBoardsBoardIdListsListId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a board",
            "format": "int32",
            "in": "path",
            "name": "board_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a list",
            "format": "int32",
            "in": "path",
            "name": "list_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of a project board",
            "schema": {
              "$ref": "#/definitions/List"
            }
          }
        },
        "summary": "Get a list of a project board",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in 8.13",
        "operationId": "putV3ProjectsIdBoardsBoardIdListsListId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a board",
            "format": "int32",
            "in": "path",
            "name": "board_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a list",
            "format": "int32",
            "in": "path",
            "name": "list_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The position of the list",
            "format": "int32",
            "in": "formData",
            "name": "position",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Moves a board list to a new position",
            "schema": {
              "$ref": "#/definitions/List"
            }
          }
        },
        "summary": "Moves a board list to a new position",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds": {
      "get": {
        "description": "Get a project builds",
        "operationId": "getV3ProjectsIdBuilds",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The scope of builds to show",
            "enum": [
              "pending",
              "running",
              "failed",
              "success",
              "canceled"
            ],
            "in": "query",
            "name": "scope",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a project builds",
            "schema": {
              "$ref": "#/definitions/Build"
            }
          }
        },
        "summary": "Get a project builds",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds/artifacts/{ref_name}/download": {
      "get": {
        "description": "This feature was introduced in GitLab 8.10",
        "operationId": "getV3ProjectsIdBuildsArtifactsRefNameDownload",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ref from repository",
            "in": "path",
            "name": "ref_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name for the build",
            "in": "query",
            "name": "job",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Download the artifacts file from build"
          }
        },
        "summary": "Download the artifacts file from build",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds/{build_id}": {
      "get": {
        "description": "Get a specific build of a project",
        "operationId": "getV3ProjectsIdBuildsBuildId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a build",
            "format": "int32",
            "in": "path",
            "name": "build_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific build of a project",
            "schema": {
              "$ref": "#/definitions/Build"
            }
          }
        },
        "summary": "Get a specific build of a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds/{build_id}/artifacts": {
      "get": {
        "description": "This feature was introduced in GitLab 8.5",
        "operationId": "getV3ProjectsIdBuildsBuildIdArtifacts",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a build",
            "format": "int32",
            "in": "path",
            "name": "build_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Download the artifacts file from build"
          }
        },
        "summary": "Download the artifacts file from build",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds/{build_id}/artifacts/keep": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Keep the artifacts to prevent them from being deleted",
        "operationId": "postV3ProjectsIdBuildsBuildIdArtifactsKeep",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a build",
            "format": "int32",
            "in": "path",
            "name": "build_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Keep the artifacts to prevent them from being deleted",
            "schema": {
              "$ref": "#/definitions/Build"
            }
          }
        },
        "summary": "Keep the artifacts to prevent them from being deleted",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds/{build_id}/cancel": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Cancel a specific build of a project",
        "operationId": "postV3ProjectsIdBuildsBuildIdCancel",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a build",
            "format": "int32",
            "in": "path",
            "name": "build_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Cancel a specific build of a project",
            "schema": {
              "$ref": "#/definitions/Build"
            }
          }
        },
        "summary": "Cancel a specific build of a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds/{build_id}/erase": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Erase build (remove artifacts and build trace)",
        "operationId": "postV3ProjectsIdBuildsBuildIdErase",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a build",
            "format": "int32",
            "in": "path",
            "name": "build_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Erase build (remove artifacts and build trace)",
            "schema": {
              "$ref": "#/definitions/Build"
            }
          }
        },
        "summary": "Erase build (remove artifacts and build trace)",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds/{build_id}/play": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was added in GitLab 8.11",
        "operationId": "postV3ProjectsIdBuildsBuildIdPlay",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a Build",
            "format": "int32",
            "in": "path",
            "name": "build_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Trigger a manual build",
            "schema": {
              "$ref": "#/definitions/Build"
            }
          }
        },
        "summary": "Trigger a manual build",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds/{build_id}/retry": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Retry a specific build of a project",
        "operationId": "postV3ProjectsIdBuildsBuildIdRetry",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a build",
            "format": "int32",
            "in": "path",
            "name": "build_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Retry a specific build of a project",
            "schema": {
              "$ref": "#/definitions/Build"
            }
          }
        },
        "summary": "Retry a specific build of a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/builds/{build_id}/trace": {
      "get": {
        "description": "Get a trace of a specific build of a project",
        "operationId": "getV3ProjectsIdBuildsBuildIdTrace",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a build",
            "format": "int32",
            "in": "path",
            "name": "build_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a trace of a specific build of a project"
          }
        },
        "summary": "Get a trace of a specific build of a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/deploy_keys": {
      "get": {
        "description": "Get a specific project's deploy keys",
        "operationId": "getV3ProjectsIdDeployKeys",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific project's deploy keys",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Get a specific project's deploy keys",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add new deploy key to currently authenticated user",
        "operationId": "postV3ProjectsIdDeployKeys",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The new deploy key",
            "in": "formData",
            "name": "key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the deploy key",
            "in": "formData",
            "name": "title",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add new deploy key to currently authenticated user",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Add new deploy key to currently authenticated user",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/deploy_keys/{key_id}": {
      "delete": {
        "description": "Delete deploy key for a project",
        "operationId": "deleteV3ProjectsIdDeployKeysKeyId",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the deploy key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete deploy key for a project",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Delete deploy key for a project",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get single deploy key",
        "operationId": "getV3ProjectsIdDeployKeysKeyId",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the deploy key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get single deploy key",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Get single deploy key",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/deploy_keys/{key_id}/disable": {
      "delete": {
        "description": "This feature was added in GitLab 8.11",
        "operationId": "deleteV3ProjectsIdDeployKeysKeyIdDisable",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the deploy key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Disable a deploy key for a project",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Disable a deploy key for a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/deploy_keys/{key_id}/enable": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was added in GitLab 8.11",
        "operationId": "postV3ProjectsIdDeployKeysKeyIdEnable",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the deploy key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Enable a deploy key for a project",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Enable a deploy key for a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/deployments": {
      "get": {
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "getV3ProjectsIdDeployments",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get all deployments of the project",
            "schema": {
              "$ref": "#/definitions/Deployment"
            }
          }
        },
        "summary": "Get all deployments of the project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/deployments/{deployment_id}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "getV3ProjectsIdDeploymentsDeploymentId",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The deployment ID",
            "format": "int32",
            "in": "path",
            "name": "deployment_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Gets a specific deployment",
            "schema": {
              "$ref": "#/definitions/Deployment"
            }
          }
        },
        "summary": "Gets a specific deployment",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/environments": {
      "get": {
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "getV3ProjectsIdEnvironments",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get all environments of the project",
            "schema": {
              "$ref": "#/definitions/Environment"
            }
          }
        },
        "summary": "Get all environments of the project",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "postV3ProjectsIdEnvironments",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the environment to be created",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "description": "URL on which this deployment is viewable",
            "in": "formData",
            "name": "external_url",
            "required": false,
            "type": "string"
          },
          {
            "in": "formData",
            "name": "slug",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Creates a new environment",
            "schema": {
              "$ref": "#/definitions/Environment"
            }
          }
        },
        "summary": "Creates a new environment",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/environments/{environment_id}": {
      "delete": {
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "deleteV3ProjectsIdEnvironmentsEnvironmentId",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The environment ID",
            "format": "int32",
            "in": "path",
            "name": "environment_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Deletes an existing environment",
            "schema": {
              "$ref": "#/definitions/Environment"
            }
          }
        },
        "summary": "Deletes an existing environment",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "putV3ProjectsIdEnvironmentsEnvironmentId",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The environment ID",
            "format": "int32",
            "in": "path",
            "name": "environment_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The new environment name",
            "in": "formData",
            "name": "name",
            "required": false,
            "type": "string"
          },
          {
            "description": "The new URL on which this deployment is viewable",
            "in": "formData",
            "name": "external_url",
            "required": false,
            "type": "string"
          },
          {
            "in": "formData",
            "name": "slug",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Updates an existing environment",
            "schema": {
              "$ref": "#/definitions/Environment"
            }
          }
        },
        "summary": "Updates an existing environment",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/events": {
      "get": {
        "description": "Get events for a single project",
        "operationId": "getV3ProjectsIdEvents",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get events for a single project",
            "schema": {
              "$ref": "#/definitions/Event"
            }
          }
        },
        "summary": "Get events for a single project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/fork": {
      "delete": {
        "description": "Remove a forked_from relationship",
        "operationId": "deleteV3ProjectsIdFork",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Remove a forked_from relationship"
          }
        },
        "summary": "Remove a forked_from relationship",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/fork/{forked_from_id}": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Mark this project as forked from another",
        "operationId": "postV3ProjectsIdForkForkedFromId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the project it was forked from",
            "in": "path",
            "name": "forked_from_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Mark this project as forked from another"
          }
        },
        "summary": "Mark this project as forked from another",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/hooks": {
      "get": {
        "description": "Get project hooks",
        "operationId": "getV3ProjectsIdHooks",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get project hooks",
            "schema": {
              "$ref": "#/definitions/ProjectHook"
            }
          }
        },
        "summary": "Get project hooks",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add hook to project",
        "operationId": "postV3ProjectsIdHooks",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The URL to send the request to",
            "in": "formData",
            "name": "url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Trigger hook on push events",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on issues events",
            "in": "formData",
            "name": "issues_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on merge request events",
            "in": "formData",
            "name": "merge_requests_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on tag push events",
            "in": "formData",
            "name": "tag_push_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on note(comment) events",
            "in": "formData",
            "name": "note_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on build events",
            "in": "formData",
            "name": "build_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on pipeline events",
            "in": "formData",
            "name": "pipeline_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on wiki events",
            "in": "formData",
            "name": "wiki_page_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Do SSL verification when triggering the hook",
            "in": "formData",
            "name": "enable_ssl_verification",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Secret token to validate received payloads; this will not be returned in the response",
            "in": "formData",
            "name": "token",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add hook to project",
            "schema": {
              "$ref": "#/definitions/ProjectHook"
            }
          }
        },
        "summary": "Add hook to project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/hooks/{hook_id}": {
      "delete": {
        "description": "Deletes project hook",
        "operationId": "deleteV3ProjectsIdHooksHookId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the hook to delete",
            "format": "int32",
            "in": "path",
            "name": "hook_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Deletes project hook",
            "schema": {
              "$ref": "#/definitions/ProjectHook"
            }
          }
        },
        "summary": "Deletes project hook",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a project hook",
        "operationId": "getV3ProjectsIdHooksHookId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project hook",
            "format": "int32",
            "in": "path",
            "name": "hook_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a project hook",
            "schema": {
              "$ref": "#/definitions/ProjectHook"
            }
          }
        },
        "summary": "Get a project hook",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing project hook",
        "operationId": "putV3ProjectsIdHooksHookId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the hook to update",
            "format": "int32",
            "in": "path",
            "name": "hook_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The URL to send the request to",
            "in": "formData",
            "name": "url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Trigger hook on push events",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on issues events",
            "in": "formData",
            "name": "issues_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on merge request events",
            "in": "formData",
            "name": "merge_requests_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on tag push events",
            "in": "formData",
            "name": "tag_push_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on note(comment) events",
            "in": "formData",
            "name": "note_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on build events",
            "in": "formData",
            "name": "build_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on pipeline events",
            "in": "formData",
            "name": "pipeline_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Trigger hook on wiki events",
            "in": "formData",
            "name": "wiki_page_events",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Do SSL verification when triggering the hook",
            "in": "formData",
            "name": "enable_ssl_verification",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Secret token to validate received payloads; this will not be returned in the response",
            "in": "formData",
            "name": "token",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing project hook",
            "schema": {
              "$ref": "#/definitions/ProjectHook"
            }
          }
        },
        "summary": "Update an existing project hook",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues": {
      "get": {
        "description": "Get a list of project issues",
        "operationId": "getV3ProjectsIdIssues",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "default": "all",
            "description": "Return opened, closed, or all issues",
            "enum": [
              "opened",
              "closed",
              "all"
            ],
            "in": "query",
            "name": "state",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return the issue having the given `iid`",
            "format": "int32",
            "in": "query",
            "name": "iid",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Comma-separated list of label names",
            "in": "query",
            "name": "labels",
            "required": false,
            "type": "string"
          },
          {
            "description": "Return issues for a specific milestone",
            "in": "query",
            "name": "milestone",
            "required": false,
            "type": "string"
          },
          {
            "default": "created_at",
            "description": "Return issues ordered by `created_at` or `updated_at` fields.",
            "enum": [
              "created_at",
              "updated_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return issues sorted in `asc` or `desc` order.",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project issues",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Get a list of project issues",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new project issue",
        "operationId": "postV3ProjectsIdIssues",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The title of an issue",
            "in": "formData",
            "name": "title",
            "required": true,
            "type": "string"
          },
          {
            "description": "Date time when the issue was created. Available only for admins and project owners.",
            "format": "date-time",
            "in": "formData",
            "name": "created_at",
            "required": false,
            "type": "string"
          },
          {
            "description": "The IID of a merge request for which to resolve discussions",
            "format": "int32",
            "in": "formData",
            "name": "merge_request_for_resolving_discussions",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The description of an issue",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The ID of a user to assign issue",
            "format": "int32",
            "in": "formData",
            "name": "assignee_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The ID of a milestone to assign issue",
            "format": "int32",
            "in": "formData",
            "name": "milestone_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Comma-separated list of label names",
            "in": "formData",
            "name": "labels",
            "required": false,
            "type": "string"
          },
          {
            "description": "Date time string in the format YEAR-MONTH-DAY",
            "in": "formData",
            "name": "due_date",
            "required": false,
            "type": "string"
          },
          {
            "description": "Boolean parameter if the issue should be confidential",
            "in": "formData",
            "name": "confidential",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new project issue",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Create a new project issue",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}": {
      "delete": {
        "description": "Delete a project issue",
        "operationId": "deleteV3ProjectsIdIssuesIssueId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project issue",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Delete a project issue"
          }
        },
        "summary": "Delete a project issue",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a single project issue",
        "operationId": "getV3ProjectsIdIssuesIssueId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project issue",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single project issue",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Get a single project issue",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing issue",
        "operationId": "putV3ProjectsIdIssuesIssueId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project issue",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The title of an issue",
            "in": "formData",
            "name": "title",
            "required": false,
            "type": "string"
          },
          {
            "description": "Date time when the issue was updated. Available only for admins and project owners.",
            "format": "date-time",
            "in": "formData",
            "name": "updated_at",
            "required": false,
            "type": "string"
          },
          {
            "description": "State of the issue",
            "enum": [
              "reopen",
              "close"
            ],
            "in": "formData",
            "name": "state_event",
            "required": false,
            "type": "string"
          },
          {
            "description": "The description of an issue",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The ID of a user to assign issue",
            "format": "int32",
            "in": "formData",
            "name": "assignee_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The ID of a milestone to assign issue",
            "format": "int32",
            "in": "formData",
            "name": "milestone_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Comma-separated list of label names",
            "in": "formData",
            "name": "labels",
            "required": false,
            "type": "string"
          },
          {
            "description": "Date time string in the format YEAR-MONTH-DAY",
            "in": "formData",
            "name": "due_date",
            "required": false,
            "type": "string"
          },
          {
            "description": "Boolean parameter if the issue should be confidential",
            "in": "formData",
            "name": "confidential",
            "required": false,
            "type": "boolean"
          },
          {
            "in": "formData",
            "name": "created_at",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing issue",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Update an existing issue",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/add_spent_time": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add spent time for a project issue",
        "operationId": "postV3ProjectsIdIssuesIssueIdAddSpentTime",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project issue",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The duration to be parsed",
            "in": "formData",
            "name": "duration",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add spent time for a project issue"
          }
        },
        "summary": "Add spent time for a project issue",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/award_emoji": {
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdIssuesIssueIdAwardEmoji",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of an Issue, Merge Request or Snippet",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project +awardable+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a list of project +awardable+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in 8.9",
        "operationId": "postV3ProjectsIdIssuesIssueIdAwardEmoji",
        "parameters": [
          {
            "description": "The name of a award_emoji (without colons)",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Award a new Emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Award a new Emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/award_emoji/{award_id}": {
      "delete": {
        "description": "This feature was introduced in 8.9",
        "operationId": "deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of an award emoji",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a +awardables+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Delete a +awardables+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of the award",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a specific award emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/move": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Move an existing issue",
        "operationId": "postV3ProjectsIdIssuesIssueIdMove",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project issue",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of the new project",
            "format": "int32",
            "in": "formData",
            "name": "to_project_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Move an existing issue",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Move an existing issue",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji": {
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji",
        "parameters": [
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project +awardable+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a list of project +awardable+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in 8.9",
        "operationId": "postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji",
        "parameters": [
          {
            "description": "The name of a award_emoji (without colons)",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Award a new Emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Award a new Emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji/{award_id}": {
      "delete": {
        "description": "This feature was introduced in 8.9",
        "operationId": "deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of an award emoji",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a +awardables+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Delete a +awardables+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of the award",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a specific award emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/reset_spent_time": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Reset spent time for a project issue",
        "operationId": "postV3ProjectsIdIssuesIssueIdResetSpentTime",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project issue",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Reset spent time for a project issue"
          }
        },
        "summary": "Reset spent time for a project issue",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/reset_time_estimate": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Reset the time estimate for a project issue",
        "operationId": "postV3ProjectsIdIssuesIssueIdResetTimeEstimate",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project issue",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Reset the time estimate for a project issue"
          }
        },
        "summary": "Reset the time estimate for a project issue",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/time_estimate": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Set a time estimate for a project issue",
        "operationId": "postV3ProjectsIdIssuesIssueIdTimeEstimate",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project issue",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The duration to be parsed",
            "in": "formData",
            "name": "duration",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Set a time estimate for a project issue"
          }
        },
        "summary": "Set a time estimate for a project issue",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/time_stats": {
      "get": {
        "description": "Show time stats for a project issue",
        "operationId": "getV3ProjectsIdIssuesIssueIdTimeStats",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project issue",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Show time stats for a project issue"
          }
        },
        "summary": "Show time stats for a project issue",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{issue_id}/todo": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a todo on an issuable",
        "operationId": "postV3ProjectsIdIssuesIssueIdTodo",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of an issuable",
            "format": "int32",
            "in": "path",
            "name": "issue_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a todo on an issuable",
            "schema": {
              "$ref": "#/definitions/Todo"
            }
          }
        },
        "summary": "Create a todo on an issuable",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{noteable_id}/notes": {
      "get": {
        "description": "Get a list of project +noteable+ notes",
        "operationId": "getV3ProjectsIdIssuesNoteableIdNotes",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project +noteable+ notes",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Get a list of project +noteable+ notes",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new +noteable+ note",
        "operationId": "postV3ProjectsIdIssuesNoteableIdNotes",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The content of a note",
            "in": "formData",
            "name": "body",
            "required": true,
            "type": "string"
          },
          {
            "description": "The creation date of the note",
            "in": "formData",
            "name": "created_at",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Create a new +noteable+ note",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{noteable_id}/notes/{note_id}": {
      "delete": {
        "description": "Delete a +noteable+ note",
        "operationId": "deleteV3ProjectsIdIssuesNoteableIdNotesNoteId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a note",
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Delete a +noteable+ note",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a single +noteable+ note",
        "operationId": "getV3ProjectsIdIssuesNoteableIdNotesNoteId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a note",
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Get a single +noteable+ note",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing +noteable+ note",
        "operationId": "putV3ProjectsIdIssuesNoteableIdNotesNoteId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a note",
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The content of a note",
            "in": "formData",
            "name": "body",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Update an existing +noteable+ note",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/issues/{subscribable_id}/subscription": {
      "delete": {
        "description": "Unsubscribe from a resource",
        "operationId": "deleteV3ProjectsIdIssuesSubscribableIdSubscription",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a resource",
            "in": "path",
            "name": "subscribable_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Unsubscribe from a resource",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Unsubscribe from a resource",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Subscribe to a resource",
        "operationId": "postV3ProjectsIdIssuesSubscribableIdSubscription",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a resource",
            "in": "path",
            "name": "subscribable_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Subscribe to a resource",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Subscribe to a resource",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/keys": {
      "get": {
        "description": "Get a specific project's deploy keys",
        "operationId": "getV3ProjectsIdKeys",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific project's deploy keys",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Get a specific project's deploy keys",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add new deploy key to currently authenticated user",
        "operationId": "postV3ProjectsIdKeys",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The new deploy key",
            "in": "formData",
            "name": "key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the deploy key",
            "in": "formData",
            "name": "title",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add new deploy key to currently authenticated user",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Add new deploy key to currently authenticated user",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/keys/{key_id}": {
      "delete": {
        "description": "Delete deploy key for a project",
        "operationId": "deleteV3ProjectsIdKeysKeyId",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the deploy key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete deploy key for a project",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Delete deploy key for a project",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get single deploy key",
        "operationId": "getV3ProjectsIdKeysKeyId",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the deploy key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get single deploy key",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Get single deploy key",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/keys/{key_id}/disable": {
      "delete": {
        "description": "This feature was added in GitLab 8.11",
        "operationId": "deleteV3ProjectsIdKeysKeyIdDisable",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the deploy key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Disable a deploy key for a project",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Disable a deploy key for a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/keys/{key_id}/enable": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was added in GitLab 8.11",
        "operationId": "postV3ProjectsIdKeysKeyIdEnable",
        "parameters": [
          {
            "description": "The ID of the project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the deploy key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Enable a deploy key for a project",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Enable a deploy key for a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/labels": {
      "delete": {
        "description": "Delete an existing label",
        "operationId": "deleteV3ProjectsIdLabels",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the label to be deleted",
            "in": "query",
            "name": "name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete an existing label",
            "schema": {
              "$ref": "#/definitions/Label"
            }
          }
        },
        "summary": "Delete an existing label",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get all labels of the project",
        "operationId": "getV3ProjectsIdLabels",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get all labels of the project",
            "schema": {
              "$ref": "#/definitions/Label"
            }
          }
        },
        "summary": "Get all labels of the project",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new label",
        "operationId": "postV3ProjectsIdLabels",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the label to be created",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)",
            "in": "formData",
            "name": "color",
            "required": true,
            "type": "string"
          },
          {
            "description": "The description of label to be created",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The priority of the label",
            "format": "int32",
            "in": "formData",
            "name": "priority",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new label",
            "schema": {
              "$ref": "#/definitions/Label"
            }
          }
        },
        "summary": "Create a new label",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing label. At least one optional parameter is required.",
        "operationId": "putV3ProjectsIdLabels",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the label to be updated",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The new name of the label",
            "in": "formData",
            "name": "new_name",
            "required": false,
            "type": "string"
          },
          {
            "description": "The new color of the label given in 6-digit hex notation with leading '#' sign (e.g. #FFAABB)",
            "in": "formData",
            "name": "color",
            "required": false,
            "type": "string"
          },
          {
            "description": "The new description of label",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The priority of the label",
            "format": "int32",
            "in": "formData",
            "name": "priority",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing label. At least one optional parameter is required.",
            "schema": {
              "$ref": "#/definitions/Label"
            }
          }
        },
        "summary": "Update an existing label. At least one optional parameter is required.",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/labels/{subscribable_id}/subscription": {
      "delete": {
        "description": "Unsubscribe from a resource",
        "operationId": "deleteV3ProjectsIdLabelsSubscribableIdSubscription",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a resource",
            "in": "path",
            "name": "subscribable_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Unsubscribe from a resource",
            "schema": {
              "$ref": "#/definitions/Label"
            }
          }
        },
        "summary": "Unsubscribe from a resource",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Subscribe to a resource",
        "operationId": "postV3ProjectsIdLabelsSubscribableIdSubscription",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a resource",
            "in": "path",
            "name": "subscribable_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Subscribe to a resource",
            "schema": {
              "$ref": "#/definitions/Label"
            }
          }
        },
        "summary": "Subscribe to a resource",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/members": {
      "get": {
        "description": "Gets a list of group or project members viewable by the authenticated user.",
        "operationId": "getV3ProjectsIdMembers",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "A query string to search for members",
            "in": "query",
            "name": "query",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Gets a list of group or project members viewable by the authenticated user.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Gets a list of group or project members viewable by the authenticated user.",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Adds a member to a group or project.",
        "operationId": "postV3ProjectsIdMembers",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the new member",
            "format": "int32",
            "in": "formData",
            "name": "user_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "A valid access level (defaults: `30`, developer access level)",
            "format": "int32",
            "in": "formData",
            "name": "access_level",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Date string in the format YEAR-MONTH-DAY",
            "format": "date-time",
            "in": "formData",
            "name": "expires_at",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Adds a member to a group or project.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Adds a member to a group or project.",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/members/{user_id}": {
      "delete": {
        "description": "Removes a user from a group or project.",
        "operationId": "deleteV3ProjectsIdMembersUserId",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the member",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Removes a user from a group or project."
          }
        },
        "summary": "Removes a user from a group or project.",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Gets a member of a group or project.",
        "operationId": "getV3ProjectsIdMembersUserId",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the member",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Gets a member of a group or project.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Gets a member of a group or project.",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Updates a member of a group or project.",
        "operationId": "putV3ProjectsIdMembersUserId",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user ID of the new member",
            "format": "int32",
            "in": "path",
            "name": "user_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "A valid access level",
            "format": "int32",
            "in": "formData",
            "name": "access_level",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Date string in the format YEAR-MONTH-DAY",
            "format": "date-time",
            "in": "formData",
            "name": "expires_at",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Updates a member of a group or project.",
            "schema": {
              "$ref": "#/definitions/Member"
            }
          }
        },
        "summary": "Updates a member of a group or project.",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_request/{merge_request_id}": {
      "get": {
        "description": "This endpoint is deprecated and will be removed in GitLab 9.0.",
        "operationId": "getV3ProjectsIdMergeRequestMergeRequestId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a merge request",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single merge request",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Get a single merge request",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update a merge request",
        "operationId": "putV3ProjectsIdMergeRequestMergeRequestId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The title of the merge request",
            "in": "formData",
            "name": "title",
            "required": false,
            "type": "string"
          },
          {
            "description": "The target branch",
            "in": "formData",
            "name": "target_branch",
            "required": false,
            "type": "string"
          },
          {
            "description": "Status of the merge request",
            "enum": [
              "close",
              "reopen",
              "merge"
            ],
            "in": "formData",
            "name": "state_event",
            "required": false,
            "type": "string"
          },
          {
            "description": "The description of the merge request",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The ID of a user to assign the merge request",
            "format": "int32",
            "in": "formData",
            "name": "assignee_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The ID of a milestone to assign the merge request",
            "format": "int32",
            "in": "formData",
            "name": "milestone_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Comma-separated list of label names",
            "in": "formData",
            "name": "labels",
            "required": false,
            "type": "string"
          },
          {
            "description": "Remove source branch when merging",
            "in": "formData",
            "name": "remove_source_branch",
            "required": false,
            "type": "boolean"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update a merge request",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Update a merge request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_request/{merge_request_id}/cancel_merge_when_build_succeeds": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Cancel merge if \"Merge When Pipeline Succeeds\" is enabled",
        "operationId": "postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Cancel merge if \"Merge When Pipeline Succeeds\" is enabled",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Cancel merge if \"Merge When Pipeline Succeeds\" is enabled",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_request/{merge_request_id}/changes": {
      "get": {
        "description": "Show the merge request changes",
        "operationId": "getV3ProjectsIdMergeRequestMergeRequestIdChanges",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Show the merge request changes",
            "schema": {
              "$ref": "#/definitions/MergeRequestChanges"
            }
          }
        },
        "summary": "Show the merge request changes",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_request/{merge_request_id}/closes_issues": {
      "get": {
        "description": "List issues that will be closed on merge",
        "operationId": "getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "List issues that will be closed on merge",
            "schema": {
              "$ref": "#/definitions/MRNote"
            }
          }
        },
        "summary": "List issues that will be closed on merge",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_request/{merge_request_id}/comments": {
      "get": {
        "description": "Duplicate. DEPRECATED and WILL BE REMOVED in 9.0",
        "operationId": "getV3ProjectsIdMergeRequestMergeRequestIdComments",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the comments of a merge request",
            "schema": {
              "$ref": "#/definitions/MRNote"
            }
          }
        },
        "summary": "Get the comments of a merge request",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Duplicate. DEPRECATED and WILL BE REMOVED in 9.0",
        "operationId": "postV3ProjectsIdMergeRequestMergeRequestIdComments",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The text of the comment",
            "in": "formData",
            "name": "note",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Post a comment to a merge request",
            "schema": {
              "$ref": "#/definitions/MRNote"
            }
          }
        },
        "summary": "Post a comment to a merge request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_request/{merge_request_id}/commits": {
      "get": {
        "description": "Get the commits of a merge request",
        "operationId": "getV3ProjectsIdMergeRequestMergeRequestIdCommits",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the commits of a merge request",
            "schema": {
              "$ref": "#/definitions/RepoCommit"
            }
          }
        },
        "summary": "Get the commits of a merge request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_request/{merge_request_id}/merge": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Merge a merge request",
        "operationId": "putV3ProjectsIdMergeRequestMergeRequestIdMerge",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Custom merge commit message",
            "in": "formData",
            "name": "merge_commit_message",
            "required": false,
            "type": "string"
          },
          {
            "description": "When true, the source branch will be deleted if possible",
            "in": "formData",
            "name": "should_remove_source_branch",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "When true, this merge request will be merged when the pipeline succeeds",
            "in": "formData",
            "name": "merge_when_build_succeeds",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "When present, must have the HEAD SHA of the source branch",
            "in": "formData",
            "name": "sha",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Merge a merge request",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Merge a merge request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_request/{subscribable_id}/subscription": {
      "delete": {
        "description": "Unsubscribe from a resource",
        "operationId": "deleteV3ProjectsIdMergeRequestSubscribableIdSubscription",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a resource",
            "in": "path",
            "name": "subscribable_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Unsubscribe from a resource",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Unsubscribe from a resource",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Subscribe to a resource",
        "operationId": "postV3ProjectsIdMergeRequestSubscribableIdSubscription",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a resource",
            "in": "path",
            "name": "subscribable_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Subscribe to a resource",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Subscribe to a resource",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests": {
      "get": {
        "description": "List merge requests",
        "operationId": "getV3ProjectsIdMergeRequests",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "default": "all",
            "description": "Return opened, closed, merged, or all merge requests",
            "enum": [
              "opened",
              "closed",
              "merged",
              "all"
            ],
            "in": "query",
            "name": "state",
            "required": false,
            "type": "string"
          },
          {
            "default": "created_at",
            "description": "Return merge requests ordered by `created_at` or `updated_at` fields.",
            "enum": [
              "created_at",
              "updated_at"
            ],
            "in": "query",
            "name": "order_by",
            "required": false,
            "type": "string"
          },
          {
            "default": "desc",
            "description": "Return merge requests sorted in `asc` or `desc` order.",
            "enum": [
              "asc",
              "desc"
            ],
            "in": "query",
            "name": "sort",
            "required": false,
            "type": "string"
          },
          {
            "description": "The IID of the merge requests",
            "in": "formData",
            "items": {
              "format": "int32",
              "type": "integer"
            },
            "name": "iid",
            "required": false,
            "type": "array"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "List merge requests",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "List merge requests",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a merge request",
        "operationId": "postV3ProjectsIdMergeRequests",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The title of the merge request",
            "in": "formData",
            "name": "title",
            "required": true,
            "type": "string"
          },
          {
            "description": "The source branch",
            "in": "formData",
            "name": "source_branch",
            "required": true,
            "type": "string"
          },
          {
            "description": "The target branch",
            "in": "formData",
            "name": "target_branch",
            "required": true,
            "type": "string"
          },
          {
            "description": "The target project of the merge request defaults to the :id of the project",
            "format": "int32",
            "in": "formData",
            "name": "target_project_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The description of the merge request",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The ID of a user to assign the merge request",
            "format": "int32",
            "in": "formData",
            "name": "assignee_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The ID of a milestone to assign the merge request",
            "format": "int32",
            "in": "formData",
            "name": "milestone_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Comma-separated list of label names",
            "in": "formData",
            "name": "labels",
            "required": false,
            "type": "string"
          },
          {
            "description": "Remove source branch when merging",
            "in": "formData",
            "name": "remove_source_branch",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a merge request",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Create a merge request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}": {
      "delete": {
        "description": "Delete a merge request",
        "operationId": "deleteV3ProjectsIdMergeRequestsMergeRequestId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a merge request",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Delete a merge request"
          }
        },
        "summary": "Delete a merge request",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a single merge request",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single merge request",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Get a single merge request",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update a merge request",
        "operationId": "putV3ProjectsIdMergeRequestsMergeRequestId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The title of the merge request",
            "in": "formData",
            "name": "title",
            "required": false,
            "type": "string"
          },
          {
            "description": "The target branch",
            "in": "formData",
            "name": "target_branch",
            "required": false,
            "type": "string"
          },
          {
            "description": "Status of the merge request",
            "enum": [
              "close",
              "reopen",
              "merge"
            ],
            "in": "formData",
            "name": "state_event",
            "required": false,
            "type": "string"
          },
          {
            "description": "The description of the merge request",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The ID of a user to assign the merge request",
            "format": "int32",
            "in": "formData",
            "name": "assignee_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The ID of a milestone to assign the merge request",
            "format": "int32",
            "in": "formData",
            "name": "milestone_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Comma-separated list of label names",
            "in": "formData",
            "name": "labels",
            "required": false,
            "type": "string"
          },
          {
            "description": "Remove source branch when merging",
            "in": "formData",
            "name": "remove_source_branch",
            "required": false,
            "type": "boolean"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update a merge request",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Update a merge request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/add_spent_time": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add spent time for a project merge_request",
        "operationId": "postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project merge_request",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The duration to be parsed",
            "in": "formData",
            "name": "duration",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add spent time for a project merge_request"
          }
        },
        "summary": "Add spent time for a project merge_request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji": {
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of an Issue, Merge Request or Snippet",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project +awardable+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a list of project +awardable+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in 8.9",
        "operationId": "postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji",
        "parameters": [
          {
            "description": "The name of a award_emoji (without colons)",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Award a new Emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Award a new Emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji/{award_id}": {
      "delete": {
        "description": "This feature was introduced in 8.9",
        "operationId": "deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of an award emoji",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a +awardables+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Delete a +awardables+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of the award",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a specific award emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/cancel_merge_when_build_succeeds": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Cancel merge if \"Merge When Pipeline Succeeds\" is enabled",
        "operationId": "postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Cancel merge if \"Merge When Pipeline Succeeds\" is enabled",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Cancel merge if \"Merge When Pipeline Succeeds\" is enabled",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/changes": {
      "get": {
        "description": "Show the merge request changes",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdChanges",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Show the merge request changes",
            "schema": {
              "$ref": "#/definitions/MergeRequestChanges"
            }
          }
        },
        "summary": "Show the merge request changes",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/closes_issues": {
      "get": {
        "description": "List issues that will be closed on merge",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "List issues that will be closed on merge",
            "schema": {
              "$ref": "#/definitions/MRNote"
            }
          }
        },
        "summary": "List issues that will be closed on merge",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/comments": {
      "get": {
        "description": "Duplicate. DEPRECATED and WILL BE REMOVED in 9.0",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdComments",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the comments of a merge request",
            "schema": {
              "$ref": "#/definitions/MRNote"
            }
          }
        },
        "summary": "Get the comments of a merge request",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Duplicate. DEPRECATED and WILL BE REMOVED in 9.0",
        "operationId": "postV3ProjectsIdMergeRequestsMergeRequestIdComments",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The text of the comment",
            "in": "formData",
            "name": "note",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Post a comment to a merge request",
            "schema": {
              "$ref": "#/definitions/MRNote"
            }
          }
        },
        "summary": "Post a comment to a merge request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/commits": {
      "get": {
        "description": "Get the commits of a merge request",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdCommits",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the commits of a merge request",
            "schema": {
              "$ref": "#/definitions/RepoCommit"
            }
          }
        },
        "summary": "Get the commits of a merge request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/merge": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Merge a merge request",
        "operationId": "putV3ProjectsIdMergeRequestsMergeRequestIdMerge",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Custom merge commit message",
            "in": "formData",
            "name": "merge_commit_message",
            "required": false,
            "type": "string"
          },
          {
            "description": "When true, the source branch will be deleted if possible",
            "in": "formData",
            "name": "should_remove_source_branch",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "When true, this merge request will be merged when the pipeline succeeds",
            "in": "formData",
            "name": "merge_when_build_succeeds",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "When present, must have the HEAD SHA of the source branch",
            "in": "formData",
            "name": "sha",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Merge a merge request",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Merge a merge request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji": {
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji",
        "parameters": [
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project +awardable+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a list of project +awardable+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in 8.9",
        "operationId": "postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji",
        "parameters": [
          {
            "description": "The name of a award_emoji (without colons)",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Award a new Emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Award a new Emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji/{award_id}": {
      "delete": {
        "description": "This feature was introduced in 8.9",
        "operationId": "deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of an award emoji",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a +awardables+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Delete a +awardables+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of the award",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a specific award emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/reset_spent_time": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Reset spent time for a project merge_request",
        "operationId": "postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project merge_request",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Reset spent time for a project merge_request"
          }
        },
        "summary": "Reset spent time for a project merge_request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/reset_time_estimate": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Reset the time estimate for a project merge_request",
        "operationId": "postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project merge_request",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Reset the time estimate for a project merge_request"
          }
        },
        "summary": "Reset the time estimate for a project merge_request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/time_estimate": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Set a time estimate for a project merge_request",
        "operationId": "postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project merge_request",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The duration to be parsed",
            "in": "formData",
            "name": "duration",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Set a time estimate for a project merge_request"
          }
        },
        "summary": "Set a time estimate for a project merge_request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/time_stats": {
      "get": {
        "description": "Show time stats for a project merge_request",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project merge_request",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Show time stats for a project merge_request"
          }
        },
        "summary": "Show time stats for a project merge_request",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/todo": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a todo on an issuable",
        "operationId": "postV3ProjectsIdMergeRequestsMergeRequestIdTodo",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of an issuable",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a todo on an issuable",
            "schema": {
              "$ref": "#/definitions/Todo"
            }
          }
        },
        "summary": "Create a todo on an issuable",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/versions": {
      "get": {
        "description": "This feature was introduced in GitLab 8.12.",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdVersions",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a merge request",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of merge request diff versions",
            "schema": {
              "$ref": "#/definitions/MergeRequestDiff"
            }
          }
        },
        "summary": "Get a list of merge request diff versions",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{merge_request_id}/versions/{version_id}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.12.",
        "operationId": "getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a merge request",
            "format": "int32",
            "in": "path",
            "name": "merge_request_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a merge request diff version",
            "format": "int32",
            "in": "path",
            "name": "version_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single merge request diff version",
            "schema": {
              "$ref": "#/definitions/MergeRequestDiffFull"
            }
          }
        },
        "summary": "Get a single merge request diff version",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{noteable_id}/notes": {
      "get": {
        "description": "Get a list of project +noteable+ notes",
        "operationId": "getV3ProjectsIdMergeRequestsNoteableIdNotes",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project +noteable+ notes",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Get a list of project +noteable+ notes",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new +noteable+ note",
        "operationId": "postV3ProjectsIdMergeRequestsNoteableIdNotes",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The content of a note",
            "in": "formData",
            "name": "body",
            "required": true,
            "type": "string"
          },
          {
            "description": "The creation date of the note",
            "in": "formData",
            "name": "created_at",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Create a new +noteable+ note",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{noteable_id}/notes/{note_id}": {
      "delete": {
        "description": "Delete a +noteable+ note",
        "operationId": "deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a note",
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Delete a +noteable+ note",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a single +noteable+ note",
        "operationId": "getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a note",
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Get a single +noteable+ note",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing +noteable+ note",
        "operationId": "putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a note",
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The content of a note",
            "in": "formData",
            "name": "body",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Update an existing +noteable+ note",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/merge_requests/{subscribable_id}/subscription": {
      "delete": {
        "description": "Unsubscribe from a resource",
        "operationId": "deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a resource",
            "in": "path",
            "name": "subscribable_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Unsubscribe from a resource",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Unsubscribe from a resource",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Subscribe to a resource",
        "operationId": "postV3ProjectsIdMergeRequestsSubscribableIdSubscription",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a resource",
            "in": "path",
            "name": "subscribable_id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Subscribe to a resource",
            "schema": {
              "$ref": "#/definitions/MergeRequest"
            }
          }
        },
        "summary": "Subscribe to a resource",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/milestones": {
      "get": {
        "description": "Get a list of project milestones",
        "operationId": "getV3ProjectsIdMilestones",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "default": "all",
            "description": "Return \"active\", \"closed\", or \"all\" milestones",
            "enum": [
              "active",
              "closed",
              "all"
            ],
            "in": "query",
            "name": "state",
            "required": false,
            "type": "string"
          },
          {
            "description": "The IID of the milestone",
            "in": "formData",
            "items": {
              "format": "int32",
              "type": "integer"
            },
            "name": "iid",
            "required": false,
            "type": "array"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project milestones",
            "schema": {
              "$ref": "#/definitions/Milestone"
            }
          }
        },
        "summary": "Get a list of project milestones",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new project milestone",
        "operationId": "postV3ProjectsIdMilestones",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The title of the milestone",
            "in": "formData",
            "name": "title",
            "required": true,
            "type": "string"
          },
          {
            "description": "The description of the milestone",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The due date of the milestone. The ISO 8601 date format (%Y-%m-%d)",
            "in": "formData",
            "name": "due_date",
            "required": false,
            "type": "string"
          },
          {
            "description": "The start date of the milestone. The ISO 8601 date format (%Y-%m-%d)",
            "in": "formData",
            "name": "start_date",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new project milestone",
            "schema": {
              "$ref": "#/definitions/Milestone"
            }
          }
        },
        "summary": "Create a new project milestone",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/milestones/{milestone_id}": {
      "get": {
        "description": "Get a single project milestone",
        "operationId": "getV3ProjectsIdMilestonesMilestoneId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project milestone",
            "format": "int32",
            "in": "path",
            "name": "milestone_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single project milestone",
            "schema": {
              "$ref": "#/definitions/Milestone"
            }
          }
        },
        "summary": "Get a single project milestone",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing project milestone",
        "operationId": "putV3ProjectsIdMilestonesMilestoneId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project milestone",
            "format": "int32",
            "in": "path",
            "name": "milestone_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The title of the milestone",
            "in": "formData",
            "name": "title",
            "required": false,
            "type": "string"
          },
          {
            "description": "The state event of the milestone ",
            "enum": [
              "close",
              "activate"
            ],
            "in": "formData",
            "name": "state_event",
            "required": false,
            "type": "string"
          },
          {
            "description": "The description of the milestone",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The due date of the milestone. The ISO 8601 date format (%Y-%m-%d)",
            "in": "formData",
            "name": "due_date",
            "required": false,
            "type": "string"
          },
          {
            "description": "The start date of the milestone. The ISO 8601 date format (%Y-%m-%d)",
            "in": "formData",
            "name": "start_date",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing project milestone",
            "schema": {
              "$ref": "#/definitions/Milestone"
            }
          }
        },
        "summary": "Update an existing project milestone",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/milestones/{milestone_id}/issues": {
      "get": {
        "description": "Get all issues for a single project milestone",
        "operationId": "getV3ProjectsIdMilestonesMilestoneIdIssues",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project milestone",
            "format": "int32",
            "in": "path",
            "name": "milestone_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get all issues for a single project milestone",
            "schema": {
              "$ref": "#/definitions/Issue"
            }
          }
        },
        "summary": "Get all issues for a single project milestone",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/notification_settings": {
      "get": {
        "description": "This feature was introduced in GitLab 8.12",
        "operationId": "getV3ProjectsIdNotificationSettings",
        "parameters": [
          {
            "description": "The group ID or project ID or project NAMESPACE/PROJECT_NAME",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get project level notification level settings, defaults to Global",
            "schema": {
              "$ref": "#/definitions/NotificationSetting"
            }
          }
        },
        "summary": "Get project level notification level settings, defaults to Global",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.12",
        "operationId": "putV3ProjectsIdNotificationSettings",
        "parameters": [
          {
            "description": "The group ID or project ID or project NAMESPACE/PROJECT_NAME",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The project notification level",
            "in": "formData",
            "name": "level",
            "required": false,
            "type": "string"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "new_note",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "new_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reopen_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "close_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reassign_issue",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "new_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reopen_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "close_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "reassign_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "merge_merge_request",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "failed_pipeline",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Enable/disable this notification",
            "in": "formData",
            "name": "success_pipeline",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update project level notification level settings, defaults to Global",
            "schema": {
              "$ref": "#/definitions/NotificationSetting"
            }
          }
        },
        "summary": "Update project level notification level settings, defaults to Global",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/pipeline": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.14",
        "operationId": "postV3ProjectsIdPipeline",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Reference",
            "in": "formData",
            "name": "ref",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new pipeline",
            "schema": {
              "$ref": "#/definitions/Pipeline"
            }
          }
        },
        "summary": "Create a new pipeline",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/pipelines": {
      "get": {
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "getV3ProjectsIdPipelines",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Either running, branches, or tags",
            "enum": [
              "running",
              "branches",
              "tags"
            ],
            "in": "query",
            "name": "scope",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get all Pipelines of the project",
            "schema": {
              "$ref": "#/definitions/Pipeline"
            }
          }
        },
        "summary": "Get all Pipelines of the project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/pipelines/{pipeline_id}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.11",
        "operationId": "getV3ProjectsIdPipelinesPipelineId",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The pipeline ID",
            "format": "int32",
            "in": "path",
            "name": "pipeline_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Gets a specific pipeline for the project",
            "schema": {
              "$ref": "#/definitions/Pipeline"
            }
          }
        },
        "summary": "Gets a specific pipeline for the project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/pipelines/{pipeline_id}/cancel": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "postV3ProjectsIdPipelinesPipelineIdCancel",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The pipeline ID",
            "format": "int32",
            "in": "path",
            "name": "pipeline_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Cancel all builds in the pipeline",
            "schema": {
              "$ref": "#/definitions/Pipeline"
            }
          }
        },
        "summary": "Cancel all builds in the pipeline",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/pipelines/{pipeline_id}/retry": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.11.",
        "operationId": "postV3ProjectsIdPipelinesPipelineIdRetry",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The pipeline ID",
            "format": "int32",
            "in": "path",
            "name": "pipeline_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Retry failed builds in the pipeline",
            "schema": {
              "$ref": "#/definitions/Pipeline"
            }
          }
        },
        "summary": "Retry failed builds in the pipeline",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/archive": {
      "get": {
        "description": "Get an archive of the repository",
        "operationId": "getV3ProjectsIdRepositoryArchive",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit sha of the archive to be downloaded",
            "in": "query",
            "name": "sha",
            "required": false,
            "type": "string"
          },
          {
            "description": "The archive format",
            "in": "query",
            "name": "format",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get an archive of the repository"
          }
        },
        "summary": "Get an archive of the repository",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/blobs/{sha}": {
      "get": {
        "description": "Get a raw file contents",
        "operationId": "getV3ProjectsIdRepositoryBlobsSha",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit, branch name, or tag name",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          },
          {
            "description": "The path to the file to display",
            "in": "query",
            "name": "filepath",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a raw file contents"
          }
        },
        "summary": "Get a raw file contents",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/branches": {
      "get": {
        "description": "Get a project repository branches",
        "operationId": "getV3ProjectsIdRepositoryBranches",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a project repository branches",
            "schema": {
              "$ref": "#/definitions/RepoBranch"
            }
          }
        },
        "summary": "Get a project repository branches",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create branch",
        "operationId": "postV3ProjectsIdRepositoryBranches",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the branch",
            "in": "formData",
            "name": "branch_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "Create branch from commit sha or existing branch",
            "in": "formData",
            "name": "ref",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create branch",
            "schema": {
              "$ref": "#/definitions/RepoBranch"
            }
          }
        },
        "summary": "Create branch",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/branches/{branch}": {
      "delete": {
        "description": "Delete a branch",
        "operationId": "deleteV3ProjectsIdRepositoryBranchesBranch",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the branch",
            "in": "path",
            "name": "branch",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Delete a branch"
          }
        },
        "summary": "Delete a branch",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a single branch",
        "operationId": "getV3ProjectsIdRepositoryBranchesBranch",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the branch",
            "in": "path",
            "name": "branch",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single branch",
            "schema": {
              "$ref": "#/definitions/RepoBranch"
            }
          }
        },
        "summary": "Get a single branch",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/branches/{branch}/protect": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Protect a single branch",
        "operationId": "putV3ProjectsIdRepositoryBranchesBranchProtect",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the branch",
            "in": "path",
            "name": "branch",
            "required": true,
            "type": "string"
          },
          {
            "description": "Flag if developers can push to that branch",
            "in": "formData",
            "name": "developers_can_push",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag if developers can merge to that branch",
            "in": "formData",
            "name": "developers_can_merge",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Protect a single branch",
            "schema": {
              "$ref": "#/definitions/RepoBranch"
            }
          }
        },
        "summary": "Protect a single branch",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/branches/{branch}/unprotect": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Unprotect a single branch",
        "operationId": "putV3ProjectsIdRepositoryBranchesBranchUnprotect",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the branch",
            "in": "path",
            "name": "branch",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Unprotect a single branch",
            "schema": {
              "$ref": "#/definitions/RepoBranch"
            }
          }
        },
        "summary": "Unprotect a single branch",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/commits": {
      "get": {
        "description": "Get a project repository commits",
        "operationId": "getV3ProjectsIdRepositoryCommits",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of a repository branch or tag, if not given the default branch is used",
            "in": "query",
            "name": "ref_name",
            "required": false,
            "type": "string"
          },
          {
            "description": "Only commits after or in this date will be returned",
            "in": "query",
            "name": "since",
            "required": false,
            "type": "string"
          },
          {
            "description": "Only commits before or in this date will be returned",
            "in": "query",
            "name": "until",
            "required": false,
            "type": "string"
          },
          {
            "default": 0,
            "description": "The page for pagination",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "default": 20,
            "description": "The number of results per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The file path",
            "in": "query",
            "name": "path",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a project repository commits",
            "schema": {
              "$ref": "#/definitions/RepoCommit"
            }
          }
        },
        "summary": "Get a project repository commits",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.13",
        "operationId": "postV3ProjectsIdRepositoryCommits",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of branch",
            "in": "formData",
            "name": "branch_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "Commit message",
            "in": "formData",
            "name": "commit_message",
            "required": true,
            "type": "string"
          },
          {
            "description": "Actions to perform in commit",
            "in": "formData",
            "items": {
              "x-type": "object"
            },
            "name": "actions",
            "required": true,
            "type": "array"
          },
          {
            "description": "Author email for commit",
            "in": "formData",
            "name": "author_email",
            "required": false,
            "type": "string"
          },
          {
            "description": "Author name for commit",
            "in": "formData",
            "name": "author_name",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Commit multiple file changes as one commit",
            "schema": {
              "$ref": "#/definitions/RepoCommitDetail"
            }
          }
        },
        "summary": "Commit multiple file changes as one commit",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/commits/{sha}": {
      "get": {
        "description": "Get a specific commit of a project",
        "operationId": "getV3ProjectsIdRepositoryCommitsSha",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "A commit sha, or the name of a branch or tag",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific commit of a project",
            "schema": {
              "$ref": "#/definitions/RepoCommitDetail"
            }
          },
          "404": {
            "description": "Not Found"
          }
        },
        "summary": "Get a specific commit of a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/commits/{sha}/blob": {
      "get": {
        "description": "Get a raw file contents",
        "operationId": "getV3ProjectsIdRepositoryCommitsShaBlob",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit, branch name, or tag name",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          },
          {
            "description": "The path to the file to display",
            "in": "query",
            "name": "filepath",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a raw file contents"
          }
        },
        "summary": "Get a raw file contents",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/commits/{sha}/builds": {
      "get": {
        "description": "Get builds for a specific commit of a project",
        "operationId": "getV3ProjectsIdRepositoryCommitsShaBuilds",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The SHA id of a commit",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          },
          {
            "description": "The scope of builds to show",
            "enum": [
              "pending",
              "running",
              "failed",
              "success",
              "canceled"
            ],
            "in": "query",
            "name": "scope",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get builds for a specific commit of a project",
            "schema": {
              "$ref": "#/definitions/Build"
            }
          }
        },
        "summary": "Get builds for a specific commit of a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/commits/{sha}/cherry_pick": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.15",
        "operationId": "postV3ProjectsIdRepositoryCommitsShaCherryPick",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "A commit sha to be cherry picked",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the branch",
            "in": "formData",
            "name": "branch",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Cherry pick commit into a branch",
            "schema": {
              "$ref": "#/definitions/RepoCommit"
            }
          }
        },
        "summary": "Cherry pick commit into a branch",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/commits/{sha}/comments": {
      "get": {
        "description": "Get a commit's comments",
        "operationId": "getV3ProjectsIdRepositoryCommitsShaComments",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "A commit sha, or the name of a branch or tag",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a commit's comments",
            "schema": {
              "$ref": "#/definitions/CommitNote"
            }
          },
          "404": {
            "description": "Not Found"
          }
        },
        "summary": "Get a commit's comments",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Post comment to commit",
        "operationId": "postV3ProjectsIdRepositoryCommitsShaComments",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit's SHA",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          },
          {
            "description": "The text of the comment",
            "in": "formData",
            "name": "note",
            "required": true,
            "type": "string"
          },
          {
            "description": "The file path",
            "in": "formData",
            "name": "path",
            "required": false,
            "type": "string"
          },
          {
            "description": "The line number",
            "format": "int32",
            "in": "formData",
            "name": "line",
            "required": true,
            "type": "integer"
          },
          {
            "default": "new",
            "description": "The type of the line",
            "enum": [
              "new",
              "old"
            ],
            "in": "formData",
            "name": "line_type",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Post comment to commit",
            "schema": {
              "$ref": "#/definitions/CommitNote"
            }
          }
        },
        "summary": "Post comment to commit",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/commits/{sha}/diff": {
      "get": {
        "description": "Get the diff for a specific commit of a project",
        "operationId": "getV3ProjectsIdRepositoryCommitsShaDiff",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "A commit sha, or the name of a branch or tag",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the diff for a specific commit of a project"
          },
          "404": {
            "description": "Not Found"
          }
        },
        "summary": "Get the diff for a specific commit of a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/commits/{sha}/statuses": {
      "get": {
        "description": "Get a commit's statuses",
        "operationId": "getV3ProjectsIdRepositoryCommitsShaStatuses",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit hash",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ref",
            "in": "query",
            "name": "ref",
            "required": false,
            "type": "string"
          },
          {
            "description": "The stage",
            "in": "query",
            "name": "stage",
            "required": false,
            "type": "string"
          },
          {
            "description": "The name",
            "in": "query",
            "name": "name",
            "required": false,
            "type": "string"
          },
          {
            "description": "Show all statuses, default: false",
            "in": "query",
            "name": "all",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a commit's statuses",
            "schema": {
              "$ref": "#/definitions/CommitStatus"
            }
          }
        },
        "summary": "Get a commit's statuses",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/compare": {
      "get": {
        "description": "Compare two branches, tags, or commits",
        "operationId": "getV3ProjectsIdRepositoryCompare",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit, branch name, or tag name to start comparison",
            "in": "query",
            "name": "from",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit, branch name, or tag name to stop comparison",
            "in": "query",
            "name": "to",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Compare two branches, tags, or commits",
            "schema": {
              "$ref": "#/definitions/Compare"
            }
          }
        },
        "summary": "Compare two branches, tags, or commits",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/contributors": {
      "get": {
        "description": "Get repository contributors",
        "operationId": "getV3ProjectsIdRepositoryContributors",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get repository contributors",
            "schema": {
              "$ref": "#/definitions/Contributor"
            }
          }
        },
        "summary": "Get repository contributors",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/files": {
      "delete": {
        "description": "Delete an existing file in repository",
        "operationId": "deleteV3ProjectsIdRepositoryFiles",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The path to new file. Ex. lib/class.rb",
            "in": "query",
            "name": "file_path",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of branch",
            "in": "query",
            "name": "branch_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "Commit Message",
            "in": "query",
            "name": "commit_message",
            "required": true,
            "type": "string"
          },
          {
            "description": "The email of the author",
            "in": "query",
            "name": "author_email",
            "required": false,
            "type": "string"
          },
          {
            "description": "The name of the author",
            "in": "query",
            "name": "author_name",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Delete an existing file in repository"
          }
        },
        "summary": "Delete an existing file in repository",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a file from repository",
        "operationId": "getV3ProjectsIdRepositoryFiles",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The path to the file. Ex. lib/class.rb",
            "in": "query",
            "name": "file_path",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of branch, tag, or commit",
            "in": "query",
            "name": "ref",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a file from repository"
          }
        },
        "summary": "Get a file from repository",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create new file in repository",
        "operationId": "postV3ProjectsIdRepositoryFiles",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The path to new file. Ex. lib/class.rb",
            "in": "formData",
            "name": "file_path",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of branch",
            "in": "formData",
            "name": "branch_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "Commit Message",
            "in": "formData",
            "name": "commit_message",
            "required": true,
            "type": "string"
          },
          {
            "description": "The email of the author",
            "in": "formData",
            "name": "author_email",
            "required": false,
            "type": "string"
          },
          {
            "description": "The name of the author",
            "in": "formData",
            "name": "author_name",
            "required": false,
            "type": "string"
          },
          {
            "description": "File content",
            "in": "formData",
            "name": "content",
            "required": true,
            "type": "string"
          },
          {
            "description": "File encoding",
            "enum": [
              "base64"
            ],
            "in": "formData",
            "name": "encoding",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create new file in repository"
          }
        },
        "summary": "Create new file in repository",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update existing file in repository",
        "operationId": "putV3ProjectsIdRepositoryFiles",
        "parameters": [
          {
            "description": "The project ID",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The path to new file. Ex. lib/class.rb",
            "in": "formData",
            "name": "file_path",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of branch",
            "in": "formData",
            "name": "branch_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "Commit Message",
            "in": "formData",
            "name": "commit_message",
            "required": true,
            "type": "string"
          },
          {
            "description": "The email of the author",
            "in": "formData",
            "name": "author_email",
            "required": false,
            "type": "string"
          },
          {
            "description": "The name of the author",
            "in": "formData",
            "name": "author_name",
            "required": false,
            "type": "string"
          },
          {
            "description": "File content",
            "in": "formData",
            "name": "content",
            "required": true,
            "type": "string"
          },
          {
            "description": "File encoding",
            "enum": [
              "base64"
            ],
            "in": "formData",
            "name": "encoding",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update existing file in repository"
          }
        },
        "summary": "Update existing file in repository",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/merged_branches": {
      "delete": {
        "operationId": "deleteV3ProjectsIdRepositoryMergedBranches",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "deleted MergedBranch"
          }
        },
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/raw_blobs/{sha}": {
      "get": {
        "description": "Get a raw blob contents by blob sha",
        "operationId": "getV3ProjectsIdRepositoryRawBlobsSha",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit, branch name, or tag name",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a raw blob contents by blob sha"
          }
        },
        "summary": "Get a raw blob contents by blob sha",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/tags": {
      "get": {
        "description": "Get a project repository tags",
        "operationId": "getV3ProjectsIdRepositoryTags",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a project repository tags",
            "schema": {
              "$ref": "#/definitions/RepoTag"
            }
          }
        },
        "summary": "Get a project repository tags",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new repository tag",
        "operationId": "postV3ProjectsIdRepositoryTags",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the tag",
            "in": "formData",
            "name": "tag_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit sha or branch name",
            "in": "formData",
            "name": "ref",
            "required": true,
            "type": "string"
          },
          {
            "description": "Specifying a message creates an annotated tag",
            "in": "formData",
            "name": "message",
            "required": false,
            "type": "string"
          },
          {
            "description": "Specifying release notes stored in the GitLab database",
            "in": "formData",
            "name": "release_description",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new repository tag",
            "schema": {
              "$ref": "#/definitions/RepoTag"
            }
          }
        },
        "summary": "Create a new repository tag",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/tags/{tag_name}": {
      "delete": {
        "description": "Delete a repository tag",
        "operationId": "deleteV3ProjectsIdRepositoryTagsTagName",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the tag",
            "in": "path",
            "name": "tag_name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Delete a repository tag"
          }
        },
        "summary": "Delete a repository tag",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a single repository tag",
        "operationId": "getV3ProjectsIdRepositoryTagsTagName",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the tag",
            "in": "path",
            "name": "tag_name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single repository tag",
            "schema": {
              "$ref": "#/definitions/RepoTag"
            }
          }
        },
        "summary": "Get a single repository tag",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/tags/{tag_name}/release": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add a release note to a tag",
        "operationId": "postV3ProjectsIdRepositoryTagsTagNameRelease",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the tag",
            "in": "path",
            "name": "tag_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "Release notes with markdown support",
            "in": "formData",
            "name": "description",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add a release note to a tag",
            "schema": {
              "$ref": "#/definitions/Release"
            }
          }
        },
        "summary": "Add a release note to a tag",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update a tag's release note",
        "operationId": "putV3ProjectsIdRepositoryTagsTagNameRelease",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the tag",
            "in": "path",
            "name": "tag_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "Release notes with markdown support",
            "in": "formData",
            "name": "description",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update a tag's release note",
            "schema": {
              "$ref": "#/definitions/Release"
            }
          }
        },
        "summary": "Update a tag's release note",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/repository/tree": {
      "get": {
        "description": "Get a project repository tree",
        "operationId": "getV3ProjectsIdRepositoryTree",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of a repository branch or tag, if not given the default branch is used",
            "in": "query",
            "name": "ref_name",
            "required": false,
            "type": "string"
          },
          {
            "description": "The path of the tree",
            "in": "query",
            "name": "path",
            "required": false,
            "type": "string"
          },
          {
            "description": "Used to get a recursive tree",
            "in": "query",
            "name": "recursive",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a project repository tree",
            "schema": {
              "$ref": "#/definitions/RepoTreeObject"
            }
          }
        },
        "summary": "Get a project repository tree",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/runners": {
      "get": {
        "description": "Get runners available for project",
        "operationId": "getV3ProjectsIdRunners",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The scope of specific runners to show",
            "enum": [
              "active",
              "paused",
              "online",
              "specific",
              "shared"
            ],
            "in": "query",
            "name": "scope",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get runners available for project",
            "schema": {
              "$ref": "#/definitions/Runner"
            }
          }
        },
        "summary": "Get runners available for project",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Enable a runner for a project",
        "operationId": "postV3ProjectsIdRunners",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the runner",
            "format": "int32",
            "in": "formData",
            "name": "runner_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Enable a runner for a project",
            "schema": {
              "$ref": "#/definitions/Runner"
            }
          }
        },
        "summary": "Enable a runner for a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/runners/{runner_id}": {
      "delete": {
        "description": "Disable project's runner",
        "operationId": "deleteV3ProjectsIdRunnersRunnerId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the runner",
            "format": "int32",
            "in": "path",
            "name": "runner_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Disable project's runner",
            "schema": {
              "$ref": "#/definitions/Runner"
            }
          }
        },
        "summary": "Disable project's runner",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/asana": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set asana service for project",
        "operationId": "putV3ProjectsIdServicesAsana",
        "parameters": [
          {
            "description": "User API token",
            "in": "formData",
            "name": "api_key",
            "required": true,
            "type": "string"
          },
          {
            "description": "Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches",
            "in": "formData",
            "name": "restrict_to_branch",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set asana service for project"
          }
        },
        "summary": "Set asana service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/assembla": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set assembla service for project",
        "operationId": "putV3ProjectsIdServicesAssembla",
        "parameters": [
          {
            "description": "The authentication token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "Subdomain setting",
            "in": "formData",
            "name": "subdomain",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set assembla service for project"
          }
        },
        "summary": "Set assembla service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/bamboo": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set bamboo service for project",
        "operationId": "putV3ProjectsIdServicesBamboo",
        "parameters": [
          {
            "description": "Bamboo root URL like https://bamboo.example.com",
            "in": "formData",
            "name": "bamboo_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Bamboo build plan key like",
            "in": "formData",
            "name": "build_key",
            "required": true,
            "type": "string"
          },
          {
            "description": "A user with API access, if applicable",
            "in": "formData",
            "name": "username",
            "required": true,
            "type": "string"
          },
          {
            "description": "Passord of the user",
            "in": "formData",
            "name": "password",
            "required": true,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set bamboo service for project"
          }
        },
        "summary": "Set bamboo service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/bugzilla": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set bugzilla service for project",
        "operationId": "putV3ProjectsIdServicesBugzilla",
        "parameters": [
          {
            "description": "New issue URL",
            "in": "formData",
            "name": "new_issue_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Issues URL",
            "in": "formData",
            "name": "issues_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Project URL",
            "in": "formData",
            "name": "project_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Description",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "Title",
            "in": "formData",
            "name": "title",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set bugzilla service for project"
          }
        },
        "summary": "Set bugzilla service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/buildkite": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set buildkite service for project",
        "operationId": "putV3ProjectsIdServicesBuildkite",
        "parameters": [
          {
            "description": "Buildkite project GitLab token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "The buildkite project URL",
            "in": "formData",
            "name": "project_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Enable SSL verification for communication",
            "in": "formData",
            "name": "enable_ssl_verification",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set buildkite service for project"
          }
        },
        "summary": "Set buildkite service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/builds-email": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set builds-email service for project",
        "operationId": "putV3ProjectsIdServicesBuildsEmail",
        "parameters": [
          {
            "description": "Comma-separated list of recipient email addresses",
            "in": "formData",
            "name": "recipients",
            "required": true,
            "type": "string"
          },
          {
            "description": "Add pusher to recipients list",
            "in": "formData",
            "name": "add_pusher",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Notify only broken builds",
            "in": "formData",
            "name": "notify_only_broken_builds",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Event will be triggered when a build status changes",
            "in": "formData",
            "name": "build_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set builds-email service for project"
          }
        },
        "summary": "Set builds-email service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/campfire": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set campfire service for project",
        "operationId": "putV3ProjectsIdServicesCampfire",
        "parameters": [
          {
            "description": "Campfire token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "Campfire subdomain",
            "in": "formData",
            "name": "subdomain",
            "required": false,
            "type": "string"
          },
          {
            "description": "Campfire room",
            "in": "formData",
            "name": "room",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set campfire service for project"
          }
        },
        "summary": "Set campfire service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/custom-issue-tracker": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set custom-issue-tracker service for project",
        "operationId": "putV3ProjectsIdServicesCustomIssueTracker",
        "parameters": [
          {
            "description": "New issue URL",
            "in": "formData",
            "name": "new_issue_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Issues URL",
            "in": "formData",
            "name": "issues_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Project URL",
            "in": "formData",
            "name": "project_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Description",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "Title",
            "in": "formData",
            "name": "title",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set custom-issue-tracker service for project"
          }
        },
        "summary": "Set custom-issue-tracker service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/drone-ci": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set drone-ci service for project",
        "operationId": "putV3ProjectsIdServicesDroneCi",
        "parameters": [
          {
            "description": "Drone CI token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "Drone CI URL",
            "in": "formData",
            "name": "drone_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Enable SSL verification for communication",
            "in": "formData",
            "name": "enable_ssl_verification",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a merge request is created/updated/merged",
            "in": "formData",
            "name": "merge_request_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a new tag is pushed to the repository",
            "in": "formData",
            "name": "tag_push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set drone-ci service for project"
          }
        },
        "summary": "Set drone-ci service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/emails-on-push": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set emails-on-push service for project",
        "operationId": "putV3ProjectsIdServicesEmailsOnPush",
        "parameters": [
          {
            "description": "Comma-separated list of recipient email addresses",
            "in": "formData",
            "name": "recipients",
            "required": true,
            "type": "string"
          },
          {
            "description": "Disable code diffs",
            "in": "formData",
            "name": "disable_diffs",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Send from committer",
            "in": "formData",
            "name": "send_from_committer_email",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a new tag is pushed to the repository",
            "in": "formData",
            "name": "tag_push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set emails-on-push service for project"
          }
        },
        "summary": "Set emails-on-push service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/external-wiki": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set external-wiki service for project",
        "operationId": "putV3ProjectsIdServicesExternalWiki",
        "parameters": [
          {
            "description": "The URL of the external Wiki",
            "in": "formData",
            "name": "external_wiki_url",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set external-wiki service for project"
          }
        },
        "summary": "Set external-wiki service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/flowdock": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set flowdock service for project",
        "operationId": "putV3ProjectsIdServicesFlowdock",
        "parameters": [
          {
            "description": "Flowdock token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set flowdock service for project"
          }
        },
        "summary": "Set flowdock service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/gemnasium": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set gemnasium service for project",
        "operationId": "putV3ProjectsIdServicesGemnasium",
        "parameters": [
          {
            "description": "Your personal API key on gemnasium.com",
            "in": "formData",
            "name": "api_key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The project's slug on gemnasium.com",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set gemnasium service for project"
          }
        },
        "summary": "Set gemnasium service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/hipchat": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set hipchat service for project",
        "operationId": "putV3ProjectsIdServicesHipchat",
        "parameters": [
          {
            "description": "The room token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "The room name or ID",
            "in": "formData",
            "name": "room",
            "required": false,
            "type": "string"
          },
          {
            "description": "The room color",
            "in": "formData",
            "name": "color",
            "required": false,
            "type": "string"
          },
          {
            "description": "Enable notifications",
            "in": "formData",
            "name": "notify",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Leave blank for default (v2)",
            "in": "formData",
            "name": "api_version",
            "required": false,
            "type": "string"
          },
          {
            "description": "Leave blank for default. https://hipchat.example.com",
            "in": "formData",
            "name": "server",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when an issue is created/updated/closed",
            "in": "formData",
            "name": "issue_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a confidential issue is created/updated/closed",
            "in": "formData",
            "name": "confidential_issue_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a merge request is created/updated/merged",
            "in": "formData",
            "name": "merge_request_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when someone adds a comment",
            "in": "formData",
            "name": "note_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a new tag is pushed to the repository",
            "in": "formData",
            "name": "tag_push_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a build status changes",
            "in": "formData",
            "name": "build_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set hipchat service for project"
          }
        },
        "summary": "Set hipchat service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/irker": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set irker service for project",
        "operationId": "putV3ProjectsIdServicesIrker",
        "parameters": [
          {
            "description": "Recipients/channels separated by whitespaces",
            "in": "formData",
            "name": "recipients",
            "required": true,
            "type": "string"
          },
          {
            "description": "Default: irc://irc.network.net:6697",
            "in": "formData",
            "name": "default_irc_uri",
            "required": false,
            "type": "string"
          },
          {
            "description": "Server host. Default localhost",
            "in": "formData",
            "name": "server_host",
            "required": false,
            "type": "string"
          },
          {
            "description": "Server port. Default 6659",
            "format": "int32",
            "in": "formData",
            "name": "server_port",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Colorize messages",
            "in": "formData",
            "name": "colorize_messages",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set irker service for project"
          }
        },
        "summary": "Set irker service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/jira": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set jira service for project",
        "operationId": "putV3ProjectsIdServicesJira",
        "parameters": [
          {
            "description": "The URL to the JIRA project which is being linked to this GitLab project, e.g., https://jira.example.com",
            "in": "formData",
            "name": "url",
            "required": true,
            "type": "string"
          },
          {
            "description": "The short identifier for your JIRA project, all uppercase, e.g., PROJ",
            "in": "formData",
            "name": "project_key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The username of the user created to be used with GitLab/JIRA",
            "in": "formData",
            "name": "username",
            "required": false,
            "type": "string"
          },
          {
            "description": "The password of the user created to be used with GitLab/JIRA",
            "in": "formData",
            "name": "password",
            "required": false,
            "type": "string"
          },
          {
            "description": "The ID of a transition that moves issues to a closed state. You can find this number under the JIRA workflow administration (**Administration > Issues > Workflows**) by selecting **View** under **Operations** of the desired workflow of your project. The ID of each state can be found inside the parenthesis of each transition name under the **Transitions (id)** column ([see screenshot][trans]). By default, this ID is set to `2`",
            "format": "int32",
            "in": "formData",
            "name": "jira_issue_transition_id",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Event will be triggered when a commit is created/updated",
            "in": "formData",
            "name": "commit_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a merge request is created/updated/merged",
            "in": "formData",
            "name": "merge_request_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set jira service for project"
          }
        },
        "summary": "Set jira service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/kubernetes": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set kubernetes service for project",
        "operationId": "putV3ProjectsIdServicesKubernetes",
        "parameters": [
          {
            "description": "The Kubernetes namespace to use",
            "in": "formData",
            "name": "namespace",
            "required": true,
            "type": "string"
          },
          {
            "description": "The URL to the Kubernetes cluster API, e.g., https://kubernetes.example.com",
            "in": "formData",
            "name": "api_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "The service token to authenticate against the Kubernetes cluster with",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "A custom certificate authority bundle to verify the Kubernetes cluster with (PEM format)",
            "in": "formData",
            "name": "ca_pem",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set kubernetes service for project"
          }
        },
        "summary": "Set kubernetes service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/mattermost": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set mattermost service for project",
        "operationId": "putV3ProjectsIdServicesMattermost",
        "parameters": [
          {
            "description": "The Mattermost webhook. e.g. http://mattermost_host/hooks/...",
            "in": "formData",
            "name": "webhook",
            "required": true,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when an issue is created/updated/closed",
            "in": "formData",
            "name": "issue_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a confidential issue is created/updated/closed",
            "in": "formData",
            "name": "confidential_issue_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a merge request is created/updated/merged",
            "in": "formData",
            "name": "merge_request_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when someone adds a comment",
            "in": "formData",
            "name": "note_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a new tag is pushed to the repository",
            "in": "formData",
            "name": "tag_push_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a build status changes",
            "in": "formData",
            "name": "build_events",
            "required": false,
            "type": "string"
          },
          {
            "in": "formData",
            "name": "pipeline_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a wiki page is created/updated",
            "in": "formData",
            "name": "wiki_page_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set mattermost service for project"
          }
        },
        "summary": "Set mattermost service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/mattermost-slash-commands": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set mattermost-slash-commands service for project",
        "operationId": "putV3ProjectsIdServicesMattermostSlashCommands",
        "parameters": [
          {
            "description": "The Mattermost token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set mattermost-slash-commands service for project"
          }
        },
        "summary": "Set mattermost-slash-commands service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/mattermost_slash_commands/trigger": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Added in GitLab 8.13",
        "operationId": "postV3ProjectsIdServicesMattermostSlashCommandsTrigger",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The Mattermost token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Trigger a slash command for mattermost-slash-commands"
          }
        },
        "summary": "Trigger a slash command for mattermost-slash-commands",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/pipelines-email": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set pipelines-email service for project",
        "operationId": "putV3ProjectsIdServicesPipelinesEmail",
        "parameters": [
          {
            "description": "Comma-separated list of recipient email addresses",
            "in": "formData",
            "name": "recipients",
            "required": true,
            "type": "string"
          },
          {
            "description": "Notify only broken builds",
            "in": "formData",
            "name": "notify_only_broken_builds",
            "required": false,
            "type": "boolean"
          },
          {
            "in": "formData",
            "name": "pipeline_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set pipelines-email service for project"
          }
        },
        "summary": "Set pipelines-email service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/pivotaltracker": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set pivotaltracker service for project",
        "operationId": "putV3ProjectsIdServicesPivotaltracker",
        "parameters": [
          {
            "description": "The Pivotaltracker token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "description": "Comma-separated list of branches which will be automatically inspected. Leave blank to include all branches.",
            "in": "formData",
            "name": "restrict_to_branch",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set pivotaltracker service for project"
          }
        },
        "summary": "Set pivotaltracker service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/pushover": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set pushover service for project",
        "operationId": "putV3ProjectsIdServicesPushover",
        "parameters": [
          {
            "description": "The application key",
            "in": "formData",
            "name": "api_key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user key",
            "in": "formData",
            "name": "user_key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The priority",
            "in": "formData",
            "name": "priority",
            "required": true,
            "type": "string"
          },
          {
            "description": "Leave blank for all active devices",
            "in": "formData",
            "name": "device",
            "required": true,
            "type": "string"
          },
          {
            "description": "The sound of the notification",
            "in": "formData",
            "name": "sound",
            "required": true,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set pushover service for project"
          }
        },
        "summary": "Set pushover service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/redmine": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set redmine service for project",
        "operationId": "putV3ProjectsIdServicesRedmine",
        "parameters": [
          {
            "description": "The new issue URL",
            "in": "formData",
            "name": "new_issue_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "The project URL",
            "in": "formData",
            "name": "project_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "The issues URL",
            "in": "formData",
            "name": "issues_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "The description of the tracker",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set redmine service for project"
          }
        },
        "summary": "Set redmine service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/slack": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set slack service for project",
        "operationId": "putV3ProjectsIdServicesSlack",
        "parameters": [
          {
            "description": "The Slack webhook. e.g. https://hooks.slack.com/services/...",
            "in": "formData",
            "name": "webhook",
            "required": true,
            "type": "string"
          },
          {
            "description": "The user name",
            "in": "formData",
            "name": "new_issue_url",
            "required": false,
            "type": "string"
          },
          {
            "description": "The channel name",
            "in": "formData",
            "name": "channel",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when an issue is created/updated/closed",
            "in": "formData",
            "name": "issue_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a confidential issue is created/updated/closed",
            "in": "formData",
            "name": "confidential_issue_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a merge request is created/updated/merged",
            "in": "formData",
            "name": "merge_request_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when someone adds a comment",
            "in": "formData",
            "name": "note_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a new tag is pushed to the repository",
            "in": "formData",
            "name": "tag_push_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a build status changes",
            "in": "formData",
            "name": "build_events",
            "required": false,
            "type": "string"
          },
          {
            "in": "formData",
            "name": "pipeline_events",
            "required": false,
            "type": "string"
          },
          {
            "description": "Event will be triggered when a wiki page is created/updated",
            "in": "formData",
            "name": "wiki_page_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set slack service for project"
          }
        },
        "summary": "Set slack service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/slack-slash-commands": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set slack-slash-commands service for project",
        "operationId": "putV3ProjectsIdServicesSlackSlashCommands",
        "parameters": [
          {
            "description": "The Slack token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set slack-slash-commands service for project"
          }
        },
        "summary": "Set slack-slash-commands service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/slack_slash_commands/trigger": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Added in GitLab 8.13",
        "operationId": "postV3ProjectsIdServicesSlackSlashCommandsTrigger",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The Slack token",
            "in": "formData",
            "name": "token",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Trigger a slash command for slack-slash-commands"
          }
        },
        "summary": "Trigger a slash command for slack-slash-commands",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/teamcity": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Set teamcity service for project",
        "operationId": "putV3ProjectsIdServicesTeamcity",
        "parameters": [
          {
            "description": "TeamCity root URL like https://teamcity.example.com",
            "in": "formData",
            "name": "teamcity_url",
            "required": true,
            "type": "string"
          },
          {
            "description": "Build configuration ID",
            "in": "formData",
            "name": "build_type",
            "required": true,
            "type": "string"
          },
          {
            "description": "A user with permissions to trigger a manual build",
            "in": "formData",
            "name": "username",
            "required": true,
            "type": "string"
          },
          {
            "description": "The password of the user",
            "in": "formData",
            "name": "password",
            "required": true,
            "type": "string"
          },
          {
            "description": "Event will be triggered by a push to the repository",
            "in": "formData",
            "name": "push_events",
            "required": false,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Set teamcity service for project"
          }
        },
        "summary": "Set teamcity service for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/services/{service_slug}": {
      "delete": {
        "description": "Delete a service for project",
        "operationId": "deleteV3ProjectsIdServicesServiceSlug",
        "parameters": [
          {
            "description": "The name of the service",
            "enum": [
              "asana",
              "assembla",
              "bamboo",
              "bugzilla",
              "buildkite",
              "builds-email",
              "campfire",
              "custom-issue-tracker",
              "drone-ci",
              "emails-on-push",
              "external-wiki",
              "flowdock",
              "gemnasium",
              "hipchat",
              "irker",
              "jira",
              "kubernetes",
              "mattermost-slash-commands",
              "slack-slash-commands",
              "pipelines-email",
              "pivotaltracker",
              "pushover",
              "redmine",
              "slack",
              "mattermost",
              "teamcity"
            ],
            "in": "path",
            "name": "service_slug",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Delete a service for project"
          }
        },
        "summary": "Delete a service for project",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get the service settings for project",
        "operationId": "getV3ProjectsIdServicesServiceSlug",
        "parameters": [
          {
            "description": "The name of the service",
            "enum": [
              "asana",
              "assembla",
              "bamboo",
              "bugzilla",
              "buildkite",
              "builds-email",
              "campfire",
              "custom-issue-tracker",
              "drone-ci",
              "emails-on-push",
              "external-wiki",
              "flowdock",
              "gemnasium",
              "hipchat",
              "irker",
              "jira",
              "kubernetes",
              "mattermost-slash-commands",
              "slack-slash-commands",
              "pipelines-email",
              "pivotaltracker",
              "pushover",
              "redmine",
              "slack",
              "mattermost",
              "teamcity"
            ],
            "in": "path",
            "name": "service_slug",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the service settings for project",
            "schema": {
              "$ref": "#/definitions/ProjectService"
            }
          }
        },
        "summary": "Get the service settings for project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/share": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Share the project with a group",
        "operationId": "postV3ProjectsIdShare",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a group",
            "format": "int32",
            "in": "formData",
            "name": "group_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The group access level",
            "enum": [
              10,
              20,
              30,
              40
            ],
            "format": "int32",
            "in": "formData",
            "name": "group_access",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Share expiration date",
            "format": "date",
            "in": "formData",
            "name": "expires_at",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Share the project with a group",
            "schema": {
              "$ref": "#/definitions/ProjectGroupLink"
            }
          }
        },
        "summary": "Share the project with a group",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/share/{group_id}": {
      "delete": {
        "operationId": "deleteV3ProjectsIdShareGroupId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the group",
            "format": "int32",
            "in": "path",
            "name": "group_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "deleted Share"
          }
        },
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/snippets": {
      "get": {
        "description": "Get all project snippets",
        "operationId": "getV3ProjectsIdSnippets",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get all project snippets",
            "schema": {
              "$ref": "#/definitions/ProjectSnippet"
            }
          }
        },
        "summary": "Get all project snippets",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new project snippet",
        "operationId": "postV3ProjectsIdSnippets",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The title of the snippet",
            "in": "formData",
            "name": "title",
            "required": true,
            "type": "string"
          },
          {
            "description": "The file name of the snippet",
            "in": "formData",
            "name": "file_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The content of the snippet",
            "in": "formData",
            "name": "code",
            "required": true,
            "type": "string"
          },
          {
            "description": "The visibility level of the snippet",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "visibility_level",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new project snippet",
            "schema": {
              "$ref": "#/definitions/ProjectSnippet"
            }
          }
        },
        "summary": "Create a new project snippet",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/snippets/{noteable_id}/notes": {
      "get": {
        "description": "Get a list of project +noteable+ notes",
        "operationId": "getV3ProjectsIdSnippetsNoteableIdNotes",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project +noteable+ notes",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Get a list of project +noteable+ notes",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new +noteable+ note",
        "operationId": "postV3ProjectsIdSnippetsNoteableIdNotes",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The content of a note",
            "in": "formData",
            "name": "body",
            "required": true,
            "type": "string"
          },
          {
            "description": "The creation date of the note",
            "in": "formData",
            "name": "created_at",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Create a new +noteable+ note",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/snippets/{noteable_id}/notes/{note_id}": {
      "delete": {
        "description": "Delete a +noteable+ note",
        "operationId": "deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a note",
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Delete a +noteable+ note",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a single +noteable+ note",
        "operationId": "getV3ProjectsIdSnippetsNoteableIdNotesNoteId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a note",
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Get a single +noteable+ note",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing +noteable+ note",
        "operationId": "putV3ProjectsIdSnippetsNoteableIdNotesNoteId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of the noteable",
            "format": "int32",
            "in": "path",
            "name": "noteable_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of a note",
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The content of a note",
            "in": "formData",
            "name": "body",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing +noteable+ note",
            "schema": {
              "$ref": "#/definitions/Note"
            }
          }
        },
        "summary": "Update an existing +noteable+ note",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/snippets/{snippet_id}": {
      "delete": {
        "description": "Delete a project snippet",
        "operationId": "deleteV3ProjectsIdSnippetsSnippetId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project snippet",
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Delete a project snippet"
          }
        },
        "summary": "Delete a project snippet",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a single project snippet",
        "operationId": "getV3ProjectsIdSnippetsSnippetId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project snippet",
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single project snippet",
            "schema": {
              "$ref": "#/definitions/ProjectSnippet"
            }
          }
        },
        "summary": "Get a single project snippet",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing project snippet",
        "operationId": "putV3ProjectsIdSnippetsSnippetId",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project snippet",
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The title of the snippet",
            "in": "formData",
            "name": "title",
            "required": false,
            "type": "string"
          },
          {
            "description": "The file name of the snippet",
            "in": "formData",
            "name": "file_name",
            "required": false,
            "type": "string"
          },
          {
            "description": "The content of the snippet",
            "in": "formData",
            "name": "code",
            "required": false,
            "type": "string"
          },
          {
            "description": "The visibility level of the snippet",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "visibility_level",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing project snippet",
            "schema": {
              "$ref": "#/definitions/ProjectSnippet"
            }
          }
        },
        "summary": "Update an existing project snippet",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/snippets/{snippet_id}/award_emoji": {
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdSnippetsSnippetIdAwardEmoji",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of an Issue, Merge Request or Snippet",
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project +awardable+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a list of project +awardable+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in 8.9",
        "operationId": "postV3ProjectsIdSnippetsSnippetIdAwardEmoji",
        "parameters": [
          {
            "description": "The name of a award_emoji (without colons)",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Award a new Emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Award a new Emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id}": {
      "delete": {
        "description": "This feature was introduced in 8.9",
        "operationId": "deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of an award emoji",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a +awardables+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Delete a +awardables+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of the award",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a specific award emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji": {
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji",
        "parameters": [
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a list of project +awardable+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a list of project +awardable+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in 8.9",
        "operationId": "postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji",
        "parameters": [
          {
            "description": "The name of a award_emoji (without colons)",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Award a new Emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Award a new Emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id}": {
      "delete": {
        "description": "This feature was introduced in 8.9",
        "operationId": "deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of an award emoji",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a +awardables+ award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Delete a +awardables+ award emoji",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "This feature was introduced in 8.9",
        "operationId": "getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId",
        "parameters": [
          {
            "description": "The ID of the award",
            "format": "int32",
            "in": "path",
            "name": "award_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          },
          {
            "format": "int32",
            "in": "path",
            "name": "note_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific award emoji",
            "schema": {
              "$ref": "#/definitions/AwardEmoji"
            }
          }
        },
        "summary": "Get a specific award emoji",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/snippets/{snippet_id}/raw": {
      "get": {
        "description": "Get a raw project snippet",
        "operationId": "getV3ProjectsIdSnippetsSnippetIdRaw",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ID of a project snippet",
            "format": "int32",
            "in": "path",
            "name": "snippet_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a raw project snippet"
          }
        },
        "summary": "Get a raw project snippet",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/star": {
      "delete": {
        "description": "Unstar a project",
        "operationId": "deleteV3ProjectsIdStar",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Unstar a project",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Unstar a project",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Star a project",
        "operationId": "postV3ProjectsIdStar",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Star a project",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Star a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/statuses/{sha}": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Post status to a commit",
        "operationId": "postV3ProjectsIdStatusesSha",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The commit hash",
            "in": "path",
            "name": "sha",
            "required": true,
            "type": "string"
          },
          {
            "description": "The state of the status",
            "enum": [
              "pending",
              "running",
              "success",
              "failed",
              "canceled"
            ],
            "in": "formData",
            "name": "state",
            "required": true,
            "type": "string"
          },
          {
            "description": "The ref",
            "in": "formData",
            "name": "ref",
            "required": false,
            "type": "string"
          },
          {
            "description": "The target URL to associate with this status",
            "in": "formData",
            "name": "target_url",
            "required": false,
            "type": "string"
          },
          {
            "description": "A short description of the status",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "A string label to differentiate this status from the status of other systems. Default: \"default\"",
            "in": "formData",
            "name": "name",
            "required": false,
            "type": "string"
          },
          {
            "description": "A string label to differentiate this status from the status of other systems. Default: \"default\"",
            "in": "formData",
            "name": "context",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Post status to a commit",
            "schema": {
              "$ref": "#/definitions/CommitStatus"
            }
          }
        },
        "summary": "Post status to a commit",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/triggers": {
      "get": {
        "description": "Get triggers list",
        "operationId": "getV3ProjectsIdTriggers",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get triggers list",
            "schema": {
              "$ref": "#/definitions/Trigger"
            }
          }
        },
        "summary": "Get triggers list",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a trigger",
        "operationId": "postV3ProjectsIdTriggers",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a trigger",
            "schema": {
              "$ref": "#/definitions/Trigger"
            }
          }
        },
        "summary": "Create a trigger",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/triggers/{token}": {
      "delete": {
        "description": "Delete a trigger",
        "operationId": "deleteV3ProjectsIdTriggersToken",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The unique token of trigger",
            "in": "path",
            "name": "token",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a trigger",
            "schema": {
              "$ref": "#/definitions/Trigger"
            }
          }
        },
        "summary": "Delete a trigger",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get specific trigger of a project",
        "operationId": "getV3ProjectsIdTriggersToken",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The unique token of trigger",
            "in": "path",
            "name": "token",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get specific trigger of a project",
            "schema": {
              "$ref": "#/definitions/Trigger"
            }
          }
        },
        "summary": "Get specific trigger of a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/unarchive": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Unarchive a project",
        "operationId": "postV3ProjectsIdUnarchive",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Unarchive a project",
            "schema": {
              "$ref": "#/definitions/Project"
            }
          }
        },
        "summary": "Unarchive a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/uploads": {
      "post": {
        "consumes": [
          "application/json",
          "multipart/form-data"
        ],
        "description": "Upload a file",
        "operationId": "postV3ProjectsIdUploads",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The file to be uploaded",
            "in": "formData",
            "name": "file",
            "required": true,
            "type": "file"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Upload a file"
          }
        },
        "summary": "Upload a file",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/users": {
      "get": {
        "description": "Get the users list of a project",
        "operationId": "getV3ProjectsIdUsers",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Return list of users matching the search criteria",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the users list of a project",
            "schema": {
              "$ref": "#/definitions/UserBasic"
            }
          }
        },
        "summary": "Get the users list of a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/variables": {
      "get": {
        "description": "Get project variables",
        "operationId": "getV3ProjectsIdVariables",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get project variables",
            "schema": {
              "$ref": "#/definitions/Variable"
            }
          }
        },
        "summary": "Get project variables",
        "tags": [
          "projects"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a new variable in a project",
        "operationId": "postV3ProjectsIdVariables",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The key of the variable",
            "in": "formData",
            "name": "key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The value of the variable",
            "in": "formData",
            "name": "value",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a new variable in a project",
            "schema": {
              "$ref": "#/definitions/Variable"
            }
          }
        },
        "summary": "Create a new variable in a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/projects/{id}/variables/{key}": {
      "delete": {
        "description": "Delete an existing variable from a project",
        "operationId": "deleteV3ProjectsIdVariablesKey",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The key of the variable",
            "in": "path",
            "name": "key",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete an existing variable from a project",
            "schema": {
              "$ref": "#/definitions/Variable"
            }
          }
        },
        "summary": "Delete an existing variable from a project",
        "tags": [
          "projects"
        ]
      },
      "get": {
        "description": "Get a specific variable from a project",
        "operationId": "getV3ProjectsIdVariablesKey",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The key of the variable",
            "in": "path",
            "name": "key",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a specific variable from a project",
            "schema": {
              "$ref": "#/definitions/Variable"
            }
          }
        },
        "summary": "Get a specific variable from a project",
        "tags": [
          "projects"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update an existing variable from a project",
        "operationId": "putV3ProjectsIdVariablesKey",
        "parameters": [
          {
            "description": "The ID of a project",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "string"
          },
          {
            "description": "The key of the variable",
            "in": "path",
            "name": "key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The value of the variable",
            "in": "formData",
            "name": "value",
            "required": false,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing variable from a project",
            "schema": {
              "$ref": "#/definitions/Variable"
            }
          }
        },
        "summary": "Update an existing variable from a project",
        "tags": [
          "projects"
        ]
      }
    },
    "/v3/runners": {
      "get": {
        "description": "Get runners available for user",
        "operationId": "getV3Runners",
        "parameters": [
          {
            "description": "The scope of specific runners to show",
            "enum": [
              "active",
              "paused",
              "online"
            ],
            "in": "query",
            "name": "scope",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get runners available for user",
            "schema": {
              "$ref": "#/definitions/Runner"
            }
          }
        },
        "summary": "Get runners available for user",
        "tags": [
          "runners"
        ]
      }
    },
    "/v3/runners/all": {
      "get": {
        "description": "Get all runners - shared and specific",
        "operationId": "getV3RunnersAll",
        "parameters": [
          {
            "description": "The scope of specific runners to show",
            "enum": [
              "active",
              "paused",
              "online",
              "specific",
              "shared"
            ],
            "in": "query",
            "name": "scope",
            "required": false,
            "type": "string"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get all runners - shared and specific",
            "schema": {
              "$ref": "#/definitions/Runner"
            }
          }
        },
        "summary": "Get all runners - shared and specific",
        "tags": [
          "runners"
        ]
      }
    },
    "/v3/runners/{id}": {
      "delete": {
        "description": "Remove a runner",
        "operationId": "deleteV3RunnersId",
        "parameters": [
          {
            "description": "The ID of the runner",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Remove a runner",
            "schema": {
              "$ref": "#/definitions/Runner"
            }
          }
        },
        "summary": "Remove a runner",
        "tags": [
          "runners"
        ]
      },
      "get": {
        "description": "Get runner's details",
        "operationId": "getV3RunnersId",
        "parameters": [
          {
            "description": "The ID of the runner",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get runner's details",
            "schema": {
              "$ref": "#/definitions/RunnerDetails"
            }
          }
        },
        "summary": "Get runner's details",
        "tags": [
          "runners"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update runner's details",
        "operationId": "putV3RunnersId",
        "parameters": [
          {
            "description": "The ID of the runner",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The description of the runner",
            "in": "formData",
            "name": "description",
            "required": false,
            "type": "string"
          },
          {
            "description": "The state of a runner",
            "in": "formData",
            "name": "active",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "The list of tags for a runner",
            "in": "formData",
            "items": {
              "type": "string"
            },
            "name": "tag_list",
            "required": false,
            "type": "array"
          },
          {
            "description": "Flag indicating the runner can execute untagged jobs",
            "in": "formData",
            "name": "run_untagged",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indicating the runner is locked",
            "in": "formData",
            "name": "locked",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update runner's details",
            "schema": {
              "$ref": "#/definitions/RunnerDetails"
            }
          }
        },
        "summary": "Update runner's details",
        "tags": [
          "runners"
        ]
      }
    },
    "/v3/session": {
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Login to get token",
        "operationId": "postV3Session",
        "parameters": [
          {
            "description": "The username",
            "in": "formData",
            "name": "login",
            "required": false,
            "type": "string"
          },
          {
            "description": "The email of the user",
            "in": "formData",
            "name": "email",
            "required": false,
            "type": "string"
          },
          {
            "description": "The password of the user",
            "in": "formData",
            "name": "password",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Login to get token",
            "schema": {
              "$ref": "#/definitions/UserWithPrivateToken"
            }
          }
        },
        "summary": "Login to get token",
        "tags": [
          "session"
        ]
      }
    },
    "/v3/sidekiq/compound_metrics": {
      "get": {
        "description": "Get the Sidekiq Compound metrics. Includes queue, process, and job statistics",
        "operationId": "getV3SidekiqCompoundMetrics",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the Sidekiq Compound metrics. Includes queue, process, and job statistics"
          }
        },
        "summary": "Get the Sidekiq Compound metrics. Includes queue, process, and job statistics",
        "tags": [
          "sidekiq"
        ]
      }
    },
    "/v3/sidekiq/job_stats": {
      "get": {
        "description": "Get the Sidekiq job statistics",
        "operationId": "getV3SidekiqJobStats",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the Sidekiq job statistics"
          }
        },
        "summary": "Get the Sidekiq job statistics",
        "tags": [
          "sidekiq"
        ]
      }
    },
    "/v3/sidekiq/process_metrics": {
      "get": {
        "description": "Get the Sidekiq process metrics",
        "operationId": "getV3SidekiqProcessMetrics",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the Sidekiq process metrics"
          }
        },
        "summary": "Get the Sidekiq process metrics",
        "tags": [
          "sidekiq"
        ]
      }
    },
    "/v3/sidekiq/queue_metrics": {
      "get": {
        "description": "Get the Sidekiq queue metrics",
        "operationId": "getV3SidekiqQueueMetrics",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the Sidekiq queue metrics"
          }
        },
        "summary": "Get the Sidekiq queue metrics",
        "tags": [
          "sidekiq"
        ]
      }
    },
    "/v3/snippets": {
      "get": {
        "description": "This feature was introduced in GitLab 8.15.",
        "operationId": "getV3Snippets",
        "parameters": [
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a snippets list for authenticated user",
            "schema": {
              "$ref": "#/definitions/PersonalSnippet"
            }
          }
        },
        "summary": "Get a snippets list for authenticated user",
        "tags": [
          "snippets"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.15.",
        "operationId": "postV3Snippets",
        "parameters": [
          {
            "description": "The title of a snippet",
            "in": "formData",
            "name": "title",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of a snippet file",
            "in": "formData",
            "name": "file_name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The content of a snippet",
            "in": "formData",
            "name": "content",
            "required": true,
            "type": "string"
          },
          {
            "default": 10,
            "description": "The visibility level of the snippet",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "visibility_level",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create new snippet",
            "schema": {
              "$ref": "#/definitions/PersonalSnippet"
            }
          }
        },
        "summary": "Create new snippet",
        "tags": [
          "snippets"
        ]
      }
    },
    "/v3/snippets/public": {
      "get": {
        "description": "This feature was introduced in GitLab 8.15.",
        "operationId": "getV3SnippetsPublic",
        "parameters": [
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "List all public snippets current_user has access to",
            "schema": {
              "$ref": "#/definitions/PersonalSnippet"
            }
          }
        },
        "summary": "List all public snippets current_user has access to",
        "tags": [
          "snippets"
        ]
      }
    },
    "/v3/snippets/{id}": {
      "delete": {
        "description": "This feature was introduced in GitLab 8.15.",
        "operationId": "deleteV3SnippetsId",
        "parameters": [
          {
            "description": "The ID of a snippet",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Remove snippet",
            "schema": {
              "$ref": "#/definitions/PersonalSnippet"
            }
          }
        },
        "summary": "Remove snippet",
        "tags": [
          "snippets"
        ]
      },
      "get": {
        "description": "This feature was introduced in GitLab 8.15.",
        "operationId": "getV3SnippetsId",
        "parameters": [
          {
            "description": "The ID of a snippet",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single snippet",
            "schema": {
              "$ref": "#/definitions/PersonalSnippet"
            }
          }
        },
        "summary": "Get a single snippet",
        "tags": [
          "snippets"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "This feature was introduced in GitLab 8.15.",
        "operationId": "putV3SnippetsId",
        "parameters": [
          {
            "description": "The ID of a snippet",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The title of a snippet",
            "in": "formData",
            "name": "title",
            "required": false,
            "type": "string"
          },
          {
            "description": "The name of a snippet file",
            "in": "formData",
            "name": "file_name",
            "required": false,
            "type": "string"
          },
          {
            "description": "The content of a snippet",
            "in": "formData",
            "name": "content",
            "required": false,
            "type": "string"
          },
          {
            "description": "The visibility level of the snippet",
            "enum": [
              0,
              10,
              20
            ],
            "format": "int32",
            "in": "formData",
            "name": "visibility_level",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update an existing snippet",
            "schema": {
              "$ref": "#/definitions/PersonalSnippet"
            }
          }
        },
        "summary": "Update an existing snippet",
        "tags": [
          "snippets"
        ]
      }
    },
    "/v3/snippets/{id}/raw": {
      "get": {
        "description": "This feature was introduced in GitLab 8.15.",
        "operationId": "getV3SnippetsIdRaw",
        "parameters": [
          {
            "description": "The ID of a snippet",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a raw snippet"
          }
        },
        "summary": "Get a raw snippet",
        "tags": [
          "snippets"
        ]
      }
    },
    "/v3/templates/dockerfiles": {
      "get": {
        "description": "This feature was introduced in GitLab 8.15.",
        "operationId": "getV3TemplatesDockerfiles",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of the available template",
            "schema": {
              "$ref": "#/definitions/TemplatesList"
            }
          }
        },
        "summary": "Get the list of the available template",
        "tags": [
          "templates"
        ]
      }
    },
    "/v3/templates/dockerfiles/{name}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.15.",
        "operationId": "getV3TemplatesDockerfilesName",
        "parameters": [
          {
            "description": "The name of the template",
            "in": "path",
            "name": "name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the text for a specific template present in local filesystem",
            "schema": {
              "$ref": "#/definitions/Template"
            }
          }
        },
        "summary": "Get the text for a specific template present in local filesystem",
        "tags": [
          "templates"
        ]
      }
    },
    "/v3/templates/gitignores": {
      "get": {
        "description": "This feature was introduced in GitLab 8.8.",
        "operationId": "getV3TemplatesGitignores",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of the available template",
            "schema": {
              "$ref": "#/definitions/TemplatesList"
            }
          }
        },
        "summary": "Get the list of the available template",
        "tags": [
          "templates"
        ]
      }
    },
    "/v3/templates/gitignores/{name}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.8.",
        "operationId": "getV3TemplatesGitignoresName",
        "parameters": [
          {
            "description": "The name of the template",
            "in": "path",
            "name": "name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the text for a specific template present in local filesystem",
            "schema": {
              "$ref": "#/definitions/Template"
            }
          }
        },
        "summary": "Get the text for a specific template present in local filesystem",
        "tags": [
          "templates"
        ]
      }
    },
    "/v3/templates/gitlab_ci_ymls": {
      "get": {
        "description": "This feature was introduced in GitLab 8.9.",
        "operationId": "getV3TemplatesGitlabCiYmls",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of the available template",
            "schema": {
              "$ref": "#/definitions/TemplatesList"
            }
          }
        },
        "summary": "Get the list of the available template",
        "tags": [
          "templates"
        ]
      }
    },
    "/v3/templates/gitlab_ci_ymls/{name}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.9.",
        "operationId": "getV3TemplatesGitlabCiYmlsName",
        "parameters": [
          {
            "description": "The name of the template",
            "in": "path",
            "name": "name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the text for a specific template present in local filesystem",
            "schema": {
              "$ref": "#/definitions/Template"
            }
          }
        },
        "summary": "Get the text for a specific template present in local filesystem",
        "tags": [
          "templates"
        ]
      }
    },
    "/v3/templates/licenses": {
      "get": {
        "description": "This feature was introduced in GitLab 8.7.",
        "operationId": "getV3TemplatesLicenses",
        "parameters": [
          {
            "description": "If passed, returns only popular licenses",
            "in": "query",
            "name": "popular",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of the available license template",
            "schema": {
              "$ref": "#/definitions/RepoLicense"
            }
          }
        },
        "summary": "Get the list of the available license template",
        "tags": [
          "templates"
        ]
      }
    },
    "/v3/templates/licenses/{name}": {
      "get": {
        "description": "This feature was introduced in GitLab 8.7.",
        "operationId": "getV3TemplatesLicensesName",
        "parameters": [
          {
            "description": "The name of the template",
            "in": "path",
            "name": "name",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the text for a specific license",
            "schema": {
              "$ref": "#/definitions/RepoLicense"
            }
          }
        },
        "summary": "Get the text for a specific license",
        "tags": [
          "templates"
        ]
      }
    },
    "/v3/todos": {
      "delete": {
        "description": "Mark all todos as done",
        "operationId": "deleteV3Todos",
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Mark all todos as done"
          }
        },
        "summary": "Mark all todos as done",
        "tags": [
          "todos"
        ]
      },
      "get": {
        "description": "Get a todo list",
        "operationId": "getV3Todos",
        "parameters": [
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a todo list",
            "schema": {
              "$ref": "#/definitions/Todo"
            }
          }
        },
        "summary": "Get a todo list",
        "tags": [
          "todos"
        ]
      }
    },
    "/v3/todos/{id}": {
      "delete": {
        "description": "Mark a todo as done",
        "operationId": "deleteV3TodosId",
        "parameters": [
          {
            "description": "The ID of the todo being marked as done",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Mark a todo as done",
            "schema": {
              "$ref": "#/definitions/Todo"
            }
          }
        },
        "summary": "Mark a todo as done",
        "tags": [
          "todos"
        ]
      }
    },
    "/v3/user": {
      "get": {
        "description": "Get the currently authenticated user",
        "operationId": "getV3User",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the currently authenticated user",
            "schema": {
              "$ref": "#/definitions/UserPublic"
            }
          }
        },
        "summary": "Get the currently authenticated user",
        "tags": [
          "user"
        ]
      }
    },
    "/v3/user/emails": {
      "get": {
        "description": "Get the currently authenticated user's email addresses",
        "operationId": "getV3UserEmails",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the currently authenticated user's email addresses",
            "schema": {
              "$ref": "#/definitions/Email"
            }
          }
        },
        "summary": "Get the currently authenticated user's email addresses",
        "tags": [
          "user"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add new email address to the currently authenticated user",
        "operationId": "postV3UserEmails",
        "parameters": [
          {
            "description": "The new email",
            "in": "formData",
            "name": "email",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add new email address to the currently authenticated user",
            "schema": {
              "$ref": "#/definitions/Email"
            }
          }
        },
        "summary": "Add new email address to the currently authenticated user",
        "tags": [
          "user"
        ]
      }
    },
    "/v3/user/emails/{email_id}": {
      "delete": {
        "description": "Delete an email address from the currently authenticated user",
        "operationId": "deleteV3UserEmailsEmailId",
        "parameters": [
          {
            "description": "The ID of the email",
            "format": "int32",
            "in": "path",
            "name": "email_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "204": {
            "description": "Delete an email address from the currently authenticated user"
          }
        },
        "summary": "Delete an email address from the currently authenticated user",
        "tags": [
          "user"
        ]
      },
      "get": {
        "description": "Get a single email address owned by the currently authenticated user",
        "operationId": "getV3UserEmailsEmailId",
        "parameters": [
          {
            "description": "The ID of the email",
            "format": "int32",
            "in": "path",
            "name": "email_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single email address owned by the currently authenticated user",
            "schema": {
              "$ref": "#/definitions/Email"
            }
          }
        },
        "summary": "Get a single email address owned by the currently authenticated user",
        "tags": [
          "user"
        ]
      }
    },
    "/v3/user/keys": {
      "get": {
        "description": "Get the currently authenticated user's SSH keys",
        "operationId": "getV3UserKeys",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the currently authenticated user's SSH keys",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Get the currently authenticated user's SSH keys",
        "tags": [
          "user"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add a new SSH key to the currently authenticated user",
        "operationId": "postV3UserKeys",
        "parameters": [
          {
            "description": "The new SSH key",
            "in": "formData",
            "name": "key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The title of the new SSH key",
            "in": "formData",
            "name": "title",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add a new SSH key to the currently authenticated user",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Add a new SSH key to the currently authenticated user",
        "tags": [
          "user"
        ]
      }
    },
    "/v3/user/keys/{key_id}": {
      "delete": {
        "description": "Delete an SSH key from the currently authenticated user",
        "operationId": "deleteV3UserKeysKeyId",
        "parameters": [
          {
            "description": "The ID of the SSH key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete an SSH key from the currently authenticated user",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Delete an SSH key from the currently authenticated user",
        "tags": [
          "user"
        ]
      },
      "get": {
        "description": "Get a single key owned by currently authenticated user",
        "operationId": "getV3UserKeysKeyId",
        "parameters": [
          {
            "description": "The ID of the SSH key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single key owned by currently authenticated user",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Get a single key owned by currently authenticated user",
        "tags": [
          "user"
        ]
      }
    },
    "/v3/users": {
      "get": {
        "description": "Get the list of users",
        "operationId": "getV3Users",
        "parameters": [
          {
            "description": "Get a single user with a specific username",
            "in": "query",
            "name": "username",
            "required": false,
            "type": "string"
          },
          {
            "description": "Search for a username",
            "in": "query",
            "name": "search",
            "required": false,
            "type": "string"
          },
          {
            "description": "Filters only active users",
            "in": "query",
            "name": "active",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Filters only external users",
            "in": "query",
            "name": "external",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Filters only blocked users",
            "in": "query",
            "name": "blocked",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the list of users",
            "schema": {
              "$ref": "#/definitions/UserBasic"
            }
          }
        },
        "summary": "Get the list of users",
        "tags": [
          "users"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Create a user. Available only for admins.",
        "operationId": "postV3Users",
        "parameters": [
          {
            "description": "The email of the user",
            "in": "formData",
            "name": "email",
            "required": true,
            "type": "string"
          },
          {
            "description": "The password of the new user",
            "in": "formData",
            "name": "password",
            "required": true,
            "type": "string"
          },
          {
            "description": "The name of the user",
            "in": "formData",
            "name": "name",
            "required": true,
            "type": "string"
          },
          {
            "description": "The username of the user",
            "in": "formData",
            "name": "username",
            "required": true,
            "type": "string"
          },
          {
            "description": "The Skype username",
            "in": "formData",
            "name": "skype",
            "required": false,
            "type": "string"
          },
          {
            "description": "The LinkedIn username",
            "in": "formData",
            "name": "linkedin",
            "required": false,
            "type": "string"
          },
          {
            "description": "The Twitter username",
            "in": "formData",
            "name": "twitter",
            "required": false,
            "type": "string"
          },
          {
            "description": "The website of the user",
            "in": "formData",
            "name": "website_url",
            "required": false,
            "type": "string"
          },
          {
            "description": "The organization of the user",
            "in": "formData",
            "name": "organization",
            "required": false,
            "type": "string"
          },
          {
            "description": "The number of projects a user can create",
            "format": "int32",
            "in": "formData",
            "name": "projects_limit",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The external authentication provider UID",
            "in": "formData",
            "name": "extern_uid",
            "required": false,
            "type": "string"
          },
          {
            "description": "The external provider",
            "in": "formData",
            "name": "provider",
            "required": false,
            "type": "string"
          },
          {
            "description": "The biography of the user",
            "in": "formData",
            "name": "bio",
            "required": false,
            "type": "string"
          },
          {
            "description": "The location of the user",
            "in": "formData",
            "name": "location",
            "required": false,
            "type": "string"
          },
          {
            "description": "Flag indicating the user is an administrator",
            "in": "formData",
            "name": "admin",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indicating the user can create groups",
            "in": "formData",
            "name": "can_create_group",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indicating the account needs to be confirmed",
            "in": "formData",
            "name": "confirm",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indicating the user is an external user",
            "in": "formData",
            "name": "external",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Create a user. Available only for admins.",
            "schema": {
              "$ref": "#/definitions/UserPublic"
            }
          }
        },
        "summary": "Create a user. Available only for admins.",
        "tags": [
          "users"
        ]
      }
    },
    "/v3/users/{id}": {
      "delete": {
        "description": "Delete a user. Available only for admins.",
        "operationId": "deleteV3UsersId",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete a user. Available only for admins.",
            "schema": {
              "$ref": "#/definitions/Email"
            }
          }
        },
        "summary": "Delete a user. Available only for admins.",
        "tags": [
          "users"
        ]
      },
      "get": {
        "description": "Get a single user",
        "operationId": "getV3UsersId",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get a single user",
            "schema": {
              "$ref": "#/definitions/UserBasic"
            }
          }
        },
        "summary": "Get a single user",
        "tags": [
          "users"
        ]
      },
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Update a user. Available only for admins.",
        "operationId": "putV3UsersId",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The email of the user",
            "in": "formData",
            "name": "email",
            "required": false,
            "type": "string"
          },
          {
            "description": "The password of the new user",
            "in": "formData",
            "name": "password",
            "required": false,
            "type": "string"
          },
          {
            "description": "The name of the user",
            "in": "formData",
            "name": "name",
            "required": false,
            "type": "string"
          },
          {
            "description": "The username of the user",
            "in": "formData",
            "name": "username",
            "required": false,
            "type": "string"
          },
          {
            "description": "The Skype username",
            "in": "formData",
            "name": "skype",
            "required": false,
            "type": "string"
          },
          {
            "description": "The LinkedIn username",
            "in": "formData",
            "name": "linkedin",
            "required": false,
            "type": "string"
          },
          {
            "description": "The Twitter username",
            "in": "formData",
            "name": "twitter",
            "required": false,
            "type": "string"
          },
          {
            "description": "The website of the user",
            "in": "formData",
            "name": "website_url",
            "required": false,
            "type": "string"
          },
          {
            "description": "The organization of the user",
            "in": "formData",
            "name": "organization",
            "required": false,
            "type": "string"
          },
          {
            "description": "The number of projects a user can create",
            "format": "int32",
            "in": "formData",
            "name": "projects_limit",
            "required": false,
            "type": "integer"
          },
          {
            "description": "The external authentication provider UID",
            "in": "formData",
            "name": "extern_uid",
            "required": false,
            "type": "string"
          },
          {
            "description": "The external provider",
            "in": "formData",
            "name": "provider",
            "required": false,
            "type": "string"
          },
          {
            "description": "The biography of the user",
            "in": "formData",
            "name": "bio",
            "required": false,
            "type": "string"
          },
          {
            "description": "The location of the user",
            "in": "formData",
            "name": "location",
            "required": false,
            "type": "string"
          },
          {
            "description": "Flag indicating the user is an administrator",
            "in": "formData",
            "name": "admin",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indicating the user can create groups",
            "in": "formData",
            "name": "can_create_group",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indicating the account needs to be confirmed",
            "in": "formData",
            "name": "confirm",
            "required": false,
            "type": "boolean"
          },
          {
            "description": "Flag indicating the user is an external user",
            "in": "formData",
            "name": "external",
            "required": false,
            "type": "boolean"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Update a user. Available only for admins.",
            "schema": {
              "$ref": "#/definitions/UserPublic"
            }
          }
        },
        "summary": "Update a user. Available only for admins.",
        "tags": [
          "users"
        ]
      }
    },
    "/v3/users/{id}/block": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Block a user. Available only for admins.",
        "operationId": "putV3UsersIdBlock",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Block a user. Available only for admins."
          }
        },
        "summary": "Block a user. Available only for admins.",
        "tags": [
          "users"
        ]
      }
    },
    "/v3/users/{id}/emails": {
      "get": {
        "description": "Get the emails addresses of a specified user. Available only for admins.",
        "operationId": "getV3UsersIdEmails",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the emails addresses of a specified user. Available only for admins.",
            "schema": {
              "$ref": "#/definitions/Email"
            }
          }
        },
        "summary": "Get the emails addresses of a specified user. Available only for admins.",
        "tags": [
          "users"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add an email address to a specified user. Available only for admins.",
        "operationId": "postV3UsersIdEmails",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The email of the user",
            "in": "formData",
            "name": "email",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add an email address to a specified user. Available only for admins.",
            "schema": {
              "$ref": "#/definitions/Email"
            }
          }
        },
        "summary": "Add an email address to a specified user. Available only for admins.",
        "tags": [
          "users"
        ]
      }
    },
    "/v3/users/{id}/emails/{email_id}": {
      "delete": {
        "description": "Delete an email address of a specified user. Available only for admins.",
        "operationId": "deleteV3UsersIdEmailsEmailId",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of the email",
            "format": "int32",
            "in": "path",
            "name": "email_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete an email address of a specified user. Available only for admins.",
            "schema": {
              "$ref": "#/definitions/Email"
            }
          }
        },
        "summary": "Delete an email address of a specified user. Available only for admins.",
        "tags": [
          "users"
        ]
      }
    },
    "/v3/users/{id}/events": {
      "get": {
        "description": "This feature was introduced in GitLab 8.13.",
        "operationId": "getV3UsersIdEvents",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "Current page number",
            "format": "int32",
            "in": "query",
            "name": "page",
            "required": false,
            "type": "integer"
          },
          {
            "description": "Number of items per page",
            "format": "int32",
            "in": "query",
            "name": "per_page",
            "required": false,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the contribution events of a specified user",
            "schema": {
              "$ref": "#/definitions/Event"
            }
          }
        },
        "summary": "Get the contribution events of a specified user",
        "tags": [
          "users"
        ]
      }
    },
    "/v3/users/{id}/keys": {
      "get": {
        "description": "Get the SSH keys of a specified user. Available only for admins.",
        "operationId": "getV3UsersIdKeys",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the SSH keys of a specified user. Available only for admins.",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Get the SSH keys of a specified user. Available only for admins.",
        "tags": [
          "users"
        ]
      },
      "post": {
        "consumes": [
          "application/json"
        ],
        "description": "Add an SSH key to a specified user. Available only for admins.",
        "operationId": "postV3UsersIdKeys",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The new SSH key",
            "in": "formData",
            "name": "key",
            "required": true,
            "type": "string"
          },
          {
            "description": "The title of the new SSH key",
            "in": "formData",
            "name": "title",
            "required": true,
            "type": "string"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "201": {
            "description": "Add an SSH key to a specified user. Available only for admins.",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Add an SSH key to a specified user. Available only for admins.",
        "tags": [
          "users"
        ]
      }
    },
    "/v3/users/{id}/keys/{key_id}": {
      "delete": {
        "description": "Delete an existing SSH key from a specified user. Available only for admins.",
        "operationId": "deleteV3UsersIdKeysKeyId",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          },
          {
            "description": "The ID of the SSH key",
            "format": "int32",
            "in": "path",
            "name": "key_id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Delete an existing SSH key from a specified user. Available only for admins.",
            "schema": {
              "$ref": "#/definitions/SSHKey"
            }
          }
        },
        "summary": "Delete an existing SSH key from a specified user. Available only for admins.",
        "tags": [
          "users"
        ]
      }
    },
    "/v3/users/{id}/unblock": {
      "put": {
        "consumes": [
          "application/json"
        ],
        "description": "Unblock a user. Available only for admins.",
        "operationId": "putV3UsersIdUnblock",
        "parameters": [
          {
            "description": "The ID of the user",
            "format": "int32",
            "in": "path",
            "name": "id",
            "required": true,
            "type": "integer"
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Unblock a user. Available only for admins."
          }
        },
        "summary": "Unblock a user. Available only for admins.",
        "tags": [
          "users"
        ]
      }
    },
    "/v3/version": {
      "get": {
        "description": "This feature was introduced in GitLab 8.13.",
        "operationId": "getV3Version",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Get the version information of the GitLab instance."
          }
        },
        "summary": "Get the version information of the GitLab instance.",
        "tags": [
          "version"
        ]
      }
    }
  },
  "definitions": {
    "AccessRequester": {
      "description": "This feature was introduced in GitLab 8.11.",
      "properties": {
        "avatar_url": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "requested_at": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "ApplicationSetting": {
      "description": "Modify application settings",
      "properties": {
        "after_sign_out_path": {
          "type": "string"
        },
        "after_sign_up_text": {
          "type": "string"
        },
        "container_registry_token_expire_delay": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "default_branch_protection": {
          "type": "string"
        },
        "default_group_visibility": {
          "type": "string"
        },
        "default_project_visibility": {
          "type": "string"
        },
        "default_projects_limit": {
          "type": "string"
        },
        "default_snippet_visibility": {
          "type": "string"
        },
        "domain_blacklist": {
          "type": "string"
        },
        "domain_blacklist_enabled": {
          "type": "string"
        },
        "domain_whitelist": {
          "type": "string"
        },
        "gravatar_enabled": {
          "type": "string"
        },
        "home_page_url": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "koding_enabled": {
          "type": "string"
        },
        "koding_url": {
          "type": "string"
        },
        "max_attachment_size": {
          "type": "string"
        },
        "plantuml_enabled": {
          "type": "string"
        },
        "plantuml_url": {
          "type": "string"
        },
        "repository_storage": {
          "type": "string"
        },
        "repository_storages": {
          "type": "string"
        },
        "restricted_visibility_levels": {
          "type": "string"
        },
        "session_expire_delay": {
          "type": "string"
        },
        "sign_in_text": {
          "type": "string"
        },
        "signin_enabled": {
          "type": "string"
        },
        "signup_enabled": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "user_oauth_applications": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "AwardEmoji": {
      "description": "This feature was introduced in 8.9",
      "properties": {
        "awardable_id": {
          "type": "string"
        },
        "awardable_type": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "user": {
          "$ref": "#/definitions/UserBasic"
        }
      },
      "type": "object"
    },
    "BasicProjectDetails": {
      "description": "Get all projects for admin user",
      "properties": {
        "http_url_to_repo": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "name_with_namespace": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "path_with_namespace": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Board": {
      "description": "This feature was introduced in 8.13",
      "properties": {
        "id": {
          "type": "string"
        },
        "lists": {
          "$ref": "#/definitions/List"
        }
      },
      "type": "object"
    },
    "Build": {
      "description": "This feature was added in GitLab 8.11",
      "properties": {
        "artifacts_file": {
          "$ref": "#/definitions/BuildArtifactFile"
        },
        "commit": {
          "$ref": "#/definitions/RepoCommit"
        },
        "coverage": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "finished_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "pipeline": {
          "$ref": "#/definitions/PipelineBasic"
        },
        "ref": {
          "type": "string"
        },
        "runner": {
          "$ref": "#/definitions/Runner"
        },
        "stage": {
          "type": "string"
        },
        "started_at": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "tag": {
          "type": "string"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "type": "object"
    },
    "BuildArtifactFile": {
      "properties": {
        "filename": {
          "type": "string"
        },
        "size": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "CommitNote": {
      "description": "Post comment to commit",
      "properties": {
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "created_at": {
          "type": "string"
        },
        "line": {
          "type": "string"
        },
        "line_type": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "path": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "CommitStatus": {
      "description": "Post status to a commit",
      "properties": {
        "allow_failure": {
          "type": "string"
        },
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "created_at": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "finished_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "ref": {
          "type": "string"
        },
        "sha": {
          "type": "string"
        },
        "started_at": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "target_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Compare": {
      "description": "Compare two branches, tags, or commits",
      "properties": {
        "commit": {
          "$ref": "#/definitions/RepoCommit"
        },
        "commits": {
          "$ref": "#/definitions/RepoCommit"
        },
        "compare_same_ref": {
          "type": "string"
        },
        "compare_timeout": {
          "type": "string"
        },
        "diffs": {
          "$ref": "#/definitions/RepoDiff"
        }
      },
      "type": "object"
    },
    "Contributor": {
      "description": "Get repository contributors",
      "properties": {
        "additions": {
          "type": "string"
        },
        "commits": {
          "type": "string"
        },
        "deletions": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Deployment": {
      "description": "This feature was introduced in GitLab 8.11.",
      "properties": {
        "created_at": {
          "type": "string"
        },
        "deployable": {
          "$ref": "#/definitions/Build"
        },
        "environment": {
          "$ref": "#/definitions/EnvironmentBasic"
        },
        "id": {
          "type": "string"
        },
        "iid": {
          "type": "string"
        },
        "ref": {
          "type": "string"
        },
        "sha": {
          "type": "string"
        },
        "user": {
          "$ref": "#/definitions/UserBasic"
        }
      },
      "type": "object"
    },
    "Email": {
      "description": "Add new email address to the currently authenticated user",
      "properties": {
        "email": {
          "type": "string"
        },
        "id": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Environment": {
      "description": "This feature was introduced in GitLab 8.11.",
      "properties": {
        "external_url": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "project": {
          "$ref": "#/definitions/Project"
        },
        "slug": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "EnvironmentBasic": {
      "properties": {
        "external_url": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Event": {
      "description": "This feature was introduced in GitLab 8.13.",
      "properties": {
        "action_name": {
          "type": "string"
        },
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "author_id": {
          "type": "string"
        },
        "author_username": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "data": {
          "type": "string"
        },
        "note": {
          "$ref": "#/definitions/Note"
        },
        "project_id": {
          "type": "string"
        },
        "target_id": {
          "type": "string"
        },
        "target_title": {
          "type": "string"
        },
        "target_type": {
          "type": "string"
        },
        "title": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "GlobalNotificationSetting": {
      "description": "This feature was introduced in GitLab 8.12",
      "properties": {
        "events": {
          "type": "string"
        },
        "level": {
          "type": "string"
        },
        "notification_email": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Group": {
      "description": "Update a group. Available only for users who can administrate groups.",
      "properties": {
        "avatar_url": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "lfs_enabled": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "request_access_enabled": {
          "type": "string"
        },
        "statistics": {
          "type": "string"
        },
        "visibility_level": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "GroupDetail": {
      "description": "Transfer a project to the group namespace. Available only for admin.",
      "properties": {
        "avatar_url": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "lfs_enabled": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "projects": {
          "$ref": "#/definitions/Project"
        },
        "request_access_enabled": {
          "type": "string"
        },
        "shared_projects": {
          "$ref": "#/definitions/Project"
        },
        "statistics": {
          "type": "string"
        },
        "visibility_level": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Hook": {
      "description": "Delete a hook",
      "properties": {
        "created_at": {
          "type": "string"
        },
        "enable_ssl_verification": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "push_events": {
          "type": "string"
        },
        "tag_push_events": {
          "type": "string"
        },
        "url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Identity": {
      "properties": {
        "extern_uid": {
          "type": "string"
        },
        "provider": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Issue": {
      "description": "Get currently authenticated user's issues",
      "properties": {
        "assignee": {
          "$ref": "#/definitions/UserBasic"
        },
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "confidential": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "downvotes": {
          "type": "string"
        },
        "due_date": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "iid": {
          "type": "string"
        },
        "labels": {
          "type": "string"
        },
        "milestone": {
          "$ref": "#/definitions/Milestone"
        },
        "project_id": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "subscribed": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "upvotes": {
          "type": "string"
        },
        "user_notes_count": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Label": {
      "description": "Unsubscribe from a resource",
      "properties": {
        "closed_issues_count": {
          "type": "string"
        },
        "color": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "open_issues_count": {
          "type": "string"
        },
        "open_merge_requests_count": {
          "type": "string"
        },
        "priority": {
          "type": "string"
        },
        "subscribed": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "LabelBasic": {
      "properties": {
        "color": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "List": {
      "description": "This feature was introduced in 8.13",
      "properties": {
        "id": {
          "type": "string"
        },
        "label": {
          "$ref": "#/definitions/LabelBasic"
        },
        "position": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "MRNote": {
      "description": "List issues that will be closed on merge",
      "properties": {
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "note": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Member": {
      "description": "Updates a member of a group or project.",
      "properties": {
        "access_level": {
          "type": "string"
        },
        "avatar_url": {
          "type": "string"
        },
        "expires_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "MergeRequest": {
      "description": "Unsubscribe from a resource",
      "properties": {
        "assignee": {
          "$ref": "#/definitions/UserBasic"
        },
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "created_at": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "downvotes": {
          "type": "string"
        },
        "force_remove_source_branch": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "iid": {
          "type": "string"
        },
        "labels": {
          "type": "string"
        },
        "merge_commit_sha": {
          "type": "string"
        },
        "merge_status": {
          "type": "string"
        },
        "merge_when_build_succeeds": {
          "type": "string"
        },
        "milestone": {
          "$ref": "#/definitions/Milestone"
        },
        "project_id": {
          "type": "string"
        },
        "sha": {
          "type": "string"
        },
        "should_remove_source_branch": {
          "type": "string"
        },
        "source_branch": {
          "type": "string"
        },
        "source_project_id": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "subscribed": {
          "type": "string"
        },
        "target_branch": {
          "type": "string"
        },
        "target_project_id": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "upvotes": {
          "type": "string"
        },
        "user_notes_count": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        },
        "work_in_progress": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "MergeRequestChanges": {
      "description": "Show the merge request changes",
      "properties": {
        "assignee": {
          "$ref": "#/definitions/UserBasic"
        },
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "changes": {
          "$ref": "#/definitions/RepoDiff"
        },
        "created_at": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "downvotes": {
          "type": "string"
        },
        "force_remove_source_branch": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "iid": {
          "type": "string"
        },
        "labels": {
          "type": "string"
        },
        "merge_commit_sha": {
          "type": "string"
        },
        "merge_status": {
          "type": "string"
        },
        "merge_when_build_succeeds": {
          "type": "string"
        },
        "milestone": {
          "$ref": "#/definitions/Milestone"
        },
        "project_id": {
          "type": "string"
        },
        "sha": {
          "type": "string"
        },
        "should_remove_source_branch": {
          "type": "string"
        },
        "source_branch": {
          "type": "string"
        },
        "source_project_id": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "subscribed": {
          "type": "string"
        },
        "target_branch": {
          "type": "string"
        },
        "target_project_id": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "upvotes": {
          "type": "string"
        },
        "user_notes_count": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        },
        "work_in_progress": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "MergeRequestDiff": {
      "description": "This feature was introduced in GitLab 8.12.",
      "properties": {
        "base_commit_sha": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "head_commit_sha": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "merge_request_id": {
          "type": "string"
        },
        "real_size": {
          "type": "string"
        },
        "start_commit_sha": {
          "type": "string"
        },
        "state": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "MergeRequestDiffFull": {
      "description": "This feature was introduced in GitLab 8.12.",
      "properties": {
        "base_commit_sha": {
          "type": "string"
        },
        "commits": {
          "$ref": "#/definitions/RepoCommit"
        },
        "created_at": {
          "type": "string"
        },
        "diffs": {
          "$ref": "#/definitions/RepoDiff"
        },
        "head_commit_sha": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "merge_request_id": {
          "type": "string"
        },
        "real_size": {
          "type": "string"
        },
        "start_commit_sha": {
          "type": "string"
        },
        "state": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Milestone": {
      "description": "Update an existing project milestone",
      "properties": {
        "created_at": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "due_date": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "iid": {
          "type": "string"
        },
        "project_id": {
          "type": "string"
        },
        "start_date": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Namespace": {
      "description": "Get a namespaces list",
      "properties": {
        "id": {
          "type": "string"
        },
        "kind": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "path": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Note": {
      "description": "Delete a +noteable+ note",
      "properties": {
        "attachment": {
          "type": "string"
        },
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "body": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "downvote?": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "noteable_id": {
          "type": "string"
        },
        "noteable_type": {
          "type": "string"
        },
        "system": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "upvote?": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "NotificationSetting": {
      "description": "This feature was introduced in GitLab 8.12",
      "properties": {
        "events": {
          "type": "string"
        },
        "level": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "PersonalSnippet": {
      "description": "This feature was introduced in GitLab 8.15.",
      "properties": {
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "created_at": {
          "type": "string"
        },
        "file_name": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "raw_url": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Pipeline": {
      "description": "This feature was introduced in GitLab 8.11.",
      "properties": {
        "before_sha": {
          "type": "string"
        },
        "committed_at": {
          "type": "string"
        },
        "coverage": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "duration": {
          "type": "string"
        },
        "finished_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "ref": {
          "type": "string"
        },
        "sha": {
          "type": "string"
        },
        "started_at": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "tag": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "user": {
          "$ref": "#/definitions/UserBasic"
        },
        "yaml_errors": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "PipelineBasic": {
      "properties": {
        "id": {
          "type": "string"
        },
        "ref": {
          "type": "string"
        },
        "sha": {
          "type": "string"
        },
        "status": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Project": {
      "description": "Unstar a project",
      "properties": {
        "archived": {
          "type": "string"
        },
        "avatar_url": {
          "type": "string"
        },
        "builds_enabled": {
          "type": "string"
        },
        "container_registry_enabled": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "creator_id": {
          "type": "string"
        },
        "default_branch": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "forked_from_project": {
          "$ref": "#/definitions/BasicProjectDetails"
        },
        "forks_count": {
          "type": "string"
        },
        "http_url_to_repo": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "issues_enabled": {
          "type": "string"
        },
        "last_activity_at": {
          "type": "string"
        },
        "lfs_enabled": {
          "type": "string"
        },
        "merge_requests_enabled": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "name_with_namespace": {
          "type": "string"
        },
        "namespace": {
          "$ref": "#/definitions/Namespace"
        },
        "only_allow_merge_if_all_discussions_are_resolved": {
          "type": "string"
        },
        "only_allow_merge_if_build_succeeds": {
          "type": "string"
        },
        "open_issues_count": {
          "type": "string"
        },
        "owner": {
          "$ref": "#/definitions/UserBasic"
        },
        "path": {
          "type": "string"
        },
        "path_with_namespace": {
          "type": "string"
        },
        "public": {
          "type": "string"
        },
        "public_builds": {
          "type": "string"
        },
        "request_access_enabled": {
          "type": "string"
        },
        "runners_token": {
          "type": "string"
        },
        "shared_runners_enabled": {
          "type": "string"
        },
        "shared_with_groups": {
          "type": "string"
        },
        "snippets_enabled": {
          "type": "string"
        },
        "ssh_url_to_repo": {
          "type": "string"
        },
        "star_count": {
          "type": "string"
        },
        "statistics": {
          "$ref": "#/definitions/ProjectStatistics"
        },
        "tag_list": {
          "type": "string"
        },
        "visibility_level": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        },
        "wiki_enabled": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "ProjectGroupLink": {
      "description": "Share the project with a group",
      "properties": {
        "expires_at": {
          "type": "string"
        },
        "group_access": {
          "type": "string"
        },
        "group_id": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "project_id": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "ProjectHook": {
      "description": "Deletes project hook",
      "properties": {
        "build_events": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "enable_ssl_verification": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "issues_events": {
          "type": "string"
        },
        "merge_requests_events": {
          "type": "string"
        },
        "note_events": {
          "type": "string"
        },
        "pipeline_events": {
          "type": "string"
        },
        "project_id": {
          "type": "string"
        },
        "push_events": {
          "type": "string"
        },
        "tag_push_events": {
          "type": "string"
        },
        "url": {
          "type": "string"
        },
        "wiki_page_events": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "ProjectService": {
      "description": "Get the service settings for project",
      "properties": {
        "active": {
          "type": "string"
        },
        "build_events": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "issues_events": {
          "type": "string"
        },
        "merge_requests_events": {
          "type": "string"
        },
        "note_events": {
          "type": "string"
        },
        "pipeline_events": {
          "type": "string"
        },
        "properties": {
          "type": "string"
        },
        "push_events": {
          "type": "string"
        },
        "tag_push_events": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "ProjectSnippet": {
      "description": "Update an existing project snippet",
      "properties": {
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "created_at": {
          "type": "string"
        },
        "expires_at": {
          "type": "string"
        },
        "file_name": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "ProjectStatistics": {
      "properties": {
        "build_artifacts_size": {
          "type": "string"
        },
        "commit_count": {
          "type": "string"
        },
        "lfs_objects_size": {
          "type": "string"
        },
        "repository_size": {
          "type": "string"
        },
        "storage_size": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "ProjectWithAccess": {
      "description": "Get a single project",
      "properties": {
        "archived": {
          "type": "string"
        },
        "avatar_url": {
          "type": "string"
        },
        "builds_enabled": {
          "type": "string"
        },
        "container_registry_enabled": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "creator_id": {
          "type": "string"
        },
        "default_branch": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "forked_from_project": {
          "$ref": "#/definitions/BasicProjectDetails"
        },
        "forks_count": {
          "type": "string"
        },
        "http_url_to_repo": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "issues_enabled": {
          "type": "string"
        },
        "last_activity_at": {
          "type": "string"
        },
        "lfs_enabled": {
          "type": "string"
        },
        "merge_requests_enabled": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "name_with_namespace": {
          "type": "string"
        },
        "namespace": {
          "$ref": "#/definitions/Namespace"
        },
        "only_allow_merge_if_all_discussions_are_resolved": {
          "type": "string"
        },
        "only_allow_merge_if_build_succeeds": {
          "type": "string"
        },
        "open_issues_count": {
          "type": "string"
        },
        "owner": {
          "$ref": "#/definitions/UserBasic"
        },
        "path": {
          "type": "string"
        },
        "path_with_namespace": {
          "type": "string"
        },
        "permissions": {
          "type": "string"
        },
        "public": {
          "type": "string"
        },
        "public_builds": {
          "type": "string"
        },
        "request_access_enabled": {
          "type": "string"
        },
        "runners_token": {
          "type": "string"
        },
        "shared_runners_enabled": {
          "type": "string"
        },
        "shared_with_groups": {
          "type": "string"
        },
        "snippets_enabled": {
          "type": "string"
        },
        "ssh_url_to_repo": {
          "type": "string"
        },
        "star_count": {
          "type": "string"
        },
        "statistics": {
          "$ref": "#/definitions/ProjectStatistics"
        },
        "tag_list": {
          "type": "string"
        },
        "visibility_level": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        },
        "wiki_enabled": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Release": {
      "description": "Update a tag's release note",
      "properties": {
        "description": {
          "type": "string"
        },
        "tag_name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "RepoBranch": {
      "description": "Create branch",
      "properties": {
        "commit": {
          "type": "string"
        },
        "developers_can_merge": {
          "type": "string"
        },
        "developers_can_push": {
          "type": "string"
        },
        "merged": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "protected": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "RepoCommit": {
      "description": "Get the commits of a merge request",
      "properties": {
        "author_email": {
          "type": "string"
        },
        "author_name": {
          "type": "string"
        },
        "committer_email": {
          "type": "string"
        },
        "committer_name": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "short_id": {
          "type": "string"
        },
        "title": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "RepoCommitDetail": {
      "description": "Get a specific commit of a project",
      "properties": {
        "author_email": {
          "type": "string"
        },
        "author_name": {
          "type": "string"
        },
        "authored_date": {
          "type": "string"
        },
        "committed_date": {
          "type": "string"
        },
        "committer_email": {
          "type": "string"
        },
        "committer_name": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "parent_ids": {
          "type": "string"
        },
        "short_id": {
          "type": "string"
        },
        "stats": {
          "$ref": "#/definitions/RepoCommitStats"
        },
        "status": {
          "type": "string"
        },
        "title": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "RepoCommitStats": {
      "properties": {
        "additions": {
          "type": "string"
        },
        "deletions": {
          "type": "string"
        },
        "total": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "RepoDiff": {
      "properties": {
        "a_mode": {
          "type": "string"
        },
        "b_mode": {
          "type": "string"
        },
        "deleted_file": {
          "type": "string"
        },
        "diff": {
          "type": "string"
        },
        "new_file": {
          "type": "string"
        },
        "new_path": {
          "type": "string"
        },
        "old_path": {
          "type": "string"
        },
        "renamed_file": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "RepoLicense": {
      "description": "This feature was introduced in GitLab 8.7.",
      "properties": {
        "conditions": {
          "type": "string"
        },
        "content": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "html_url": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "limitations": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "nickname": {
          "type": "string"
        },
        "permissions": {
          "type": "string"
        },
        "popular": {
          "type": "string"
        },
        "source_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "RepoTag": {
      "description": "Create a new repository tag",
      "properties": {
        "commit": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "release": {
          "$ref": "#/definitions/Release"
        }
      },
      "type": "object"
    },
    "RepoTreeObject": {
      "description": "Get a project repository tree",
      "properties": {
        "id": {
          "type": "string"
        },
        "mode": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "path": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Runner": {
      "description": "Remove a runner",
      "properties": {
        "active": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_shared": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "RunnerDetails": {
      "description": "Update runner's details",
      "properties": {
        "active": {
          "type": "string"
        },
        "architecture": {
          "type": "string"
        },
        "contacted_at": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_shared": {
          "type": "string"
        },
        "locked": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "platform": {
          "type": "string"
        },
        "projects": {
          "$ref": "#/definitions/BasicProjectDetails"
        },
        "revision": {
          "type": "string"
        },
        "run_untagged": {
          "type": "string"
        },
        "tag_list": {
          "type": "string"
        },
        "token": {
          "type": "string"
        },
        "version": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "SSHKey": {
      "description": "Delete an SSH key from the currently authenticated user",
      "properties": {
        "can_push": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "title": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "SSHKeyWithUser": {
      "description": "Get single ssh key by id. Only available to admin users",
      "properties": {
        "can_push": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "user": {
          "$ref": "#/definitions/UserPublic"
        }
      },
      "type": "object"
    },
    "Template": {
      "description": "This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.",
      "properties": {
        "content": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "TemplatesList": {
      "description": "This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.",
      "properties": {
        "name": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Todo": {
      "description": "Mark a todo as done",
      "properties": {
        "action_name": {
          "type": "string"
        },
        "author": {
          "$ref": "#/definitions/UserBasic"
        },
        "body": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "project": {
          "$ref": "#/definitions/BasicProjectDetails"
        },
        "state": {
          "type": "string"
        },
        "target": {
          "type": "string"
        },
        "target_type": {
          "type": "string"
        },
        "target_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Trigger": {
      "description": "Delete a trigger",
      "properties": {
        "created_at": {
          "type": "string"
        },
        "deleted_at": {
          "type": "string"
        },
        "last_used": {
          "type": "string"
        },
        "token": {
          "type": "string"
        },
        "updated_at": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "TriggerRequest": {
      "description": "Trigger a GitLab project build",
      "properties": {
        "id": {
          "type": "string"
        },
        "variables": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "User": {
      "properties": {
        "avatar_url": {
          "type": "string"
        },
        "bio": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "is_admin": {
          "type": "string"
        },
        "linkedin": {
          "type": "string"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "organization": {
          "type": "string"
        },
        "skype": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "twitter": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        },
        "website_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "UserBasic": {
      "description": "Get a single user",
      "properties": {
        "avatar_url": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "UserPublic": {
      "description": "Get the currently authenticated user",
      "properties": {
        "avatar_url": {
          "type": "string"
        },
        "bio": {
          "type": "string"
        },
        "can_create_group": {
          "type": "string"
        },
        "can_create_project": {
          "type": "string"
        },
        "color_scheme_id": {
          "type": "string"
        },
        "confirmed_at": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "current_sign_in_at": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "external": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "identities": {
          "$ref": "#/definitions/Identity"
        },
        "is_admin": {
          "type": "string"
        },
        "last_sign_in_at": {
          "type": "string"
        },
        "linkedin": {
          "type": "string"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "organization": {
          "type": "string"
        },
        "projects_limit": {
          "type": "string"
        },
        "skype": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "theme_id": {
          "type": "string"
        },
        "twitter": {
          "type": "string"
        },
        "two_factor_enabled": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        },
        "website_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "UserWithPrivateToken": {
      "description": "Login to get token",
      "properties": {
        "avatar_url": {
          "type": "string"
        },
        "bio": {
          "type": "string"
        },
        "can_create_group": {
          "type": "string"
        },
        "can_create_project": {
          "type": "string"
        },
        "color_scheme_id": {
          "type": "string"
        },
        "confirmed_at": {
          "type": "string"
        },
        "created_at": {
          "type": "string"
        },
        "current_sign_in_at": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "external": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "identities": {
          "$ref": "#/definitions/Identity"
        },
        "is_admin": {
          "type": "string"
        },
        "last_sign_in_at": {
          "type": "string"
        },
        "linkedin": {
          "type": "string"
        },
        "location": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "organization": {
          "type": "string"
        },
        "private_token": {
          "type": "string"
        },
        "projects_limit": {
          "type": "string"
        },
        "skype": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "theme_id": {
          "type": "string"
        },
        "twitter": {
          "type": "string"
        },
        "two_factor_enabled": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "web_url": {
          "type": "string"
        },
        "website_url": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "Variable": {
      "description": "Delete an existing variable from a project",
      "properties": {
        "key": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      },
      "type": "object"
    }
  }
} as const
            