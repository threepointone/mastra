// @ts-nocheck
export type TComponents = {
  schemas: {
    activity_log: {
      title: 'Activity Log';
      type: 'object';
      description: 'Activities performed by Admins.';
      nullable: true;
      properties: {
        id: {
          type: 'string';
          description: 'The id representing the activity.';
          example: '6';
        };
        performed_by: {
          type: 'object';
          description: 'Details about the Admin involved in the activity.';
          properties: {
            type: {
              type: 'string';
              description: "String representing the object's type. Always has the value `admin`.";
              example: 'admin';
            };
            id: {
              type: 'string';
              description: 'The id representing the admin.';
              example: '1295';
            };
            email: {
              type: 'string';
              description: 'The email of the admin.';
              example: 'john@example.com';
            };
            ip: {
              type: 'string';
              description: 'The IP address of the admin.';
              example: '198.51.100.255';
            };
          };
        };
        metadata: {
          $ref: '#/components/schemas/activity_log_metadata';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the activity was created.';
          example: 1671028894;
        };
        activity_type: {
          type: 'string';
          enum: [
            'admin_assignment_limit_change',
            'admin_away_mode_change',
            'admin_deletion',
            'admin_deprovisioned',
            'admin_impersonation_end',
            'admin_impersonation_start',
            'admin_invite_change',
            'admin_invite_creation',
            'admin_invite_deletion',
            'admin_login_failure',
            'admin_login_success',
            'admin_logout',
            'admin_password_reset_request',
            'admin_password_reset_success',
            'admin_permission_change',
            'admin_provisioned',
            'admin_two_factor_auth_change',
            'admin_unauthorized_sign_in_method',
            'app_admin_join',
            'app_authentication_method_change',
            'app_data_deletion',
            'app_data_export',
            'app_google_sso_domain_change',
            'app_identity_verification_change',
            'app_name_change',
            'app_outbound_address_change',
            'app_package_installation',
            'app_package_token_regeneration',
            'app_package_uninstallation',
            'app_team_creation',
            'app_team_deletion',
            'app_team_membership_modification',
            'app_timezone_change',
            'app_webhook_creation',
            'app_webhook_deletion',
            'articles_in_messenger_enabled_change',
            'bulk_delete',
            'bulk_export',
            'campaign_deletion',
            'campaign_state_change',
            'conversation_part_deletion',
            'conversation_topic_change',
            'conversation_topic_creation',
            'conversation_topic_deletion',
            'help_center_settings_change',
            'inbound_conversations_change',
            'inbox_access_change',
            'message_deletion',
            'message_state_change',
            'messenger_look_and_feel_change',
            'messenger_search_required_change',
            'messenger_spaces_change',
            'office_hours_change',
            'role_change',
            'role_creation',
            'role_deletion',
            'ruleset_activation_title_preview',
            'ruleset_creation',
            'ruleset_deletion',
            'search_browse_enabled_change',
            'search_browse_required_change',
            'seat_change',
            'seat_revoke',
            'security_settings_change',
            'temporary_expectation_change',
            'upfront_email_collection_change',
            'welcome_message_change',
          ];
          example: 'app_name_change';
        };
        activity_description: {
          type: 'string';
          description: 'A sentence or two describing the activity.';
          example: 'Admin updated the app\'s name to "My App".';
        };
      };
    };
    activity_log_list: {
      title: 'Paginated Response';
      type: 'object';
      description: 'A paginated list of activity logs.';
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `activity_log.list`.";
          example: 'activity_log.list';
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
        activity_logs: {
          type: 'array';
          description: 'An array of activity logs';
          items: {
            $ref: '#/components/schemas/activity_log';
          };
        };
      };
    };
    activity_log_metadata: {
      title: 'Activity Log Metadata';
      type: 'object';
      description: 'Additional data provided about Admin activity.';
      nullable: true;
      properties: {
        sign_in_method: {
          type: 'string';
          nullable: true;
          description: 'The way the admin signed in.';
          example: 'email_password';
        };
        external_id: {
          type: 'string';
          nullable: true;
          description: 'The unique identifier for the contact which is provided by the Client.';
          example: 'f3b87a2e09d514c6c2e79b9a';
        };
        away_mode: {
          type: 'boolean';
          nullable: true;
          description: 'The away mode status which is set to true when away and false when returned.';
          example: true;
        };
        away_status_reason: {
          type: 'string';
          nullable: true;
          description: 'The reason the Admin is away.';
          example: '😌 On a break';
        };
        reassign_conversations: {
          type: 'boolean';
          nullable: true;
          description: 'Indicates if conversations should be reassigned while an Admin is away.';
          example: false;
        };
        source: {
          type: 'string';
          nullable: true;
          description: 'The action that initiated the status change.';
          example: 'admin update from web - Admin id: 93';
        };
        auto_changed: {
          type: 'string';
          nullable: true;
          description: 'Indicates if the status was changed automatically or manually.';
          example: false;
        };
        update_by: {
          type: 'integer';
          nullable: true;
          description: 'The ID of the Admin who initiated the activity.';
          example: 93;
        };
        update_by_name: {
          type: 'string';
          nullable: true;
          description: 'The name of the Admin who initiated the activity.';
          example: 'Joe Bloggs';
        };
      };
    };
    addressable_list: {
      title: 'Addressable List';
      type: 'object';
      nullable: false;
      description: 'A list used to access other resources from a parent model.';
      properties: {
        type: {
          type: 'string';
          format: 'uri';
          description: 'The addressable object type';
          example: 'note';
        };
        id: {
          type: 'string';
          description: 'The id of the addressable object';
          example: '123';
        };
        url: {
          type: 'string';
          format: 'uri';
          description: 'Url to get more company resources for this contact';
          example: '/contacts/5ba682d23d7cf92bef87bfd4/notes';
        };
      };
    };
    admin: {
      title: 'Admin';
      type: 'object';
      'x-tags': ['Admins'];
      description: 'Admins are teammate accounts that have access to a workspace.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `admin`.";
          example: 'admin';
        };
        id: {
          type: 'string';
          description: 'The id representing the admin.';
          example: '1295';
        };
        name: {
          type: 'string';
          description: 'The name of the admin.';
          example: 'Hoban Washburne';
        };
        email: {
          type: 'string';
          description: 'The email of the admin.';
          example: 'wash@serenity.io';
        };
        job_title: {
          type: 'string';
          description: 'The job title of the admin.';
          example: 'Philosopher';
        };
        away_mode_enabled: {
          type: 'boolean';
          description: 'Identifies if this admin is currently set in away mode.';
          example: false;
        };
        away_mode_reassign: {
          type: 'boolean';
          description: 'Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.';
          example: false;
        };
        has_inbox_seat: {
          type: 'boolean';
          description: 'Identifies if this admin has a paid inbox seat to restrict/allow features that require them.';
          example: true;
        };
        team_ids: {
          type: 'array';
          description: 'This object represents the avatar associated with the admin.';
          example: [814865];
          items: {
            type: 'integer';
          };
        };
        avatar: {
          type: 'string';
          format: 'uri';
          nullable: true;
          description: 'Image for the associated team or teammate';
          example: 'https://picsum.photos/200/300';
        };
        team_priority_level: {
          $ref: '#/components/schemas/team_priority_level';
        };
      };
    };
    admin_list: {
      title: 'Admins';
      type: 'object';
      description: 'A list of admins associated with a given workspace.';
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `admin.list`.";
          example: 'admin.list';
        };
        admins: {
          type: 'array';
          description: 'A list of admins associated with a given workspace.';
          items: {
            $ref: '#/components/schemas/admin';
          };
        };
      };
    };
    admin_priority_level: {
      title: 'Admin Priority Level';
      type: 'object';
      nullable: true;
      description: 'Admin priority levels for the team';
      properties: {
        primary_admin_ids: {
          type: 'array';
          description: 'The primary admin ids for the team';
          nullable: true;
          example: [493881];
          items: {
            type: 'integer';
          };
        };
        secondary_admin_ids: {
          type: 'array';
          description: 'The secondary admin ids for the team';
          nullable: true;
          example: [814865];
          items: {
            type: 'integer';
          };
        };
      };
    };
    admin_reply_conversation_request: {
      title: 'Admin Reply';
      type: 'object';
      description: 'Payload of the request to reply on behalf of an admin';
      properties: {
        message_type: {
          type: 'string';
          enum: ['comment', 'note'];
        };
        type: {
          type: 'string';
          enum: ['admin'];
          example: 'admin';
        };
        body: {
          type: 'string';
          description: 'The text body of the reply. Notes accept some HTML formatting. Must be present for comment and note message types.';
          example: 'Hello there!';
        };
        admin_id: {
          type: 'string';
          description: 'The id of the admin who is authoring the comment.';
          example: '3156780';
        };
        created_at: {
          type: 'integer';
          description: 'The time the reply was created. If not provided, the current time will be used.';
          example: 1590000000;
        };
        attachment_urls: {
          type: 'array';
          description: 'A list of image URLs that will be added as attachments. You can include up to 10 URLs.';
          items: {
            type: 'string';
            format: 'uri';
          };
          maxItems: 10;
        };
        attachment_files: {
          type: 'array';
          description: 'A list of files that will be added as attachments. You can include up to 10 files';
          items: {
            $ref: '#/components/schemas/conversation_attachment_files';
          };
          maxItems: 10;
        };
      };
      required: ['message_type', 'type', 'admin_id'];
    };
    admin_with_app: {
      title: 'Admin';
      type: 'object';
      description: 'Admins are the teammate accounts that have access to a workspace';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `admin`.";
          example: 'admin';
        };
        id: {
          type: 'string';
          description: 'The id representing the admin.';
          example: '1295';
        };
        name: {
          type: 'string';
          description: 'The name of the admin.';
          example: 'Hoban Washburne';
        };
        email: {
          type: 'string';
          description: 'The email of the admin.';
          example: 'wash@serenity.io';
        };
        job_title: {
          type: 'string';
          description: 'The job title of the admin.';
          example: 'Philosopher';
        };
        away_mode_enabled: {
          type: 'boolean';
          description: 'Identifies if this admin is currently set in away mode.';
          example: false;
        };
        away_mode_reassign: {
          type: 'boolean';
          description: 'Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.';
          example: false;
        };
        has_inbox_seat: {
          type: 'boolean';
          description: 'Identifies if this admin has a paid inbox seat to restrict/allow features that require them.';
          example: true;
        };
        team_ids: {
          type: 'array';
          description: 'This is a list of ids of the teams that this admin is part of.';
          example: [814865];
          items: {
            type: 'integer';
          };
        };
        avatar: {
          type: 'object';
          description: 'This object represents the avatar associated with the admin.';
          properties: {
            type: {
              type: 'string';
              description: 'This is a string that identifies the type of the object. It will always have the value `avatar`.';
              default: 'avatar';
              example: 'avatar';
            };
            image_url: {
              type: 'string';
              format: 'uri';
              nullable: true;
              description: 'This object represents the avatar associated with the admin.';
              example: 'https://example.com/avatar.png';
            };
          };
        };
        email_verified: {
          type: 'boolean';
          description: "Identifies if this admin's email is verified.";
          nullable: true;
          example: true;
        };
        app: {
          $ref: '#/components/schemas/app';
          nullable: true;
          description: 'App that the admin belongs to.';
        };
      };
    };
    app: {
      title: 'App';
      type: 'object';
      description: 'App is a workspace on Intercom';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: '';
          default: 'app';
          example: 'app';
        };
        id_code: {
          type: 'string';
          description: 'The id of the app.';
          example: 'xyz789';
        };
        name: {
          type: 'string';
          description: 'The name of the app.';
          example: 'ACME';
        };
        region: {
          type: 'string';
          description: 'The Intercom region the app is located in.';
          example: 'US';
        };
        timezone: {
          type: 'string';
          description: 'The timezone of the region where the app is located.';
          example: 'America/Los_Angeles';
        };
        created_at: {
          type: 'integer';
          description: 'When the app was created.';
          example: 1671465577;
        };
        identity_verification: {
          type: 'boolean';
          description: 'Whether or not the app uses identity verification.';
          example: false;
        };
      };
    };
    article: {
      title: 'Article';
      type: 'object';
      'x-tags': ['Articles'];
      description: 'The Articles API is a central place to gather all information and take actions on your articles. Articles can live within collections and sections, or alternatively they can stand alone.';
      properties: {
        statistics: {
          nullable: true;
          $ref: '#/components/schemas/article_statistics';
        };
      };
      allOf: [
        {
          $ref: '#/components/schemas/article_list_item';
        },
      ];
    };
    article_content: {
      title: 'Article Content';
      type: 'object';
      description: 'The Content of an Article.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - `article_content` .';
          enum: [null, 'article_content'];
          example: 'article_content';
          nullable: true;
        };
        title: {
          type: 'string';
          description: 'The title of the article.';
          example: 'How to create a new article';
        };
        description: {
          type: 'string';
          description: 'The description of the article.';
          example: 'This article will show you how to create a new article.';
        };
        body: {
          type: 'string';
          description: 'The body of the article.';
          example: 'This is the body of the article.';
        };
        author_id: {
          type: 'integer';
          description: 'The ID of the author of the article.';
          example: '5017691';
        };
        state: {
          type: 'string';
          description: 'Whether the article is `published` or is a `draft` .';
          enum: ['published', 'draft'];
          example: 'draft';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time when the article was created (seconds).';
          example: 1663597223;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time when the article was last updated (seconds).';
          example: 1663597260;
        };
        url: {
          type: 'string';
          description: 'The URL of the article.';
          example: 'http://intercom.test/help/en/articles/3-default-language';
        };
      };
    };
    article_list: {
      title: 'Articles';
      type: 'object';
      description: 'This will return a list of articles for the App.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object - `list`.';
          enum: ['list'];
          example: 'list';
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
        total_count: {
          type: 'integer';
          description: 'A count of the total number of articles.';
          example: 1;
        };
        data: {
          type: 'array';
          description: 'An array of Article objects';
          items: {
            $ref: '#/components/schemas/article_list_item';
          };
        };
      };
    };
    article_list_item: {
      title: 'Articles';
      type: 'object';
      'x-tags': ['Articles'];
      description: 'The data returned about your articles when you list them.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - `article`.';
          enum: ['article'];
          default: 'article';
          example: 'article';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the article which is given by Intercom.';
          example: '6871119';
        };
        workspace_id: {
          type: 'string';
          description: 'The id of the workspace which the article belongs to.';
          example: 'hfi1bx4l';
        };
        title: {
          type: 'string';
          description: "The title of the article. For multilingual articles, this will be the title of the default language's content.";
          example: 'Default language title';
        };
        description: {
          type: 'string';
          nullable: true;
          description: "The description of the article. For multilingual articles, this will be the description of the default language's content.";
          example: 'Default language description';
        };
        body: {
          type: 'string';
          nullable: true;
          description: "The body of the article in HTML. For multilingual articles, this will be the body of the default language's content.";
          example: 'Default language body in html';
        };
        author_id: {
          type: 'integer';
          description: "The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace.";
          example: '5017691';
        };
        state: {
          type: 'string';
          description: "Whether the article is `published` or is a `draft`. For multilingual articles, this will be the state of the default language's content.";
          enum: ['published', 'draft'];
          default: 'draft';
          example: 'published';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: "The time when the article was created. For multilingual articles, this will be the timestamp of creation of the default language's content in seconds.";
          example: 1672928359;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: "The time when the article was last updated. For multilingual articles, this will be the timestamp of last update of the default language's content in seconds.";
          example: 1672928610;
        };
        url: {
          type: 'string';
          nullable: true;
          description: "The URL of the article. For multilingual articles, this will be the URL of the default language's content.";
          example: 'http://intercom.test/help/en/articles/3-default-language';
        };
        parent_id: {
          type: 'integer';
          nullable: true;
          description: "The id of the article's parent collection or section. An article without this field stands alone.";
          example: '125685';
        };
        parent_ids: {
          type: 'array';
          description: "The ids of the article's parent collections or sections. An article without this field stands alone.";
          items: {
            type: 'integer';
          };
          example: [18, 19];
        };
        parent_type: {
          type: 'string';
          nullable: true;
          description: 'The type of parent, which can either be a `collection` or `section`.';
          example: 'collection';
        };
        default_locale: {
          type: 'string';
          description: 'The default locale of the help center. This field is only returned for multilingual help centers.';
          example: 'en';
        };
        translated_content: {
          nullable: true;
          $ref: '#/components/schemas/article_translated_content';
        };
      };
    };
    article_statistics: {
      title: 'Article Statistics';
      type: 'object';
      description: 'The statistics of an article.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - `article_statistics`.';
          enum: ['article_statistics'];
          default: 'article_statistics';
          example: 'article_statistics';
        };
        views: {
          type: 'integer';
          description: 'The number of total views the article has received.';
          example: 10;
        };
        conversions: {
          type: 'integer';
          description: 'The number of conversations started from the article.';
          example: 0;
        };
        reactions: {
          type: 'integer';
          description: 'The number of total reactions the article has received.';
          example: 10;
        };
        happy_reaction_percentage: {
          type: 'number';
          format: 'float';
          description: 'The percentage of happy reactions the article has received against other types of reaction.';
          example: 40;
        };
        neutral_reaction_percentage: {
          type: 'number';
          format: 'float';
          description: 'The percentage of neutral reactions the article has received against other types of reaction.';
          example: 40;
        };
        sad_reaction_percentage: {
          type: 'number';
          format: 'float';
          description: 'The percentage of sad reactions the article has received against other types of reaction.';
          example: 20;
        };
      };
    };
    article_translated_content: {
      title: 'Article Translated Content';
      type: 'object';
      description: 'The Translated Content of an Article. The keys are the locale codes and the values are the translated content of the article.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - article_translated_content.';
          enum: [null, 'article_translated_content'];
          example: 'article_translated_content';
          nullable: true;
        };
        ar: {
          description: 'The content of the article in Arabic';
          $ref: '#/components/schemas/article_content';
        };
        bg: {
          description: 'The content of the article in Bulgarian';
          $ref: '#/components/schemas/article_content';
        };
        bs: {
          description: 'The content of the article in Bosnian';
          $ref: '#/components/schemas/article_content';
        };
        ca: {
          description: 'The content of the article in Catalan';
          $ref: '#/components/schemas/article_content';
        };
        cs: {
          description: 'The content of the article in Czech';
          $ref: '#/components/schemas/article_content';
        };
        da: {
          description: 'The content of the article in Danish';
          $ref: '#/components/schemas/article_content';
        };
        de: {
          description: 'The content of the article in German';
          $ref: '#/components/schemas/article_content';
        };
        el: {
          description: 'The content of the article in Greek';
          $ref: '#/components/schemas/article_content';
        };
        en: {
          description: 'The content of the article in English';
          $ref: '#/components/schemas/article_content';
        };
        es: {
          description: 'The content of the article in Spanish';
          $ref: '#/components/schemas/article_content';
        };
        et: {
          description: 'The content of the article in Estonian';
          $ref: '#/components/schemas/article_content';
        };
        fi: {
          description: 'The content of the article in Finnish';
          $ref: '#/components/schemas/article_content';
        };
        fr: {
          description: 'The content of the article in French';
          $ref: '#/components/schemas/article_content';
        };
        he: {
          description: 'The content of the article in Hebrew';
          $ref: '#/components/schemas/article_content';
        };
        hr: {
          description: 'The content of the article in Croatian';
          $ref: '#/components/schemas/article_content';
        };
        hu: {
          description: 'The content of the article in Hungarian';
          $ref: '#/components/schemas/article_content';
        };
        id: {
          description: 'The content of the article in Indonesian';
          $ref: '#/components/schemas/article_content';
        };
        it: {
          description: 'The content of the article in Italian';
          $ref: '#/components/schemas/article_content';
        };
        ja: {
          description: 'The content of the article in Japanese';
          $ref: '#/components/schemas/article_content';
        };
        ko: {
          description: 'The content of the article in Korean';
          $ref: '#/components/schemas/article_content';
        };
        lt: {
          description: 'The content of the article in Lithuanian';
          $ref: '#/components/schemas/article_content';
        };
        lv: {
          description: 'The content of the article in Latvian';
          $ref: '#/components/schemas/article_content';
        };
        mn: {
          description: 'The content of the article in Mongolian';
          $ref: '#/components/schemas/article_content';
        };
        nb: {
          description: 'The content of the article in Norwegian';
          $ref: '#/components/schemas/article_content';
        };
        nl: {
          description: 'The content of the article in Dutch';
          $ref: '#/components/schemas/article_content';
        };
        pl: {
          description: 'The content of the article in Polish';
          $ref: '#/components/schemas/article_content';
        };
        pt: {
          description: 'The content of the article in Portuguese (Portugal)';
          $ref: '#/components/schemas/article_content';
        };
        ro: {
          description: 'The content of the article in Romanian';
          $ref: '#/components/schemas/article_content';
        };
        ru: {
          description: 'The content of the article in Russian';
          $ref: '#/components/schemas/article_content';
        };
        sl: {
          description: 'The content of the article in Slovenian';
          $ref: '#/components/schemas/article_content';
        };
        sr: {
          description: 'The content of the article in Serbian';
          $ref: '#/components/schemas/article_content';
        };
        sv: {
          description: 'The content of the article in Swedish';
          $ref: '#/components/schemas/article_content';
        };
        tr: {
          description: 'The content of the article in Turkish';
          $ref: '#/components/schemas/article_content';
        };
        vi: {
          description: 'The content of the article in Vietnamese';
          $ref: '#/components/schemas/article_content';
        };
        'pt-BR': {
          description: 'The content of the article in Portuguese (Brazil)';
          $ref: '#/components/schemas/article_content';
        };
        'zh-CN': {
          description: 'The content of the article in Chinese (China)';
          $ref: '#/components/schemas/article_content';
        };
        'zh-TW': {
          description: 'The content of the article in Chinese (Taiwan)';
          $ref: '#/components/schemas/article_content';
        };
      };
    };
    assign_conversation_request: {
      title: 'Assign Conversation Request';
      type: 'object';
      description: 'Payload of the request to assign a conversation';
      properties: {
        message_type: {
          type: 'string';
          enum: ['assignment'];
          example: 'assignment';
        };
        type: {
          type: 'string';
          enum: ['admin', 'team'];
          example: 'admin';
        };
        admin_id: {
          type: 'string';
          description: 'The id of the admin who is performing the action.';
          example: '12345';
        };
        assignee_id: {
          type: 'string';
          description: 'The `id` of the `admin` or `team` which will be assigned the conversation. A conversation can be assigned both an admin and a team.\\nSet `0` if you want this assign to no admin or team (ie. Unassigned).';
          example: '4324241';
        };
        body: {
          type: 'string';
          description: 'Optionally you can send a response in the conversation when it is assigned.';
          example: 'Let me pass you over to one of my colleagues.';
        };
      };
      required: ['message_type', 'type', 'admin_id', 'assignee_id'];
    };
    attach_contact_to_conversation_request: {
      title: 'Assign Conversation Request';
      type: 'object';
      description: 'Payload of the request to assign a conversation';
      properties: {
        admin_id: {
          type: 'string';
          description: 'The `id` of the admin who is adding the new participant.';
          example: '12345';
        };
        customer: {
          type: 'object';
          oneOf: [
            {
              title: 'Intercom User ID';
              properties: {
                intercom_user_id: {
                  type: 'string';
                  description: 'The identifier for the contact as given by Intercom.';
                  example: '6329bd9ffe4e2e91dac76188';
                };
                customer: {
                  $ref: '#/components/schemas/customer_request';
                };
              };
              required: ['intercom_user_id'];
            },
            {
              title: 'User ID';
              properties: {
                user_id: {
                  type: 'string';
                  description: 'The external_id you have defined for the contact who is being added as a participant.';
                  example: '6329bd9ffe4e2e91dac76188';
                };
                customer: {
                  $ref: '#/components/schemas/customer_request';
                };
              };
              required: ['user_id'];
            },
            {
              title: 'Email';
              properties: {
                email: {
                  type: 'string';
                  description: 'The email you have defined for the contact who is being added as a participant.';
                  example: 'winstonsmith@truth.org';
                };
                customer: {
                  $ref: '#/components/schemas/customer_request';
                };
              };
              required: ['email'];
            },
          ];
        };
      };
    };
    close_conversation_request: {
      title: 'Close Conversation Request';
      type: 'object';
      description: 'Payload of the request to close a conversation';
      properties: {
        message_type: {
          type: 'string';
          enum: ['close'];
          example: 'close';
        };
        type: {
          type: 'string';
          enum: ['admin'];
          example: 'admin';
        };
        admin_id: {
          type: 'string';
          description: 'The id of the admin who is performing the action.';
          example: '12345';
        };
        body: {
          type: 'string';
          description: 'Optionally you can leave a message in the conversation to provide additional context to the user and other teammates.';
          example: ' This conversation is now closed!';
        };
      };
      required: ['message_type', 'type', 'admin_id'];
    };
    collection: {
      title: 'Collection';
      type: 'object';
      'x-tags': ['Help Center'];
      description: 'Collections are top level containers for Articles within the Help Center.';
      properties: {
        id: {
          type: 'string';
          description: 'The unique identifier for the collection which is given by Intercom.';
          example: '6871119';
        };
        workspace_id: {
          type: 'string';
          description: 'The id of the workspace which the collection belongs to.';
          example: 'hfi1bx4l';
        };
        name: {
          type: 'string';
          description: "The name of the collection. For multilingual collections, this will be the name of the default language's content.";
          example: 'Default language name';
        };
        description: {
          type: 'string';
          nullable: true;
          description: 'The description of the collection. For multilingual help centers, this will be the description of the collection for the default language.';
          example: 'Default language description';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: "The time when the article was created (seconds). For multilingual articles, this will be the timestamp of creation of the default language's content.";
          example: 1672928359;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: "The time when the article was last updated (seconds). For multilingual articles, this will be the timestamp of last update of the default language's content.";
          example: 1672928610;
        };
        url: {
          type: 'string';
          nullable: true;
          description: 'The URL of the collection. For multilingual help centers, this will be the URL of the collection for the default language.';
          example: 'http://intercom.test/help/collection/name';
        };
        icon: {
          type: 'string';
          nullable: true;
          description: 'The icon of the collection.';
          example: 'book-bookmark';
        };
        order: {
          type: 'integer';
          description: "The order of the section in relation to others sections within a collection. Values go from `0` upwards. `0` is the default if there's no order.";
          example: '1';
        };
        default_locale: {
          type: 'string';
          description: 'The default locale of the help center. This field is only returned for multilingual help centers.';
          example: 'en';
        };
        translated_content: {
          nullable: true;
          $ref: '#/components/schemas/group_translated_content';
        };
        help_center_id: {
          type: 'integer';
          nullable: true;
          description: 'The id of the help center the collection is in.';
          example: '123';
        };
        type: {
          type: 'string';
          description: 'The type of object - `collection`.';
          enum: ['collection'];
          default: 'collection';
          example: 'collection';
        };
      };
    };
    collection_list: {
      title: 'Collections';
      type: 'object';
      description: 'This will return a list of Collections for the App.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object - `list`.';
          enum: ['list'];
          example: 'list';
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
        total_count: {
          type: 'integer';
          description: 'A count of the total number of collections.';
          example: 1;
        };
        data: {
          type: 'array';
          description: 'An array of collection objects';
          items: {
            $ref: '#/components/schemas/collection';
          };
        };
      };
    };
    company: {
      title: 'Company';
      type: 'object';
      'x-tags': ['Companies'];
      description: 'Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies.';
      properties: {
        type: {
          type: 'string';
          description: 'Value is `company`';
          enum: ['company'];
          example: 'company';
        };
        id: {
          type: 'string';
          description: 'The Intercom defined id representing the company.';
          example: '531ee472cce572a6ec000006';
        };
        name: {
          type: 'string';
          description: 'The name of the company.';
          example: 'Blue Sun';
        };
        app_id: {
          type: 'string';
          description: 'The Intercom defined code of the workspace the company is associated to.';
          example: 'ecahpwf5';
        };
        plan: {
          type: 'object';
          properties: {
            type: {
              type: 'string';
              description: 'Value is always "plan"';
              example: 'plan';
            };
            id: {
              type: 'string';
              description: 'The id of the plan';
              example: '269315';
            };
            name: {
              type: 'string';
              description: 'The name of the plan';
              example: 'Pro';
            };
          };
        };
        company_id: {
          type: 'string';
          description: 'The company id you have defined for the company.';
          example: '6';
        };
        remote_created_at: {
          type: 'integer';
          description: 'The time the company was created by you.';
          example: 1663597223;
        };
        created_at: {
          type: 'integer';
          description: 'The time the company was added in Intercom.';
          example: 1663597223;
        };
        updated_at: {
          type: 'integer';
          description: 'The last time the company was updated.';
          example: 1663597223;
        };
        last_request_at: {
          type: 'integer';
          description: 'The time the company last recorded making a request.';
          example: 1663597223;
        };
        size: {
          type: 'integer';
          description: 'The number of employees in the company.';
          example: 100;
        };
        website: {
          type: 'string';
          description: 'The URL for the company website.';
          example: 'https://www.intercom.com';
        };
        industry: {
          type: 'string';
          description: 'The industry that the company operates in.';
          example: 'Software';
        };
        monthly_spend: {
          type: 'integer';
          description: 'How much revenue the company generates for your business.';
          example: 100;
        };
        session_count: {
          type: 'integer';
          description: 'How many sessions the company has recorded.';
          example: 100;
        };
        user_count: {
          type: 'integer';
          description: 'The number of users in the company.';
          example: 100;
        };
        custom_attributes: {
          type: 'object';
          description: 'The custom attributes you have set on the company.';
          additionalProperties: {
            type: 'string';
          };
          example: {
            paid_subscriber: true;
            monthly_spend: 155.5;
            team_mates: 9;
          };
        };
        tags: {
          type: 'object';
          description: 'The list of tags associated with the company';
          properties: {
            type: {
              type: 'string';
              description: 'The type of the object';
              enum: ['tag.list'];
            };
            tags: {
              type: 'array';
              items: {
                items: {
                  $ref: '#/components/schemas/tag';
                };
              };
            };
          };
        };
        segments: {
          type: 'object';
          description: 'The list of segments associated with the company';
          properties: {
            type: {
              type: 'string';
              description: 'The type of the object';
              enum: ['segment.list'];
            };
            segments: {
              type: 'array';
              items: {
                $ref: '#/components/schemas/segment';
              };
            };
          };
        };
      };
    };
    company_attached_contacts: {
      title: 'Company Attached Contacts';
      type: 'object';
      description: 'A list of Contact Objects';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - `list`';
          enum: ['list'];
          example: 'list';
        };
        data: {
          type: 'array';
          description: 'An array containing Contact Objects';
          items: {
            $ref: '#/components/schemas/contact';
          };
        };
        total_count: {
          type: 'integer';
          description: 'The total number of contacts';
          example: 100;
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
      };
    };
    company_attached_segments: {
      title: 'Company Attached Segments';
      type: 'object';
      description: 'A list of Segment Objects';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - `list`';
          enum: ['list'];
          example: 'list';
        };
        data: {
          type: 'array';
          description: 'An array containing Segment Objects';
          items: {
            $ref: '#/components/schemas/segment';
          };
        };
      };
    };
    company_list: {
      title: 'Companies';
      type: 'object';
      description: 'This will return a list of companies for the App.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - `list`.';
          enum: ['list'];
          example: 'list';
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
        total_count: {
          type: 'integer';
          description: 'The total number of companies.';
          example: 100;
        };
        data: {
          type: 'array';
          description: 'An array containing Company Objects.';
          items: {
            $ref: '#/components/schemas/company';
          };
        };
      };
    };
    company_scroll: {
      title: 'Company Scroll';
      type: 'object';
      description: 'Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - `list`';
          enum: ['list'];
          example: 'list';
        };
        data: {
          type: 'array';
          items: {
            $ref: '#/components/schemas/company';
          };
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
        total_count: {
          type: 'integer';
          description: 'The total number of companies';
          nullable: true;
          example: 100;
        };
        scroll_param: {
          type: 'string';
          description: 'The scroll parameter to use in the next request to fetch the next page of results.';
          example: '25b649f7-4d33-4ef6-88f5-60e5b8244309';
        };
      };
    };
    contact: {
      title: 'Contact';
      type: 'object';
      'x-tags': ['Contacts'];
      description: 'Contact are the objects that represent your leads and users in Intercom.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object.';
          example: 'contact';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the contact which is given by Intercom.';
          example: '5ba682d23d7cf92bef87bfd4';
        };
        external_id: {
          type: 'string';
          nullable: true;
          description: 'The unique identifier for the contact which is provided by the Client.';
          example: 'f3b87a2e09d514c6c2e79b9a';
        };
        workspace_id: {
          type: 'string';
          description: 'The id of the workspace which the contact belongs to.';
          example: 'ecahpwf5';
        };
        role: {
          type: 'string';
          description: 'The role of the contact.';
          example: 'user';
        };
        email: {
          type: 'string';
          description: "The contact's email.";
          example: 'joe@example.com';
        };
        email_domain: {
          type: 'string';
          description: "The contact's email domain.";
          example: 'example.com';
        };
        phone: {
          type: 'string';
          nullable: true;
          description: 'The contacts phone.';
          example: '+1123456789';
        };
        formatted_phone: {
          type: 'string';
          nullable: true;
          description: 'The contacts phone number normalized to the E164 format';
          example: '+1123456789';
        };
        name: {
          type: 'string';
          nullable: true;
          description: 'The contacts name.';
          example: 'John Doe';
        };
        owner_id: {
          type: 'integer';
          nullable: true;
          description: 'The id of an admin that has been assigned account ownership of the contact.';
          example: 123;
        };
        has_hard_bounced: {
          type: 'boolean';
          description: 'Whether the contact has had an email sent to them hard bounce.';
          example: true;
        };
        marked_email_as_spam: {
          type: 'boolean';
          description: 'Whether the contact has marked an email sent to them as spam.';
          example: true;
        };
        unsubscribed_from_emails: {
          type: 'boolean';
          description: 'Whether the contact is unsubscribed from emails.';
          example: true;
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: '(UNIX timestamp) The time when the contact was created.';
          example: 1571672154;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: '(UNIX timestamp) The time when the contact was last updated.';
          example: 1571672154;
        };
        signed_up_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: '(UNIX timestamp) The time specified for when a contact signed up.';
          example: 1571672154;
        };
        last_seen_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: '(UNIX timestamp) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually).';
          example: 1571672154;
        };
        last_replied_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: '(UNIX timestamp) The time when the contact last messaged in.';
          example: 1571672154;
        };
        last_contacted_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: '(UNIX timestamp) The time when the contact was last messaged.';
          example: 1571672154;
        };
        last_email_opened_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: '(UNIX timestamp) The time when the contact last opened an email.';
          example: 1571672154;
        };
        last_email_clicked_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: '(UNIX timestamp) The time when the contact last clicked a link in an email.';
          example: 1571672154;
        };
        language_override: {
          type: 'string';
          nullable: true;
          description: 'A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change.';
          example: 'en';
        };
        browser: {
          type: 'string';
          nullable: true;
          description: 'The name of the browser which the contact is using.';
          example: 'Chrome';
        };
        browser_version: {
          type: 'string';
          nullable: true;
          description: 'The version of the browser which the contact is using.';
          example: '80.0.3987.132';
        };
        browser_language: {
          type: 'string';
          nullable: true;
          description: 'The language set by the browser which the contact is using.';
          example: 'en-US';
        };
        os: {
          type: 'string';
          nullable: true;
          description: 'The operating system which the contact is using.';
          example: 'Mac OS X';
        };
        android_app_name: {
          type: 'string';
          nullable: true;
          description: 'The name of the Android app which the contact is using.';
          example: 'Intercom';
        };
        android_app_version: {
          type: 'string';
          nullable: true;
          description: 'The version of the Android app which the contact is using.';
          example: '5.0.0';
        };
        android_device: {
          type: 'string';
          nullable: true;
          description: 'The Android device which the contact is using.';
          example: 'Pixel 3';
        };
        android_os_version: {
          type: 'string';
          nullable: true;
          description: 'The version of the Android OS which the contact is using.';
          example: '10';
        };
        android_sdk_version: {
          type: 'string';
          nullable: true;
          description: 'The version of the Android SDK which the contact is using.';
          example: '28';
        };
        android_last_seen_at: {
          type: 'integer';
          nullable: true;
          format: 'date-time';
          description: '(UNIX timestamp) The time when the contact was last seen on an Android device.';
          example: 1571672154;
        };
        ios_app_name: {
          type: 'string';
          nullable: true;
          description: 'The name of the iOS app which the contact is using.';
          example: 'Intercom';
        };
        ios_app_version: {
          type: 'string';
          nullable: true;
          description: 'The version of the iOS app which the contact is using.';
          example: '5.0.0';
        };
        ios_device: {
          type: 'string';
          nullable: true;
          description: 'The iOS device which the contact is using.';
          example: 'iPhone 11';
        };
        ios_os_version: {
          type: 'string';
          nullable: true;
          description: 'The version of iOS which the contact is using.';
          example: '13.3.1';
        };
        ios_sdk_version: {
          type: 'string';
          nullable: true;
          description: 'The version of the iOS SDK which the contact is using.';
          example: '13.3.1';
        };
        ios_last_seen_at: {
          type: 'integer';
          nullable: true;
          format: 'date-time';
          description: '(UNIX timestamp) The last time the contact used the iOS app.';
          example: 1571672154;
        };
        custom_attributes: {
          type: 'object';
          description: 'The custom attributes which are set for the contact.';
        };
        avatar: {
          type: 'object';
          nullable: true;
          properties: {
            type: {
              type: 'string';
              description: 'The type of object';
              example: 'avatar';
            };
            image_url: {
              type: 'string';
              format: 'uri';
              nullable: true;
              description: 'An image URL containing the avatar of a contact.';
              example: 'https://example.org/128Wash.jpg';
            };
          };
        };
        tags: {
          $ref: '#/components/schemas/contact_tags';
        };
        notes: {
          $ref: '#/components/schemas/contact_notes';
        };
        companies: {
          $ref: '#/components/schemas/contact_companies';
        };
        location: {
          $ref: '#/components/schemas/contact_location';
        };
        social_profiles: {
          $ref: '#/components/schemas/contact_social_profiles';
        };
      };
    };
    contact_archived: {
      title: 'Contact Archived';
      type: 'object';
      description: 'archived contact object';
      properties: {
        type: {
          type: 'string';
          description: 'always contact';
          enum: ['contact'];
          example: 'contact';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the contact which is given by Intercom.';
          example: '5ba682d23d7cf92bef87bfd4';
        };
        external_id: {
          type: 'string';
          nullable: true;
          description: 'The unique identifier for the contact which is provided by the Client.';
          example: 'f3b87a2e09d514c6c2e79b9a';
        };
        archived: {
          type: 'boolean';
          description: 'Whether the contact is archived or not.';
          example: true;
        };
      };
    };
    contact_attached_companies: {
      title: 'Contact Attached Companies';
      type: 'object';
      description: 'A list of Company Objects';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object';
          enum: ['list'];
          example: 'list';
        };
        companies: {
          type: 'array';
          description: 'An array containing Company Objects';
          items: {
            $ref: '#/components/schemas/company';
          };
        };
        total_count: {
          type: 'integer';
          description: 'The total number of companies associated to this contact';
          example: 100;
        };
        pages: {
          $ref: '#/components/schemas/pages_link';
        };
      };
    };
    contact_companies: {
      title: 'Contact companies';
      type: 'object';
      nullable: false;
      description: 'An object containing companies meta data about the companies that a contact has. Up to 10 will be displayed here. Use the url to get more.';
      properties: {
        url: {
          type: 'string';
          format: 'uri';
          description: 'Url to get more company resources for this contact';
          example: '/contacts/5ba682d23d7cf92bef87bfd4/companies';
        };
        total_count: {
          type: 'integer';
          description: 'Int representing the total number of companyies attached to this contact';
          example: 100;
        };
        has_more: {
          type: 'boolean';
          description: "Whether there's more Addressable Objects to be viewed. If true, use the url to view all";
          example: true;
        };
      };
    };
    contact_deleted: {
      title: 'Contact Deleted';
      type: 'object';
      description: 'deleted contact object';
      properties: {
        type: {
          type: 'string';
          description: 'always contact';
          enum: ['contact'];
          example: 'contact';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the contact which is given by Intercom.';
          example: '5ba682d23d7cf92bef87bfd4';
        };
        external_id: {
          type: 'string';
          nullable: true;
          description: 'The unique identifier for the contact which is provided by the Client.';
          example: 'f3b87a2e09d514c6c2e79b9a';
        };
        deleted: {
          type: 'boolean';
          description: 'Whether the contact is deleted or not.';
          example: true;
        };
      };
    };
    contact_list: {
      title: 'Contact List';
      type: 'object';
      description: 'Contacts are your users in Intercom.';
      properties: {
        type: {
          type: 'string';
          description: 'Always list';
          enum: ['list'];
          example: 'list';
        };
        data: {
          type: 'array';
          description: 'The list of contact objects';
          items: {
            $ref: '#/components/schemas/contact';
          };
        };
        total_count: {
          type: 'integer';
          description: 'A count of the total number of objects.';
          example: 100;
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
      };
    };
    contact_location: {
      title: 'Contact Location';
      type: 'object';
      nullable: false;
      description: 'An object containing location meta data about a Intercom contact.';
      properties: {
        type: {
          type: 'string';
          nullable: true;
          description: 'Always location';
          example: 'location';
        };
        country: {
          type: 'string';
          nullable: true;
          description: 'The country that the contact is located in';
          example: 'Ireland';
        };
        region: {
          type: 'string';
          nullable: true;
          description: 'The overal region that the contact is located in';
          example: 'Dublin';
        };
        city: {
          type: 'string';
          nullable: true;
          description: 'The city that the contact is located in';
          example: 'Dublin';
        };
      };
    };
    contact_notes: {
      title: 'Contact notes';
      type: 'object';
      nullable: false;
      description: 'An object containing notes meta data about the notes that a contact has. Up to 10 will be displayed here. Use the url to get more.';
      properties: {
        data: {
          type: 'array';
          description: 'This object represents the notes attached to a contact.';
          items: {
            $ref: '#/components/schemas/addressable_list';
          };
        };
        url: {
          type: 'string';
          format: 'uri';
          description: 'Url to get more company resources for this contact';
          example: '/contacts/5ba682d23d7cf92bef87bfd4/notes';
        };
        total_count: {
          type: 'integer';
          description: 'Int representing the total number of companyies attached to this contact';
          example: 100;
        };
        has_more: {
          type: 'boolean';
          description: "Whether there's more Addressable Objects to be viewed. If true, use the url to view all";
          example: true;
        };
      };
    };
    contact_reference: {
      title: 'Contact Reference';
      type: 'object';
      description: 'reference to contact object';
      properties: {
        type: {
          type: 'string';
          description: 'always contact';
          enum: ['contact'];
          example: 'contact';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the contact which is given by Intercom.';
          example: '5ba682d23d7cf92bef87bfd4';
        };
        external_id: {
          type: 'string';
          nullable: true;
          description: 'The unique identifier for the contact which is provided by the Client.';
          example: 'f3b87a2e09d514c6c2e79b9a';
        };
      };
    };
    contact_reply_base_request: {
      title: 'Contact Reply Base Object';
      type: 'object';
      properties: {
        message_type: {
          type: 'string';
          enum: ['comment'];
        };
        type: {
          type: 'string';
          enum: ['user'];
        };
        body: {
          type: 'string';
          description: 'The text body of the comment.';
        };
        attachment_urls: {
          title: 'Attachment URLs';
          type: 'array';
          description: 'A list of image URLs that will be added as attachments. You can include up to 10 URLs.';
          items: {
            type: 'string';
            format: 'uri';
          };
          maxItems: 10;
        };
      };
      required: ['message_type', 'type', 'body'];
    };
    contact_reply_conversation_request: {
      title: 'Contact Reply';
      oneOf: [
        {
          $ref: '#/components/schemas/contact_reply_intercom_user_id_request';
        },
        {
          $ref: '#/components/schemas/contact_reply_email_request';
        },
        {
          $ref: '#/components/schemas/contact_reply_user_id_request';
        },
      ];
    };
    contact_reply_email_request: {
      title: 'Email';
      type: 'object';
      description: 'Payload of the request to reply on behalf of a contact using their `email`';
      properties: {
        email: {
          type: 'string';
          description: 'The email you have defined for the user.';
        };
        attachment_files: {
          type: 'array';
          description: 'A list of files that will be added as attachments.';
          items: {
            $ref: '#/components/schemas/conversation_attachment_files';
          };
        };
      };
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request';
        },
      ];
      required: ['email'];
    };
    contact_reply_intercom_user_id_request: {
      title: 'Intercom User ID';
      type: 'object';
      description: 'Payload of the request to reply on behalf of a contact using their `intercom_user_id`';
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request';
        },
      ];
      properties: {
        intercom_user_id: {
          type: 'string';
          description: 'The identifier for the contact as given by Intercom.';
        };
        attachment_files: {
          type: 'array';
          description: 'A list of files that will be added as attachments.';
          items: {
            $ref: '#/components/schemas/conversation_attachment_files';
          };
        };
      };
      required: ['intercom_user_id'];
    };
    contact_reply_ticket_email_request: {
      title: 'Email';
      type: 'object';
      description: 'Payload of the request to reply on behalf of a contact using their `email`';
      properties: {
        email: {
          type: 'string';
          description: 'The email you have defined for the user.';
        };
      };
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request';
        },
      ];
      required: ['email'];
    };
    contact_reply_ticket_intercom_user_id_request: {
      title: 'Intercom User ID';
      type: 'object';
      description: 'Payload of the request to reply on behalf of a contact using their `intercom_user_id`';
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request';
        },
      ];
      properties: {
        intercom_user_id: {
          type: 'string';
          description: 'The identifier for the contact as given by Intercom.';
        };
      };
      required: ['intercom_user_id'];
    };
    contact_reply_ticket_user_id_request: {
      title: 'User ID';
      type: 'object';
      description: 'Payload of the request to reply on behalf of a contact using their `user_id`';
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request';
        },
      ];
      properties: {
        user_id: {
          type: 'string';
          description: 'The external_id you have defined for the contact.';
        };
      };
      required: ['user_id'];
    };
    contact_reply_user_id_request: {
      title: 'User ID';
      type: 'object';
      description: 'Payload of the request to reply on behalf of a contact using their `user_id`';
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request';
        },
      ];
      properties: {
        user_id: {
          type: 'string';
          description: 'The external_id you have defined for the contact.';
        };
        attachment_files: {
          type: 'array';
          description: 'A list of files that will be added as attachments. You can include up to 10 files.';
          items: {
            $ref: '#/components/schemas/conversation_attachment_files';
          };
          maxItems: 10;
        };
      };
      required: ['user_id'];
    };
    contact_segments: {
      title: 'Segments';
      type: 'object';
      description: 'A list of segments objects attached to a specific contact.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['list'];
          example: 'list';
        };
        data: {
          type: 'array';
          description: 'Segment objects associated with the contact.';
          items: {
            $ref: '#/components/schemas/segment';
          };
        };
      };
    };
    contact_social_profiles: {
      title: 'Social Profile';
      type: 'object';
      nullable: false;
      description: 'An object containing social profiles that a contact has.';
      properties: {
        data: {
          type: 'array';
          description: 'A list of social profiles objects associated with the contact.';
          items: {
            $ref: '#/components/schemas/social_profile';
          };
        };
      };
    };
    contact_subscription_types: {
      title: 'Contact Subscription Types';
      type: 'object';
      nullable: false;
      description: 'An object containing Subscription Types meta data about the SubscriptionTypes that a contact has.';
      properties: {
        data: {
          type: 'array';
          description: 'This object represents the subscriptions attached to a contact.';
          items: {
            $ref: '#/components/schemas/addressable_list';
          };
        };
        url: {
          type: 'string';
          format: 'uri';
          description: 'Url to get more subscription type resources for this contact';
          example: '/contacts/5ba682d23d7cf92bef87bfd4/subscriptions';
        };
        total_count: {
          type: 'integer';
          description: 'Int representing the total number of subscription types attached to this contact';
          example: 100;
        };
        has_more: {
          type: 'boolean';
          description: "Whether there's more Addressable Objects to be viewed. If true, use the url to view all";
          example: true;
        };
      };
    };
    contact_tags: {
      title: 'Contact Tags';
      type: 'object';
      nullable: true;
      description: 'An object containing tags meta data about the tags that a contact has. Up to 10 will be displayed here. Use the url to get more.';
      properties: {
        data: {
          type: 'array';
          description: 'This object represents the tags attached to a contact.';
          items: {
            $ref: '#/components/schemas/addressable_list';
          };
        };
        url: {
          type: 'string';
          format: 'uri';
          description: 'url to get more tag resources for this contact';
          example: '/contacts/5ba682d23d7cf92bef87bfd4/tags';
        };
        total_count: {
          type: 'integer';
          description: 'Int representing the total number of tags attached to this contact';
          example: 100;
        };
        has_more: {
          type: 'boolean';
          description: "Whether there's more Addressable Objects to be viewed. If true, use the url to view all";
          example: true;
        };
      };
    };
    contact_unarchived: {
      title: 'Contact Unarchived';
      type: 'object';
      description: 'unarchived contact object';
      properties: {
        type: {
          type: 'string';
          description: 'always contact';
          enum: ['contact'];
          example: 'contact';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the contact which is given by Intercom.';
          example: '5ba682d23d7cf92bef87bfd4';
        };
        external_id: {
          type: 'string';
          nullable: true;
          description: 'The unique identifier for the contact which is provided by the Client.';
          example: 'f3b87a2e09d514c6c2e79b9a';
        };
        archived: {
          type: 'boolean';
          description: 'Whether the contact is archived or not.';
          example: false;
        };
      };
    };
    conversation: {
      title: 'Conversation';
      type: 'object';
      'x-tags': ['Conversations'];
      description: 'Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact.';
      properties: {
        type: {
          type: 'string';
          description: 'Always conversation.';
          example: 'conversation';
        };
        id: {
          type: 'string';
          description: 'The id representing the conversation.';
          example: '1295';
        };
        title: {
          type: 'string';
          nullable: true;
          description: 'The title given to the conversation.';
          example: 'Conversation Title';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the conversation was created.';
          example: 1663597223;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The last time the conversation was updated.';
          example: 1663597260;
        };
        waiting_since: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: 'The last time a Contact responded to an Admin. In other words, the time a customer started waiting for a response. Set to null if last reply is from an Admin.';
          example: 1663597260;
        };
        snoozed_until: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: 'If set this is the time in the future when this conversation will be marked as open. i.e. it will be in a snoozed state until this time. i.e. it will be in a snoozed state until this time.';
          example: 1663597260;
        };
        open: {
          type: 'boolean';
          description: 'Indicates whether a conversation is open (true) or closed (false).';
          example: true;
        };
        state: {
          type: 'string';
          enum: ['open', 'closed', 'snoozed'];
          description: 'Can be set to "open", "closed" or "snoozed".';
          example: 'open';
        };
        read: {
          type: 'boolean';
          description: 'Indicates whether a conversation has been read.';
          example: true;
        };
        priority: {
          type: 'string';
          enum: ['priority', 'not_priority'];
          description: 'If marked as priority, it will return priority or else not_priority.';
          example: 'priority';
        };
        admin_assignee_id: {
          type: 'integer';
          nullable: true;
          description: "The id of the admin assigned to the conversation. If it's not assigned to an admin it will return null.";
          example: 0;
        };
        team_assignee_id: {
          type: 'string';
          nullable: true;
          description: "The id of the team assigned to the conversation. If it's not assigned to a team it will return null.";
          example: '5017691';
        };
        tags: {
          $ref: '#/components/schemas/tags';
        };
        conversation_rating: {
          $ref: '#/components/schemas/conversation_rating';
        };
        source: {
          $ref: '#/components/schemas/conversation_source';
        };
        contacts: {
          $ref: '#/components/schemas/conversation_contacts';
        };
        teammates: {
          $ref: '#/components/schemas/conversation_teammates';
        };
        custom_attributes: {
          $ref: '#/components/schemas/custom_attributes';
        };
        first_contact_reply: {
          $ref: '#/components/schemas/conversation_first_contact_reply';
        };
        sla_applied: {
          $ref: '#/components/schemas/sla_applied';
        };
        statistics: {
          $ref: '#/components/schemas/conversation_statistics';
        };
        conversation_parts: {
          $ref: '#/components/schemas/conversation_parts';
        };
      };
    };
    conversation_attachment_files: {
      title: 'Conversation attachment files';
      type: 'object';
      description: 'Properties of the attachment files in a conversation part';
      properties: {
        content_type: {
          type: 'string';
          description: 'The content type of the file';
          example: 'application/json';
        };
        data: {
          type: 'string';
          description: 'The base64 encoded file data.';
          example: 'ewogICJ0ZXN0IjogMQp9';
        };
        name: {
          type: 'string';
          description: 'The name of the file.';
          example: 'test.json';
        };
      };
    };
    conversation_contacts: {
      title: 'Contacts';
      type: 'object';
      description: 'The list of contacts (users or leads) involved in this conversation. This will only contain one customer unless more were added via the group conversation feature.';
      properties: {
        type: {
          type: 'string';
          description: '';
          enum: ['contact.list'];
          example: 'contact.list';
        };
        contacts: {
          type: 'array';
          description: 'The list of contacts (users or leads) involved in this conversation. This will only contain one customer unless more were added via the group conversation feature.';
          items: {
            $ref: '#/components/schemas/contact_reference';
          };
        };
      };
    };
    conversation_first_contact_reply: {
      title: 'First contact reply';
      type: 'object';
      nullable: true;
      description: 'An object containing information on the first users message. For a contact initiated message this will represent the users original message.';
      properties: {
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: '';
          example: 1663597223;
        };
        type: {
          type: 'string';
          description: '';
          example: 'conversation';
        };
        url: {
          type: 'string';
          nullable: true;
          description: '';
          example: 'https://developers.intercom.com/';
        };
      };
    };
    conversation_list: {
      title: 'Conversation List';
      type: 'object';
      description: 'Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact.';
      properties: {
        type: {
          type: 'string';
          description: 'Always conversation.list';
          enum: ['conversation.list'];
          example: 'conversation.list';
        };
        conversations: {
          type: 'array';
          description: 'The list of conversation objects';
          items: {
            $ref: '#/components/schemas/conversation';
          };
        };
        total_count: {
          type: 'integer';
          description: 'A count of the total number of objects.';
          example: 12345;
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
      };
    };
    conversation_part: {
      title: 'Conversation Part';
      type: 'object';
      description: 'A Conversation Part represents a message in the conversation.';
      properties: {
        type: {
          type: 'string';
          description: 'Always conversation_part';
          example: 'conversation_part';
        };
        id: {
          type: 'string';
          description: 'The id representing the conversation part.';
          example: '3';
        };
        part_type: {
          type: 'string';
          description: 'The type of conversation part.';
          example: 'comment';
        };
        body: {
          type: 'string';
          nullable: true;
          description: 'The message body, which may contain HTML. For Twitter, this will show a generic message regarding why the body is obscured.';
          example: '<p>Okay!</p>';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the conversation part was created.';
          example: 1663597223;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The last time the conversation part was updated.';
          example: 1663597260;
        };
        notified_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the user was notified with the conversation part.';
          example: 1663597260;
        };
        assigned_to: {
          $ref: '#/components/schemas/reference';
          nullable: true;
          description: 'The id of the admin that was assigned the conversation by this conversation_part (null if there has been no change in assignment.)';
        };
        author: {
          $ref: '#/components/schemas/conversation_part_author';
        };
        attachments: {
          title: 'Conversation part attachments';
          type: 'array';
          description: 'A list of attachments for the part.';
          items: {
            $ref: '#/components/schemas/part_attachment';
          };
        };
        external_id: {
          type: 'string';
          nullable: true;
          description: 'The external id of the conversation part';
          example: 'abcd1234';
        };
        redacted: {
          type: 'boolean';
          description: 'Whether or not the conversation part has been redacted.';
          example: false;
        };
      };
    };
    conversation_part_author: {
      title: 'Conversation part author';
      type: 'object';
      description: 'The object who initiated the conversation, which can be a Contact, Admin or Team. Bots and campaigns send messages on behalf of Admins or Teams. For Twitter, this will be blank.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the author';
          example: 'admin';
        };
        id: {
          type: 'string';
          description: 'The id of the author';
          example: '274';
        };
        name: {
          type: 'string';
          description: 'The name of the author';
          example: 'Operator';
        };
        email: {
          type: 'string';
          format: 'email';
          description: 'The email of the author';
          example: 'operator+abcd1234@intercom.io';
        };
      };
    };
    conversation_parts: {
      title: 'Conversation Parts';
      type: 'object';
      description: 'A list of Conversation Part objects for each part message in the conversation. This is only returned when Retrieving a Conversation, and ignored when Listing all Conversations. There is a limit of 500 parts.';
      properties: {
        type: {
          type: 'string';
          description: '';
          enum: ['conversation_part.list'];
          example: 'conversation_part.list';
        };
        conversation_parts: {
          title: 'Conversation Parts';
          type: 'array';
          description: 'A list of Conversation Part objects for each part message in the conversation. This is only returned when Retrieving a Conversation, and ignored when Listing all Conversations. There is a limit of 500 parts.';
          items: {
            $ref: '#/components/schemas/conversation_part';
          };
        };
        total_count: {
          type: 'integer';
          description: '';
          example: 2;
        };
      };
    };
    conversation_rating: {
      title: 'Conversation Rating';
      type: 'object';
      nullable: true;
      description: 'The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation.';
      properties: {
        rating: {
          type: 'integer';
          description: 'The rating, between 1 and 5, for the conversation.';
          example: 5;
        };
        remark: {
          type: 'string';
          description: 'An optional field to add a remark to correspond to the number rating';
          example: '';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the rating was requested in the conversation being rated.';
          example: 1671028894;
        };
        contact: {
          $ref: '#/components/schemas/contact_reference';
        };
        teammate: {
          $ref: '#/components/schemas/reference';
        };
      };
    };
    conversation_source: {
      title: 'Conversation source';
      type: 'object';
      description: 'The Conversation Part that originated this conversation, which can be Contact, Admin, Campaign, Automated or Operator initiated.';
      properties: {
        type: {
          type: 'string';
          description: 'This includes conversation, email, facebook, instagram, phone_call, phone_switch, push, sms, twitter and whatsapp.';
          example: 'conversation';
        };
        id: {
          type: 'string';
          description: 'The id representing the message.';
          example: '3';
        };
        delivered_as: {
          type: 'string';
          description: "The conversation's initiation type. Possible values are customer_initiated, campaigns_initiated (legacy campaigns), operator_initiated (Custom bot), automated (Series and other outbounds with dynamic audience message) and admin_initiated (fixed audience message, ticket initiated by an admin, group email).";
          example: 'operator_initiated';
        };
        subject: {
          type: 'string';
          description: 'Optional. The message subject. For Twitter, this will show a generic message regarding why the subject is obscured.';
          example: '';
        };
        body: {
          type: 'string';
          description: 'The message body, which may contain HTML. For Twitter, this will show a generic message regarding why the body is obscured.';
          example: '<p>Hey there!</p>';
        };
        author: {
          $ref: '#/components/schemas/conversation_part_author';
        };
        attachments: {
          type: 'array';
          description: 'A list of attachments for the part.';
          items: {
            $ref: '#/components/schemas/part_attachment';
          };
        };
        url: {
          type: 'string';
          nullable: true;
          description: 'The URL where the conversation was started. For Twitter, Email, and Bots, this will be blank.';
          example: null;
        };
        redacted: {
          type: 'boolean';
          description: 'Whether or not the source message has been redacted. Only applicable for contact initiated messages.';
          example: false;
        };
      };
    };
    conversation_statistics: {
      title: 'Conversation statistics';
      type: 'object';
      nullable: true;
      description: 'A Statistics object containing all information required for reporting, with timestamps and calculated metrics.';
      properties: {
        type: {
          type: 'string';
          description: '';
          example: 'conversation_statistics';
        };
        time_to_assignment: {
          type: 'integer';
          description: 'Duration until last assignment before first admin reply. In seconds.';
          example: 2310;
        };
        time_to_admin_reply: {
          type: 'integer';
          description: 'Duration until first admin reply. Subtracts out of business hours. In seconds.';
          example: 2310;
        };
        time_to_first_close: {
          type: 'integer';
          description: 'Duration until conversation was closed first time. Subtracts out of business hours. In seconds.';
          example: 2310;
        };
        time_to_last_close: {
          type: 'integer';
          description: 'Duration until conversation was closed last time. Subtracts out of business hours. In seconds.';
          example: 2310;
        };
        median_time_to_reply: {
          type: 'integer';
          description: 'Median based on all admin replies after a contact reply. Subtracts out of business hours. In seconds.';
          example: 2310;
        };
        first_contact_reply_at: {
          type: 'integer';
          format: 'date-time';
          description: 'Time of first text conversation part from a contact.';
          example: 1663597233;
        };
        first_assignment_at: {
          type: 'integer';
          format: 'date-time';
          description: 'Time of first assignment after first_contact_reply_at.';
          example: 1663597233;
        };
        first_admin_reply_at: {
          type: 'integer';
          format: 'date-time';
          description: 'Time of first admin reply after first_contact_reply_at.';
          example: 1663597233;
        };
        first_close_at: {
          type: 'integer';
          format: 'date-time';
          description: 'Time of first close after first_contact_reply_at.';
          example: 1663597233;
        };
        last_assignment_at: {
          type: 'integer';
          format: 'date-time';
          description: 'Time of last assignment after first_contact_reply_at.';
          example: 1663597233;
        };
        last_assignment_admin_reply_at: {
          type: 'integer';
          format: 'date-time';
          description: 'Time of first admin reply since most recent assignment.';
          example: 1663597233;
        };
        last_contact_reply_at: {
          type: 'integer';
          format: 'date-time';
          description: 'Time of the last conversation part from a contact.';
          example: 1663597233;
        };
        last_admin_reply_at: {
          type: 'integer';
          format: 'date-time';
          description: 'Time of the last conversation part from an admin.';
          example: 1663597233;
        };
        last_close_at: {
          type: 'integer';
          format: 'date-time';
          description: 'Time of the last conversation close.';
          example: 1663597233;
        };
        last_closed_by_id: {
          type: 'string';
          description: 'The last admin who closed the conversation. Returns a reference to an Admin object.';
          example: 'c3po';
        };
        count_reopens: {
          type: 'integer';
          description: 'Number of reopens after first_contact_reply_at.';
          example: 1;
        };
        count_assignments: {
          type: 'integer';
          description: 'Number of assignments after first_contact_reply_at.';
          example: 1;
        };
        count_conversation_parts: {
          type: 'integer';
          description: 'Total number of conversation parts.';
          example: 1;
        };
      };
    };
    conversation_teammates: {
      title: 'Conversation teammates';
      type: 'object';
      nullable: true;
      description: 'The list of teammates who participated in the conversation (wrote at least one conversation part).';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object - `admin.list`.';
          example: 'admin.list';
        };
        teammates: {
          type: 'array';
          description: 'The list of teammates who participated in the conversation (wrote at least one conversation part).';
          items: {
            $ref: '#/components/schemas/reference';
          };
        };
      };
    };
    convert_visitor_request: {
      description: 'You can merge a Visitor to a Contact of role type lead or user.';
      type: 'object';
      title: 'Convert Visitor Request Payload';
      properties: {
        type: {
          type: 'string';
          description: 'Represents the role of the Contact model. Accepts `lead` or `user`.';
          example: 'user';
        };
        user: {
          type: 'object';
          description: 'The unique identifiers retained after converting or merging.';
          properties: {
            id: {
              type: 'string';
              description: 'The unique identifier for the contact which is given by Intercom.';
              example: '8a88a590-e1c3-41e2-a502-e0649dbf721c';
            };
            user_id: {
              type: 'string';
              description: 'A unique identifier for the contact which is given to Intercom, which will be represented as external_id.';
              example: '8a88a590-e1c3-41e2-a502-e0649dbf721c';
            };
            email: {
              type: 'string';
              description: "The contact's email, retained by default if one is present.";
              example: 'winstonsmith@truth.org';
            };
          };
          anyOf: [
            {
              required: ['id'];
            },
            {
              required: ['user_id'];
            },
          ];
        };
        visitor: {
          type: 'object';
          description: 'The unique identifiers to convert a single Visitor.';
          properties: {
            id: {
              type: 'string';
              description: 'The unique identifier for the contact which is given by Intercom.';
              example: '8a88a590-e1c3-41e2-a502-e0649dbf721c';
            };
            user_id: {
              type: 'string';
              description: 'A unique identifier for the contact which is given to Intercom.';
              example: '8a88a590-e1c3-41e2-a502-e0649dbf721c';
            };
            email: {
              type: 'string';
              description: "The visitor's email.";
              example: 'winstonsmith@truth.org';
            };
          };
          anyOf: [
            {
              required: ['id'];
            },
            {
              required: ['user_id'];
            },
            {
              required: ['email'];
            },
          ];
        };
      };
      required: ['type', 'user', 'visitor'];
    };
    create_article_request: {
      description: 'You can create an Article';
      type: 'object';
      title: 'Create Article Request Payload';
      nullable: true;
      properties: {
        title: {
          type: 'string';
          description: "The title of the article.For multilingual articles, this will be the title of the default language's content.";
          example: 'Thanks for everything';
        };
        description: {
          type: 'string';
          description: "The description of the article. For multilingual articles, this will be the description of the default language's content.";
          example: 'Description of the Article';
        };
        body: {
          type: 'string';
          description: "The content of the article. For multilingual articles, this will be the body of the default language's content.";
          example: '<p>This is the body in html</p>';
        };
        author_id: {
          type: 'integer';
          description: "The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace.";
          example: 1295;
        };
        state: {
          type: 'string';
          description: "Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content.";
          enum: ['published', 'draft'];
          example: 'draft';
        };
        parent_id: {
          type: 'integer';
          description: "The id of the article's parent collection or section. An article without this field stands alone.";
          example: 18;
        };
        parent_type: {
          type: 'string';
          description: 'The type of parent, which can either be a `collection` or `section`.';
          example: 'collection';
        };
        translated_content: {
          $ref: '#/components/schemas/article_translated_content';
        };
      };
      required: ['title', 'author_id'];
    };
    create_collection_request: {
      description: 'You can create a collection';
      type: 'object';
      title: 'Create Collection Request Payload';
      properties: {
        name: {
          type: 'string';
          description: "The name of the collection. For multilingual collections, this will be the name of the default language's content.";
          example: 'collection 51';
        };
        description: {
          type: 'string';
          description: "The description of the collection. For multilingual collections, this will be the description of the default language's content.";
          example: 'English description';
        };
        translated_content: {
          nullable: true;
          $ref: '#/components/schemas/group_translated_content';
        };
        help_center_id: {
          type: 'integer';
          nullable: true;
          description: 'The id of the help center where the collection will be created. If `null` then it will be created in the default help center.';
          example: '123';
        };
      };
      required: ['name'];
    };
    create_contact_request: {
      description: 'Payload to create a contact';
      type: 'object';
      title: 'Create Contact Request Payload';
      properties: {
        role: {
          type: 'string';
          description: 'The role of the contact.';
        };
        external_id: {
          type: 'string';
          description: 'A unique identifier for the contact which is given to Intercom';
        };
        email: {
          type: 'string';
          description: 'The contacts email';
          example: 'jdoe@example.com';
        };
        phone: {
          type: 'string';
          nullable: true;
          description: 'The contacts phone';
          example: '+353871234567';
        };
        name: {
          type: 'string';
          nullable: true;
          description: 'The contacts name';
          example: 'John Doe';
        };
        avatar: {
          type: 'string';
          nullable: true;
          description: 'An image URL containing the avatar of a contact';
          example: 'https://www.example.com/avatar_image.jpg';
        };
        signed_up_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: 'The time specified for when a contact signed up';
          example: 1571672154;
        };
        last_seen_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: 'The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually)';
          example: 1571672154;
        };
        owner_id: {
          type: 'integer';
          nullable: true;
          description: 'The id of an admin that has been assigned account ownership of the contact';
          example: 123;
        };
        unsubscribed_from_emails: {
          type: 'boolean';
          nullable: true;
          description: 'Whether the contact is unsubscribed from emails';
          example: true;
        };
        custom_attributes: {
          type: 'object';
          nullable: true;
          description: 'The custom attributes which are set for the contact';
        };
      };
      anyOf: [
        {
          required: ['email'];
          title: 'Create contact with email';
        },
        {
          required: ['external_id'];
          title: 'Create contact with external_id';
        },
        {
          required: ['role'];
          title: 'Create contact with role';
        },
      ];
    };
    create_conversation_request: {
      description: 'Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact.';
      type: 'object';
      title: 'Create Conversation Request Payload';
      properties: {
        from: {
          type: 'object';
          properties: {
            type: {
              type: 'string';
              enum: ['lead', 'user', 'contact'];
              description: 'The role associated to the contact - user or lead.';
              example: 'user';
            };
            id: {
              type: 'string';
              description: 'The identifier for the contact which is given by Intercom.';
              format: 'uuid';
              minLength: 24;
              maxLength: 24;
              example: '536e564f316c83104c000020';
            };
          };
          required: ['type', 'id'];
        };
        body: {
          type: 'string';
          description: 'The content of the message. HTML is not supported.';
          example: 'Hello';
        };
      };
      required: ['from', 'body'];
    };
    create_data_attribute_request: {
      description: '';
      type: 'object';
      title: 'Create Data Attribute Request';
      properties: {
        name: {
          type: 'string';
          description: 'The name of the data attribute.';
          example: 'My Data Attribute';
        };
        model: {
          type: 'string';
          description: 'The model that the data attribute belongs to.';
          enum: ['contact', 'company'];
          example: 'contact';
        };
        data_type: {
          type: 'string';
          description: 'The type of data stored for this attribute.';
          enum: ['string', 'integer', 'float', 'boolean', 'datetime', 'date'];
          example: 'string';
        };
        description: {
          type: 'string';
          description: 'The readable description you see in the UI for the attribute.';
          example: 'My Data Attribute Description';
        };
        options: {
          type: 'array';
          description: 'To create list attributes. Provide a set of hashes with `value` as the key of the options you want to make. `data_type` must be `string`.';
          items: {
            type: 'string';
          };
          example: ['option1', 'option2'];
        };
        messenger_writable: {
          type: 'boolean';
          description: 'Can this attribute be updated by the Messenger';
          example: false;
        };
      };
      required: ['name', 'model', 'data_type'];
    };
    create_data_event_request: {
      description: '';
      type: 'object';
      title: 'Create Data Event Request';
      properties: {
        event_name: {
          type: 'string';
          description: "The name of the event that occurred. This is presented to your App's admins when filtering and creating segments - a good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.";
          example: 'invited-friend';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the event occurred as a UTC Unix timestamp';
          example: 1671028894;
        };
        user_id: {
          type: 'string';
          description: 'Your identifier for the user.';
          example: '314159';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the contact (lead or user) which is given by Intercom.';
          example: '8a88a590-e1c3-41e2-a502-e0649dbf721c';
        };
        email: {
          type: 'string';
          description: 'An email address for your user. An email should only be used where your application uses email to uniquely identify users.';
          example: 'frodo.baggins@example.com';
        };
        metadata: {
          type: 'object';
          description: 'Optional metadata about the event.';
          additionalProperties: {
            type: 'string';
          };
          example: {
            invite_code: 'ADDAFRIEND';
          };
        };
      };
      anyOf: [
        {
          title: 'id required';
          required: ['event_name', 'created_at', 'id'];
        },
        {
          title: 'user_id required';
          required: ['event_name', 'created_at', 'user_id'];
        },
        {
          title: 'email required';
          required: ['event_name', 'created_at', 'email'];
        },
      ];
    };
    create_data_event_summaries_request: {
      description: 'You can send a list of event summaries for a user. Each event summary should contain the event name, the time the event occurred, and the number of times the event occurred. The event name should be a past tense "verb-noun" combination, to improve readability, for example `updated-plan`.';
      type: 'object';
      title: 'Create Data Event Summaries Request';
      properties: {
        user_id: {
          type: 'string';
          description: 'Your identifier for the user.';
          example: '314159';
        };
        event_summaries: {
          type: 'object';
          description: "A list of event summaries for the user. Each event summary should contain the event name, the time the event occurred, and the number of times the event occurred. The event name should be a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.";
          properties: {
            event_name: {
              type: 'string';
              description: "The name of the event that occurred. A good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.";
              example: 'invited-friend';
            };
            count: {
              type: 'integer';
              description: 'The number of times the event occurred.';
              example: 1;
            };
            first: {
              type: 'integer';
              format: 'date-time';
              description: 'The first time the event was sent';
              example: 1671028894;
            };
            last: {
              type: 'integer';
              format: 'date-time';
              description: 'The last time the event was sent';
              example: 1671028894;
            };
          };
        };
      };
    };
    create_data_exports_request: {
      description: 'Request for creating a data export';
      type: 'object';
      title: 'Create Data Export Request';
      properties: {
        created_at_after: {
          type: 'integer';
          description: 'The start date that you request data for. It must be formatted as a unix timestamp.';
          example: 1527811200;
        };
        created_at_before: {
          type: 'integer';
          description: 'The end date that you request data for. It must be formatted as a unix timestamp.';
          example: 1527811200;
        };
      };
      required: ['created_at_after', 'created_at_before'];
    };
    create_message_request: {
      description: 'You can create a message';
      type: 'object';
      title: 'Create Message Request Payload';
      nullable: true;
      properties: {
        message_type: {
          type: 'string';
          description: 'The kind of message being created. Values: `in_app` or `email`.';
          enum: ['in_app', 'email'];
          example: 'in_app';
        };
        subject: {
          type: 'string';
          description: 'The title of the email.';
          example: 'Thanks for everything';
        };
        body: {
          type: 'string';
          description: 'The content of the message. HTML and plaintext are supported.';
          example: 'Hello there';
        };
        template: {
          type: 'string';
          description: 'The style of the outgoing message. Possible values `plain` or `personal`.';
          example: 'plain';
        };
        from: {
          type: 'object';
          description: 'The sender of the message. If not provided, the default sender will be used.';
          properties: {
            type: {
              type: 'string';
              description: 'Always `admin`.';
              enum: ['admin'];
              example: 'admin';
            };
            id: {
              type: 'integer';
              description: 'The identifier for the admin which is given by Intercom.';
              example: 394051;
            };
          };
          required: ['type', 'id'];
        };
        to: {
          type: 'object';
          description: 'The sender of the message. If not provided, the default sender will be used.';
          properties: {
            type: {
              type: 'string';
              description: 'The role associated to the contact - `user` or `lead`.';
              enum: ['user', 'lead'];
              example: 'user';
            };
            id: {
              type: 'string';
              description: 'The identifier for the contact which is given by Intercom.';
              example: '536e564f316c83104c000020';
            };
          };
          required: ['type', 'id'];
        };
        create_conversation_without_contact_reply: {
          type: 'boolean';
          description: 'Whether a conversation should be opened in the inbox for the message without the contact replying. Defaults to false if not provided.';
          default: false;
          example: true;
        };
      };
      anyOf: [
        {
          title: 'message_type: `email`.';
          required: ['message_type', 'subject', 'body', 'template', 'from', 'to'];
        },
        {
          title: 'message_type: `inapp`.';
          required: ['message_type', 'body', 'from', 'to'];
        },
      ];
    };
    create_or_update_company_request: {
      type: 'object';
      title: 'Create Or Update Company Request Payload';
      description: 'You can create or update a Company';
      nullable: true;
      properties: {
        name: {
          type: 'string';
          description: 'The name of the Company';
          example: 'Intercom';
        };
        company_id: {
          type: 'string';
          description: "The company id you have defined for the company. Can't be updated";
          example: '625e90fc55ab113b6d92175f';
        };
        plan: {
          type: 'string';
          description: 'The name of the plan you have associated with the company.';
          example: 'Enterprise';
        };
        size: {
          type: 'integer';
          description: 'The number of employees in this company.';
          example: '100';
        };
        website: {
          type: 'string';
          description: "The URL for this company's website. Please note that the value specified here is not validated. Accepts any string.";
          example: 'https://www.example.com';
        };
        industry: {
          type: 'string';
          description: 'The industry that this company operates in.';
          example: 'Manufacturing';
        };
        custom_attributes: {
          type: 'object';
          description: 'A hash of key/value pairs containing any other data about the company you want Intercom to store.';
          additionalProperties: {
            type: 'string';
          };
          example: {
            paid_subscriber: true;
            monthly_spend: 155.5;
            team_mates: 9;
          };
        };
        remote_created_at: {
          type: 'integer';
          description: 'The time the company was created by you.';
          example: 1394531169;
        };
        monthly_spend: {
          type: 'integer';
          description: 'How much revenue the company generates for your business. Note that this will truncate floats. i.e. it only allow for whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647..';
          example: 1000;
        };
      };
    };
    create_or_update_tag_request: {
      description: 'You can create or update an existing tag.';
      type: 'object';
      title: 'Create or Update Tag Request Payload';
      properties: {
        name: {
          type: 'string';
          description: 'The name of the tag, which will be created if not found, or the new name for the tag if this is an update request. Names are case insensitive.';
          example: 'Independent';
        };
        id: {
          type: 'string';
          description: 'The id of tag to updates.';
          example: '656452352';
        };
      };
      required: ['name'];
    };
    create_phone_switch_request: {
      description: 'You can create an phone switch';
      type: 'object';
      title: 'Create Phone Switch Request Payload';
      nullable: true;
      properties: {
        phone: {
          type: 'string';
          description: 'Phone number in E.164 format, that will receive the SMS to continue the conversation in the Messenger.';
          example: '+1 1234567890';
        };
        custom_attributes: {
          $ref: '#/components/schemas/custom_attributes';
        };
      };
      required: ['phone'];
    };
    create_section_request: {
      description: 'You can create a Section';
      type: 'object';
      title: 'Create Section Request Payload';
      properties: {
        name: {
          type: 'string';
          description: "The name of the collection. For multilingual collections, this will be the name of the default language's content.";
          example: 'Section 51';
        };
        parent_id: {
          type: 'integer';
          description: 'The id for the collection this section will be within.';
          example: 18;
        };
        translated_content: {
          nullable: true;
          $ref: '#/components/schemas/group_translated_content';
        };
      };
      required: ['name', 'parent_id'];
    };
    create_ticket_reply_request: {
      title: 'Create Ticket Reply Request Payload';
      type: 'object';
      properties: {
        body: {
          type: 'string';
          description: 'The message body of the note, which may contain HTML.';
          example: '<p>Okay!</p>';
        };
        message_type: {
          type: 'string';
          description: 'The type of the reply. Only `note` is supported at the moment.';
          example: 'note';
          default: 'note';
        };
        admin_id: {
          type: 'string';
          description: 'The id of the admin who is making the note.';
          example: '1234';
        };
      };
      required: ['body', 'admin_id'];
    };
    create_ticket_request: {
      description: 'You can create a Ticket';
      type: 'object';
      title: 'Create Ticket Request Payload';
      properties: {
        ticket_type_id: {
          type: 'string';
          description: 'The ID of the type of ticket you want to create';
          example: '1234';
        };
        contacts: {
          type: 'array';
          description: 'The list of contacts (users or leads) affected by this ticket. Currently only one is allowed';
          items: {
            type: 'object';
            oneOf: [
              {
                title: 'ID';
                properties: {
                  id: {
                    type: 'string';
                    description: 'The identifier for the contact as given by Intercom.';
                  };
                };
                required: ['id'];
              },
              {
                title: 'External ID';
                properties: {
                  external_id: {
                    type: 'string';
                    description: 'The external_id you have defined for the contact who is being added as a participant.';
                  };
                };
                required: ['external_id'];
              },
              {
                title: 'Email';
                properties: {
                  email: {
                    type: 'string';
                    description: 'The email you have defined for the contact who is being added as a participant. If a contact with this email does not exist, one will be created.';
                  };
                };
                required: ['email'];
              },
            ];
          };
          example: [
            {
              id: '1234';
            },
          ];
        };
        company_id: {
          type: 'string';
          description: 'The ID of the company that the ticket is associated with. The ID that you set upon company creation.';
          example: '1234';
        };
        ticket_attributes: {
          $ref: '#/components/schemas/ticket_request_custom_attributes';
        };
      };
      required: ['ticket_type_id', 'contacts'];
    };
    create_ticket_type_attribute_request: {
      description: 'You can create a Ticket Type Attribute';
      type: 'object';
      title: 'Create Ticket Type Attribute Request Payload';
      properties: {
        name: {
          type: 'string';
          description: 'The name of the ticket type attribute';
          example: 'Bug Priority';
        };
        description: {
          type: 'string';
          description: 'The description of the attribute presented to the teammate or contact';
          example: 'Priority level of the bug';
        };
        data_type: {
          type: 'string';
          description: 'The data type of the attribute';
          enum: ['string', 'list', 'integer', 'decimal', 'boolean', 'datetime', 'files'];
          example: 'string';
        };
        required_to_create: {
          type: 'boolean';
          description: 'Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.';
          default: false;
          example: false;
        };
        required_to_create_for_contacts: {
          type: 'boolean';
          description: 'Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.';
          default: false;
          example: false;
        };
        visible_on_create: {
          type: 'boolean';
          description: 'Whether the attribute is visible to teammates when creating a ticket in Inbox.';
          default: true;
          example: true;
        };
        visible_to_contacts: {
          type: 'boolean';
          description: 'Whether the attribute is visible to contacts when creating a ticket in Messenger.';
          default: true;
          example: true;
        };
        multiline: {
          type: 'boolean';
          description: 'Whether the attribute allows multiple lines of text (only applicable to string attributes)';
          example: false;
        };
        list_items: {
          type: 'string';
          description: 'A comma delimited list of items for the attribute value (only applicable to list attributes)';
          example: 'Low Priority,Medium Priority,High Priority';
        };
        allow_multiple_values: {
          type: 'boolean';
          description: 'Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)';
          example: false;
        };
      };
      required: ['name', 'description', 'data_type'];
    };
    create_ticket_type_request: {
      description: 'The request payload for creating a ticket type.\n  You can copy the `icon` property for your ticket type from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)\n';
      type: 'object';
      title: 'Create Ticket Type Request Payload';
      nullable: true;
      properties: {
        name: {
          type: 'string';
          description: 'The name of the ticket type.';
          example: 'Bug';
        };
        description: {
          type: 'string';
          description: 'The description of the ticket type.';
          example: 'Used for tracking bugs';
        };
        icon: {
          type: 'string';
          description: 'The icon of the ticket type.';
          example: '🐞';
          default: '🎟️';
        };
        is_internal: {
          type: 'boolean';
          description: 'Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. This is currently a limited attribute.';
          example: false;
          default: false;
        };
      };
      required: ['name'];
    };
    cursor_pages: {
      title: 'Cursor based pages';
      type: 'object';
      description: 'Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.\nA "cursor" or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or "pages" as needed.\n';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: 'the type of object `pages`.';
          example: 'pages';
          enum: ['pages'];
        };
        page: {
          type: 'integer';
          description: 'The current page';
          example: 1;
        };
        next: {
          $ref: '#/components/schemas/starting_after_paging';
        };
        per_page: {
          type: 'integer';
          description: 'Number of results per page';
          example: 2;
        };
        total_pages: {
          type: 'integer';
          description: 'Total number of pages';
          example: 13;
        };
      };
    };
    custom_attributes: {
      title: 'Custom Attributes';
      type: 'object';
      description: 'An object containing the different custom attributes associated to the conversation as key-value pairs. For relationship attributes the value will be a list of custom object instance models.';
      additionalProperties: {
        anyOf: [
          {
            type: 'string';
          },
          {
            $ref: '#/components/schemas/custom_object_instance';
          },
        ];
      };
    };
    custom_object_instance: {
      title: 'Custom Object Instance';
      type: 'object';
      'x-tags': ['Custom Object Instances'];
      nullable: true;
      description: 'A Custom Object Instance represents an instance of a custom object type. This allows you to create and set custom attributes to store data about your customers that is not already captured by Intercom. The parent object includes recommended default attributes and you can add your own custom attributes.';
      properties: {
        id: {
          type: 'string';
          description: 'The Intercom defined id representing the custom object instance.';
          example: '5a7a19e9f59ae20001d1c1e6';
        };
        external_id: {
          type: 'string';
          description: 'The id you have defined for the custom object instance.';
          example: '0001d1c1e65a7a19e9f59ae2';
        };
        type: {
          type: 'string';
          description: 'The identifier of the custom object type that defines the structure of the custom object instance.';
          example: 'Order';
        };
        custom_attributes: {
          type: 'object';
          description: 'The custom attributes you have set on the custom object instance.';
          additionalProperties: {
            type: 'string';
          };
        };
      };
    };
    customer_request: {
      type: 'object';
      nullable: true;
      oneOf: [
        {
          title: 'Intercom User ID';
          properties: {
            intercom_user_id: {
              type: 'string';
              description: 'The identifier for the contact as given by Intercom.';
              example: '6329bd9ffe4e2e91dac76188';
            };
          };
          required: ['intercom_user_id'];
        },
        {
          title: 'User ID';
          properties: {
            user_id: {
              type: 'string';
              description: 'The external_id you have defined for the contact who is being added as a participant.';
              example: '2e91dac761886329bd9ffe4e';
            };
          };
          required: ['user_id'];
        },
        {
          title: 'Email';
          properties: {
            email: {
              type: 'string';
              description: 'The email you have defined for the contact who is being added as a participant.';
              example: 'sam.sung@example.com';
            };
          };
          required: ['email'];
        },
      ];
    };
    data_attribute: {
      title: 'Data Attribute';
      type: 'object';
      'x-tags': ['Data Attributes'];
      description: 'Data Attributes are metadata used to describe your contact, company and conversation models. These include standard and custom attributes. By using the data attributes endpoint, you can get the global list of attributes for your workspace, as well as create and archive custom attributes.';
      properties: {
        type: {
          type: 'string';
          description: 'Value is `data_attribute`.';
          enum: ['data_attribute'];
          example: 'data_attribute';
        };
        id: {
          type: 'integer';
          description: 'The unique identifier for the data attribute which is given by Intercom. Only available for custom attributes.';
          example: 12878;
        };
        model: {
          type: 'string';
          description: 'Value is `contact` for user/lead attributes and `company` for company attributes.';
          enum: ['contact', 'company'];
          example: 'contact';
        };
        name: {
          type: 'string';
          description: 'Name of the attribute.';
          example: 'paid_subscriber';
        };
        full_name: {
          type: 'string';
          description: "Full name of the attribute. Should match the name unless it's a nested attribute. We can split full_name on `.` to access nested user object values.";
          example: 'custom_attributes.paid_subscriber';
        };
        label: {
          type: 'string';
          description: 'Readable name of the attribute (i.e. name you see in the UI)';
          example: 'Paid Subscriber';
        };
        description: {
          type: 'string';
          description: 'Readable description of the attribute.';
          example: 'Whether the user is a paid subscriber.';
        };
        data_type: {
          type: 'string';
          description: 'The data type of the attribute.';
          enum: ['string', 'integer', 'float', 'boolean', 'date'];
          example: 'boolean';
        };
        options: {
          type: 'array';
          description: 'List of predefined options for attribute value.';
          items: {
            type: 'string';
          };
          example: ['true', 'false'];
        };
        api_writable: {
          type: 'boolean';
          description: 'Can this attribute be updated through API';
          example: true;
        };
        messenger_writable: {
          type: 'boolean';
          description: 'Can this attribute be updated by the Messenger';
          example: false;
        };
        ui_writable: {
          type: 'boolean';
          description: 'Can this attribute be updated in the UI';
          example: true;
        };
        custom: {
          type: 'boolean';
          description: 'Set to true if this is a CDA';
          example: true;
        };
        archived: {
          type: 'boolean';
          description: 'Is this attribute archived. (Only applicable to CDAs)';
          example: false;
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the attribute was created as a UTC Unix timestamp';
          example: 1671028894;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the attribute was last updated as a UTC Unix timestamp';
          example: 1671028894;
        };
        admin_id: {
          type: 'string';
          description: 'Teammate who created the attribute. Only applicable to CDAs';
          example: '5712945';
        };
      };
    };
    data_attribute_list: {
      title: 'Data Attribute List';
      type: 'object';
      description: 'A list of all data attributes belonging to a workspace for contacts, companies or conversations.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['list'];
          example: 'list';
        };
        data: {
          type: 'array';
          description: 'A list of data attributes';
          items: {
            $ref: '#/components/schemas/data_attribute';
          };
        };
      };
    };
    data_event: {
      title: 'Data Event';
      type: 'object';
      'x-tags': ['Data Events'];
      description: 'Data events are used to notify Intercom of changes to your data.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['event'];
          example: 'event';
        };
        event_name: {
          type: 'string';
          description: "The name of the event that occurred. This is presented to your App's admins when filtering and creating segments - a good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.";
          example: 'invited-friend';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the event occurred as a UTC Unix timestamp';
          example: 1671028894;
        };
        user_id: {
          type: 'string';
          description: 'Your identifier for the user.';
          example: '314159';
        };
        id: {
          type: 'string';
          description: 'Your identifier for a lead or a user.';
          example: '8a88a590-e1c3-41e2-a502-e0649dbf721c';
        };
        intercom_user_id: {
          type: 'string';
          description: 'The Intercom identifier for the user.';
          example: '63a0979a5eeebeaf28dd56ba';
        };
        email: {
          type: 'string';
          description: 'An email address for your user. An email should only be used where your application uses email to uniquely identify users.';
          example: 'frodo.baggins@example.com';
        };
        metadata: {
          type: 'object';
          description: 'Optional metadata about the event.';
          additionalProperties: {
            type: 'string';
          };
          example: {
            invite_code: 'ADDAFRIEND';
          };
        };
      };
      required: ['event_name', 'created_at'];
    };
    data_event_list: {
      title: 'Data Event List';
      type: 'object';
      description: 'This will return a list of data events for the App.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['event.list'];
          example: 'event.list';
        };
        events: {
          type: 'array';
          description: 'A list of data events';
          items: {
            $ref: '#/components/schemas/data_event';
          };
        };
        pages: {
          type: 'object';
          description: 'Pagination';
          properties: {
            next: {
              type: 'string';
              example: 'https://api.intercom.io/events?per_page=2&before=1389913941064&intercom_user_id=63a0979a5eeebeaf28dd56ba&type=user"';
            };
            since: {
              type: 'string';
              example: 'https://api.intercom.io/events?intercom_user_id=63a0979a5eeebeaf28dd56ba&type=user&since=1389913941065';
            };
          };
        };
      };
    };
    data_event_summary: {
      title: 'Data Event Summary';
      type: 'object';
      description: 'This will return a summary of data events for the App.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['event.summary'];
          example: 'event.summary';
        };
        email: {
          type: 'string';
          description: 'The email address of the user';
          example: 'Sam.Sung@example.com';
        };
        intercom_user_id: {
          type: 'string';
          description: 'The Intercom user ID of the user';
          example: '63a0979a5eeebeaf28dd56ba';
        };
        user_id: {
          type: 'string';
          description: 'The user ID of the user';
          example: '62b997f288e14803c5006932';
        };
        events: {
          type: 'array';
          description: 'A summary of data events';
          items: {
            $ref: '#/components/schemas/data_event_summary_item';
          };
        };
      };
    };
    data_event_summary_item: {
      title: 'Data Event Summary Item';
      type: 'object';
      description: 'This will return a summary of a data event for the App.';
      nullable: true;
      properties: {
        name: {
          type: 'string';
          description: 'The name of the event';
          example: 'placed-order';
        };
        first: {
          type: 'string';
          description: 'The first time the event was sent';
          example: '2014-01-16T23:12:21.000+00:00';
        };
        last: {
          type: 'string';
          description: 'The last time the event was sent';
          example: '2014-01-16T23:12:21.000+00:00 ';
        };
        count: {
          type: 'integer';
          description: 'The number of times the event was sent';
          example: 1;
        };
        description: {
          type: 'string';
          description: 'The description of the event';
          example: 'A user placed an order';
        };
      };
    };
    data_export: {
      title: 'Data Export';
      type: 'object';
      'x-tags': ['Data Export'];
      description: 'The data export api is used to view all message sent & viewed in a given timeframe.';
      properties: {
        job_identfier: {
          type: 'string';
          description: 'The identifier for your job.';
          example: 'orzzsbd7hk67xyu';
        };
        status: {
          type: 'string';
          enum: ['pending', 'in_progress', 'failed', 'completed', 'no_data', 'canceled'];
          description: 'The current state of your job.';
          example: 'pending';
        };
        download_expires_at: {
          type: 'string';
          description: 'The time after which you will not be able to access the data.';
          example: '1674917488';
        };
        download_url: {
          type: 'string';
          description: 'The location where you can download your data.';
          example: 'https://api.intercom.test/download/messages/data/example';
        };
      };
    };
    data_export_csv: {
      title: 'Data Export CSV';
      type: 'object';
      description: 'A CSV output file';
      properties: {
        user_id: {
          type: 'string';
          description: 'The user_id of the user who was sent the message.';
        };
        user_external_id: {
          type: 'string';
          description: 'The external_user_id of the user who was sent the message';
        };
        company_id: {
          type: 'string';
          description: 'The company ID of the user in relation to the message that was sent. Will return -1 if no company is present.';
        };
        email: {
          type: 'string';
          description: 'The users email who was sent the message.';
        };
        name: {
          type: 'string';
          description: 'The full name of the user receiving the message';
        };
        ruleset_id: {
          type: 'string';
          description: 'The id of the message.';
        };
        content_id: {
          type: 'string';
          description: 'The specific content that was received. In an A/B test each version has its own Content ID.';
        };
        content_type: {
          type: 'string';
          description: 'Email, Chat, Post etc.';
        };
        content_title: {
          type: 'string';
          description: 'The title of the content you see in your Intercom workspace.';
        };
        ruleset_version_id: {
          type: 'string';
          description: 'As you edit content we record new versions. This ID can help you determine which version of a piece of content that was received.';
        };
        receipt_id: {
          type: 'string';
          description: 'ID for this receipt. Will be included with any related stats in other files to identify this specific delivery of a message.';
        };
        received_at: {
          type: 'integer';
          description: 'Timestamp for when the receipt was recorded.';
        };
        series_id: {
          type: 'string';
          description: 'The id of the series that this content is part of. Will return -1 if not part of a series.';
        };
        series_title: {
          type: 'string';
          description: 'The title of the series that this content is part of.';
        };
        node_id: {
          type: 'string';
          description: 'The id of the series node that this ruleset is associated with. Each block in a series has a corresponding node_id.';
        };
        first_reply: {
          type: 'integer';
          description: 'The first time a user replied to this message if the content was able to receive replies.';
        };
        first_completion: {
          type: 'integer';
          description: 'The first time a user completed this message if the content was able to be completed e.g. Tours, Surveys.';
        };
        first_series_completion: {
          type: 'integer';
          description: 'The first time the series this message was a part of was completed by the user.';
        };
        first_series_disengagement: {
          type: 'integer';
          description: 'The first time the series this message was a part of was disengaged by the user.';
        };
        first_series_exit: {
          type: 'integer';
          description: 'The first time the series this message was a part of was exited by the user.';
        };
        first_goal_success: {
          type: 'integer';
          description: 'The first time the user met this messages associated goal if one exists.';
        };
        first_open: {
          type: 'integer';
          description: 'The first time the user opened this message.';
        };
        first_click: {
          type: 'integer';
          description: 'The first time the series the user clicked on a link within this message.';
        };
        first_dismisall: {
          type: 'integer';
          description: 'The first time the series the user dismissed this message.';
        };
        first_unsubscribe: {
          type: 'integer';
          description: 'The first time the user unsubscribed from this message.';
        };
        first_hard_bounce: {
          type: 'integer';
          description: 'The first time this message hard bounced for this user';
        };
      };
    };
    deleted_article_object: {
      title: 'Deleted Article Object';
      type: 'object';
      description: 'Response returned when an object is deleted';
      properties: {
        id: {
          type: 'string';
          description: 'The unique identifier for the article which you provided in the URL.';
          example: '6890762';
        };
        object: {
          type: 'string';
          description: 'The type of object which was deleted. - article';
          enum: ['article'];
          example: 'article';
        };
        deleted: {
          type: 'boolean';
          description: 'Whether the article was deleted successfully or not.';
          example: true;
        };
      };
    };
    deleted_collection_object: {
      title: 'Deleted Collection Object';
      type: 'object';
      description: 'Response returned when an object is deleted';
      properties: {
        id: {
          type: 'string';
          description: 'The unique identifier for the collection which you provided in the URL.';
          example: '6890762';
        };
        object: {
          type: 'string';
          description: 'The type of object which was deleted. - `collection`';
          enum: ['collection'];
          example: 'collection';
        };
        deleted: {
          type: 'boolean';
          description: 'Whether the collection was deleted successfully or not.';
          example: true;
        };
      };
    };
    deleted_company_object: {
      title: 'Deleted Company Object';
      type: 'object';
      description: 'Response returned when an object is deleted';
      properties: {
        id: {
          type: 'string';
          description: 'The unique identifier for the company which is given by Intercom.';
          example: '5b7e8b2f-7a1a-4e6c-8e1b-4f9d4f4c4d4f';
        };
        object: {
          type: 'string';
          description: 'The type of object which was deleted. - `company`';
          enum: ['company'];
          example: 'company';
        };
        deleted: {
          type: 'boolean';
          description: 'Whether the company was deleted successfully or not.';
          example: true;
        };
      };
    };
    deleted_object: {
      title: 'Deleted Object';
      type: 'object';
      description: 'Response returned when an object is deleted';
      properties: {
        id: {
          type: 'string';
          description: 'The unique identifier for the news item which you provided in the URL.';
          example: '6890762';
        };
        object: {
          type: 'string';
          description: 'The type of object which was deleted - news-item.';
          enum: ['news-item'];
          example: 'news-item';
        };
        deleted: {
          type: 'boolean';
          description: 'Whether the news item was deleted successfully or not.';
          example: true;
        };
      };
    };
    deleted_section_object: {
      title: 'Deleted Section Object';
      type: 'object';
      description: 'Response returned when an object is deleted';
      properties: {
        id: {
          type: 'string';
          description: 'The unique identifier for the section which you provided in the URL.';
          example: '6890762';
        };
        object: {
          type: 'string';
          description: 'The type of object which was deleted. - `section`';
          enum: ['section'];
          example: 'section';
        };
        deleted: {
          type: 'boolean';
          description: 'Whether the section was deleted successfully or not.';
          example: true;
        };
      };
    };
    detach_contact_from_conversation_request: {
      properties: {
        admin_id: {
          type: 'string';
          description: 'The `id` of the admin who is performing the action.';
          example: '5017690';
        };
      };
      required: ['admin_id'];
    };
    error: {
      type: 'object';
      title: 'Error';
      description: 'The API will return an Error List for a failed request, which will contain one or more Error objects.';
      properties: {
        type: {
          type: 'string';
          description: 'The type is error.list';
          example: 'error.list';
        };
        request_id: {
          type: 'string';
          nullable: true;
          format: 'uuid';
          description: '';
          example: 'f93ecfa8-d08a-4325-8694-89aeb89c8f85';
        };
        errors: {
          type: 'array';
          description: 'An array of one or more error objects';
          items: {
            properties: {
              code: {
                type: 'string';
                description: 'A string indicating the kind of error, used to further qualify the HTTP response code';
                example: 'unauthorized';
              };
              message: {
                type: 'string';
                nullable: true;
                description: 'Optional. Human readable description of the error.';
                example: 'Access Token Invalid';
              };
              field: {
                type: 'string';
                nullable: true;
                description: 'Optional. Used to identify a particular field or query parameter that was in error.';
                example: 'email';
              };
            };
            required: ['code'];
          };
        };
      };
      required: ['type', 'errors'];
    };
    file_attribute: {
      title: 'File';
      type: 'object';
      description: 'The value describing a file upload set for a custom attribute';
      properties: {
        type: {
          type: 'string';
          example: 'upload';
        };
        name: {
          type: 'string';
          description: 'The name of the file';
          example: 'Screenshot.png';
        };
        url: {
          type: 'string';
          description: 'The url of the file. This is a temporary URL and will expire after 30 minutes.';
          example: 'https://intercom-attachments-1.com/.../Screenshot.png';
        };
        content_type: {
          type: 'string';
          description: 'The type of file';
          example: 'image/png';
        };
        filesize: {
          type: 'integer';
          description: 'The size of the file in bytes';
          example: 11308309;
        };
        width: {
          type: 'integer';
          description: 'The width of the file in pixels, if applicable';
          example: 3024;
        };
        height: {
          type: 'integer';
          description: 'The height of the file in pixels, if applicable';
          example: 1964;
        };
      };
    };
    group_content: {
      title: 'Group Content';
      type: 'object';
      description: 'The Content of a Group.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - `group_content` .';
          enum: [null, 'group_content'];
          example: 'group_content';
          nullable: true;
        };
        name: {
          type: 'string';
          description: 'The name of the collection or section.';
          example: 'Collection name';
        };
        description: {
          type: 'string';
          description: 'The description of the collection. Only available for collections.';
          example: ' Collection description';
        };
      };
    };
    group_translated_content: {
      title: 'Group Translated Content';
      type: 'object';
      description: 'The Translated Content of an Group. The keys are the locale codes and the values are the translated content of the Group.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - group_translated_content.';
          nullable: true;
          enum: [null, 'group_translated_content'];
          example: 'group_translated_content';
        };
        ar: {
          description: 'The content of the group in Arabic';
          $ref: '#/components/schemas/group_content';
        };
        bg: {
          description: 'The content of the group in Bulgarian';
          $ref: '#/components/schemas/group_content';
        };
        bs: {
          description: 'The content of the group in Bosnian';
          $ref: '#/components/schemas/group_content';
        };
        ca: {
          description: 'The content of the group in Catalan';
          $ref: '#/components/schemas/group_content';
        };
        cs: {
          description: 'The content of the group in Czech';
          $ref: '#/components/schemas/group_content';
        };
        da: {
          description: 'The content of the group in Danish';
          $ref: '#/components/schemas/group_content';
        };
        de: {
          description: 'The content of the group in German';
          $ref: '#/components/schemas/group_content';
        };
        el: {
          description: 'The content of the group in Greek';
          $ref: '#/components/schemas/group_content';
        };
        en: {
          description: 'The content of the group in English';
          $ref: '#/components/schemas/group_content';
        };
        es: {
          description: 'The content of the group in Spanish';
          $ref: '#/components/schemas/group_content';
        };
        et: {
          description: 'The content of the group in Estonian';
          $ref: '#/components/schemas/group_content';
        };
        fi: {
          description: 'The content of the group in Finnish';
          $ref: '#/components/schemas/group_content';
        };
        fr: {
          description: 'The content of the group in French';
          $ref: '#/components/schemas/group_content';
        };
        he: {
          description: 'The content of the group in Hebrew';
          $ref: '#/components/schemas/group_content';
        };
        hr: {
          description: 'The content of the group in Croatian';
          $ref: '#/components/schemas/group_content';
        };
        hu: {
          description: 'The content of the group in Hungarian';
          $ref: '#/components/schemas/group_content';
        };
        id: {
          description: 'The content of the group in Indonesian';
          $ref: '#/components/schemas/group_content';
        };
        it: {
          description: 'The content of the group in Italian';
          $ref: '#/components/schemas/group_content';
        };
        ja: {
          description: 'The content of the group in Japanese';
          $ref: '#/components/schemas/group_content';
        };
        ko: {
          description: 'The content of the group in Korean';
          $ref: '#/components/schemas/group_content';
        };
        lt: {
          description: 'The content of the group in Lithuanian';
          $ref: '#/components/schemas/group_content';
        };
        lv: {
          description: 'The content of the group in Latvian';
          $ref: '#/components/schemas/group_content';
        };
        mn: {
          description: 'The content of the group in Mongolian';
          $ref: '#/components/schemas/group_content';
        };
        nb: {
          description: 'The content of the group in Norwegian';
          $ref: '#/components/schemas/group_content';
        };
        nl: {
          description: 'The content of the group in Dutch';
          $ref: '#/components/schemas/group_content';
        };
        pl: {
          description: 'The content of the group in Polish';
          $ref: '#/components/schemas/group_content';
        };
        pt: {
          description: 'The content of the group in Portuguese (Portugal)';
          $ref: '#/components/schemas/group_content';
        };
        ro: {
          description: 'The content of the group in Romanian';
          $ref: '#/components/schemas/group_content';
        };
        ru: {
          description: 'The content of the group in Russian';
          $ref: '#/components/schemas/group_content';
        };
        sl: {
          description: 'The content of the group in Slovenian';
          $ref: '#/components/schemas/group_content';
        };
        sr: {
          description: 'The content of the group in Serbian';
          $ref: '#/components/schemas/group_content';
        };
        sv: {
          description: 'The content of the group in Swedish';
          $ref: '#/components/schemas/group_content';
        };
        tr: {
          description: 'The content of the group in Turkish';
          $ref: '#/components/schemas/group_content';
        };
        vi: {
          description: 'The content of the group in Vietnamese';
          $ref: '#/components/schemas/group_content';
        };
        'pt-BR': {
          description: 'The content of the group in Portuguese (Brazil)';
          $ref: '#/components/schemas/group_content';
        };
        'zh-CN': {
          description: 'The content of the group in Chinese (China)';
          $ref: '#/components/schemas/group_content';
        };
        'zh-TW': {
          description: 'The content of the group in Chinese (Taiwan)';
          $ref: '#/components/schemas/group_content';
        };
      };
    };
    help_center: {
      title: 'Help Center';
      type: 'object';
      'x-tags': ['Help Center'];
      description: 'Help Centers contain collections';
      properties: {
        id: {
          type: 'string';
          description: 'The unique identifier for the Help Center which is given by Intercom.';
          example: '123';
        };
        workspace_id: {
          type: 'string';
          description: 'The id of the workspace which the Help Center belongs to.';
          example: 'hfi1bx4l';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time when the Help Center was created.';
          example: 1672928359;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time when the Help Center was last updated.';
          example: 1672928610;
        };
        identifier: {
          type: 'string';
          description: 'The identifier of the Help Center. This is used in the URL of the Help Center.';
          example: 'intercom';
        };
        website_turned_on: {
          type: 'boolean';
          description: 'Whether the Help Center is turned on or not. This is controlled in your Help Center settings.';
          example: true;
        };
        display_name: {
          type: 'string';
          description: 'The display name of the Help Center only seen by teammates.';
          example: 'Intercom Help Center';
        };
      };
    };
    help_center_list: {
      title: 'Help Centers';
      type: 'object';
      'x-tags': ['Help Center'];
      description: 'A list of Help Centers belonging to the App';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object - `list`.';
          enum: ['list'];
          example: 'list';
        };
        data: {
          type: 'array';
          description: 'An array of Help Center objects';
          items: {
            $ref: '#/components/schemas/help_center';
          };
        };
      };
    };
    intercom_version: {
      description: "Intercom API version.</br>By default, it's equal to the version set in the app package.";
      type: 'string';
      example: '2.9';
      default: '2.9';
      enum: [
        '1.0',
        '1.1',
        '1.2',
        '1.3',
        '1.4',
        '2.0',
        '2.1',
        '2.2',
        '2.3',
        '2.4',
        '2.5',
        '2.6',
        '2.7',
        '2.8',
        '2.9',
        '2.10',
        '2.11',
        'Unstable',
      ];
    };
    merge_contacts_request: {
      description: 'Merge contact data.';
      type: 'object';
      title: 'Merge contact data';
      properties: {
        from: {
          type: 'string';
          description: 'The unique identifier for the contact to merge away from. Must be a lead.';
          example: '5d70dd30de4efd54f42fd526';
        };
        into: {
          type: 'string';
          description: 'The unique identifier for the contact to merge into. Must be a user.';
          example: '5ba682d23d7cf92bef87bfd4';
        };
      };
    };
    message: {
      type: 'object';
      title: 'Message';
      'x-tags': ['Messages'];
      description: 'Message are how you reach out to contacts in Intercom. They are created when an admin sends an outbound message to a contact.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the message';
          example: 'user_message';
        };
        id: {
          type: 'string';
          description: 'The id representing the message.';
          example: '1488971108';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the conversation was created.';
          example: 1667560812;
        };
        subject: {
          type: 'string';
          description: 'The subject of the message. Only present if message_type: email.';
          example: 'Greetings';
        };
        body: {
          type: 'string';
          description: 'The message body, which may contain HTML.';
          example: 'Hello';
        };
        message_type: {
          type: 'string';
          enum: ['email', 'inapp', 'facebook', 'twitter'];
          description: 'The type of message that was sent. Can be email, inapp, facebook or twitter.';
          example: 'inapp';
        };
        conversation_id: {
          type: 'string';
          description: 'The associated conversation_id';
          example: '64619700005570';
        };
      };
      required: ['type', 'id', 'created_at', 'body', 'message_type'];
    };
    multiple_filter_search_request: {
      title: 'Multiple Filter Search Request';
      description: 'Search using Intercoms Search APIs with more than one filter.';
      type: 'object';
      properties: {
        operator: {
          type: 'string';
          enum: ['AND', 'OR'];
          description: 'An operator to allow boolean inspection between multiple fields.';
          example: 'AND';
        };
        value: {
          oneOf: [
            {
              type: 'array';
              description: 'Add mutiple filters.';
              title: 'multiple filter search request';
              items: {
                $ref: '#/components/schemas/multiple_filter_search_request';
              };
            },
            {
              type: 'array';
              description: 'Add a single filter field.';
              title: 'single filter search request';
              items: {
                $ref: '#/components/schemas/single_filter_search_request';
              };
            },
          ];
        };
      };
    };
    news_item: {
      title: 'News Item';
      type: 'object';
      'x-tags': ['News'];
      description: 'A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object.';
          enum: ['news-item'];
          example: 'news-item';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the news item which is given by Intercom.';
          example: '141';
        };
        workspace_id: {
          type: 'string';
          description: 'The id of the workspace which the news item belongs to.';
          example: 't74hdn32';
        };
        title: {
          type: 'string';
          description: 'The title of the news item.';
          example: 'New feature: News Items';
        };
        body: {
          type: 'string';
          description: 'The news item body, which may contain HTML.';
          example: 'We are excited to announce the launch of News Items, a new content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers.';
        };
        sender_id: {
          type: 'integer';
          description: 'The id of the sender of the news item. Must be a teammate on the workspace.';
          example: 123;
        };
        state: {
          type: 'string';
          description: 'News items will not be visible to your users in the assigned newsfeeds until they are set live.';
          enum: ['draft', 'live'];
          example: 'live';
        };
        newsfeed_assignments: {
          type: 'array';
          description: 'A list of newsfeed_assignments to assign to the specified newsfeed.';
          items: {
            $ref: '#/components/schemas/newsfeed_assignment';
          };
        };
        labels: {
          type: 'array';
          description: 'Label names displayed to users to categorize the news item.';
          items: {
            type: 'string';
            nullable: true;
            description: 'The label name.';
            example: 'Product Update';
          };
        };
        cover_image_url: {
          type: 'string';
          format: 'uri';
          nullable: true;
          description: 'URL of the image used as cover. Must have .jpg or .png extension.';
          example: 'https://example.com/cover.jpg';
        };
        reactions: {
          type: 'array';
          description: 'Ordered list of emoji reactions to the news item. When empty, reactions are disabled.';
          items: {
            type: 'string';
            nullable: true;
            description: 'The emoji reaction to the news item.';
            example: '👍';
          };
        };
        deliver_silently: {
          type: 'boolean';
          description: 'When set to true, the news item will appear in the messenger newsfeed without showing a notification badge.';
          example: true;
        };
        created_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'Timestamp for when the news item was created.';
          example: 1610589632;
        };
        updated_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'Timestamp for when the news item was last updated.';
          example: 1610589632;
        };
      };
    };
    news_item_request: {
      description: 'A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers.';
      type: 'object';
      title: 'Create News Item Request';
      properties: {
        title: {
          type: 'string';
          description: 'The title of the news item.';
          example: 'Halloween is here!';
        };
        body: {
          type: 'string';
          description: 'The news item body, which may contain HTML.';
          example: '<p>New costumes in store for this spooky season</p>';
        };
        sender_id: {
          type: 'integer';
          description: 'The id of the sender of the news item. Must be a teammate on the workspace.';
          example: 123;
        };
        state: {
          type: 'string';
          description: 'News items will not be visible to your users in the assigned newsfeeds until they are set live.';
          enum: ['draft', 'live'];
          example: 'live';
        };
        deliver_silently: {
          type: 'boolean';
          description: 'When set to `true`, the news item will appear in the messenger newsfeed without showing a notification badge.';
          example: true;
        };
        labels: {
          type: 'array';
          description: 'Label names displayed to users to categorize the news item.';
          items: {
            type: 'string';
          };
          example: ['Product', 'Update', 'New'];
        };
        reactions: {
          type: 'array';
          description: 'Ordered list of emoji reactions to the news item. When empty, reactions are disabled.';
          items: {
            type: 'string';
            nullable: true;
          };
          example: ['😆', '😅'];
        };
        newsfeed_assignments: {
          type: 'array';
          description: 'A list of newsfeed_assignments to assign to the specified newsfeed.';
          items: {
            $ref: '#/components/schemas/newsfeed_assignment';
          };
        };
      };
      required: ['title', 'sender_id'];
    };
    newsfeed: {
      title: 'Newsfeed';
      type: 'object';
      'x-tags': ['News'];
      description: 'A newsfeed is a collection of news items, targeted to a specific audience.\n\nNewsfeeds currently cannot be edited through the API, please refer to [this article](https://www.intercom.com/help/en/articles/6362267-getting-started-with-news) to set up your newsfeeds in Intercom.\n';
      properties: {
        id: {
          type: 'string';
          description: 'The unique identifier for the newsfeed which is given by Intercom.';
          example: '12312';
        };
        type: {
          type: 'string';
          description: 'The type of object.';
          enum: ['newsfeed'];
          example: 'newsfeed';
        };
        name: {
          type: 'string';
          description: 'The name of the newsfeed. This name will never be visible to your users.';
          example: 'My Newsfeed';
        };
        created_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'Timestamp for when the newsfeed was created.';
          example: 1674917488;
        };
        updated_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'Timestamp for when the newsfeed was last updated.';
          example: 1674917488;
        };
      };
    };
    newsfeed_assignment: {
      title: 'Newsfeed Assignment';
      type: 'object';
      'x-tags': ['News'];
      description: 'Assigns a news item to a newsfeed.';
      properties: {
        newsfeed_id: {
          type: 'integer';
          description: 'The unique identifier for the newsfeed which is given by Intercom. Publish dates cannot be in the future, to schedule news items use the dedicated feature in app (see this article).';
          example: 198313;
        };
        published_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'Publish date of the news item on the newsfeed, use this field if you want to set a publish date in the past (e.g. when importing existing news items). On write, this field will be ignored if the news item state is "draft".';
          example: 1674917488;
        };
      };
    };
    note: {
      title: 'Note';
      type: 'object';
      'x-tags': ['Notes'];
      description: 'Notes allow you to annotate and comment on your contacts.';
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `note`.";
          example: 'note';
        };
        id: {
          type: 'string';
          description: 'The id of the note.';
          example: '17495962';
        };
        created_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'The time the note was created.';
          example: 1674589321;
        };
        contact: {
          type: 'object';
          description: 'Represents the contact that the note was created about.';
          nullable: true;
          properties: {
            type: {
              type: 'string';
              description: "String representing the object's type. Always has the value `contact`.";
            };
            id: {
              type: 'string';
              description: 'The id of the contact.';
              example: '214656d0c743eafcfde7f248';
            };
          };
        };
        author: {
          $ref: '#/components/schemas/admin';
          description: 'Optional. Represents the Admin that created the note.';
        };
        body: {
          type: 'string';
          description: 'The body text of the note.';
          example: '<p>Text for the note.</p>';
        };
      };
    };
    note_list: {
      title: 'Paginated Response';
      type: 'object';
      description: 'A paginated list of notes associated with a contact.';
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `list`.";
          example: 'list';
        };
        data: {
          type: 'array';
          description: 'An array of notes.';
          items: {
            $ref: '#/components/schemas/note';
          };
        };
        total_count: {
          type: 'integer';
          description: 'A count of the total number of notes.';
          example: 1;
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
      };
    };
    open_conversation_request: {
      title: 'Open Conversation Request';
      type: 'object';
      description: 'Payload of the request to open a conversation';
      properties: {
        message_type: {
          type: 'string';
          enum: ['open'];
          example: 'open';
        };
        admin_id: {
          type: 'string';
          description: 'The id of the admin who is performing the action.';
          example: '5017690';
        };
      };
      required: ['message_type', 'admin_id'];
    };
    pages_link: {
      title: 'Pagination Object';
      type: 'object';
      description: 'The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests.\n\nTheir responses are likely to contain a pages object that hosts pagination links which a client can use to paginate through the data without having to construct a query. The link relations for the pages field are as follows.\n';
      properties: {
        type: {
          type: 'string';
          example: 'pages';
          enum: ['pages'];
        };
        page: {
          type: 'integer';
          example: 1;
        };
        next: {
          type: 'string';
          format: 'uri';
          description: 'A link to the next page of results. A response that does not contain a next link does not have further data to fetch.';
          nullable: true;
        };
        per_page: {
          type: 'integer';
          example: 50;
        };
        total_pages: {
          type: 'integer';
          example: 1;
        };
      };
    };
    paginated_response: {
      title: 'Paginated Response';
      type: 'object';
      description: 'Paginated Response';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object';
          enum: ['list', 'conversation.list'];
          example: 'list';
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
        total_count: {
          type: 'integer';
          description: 'A count of the total number of objects.';
          example: 1;
        };
        data: {
          type: 'array';
          description: 'An array of Objects';
          items: {
            anyOf: [
              {
                $ref: '#/components/schemas/news_item';
              },
              {
                $ref: '#/components/schemas/newsfeed';
              },
            ];
          };
        };
      };
    };
    part_attachment: {
      title: 'Part attachment';
      type: 'object';
      description: 'The file attached to a part';
      properties: {
        type: {
          type: 'string';
          description: 'The type of attachment';
          example: 'upload';
        };
        name: {
          type: 'string';
          description: 'The name of the attachment';
          example: 'example.png';
        };
        url: {
          type: 'string';
          description: 'The URL of the attachment';
          example: 'https://picsum.photos/200/300';
        };
        content_type: {
          type: 'string';
          description: 'The content type of the attachment';
          example: 'image/png';
        };
        filesize: {
          type: 'integer';
          description: 'The size of the attachment';
          example: 100;
        };
        width: {
          type: 'integer';
          description: 'The width of the attachment';
          example: 100;
        };
        height: {
          type: 'integer';
          description: 'The height of the attachment';
          example: 100;
        };
      };
    };
    phone_switch: {
      title: 'Phone Switch';
      type: 'object';
      description: 'Phone Switch Response';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: '';
          enum: ['phone_call_redirect'];
          default: 'phone_call_redirect';
          example: 'phone_call_redirect';
        };
        phone: {
          type: 'string';
          description: 'Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger.';
          example: '+1 1234567890';
        };
      };
    };
    redact_conversation_request: {
      oneOf: [
        {
          title: 'Redact Conversation Part Request';
          type: 'object';
          description: 'Payload of the request to redact a conversation part';
          properties: {
            type: {
              type: 'string';
              enum: ['conversation_part'];
              description: 'The type of resource being redacted.';
              example: 'conversation_part';
            };
            conversation_id: {
              type: 'string';
              description: 'The id of the conversation.';
              example: '19894788788';
            };
            conversation_part_id: {
              type: 'string';
              description: 'The id of the conversation_part.';
              example: '19381789428';
            };
          };
          required: ['type', 'conversation_id', 'conversation_part_id'];
        },
        {
          title: 'Redact Conversation Source Request';
          type: 'object';
          description: 'Payload of the request to redact a conversation source';
          properties: {
            type: {
              type: 'string';
              enum: ['source'];
              description: 'The type of resource being redacted.';
              example: 'source';
            };
            conversation_id: {
              type: 'string';
              description: 'The id of the conversation.';
              example: '19894788788';
            };
            source_id: {
              type: 'string';
              description: 'The id of the source.';
              example: '19894781231';
            };
          };
          required: ['type', 'conversation_id', 'source_id'];
        },
      ];
    };
    reference: {
      title: 'Reference';
      type: 'object';
      description: 'reference to another object';
      properties: {
        type: {
          type: 'string';
          description: '';
          example: 'contact';
        };
        id: {
          type: 'string';
          nullable: true;
          description: '';
          example: '1a2b3c';
        };
      };
    };
    reply_conversation_request: {
      oneOf: [
        {
          $ref: '#/components/schemas/contact_reply_conversation_request';
        },
        {
          $ref: '#/components/schemas/admin_reply_conversation_request';
        },
      ];
    };
    search_request: {
      description: 'Search using Intercoms Search APIs.';
      type: 'object';
      title: 'Search data';
      properties: {
        query: {
          oneOf: [
            {
              $ref: '#/components/schemas/single_filter_search_request';
              title: 'Single filter search request';
            },
            {
              $ref: '#/components/schemas/multiple_filter_search_request';
              title: 'multiple filter search request';
            },
          ];
        };
        pagination: {
          $ref: '#/components/schemas/starting_after_paging';
        };
      };
      required: ['query'];
    };
    section: {
      title: 'Section';
      type: 'object';
      'x-tags': ['Help Center'];
      description: 'Sections are subdivisions of a collection, with a collection potentially having multiple sections.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object - `section`.';
          enum: ['section'];
          default: 'section';
          example: 'section';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the section which is given by Intercom.';
          example: '6871119';
        };
        workspace_id: {
          type: 'string';
          description: 'The id of the workspace which the section belongs to.';
          example: 'hfi1bx4l';
        };
        name: {
          type: 'string';
          description: "The name of the section. For multilingual sections, this will be the name of the default language's content.";
          example: 'Default language name';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: "The time when the section was created. For multilingual sections, this will be the timestamp of creation of the default language's content.";
          example: 1672928359;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: "The time when the section was last updated. For multilingual sections, this will be the timestamp of last update of the default language's content.";
          example: 1672928610;
        };
        url: {
          type: 'string';
          nullable: true;
          description: 'The URL of the section. For multilingual help centers, this will be the URL of the section for the default language.';
          example: 'http://intercom.test/help/section/name';
        };
        icon: {
          type: 'string';
          nullable: true;
          description: 'The icon of the section.';
          example: 'book-bookmark';
        };
        order: {
          type: 'integer';
          description: "The order of the section in relation to others sections within a collection. Values go from `0` upwards. `0` is the default if there's no order.";
          example: '1';
        };
        parent_id: {
          oneOf: [
            {
              type: 'integer';
              title: 'Integer';
            },
            {
              type: 'string';
              title: 'String';
            },
          ];
          description: 'The id of the parent section.';
          example: 6871119;
        };
        default_locale: {
          type: 'string';
          description: 'The default locale of the help center. This field is only returned for multilingual help centers.';
          example: 'en';
        };
        translated_content: {
          nullable: true;
          $ref: '#/components/schemas/group_translated_content';
        };
      };
    };
    section_list: {
      title: 'Sections';
      type: 'object';
      description: 'This will return a list of Sections for the App.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object - `list`.';
          enum: ['list'];
          example: 'list';
        };
        pages: {
          $ref: '#/components/schemas/cursor_pages';
        };
        total_count: {
          type: 'integer';
          description: 'A count of the total number of sections.';
          example: 12;
        };
        data: {
          type: 'array';
          description: 'An array of section objects';
          items: {
            $ref: '#/components/schemas/section';
          };
        };
      };
    };
    segment: {
      title: 'Segment';
      type: 'object';
      'x-tags': ['Segments'];
      description: 'A segment is a group of your contacts defined by the rules that you set.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of object.';
          enum: ['segment'];
          example: 'segment';
        };
        id: {
          type: 'string';
          description: 'The unique identifier representing the segment.';
          example: '56203d253cba154d39010062';
        };
        name: {
          type: 'string';
          description: 'The name of the segment.';
          example: 'Active';
        };
        created_at: {
          type: 'integer';
          description: 'The time the segment was created.';
          example: 1394621988;
        };
        updated_at: {
          type: 'integer';
          description: 'The time the segment was updated.';
          example: 1394622004;
        };
        person_type: {
          type: 'string';
          description: 'Type of the contact: contact (lead) or user.';
          enum: ['contact', 'user'];
          example: 'contact';
        };
        count: {
          type: 'integer';
          description: "The number of items in the user segment. It's returned when `include_count=true` is included in the request.";
          example: 3;
          nullable: true;
        };
      };
    };
    segment_list: {
      title: 'Segment List';
      type: 'object';
      description: 'This will return a list of Segment Objects. The result may also have a pages object if the response is paginated.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['segment.list'];
          example: 'segment.list';
        };
        segments: {
          type: 'array';
          description: 'A list of Segment objects';
          items: {
            $ref: '#/components/schemas/segment';
          };
        };
        pages: {
          type: 'object';
          description: 'A pagination object, which may be empty, indicating no further pages to fetch.';
        };
      };
    };
    single_filter_search_request: {
      title: 'Single Filter Search Request';
      description: 'Search using Intercoms Search APIs with a single filter.';
      type: 'object';
      properties: {
        field: {
          type: 'string';
          description: 'The accepted field that you want to search on.';
          example: 'created_at';
        };
        operator: {
          type: 'string';
          enum: ['=', '!=', 'IN', 'NIN', '<', '>', '~', '!~', '^', '$'];
          description: 'The accepted operators you can use to define how you want to search for the value.';
          example: '>';
        };
        value: {
          type: 'string';
          description: 'The value that you want to search on.';
          example: '73732934';
        };
      };
    };
    sla_applied: {
      title: 'Applied SLA';
      type: 'object';
      nullable: true;
      description: 'The SLA Applied object contains the details for which SLA has been applied to this conversation.\nImportant: if there are any canceled sla_events for the conversation - meaning an SLA has been manually removed from a conversation, the sla_status will always be returned as null.\n';
      properties: {
        type: {
          type: 'string';
          description: 'object type';
          example: 'conversation_sla_summary';
        };
        sla_name: {
          type: 'string';
          description: 'The name of the SLA as given by the teammate when it was created.';
          example: '';
        };
        sla_status: {
          type: 'string';
          enum: ['hit', 'missed', 'cancelled', 'active'];
          description: 'SLA statuses:\n            - `hit`: If there’s at least one hit event in the underlying sla_events table, and no “missed” or “canceled” events for the conversation.\n            - `missed`: If there are any missed sla_events for the conversation and no canceled events. If there’s even a single missed sla event, the status will always be missed. A missed status is not applied when the SLA expires, only the next time a teammate replies.\n            - `active`: An SLA has been applied to a conversation, but has not yet been fulfilled. SLA status is active only if there are no “hit, “missed”, or “canceled” events.';
          example: 'hit';
        };
      };
    };
    snooze_conversation_request: {
      title: 'Snooze Conversation Request';
      type: 'object';
      description: 'Payload of the request to snooze a conversation';
      properties: {
        message_type: {
          type: 'string';
          enum: ['snoozed'];
          example: 'snoozed';
        };
        admin_id: {
          type: 'string';
          description: 'The id of the admin who is performing the action.';
          example: '5017691';
        };
        snoozed_until: {
          type: 'integer';
          format: 'timestamp';
          description: 'The time you want the conversation to reopen.';
          example: 1673609604;
        };
      };
      required: ['message_type', 'admin_id', 'snoozed_until'];
    };
    social_profile: {
      title: 'Social Profile';
      type: 'object';
      description: 'A Social Profile allows you to label your contacts, companies, and conversations and list them using that Social Profile.';
      properties: {
        type: {
          type: 'string';
          description: 'value is "social_profile"';
          example: 'social_profile';
        };
        name: {
          type: 'string';
          description: 'The name of the Social media profile';
          example: 'Facebook';
        };
        url: {
          type: 'string';
          format: 'uri';
          description: 'The name of the Social media profile';
          example: 'http://twitter.com/th1sland';
        };
      };
    };
    starting_after_paging: {
      title: 'Pagination: Starting After';
      type: 'object';
      nullable: true;
      properties: {
        per_page: {
          type: 'integer';
          description: 'The number of results to fetch per page.';
          example: 2;
        };
        starting_after: {
          type: 'string';
          description: 'The cursor to use in the next request to get the next page of results.';
          nullable: true;
          example: 'your-cursor-from-response';
        };
      };
    };
    subscription_type: {
      title: 'Subscription Types';
      type: 'object';
      'x-tags': ['Subscription Types'];
      description: "A subscription type lets customers easily opt out of non-essential communications without missing what's important to them.";
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object - subscription';
          example: 'subscription';
        };
        id: {
          type: 'string';
          description: 'The unique identifier representing the subscription type.';
          example: '123456';
        };
        state: {
          type: 'string';
          description: 'The state of the subscription type.';
          enum: ['live', 'draft', 'archived'];
          example: 'live';
        };
        default_translation: {
          $ref: '#/components/schemas/translation';
        };
        translations: {
          type: 'array';
          description: 'An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.';
          items: {
            $ref: '#/components/schemas/translation';
          };
        };
        consent_type: {
          type: 'string';
          description: 'Describes the type of consent.';
          enum: ['opt_out', 'opt_in'];
          example: 'opt_in';
        };
        content_types: {
          type: 'array';
          description: 'The message types that this subscription supports - can contain `email` or `sms_message`.';
          items: {
            type: 'string';
            enum: ['email', 'sms_message'];
            example: 'email';
          };
        };
      };
    };
    subscription_type_list: {
      title: 'Subscription Types';
      type: 'object';
      description: 'A list of subscription type objects.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['list'];
          example: 'list';
        };
        data: {
          type: 'array';
          description: 'A list of subscription type objects associated with the workspace .';
          items: {
            $ref: '#/components/schemas/subscription_type';
          };
        };
      };
    };
    tag: {
      title: 'Tag';
      type: 'object';
      'x-tags': ['Tags'];
      description: 'A tag allows you to label your contacts, companies, and conversations and list them using that tag.';
      properties: {
        type: {
          type: 'string';
          description: 'value is "tag"';
          example: 'tag';
        };
        id: {
          type: 'string';
          description: 'The id of the tag';
          example: '123456';
        };
        name: {
          type: 'string';
          description: 'The name of the tag';
          example: 'Test tag';
        };
        applied_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time when the tag was applied to the object';
          example: 1663597223;
        };
        applied_by: {
          $ref: '#/components/schemas/reference';
        };
      };
    };
    tag_company_request: {
      description: 'You can tag a single company or a list of companies.';
      type: 'object';
      title: 'Tag Company Request Payload';
      properties: {
        name: {
          type: 'string';
          description: 'The name of the tag, which will be created if not found.';
          example: 'Independent';
        };
        companies: {
          type: 'array';
          items: {
            properties: {
              id: {
                type: 'string';
                description: 'The Intercom defined id representing the company.';
                example: '531ee472cce572a6ec000006';
              };
              company_id: {
                type: 'string';
                description: 'The company id you have defined for the company.';
                example: '6';
              };
            };
          };
          description: 'The id or company_id of the company can be passed as input parameters.';
        };
      };
      required: ['name', 'companies'];
    };
    tag_list: {
      title: 'Tags';
      type: 'object';
      description: 'A list of tags objects in the workspace.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['list'];
          example: 'list';
        };
        data: {
          type: 'array';
          description: 'A list of tags objects associated with the workspace .';
          items: {
            $ref: '#/components/schemas/tag';
          };
        };
      };
    };
    tag_multiple_users_request: {
      description: 'You can tag a list of users.';
      type: 'object';
      title: 'Tag Users Request Payload';
      properties: {
        name: {
          type: 'string';
          description: 'The name of the tag, which will be created if not found.';
          example: 'Independent';
        };
        users: {
          type: 'array';
          items: {
            properties: {
              id: {
                type: 'string';
                description: 'The Intercom defined id representing the user.';
                example: '5f7f0d217289f8d2f4262080';
              };
            };
          };
        };
      };
      required: ['name', 'users'];
    };
    tags: {
      title: 'Tags';
      type: 'object';
      description: 'A list of tags objects associated with a conversation';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['tag.list'];
          example: 'tag.list';
        };
        tags: {
          type: 'array';
          description: 'A list of tags objects associated with the conversation.';
          items: {
            $ref: '#/components/schemas/tag';
          };
        };
      };
    };
    team: {
      title: 'Team';
      type: 'object';
      'x-tags': ['Teams'];
      description: 'Teams are groups of admins in Intercom.';
      properties: {
        type: {
          type: 'string';
          description: 'Value is always "team"';
          example: 'team';
        };
        id: {
          type: 'string';
          description: 'The id of the team';
          example: '814865';
        };
        name: {
          type: 'string';
          description: 'The name of the team';
          example: 'Example Team';
        };
        admin_ids: {
          type: 'array';
          description: 'The list of admin IDs that are a part of the team.';
          example: [493881];
          items: {
            type: 'integer';
          };
        };
        admin_priority_level: {
          $ref: '#/components/schemas/admin_priority_level';
        };
      };
    };
    team_list: {
      title: 'Team List';
      type: 'object';
      description: 'This will return a list of team objects for the App.';
      properties: {
        type: {
          type: 'string';
          description: 'The type of the object';
          enum: ['team.list'];
          example: 'team.list';
        };
        teams: {
          type: 'array';
          description: 'A list of team objects';
          items: {
            $ref: '#/components/schemas/team';
          };
        };
      };
    };
    team_priority_level: {
      title: 'Team Priority Level';
      type: 'object';
      nullable: true;
      description: 'Admin priority levels for teams';
      properties: {
        primary_team_ids: {
          type: 'array';
          description: 'The primary team ids for the team';
          nullable: true;
          example: [814865];
          items: {
            type: 'integer';
          };
        };
        secondary_team_ids: {
          type: 'array';
          description: 'The secondary team ids for the team';
          nullable: true;
          example: [493881];
          items: {
            type: 'integer';
          };
        };
      };
    };
    ticket: {
      title: 'Ticket';
      type: 'object';
      'x-tags': ['Tickets'];
      description: 'Tickets are how you track requests from your users.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: 'Always ticket';
          enum: ['ticket'];
          default: 'ticket';
          example: 'ticket';
        };
        id: {
          type: 'string';
          description: 'The unique identifier for the ticket which is given by Intercom.';
          example: '1295';
        };
        ticket_id: {
          type: 'string';
          description: 'The ID of the Ticket used in the Intercom Inbox and Messenger. Do not use ticket_id for API queries.';
          example: '1390';
        };
        ticket_attributes: {
          $ref: '#/components/schemas/ticket_custom_attributes';
        };
        ticket_state: {
          type: 'string';
          description: 'The state the ticket is currenly in';
          enum: ['submitted', 'in_progress', 'waiting_on_customer', 'resolved'];
          example: 'submitted';
        };
        ticket_state_internal_label: {
          type: 'string';
          description: 'The state the ticket is currently in, in a human readable form - visible in Intercom';
        };
        ticket_state_external_label: {
          type: 'string';
          description: 'The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal.';
        };
        ticket_type: {
          $ref: '#/components/schemas/ticket_type';
        };
        contacts: {
          $ref: '#/components/schemas/ticket_contacts';
        };
        admin_assignee_id: {
          type: 'string';
          description: 'The id representing the admin assigned to the ticket.';
          example: '1295';
        };
        team_assignee_id: {
          type: 'string';
          description: 'The id representing the team assigned to the ticket.';
          example: '1295';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the ticket was created as a UTC Unix timestamp.';
          example: 1663597223;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The last time the ticket was updated as a UTC Unix timestamp.';
          example: 1663597260;
        };
        ticket_parts: {
          $ref: '#/components/schemas/ticket_parts';
        };
        is_shared: {
          type: 'boolean';
          description: 'Whether or not the ticket is shared with the customer.';
          example: true;
        };
      };
    };
    ticket_contacts: {
      title: 'Contacts';
      type: 'object';
      'x-tags': ['Tickets'];
      description: 'The list of contacts affected by a ticket.';
      properties: {
        type: {
          type: 'string';
          description: 'always contact.list';
          enum: ['contact.list'];
          example: 'contact.list';
        };
        contacts: {
          type: 'array';
          description: 'The list of contacts affected by this ticket.';
          items: {
            $ref: '#/components/schemas/contact_reference';
          };
        };
      };
    };
    ticket_custom_attributes: {
      title: 'Ticket Attributes';
      type: 'object';
      description: 'An object containing the different attributes associated to the ticket as key-value pairs. For the default title and description attributes, the keys are `_default_title_` and `_default_description_`.';
      additionalProperties: {
        anyOf: [
          {
            type: 'string';
            nullable: true;
          },
          {
            type: 'number';
          },
          {
            type: 'boolean';
          },
          {
            type: 'array';
          },
          {
            $ref: '#/components/schemas/file_attribute';
          },
        ];
      };
      example: {
        _default_title_: 'Found a bug';
        _default_description_: "The button's not working";
      };
    };
    ticket_note: {
      title: 'A Ticket Part representing a note';
      type: 'object';
      description: 'A Ticket Part representing a note in the ticket';
      properties: {
        type: {
          type: 'string';
          description: 'Always ticket_part';
          example: 'ticket_part';
          enum: ['ticket_part'];
        };
        id: {
          type: 'string';
          description: 'The id representing the note.';
          example: '3';
        };
        part_type: {
          type: 'string';
          description: 'Always note';
          example: 'note';
          enum: ['note'];
        };
        body: {
          type: 'string';
          nullable: true;
          description: 'The message body, which may contain HTML.';
          example: '<p>Okay!</p>';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the note was created.';
          example: 1663597223;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The last time the note was updated.';
          example: 1663597260;
        };
        author: {
          $ref: '#/components/schemas/ticket_part_author';
        };
        attachments: {
          title: 'Ticket part attachments';
          type: 'array';
          description: 'A list of attachments for the part.';
          items: {
            $ref: '#/components/schemas/part_attachment';
          };
        };
        redacted: {
          type: 'boolean';
          description: 'Whether or not the ticket part has been redacted.';
          example: false;
        };
      };
    };
    ticket_part: {
      title: 'Ticket Part';
      type: 'object';
      'x-tags': ['Tickets'];
      description: 'A Ticket Part represents a message in the ticket.';
      properties: {
        type: {
          type: 'string';
          description: 'Always ticket_part';
          example: 'ticket_part';
        };
        id: {
          type: 'string';
          description: 'The id representing the ticket part.';
          example: '3';
        };
        part_type: {
          type: 'string';
          description: 'The type of ticket part.';
          example: 'comment';
        };
        body: {
          type: 'string';
          nullable: true;
          description: 'The message body, which may contain HTML.';
          example: '<p>Okay!</p>';
        };
        previous_ticket_state: {
          type: 'string';
          enum: ['submitted', 'in_progress', 'waiting_on_customer', 'resolved'];
          description: 'The previous state of the ticket.';
          example: 'submitted';
        };
        ticket_state: {
          type: 'string';
          enum: ['submitted', 'in_progress', 'waiting_on_customer', 'resolved'];
          description: 'The state of the ticket.';
          example: 'submitted';
        };
        created_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The time the ticket part was created.';
          example: 1663597223;
        };
        updated_at: {
          type: 'integer';
          format: 'date-time';
          description: 'The last time the ticket part was updated.';
          example: 1663597260;
        };
        assigned_to: {
          $ref: '#/components/schemas/reference';
          nullable: true;
          description: 'The id of the admin that was assigned the ticket by this ticket_part (null if there has been no change in assignment.)';
        };
        author: {
          $ref: '#/components/schemas/ticket_part_author';
        };
        attachments: {
          title: 'Ticket part attachments';
          type: 'array';
          description: 'A list of attachments for the part.';
          items: {
            $ref: '#/components/schemas/part_attachment';
          };
        };
        external_id: {
          type: 'string';
          nullable: true;
          description: 'The external id of the ticket part';
          example: 'abcd1234';
        };
        redacted: {
          type: 'boolean';
          description: 'Whether or not the ticket part has been redacted.';
          example: false;
        };
      };
    };
    ticket_part_author: {
      title: 'Ticket part author';
      type: 'object';
      description: 'The author that wrote or triggered the part. Can be a bot, admin, team or user.';
      properties: {
        type: {
          type: 'string';
          enum: ['admin', 'bot', 'team'];
        };
        id: {
          type: 'string';
          description: 'The id of the author';
          example: '274';
        };
        name: {
          type: 'string';
          nullable: true;
          description: 'The name of the author';
          example: 'Operator';
        };
        email: {
          type: 'string';
          format: 'email';
          description: 'The email of the author';
          example: 'operator+abcd1234@intercom.io';
        };
      };
    };
    ticket_parts: {
      title: 'Ticket Parts';
      type: 'object';
      description: 'A list of Ticket Part objects for each note and event in the ticket. There is a limit of 500 parts.';
      properties: {
        type: {
          type: 'string';
          description: '';
          enum: ['ticket_part.list'];
          example: 'ticket_part.list';
        };
        ticket_parts: {
          title: 'Tickt Parts';
          type: 'array';
          description: 'A list of Ticket Part objects for each ticket. There is a limit of 500 parts.';
          items: {
            $ref: '#/components/schemas/ticket_part';
          };
        };
        total_count: {
          type: 'integer';
          description: '';
          example: 2;
        };
      };
    };
    ticket_request_custom_attributes: {
      title: 'Ticket Attributes';
      type: 'object';
      description: 'The attributes set on the ticket. When setting the default title and description attributes, the attribute keys that should be used are `_default_title_` and `_default_description_`. When setting ticket type attributes of the list attribute type, the key should be the attribute name and the value of the attribute should be the list item id, obtainable by [listing the ticket type](ref:get_ticket-types). For example, if the ticket type has an attribute called `priority` of type `list`, the key should be `priority` and the value of the attribute should be the guid of the list item (e.g. `de1825a0-0164-4070-8ca6-13e22462fa7e`).';
      additionalProperties: {
        anyOf: [
          {
            type: 'string';
            nullable: true;
          },
          {
            type: 'number';
          },
          {
            type: 'boolean';
          },
          {
            type: 'array';
          },
        ];
      };
      example: {
        _default_title_: 'Found a bug';
        _default_description_: 'The button is not working';
      };
    };
    ticket_type: {
      title: 'Ticket Type';
      type: 'object';
      'x-tags': ['Tickets'];
      description: 'A ticket type, used to define the data fields to be captured in a ticket.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `ticket_type`.";
          example: 'ticket_type';
        };
        id: {
          type: 'string';
          description: 'The id representing the ticket type.';
          example: '1295';
        };
        name: {
          type: 'string';
          description: 'The name of the ticket type';
          example: 'Bug';
        };
        description: {
          type: 'string';
          description: 'The description of the ticket type';
          example: 'A bug that has been reported.';
        };
        icon: {
          type: 'string';
          description: 'The icon of the ticket type';
          example: '🐞';
        };
        workspace_id: {
          type: 'string';
          description: 'The id of the workspace that the ticket type belongs to.';
          example: 'ecahpwf5';
        };
        ticket_type_attributes: {
          $ref: '#/components/schemas/ticket_type_attribute_list';
        };
        archived: {
          type: 'boolean';
          description: 'Whether the ticket type is archived or not.';
          example: false;
        };
        created_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'The date and time the ticket type was created.';
        };
        updated_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'The date and time the ticket type was last updated.';
        };
      };
    };
    ticket_type_attribute: {
      title: 'Ticket Type Attribute';
      type: 'object';
      description: 'Ticket type attribute, used to define each data field to be captured in a ticket.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `ticket_type_attribute`.";
          example: 'ticket_type_attribute';
        };
        id: {
          type: 'string';
          description: 'The id representing the ticket type attribute.';
          example: '1';
        };
        workspace_id: {
          type: 'string';
          description: 'The id of the workspace that the ticket type attribute belongs to.';
          example: 'ecahpwf5';
        };
        name: {
          type: 'string';
          description: 'The name of the ticket type attribute';
          example: 'Title';
        };
        description: {
          type: 'string';
          description: 'The description of the ticket type attribute';
          example: 'Bug title.';
        };
        data_type: {
          type: 'string';
          description: 'The type of the data attribute (allowed values: "string list integer decimal boolean datetime files")';
          example: 'string';
        };
        input_options: {
          type: 'object';
          description: 'Input options for the attribute';
          example: 'multiline: true';
        };
        order: {
          type: 'integer';
          description: 'The order of the attribute against other attributes';
          example: 1;
        };
        required_to_create: {
          type: 'boolean';
          description: 'Whether the attribute is required or not for teammates.';
          default: false;
          example: false;
        };
        required_to_create_for_contacts: {
          type: 'boolean';
          description: 'Whether the attribute is required or not for contacts.';
          default: false;
          example: false;
        };
        visible_on_create: {
          type: 'boolean';
          description: 'Whether the attribute is visible or not to teammates.';
          default: true;
          example: false;
        };
        visible_to_contacts: {
          type: 'boolean';
          description: 'Whether the attribute is visible or not to contacts.';
          default: true;
          example: false;
        };
        default: {
          type: 'boolean';
          description: 'Whether the attribute is built in or not.';
          example: true;
        };
        ticket_type_id: {
          type: 'integer';
          description: 'The id of the ticket type that the attribute belongs to.';
          example: 42;
        };
        archived: {
          type: 'boolean';
          description: 'Whether the ticket type attribute is archived or not.';
          example: false;
        };
        created_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'The date and time the ticket type attribute was created.';
        };
        updated_at: {
          type: 'integer';
          format: 'timestamp';
          description: 'The date and time the ticket type attribute was last updated.';
        };
      };
    };
    ticket_type_attribute_list: {
      title: 'Ticket Type Attributes';
      type: 'object';
      description: 'A list of attributes associated with a given ticket type.';
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `ticket_type_attributes.list`.";
        };
        ticket_type_attributes: {
          type: 'array';
          description: 'A list of ticket type attributes associated with a given ticket type.';
          items: {
            $ref: '#/components/schemas/ticket_type_attribute';
          };
        };
      };
    };
    ticket_type_list: {
      title: 'Ticket Types';
      type: 'object';
      description: 'A list of ticket types associated with a given workspace.';
      properties: {
        type: {
          type: 'string';
          description: "String representing the object's type. Always has the value `ticket_type.list`.";
        };
        ticket_types: {
          type: 'array';
          description: 'A list of ticket_types associated with a given workspace.';
          items: {
            $ref: '#/components/schemas/ticket_type';
          };
        };
      };
    };
    translation: {
      title: 'Translation';
      type: 'object';
      description: 'A translation object contains the localised details of a subscription type.';
      properties: {
        name: {
          type: 'string';
          description: 'The localised name of the subscription type.';
          example: 'Announcements';
        };
        description: {
          type: 'string';
          description: 'The localised description of the subscription type.';
          example: 'Offers, product and feature announcements';
        };
        locale: {
          type: 'string';
          description: 'The two character identifier for the language of the translation object.';
          example: 'en';
        };
      };
    };
    untag_company_request: {
      description: 'You can tag a single company or a list of companies.';
      type: 'object';
      title: 'Untag Company Request Payload';
      properties: {
        name: {
          type: 'string';
          description: 'The name of the tag which will be untagged from the company';
          example: 'Independent';
        };
        companies: {
          type: 'array';
          items: {
            properties: {
              id: {
                type: 'string';
                description: 'The Intercom defined id representing the company.';
                example: '531ee472cce572a6ec000006';
              };
              company_id: {
                type: 'string';
                description: 'The company id you have defined for the company.';
                example: '6';
              };
              untag: {
                type: 'boolean';
                description: 'Always set to true';
                example: 'true';
              };
            };
          };
          description: 'The id or company_id of the company can be passed as input parameters.';
        };
      };
      required: ['name', 'companies'];
    };
    update_article_request: {
      description: 'You can Update an Article';
      type: 'object';
      title: 'Update Article Request Payload';
      nullable: true;
      properties: {
        title: {
          type: 'string';
          description: "The title of the article.For multilingual articles, this will be the title of the default language's content.";
          example: 'Thanks for everything';
        };
        description: {
          type: 'string';
          description: "The description of the article. For multilingual articles, this will be the description of the default language's content.";
          example: 'Description of the Article';
        };
        body: {
          type: 'string';
          description: "The content of the article. For multilingual articles, this will be the body of the default language's content.";
          example: '<p>This is the body in html</p>';
        };
        author_id: {
          type: 'integer';
          description: "The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace.";
          example: 1295;
        };
        state: {
          type: 'string';
          description: "Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content.";
          enum: ['published', 'draft'];
          example: 'draft';
        };
        parent_id: {
          type: 'string';
          description: "The id of the article's parent collection or section. An article without this field stands alone.";
          example: '18';
        };
        parent_type: {
          type: 'string';
          description: 'The type of parent, which can either be a `collection` or `section`.';
          example: 'collection';
        };
        translated_content: {
          $ref: '#/components/schemas/article_translated_content';
        };
      };
    };
    update_collection_request: {
      description: 'You can update a collection';
      type: 'object';
      title: 'Update Collection Request Payload';
      properties: {
        name: {
          type: 'string';
          description: "The name of the collection. For multilingual collections, this will be the name of the default language's content.";
          example: 'collection 51';
        };
        description: {
          type: 'string';
          description: "The description of the collection. For multilingual collections, this will be the description of the default language's content.";
          example: 'English description';
        };
        translated_content: {
          nullable: true;
          $ref: '#/components/schemas/group_translated_content';
        };
      };
    };
    update_contact_request: {
      description: 'You can update a contact';
      type: 'object';
      title: 'Update Contact Request Payload';
      properties: {
        role: {
          type: 'string';
          description: 'The role of the contact.';
        };
        external_id: {
          type: 'string';
          description: 'A unique identifier for the contact which is given to Intercom';
        };
        email: {
          type: 'string';
          description: 'The contacts email';
          example: 'jdoe@example.com';
        };
        phone: {
          type: 'string';
          nullable: true;
          description: 'The contacts phone';
          example: '+353871234567';
        };
        name: {
          type: 'string';
          nullable: true;
          description: 'The contacts name';
          example: 'John Doe';
        };
        avatar: {
          type: 'string';
          nullable: true;
          description: 'An image URL containing the avatar of a contact';
          example: 'https://www.example.com/avatar_image.jpg';
        };
        signed_up_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: 'The time specified for when a contact signed up';
          example: 1571672154;
        };
        last_seen_at: {
          type: 'integer';
          format: 'date-time';
          nullable: true;
          description: 'The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually)';
          example: 1571672154;
        };
        owner_id: {
          type: 'integer';
          nullable: true;
          description: 'The id of an admin that has been assigned account ownership of the contact';
          example: 123;
        };
        unsubscribed_from_emails: {
          type: 'boolean';
          nullable: true;
          description: 'Whether the contact is unsubscribed from emails';
          example: true;
        };
        custom_attributes: {
          type: 'object';
          nullable: true;
          description: 'The custom attributes which are set for the contact';
        };
      };
    };
    update_conversation_request: {
      title: 'Update Conversation Request';
      type: 'object';
      description: 'Payload of the request to update a conversation';
      properties: {
        read: {
          type: 'boolean';
          description: 'Mark a conversation as read within Intercom.';
          example: true;
        };
        custom_attributes: {
          $ref: '#/components/schemas/custom_attributes';
        };
      };
    };
    update_data_attribute_request: {
      description: '';
      type: 'object';
      title: 'Update Data Attribute Request';
      properties: {
        archived: {
          type: 'boolean';
          description: 'Whether the attribute is to be archived or not.';
          example: false;
        };
        description: {
          type: 'string';
          description: 'The readable description you see in the UI for the attribute.';
          example: 'My Data Attribute Description';
        };
        options: {
          type: 'array';
          description: 'To create list attributes. Provide a set of hashes with `value` as the key of the options you want to make. `data_type` must be `string`.';
          items: {
            type: 'string';
          };
          example: ['option1', 'option2'];
        };
        messenger_writable: {
          type: 'boolean';
          description: 'Can this attribute be updated by the Messenger';
          example: false;
        };
      };
    };
    update_section_request: {
      description: 'You can update a Section';
      type: 'object';
      title: 'Update Section Request Payload';
      properties: {
        name: {
          type: 'string';
          description: "The name of the collection. For multilingual collections, this will be the name of the default language's content.";
          example: 'Section 51';
        };
        parent_id: {
          type: 'integer';
          description: 'The id for the collection this section will be within.';
          example: 18;
        };
        translated_content: {
          nullable: true;
          $ref: '#/components/schemas/group_translated_content';
        };
      };
    };
    update_ticket_request: {
      description: 'You can update a Ticket';
      type: 'object';
      title: 'Update Ticket Request Payload';
      properties: {
        ticket_attributes: {
          type: 'object';
          description: 'The attributes set on the ticket.';
          example: {
            _default_title_: 'example';
            _default_description_: 'having a problem';
          };
        };
        state: {
          type: 'string';
          enum: ['in_progress', 'waiting_on_customer', 'resolved'];
          description: 'The state of the ticket.';
          example: 'submitted';
        };
        is_shared: {
          type: 'boolean';
          description: 'Specify whether the ticket is visible to users.';
          example: true;
        };
        assignment: {
          type: 'object';
          properties: {
            admin_id: {
              type: 'string';
              description: 'The ID of the admin performing the action.';
              example: '123';
            };
            assignee_id: {
              type: 'string';
              description: 'The ID of the admin or team to which the ticket is assigned. Set this 0 to unassign it.';
              example: '123';
            };
          };
        };
      };
    };
    update_ticket_type_attribute_request: {
      description: 'You can update a Ticket Type Attribute';
      type: 'object';
      title: 'Update Ticket Type Attribute Request Payload';
      properties: {
        name: {
          type: 'string';
          description: 'The name of the ticket type attribute';
          example: 'Bug Priority';
        };
        description: {
          type: 'string';
          description: 'The description of the attribute presented to the teammate or contact';
          example: 'Priority level of the bug';
        };
        required_to_create: {
          type: 'boolean';
          description: 'Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.';
          default: false;
          example: false;
        };
        required_to_create_for_contacts: {
          type: 'boolean';
          description: 'Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.';
          default: false;
          example: false;
        };
        visible_on_create: {
          type: 'boolean';
          description: 'Whether the attribute is visible to teammates when creating a ticket in Inbox.';
          default: true;
          example: true;
        };
        visible_to_contacts: {
          type: 'boolean';
          description: 'Whether the attribute is visible to contacts when creating a ticket in Messenger.';
          default: true;
          example: true;
        };
        multiline: {
          type: 'boolean';
          description: 'Whether the attribute allows multiple lines of text (only applicable to string attributes)';
          example: false;
        };
        list_items: {
          type: 'string';
          description: 'A comma delimited list of items for the attribute value (only applicable to list attributes)';
          example: 'Low Priority,Medium Priority,High Priority';
        };
        allow_multiple_values: {
          type: 'boolean';
          description: 'Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)';
          example: false;
        };
        archived: {
          type: 'boolean';
          description: 'Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets)';
          example: false;
        };
      };
    };
    update_ticket_type_request: {
      description: 'The request payload for updating a ticket type.\nYou can copy the `icon` property for your ticket type from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)\n';
      type: 'object';
      title: 'Update Ticket Type Request Payload';
      nullable: true;
      properties: {
        name: {
          type: 'string';
          description: 'The name of the ticket type.';
          example: 'Bug';
        };
        description: {
          type: 'string';
          description: 'The description of the ticket type.';
          example: 'A bug has been occured';
        };
        icon: {
          type: 'string';
          description: 'The icon of the ticket type.';
          example: '🐞';
          default: '🎟️';
        };
        archived: {
          type: 'boolean';
          description: 'The archived status of the ticket type.';
          example: false;
        };
        is_internal: {
          type: 'boolean';
          description: 'Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. This is currently a limited attribute.';
          example: false;
          default: false;
        };
      };
    };
    update_visitor_request: {
      description: 'Update an existing visitor.';
      type: 'object';
      title: 'Update Visitor Request Payload';
      properties: {
        id: {
          type: 'string';
          description: 'A unique identified for the visitor which is given by Intercom.';
          example: '8a88a590-e';
        };
        user_id: {
          type: 'string';
          description: 'A unique identified for the visitor which is given by you.';
          example: '123';
        };
        name: {
          type: 'string';
          description: "The visitor's name.";
          example: 'Christian Bale';
        };
        custom_attributes: {
          type: 'object';
          description: 'The custom attributes which are set for the visitor.';
          additionalProperties: {
            type: 'string';
          };
          example: {
            paid_subscriber: true;
            monthly_spend: 155.5;
            team_mates: 9;
          };
        };
      };
      anyOf: [
        {
          required: ['id'];
        },
        {
          required: ['user_id'];
        },
      ];
    };
    visitor: {
      title: 'Visitor';
      type: 'object';
      description: 'Visitors are useful for representing anonymous people that have not yet been identified. They usually represent website visitors. Visitors are not visible in Intercom platform. The Visitors resource provides methods to fetch, update, convert and delete.';
      nullable: true;
      properties: {
        type: {
          type: 'string';
          description: "Value is 'visitor'";
          default: 'visitor';
          example: 'visitor';
        };
        id: {
          type: 'string';
          description: 'The Intercom defined id representing the Visitor.';
          example: '530370b477ad7120001d';
        };
        user_id: {
          type: 'string';
          description: 'Automatically generated identifier for the Visitor.';
          example: '8a88a590-e1c3-41e2-a502-e0649dbf721c';
        };
        anonymous: {
          type: 'boolean';
          description: 'Identifies if this visitor is anonymous.';
          example: false;
        };
        email: {
          type: 'string';
          format: 'email';
          description: 'The email of the visitor.';
          example: 'jane.doe@example.com';
        };
        phone: {
          type: 'string';
          nullable: true;
          description: 'The phone number of the visitor.';
          example: '555-555-5555';
        };
        name: {
          type: 'string';
          nullable: true;
          description: 'The name of the visitor.';
          example: 'Jane Doe';
        };
        pseudonym: {
          type: 'string';
          nullable: true;
          description: 'The pseudonym of the visitor.';
          example: 'Red Duck from Dublin';
        };
        avatar: {
          type: 'object';
          properties: {
            type: {
              type: 'string';
              description: '';
              default: 'avatar';
              example: 'avatar';
            };
            image_url: {
              type: 'string';
              format: 'uri';
              nullable: true;
              description: 'This object represents the avatar associated with the visitor.';
              example: 'https://example.com/avatar.png';
            };
          };
        };
        app_id: {
          type: 'string';
          description: 'The id of the app the visitor is associated with.';
          example: 'hfi1bx4l';
        };
        companies: {
          type: 'object';
          properties: {
            type: {
              type: 'string';
              description: 'The type of the object';
              enum: ['company.list'];
              example: 'company.list';
            };
            companies: {
              type: 'array';
              items: {
                $ref: '#/components/schemas/company';
              };
            };
          };
        };
        location_data: {
          type: 'object';
          properties: {
            type: {
              type: 'string';
              description: '';
              default: 'location_data';
              example: 'location_data';
            };
            city_name: {
              type: 'string';
              description: 'The city name of the visitor.';
              example: 'Dublin';
            };
            continent_code: {
              type: 'string';
              description: 'The continent code of the visitor.';
              example: 'EU';
            };
            country_code: {
              type: 'string';
              description: 'The country code of the visitor.';
              example: 'IRL';
            };
            country_name: {
              type: 'string';
              description: 'The country name of the visitor.';
              example: 'Ireland';
            };
            postal_code: {
              type: 'string';
              description: 'The postal code of the visitor.';
              example: 'D02 N960';
            };
            region_name: {
              type: 'string';
              description: 'The region name of the visitor.';
              example: 'Leinster';
            };
            timezone: {
              type: 'string';
              description: 'The timezone of the visitor.';
              example: 'Europe/Dublin';
            };
          };
        };
        las_request_at: {
          type: 'integer';
          description: 'The time the Lead last recorded making a request.';
          example: 1663597260;
        };
        created_at: {
          type: 'integer';
          description: 'The time the Visitor was added to Intercom.';
          example: 1663597223;
        };
        remote_created_at: {
          type: 'integer';
          description: 'The time the Visitor was added to Intercom.';
          example: 1663597223;
        };
        signed_up_at: {
          type: 'integer';
          description: 'The time the Visitor signed up for your product.';
          example: 1663597223;
        };
        updated_at: {
          type: 'integer';
          description: 'The last time the Visitor was updated.';
          example: 1663597260;
        };
        session_count: {
          type: 'integer';
          description: 'The number of sessions the Visitor has had.';
          example: 1;
        };
        social_profiles: {
          type: 'object';
          properties: {
            type: {
              type: 'string';
              description: 'The type of the object';
              enum: ['social_profile.list'];
              example: 'social_profile.list';
            };
            social_profiles: {
              type: 'array';
              items: {
                type: 'string';
              };
            };
          };
        };
        owner_id: {
          type: 'string';
          nullable: true;
          description: 'The id of the admin that owns the Visitor.';
          example: '5169261';
        };
        unsubscribed_from_emails: {
          type: 'boolean';
          description: 'Whether the Visitor is unsubscribed from emails.';
          example: false;
        };
        marked_email_as_spam: {
          type: 'boolean';
          description: 'Identifies if this visitor has marked an email as spam.';
          example: false;
        };
        has_hard_bounced: {
          type: 'boolean';
          description: 'Identifies if this visitor has had a hard bounce.';
          example: false;
        };
        tags: {
          type: 'object';
          properties: {
            type: {
              type: 'string';
              description: 'The type of the object';
              enum: ['tag.list'];
              example: 'tag.list';
            };
            tags: {
              type: 'array';
              items: {
                properties: {
                  type: {
                    type: 'string';
                    description: 'The type of the object';
                    enum: ['tag'];
                    example: 'tag';
                  };
                  id: {
                    type: 'string';
                    description: 'The id of the tag.';
                    example: '8482';
                  };
                  name: {
                    type: 'string';
                    description: 'The name of the tag.';
                    example: 'tag_name';
                  };
                };
              };
            };
          };
        };
        segments: {
          type: 'object';
          properties: {
            type: {
              type: 'string';
              description: 'The type of the object';
              enum: ['segment.list'];
              example: 'segment.list';
            };
            segments: {
              type: 'array';
              items: {
                type: 'string';
              };
            };
          };
        };
        custom_attributes: {
          type: 'object';
          description: 'The custom attributes you have set on the Visitor.';
          additionalProperties: {
            type: 'string';
          };
        };
        referrer: {
          type: 'string';
          nullable: true;
          description: 'The referer of the visitor.';
          example: 'https://www.google.com/';
        };
        utm_campaign: {
          type: 'string';
          nullable: true;
          description: 'The utm_campaign of the visitor.';
          example: 'intercom-link';
        };
        utm_content: {
          type: 'string';
          nullable: true;
          description: 'The utm_content of the visitor.';
          example: 'banner';
        };
        utm_medium: {
          type: 'string';
          nullable: true;
          description: 'The utm_medium of the visitor.';
          example: 'email';
        };
        utm_source: {
          type: 'string';
          nullable: true;
          description: 'The utm_source of the visitor.';
          example: 'Intercom';
        };
        utm_term: {
          type: 'string';
          nullable: true;
          description: 'The utm_term of the visitor.';
          example: 'messenger';
        };
        do_not_track: {
          type: 'boolean';
          nullable: true;
          description: 'Identifies if this visitor has do not track enabled.';
          example: false;
        };
      };
    };
    visitor_deleted_object: {
      title: 'Visitor Deleted Object';
      type: 'object';
      description: 'Response returned when an object is deleted';
      properties: {
        id: {
          type: 'string';
          description: 'The unique identifier for the visitor which is given by Intercom.';
          example: '530370b477ad7120001d';
        };
        type: {
          type: 'string';
          description: 'The type of object which was deleted';
          enum: ['visitor'];
          example: 'visitor';
        };
        user_id: {
          type: 'string';
          description: 'Automatically generated identifier for the Visitor.';
          example: '8a88a590-e1c3-41e2-a502-e0649dbf721c';
        };
      };
    };
  };
  securitySchemes: {
    bearerAuth: {
      type: 'http';
      scheme: 'bearer';
    };
  };
};
export const components = {
  schemas: {
    activity_log: {
      title: 'Activity Log',
      type: 'object',
      description: 'Activities performed by Admins.',
      nullable: true,
      properties: {
        id: {
          type: 'string',
          description: 'The id representing the activity.',
          example: '6',
        },
        performed_by: {
          type: 'object',
          description: 'Details about the Admin involved in the activity.',
          properties: {
            type: {
              type: 'string',
              description: "String representing the object's type. Always has the value `admin`.",
              example: 'admin',
            },
            id: {
              type: 'string',
              description: 'The id representing the admin.',
              example: '1295',
            },
            email: {
              type: 'string',
              description: 'The email of the admin.',
              example: 'john@example.com',
            },
            ip: {
              type: 'string',
              description: 'The IP address of the admin.',
              example: '198.51.100.255',
            },
          },
        },
        metadata: {
          $ref: '#/components/schemas/activity_log_metadata',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the activity was created.',
          example: 1671028894,
        },
        activity_type: {
          type: 'string',
          enum: [
            'admin_assignment_limit_change',
            'admin_away_mode_change',
            'admin_deletion',
            'admin_deprovisioned',
            'admin_impersonation_end',
            'admin_impersonation_start',
            'admin_invite_change',
            'admin_invite_creation',
            'admin_invite_deletion',
            'admin_login_failure',
            'admin_login_success',
            'admin_logout',
            'admin_password_reset_request',
            'admin_password_reset_success',
            'admin_permission_change',
            'admin_provisioned',
            'admin_two_factor_auth_change',
            'admin_unauthorized_sign_in_method',
            'app_admin_join',
            'app_authentication_method_change',
            'app_data_deletion',
            'app_data_export',
            'app_google_sso_domain_change',
            'app_identity_verification_change',
            'app_name_change',
            'app_outbound_address_change',
            'app_package_installation',
            'app_package_token_regeneration',
            'app_package_uninstallation',
            'app_team_creation',
            'app_team_deletion',
            'app_team_membership_modification',
            'app_timezone_change',
            'app_webhook_creation',
            'app_webhook_deletion',
            'articles_in_messenger_enabled_change',
            'bulk_delete',
            'bulk_export',
            'campaign_deletion',
            'campaign_state_change',
            'conversation_part_deletion',
            'conversation_topic_change',
            'conversation_topic_creation',
            'conversation_topic_deletion',
            'help_center_settings_change',
            'inbound_conversations_change',
            'inbox_access_change',
            'message_deletion',
            'message_state_change',
            'messenger_look_and_feel_change',
            'messenger_search_required_change',
            'messenger_spaces_change',
            'office_hours_change',
            'role_change',
            'role_creation',
            'role_deletion',
            'ruleset_activation_title_preview',
            'ruleset_creation',
            'ruleset_deletion',
            'search_browse_enabled_change',
            'search_browse_required_change',
            'seat_change',
            'seat_revoke',
            'security_settings_change',
            'temporary_expectation_change',
            'upfront_email_collection_change',
            'welcome_message_change',
          ],
          example: 'app_name_change',
        },
        activity_description: {
          type: 'string',
          description: 'A sentence or two describing the activity.',
          example: 'Admin updated the app\'s name to "My App".',
        },
      },
    },
    activity_log_list: {
      title: 'Paginated Response',
      type: 'object',
      description: 'A paginated list of activity logs.',
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `activity_log.list`.",
          example: 'activity_log.list',
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
        activity_logs: {
          type: 'array',
          description: 'An array of activity logs',
          items: {
            $ref: '#/components/schemas/activity_log',
          },
        },
      },
    },
    activity_log_metadata: {
      title: 'Activity Log Metadata',
      type: 'object',
      description: 'Additional data provided about Admin activity.',
      nullable: true,
      properties: {
        sign_in_method: {
          type: 'string',
          nullable: true,
          description: 'The way the admin signed in.',
          example: 'email_password',
        },
        external_id: {
          type: 'string',
          nullable: true,
          description: 'The unique identifier for the contact which is provided by the Client.',
          example: 'f3b87a2e09d514c6c2e79b9a',
        },
        away_mode: {
          type: 'boolean',
          nullable: true,
          description: 'The away mode status which is set to true when away and false when returned.',
          example: true,
        },
        away_status_reason: {
          type: 'string',
          nullable: true,
          description: 'The reason the Admin is away.',
          example: '😌 On a break',
        },
        reassign_conversations: {
          type: 'boolean',
          nullable: true,
          description: 'Indicates if conversations should be reassigned while an Admin is away.',
          example: false,
        },
        source: {
          type: 'string',
          nullable: true,
          description: 'The action that initiated the status change.',
          example: 'admin update from web - Admin id: 93',
        },
        auto_changed: {
          type: 'string',
          nullable: true,
          description: 'Indicates if the status was changed automatically or manually.',
          example: false,
        },
        update_by: {
          type: 'integer',
          nullable: true,
          description: 'The ID of the Admin who initiated the activity.',
          example: 93,
        },
        update_by_name: {
          type: 'string',
          nullable: true,
          description: 'The name of the Admin who initiated the activity.',
          example: 'Joe Bloggs',
        },
      },
    },
    addressable_list: {
      title: 'Addressable List',
      type: 'object',
      nullable: false,
      description: 'A list used to access other resources from a parent model.',
      properties: {
        type: {
          type: 'string',
          format: 'uri',
          description: 'The addressable object type',
          example: 'note',
        },
        id: {
          type: 'string',
          description: 'The id of the addressable object',
          example: '123',
        },
        url: {
          type: 'string',
          format: 'uri',
          description: 'Url to get more company resources for this contact',
          example: '/contacts/5ba682d23d7cf92bef87bfd4/notes',
        },
      },
    },
    admin: {
      title: 'Admin',
      type: 'object',
      'x-tags': ['Admins'],
      description: 'Admins are teammate accounts that have access to a workspace.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `admin`.",
          example: 'admin',
        },
        id: {
          type: 'string',
          description: 'The id representing the admin.',
          example: '1295',
        },
        name: {
          type: 'string',
          description: 'The name of the admin.',
          example: 'Hoban Washburne',
        },
        email: {
          type: 'string',
          description: 'The email of the admin.',
          example: 'wash@serenity.io',
        },
        job_title: {
          type: 'string',
          description: 'The job title of the admin.',
          example: 'Philosopher',
        },
        away_mode_enabled: {
          type: 'boolean',
          description: 'Identifies if this admin is currently set in away mode.',
          example: false,
        },
        away_mode_reassign: {
          type: 'boolean',
          description:
            'Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.',
          example: false,
        },
        has_inbox_seat: {
          type: 'boolean',
          description: 'Identifies if this admin has a paid inbox seat to restrict/allow features that require them.',
          example: true,
        },
        team_ids: {
          type: 'array',
          description: 'This object represents the avatar associated with the admin.',
          example: [814865],
          items: {
            type: 'integer',
          },
        },
        avatar: {
          type: 'string',
          format: 'uri',
          nullable: true,
          description: 'Image for the associated team or teammate',
          example: 'https://picsum.photos/200/300',
        },
        team_priority_level: {
          $ref: '#/components/schemas/team_priority_level',
        },
      },
    },
    admin_list: {
      title: 'Admins',
      type: 'object',
      description: 'A list of admins associated with a given workspace.',
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `admin.list`.",
          example: 'admin.list',
        },
        admins: {
          type: 'array',
          description: 'A list of admins associated with a given workspace.',
          items: {
            $ref: '#/components/schemas/admin',
          },
        },
      },
    },
    admin_priority_level: {
      title: 'Admin Priority Level',
      type: 'object',
      nullable: true,
      description: 'Admin priority levels for the team',
      properties: {
        primary_admin_ids: {
          type: 'array',
          description: 'The primary admin ids for the team',
          nullable: true,
          example: [493881],
          items: {
            type: 'integer',
          },
        },
        secondary_admin_ids: {
          type: 'array',
          description: 'The secondary admin ids for the team',
          nullable: true,
          example: [814865],
          items: {
            type: 'integer',
          },
        },
      },
    },
    admin_reply_conversation_request: {
      title: 'Admin Reply',
      type: 'object',
      description: 'Payload of the request to reply on behalf of an admin',
      properties: {
        message_type: {
          type: 'string',
          enum: ['comment', 'note'],
        },
        type: {
          type: 'string',
          enum: ['admin'],
          example: 'admin',
        },
        body: {
          type: 'string',
          description:
            'The text body of the reply. Notes accept some HTML formatting. Must be present for comment and note message types.',
          example: 'Hello there!',
        },
        admin_id: {
          type: 'string',
          description: 'The id of the admin who is authoring the comment.',
          example: '3156780',
        },
        created_at: {
          type: 'integer',
          description: 'The time the reply was created. If not provided, the current time will be used.',
          example: 1590000000,
        },
        attachment_urls: {
          type: 'array',
          description: 'A list of image URLs that will be added as attachments. You can include up to 10 URLs.',
          items: {
            type: 'string',
            format: 'uri',
          },
          maxItems: 10,
        },
        attachment_files: {
          type: 'array',
          description: 'A list of files that will be added as attachments. You can include up to 10 files',
          items: {
            $ref: '#/components/schemas/conversation_attachment_files',
          },
          maxItems: 10,
        },
      },
      required: ['message_type', 'type', 'admin_id'],
    },
    admin_with_app: {
      title: 'Admin',
      type: 'object',
      description: 'Admins are the teammate accounts that have access to a workspace',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `admin`.",
          example: 'admin',
        },
        id: {
          type: 'string',
          description: 'The id representing the admin.',
          example: '1295',
        },
        name: {
          type: 'string',
          description: 'The name of the admin.',
          example: 'Hoban Washburne',
        },
        email: {
          type: 'string',
          description: 'The email of the admin.',
          example: 'wash@serenity.io',
        },
        job_title: {
          type: 'string',
          description: 'The job title of the admin.',
          example: 'Philosopher',
        },
        away_mode_enabled: {
          type: 'boolean',
          description: 'Identifies if this admin is currently set in away mode.',
          example: false,
        },
        away_mode_reassign: {
          type: 'boolean',
          description:
            'Identifies if this admin is set to automatically reassign new conversations to the apps default inbox.',
          example: false,
        },
        has_inbox_seat: {
          type: 'boolean',
          description: 'Identifies if this admin has a paid inbox seat to restrict/allow features that require them.',
          example: true,
        },
        team_ids: {
          type: 'array',
          description: 'This is a list of ids of the teams that this admin is part of.',
          example: [814865],
          items: {
            type: 'integer',
          },
        },
        avatar: {
          type: 'object',
          description: 'This object represents the avatar associated with the admin.',
          properties: {
            type: {
              type: 'string',
              description:
                'This is a string that identifies the type of the object. It will always have the value `avatar`.',
              default: 'avatar',
              example: 'avatar',
            },
            image_url: {
              type: 'string',
              format: 'uri',
              nullable: true,
              description: 'This object represents the avatar associated with the admin.',
              example: 'https://example.com/avatar.png',
            },
          },
        },
        email_verified: {
          type: 'boolean',
          description: "Identifies if this admin's email is verified.",
          nullable: true,
          example: true,
        },
        app: {
          $ref: '#/components/schemas/app',
          nullable: true,
          description: 'App that the admin belongs to.',
        },
      },
    },
    app: {
      title: 'App',
      type: 'object',
      description: 'App is a workspace on Intercom',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: '',
          default: 'app',
          example: 'app',
        },
        id_code: {
          type: 'string',
          description: 'The id of the app.',
          example: 'xyz789',
        },
        name: {
          type: 'string',
          description: 'The name of the app.',
          example: 'ACME',
        },
        region: {
          type: 'string',
          description: 'The Intercom region the app is located in.',
          example: 'US',
        },
        timezone: {
          type: 'string',
          description: 'The timezone of the region where the app is located.',
          example: 'America/Los_Angeles',
        },
        created_at: {
          type: 'integer',
          description: 'When the app was created.',
          example: 1671465577,
        },
        identity_verification: {
          type: 'boolean',
          description: 'Whether or not the app uses identity verification.',
          example: false,
        },
      },
    },
    article: {
      title: 'Article',
      type: 'object',
      'x-tags': ['Articles'],
      description:
        'The Articles API is a central place to gather all information and take actions on your articles. Articles can live within collections and sections, or alternatively they can stand alone.',
      properties: {
        statistics: {
          nullable: true,
          $ref: '#/components/schemas/article_statistics',
        },
      },
      allOf: [
        {
          $ref: '#/components/schemas/article_list_item',
        },
      ],
    },
    article_content: {
      title: 'Article Content',
      type: 'object',
      description: 'The Content of an Article.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - `article_content` .',
          enum: [null, 'article_content'],
          example: 'article_content',
          nullable: true,
        },
        title: {
          type: 'string',
          description: 'The title of the article.',
          example: 'How to create a new article',
        },
        description: {
          type: 'string',
          description: 'The description of the article.',
          example: 'This article will show you how to create a new article.',
        },
        body: {
          type: 'string',
          description: 'The body of the article.',
          example: 'This is the body of the article.',
        },
        author_id: {
          type: 'integer',
          description: 'The ID of the author of the article.',
          example: '5017691',
        },
        state: {
          type: 'string',
          description: 'Whether the article is `published` or is a `draft` .',
          enum: ['published', 'draft'],
          example: 'draft',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time when the article was created (seconds).',
          example: 1663597223,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time when the article was last updated (seconds).',
          example: 1663597260,
        },
        url: {
          type: 'string',
          description: 'The URL of the article.',
          example: 'http://intercom.test/help/en/articles/3-default-language',
        },
      },
    },
    article_list: {
      title: 'Articles',
      type: 'object',
      description: 'This will return a list of articles for the App.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object - `list`.',
          enum: ['list'],
          example: 'list',
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
        total_count: {
          type: 'integer',
          description: 'A count of the total number of articles.',
          example: 1,
        },
        data: {
          type: 'array',
          description: 'An array of Article objects',
          items: {
            $ref: '#/components/schemas/article_list_item',
          },
        },
      },
    },
    article_list_item: {
      title: 'Articles',
      type: 'object',
      'x-tags': ['Articles'],
      description: 'The data returned about your articles when you list them.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - `article`.',
          enum: ['article'],
          default: 'article',
          example: 'article',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the article which is given by Intercom.',
          example: '6871119',
        },
        workspace_id: {
          type: 'string',
          description: 'The id of the workspace which the article belongs to.',
          example: 'hfi1bx4l',
        },
        title: {
          type: 'string',
          description:
            "The title of the article. For multilingual articles, this will be the title of the default language's content.",
          example: 'Default language title',
        },
        description: {
          type: 'string',
          nullable: true,
          description:
            "The description of the article. For multilingual articles, this will be the description of the default language's content.",
          example: 'Default language description',
        },
        body: {
          type: 'string',
          nullable: true,
          description:
            "The body of the article in HTML. For multilingual articles, this will be the body of the default language's content.",
          example: 'Default language body in html',
        },
        author_id: {
          type: 'integer',
          description:
            "The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace.",
          example: '5017691',
        },
        state: {
          type: 'string',
          description:
            "Whether the article is `published` or is a `draft`. For multilingual articles, this will be the state of the default language's content.",
          enum: ['published', 'draft'],
          default: 'draft',
          example: 'published',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description:
            "The time when the article was created. For multilingual articles, this will be the timestamp of creation of the default language's content in seconds.",
          example: 1672928359,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description:
            "The time when the article was last updated. For multilingual articles, this will be the timestamp of last update of the default language's content in seconds.",
          example: 1672928610,
        },
        url: {
          type: 'string',
          nullable: true,
          description:
            "The URL of the article. For multilingual articles, this will be the URL of the default language's content.",
          example: 'http://intercom.test/help/en/articles/3-default-language',
        },
        parent_id: {
          type: 'integer',
          nullable: true,
          description:
            "The id of the article's parent collection or section. An article without this field stands alone.",
          example: '125685',
        },
        parent_ids: {
          type: 'array',
          description:
            "The ids of the article's parent collections or sections. An article without this field stands alone.",
          items: {
            type: 'integer',
          },
          example: [18, 19],
        },
        parent_type: {
          type: 'string',
          nullable: true,
          description: 'The type of parent, which can either be a `collection` or `section`.',
          example: 'collection',
        },
        default_locale: {
          type: 'string',
          description:
            'The default locale of the help center. This field is only returned for multilingual help centers.',
          example: 'en',
        },
        translated_content: {
          nullable: true,
          $ref: '#/components/schemas/article_translated_content',
        },
      },
    },
    article_statistics: {
      title: 'Article Statistics',
      type: 'object',
      description: 'The statistics of an article.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - `article_statistics`.',
          enum: ['article_statistics'],
          default: 'article_statistics',
          example: 'article_statistics',
        },
        views: {
          type: 'integer',
          description: 'The number of total views the article has received.',
          example: 10,
        },
        conversions: {
          type: 'integer',
          description: 'The number of conversations started from the article.',
          example: 0,
        },
        reactions: {
          type: 'integer',
          description: 'The number of total reactions the article has received.',
          example: 10,
        },
        happy_reaction_percentage: {
          type: 'number',
          format: 'float',
          description: 'The percentage of happy reactions the article has received against other types of reaction.',
          example: 40,
        },
        neutral_reaction_percentage: {
          type: 'number',
          format: 'float',
          description: 'The percentage of neutral reactions the article has received against other types of reaction.',
          example: 40,
        },
        sad_reaction_percentage: {
          type: 'number',
          format: 'float',
          description: 'The percentage of sad reactions the article has received against other types of reaction.',
          example: 20,
        },
      },
    },
    article_translated_content: {
      title: 'Article Translated Content',
      type: 'object',
      description:
        'The Translated Content of an Article. The keys are the locale codes and the values are the translated content of the article.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - article_translated_content.',
          enum: [null, 'article_translated_content'],
          example: 'article_translated_content',
          nullable: true,
        },
        ar: {
          description: 'The content of the article in Arabic',
          $ref: '#/components/schemas/article_content',
        },
        bg: {
          description: 'The content of the article in Bulgarian',
          $ref: '#/components/schemas/article_content',
        },
        bs: {
          description: 'The content of the article in Bosnian',
          $ref: '#/components/schemas/article_content',
        },
        ca: {
          description: 'The content of the article in Catalan',
          $ref: '#/components/schemas/article_content',
        },
        cs: {
          description: 'The content of the article in Czech',
          $ref: '#/components/schemas/article_content',
        },
        da: {
          description: 'The content of the article in Danish',
          $ref: '#/components/schemas/article_content',
        },
        de: {
          description: 'The content of the article in German',
          $ref: '#/components/schemas/article_content',
        },
        el: {
          description: 'The content of the article in Greek',
          $ref: '#/components/schemas/article_content',
        },
        en: {
          description: 'The content of the article in English',
          $ref: '#/components/schemas/article_content',
        },
        es: {
          description: 'The content of the article in Spanish',
          $ref: '#/components/schemas/article_content',
        },
        et: {
          description: 'The content of the article in Estonian',
          $ref: '#/components/schemas/article_content',
        },
        fi: {
          description: 'The content of the article in Finnish',
          $ref: '#/components/schemas/article_content',
        },
        fr: {
          description: 'The content of the article in French',
          $ref: '#/components/schemas/article_content',
        },
        he: {
          description: 'The content of the article in Hebrew',
          $ref: '#/components/schemas/article_content',
        },
        hr: {
          description: 'The content of the article in Croatian',
          $ref: '#/components/schemas/article_content',
        },
        hu: {
          description: 'The content of the article in Hungarian',
          $ref: '#/components/schemas/article_content',
        },
        id: {
          description: 'The content of the article in Indonesian',
          $ref: '#/components/schemas/article_content',
        },
        it: {
          description: 'The content of the article in Italian',
          $ref: '#/components/schemas/article_content',
        },
        ja: {
          description: 'The content of the article in Japanese',
          $ref: '#/components/schemas/article_content',
        },
        ko: {
          description: 'The content of the article in Korean',
          $ref: '#/components/schemas/article_content',
        },
        lt: {
          description: 'The content of the article in Lithuanian',
          $ref: '#/components/schemas/article_content',
        },
        lv: {
          description: 'The content of the article in Latvian',
          $ref: '#/components/schemas/article_content',
        },
        mn: {
          description: 'The content of the article in Mongolian',
          $ref: '#/components/schemas/article_content',
        },
        nb: {
          description: 'The content of the article in Norwegian',
          $ref: '#/components/schemas/article_content',
        },
        nl: {
          description: 'The content of the article in Dutch',
          $ref: '#/components/schemas/article_content',
        },
        pl: {
          description: 'The content of the article in Polish',
          $ref: '#/components/schemas/article_content',
        },
        pt: {
          description: 'The content of the article in Portuguese (Portugal)',
          $ref: '#/components/schemas/article_content',
        },
        ro: {
          description: 'The content of the article in Romanian',
          $ref: '#/components/schemas/article_content',
        },
        ru: {
          description: 'The content of the article in Russian',
          $ref: '#/components/schemas/article_content',
        },
        sl: {
          description: 'The content of the article in Slovenian',
          $ref: '#/components/schemas/article_content',
        },
        sr: {
          description: 'The content of the article in Serbian',
          $ref: '#/components/schemas/article_content',
        },
        sv: {
          description: 'The content of the article in Swedish',
          $ref: '#/components/schemas/article_content',
        },
        tr: {
          description: 'The content of the article in Turkish',
          $ref: '#/components/schemas/article_content',
        },
        vi: {
          description: 'The content of the article in Vietnamese',
          $ref: '#/components/schemas/article_content',
        },
        'pt-BR': {
          description: 'The content of the article in Portuguese (Brazil)',
          $ref: '#/components/schemas/article_content',
        },
        'zh-CN': {
          description: 'The content of the article in Chinese (China)',
          $ref: '#/components/schemas/article_content',
        },
        'zh-TW': {
          description: 'The content of the article in Chinese (Taiwan)',
          $ref: '#/components/schemas/article_content',
        },
      },
    },
    assign_conversation_request: {
      title: 'Assign Conversation Request',
      type: 'object',
      description: 'Payload of the request to assign a conversation',
      properties: {
        message_type: {
          type: 'string',
          enum: ['assignment'],
          example: 'assignment',
        },
        type: {
          type: 'string',
          enum: ['admin', 'team'],
          example: 'admin',
        },
        admin_id: {
          type: 'string',
          description: 'The id of the admin who is performing the action.',
          example: '12345',
        },
        assignee_id: {
          type: 'string',
          description:
            'The `id` of the `admin` or `team` which will be assigned the conversation. A conversation can be assigned both an admin and a team.\\nSet `0` if you want this assign to no admin or team (ie. Unassigned).',
          example: '4324241',
        },
        body: {
          type: 'string',
          description: 'Optionally you can send a response in the conversation when it is assigned.',
          example: 'Let me pass you over to one of my colleagues.',
        },
      },
      required: ['message_type', 'type', 'admin_id', 'assignee_id'],
    },
    attach_contact_to_conversation_request: {
      title: 'Assign Conversation Request',
      type: 'object',
      description: 'Payload of the request to assign a conversation',
      properties: {
        admin_id: {
          type: 'string',
          description: 'The `id` of the admin who is adding the new participant.',
          example: '12345',
        },
        customer: {
          type: 'object',
          oneOf: [
            {
              title: 'Intercom User ID',
              properties: {
                intercom_user_id: {
                  type: 'string',
                  description: 'The identifier for the contact as given by Intercom.',
                  example: '6329bd9ffe4e2e91dac76188',
                },
                customer: {
                  $ref: '#/components/schemas/customer_request',
                },
              },
              required: ['intercom_user_id'],
            },
            {
              title: 'User ID',
              properties: {
                user_id: {
                  type: 'string',
                  description: 'The external_id you have defined for the contact who is being added as a participant.',
                  example: '6329bd9ffe4e2e91dac76188',
                },
                customer: {
                  $ref: '#/components/schemas/customer_request',
                },
              },
              required: ['user_id'],
            },
            {
              title: 'Email',
              properties: {
                email: {
                  type: 'string',
                  description: 'The email you have defined for the contact who is being added as a participant.',
                  example: 'winstonsmith@truth.org',
                },
                customer: {
                  $ref: '#/components/schemas/customer_request',
                },
              },
              required: ['email'],
            },
          ],
        },
      },
    },
    close_conversation_request: {
      title: 'Close Conversation Request',
      type: 'object',
      description: 'Payload of the request to close a conversation',
      properties: {
        message_type: {
          type: 'string',
          enum: ['close'],
          example: 'close',
        },
        type: {
          type: 'string',
          enum: ['admin'],
          example: 'admin',
        },
        admin_id: {
          type: 'string',
          description: 'The id of the admin who is performing the action.',
          example: '12345',
        },
        body: {
          type: 'string',
          description:
            'Optionally you can leave a message in the conversation to provide additional context to the user and other teammates.',
          example: ' This conversation is now closed!',
        },
      },
      required: ['message_type', 'type', 'admin_id'],
    },
    collection: {
      title: 'Collection',
      type: 'object',
      'x-tags': ['Help Center'],
      description: 'Collections are top level containers for Articles within the Help Center.',
      properties: {
        id: {
          type: 'string',
          description: 'The unique identifier for the collection which is given by Intercom.',
          example: '6871119',
        },
        workspace_id: {
          type: 'string',
          description: 'The id of the workspace which the collection belongs to.',
          example: 'hfi1bx4l',
        },
        name: {
          type: 'string',
          description:
            "The name of the collection. For multilingual collections, this will be the name of the default language's content.",
          example: 'Default language name',
        },
        description: {
          type: 'string',
          nullable: true,
          description:
            'The description of the collection. For multilingual help centers, this will be the description of the collection for the default language.',
          example: 'Default language description',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description:
            "The time when the article was created (seconds). For multilingual articles, this will be the timestamp of creation of the default language's content.",
          example: 1672928359,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description:
            "The time when the article was last updated (seconds). For multilingual articles, this will be the timestamp of last update of the default language's content.",
          example: 1672928610,
        },
        url: {
          type: 'string',
          nullable: true,
          description:
            'The URL of the collection. For multilingual help centers, this will be the URL of the collection for the default language.',
          example: 'http://intercom.test/help/collection/name',
        },
        icon: {
          type: 'string',
          nullable: true,
          description: 'The icon of the collection.',
          example: 'book-bookmark',
        },
        order: {
          type: 'integer',
          description:
            "The order of the section in relation to others sections within a collection. Values go from `0` upwards. `0` is the default if there's no order.",
          example: '1',
        },
        default_locale: {
          type: 'string',
          description:
            'The default locale of the help center. This field is only returned for multilingual help centers.',
          example: 'en',
        },
        translated_content: {
          nullable: true,
          $ref: '#/components/schemas/group_translated_content',
        },
        help_center_id: {
          type: 'integer',
          nullable: true,
          description: 'The id of the help center the collection is in.',
          example: '123',
        },
        type: {
          type: 'string',
          description: 'The type of object - `collection`.',
          enum: ['collection'],
          default: 'collection',
          example: 'collection',
        },
      },
    },
    collection_list: {
      title: 'Collections',
      type: 'object',
      description: 'This will return a list of Collections for the App.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object - `list`.',
          enum: ['list'],
          example: 'list',
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
        total_count: {
          type: 'integer',
          description: 'A count of the total number of collections.',
          example: 1,
        },
        data: {
          type: 'array',
          description: 'An array of collection objects',
          items: {
            $ref: '#/components/schemas/collection',
          },
        },
      },
    },
    company: {
      title: 'Company',
      type: 'object',
      'x-tags': ['Companies'],
      description:
        'Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies.',
      properties: {
        type: {
          type: 'string',
          description: 'Value is `company`',
          enum: ['company'],
          example: 'company',
        },
        id: {
          type: 'string',
          description: 'The Intercom defined id representing the company.',
          example: '531ee472cce572a6ec000006',
        },
        name: {
          type: 'string',
          description: 'The name of the company.',
          example: 'Blue Sun',
        },
        app_id: {
          type: 'string',
          description: 'The Intercom defined code of the workspace the company is associated to.',
          example: 'ecahpwf5',
        },
        plan: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: 'Value is always "plan"',
              example: 'plan',
            },
            id: {
              type: 'string',
              description: 'The id of the plan',
              example: '269315',
            },
            name: {
              type: 'string',
              description: 'The name of the plan',
              example: 'Pro',
            },
          },
        },
        company_id: {
          type: 'string',
          description: 'The company id you have defined for the company.',
          example: '6',
        },
        remote_created_at: {
          type: 'integer',
          description: 'The time the company was created by you.',
          example: 1663597223,
        },
        created_at: {
          type: 'integer',
          description: 'The time the company was added in Intercom.',
          example: 1663597223,
        },
        updated_at: {
          type: 'integer',
          description: 'The last time the company was updated.',
          example: 1663597223,
        },
        last_request_at: {
          type: 'integer',
          description: 'The time the company last recorded making a request.',
          example: 1663597223,
        },
        size: {
          type: 'integer',
          description: 'The number of employees in the company.',
          example: 100,
        },
        website: {
          type: 'string',
          description: 'The URL for the company website.',
          example: 'https://www.intercom.com',
        },
        industry: {
          type: 'string',
          description: 'The industry that the company operates in.',
          example: 'Software',
        },
        monthly_spend: {
          type: 'integer',
          description: 'How much revenue the company generates for your business.',
          example: 100,
        },
        session_count: {
          type: 'integer',
          description: 'How many sessions the company has recorded.',
          example: 100,
        },
        user_count: {
          type: 'integer',
          description: 'The number of users in the company.',
          example: 100,
        },
        custom_attributes: {
          type: 'object',
          description: 'The custom attributes you have set on the company.',
          additionalProperties: {
            type: 'string',
          },
          example: {
            paid_subscriber: true,
            monthly_spend: 155.5,
            team_mates: 9,
          },
        },
        tags: {
          type: 'object',
          description: 'The list of tags associated with the company',
          properties: {
            type: {
              type: 'string',
              description: 'The type of the object',
              enum: ['tag.list'],
            },
            tags: {
              type: 'array',
              items: {
                items: {
                  $ref: '#/components/schemas/tag',
                },
              },
            },
          },
        },
        segments: {
          type: 'object',
          description: 'The list of segments associated with the company',
          properties: {
            type: {
              type: 'string',
              description: 'The type of the object',
              enum: ['segment.list'],
            },
            segments: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/segment',
              },
            },
          },
        },
      },
    },
    company_attached_contacts: {
      title: 'Company Attached Contacts',
      type: 'object',
      description: 'A list of Contact Objects',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - `list`',
          enum: ['list'],
          example: 'list',
        },
        data: {
          type: 'array',
          description: 'An array containing Contact Objects',
          items: {
            $ref: '#/components/schemas/contact',
          },
        },
        total_count: {
          type: 'integer',
          description: 'The total number of contacts',
          example: 100,
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
      },
    },
    company_attached_segments: {
      title: 'Company Attached Segments',
      type: 'object',
      description: 'A list of Segment Objects',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - `list`',
          enum: ['list'],
          example: 'list',
        },
        data: {
          type: 'array',
          description: 'An array containing Segment Objects',
          items: {
            $ref: '#/components/schemas/segment',
          },
        },
      },
    },
    company_list: {
      title: 'Companies',
      type: 'object',
      description: 'This will return a list of companies for the App.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - `list`.',
          enum: ['list'],
          example: 'list',
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
        total_count: {
          type: 'integer',
          description: 'The total number of companies.',
          example: 100,
        },
        data: {
          type: 'array',
          description: 'An array containing Company Objects.',
          items: {
            $ref: '#/components/schemas/company',
          },
        },
      },
    },
    company_scroll: {
      title: 'Company Scroll',
      type: 'object',
      description:
        'Companies allow you to represent organizations using your product. Each company will have its own description and be associated with contacts. You can fetch, create, update and list companies.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - `list`',
          enum: ['list'],
          example: 'list',
        },
        data: {
          type: 'array',
          items: {
            $ref: '#/components/schemas/company',
          },
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
        total_count: {
          type: 'integer',
          description: 'The total number of companies',
          nullable: true,
          example: 100,
        },
        scroll_param: {
          type: 'string',
          description: 'The scroll parameter to use in the next request to fetch the next page of results.',
          example: '25b649f7-4d33-4ef6-88f5-60e5b8244309',
        },
      },
    },
    contact: {
      title: 'Contact',
      type: 'object',
      'x-tags': ['Contacts'],
      description: 'Contact are the objects that represent your leads and users in Intercom.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object.',
          example: 'contact',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the contact which is given by Intercom.',
          example: '5ba682d23d7cf92bef87bfd4',
        },
        external_id: {
          type: 'string',
          nullable: true,
          description: 'The unique identifier for the contact which is provided by the Client.',
          example: 'f3b87a2e09d514c6c2e79b9a',
        },
        workspace_id: {
          type: 'string',
          description: 'The id of the workspace which the contact belongs to.',
          example: 'ecahpwf5',
        },
        role: {
          type: 'string',
          description: 'The role of the contact.',
          example: 'user',
        },
        email: {
          type: 'string',
          description: "The contact's email.",
          example: 'joe@example.com',
        },
        email_domain: {
          type: 'string',
          description: "The contact's email domain.",
          example: 'example.com',
        },
        phone: {
          type: 'string',
          nullable: true,
          description: 'The contacts phone.',
          example: '+1123456789',
        },
        formatted_phone: {
          type: 'string',
          nullable: true,
          description: 'The contacts phone number normalized to the E164 format',
          example: '+1123456789',
        },
        name: {
          type: 'string',
          nullable: true,
          description: 'The contacts name.',
          example: 'John Doe',
        },
        owner_id: {
          type: 'integer',
          nullable: true,
          description: 'The id of an admin that has been assigned account ownership of the contact.',
          example: 123,
        },
        has_hard_bounced: {
          type: 'boolean',
          description: 'Whether the contact has had an email sent to them hard bounce.',
          example: true,
        },
        marked_email_as_spam: {
          type: 'boolean',
          description: 'Whether the contact has marked an email sent to them as spam.',
          example: true,
        },
        unsubscribed_from_emails: {
          type: 'boolean',
          description: 'Whether the contact is unsubscribed from emails.',
          example: true,
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: '(UNIX timestamp) The time when the contact was created.',
          example: 1571672154,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description: '(UNIX timestamp) The time when the contact was last updated.',
          example: 1571672154,
        },
        signed_up_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description: '(UNIX timestamp) The time specified for when a contact signed up.',
          example: 1571672154,
        },
        last_seen_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description:
            '(UNIX timestamp) The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually).',
          example: 1571672154,
        },
        last_replied_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description: '(UNIX timestamp) The time when the contact last messaged in.',
          example: 1571672154,
        },
        last_contacted_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description: '(UNIX timestamp) The time when the contact was last messaged.',
          example: 1571672154,
        },
        last_email_opened_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description: '(UNIX timestamp) The time when the contact last opened an email.',
          example: 1571672154,
        },
        last_email_clicked_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description: '(UNIX timestamp) The time when the contact last clicked a link in an email.',
          example: 1571672154,
        },
        language_override: {
          type: 'string',
          nullable: true,
          description:
            'A preferred language setting for the contact, used by the Intercom Messenger even if their browser settings change.',
          example: 'en',
        },
        browser: {
          type: 'string',
          nullable: true,
          description: 'The name of the browser which the contact is using.',
          example: 'Chrome',
        },
        browser_version: {
          type: 'string',
          nullable: true,
          description: 'The version of the browser which the contact is using.',
          example: '80.0.3987.132',
        },
        browser_language: {
          type: 'string',
          nullable: true,
          description: 'The language set by the browser which the contact is using.',
          example: 'en-US',
        },
        os: {
          type: 'string',
          nullable: true,
          description: 'The operating system which the contact is using.',
          example: 'Mac OS X',
        },
        android_app_name: {
          type: 'string',
          nullable: true,
          description: 'The name of the Android app which the contact is using.',
          example: 'Intercom',
        },
        android_app_version: {
          type: 'string',
          nullable: true,
          description: 'The version of the Android app which the contact is using.',
          example: '5.0.0',
        },
        android_device: {
          type: 'string',
          nullable: true,
          description: 'The Android device which the contact is using.',
          example: 'Pixel 3',
        },
        android_os_version: {
          type: 'string',
          nullable: true,
          description: 'The version of the Android OS which the contact is using.',
          example: '10',
        },
        android_sdk_version: {
          type: 'string',
          nullable: true,
          description: 'The version of the Android SDK which the contact is using.',
          example: '28',
        },
        android_last_seen_at: {
          type: 'integer',
          nullable: true,
          format: 'date-time',
          description: '(UNIX timestamp) The time when the contact was last seen on an Android device.',
          example: 1571672154,
        },
        ios_app_name: {
          type: 'string',
          nullable: true,
          description: 'The name of the iOS app which the contact is using.',
          example: 'Intercom',
        },
        ios_app_version: {
          type: 'string',
          nullable: true,
          description: 'The version of the iOS app which the contact is using.',
          example: '5.0.0',
        },
        ios_device: {
          type: 'string',
          nullable: true,
          description: 'The iOS device which the contact is using.',
          example: 'iPhone 11',
        },
        ios_os_version: {
          type: 'string',
          nullable: true,
          description: 'The version of iOS which the contact is using.',
          example: '13.3.1',
        },
        ios_sdk_version: {
          type: 'string',
          nullable: true,
          description: 'The version of the iOS SDK which the contact is using.',
          example: '13.3.1',
        },
        ios_last_seen_at: {
          type: 'integer',
          nullable: true,
          format: 'date-time',
          description: '(UNIX timestamp) The last time the contact used the iOS app.',
          example: 1571672154,
        },
        custom_attributes: {
          type: 'object',
          description: 'The custom attributes which are set for the contact.',
        },
        avatar: {
          type: 'object',
          nullable: true,
          properties: {
            type: {
              type: 'string',
              description: 'The type of object',
              example: 'avatar',
            },
            image_url: {
              type: 'string',
              format: 'uri',
              nullable: true,
              description: 'An image URL containing the avatar of a contact.',
              example: 'https://example.org/128Wash.jpg',
            },
          },
        },
        tags: {
          $ref: '#/components/schemas/contact_tags',
        },
        notes: {
          $ref: '#/components/schemas/contact_notes',
        },
        companies: {
          $ref: '#/components/schemas/contact_companies',
        },
        location: {
          $ref: '#/components/schemas/contact_location',
        },
        social_profiles: {
          $ref: '#/components/schemas/contact_social_profiles',
        },
      },
    },
    contact_archived: {
      title: 'Contact Archived',
      type: 'object',
      description: 'archived contact object',
      properties: {
        type: {
          type: 'string',
          description: 'always contact',
          enum: ['contact'],
          example: 'contact',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the contact which is given by Intercom.',
          example: '5ba682d23d7cf92bef87bfd4',
        },
        external_id: {
          type: 'string',
          nullable: true,
          description: 'The unique identifier for the contact which is provided by the Client.',
          example: 'f3b87a2e09d514c6c2e79b9a',
        },
        archived: {
          type: 'boolean',
          description: 'Whether the contact is archived or not.',
          example: true,
        },
      },
    },
    contact_attached_companies: {
      title: 'Contact Attached Companies',
      type: 'object',
      description: 'A list of Company Objects',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object',
          enum: ['list'],
          example: 'list',
        },
        companies: {
          type: 'array',
          description: 'An array containing Company Objects',
          items: {
            $ref: '#/components/schemas/company',
          },
        },
        total_count: {
          type: 'integer',
          description: 'The total number of companies associated to this contact',
          example: 100,
        },
        pages: {
          $ref: '#/components/schemas/pages_link',
        },
      },
    },
    contact_companies: {
      title: 'Contact companies',
      type: 'object',
      nullable: false,
      description:
        'An object containing companies meta data about the companies that a contact has. Up to 10 will be displayed here. Use the url to get more.',
      properties: {
        url: {
          type: 'string',
          format: 'uri',
          description: 'Url to get more company resources for this contact',
          example: '/contacts/5ba682d23d7cf92bef87bfd4/companies',
        },
        total_count: {
          type: 'integer',
          description: 'Int representing the total number of companyies attached to this contact',
          example: 100,
        },
        has_more: {
          type: 'boolean',
          description: "Whether there's more Addressable Objects to be viewed. If true, use the url to view all",
          example: true,
        },
      },
    },
    contact_deleted: {
      title: 'Contact Deleted',
      type: 'object',
      description: 'deleted contact object',
      properties: {
        type: {
          type: 'string',
          description: 'always contact',
          enum: ['contact'],
          example: 'contact',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the contact which is given by Intercom.',
          example: '5ba682d23d7cf92bef87bfd4',
        },
        external_id: {
          type: 'string',
          nullable: true,
          description: 'The unique identifier for the contact which is provided by the Client.',
          example: 'f3b87a2e09d514c6c2e79b9a',
        },
        deleted: {
          type: 'boolean',
          description: 'Whether the contact is deleted or not.',
          example: true,
        },
      },
    },
    contact_list: {
      title: 'Contact List',
      type: 'object',
      description: 'Contacts are your users in Intercom.',
      properties: {
        type: {
          type: 'string',
          description: 'Always list',
          enum: ['list'],
          example: 'list',
        },
        data: {
          type: 'array',
          description: 'The list of contact objects',
          items: {
            $ref: '#/components/schemas/contact',
          },
        },
        total_count: {
          type: 'integer',
          description: 'A count of the total number of objects.',
          example: 100,
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
      },
    },
    contact_location: {
      title: 'Contact Location',
      type: 'object',
      nullable: false,
      description: 'An object containing location meta data about a Intercom contact.',
      properties: {
        type: {
          type: 'string',
          nullable: true,
          description: 'Always location',
          example: 'location',
        },
        country: {
          type: 'string',
          nullable: true,
          description: 'The country that the contact is located in',
          example: 'Ireland',
        },
        region: {
          type: 'string',
          nullable: true,
          description: 'The overal region that the contact is located in',
          example: 'Dublin',
        },
        city: {
          type: 'string',
          nullable: true,
          description: 'The city that the contact is located in',
          example: 'Dublin',
        },
      },
    },
    contact_notes: {
      title: 'Contact notes',
      type: 'object',
      nullable: false,
      description:
        'An object containing notes meta data about the notes that a contact has. Up to 10 will be displayed here. Use the url to get more.',
      properties: {
        data: {
          type: 'array',
          description: 'This object represents the notes attached to a contact.',
          items: {
            $ref: '#/components/schemas/addressable_list',
          },
        },
        url: {
          type: 'string',
          format: 'uri',
          description: 'Url to get more company resources for this contact',
          example: '/contacts/5ba682d23d7cf92bef87bfd4/notes',
        },
        total_count: {
          type: 'integer',
          description: 'Int representing the total number of companyies attached to this contact',
          example: 100,
        },
        has_more: {
          type: 'boolean',
          description: "Whether there's more Addressable Objects to be viewed. If true, use the url to view all",
          example: true,
        },
      },
    },
    contact_reference: {
      title: 'Contact Reference',
      type: 'object',
      description: 'reference to contact object',
      properties: {
        type: {
          type: 'string',
          description: 'always contact',
          enum: ['contact'],
          example: 'contact',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the contact which is given by Intercom.',
          example: '5ba682d23d7cf92bef87bfd4',
        },
        external_id: {
          type: 'string',
          nullable: true,
          description: 'The unique identifier for the contact which is provided by the Client.',
          example: 'f3b87a2e09d514c6c2e79b9a',
        },
      },
    },
    contact_reply_base_request: {
      title: 'Contact Reply Base Object',
      type: 'object',
      properties: {
        message_type: {
          type: 'string',
          enum: ['comment'],
        },
        type: {
          type: 'string',
          enum: ['user'],
        },
        body: {
          type: 'string',
          description: 'The text body of the comment.',
        },
        attachment_urls: {
          title: 'Attachment URLs',
          type: 'array',
          description: 'A list of image URLs that will be added as attachments. You can include up to 10 URLs.',
          items: {
            type: 'string',
            format: 'uri',
          },
          maxItems: 10,
        },
      },
      required: ['message_type', 'type', 'body'],
    },
    contact_reply_conversation_request: {
      title: 'Contact Reply',
      oneOf: [
        {
          $ref: '#/components/schemas/contact_reply_intercom_user_id_request',
        },
        {
          $ref: '#/components/schemas/contact_reply_email_request',
        },
        {
          $ref: '#/components/schemas/contact_reply_user_id_request',
        },
      ],
    },
    contact_reply_email_request: {
      title: 'Email',
      type: 'object',
      description: 'Payload of the request to reply on behalf of a contact using their `email`',
      properties: {
        email: {
          type: 'string',
          description: 'The email you have defined for the user.',
        },
        attachment_files: {
          type: 'array',
          description: 'A list of files that will be added as attachments.',
          items: {
            $ref: '#/components/schemas/conversation_attachment_files',
          },
        },
      },
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request',
        },
      ],
      required: ['email'],
    },
    contact_reply_intercom_user_id_request: {
      title: 'Intercom User ID',
      type: 'object',
      description: 'Payload of the request to reply on behalf of a contact using their `intercom_user_id`',
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request',
        },
      ],
      properties: {
        intercom_user_id: {
          type: 'string',
          description: 'The identifier for the contact as given by Intercom.',
        },
        attachment_files: {
          type: 'array',
          description: 'A list of files that will be added as attachments.',
          items: {
            $ref: '#/components/schemas/conversation_attachment_files',
          },
        },
      },
      required: ['intercom_user_id'],
    },
    contact_reply_ticket_email_request: {
      title: 'Email',
      type: 'object',
      description: 'Payload of the request to reply on behalf of a contact using their `email`',
      properties: {
        email: {
          type: 'string',
          description: 'The email you have defined for the user.',
        },
      },
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request',
        },
      ],
      required: ['email'],
    },
    contact_reply_ticket_intercom_user_id_request: {
      title: 'Intercom User ID',
      type: 'object',
      description: 'Payload of the request to reply on behalf of a contact using their `intercom_user_id`',
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request',
        },
      ],
      properties: {
        intercom_user_id: {
          type: 'string',
          description: 'The identifier for the contact as given by Intercom.',
        },
      },
      required: ['intercom_user_id'],
    },
    contact_reply_ticket_user_id_request: {
      title: 'User ID',
      type: 'object',
      description: 'Payload of the request to reply on behalf of a contact using their `user_id`',
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request',
        },
      ],
      properties: {
        user_id: {
          type: 'string',
          description: 'The external_id you have defined for the contact.',
        },
      },
      required: ['user_id'],
    },
    contact_reply_user_id_request: {
      title: 'User ID',
      type: 'object',
      description: 'Payload of the request to reply on behalf of a contact using their `user_id`',
      allOf: [
        {
          $ref: '#/components/schemas/contact_reply_base_request',
        },
      ],
      properties: {
        user_id: {
          type: 'string',
          description: 'The external_id you have defined for the contact.',
        },
        attachment_files: {
          type: 'array',
          description: 'A list of files that will be added as attachments. You can include up to 10 files.',
          items: {
            $ref: '#/components/schemas/conversation_attachment_files',
          },
          maxItems: 10,
        },
      },
      required: ['user_id'],
    },
    contact_segments: {
      title: 'Segments',
      type: 'object',
      description: 'A list of segments objects attached to a specific contact.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['list'],
          example: 'list',
        },
        data: {
          type: 'array',
          description: 'Segment objects associated with the contact.',
          items: {
            $ref: '#/components/schemas/segment',
          },
        },
      },
    },
    contact_social_profiles: {
      title: 'Social Profile',
      type: 'object',
      nullable: false,
      description: 'An object containing social profiles that a contact has.',
      properties: {
        data: {
          type: 'array',
          description: 'A list of social profiles objects associated with the contact.',
          items: {
            $ref: '#/components/schemas/social_profile',
          },
        },
      },
    },
    contact_subscription_types: {
      title: 'Contact Subscription Types',
      type: 'object',
      nullable: false,
      description: 'An object containing Subscription Types meta data about the SubscriptionTypes that a contact has.',
      properties: {
        data: {
          type: 'array',
          description: 'This object represents the subscriptions attached to a contact.',
          items: {
            $ref: '#/components/schemas/addressable_list',
          },
        },
        url: {
          type: 'string',
          format: 'uri',
          description: 'Url to get more subscription type resources for this contact',
          example: '/contacts/5ba682d23d7cf92bef87bfd4/subscriptions',
        },
        total_count: {
          type: 'integer',
          description: 'Int representing the total number of subscription types attached to this contact',
          example: 100,
        },
        has_more: {
          type: 'boolean',
          description: "Whether there's more Addressable Objects to be viewed. If true, use the url to view all",
          example: true,
        },
      },
    },
    contact_tags: {
      title: 'Contact Tags',
      type: 'object',
      nullable: true,
      description:
        'An object containing tags meta data about the tags that a contact has. Up to 10 will be displayed here. Use the url to get more.',
      properties: {
        data: {
          type: 'array',
          description: 'This object represents the tags attached to a contact.',
          items: {
            $ref: '#/components/schemas/addressable_list',
          },
        },
        url: {
          type: 'string',
          format: 'uri',
          description: 'url to get more tag resources for this contact',
          example: '/contacts/5ba682d23d7cf92bef87bfd4/tags',
        },
        total_count: {
          type: 'integer',
          description: 'Int representing the total number of tags attached to this contact',
          example: 100,
        },
        has_more: {
          type: 'boolean',
          description: "Whether there's more Addressable Objects to be viewed. If true, use the url to view all",
          example: true,
        },
      },
    },
    contact_unarchived: {
      title: 'Contact Unarchived',
      type: 'object',
      description: 'unarchived contact object',
      properties: {
        type: {
          type: 'string',
          description: 'always contact',
          enum: ['contact'],
          example: 'contact',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the contact which is given by Intercom.',
          example: '5ba682d23d7cf92bef87bfd4',
        },
        external_id: {
          type: 'string',
          nullable: true,
          description: 'The unique identifier for the contact which is provided by the Client.',
          example: 'f3b87a2e09d514c6c2e79b9a',
        },
        archived: {
          type: 'boolean',
          description: 'Whether the contact is archived or not.',
          example: false,
        },
      },
    },
    conversation: {
      title: 'Conversation',
      type: 'object',
      'x-tags': ['Conversations'],
      description:
        'Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact.',
      properties: {
        type: {
          type: 'string',
          description: 'Always conversation.',
          example: 'conversation',
        },
        id: {
          type: 'string',
          description: 'The id representing the conversation.',
          example: '1295',
        },
        title: {
          type: 'string',
          nullable: true,
          description: 'The title given to the conversation.',
          example: 'Conversation Title',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the conversation was created.',
          example: 1663597223,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The last time the conversation was updated.',
          example: 1663597260,
        },
        waiting_since: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description:
            'The last time a Contact responded to an Admin. In other words, the time a customer started waiting for a response. Set to null if last reply is from an Admin.',
          example: 1663597260,
        },
        snoozed_until: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description:
            'If set this is the time in the future when this conversation will be marked as open. i.e. it will be in a snoozed state until this time. i.e. it will be in a snoozed state until this time.',
          example: 1663597260,
        },
        open: {
          type: 'boolean',
          description: 'Indicates whether a conversation is open (true) or closed (false).',
          example: true,
        },
        state: {
          type: 'string',
          enum: ['open', 'closed', 'snoozed'],
          description: 'Can be set to "open", "closed" or "snoozed".',
          example: 'open',
        },
        read: {
          type: 'boolean',
          description: 'Indicates whether a conversation has been read.',
          example: true,
        },
        priority: {
          type: 'string',
          enum: ['priority', 'not_priority'],
          description: 'If marked as priority, it will return priority or else not_priority.',
          example: 'priority',
        },
        admin_assignee_id: {
          type: 'integer',
          nullable: true,
          description:
            "The id of the admin assigned to the conversation. If it's not assigned to an admin it will return null.",
          example: 0,
        },
        team_assignee_id: {
          type: 'string',
          nullable: true,
          description:
            "The id of the team assigned to the conversation. If it's not assigned to a team it will return null.",
          example: '5017691',
        },
        tags: {
          $ref: '#/components/schemas/tags',
        },
        conversation_rating: {
          $ref: '#/components/schemas/conversation_rating',
        },
        source: {
          $ref: '#/components/schemas/conversation_source',
        },
        contacts: {
          $ref: '#/components/schemas/conversation_contacts',
        },
        teammates: {
          $ref: '#/components/schemas/conversation_teammates',
        },
        custom_attributes: {
          $ref: '#/components/schemas/custom_attributes',
        },
        first_contact_reply: {
          $ref: '#/components/schemas/conversation_first_contact_reply',
        },
        sla_applied: {
          $ref: '#/components/schemas/sla_applied',
        },
        statistics: {
          $ref: '#/components/schemas/conversation_statistics',
        },
        conversation_parts: {
          $ref: '#/components/schemas/conversation_parts',
        },
      },
    },
    conversation_attachment_files: {
      title: 'Conversation attachment files',
      type: 'object',
      description: 'Properties of the attachment files in a conversation part',
      properties: {
        content_type: {
          type: 'string',
          description: 'The content type of the file',
          example: 'application/json',
        },
        data: {
          type: 'string',
          description: 'The base64 encoded file data.',
          example: 'ewogICJ0ZXN0IjogMQp9',
        },
        name: {
          type: 'string',
          description: 'The name of the file.',
          example: 'test.json',
        },
      },
    },
    conversation_contacts: {
      title: 'Contacts',
      type: 'object',
      description:
        'The list of contacts (users or leads) involved in this conversation. This will only contain one customer unless more were added via the group conversation feature.',
      properties: {
        type: {
          type: 'string',
          description: '',
          enum: ['contact.list'],
          example: 'contact.list',
        },
        contacts: {
          type: 'array',
          description:
            'The list of contacts (users or leads) involved in this conversation. This will only contain one customer unless more were added via the group conversation feature.',
          items: {
            $ref: '#/components/schemas/contact_reference',
          },
        },
      },
    },
    conversation_first_contact_reply: {
      title: 'First contact reply',
      type: 'object',
      nullable: true,
      description:
        'An object containing information on the first users message. For a contact initiated message this will represent the users original message.',
      properties: {
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: '',
          example: 1663597223,
        },
        type: {
          type: 'string',
          description: '',
          example: 'conversation',
        },
        url: {
          type: 'string',
          nullable: true,
          description: '',
          example: 'https://developers.intercom.com/',
        },
      },
    },
    conversation_list: {
      title: 'Conversation List',
      type: 'object',
      description:
        'Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact.',
      properties: {
        type: {
          type: 'string',
          description: 'Always conversation.list',
          enum: ['conversation.list'],
          example: 'conversation.list',
        },
        conversations: {
          type: 'array',
          description: 'The list of conversation objects',
          items: {
            $ref: '#/components/schemas/conversation',
          },
        },
        total_count: {
          type: 'integer',
          description: 'A count of the total number of objects.',
          example: 12345,
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
      },
    },
    conversation_part: {
      title: 'Conversation Part',
      type: 'object',
      description: 'A Conversation Part represents a message in the conversation.',
      properties: {
        type: {
          type: 'string',
          description: 'Always conversation_part',
          example: 'conversation_part',
        },
        id: {
          type: 'string',
          description: 'The id representing the conversation part.',
          example: '3',
        },
        part_type: {
          type: 'string',
          description: 'The type of conversation part.',
          example: 'comment',
        },
        body: {
          type: 'string',
          nullable: true,
          description:
            'The message body, which may contain HTML. For Twitter, this will show a generic message regarding why the body is obscured.',
          example: '<p>Okay!</p>',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the conversation part was created.',
          example: 1663597223,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The last time the conversation part was updated.',
          example: 1663597260,
        },
        notified_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the user was notified with the conversation part.',
          example: 1663597260,
        },
        assigned_to: {
          $ref: '#/components/schemas/reference',
          nullable: true,
          description:
            'The id of the admin that was assigned the conversation by this conversation_part (null if there has been no change in assignment.)',
        },
        author: {
          $ref: '#/components/schemas/conversation_part_author',
        },
        attachments: {
          title: 'Conversation part attachments',
          type: 'array',
          description: 'A list of attachments for the part.',
          items: {
            $ref: '#/components/schemas/part_attachment',
          },
        },
        external_id: {
          type: 'string',
          nullable: true,
          description: 'The external id of the conversation part',
          example: 'abcd1234',
        },
        redacted: {
          type: 'boolean',
          description: 'Whether or not the conversation part has been redacted.',
          example: false,
        },
      },
    },
    conversation_part_author: {
      title: 'Conversation part author',
      type: 'object',
      description:
        'The object who initiated the conversation, which can be a Contact, Admin or Team. Bots and campaigns send messages on behalf of Admins or Teams. For Twitter, this will be blank.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the author',
          example: 'admin',
        },
        id: {
          type: 'string',
          description: 'The id of the author',
          example: '274',
        },
        name: {
          type: 'string',
          description: 'The name of the author',
          example: 'Operator',
        },
        email: {
          type: 'string',
          format: 'email',
          description: 'The email of the author',
          example: 'operator+abcd1234@intercom.io',
        },
      },
    },
    conversation_parts: {
      title: 'Conversation Parts',
      type: 'object',
      description:
        'A list of Conversation Part objects for each part message in the conversation. This is only returned when Retrieving a Conversation, and ignored when Listing all Conversations. There is a limit of 500 parts.',
      properties: {
        type: {
          type: 'string',
          description: '',
          enum: ['conversation_part.list'],
          example: 'conversation_part.list',
        },
        conversation_parts: {
          title: 'Conversation Parts',
          type: 'array',
          description:
            'A list of Conversation Part objects for each part message in the conversation. This is only returned when Retrieving a Conversation, and ignored when Listing all Conversations. There is a limit of 500 parts.',
          items: {
            $ref: '#/components/schemas/conversation_part',
          },
        },
        total_count: {
          type: 'integer',
          description: '',
          example: 2,
        },
      },
    },
    conversation_rating: {
      title: 'Conversation Rating',
      type: 'object',
      nullable: true,
      description:
        'The Conversation Rating object which contains information on the rating and/or remark added by a Contact and the Admin assigned to the conversation.',
      properties: {
        rating: {
          type: 'integer',
          description: 'The rating, between 1 and 5, for the conversation.',
          example: 5,
        },
        remark: {
          type: 'string',
          description: 'An optional field to add a remark to correspond to the number rating',
          example: '',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the rating was requested in the conversation being rated.',
          example: 1671028894,
        },
        contact: {
          $ref: '#/components/schemas/contact_reference',
        },
        teammate: {
          $ref: '#/components/schemas/reference',
        },
      },
    },
    conversation_source: {
      title: 'Conversation source',
      type: 'object',
      description:
        'The Conversation Part that originated this conversation, which can be Contact, Admin, Campaign, Automated or Operator initiated.',
      properties: {
        type: {
          type: 'string',
          description:
            'This includes conversation, email, facebook, instagram, phone_call, phone_switch, push, sms, twitter and whatsapp.',
          example: 'conversation',
        },
        id: {
          type: 'string',
          description: 'The id representing the message.',
          example: '3',
        },
        delivered_as: {
          type: 'string',
          description:
            "The conversation's initiation type. Possible values are customer_initiated, campaigns_initiated (legacy campaigns), operator_initiated (Custom bot), automated (Series and other outbounds with dynamic audience message) and admin_initiated (fixed audience message, ticket initiated by an admin, group email).",
          example: 'operator_initiated',
        },
        subject: {
          type: 'string',
          description:
            'Optional. The message subject. For Twitter, this will show a generic message regarding why the subject is obscured.',
          example: '',
        },
        body: {
          type: 'string',
          description:
            'The message body, which may contain HTML. For Twitter, this will show a generic message regarding why the body is obscured.',
          example: '<p>Hey there!</p>',
        },
        author: {
          $ref: '#/components/schemas/conversation_part_author',
        },
        attachments: {
          type: 'array',
          description: 'A list of attachments for the part.',
          items: {
            $ref: '#/components/schemas/part_attachment',
          },
        },
        url: {
          type: 'string',
          nullable: true,
          description: 'The URL where the conversation was started. For Twitter, Email, and Bots, this will be blank.',
          example: null,
        },
        redacted: {
          type: 'boolean',
          description:
            'Whether or not the source message has been redacted. Only applicable for contact initiated messages.',
          example: false,
        },
      },
    },
    conversation_statistics: {
      title: 'Conversation statistics',
      type: 'object',
      nullable: true,
      description:
        'A Statistics object containing all information required for reporting, with timestamps and calculated metrics.',
      properties: {
        type: {
          type: 'string',
          description: '',
          example: 'conversation_statistics',
        },
        time_to_assignment: {
          type: 'integer',
          description: 'Duration until last assignment before first admin reply. In seconds.',
          example: 2310,
        },
        time_to_admin_reply: {
          type: 'integer',
          description: 'Duration until first admin reply. Subtracts out of business hours. In seconds.',
          example: 2310,
        },
        time_to_first_close: {
          type: 'integer',
          description:
            'Duration until conversation was closed first time. Subtracts out of business hours. In seconds.',
          example: 2310,
        },
        time_to_last_close: {
          type: 'integer',
          description: 'Duration until conversation was closed last time. Subtracts out of business hours. In seconds.',
          example: 2310,
        },
        median_time_to_reply: {
          type: 'integer',
          description:
            'Median based on all admin replies after a contact reply. Subtracts out of business hours. In seconds.',
          example: 2310,
        },
        first_contact_reply_at: {
          type: 'integer',
          format: 'date-time',
          description: 'Time of first text conversation part from a contact.',
          example: 1663597233,
        },
        first_assignment_at: {
          type: 'integer',
          format: 'date-time',
          description: 'Time of first assignment after first_contact_reply_at.',
          example: 1663597233,
        },
        first_admin_reply_at: {
          type: 'integer',
          format: 'date-time',
          description: 'Time of first admin reply after first_contact_reply_at.',
          example: 1663597233,
        },
        first_close_at: {
          type: 'integer',
          format: 'date-time',
          description: 'Time of first close after first_contact_reply_at.',
          example: 1663597233,
        },
        last_assignment_at: {
          type: 'integer',
          format: 'date-time',
          description: 'Time of last assignment after first_contact_reply_at.',
          example: 1663597233,
        },
        last_assignment_admin_reply_at: {
          type: 'integer',
          format: 'date-time',
          description: 'Time of first admin reply since most recent assignment.',
          example: 1663597233,
        },
        last_contact_reply_at: {
          type: 'integer',
          format: 'date-time',
          description: 'Time of the last conversation part from a contact.',
          example: 1663597233,
        },
        last_admin_reply_at: {
          type: 'integer',
          format: 'date-time',
          description: 'Time of the last conversation part from an admin.',
          example: 1663597233,
        },
        last_close_at: {
          type: 'integer',
          format: 'date-time',
          description: 'Time of the last conversation close.',
          example: 1663597233,
        },
        last_closed_by_id: {
          type: 'string',
          description: 'The last admin who closed the conversation. Returns a reference to an Admin object.',
          example: 'c3po',
        },
        count_reopens: {
          type: 'integer',
          description: 'Number of reopens after first_contact_reply_at.',
          example: 1,
        },
        count_assignments: {
          type: 'integer',
          description: 'Number of assignments after first_contact_reply_at.',
          example: 1,
        },
        count_conversation_parts: {
          type: 'integer',
          description: 'Total number of conversation parts.',
          example: 1,
        },
      },
    },
    conversation_teammates: {
      title: 'Conversation teammates',
      type: 'object',
      nullable: true,
      description: 'The list of teammates who participated in the conversation (wrote at least one conversation part).',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object - `admin.list`.',
          example: 'admin.list',
        },
        teammates: {
          type: 'array',
          description:
            'The list of teammates who participated in the conversation (wrote at least one conversation part).',
          items: {
            $ref: '#/components/schemas/reference',
          },
        },
      },
    },
    convert_visitor_request: {
      description: 'You can merge a Visitor to a Contact of role type lead or user.',
      type: 'object',
      title: 'Convert Visitor Request Payload',
      properties: {
        type: {
          type: 'string',
          description: 'Represents the role of the Contact model. Accepts `lead` or `user`.',
          example: 'user',
        },
        user: {
          type: 'object',
          description: 'The unique identifiers retained after converting or merging.',
          properties: {
            id: {
              type: 'string',
              description: 'The unique identifier for the contact which is given by Intercom.',
              example: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
            },
            user_id: {
              type: 'string',
              description:
                'A unique identifier for the contact which is given to Intercom, which will be represented as external_id.',
              example: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
            },
            email: {
              type: 'string',
              description: "The contact's email, retained by default if one is present.",
              example: 'winstonsmith@truth.org',
            },
          },
          anyOf: [
            {
              required: ['id'],
            },
            {
              required: ['user_id'],
            },
          ],
        },
        visitor: {
          type: 'object',
          description: 'The unique identifiers to convert a single Visitor.',
          properties: {
            id: {
              type: 'string',
              description: 'The unique identifier for the contact which is given by Intercom.',
              example: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
            },
            user_id: {
              type: 'string',
              description: 'A unique identifier for the contact which is given to Intercom.',
              example: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
            },
            email: {
              type: 'string',
              description: "The visitor's email.",
              example: 'winstonsmith@truth.org',
            },
          },
          anyOf: [
            {
              required: ['id'],
            },
            {
              required: ['user_id'],
            },
            {
              required: ['email'],
            },
          ],
        },
      },
      required: ['type', 'user', 'visitor'],
    },
    create_article_request: {
      description: 'You can create an Article',
      type: 'object',
      title: 'Create Article Request Payload',
      nullable: true,
      properties: {
        title: {
          type: 'string',
          description:
            "The title of the article.For multilingual articles, this will be the title of the default language's content.",
          example: 'Thanks for everything',
        },
        description: {
          type: 'string',
          description:
            "The description of the article. For multilingual articles, this will be the description of the default language's content.",
          example: 'Description of the Article',
        },
        body: {
          type: 'string',
          description:
            "The content of the article. For multilingual articles, this will be the body of the default language's content.",
          example: '<p>This is the body in html</p>',
        },
        author_id: {
          type: 'integer',
          description:
            "The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace.",
          example: 1295,
        },
        state: {
          type: 'string',
          description:
            "Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content.",
          enum: ['published', 'draft'],
          example: 'draft',
        },
        parent_id: {
          type: 'integer',
          description:
            "The id of the article's parent collection or section. An article without this field stands alone.",
          example: 18,
        },
        parent_type: {
          type: 'string',
          description: 'The type of parent, which can either be a `collection` or `section`.',
          example: 'collection',
        },
        translated_content: {
          $ref: '#/components/schemas/article_translated_content',
        },
      },
      required: ['title', 'author_id'],
    },
    create_collection_request: {
      description: 'You can create a collection',
      type: 'object',
      title: 'Create Collection Request Payload',
      properties: {
        name: {
          type: 'string',
          description:
            "The name of the collection. For multilingual collections, this will be the name of the default language's content.",
          example: 'collection 51',
        },
        description: {
          type: 'string',
          description:
            "The description of the collection. For multilingual collections, this will be the description of the default language's content.",
          example: 'English description',
        },
        translated_content: {
          nullable: true,
          $ref: '#/components/schemas/group_translated_content',
        },
        help_center_id: {
          type: 'integer',
          nullable: true,
          description:
            'The id of the help center where the collection will be created. If `null` then it will be created in the default help center.',
          example: '123',
        },
      },
      required: ['name'],
    },
    create_contact_request: {
      description: 'Payload to create a contact',
      type: 'object',
      title: 'Create Contact Request Payload',
      properties: {
        role: {
          type: 'string',
          description: 'The role of the contact.',
        },
        external_id: {
          type: 'string',
          description: 'A unique identifier for the contact which is given to Intercom',
        },
        email: {
          type: 'string',
          description: 'The contacts email',
          example: 'jdoe@example.com',
        },
        phone: {
          type: 'string',
          nullable: true,
          description: 'The contacts phone',
          example: '+353871234567',
        },
        name: {
          type: 'string',
          nullable: true,
          description: 'The contacts name',
          example: 'John Doe',
        },
        avatar: {
          type: 'string',
          nullable: true,
          description: 'An image URL containing the avatar of a contact',
          example: 'https://www.example.com/avatar_image.jpg',
        },
        signed_up_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description: 'The time specified for when a contact signed up',
          example: 1571672154,
        },
        last_seen_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description:
            'The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually)',
          example: 1571672154,
        },
        owner_id: {
          type: 'integer',
          nullable: true,
          description: 'The id of an admin that has been assigned account ownership of the contact',
          example: 123,
        },
        unsubscribed_from_emails: {
          type: 'boolean',
          nullable: true,
          description: 'Whether the contact is unsubscribed from emails',
          example: true,
        },
        custom_attributes: {
          type: 'object',
          nullable: true,
          description: 'The custom attributes which are set for the contact',
        },
      },
      anyOf: [
        {
          required: ['email'],
          title: 'Create contact with email',
        },
        {
          required: ['external_id'],
          title: 'Create contact with external_id',
        },
        {
          required: ['role'],
          title: 'Create contact with role',
        },
      ],
    },
    create_conversation_request: {
      description:
        'Conversations are how you can communicate with users in Intercom. They are created when a contact replies to an outbound message, or when one admin directly sends a message to a single contact.',
      type: 'object',
      title: 'Create Conversation Request Payload',
      properties: {
        from: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['lead', 'user', 'contact'],
              description: 'The role associated to the contact - user or lead.',
              example: 'user',
            },
            id: {
              type: 'string',
              description: 'The identifier for the contact which is given by Intercom.',
              format: 'uuid',
              minLength: 24,
              maxLength: 24,
              example: '536e564f316c83104c000020',
            },
          },
          required: ['type', 'id'],
        },
        body: {
          type: 'string',
          description: 'The content of the message. HTML is not supported.',
          example: 'Hello',
        },
      },
      required: ['from', 'body'],
    },
    create_data_attribute_request: {
      description: '',
      type: 'object',
      title: 'Create Data Attribute Request',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the data attribute.',
          example: 'My Data Attribute',
        },
        model: {
          type: 'string',
          description: 'The model that the data attribute belongs to.',
          enum: ['contact', 'company'],
          example: 'contact',
        },
        data_type: {
          type: 'string',
          description: 'The type of data stored for this attribute.',
          enum: ['string', 'integer', 'float', 'boolean', 'datetime', 'date'],
          example: 'string',
        },
        description: {
          type: 'string',
          description: 'The readable description you see in the UI for the attribute.',
          example: 'My Data Attribute Description',
        },
        options: {
          type: 'array',
          description:
            'To create list attributes. Provide a set of hashes with `value` as the key of the options you want to make. `data_type` must be `string`.',
          items: {
            type: 'string',
          },
          example: ['option1', 'option2'],
        },
        messenger_writable: {
          type: 'boolean',
          description: 'Can this attribute be updated by the Messenger',
          example: false,
        },
      },
      required: ['name', 'model', 'data_type'],
    },
    create_data_event_request: {
      description: '',
      type: 'object',
      title: 'Create Data Event Request',
      properties: {
        event_name: {
          type: 'string',
          description:
            "The name of the event that occurred. This is presented to your App's admins when filtering and creating segments - a good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.",
          example: 'invited-friend',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the event occurred as a UTC Unix timestamp',
          example: 1671028894,
        },
        user_id: {
          type: 'string',
          description: 'Your identifier for the user.',
          example: '314159',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the contact (lead or user) which is given by Intercom.',
          example: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
        },
        email: {
          type: 'string',
          description:
            'An email address for your user. An email should only be used where your application uses email to uniquely identify users.',
          example: 'frodo.baggins@example.com',
        },
        metadata: {
          type: 'object',
          description: 'Optional metadata about the event.',
          additionalProperties: {
            type: 'string',
          },
          example: {
            invite_code: 'ADDAFRIEND',
          },
        },
      },
      anyOf: [
        {
          title: 'id required',
          required: ['event_name', 'created_at', 'id'],
        },
        {
          title: 'user_id required',
          required: ['event_name', 'created_at', 'user_id'],
        },
        {
          title: 'email required',
          required: ['event_name', 'created_at', 'email'],
        },
      ],
    },
    create_data_event_summaries_request: {
      description:
        'You can send a list of event summaries for a user. Each event summary should contain the event name, the time the event occurred, and the number of times the event occurred. The event name should be a past tense "verb-noun" combination, to improve readability, for example `updated-plan`.',
      type: 'object',
      title: 'Create Data Event Summaries Request',
      properties: {
        user_id: {
          type: 'string',
          description: 'Your identifier for the user.',
          example: '314159',
        },
        event_summaries: {
          type: 'object',
          description:
            "A list of event summaries for the user. Each event summary should contain the event name, the time the event occurred, and the number of times the event occurred. The event name should be a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.",
          properties: {
            event_name: {
              type: 'string',
              description:
                "The name of the event that occurred. A good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.",
              example: 'invited-friend',
            },
            count: {
              type: 'integer',
              description: 'The number of times the event occurred.',
              example: 1,
            },
            first: {
              type: 'integer',
              format: 'date-time',
              description: 'The first time the event was sent',
              example: 1671028894,
            },
            last: {
              type: 'integer',
              format: 'date-time',
              description: 'The last time the event was sent',
              example: 1671028894,
            },
          },
        },
      },
    },
    create_data_exports_request: {
      description: 'Request for creating a data export',
      type: 'object',
      title: 'Create Data Export Request',
      properties: {
        created_at_after: {
          type: 'integer',
          description: 'The start date that you request data for. It must be formatted as a unix timestamp.',
          example: 1527811200,
        },
        created_at_before: {
          type: 'integer',
          description: 'The end date that you request data for. It must be formatted as a unix timestamp.',
          example: 1527811200,
        },
      },
      required: ['created_at_after', 'created_at_before'],
    },
    create_message_request: {
      description: 'You can create a message',
      type: 'object',
      title: 'Create Message Request Payload',
      nullable: true,
      properties: {
        message_type: {
          type: 'string',
          description: 'The kind of message being created. Values: `in_app` or `email`.',
          enum: ['in_app', 'email'],
          example: 'in_app',
        },
        subject: {
          type: 'string',
          description: 'The title of the email.',
          example: 'Thanks for everything',
        },
        body: {
          type: 'string',
          description: 'The content of the message. HTML and plaintext are supported.',
          example: 'Hello there',
        },
        template: {
          type: 'string',
          description: 'The style of the outgoing message. Possible values `plain` or `personal`.',
          example: 'plain',
        },
        from: {
          type: 'object',
          description: 'The sender of the message. If not provided, the default sender will be used.',
          properties: {
            type: {
              type: 'string',
              description: 'Always `admin`.',
              enum: ['admin'],
              example: 'admin',
            },
            id: {
              type: 'integer',
              description: 'The identifier for the admin which is given by Intercom.',
              example: 394051,
            },
          },
          required: ['type', 'id'],
        },
        to: {
          type: 'object',
          description: 'The sender of the message. If not provided, the default sender will be used.',
          properties: {
            type: {
              type: 'string',
              description: 'The role associated to the contact - `user` or `lead`.',
              enum: ['user', 'lead'],
              example: 'user',
            },
            id: {
              type: 'string',
              description: 'The identifier for the contact which is given by Intercom.',
              example: '536e564f316c83104c000020',
            },
          },
          required: ['type', 'id'],
        },
        create_conversation_without_contact_reply: {
          type: 'boolean',
          description:
            'Whether a conversation should be opened in the inbox for the message without the contact replying. Defaults to false if not provided.',
          default: false,
          example: true,
        },
      },
      anyOf: [
        {
          title: 'message_type: `email`.',
          required: ['message_type', 'subject', 'body', 'template', 'from', 'to'],
        },
        {
          title: 'message_type: `inapp`.',
          required: ['message_type', 'body', 'from', 'to'],
        },
      ],
    },
    create_or_update_company_request: {
      type: 'object',
      title: 'Create Or Update Company Request Payload',
      description: 'You can create or update a Company',
      nullable: true,
      properties: {
        name: {
          type: 'string',
          description: 'The name of the Company',
          example: 'Intercom',
        },
        company_id: {
          type: 'string',
          description: "The company id you have defined for the company. Can't be updated",
          example: '625e90fc55ab113b6d92175f',
        },
        plan: {
          type: 'string',
          description: 'The name of the plan you have associated with the company.',
          example: 'Enterprise',
        },
        size: {
          type: 'integer',
          description: 'The number of employees in this company.',
          example: '100',
        },
        website: {
          type: 'string',
          description:
            "The URL for this company's website. Please note that the value specified here is not validated. Accepts any string.",
          example: 'https://www.example.com',
        },
        industry: {
          type: 'string',
          description: 'The industry that this company operates in.',
          example: 'Manufacturing',
        },
        custom_attributes: {
          type: 'object',
          description:
            'A hash of key/value pairs containing any other data about the company you want Intercom to store.',
          additionalProperties: {
            type: 'string',
          },
          example: {
            paid_subscriber: true,
            monthly_spend: 155.5,
            team_mates: 9,
          },
        },
        remote_created_at: {
          type: 'integer',
          description: 'The time the company was created by you.',
          example: 1394531169,
        },
        monthly_spend: {
          type: 'integer',
          description:
            'How much revenue the company generates for your business. Note that this will truncate floats. i.e. it only allow for whole integers, 155.98 will be truncated to 155. Note that this has an upper limit of 2**31-1 or 2147483647..',
          example: 1000,
        },
      },
    },
    create_or_update_tag_request: {
      description: 'You can create or update an existing tag.',
      type: 'object',
      title: 'Create or Update Tag Request Payload',
      properties: {
        name: {
          type: 'string',
          description:
            'The name of the tag, which will be created if not found, or the new name for the tag if this is an update request. Names are case insensitive.',
          example: 'Independent',
        },
        id: {
          type: 'string',
          description: 'The id of tag to updates.',
          example: '656452352',
        },
      },
      required: ['name'],
    },
    create_phone_switch_request: {
      description: 'You can create an phone switch',
      type: 'object',
      title: 'Create Phone Switch Request Payload',
      nullable: true,
      properties: {
        phone: {
          type: 'string',
          description:
            'Phone number in E.164 format, that will receive the SMS to continue the conversation in the Messenger.',
          example: '+1 1234567890',
        },
        custom_attributes: {
          $ref: '#/components/schemas/custom_attributes',
        },
      },
      required: ['phone'],
    },
    create_section_request: {
      description: 'You can create a Section',
      type: 'object',
      title: 'Create Section Request Payload',
      properties: {
        name: {
          type: 'string',
          description:
            "The name of the collection. For multilingual collections, this will be the name of the default language's content.",
          example: 'Section 51',
        },
        parent_id: {
          type: 'integer',
          description: 'The id for the collection this section will be within.',
          example: 18,
        },
        translated_content: {
          nullable: true,
          $ref: '#/components/schemas/group_translated_content',
        },
      },
      required: ['name', 'parent_id'],
    },
    create_ticket_reply_request: {
      title: 'Create Ticket Reply Request Payload',
      type: 'object',
      properties: {
        body: {
          type: 'string',
          description: 'The message body of the note, which may contain HTML.',
          example: '<p>Okay!</p>',
        },
        message_type: {
          type: 'string',
          description: 'The type of the reply. Only `note` is supported at the moment.',
          example: 'note',
          default: 'note',
        },
        admin_id: {
          type: 'string',
          description: 'The id of the admin who is making the note.',
          example: '1234',
        },
      },
      required: ['body', 'admin_id'],
    },
    create_ticket_request: {
      description: 'You can create a Ticket',
      type: 'object',
      title: 'Create Ticket Request Payload',
      properties: {
        ticket_type_id: {
          type: 'string',
          description: 'The ID of the type of ticket you want to create',
          example: '1234',
        },
        contacts: {
          type: 'array',
          description: 'The list of contacts (users or leads) affected by this ticket. Currently only one is allowed',
          items: {
            type: 'object',
            oneOf: [
              {
                title: 'ID',
                properties: {
                  id: {
                    type: 'string',
                    description: 'The identifier for the contact as given by Intercom.',
                  },
                },
                required: ['id'],
              },
              {
                title: 'External ID',
                properties: {
                  external_id: {
                    type: 'string',
                    description:
                      'The external_id you have defined for the contact who is being added as a participant.',
                  },
                },
                required: ['external_id'],
              },
              {
                title: 'Email',
                properties: {
                  email: {
                    type: 'string',
                    description:
                      'The email you have defined for the contact who is being added as a participant. If a contact with this email does not exist, one will be created.',
                  },
                },
                required: ['email'],
              },
            ],
          },
          example: [
            {
              id: '1234',
            },
          ],
        },
        company_id: {
          type: 'string',
          description:
            'The ID of the company that the ticket is associated with. The ID that you set upon company creation.',
          example: '1234',
        },
        ticket_attributes: {
          $ref: '#/components/schemas/ticket_request_custom_attributes',
        },
      },
      required: ['ticket_type_id', 'contacts'],
    },
    create_ticket_type_attribute_request: {
      description: 'You can create a Ticket Type Attribute',
      type: 'object',
      title: 'Create Ticket Type Attribute Request Payload',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the ticket type attribute',
          example: 'Bug Priority',
        },
        description: {
          type: 'string',
          description: 'The description of the attribute presented to the teammate or contact',
          example: 'Priority level of the bug',
        },
        data_type: {
          type: 'string',
          description: 'The data type of the attribute',
          enum: ['string', 'list', 'integer', 'decimal', 'boolean', 'datetime', 'files'],
          example: 'string',
        },
        required_to_create: {
          type: 'boolean',
          description:
            'Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.',
          default: false,
          example: false,
        },
        required_to_create_for_contacts: {
          type: 'boolean',
          description:
            'Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.',
          default: false,
          example: false,
        },
        visible_on_create: {
          type: 'boolean',
          description: 'Whether the attribute is visible to teammates when creating a ticket in Inbox.',
          default: true,
          example: true,
        },
        visible_to_contacts: {
          type: 'boolean',
          description: 'Whether the attribute is visible to contacts when creating a ticket in Messenger.',
          default: true,
          example: true,
        },
        multiline: {
          type: 'boolean',
          description: 'Whether the attribute allows multiple lines of text (only applicable to string attributes)',
          example: false,
        },
        list_items: {
          type: 'string',
          description: 'A comma delimited list of items for the attribute value (only applicable to list attributes)',
          example: 'Low Priority,Medium Priority,High Priority',
        },
        allow_multiple_values: {
          type: 'boolean',
          description:
            'Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)',
          example: false,
        },
      },
      required: ['name', 'description', 'data_type'],
    },
    create_ticket_type_request: {
      description:
        'The request payload for creating a ticket type.\n  You can copy the `icon` property for your ticket type from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)\n',
      type: 'object',
      title: 'Create Ticket Type Request Payload',
      nullable: true,
      properties: {
        name: {
          type: 'string',
          description: 'The name of the ticket type.',
          example: 'Bug',
        },
        description: {
          type: 'string',
          description: 'The description of the ticket type.',
          example: 'Used for tracking bugs',
        },
        icon: {
          type: 'string',
          description: 'The icon of the ticket type.',
          example: '🐞',
          default: '🎟️',
        },
        is_internal: {
          type: 'boolean',
          description:
            'Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. This is currently a limited attribute.',
          example: false,
          default: false,
        },
      },
      required: ['name'],
    },
    cursor_pages: {
      title: 'Cursor based pages',
      type: 'object',
      description:
        'Cursor-based pagination is a technique used in the Intercom API to navigate through large amounts of data.\nA "cursor" or pointer is used to keep track of the current position in the result set, allowing the API to return the data in small chunks or "pages" as needed.\n',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: 'the type of object `pages`.',
          example: 'pages',
          enum: ['pages'],
        },
        page: {
          type: 'integer',
          description: 'The current page',
          example: 1,
        },
        next: {
          $ref: '#/components/schemas/starting_after_paging',
        },
        per_page: {
          type: 'integer',
          description: 'Number of results per page',
          example: 2,
        },
        total_pages: {
          type: 'integer',
          description: 'Total number of pages',
          example: 13,
        },
      },
    },
    custom_attributes: {
      title: 'Custom Attributes',
      type: 'object',
      description:
        'An object containing the different custom attributes associated to the conversation as key-value pairs. For relationship attributes the value will be a list of custom object instance models.',
      additionalProperties: {
        anyOf: [
          {
            type: 'string',
          },
          {
            $ref: '#/components/schemas/custom_object_instance',
          },
        ],
      },
    },
    custom_object_instance: {
      title: 'Custom Object Instance',
      type: 'object',
      'x-tags': ['Custom Object Instances'],
      nullable: true,
      description:
        'A Custom Object Instance represents an instance of a custom object type. This allows you to create and set custom attributes to store data about your customers that is not already captured by Intercom. The parent object includes recommended default attributes and you can add your own custom attributes.',
      properties: {
        id: {
          type: 'string',
          description: 'The Intercom defined id representing the custom object instance.',
          example: '5a7a19e9f59ae20001d1c1e6',
        },
        external_id: {
          type: 'string',
          description: 'The id you have defined for the custom object instance.',
          example: '0001d1c1e65a7a19e9f59ae2',
        },
        type: {
          type: 'string',
          description:
            'The identifier of the custom object type that defines the structure of the custom object instance.',
          example: 'Order',
        },
        custom_attributes: {
          type: 'object',
          description: 'The custom attributes you have set on the custom object instance.',
          additionalProperties: {
            type: 'string',
          },
        },
      },
    },
    customer_request: {
      type: 'object',
      nullable: true,
      oneOf: [
        {
          title: 'Intercom User ID',
          properties: {
            intercom_user_id: {
              type: 'string',
              description: 'The identifier for the contact as given by Intercom.',
              example: '6329bd9ffe4e2e91dac76188',
            },
          },
          required: ['intercom_user_id'],
        },
        {
          title: 'User ID',
          properties: {
            user_id: {
              type: 'string',
              description: 'The external_id you have defined for the contact who is being added as a participant.',
              example: '2e91dac761886329bd9ffe4e',
            },
          },
          required: ['user_id'],
        },
        {
          title: 'Email',
          properties: {
            email: {
              type: 'string',
              description: 'The email you have defined for the contact who is being added as a participant.',
              example: 'sam.sung@example.com',
            },
          },
          required: ['email'],
        },
      ],
    },
    data_attribute: {
      title: 'Data Attribute',
      type: 'object',
      'x-tags': ['Data Attributes'],
      description:
        'Data Attributes are metadata used to describe your contact, company and conversation models. These include standard and custom attributes. By using the data attributes endpoint, you can get the global list of attributes for your workspace, as well as create and archive custom attributes.',
      properties: {
        type: {
          type: 'string',
          description: 'Value is `data_attribute`.',
          enum: ['data_attribute'],
          example: 'data_attribute',
        },
        id: {
          type: 'integer',
          description:
            'The unique identifier for the data attribute which is given by Intercom. Only available for custom attributes.',
          example: 12878,
        },
        model: {
          type: 'string',
          description: 'Value is `contact` for user/lead attributes and `company` for company attributes.',
          enum: ['contact', 'company'],
          example: 'contact',
        },
        name: {
          type: 'string',
          description: 'Name of the attribute.',
          example: 'paid_subscriber',
        },
        full_name: {
          type: 'string',
          description:
            "Full name of the attribute. Should match the name unless it's a nested attribute. We can split full_name on `.` to access nested user object values.",
          example: 'custom_attributes.paid_subscriber',
        },
        label: {
          type: 'string',
          description: 'Readable name of the attribute (i.e. name you see in the UI)',
          example: 'Paid Subscriber',
        },
        description: {
          type: 'string',
          description: 'Readable description of the attribute.',
          example: 'Whether the user is a paid subscriber.',
        },
        data_type: {
          type: 'string',
          description: 'The data type of the attribute.',
          enum: ['string', 'integer', 'float', 'boolean', 'date'],
          example: 'boolean',
        },
        options: {
          type: 'array',
          description: 'List of predefined options for attribute value.',
          items: {
            type: 'string',
          },
          example: ['true', 'false'],
        },
        api_writable: {
          type: 'boolean',
          description: 'Can this attribute be updated through API',
          example: true,
        },
        messenger_writable: {
          type: 'boolean',
          description: 'Can this attribute be updated by the Messenger',
          example: false,
        },
        ui_writable: {
          type: 'boolean',
          description: 'Can this attribute be updated in the UI',
          example: true,
        },
        custom: {
          type: 'boolean',
          description: 'Set to true if this is a CDA',
          example: true,
        },
        archived: {
          type: 'boolean',
          description: 'Is this attribute archived. (Only applicable to CDAs)',
          example: false,
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the attribute was created as a UTC Unix timestamp',
          example: 1671028894,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the attribute was last updated as a UTC Unix timestamp',
          example: 1671028894,
        },
        admin_id: {
          type: 'string',
          description: 'Teammate who created the attribute. Only applicable to CDAs',
          example: '5712945',
        },
      },
    },
    data_attribute_list: {
      title: 'Data Attribute List',
      type: 'object',
      description: 'A list of all data attributes belonging to a workspace for contacts, companies or conversations.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['list'],
          example: 'list',
        },
        data: {
          type: 'array',
          description: 'A list of data attributes',
          items: {
            $ref: '#/components/schemas/data_attribute',
          },
        },
      },
    },
    data_event: {
      title: 'Data Event',
      type: 'object',
      'x-tags': ['Data Events'],
      description: 'Data events are used to notify Intercom of changes to your data.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['event'],
          example: 'event',
        },
        event_name: {
          type: 'string',
          description:
            "The name of the event that occurred. This is presented to your App's admins when filtering and creating segments - a good event name is typically a past tense 'verb-noun' combination, to improve readability, for example `updated-plan`.",
          example: 'invited-friend',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the event occurred as a UTC Unix timestamp',
          example: 1671028894,
        },
        user_id: {
          type: 'string',
          description: 'Your identifier for the user.',
          example: '314159',
        },
        id: {
          type: 'string',
          description: 'Your identifier for a lead or a user.',
          example: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
        },
        intercom_user_id: {
          type: 'string',
          description: 'The Intercom identifier for the user.',
          example: '63a0979a5eeebeaf28dd56ba',
        },
        email: {
          type: 'string',
          description:
            'An email address for your user. An email should only be used where your application uses email to uniquely identify users.',
          example: 'frodo.baggins@example.com',
        },
        metadata: {
          type: 'object',
          description: 'Optional metadata about the event.',
          additionalProperties: {
            type: 'string',
          },
          example: {
            invite_code: 'ADDAFRIEND',
          },
        },
      },
      required: ['event_name', 'created_at'],
    },
    data_event_list: {
      title: 'Data Event List',
      type: 'object',
      description: 'This will return a list of data events for the App.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['event.list'],
          example: 'event.list',
        },
        events: {
          type: 'array',
          description: 'A list of data events',
          items: {
            $ref: '#/components/schemas/data_event',
          },
        },
        pages: {
          type: 'object',
          description: 'Pagination',
          properties: {
            next: {
              type: 'string',
              example:
                'https://api.intercom.io/events?per_page=2&before=1389913941064&intercom_user_id=63a0979a5eeebeaf28dd56ba&type=user"',
            },
            since: {
              type: 'string',
              example:
                'https://api.intercom.io/events?intercom_user_id=63a0979a5eeebeaf28dd56ba&type=user&since=1389913941065',
            },
          },
        },
      },
    },
    data_event_summary: {
      title: 'Data Event Summary',
      type: 'object',
      description: 'This will return a summary of data events for the App.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['event.summary'],
          example: 'event.summary',
        },
        email: {
          type: 'string',
          description: 'The email address of the user',
          example: 'Sam.Sung@example.com',
        },
        intercom_user_id: {
          type: 'string',
          description: 'The Intercom user ID of the user',
          example: '63a0979a5eeebeaf28dd56ba',
        },
        user_id: {
          type: 'string',
          description: 'The user ID of the user',
          example: '62b997f288e14803c5006932',
        },
        events: {
          type: 'array',
          description: 'A summary of data events',
          items: {
            $ref: '#/components/schemas/data_event_summary_item',
          },
        },
      },
    },
    data_event_summary_item: {
      title: 'Data Event Summary Item',
      type: 'object',
      description: 'This will return a summary of a data event for the App.',
      nullable: true,
      properties: {
        name: {
          type: 'string',
          description: 'The name of the event',
          example: 'placed-order',
        },
        first: {
          type: 'string',
          description: 'The first time the event was sent',
          example: '2014-01-16T23:12:21.000+00:00',
        },
        last: {
          type: 'string',
          description: 'The last time the event was sent',
          example: '2014-01-16T23:12:21.000+00:00 ',
        },
        count: {
          type: 'integer',
          description: 'The number of times the event was sent',
          example: 1,
        },
        description: {
          type: 'string',
          description: 'The description of the event',
          example: 'A user placed an order',
        },
      },
    },
    data_export: {
      title: 'Data Export',
      type: 'object',
      'x-tags': ['Data Export'],
      description: 'The data export api is used to view all message sent & viewed in a given timeframe.',
      properties: {
        job_identfier: {
          type: 'string',
          description: 'The identifier for your job.',
          example: 'orzzsbd7hk67xyu',
        },
        status: {
          type: 'string',
          enum: ['pending', 'in_progress', 'failed', 'completed', 'no_data', 'canceled'],
          description: 'The current state of your job.',
          example: 'pending',
        },
        download_expires_at: {
          type: 'string',
          description: 'The time after which you will not be able to access the data.',
          example: '1674917488',
        },
        download_url: {
          type: 'string',
          description: 'The location where you can download your data.',
          example: 'https://api.intercom.test/download/messages/data/example',
        },
      },
    },
    data_export_csv: {
      title: 'Data Export CSV',
      type: 'object',
      description: 'A CSV output file',
      properties: {
        user_id: {
          type: 'string',
          description: 'The user_id of the user who was sent the message.',
        },
        user_external_id: {
          type: 'string',
          description: 'The external_user_id of the user who was sent the message',
        },
        company_id: {
          type: 'string',
          description:
            'The company ID of the user in relation to the message that was sent. Will return -1 if no company is present.',
        },
        email: {
          type: 'string',
          description: 'The users email who was sent the message.',
        },
        name: {
          type: 'string',
          description: 'The full name of the user receiving the message',
        },
        ruleset_id: {
          type: 'string',
          description: 'The id of the message.',
        },
        content_id: {
          type: 'string',
          description: 'The specific content that was received. In an A/B test each version has its own Content ID.',
        },
        content_type: {
          type: 'string',
          description: 'Email, Chat, Post etc.',
        },
        content_title: {
          type: 'string',
          description: 'The title of the content you see in your Intercom workspace.',
        },
        ruleset_version_id: {
          type: 'string',
          description:
            'As you edit content we record new versions. This ID can help you determine which version of a piece of content that was received.',
        },
        receipt_id: {
          type: 'string',
          description:
            'ID for this receipt. Will be included with any related stats in other files to identify this specific delivery of a message.',
        },
        received_at: {
          type: 'integer',
          description: 'Timestamp for when the receipt was recorded.',
        },
        series_id: {
          type: 'string',
          description: 'The id of the series that this content is part of. Will return -1 if not part of a series.',
        },
        series_title: {
          type: 'string',
          description: 'The title of the series that this content is part of.',
        },
        node_id: {
          type: 'string',
          description:
            'The id of the series node that this ruleset is associated with. Each block in a series has a corresponding node_id.',
        },
        first_reply: {
          type: 'integer',
          description: 'The first time a user replied to this message if the content was able to receive replies.',
        },
        first_completion: {
          type: 'integer',
          description:
            'The first time a user completed this message if the content was able to be completed e.g. Tours, Surveys.',
        },
        first_series_completion: {
          type: 'integer',
          description: 'The first time the series this message was a part of was completed by the user.',
        },
        first_series_disengagement: {
          type: 'integer',
          description: 'The first time the series this message was a part of was disengaged by the user.',
        },
        first_series_exit: {
          type: 'integer',
          description: 'The first time the series this message was a part of was exited by the user.',
        },
        first_goal_success: {
          type: 'integer',
          description: 'The first time the user met this messages associated goal if one exists.',
        },
        first_open: {
          type: 'integer',
          description: 'The first time the user opened this message.',
        },
        first_click: {
          type: 'integer',
          description: 'The first time the series the user clicked on a link within this message.',
        },
        first_dismisall: {
          type: 'integer',
          description: 'The first time the series the user dismissed this message.',
        },
        first_unsubscribe: {
          type: 'integer',
          description: 'The first time the user unsubscribed from this message.',
        },
        first_hard_bounce: {
          type: 'integer',
          description: 'The first time this message hard bounced for this user',
        },
      },
    },
    deleted_article_object: {
      title: 'Deleted Article Object',
      type: 'object',
      description: 'Response returned when an object is deleted',
      properties: {
        id: {
          type: 'string',
          description: 'The unique identifier for the article which you provided in the URL.',
          example: '6890762',
        },
        object: {
          type: 'string',
          description: 'The type of object which was deleted. - article',
          enum: ['article'],
          example: 'article',
        },
        deleted: {
          type: 'boolean',
          description: 'Whether the article was deleted successfully or not.',
          example: true,
        },
      },
    },
    deleted_collection_object: {
      title: 'Deleted Collection Object',
      type: 'object',
      description: 'Response returned when an object is deleted',
      properties: {
        id: {
          type: 'string',
          description: 'The unique identifier for the collection which you provided in the URL.',
          example: '6890762',
        },
        object: {
          type: 'string',
          description: 'The type of object which was deleted. - `collection`',
          enum: ['collection'],
          example: 'collection',
        },
        deleted: {
          type: 'boolean',
          description: 'Whether the collection was deleted successfully or not.',
          example: true,
        },
      },
    },
    deleted_company_object: {
      title: 'Deleted Company Object',
      type: 'object',
      description: 'Response returned when an object is deleted',
      properties: {
        id: {
          type: 'string',
          description: 'The unique identifier for the company which is given by Intercom.',
          example: '5b7e8b2f-7a1a-4e6c-8e1b-4f9d4f4c4d4f',
        },
        object: {
          type: 'string',
          description: 'The type of object which was deleted. - `company`',
          enum: ['company'],
          example: 'company',
        },
        deleted: {
          type: 'boolean',
          description: 'Whether the company was deleted successfully or not.',
          example: true,
        },
      },
    },
    deleted_object: {
      title: 'Deleted Object',
      type: 'object',
      description: 'Response returned when an object is deleted',
      properties: {
        id: {
          type: 'string',
          description: 'The unique identifier for the news item which you provided in the URL.',
          example: '6890762',
        },
        object: {
          type: 'string',
          description: 'The type of object which was deleted - news-item.',
          enum: ['news-item'],
          example: 'news-item',
        },
        deleted: {
          type: 'boolean',
          description: 'Whether the news item was deleted successfully or not.',
          example: true,
        },
      },
    },
    deleted_section_object: {
      title: 'Deleted Section Object',
      type: 'object',
      description: 'Response returned when an object is deleted',
      properties: {
        id: {
          type: 'string',
          description: 'The unique identifier for the section which you provided in the URL.',
          example: '6890762',
        },
        object: {
          type: 'string',
          description: 'The type of object which was deleted. - `section`',
          enum: ['section'],
          example: 'section',
        },
        deleted: {
          type: 'boolean',
          description: 'Whether the section was deleted successfully or not.',
          example: true,
        },
      },
    },
    detach_contact_from_conversation_request: {
      properties: {
        admin_id: {
          type: 'string',
          description: 'The `id` of the admin who is performing the action.',
          example: '5017690',
        },
      },
      required: ['admin_id'],
    },
    error: {
      type: 'object',
      title: 'Error',
      description:
        'The API will return an Error List for a failed request, which will contain one or more Error objects.',
      properties: {
        type: {
          type: 'string',
          description: 'The type is error.list',
          example: 'error.list',
        },
        request_id: {
          type: 'string',
          nullable: true,
          format: 'uuid',
          description: '',
          example: 'f93ecfa8-d08a-4325-8694-89aeb89c8f85',
        },
        errors: {
          type: 'array',
          description: 'An array of one or more error objects',
          items: {
            properties: {
              code: {
                type: 'string',
                description: 'A string indicating the kind of error, used to further qualify the HTTP response code',
                example: 'unauthorized',
              },
              message: {
                type: 'string',
                nullable: true,
                description: 'Optional. Human readable description of the error.',
                example: 'Access Token Invalid',
              },
              field: {
                type: 'string',
                nullable: true,
                description: 'Optional. Used to identify a particular field or query parameter that was in error.',
                example: 'email',
              },
            },
            required: ['code'],
          },
        },
      },
      required: ['type', 'errors'],
    },
    file_attribute: {
      title: 'File',
      type: 'object',
      description: 'The value describing a file upload set for a custom attribute',
      properties: {
        type: {
          type: 'string',
          example: 'upload',
        },
        name: {
          type: 'string',
          description: 'The name of the file',
          example: 'Screenshot.png',
        },
        url: {
          type: 'string',
          description: 'The url of the file. This is a temporary URL and will expire after 30 minutes.',
          example: 'https://intercom-attachments-1.com/.../Screenshot.png',
        },
        content_type: {
          type: 'string',
          description: 'The type of file',
          example: 'image/png',
        },
        filesize: {
          type: 'integer',
          description: 'The size of the file in bytes',
          example: 11308309,
        },
        width: {
          type: 'integer',
          description: 'The width of the file in pixels, if applicable',
          example: 3024,
        },
        height: {
          type: 'integer',
          description: 'The height of the file in pixels, if applicable',
          example: 1964,
        },
      },
    },
    group_content: {
      title: 'Group Content',
      type: 'object',
      description: 'The Content of a Group.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - `group_content` .',
          enum: [null, 'group_content'],
          example: 'group_content',
          nullable: true,
        },
        name: {
          type: 'string',
          description: 'The name of the collection or section.',
          example: 'Collection name',
        },
        description: {
          type: 'string',
          description: 'The description of the collection. Only available for collections.',
          example: ' Collection description',
        },
      },
    },
    group_translated_content: {
      title: 'Group Translated Content',
      type: 'object',
      description:
        'The Translated Content of an Group. The keys are the locale codes and the values are the translated content of the Group.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - group_translated_content.',
          nullable: true,
          enum: [null, 'group_translated_content'],
          example: 'group_translated_content',
        },
        ar: {
          description: 'The content of the group in Arabic',
          $ref: '#/components/schemas/group_content',
        },
        bg: {
          description: 'The content of the group in Bulgarian',
          $ref: '#/components/schemas/group_content',
        },
        bs: {
          description: 'The content of the group in Bosnian',
          $ref: '#/components/schemas/group_content',
        },
        ca: {
          description: 'The content of the group in Catalan',
          $ref: '#/components/schemas/group_content',
        },
        cs: {
          description: 'The content of the group in Czech',
          $ref: '#/components/schemas/group_content',
        },
        da: {
          description: 'The content of the group in Danish',
          $ref: '#/components/schemas/group_content',
        },
        de: {
          description: 'The content of the group in German',
          $ref: '#/components/schemas/group_content',
        },
        el: {
          description: 'The content of the group in Greek',
          $ref: '#/components/schemas/group_content',
        },
        en: {
          description: 'The content of the group in English',
          $ref: '#/components/schemas/group_content',
        },
        es: {
          description: 'The content of the group in Spanish',
          $ref: '#/components/schemas/group_content',
        },
        et: {
          description: 'The content of the group in Estonian',
          $ref: '#/components/schemas/group_content',
        },
        fi: {
          description: 'The content of the group in Finnish',
          $ref: '#/components/schemas/group_content',
        },
        fr: {
          description: 'The content of the group in French',
          $ref: '#/components/schemas/group_content',
        },
        he: {
          description: 'The content of the group in Hebrew',
          $ref: '#/components/schemas/group_content',
        },
        hr: {
          description: 'The content of the group in Croatian',
          $ref: '#/components/schemas/group_content',
        },
        hu: {
          description: 'The content of the group in Hungarian',
          $ref: '#/components/schemas/group_content',
        },
        id: {
          description: 'The content of the group in Indonesian',
          $ref: '#/components/schemas/group_content',
        },
        it: {
          description: 'The content of the group in Italian',
          $ref: '#/components/schemas/group_content',
        },
        ja: {
          description: 'The content of the group in Japanese',
          $ref: '#/components/schemas/group_content',
        },
        ko: {
          description: 'The content of the group in Korean',
          $ref: '#/components/schemas/group_content',
        },
        lt: {
          description: 'The content of the group in Lithuanian',
          $ref: '#/components/schemas/group_content',
        },
        lv: {
          description: 'The content of the group in Latvian',
          $ref: '#/components/schemas/group_content',
        },
        mn: {
          description: 'The content of the group in Mongolian',
          $ref: '#/components/schemas/group_content',
        },
        nb: {
          description: 'The content of the group in Norwegian',
          $ref: '#/components/schemas/group_content',
        },
        nl: {
          description: 'The content of the group in Dutch',
          $ref: '#/components/schemas/group_content',
        },
        pl: {
          description: 'The content of the group in Polish',
          $ref: '#/components/schemas/group_content',
        },
        pt: {
          description: 'The content of the group in Portuguese (Portugal)',
          $ref: '#/components/schemas/group_content',
        },
        ro: {
          description: 'The content of the group in Romanian',
          $ref: '#/components/schemas/group_content',
        },
        ru: {
          description: 'The content of the group in Russian',
          $ref: '#/components/schemas/group_content',
        },
        sl: {
          description: 'The content of the group in Slovenian',
          $ref: '#/components/schemas/group_content',
        },
        sr: {
          description: 'The content of the group in Serbian',
          $ref: '#/components/schemas/group_content',
        },
        sv: {
          description: 'The content of the group in Swedish',
          $ref: '#/components/schemas/group_content',
        },
        tr: {
          description: 'The content of the group in Turkish',
          $ref: '#/components/schemas/group_content',
        },
        vi: {
          description: 'The content of the group in Vietnamese',
          $ref: '#/components/schemas/group_content',
        },
        'pt-BR': {
          description: 'The content of the group in Portuguese (Brazil)',
          $ref: '#/components/schemas/group_content',
        },
        'zh-CN': {
          description: 'The content of the group in Chinese (China)',
          $ref: '#/components/schemas/group_content',
        },
        'zh-TW': {
          description: 'The content of the group in Chinese (Taiwan)',
          $ref: '#/components/schemas/group_content',
        },
      },
    },
    help_center: {
      title: 'Help Center',
      type: 'object',
      'x-tags': ['Help Center'],
      description: 'Help Centers contain collections',
      properties: {
        id: {
          type: 'string',
          description: 'The unique identifier for the Help Center which is given by Intercom.',
          example: '123',
        },
        workspace_id: {
          type: 'string',
          description: 'The id of the workspace which the Help Center belongs to.',
          example: 'hfi1bx4l',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time when the Help Center was created.',
          example: 1672928359,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time when the Help Center was last updated.',
          example: 1672928610,
        },
        identifier: {
          type: 'string',
          description: 'The identifier of the Help Center. This is used in the URL of the Help Center.',
          example: 'intercom',
        },
        website_turned_on: {
          type: 'boolean',
          description: 'Whether the Help Center is turned on or not. This is controlled in your Help Center settings.',
          example: true,
        },
        display_name: {
          type: 'string',
          description: 'The display name of the Help Center only seen by teammates.',
          example: 'Intercom Help Center',
        },
      },
    },
    help_center_list: {
      title: 'Help Centers',
      type: 'object',
      'x-tags': ['Help Center'],
      description: 'A list of Help Centers belonging to the App',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object - `list`.',
          enum: ['list'],
          example: 'list',
        },
        data: {
          type: 'array',
          description: 'An array of Help Center objects',
          items: {
            $ref: '#/components/schemas/help_center',
          },
        },
      },
    },
    intercom_version: {
      description: "Intercom API version.</br>By default, it's equal to the version set in the app package.",
      type: 'string',
      example: '2.9',
      default: '2.9',
      enum: [
        '1.0',
        '1.1',
        '1.2',
        '1.3',
        '1.4',
        '2.0',
        '2.1',
        '2.2',
        '2.3',
        '2.4',
        '2.5',
        '2.6',
        '2.7',
        '2.8',
        '2.9',
        '2.10',
        '2.11',
        'Unstable',
      ],
    },
    merge_contacts_request: {
      description: 'Merge contact data.',
      type: 'object',
      title: 'Merge contact data',
      properties: {
        from: {
          type: 'string',
          description: 'The unique identifier for the contact to merge away from. Must be a lead.',
          example: '5d70dd30de4efd54f42fd526',
        },
        into: {
          type: 'string',
          description: 'The unique identifier for the contact to merge into. Must be a user.',
          example: '5ba682d23d7cf92bef87bfd4',
        },
      },
    },
    message: {
      type: 'object',
      title: 'Message',
      'x-tags': ['Messages'],
      description:
        'Message are how you reach out to contacts in Intercom. They are created when an admin sends an outbound message to a contact.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the message',
          example: 'user_message',
        },
        id: {
          type: 'string',
          description: 'The id representing the message.',
          example: '1488971108',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the conversation was created.',
          example: 1667560812,
        },
        subject: {
          type: 'string',
          description: 'The subject of the message. Only present if message_type: email.',
          example: 'Greetings',
        },
        body: {
          type: 'string',
          description: 'The message body, which may contain HTML.',
          example: 'Hello',
        },
        message_type: {
          type: 'string',
          enum: ['email', 'inapp', 'facebook', 'twitter'],
          description: 'The type of message that was sent. Can be email, inapp, facebook or twitter.',
          example: 'inapp',
        },
        conversation_id: {
          type: 'string',
          description: 'The associated conversation_id',
          example: '64619700005570',
        },
      },
      required: ['type', 'id', 'created_at', 'body', 'message_type'],
    },
    multiple_filter_search_request: {
      title: 'Multiple Filter Search Request',
      description: 'Search using Intercoms Search APIs with more than one filter.',
      type: 'object',
      properties: {
        operator: {
          type: 'string',
          enum: ['AND', 'OR'],
          description: 'An operator to allow boolean inspection between multiple fields.',
          example: 'AND',
        },
        value: {
          oneOf: [
            {
              type: 'array',
              description: 'Add mutiple filters.',
              title: 'multiple filter search request',
              items: {
                $ref: '#/components/schemas/multiple_filter_search_request',
              },
            },
            {
              type: 'array',
              description: 'Add a single filter field.',
              title: 'single filter search request',
              items: {
                $ref: '#/components/schemas/single_filter_search_request',
              },
            },
          ],
        },
      },
    },
    news_item: {
      title: 'News Item',
      type: 'object',
      'x-tags': ['News'],
      description:
        'A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object.',
          enum: ['news-item'],
          example: 'news-item',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the news item which is given by Intercom.',
          example: '141',
        },
        workspace_id: {
          type: 'string',
          description: 'The id of the workspace which the news item belongs to.',
          example: 't74hdn32',
        },
        title: {
          type: 'string',
          description: 'The title of the news item.',
          example: 'New feature: News Items',
        },
        body: {
          type: 'string',
          description: 'The news item body, which may contain HTML.',
          example:
            'We are excited to announce the launch of News Items, a new content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers.',
        },
        sender_id: {
          type: 'integer',
          description: 'The id of the sender of the news item. Must be a teammate on the workspace.',
          example: 123,
        },
        state: {
          type: 'string',
          description:
            'News items will not be visible to your users in the assigned newsfeeds until they are set live.',
          enum: ['draft', 'live'],
          example: 'live',
        },
        newsfeed_assignments: {
          type: 'array',
          description: 'A list of newsfeed_assignments to assign to the specified newsfeed.',
          items: {
            $ref: '#/components/schemas/newsfeed_assignment',
          },
        },
        labels: {
          type: 'array',
          description: 'Label names displayed to users to categorize the news item.',
          items: {
            type: 'string',
            nullable: true,
            description: 'The label name.',
            example: 'Product Update',
          },
        },
        cover_image_url: {
          type: 'string',
          format: 'uri',
          nullable: true,
          description: 'URL of the image used as cover. Must have .jpg or .png extension.',
          example: 'https://example.com/cover.jpg',
        },
        reactions: {
          type: 'array',
          description: 'Ordered list of emoji reactions to the news item. When empty, reactions are disabled.',
          items: {
            type: 'string',
            nullable: true,
            description: 'The emoji reaction to the news item.',
            example: '👍',
          },
        },
        deliver_silently: {
          type: 'boolean',
          description:
            'When set to true, the news item will appear in the messenger newsfeed without showing a notification badge.',
          example: true,
        },
        created_at: {
          type: 'integer',
          format: 'timestamp',
          description: 'Timestamp for when the news item was created.',
          example: 1610589632,
        },
        updated_at: {
          type: 'integer',
          format: 'timestamp',
          description: 'Timestamp for when the news item was last updated.',
          example: 1610589632,
        },
      },
    },
    news_item_request: {
      description:
        'A News Item is a content type in Intercom enabling you to announce product updates, company news, promotions, events and more with your customers.',
      type: 'object',
      title: 'Create News Item Request',
      properties: {
        title: {
          type: 'string',
          description: 'The title of the news item.',
          example: 'Halloween is here!',
        },
        body: {
          type: 'string',
          description: 'The news item body, which may contain HTML.',
          example: '<p>New costumes in store for this spooky season</p>',
        },
        sender_id: {
          type: 'integer',
          description: 'The id of the sender of the news item. Must be a teammate on the workspace.',
          example: 123,
        },
        state: {
          type: 'string',
          description:
            'News items will not be visible to your users in the assigned newsfeeds until they are set live.',
          enum: ['draft', 'live'],
          example: 'live',
        },
        deliver_silently: {
          type: 'boolean',
          description:
            'When set to `true`, the news item will appear in the messenger newsfeed without showing a notification badge.',
          example: true,
        },
        labels: {
          type: 'array',
          description: 'Label names displayed to users to categorize the news item.',
          items: {
            type: 'string',
          },
          example: ['Product', 'Update', 'New'],
        },
        reactions: {
          type: 'array',
          description: 'Ordered list of emoji reactions to the news item. When empty, reactions are disabled.',
          items: {
            type: 'string',
            nullable: true,
          },
          example: ['😆', '😅'],
        },
        newsfeed_assignments: {
          type: 'array',
          description: 'A list of newsfeed_assignments to assign to the specified newsfeed.',
          items: {
            $ref: '#/components/schemas/newsfeed_assignment',
          },
        },
      },
      required: ['title', 'sender_id'],
    },
    newsfeed: {
      title: 'Newsfeed',
      type: 'object',
      'x-tags': ['News'],
      description:
        'A newsfeed is a collection of news items, targeted to a specific audience.\n\nNewsfeeds currently cannot be edited through the API, please refer to [this article](https://www.intercom.com/help/en/articles/6362267-getting-started-with-news) to set up your newsfeeds in Intercom.\n',
      properties: {
        id: {
          type: 'string',
          description: 'The unique identifier for the newsfeed which is given by Intercom.',
          example: '12312',
        },
        type: {
          type: 'string',
          description: 'The type of object.',
          enum: ['newsfeed'],
          example: 'newsfeed',
        },
        name: {
          type: 'string',
          description: 'The name of the newsfeed. This name will never be visible to your users.',
          example: 'My Newsfeed',
        },
        created_at: {
          type: 'integer',
          format: 'timestamp',
          description: 'Timestamp for when the newsfeed was created.',
          example: 1674917488,
        },
        updated_at: {
          type: 'integer',
          format: 'timestamp',
          description: 'Timestamp for when the newsfeed was last updated.',
          example: 1674917488,
        },
      },
    },
    newsfeed_assignment: {
      title: 'Newsfeed Assignment',
      type: 'object',
      'x-tags': ['News'],
      description: 'Assigns a news item to a newsfeed.',
      properties: {
        newsfeed_id: {
          type: 'integer',
          description:
            'The unique identifier for the newsfeed which is given by Intercom. Publish dates cannot be in the future, to schedule news items use the dedicated feature in app (see this article).',
          example: 198313,
        },
        published_at: {
          type: 'integer',
          format: 'timestamp',
          description:
            'Publish date of the news item on the newsfeed, use this field if you want to set a publish date in the past (e.g. when importing existing news items). On write, this field will be ignored if the news item state is "draft".',
          example: 1674917488,
        },
      },
    },
    note: {
      title: 'Note',
      type: 'object',
      'x-tags': ['Notes'],
      description: 'Notes allow you to annotate and comment on your contacts.',
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `note`.",
          example: 'note',
        },
        id: {
          type: 'string',
          description: 'The id of the note.',
          example: '17495962',
        },
        created_at: {
          type: 'integer',
          format: 'timestamp',
          description: 'The time the note was created.',
          example: 1674589321,
        },
        contact: {
          type: 'object',
          description: 'Represents the contact that the note was created about.',
          nullable: true,
          properties: {
            type: {
              type: 'string',
              description: "String representing the object's type. Always has the value `contact`.",
            },
            id: {
              type: 'string',
              description: 'The id of the contact.',
              example: '214656d0c743eafcfde7f248',
            },
          },
        },
        author: {
          $ref: '#/components/schemas/admin',
          description: 'Optional. Represents the Admin that created the note.',
        },
        body: {
          type: 'string',
          description: 'The body text of the note.',
          example: '<p>Text for the note.</p>',
        },
      },
    },
    note_list: {
      title: 'Paginated Response',
      type: 'object',
      description: 'A paginated list of notes associated with a contact.',
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `list`.",
          example: 'list',
        },
        data: {
          type: 'array',
          description: 'An array of notes.',
          items: {
            $ref: '#/components/schemas/note',
          },
        },
        total_count: {
          type: 'integer',
          description: 'A count of the total number of notes.',
          example: 1,
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
      },
    },
    open_conversation_request: {
      title: 'Open Conversation Request',
      type: 'object',
      description: 'Payload of the request to open a conversation',
      properties: {
        message_type: {
          type: 'string',
          enum: ['open'],
          example: 'open',
        },
        admin_id: {
          type: 'string',
          description: 'The id of the admin who is performing the action.',
          example: '5017690',
        },
      },
      required: ['message_type', 'admin_id'],
    },
    pages_link: {
      title: 'Pagination Object',
      type: 'object',
      description:
        'The majority of list resources in the API are paginated to allow clients to traverse data over multiple requests.\n\nTheir responses are likely to contain a pages object that hosts pagination links which a client can use to paginate through the data without having to construct a query. The link relations for the pages field are as follows.\n',
      properties: {
        type: {
          type: 'string',
          example: 'pages',
          enum: ['pages'],
        },
        page: {
          type: 'integer',
          example: 1,
        },
        next: {
          type: 'string',
          format: 'uri',
          description:
            'A link to the next page of results. A response that does not contain a next link does not have further data to fetch.',
          nullable: true,
        },
        per_page: {
          type: 'integer',
          example: 50,
        },
        total_pages: {
          type: 'integer',
          example: 1,
        },
      },
    },
    paginated_response: {
      title: 'Paginated Response',
      type: 'object',
      description: 'Paginated Response',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object',
          enum: ['list', 'conversation.list'],
          example: 'list',
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
        total_count: {
          type: 'integer',
          description: 'A count of the total number of objects.',
          example: 1,
        },
        data: {
          type: 'array',
          description: 'An array of Objects',
          items: {
            anyOf: [
              {
                $ref: '#/components/schemas/news_item',
              },
              {
                $ref: '#/components/schemas/newsfeed',
              },
            ],
          },
        },
      },
    },
    part_attachment: {
      title: 'Part attachment',
      type: 'object',
      description: 'The file attached to a part',
      properties: {
        type: {
          type: 'string',
          description: 'The type of attachment',
          example: 'upload',
        },
        name: {
          type: 'string',
          description: 'The name of the attachment',
          example: 'example.png',
        },
        url: {
          type: 'string',
          description: 'The URL of the attachment',
          example: 'https://picsum.photos/200/300',
        },
        content_type: {
          type: 'string',
          description: 'The content type of the attachment',
          example: 'image/png',
        },
        filesize: {
          type: 'integer',
          description: 'The size of the attachment',
          example: 100,
        },
        width: {
          type: 'integer',
          description: 'The width of the attachment',
          example: 100,
        },
        height: {
          type: 'integer',
          description: 'The height of the attachment',
          example: 100,
        },
      },
    },
    phone_switch: {
      title: 'Phone Switch',
      type: 'object',
      description: 'Phone Switch Response',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: '',
          enum: ['phone_call_redirect'],
          default: 'phone_call_redirect',
          example: 'phone_call_redirect',
        },
        phone: {
          type: 'string',
          description:
            'Phone number in E.164 format, that has received the SMS to continue the conversation in the Messenger.',
          example: '+1 1234567890',
        },
      },
    },
    redact_conversation_request: {
      oneOf: [
        {
          title: 'Redact Conversation Part Request',
          type: 'object',
          description: 'Payload of the request to redact a conversation part',
          properties: {
            type: {
              type: 'string',
              enum: ['conversation_part'],
              description: 'The type of resource being redacted.',
              example: 'conversation_part',
            },
            conversation_id: {
              type: 'string',
              description: 'The id of the conversation.',
              example: '19894788788',
            },
            conversation_part_id: {
              type: 'string',
              description: 'The id of the conversation_part.',
              example: '19381789428',
            },
          },
          required: ['type', 'conversation_id', 'conversation_part_id'],
        },
        {
          title: 'Redact Conversation Source Request',
          type: 'object',
          description: 'Payload of the request to redact a conversation source',
          properties: {
            type: {
              type: 'string',
              enum: ['source'],
              description: 'The type of resource being redacted.',
              example: 'source',
            },
            conversation_id: {
              type: 'string',
              description: 'The id of the conversation.',
              example: '19894788788',
            },
            source_id: {
              type: 'string',
              description: 'The id of the source.',
              example: '19894781231',
            },
          },
          required: ['type', 'conversation_id', 'source_id'],
        },
      ],
    },
    reference: {
      title: 'Reference',
      type: 'object',
      description: 'reference to another object',
      properties: {
        type: {
          type: 'string',
          description: '',
          example: 'contact',
        },
        id: {
          type: 'string',
          nullable: true,
          description: '',
          example: '1a2b3c',
        },
      },
    },
    reply_conversation_request: {
      oneOf: [
        {
          $ref: '#/components/schemas/contact_reply_conversation_request',
        },
        {
          $ref: '#/components/schemas/admin_reply_conversation_request',
        },
      ],
    },
    search_request: {
      description: 'Search using Intercoms Search APIs.',
      type: 'object',
      title: 'Search data',
      properties: {
        query: {
          oneOf: [
            {
              $ref: '#/components/schemas/single_filter_search_request',
              title: 'Single filter search request',
            },
            {
              $ref: '#/components/schemas/multiple_filter_search_request',
              title: 'multiple filter search request',
            },
          ],
        },
        pagination: {
          $ref: '#/components/schemas/starting_after_paging',
        },
      },
      required: ['query'],
    },
    section: {
      title: 'Section',
      type: 'object',
      'x-tags': ['Help Center'],
      description: 'Sections are subdivisions of a collection, with a collection potentially having multiple sections.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object - `section`.',
          enum: ['section'],
          default: 'section',
          example: 'section',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the section which is given by Intercom.',
          example: '6871119',
        },
        workspace_id: {
          type: 'string',
          description: 'The id of the workspace which the section belongs to.',
          example: 'hfi1bx4l',
        },
        name: {
          type: 'string',
          description:
            "The name of the section. For multilingual sections, this will be the name of the default language's content.",
          example: 'Default language name',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description:
            "The time when the section was created. For multilingual sections, this will be the timestamp of creation of the default language's content.",
          example: 1672928359,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description:
            "The time when the section was last updated. For multilingual sections, this will be the timestamp of last update of the default language's content.",
          example: 1672928610,
        },
        url: {
          type: 'string',
          nullable: true,
          description:
            'The URL of the section. For multilingual help centers, this will be the URL of the section for the default language.',
          example: 'http://intercom.test/help/section/name',
        },
        icon: {
          type: 'string',
          nullable: true,
          description: 'The icon of the section.',
          example: 'book-bookmark',
        },
        order: {
          type: 'integer',
          description:
            "The order of the section in relation to others sections within a collection. Values go from `0` upwards. `0` is the default if there's no order.",
          example: '1',
        },
        parent_id: {
          oneOf: [
            {
              type: 'integer',
              title: 'Integer',
            },
            {
              type: 'string',
              title: 'String',
            },
          ],
          description: 'The id of the parent section.',
          example: 6871119,
        },
        default_locale: {
          type: 'string',
          description:
            'The default locale of the help center. This field is only returned for multilingual help centers.',
          example: 'en',
        },
        translated_content: {
          nullable: true,
          $ref: '#/components/schemas/group_translated_content',
        },
      },
    },
    section_list: {
      title: 'Sections',
      type: 'object',
      description: 'This will return a list of Sections for the App.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object - `list`.',
          enum: ['list'],
          example: 'list',
        },
        pages: {
          $ref: '#/components/schemas/cursor_pages',
        },
        total_count: {
          type: 'integer',
          description: 'A count of the total number of sections.',
          example: 12,
        },
        data: {
          type: 'array',
          description: 'An array of section objects',
          items: {
            $ref: '#/components/schemas/section',
          },
        },
      },
    },
    segment: {
      title: 'Segment',
      type: 'object',
      'x-tags': ['Segments'],
      description: 'A segment is a group of your contacts defined by the rules that you set.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of object.',
          enum: ['segment'],
          example: 'segment',
        },
        id: {
          type: 'string',
          description: 'The unique identifier representing the segment.',
          example: '56203d253cba154d39010062',
        },
        name: {
          type: 'string',
          description: 'The name of the segment.',
          example: 'Active',
        },
        created_at: {
          type: 'integer',
          description: 'The time the segment was created.',
          example: 1394621988,
        },
        updated_at: {
          type: 'integer',
          description: 'The time the segment was updated.',
          example: 1394622004,
        },
        person_type: {
          type: 'string',
          description: 'Type of the contact: contact (lead) or user.',
          enum: ['contact', 'user'],
          example: 'contact',
        },
        count: {
          type: 'integer',
          description:
            "The number of items in the user segment. It's returned when `include_count=true` is included in the request.",
          example: 3,
          nullable: true,
        },
      },
    },
    segment_list: {
      title: 'Segment List',
      type: 'object',
      description:
        'This will return a list of Segment Objects. The result may also have a pages object if the response is paginated.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['segment.list'],
          example: 'segment.list',
        },
        segments: {
          type: 'array',
          description: 'A list of Segment objects',
          items: {
            $ref: '#/components/schemas/segment',
          },
        },
        pages: {
          type: 'object',
          description: 'A pagination object, which may be empty, indicating no further pages to fetch.',
        },
      },
    },
    single_filter_search_request: {
      title: 'Single Filter Search Request',
      description: 'Search using Intercoms Search APIs with a single filter.',
      type: 'object',
      properties: {
        field: {
          type: 'string',
          description: 'The accepted field that you want to search on.',
          example: 'created_at',
        },
        operator: {
          type: 'string',
          enum: ['=', '!=', 'IN', 'NIN', '<', '>', '~', '!~', '^', '$'],
          description: 'The accepted operators you can use to define how you want to search for the value.',
          example: '>',
        },
        value: {
          type: 'string',
          description: 'The value that you want to search on.',
          example: '73732934',
        },
      },
    },
    sla_applied: {
      title: 'Applied SLA',
      type: 'object',
      nullable: true,
      description:
        'The SLA Applied object contains the details for which SLA has been applied to this conversation.\nImportant: if there are any canceled sla_events for the conversation - meaning an SLA has been manually removed from a conversation, the sla_status will always be returned as null.\n',
      properties: {
        type: {
          type: 'string',
          description: 'object type',
          example: 'conversation_sla_summary',
        },
        sla_name: {
          type: 'string',
          description: 'The name of the SLA as given by the teammate when it was created.',
          example: '',
        },
        sla_status: {
          type: 'string',
          enum: ['hit', 'missed', 'cancelled', 'active'],
          description:
            'SLA statuses:\n            - `hit`: If there’s at least one hit event in the underlying sla_events table, and no “missed” or “canceled” events for the conversation.\n            - `missed`: If there are any missed sla_events for the conversation and no canceled events. If there’s even a single missed sla event, the status will always be missed. A missed status is not applied when the SLA expires, only the next time a teammate replies.\n            - `active`: An SLA has been applied to a conversation, but has not yet been fulfilled. SLA status is active only if there are no “hit, “missed”, or “canceled” events.',
          example: 'hit',
        },
      },
    },
    snooze_conversation_request: {
      title: 'Snooze Conversation Request',
      type: 'object',
      description: 'Payload of the request to snooze a conversation',
      properties: {
        message_type: {
          type: 'string',
          enum: ['snoozed'],
          example: 'snoozed',
        },
        admin_id: {
          type: 'string',
          description: 'The id of the admin who is performing the action.',
          example: '5017691',
        },
        snoozed_until: {
          type: 'integer',
          format: 'timestamp',
          description: 'The time you want the conversation to reopen.',
          example: 1673609604,
        },
      },
      required: ['message_type', 'admin_id', 'snoozed_until'],
    },
    social_profile: {
      title: 'Social Profile',
      type: 'object',
      description:
        'A Social Profile allows you to label your contacts, companies, and conversations and list them using that Social Profile.',
      properties: {
        type: {
          type: 'string',
          description: 'value is "social_profile"',
          example: 'social_profile',
        },
        name: {
          type: 'string',
          description: 'The name of the Social media profile',
          example: 'Facebook',
        },
        url: {
          type: 'string',
          format: 'uri',
          description: 'The name of the Social media profile',
          example: 'http://twitter.com/th1sland',
        },
      },
    },
    starting_after_paging: {
      title: 'Pagination: Starting After',
      type: 'object',
      nullable: true,
      properties: {
        per_page: {
          type: 'integer',
          description: 'The number of results to fetch per page.',
          example: 2,
        },
        starting_after: {
          type: 'string',
          description: 'The cursor to use in the next request to get the next page of results.',
          nullable: true,
          example: 'your-cursor-from-response',
        },
      },
    },
    subscription_type: {
      title: 'Subscription Types',
      type: 'object',
      'x-tags': ['Subscription Types'],
      description:
        "A subscription type lets customers easily opt out of non-essential communications without missing what's important to them.",
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object - subscription',
          example: 'subscription',
        },
        id: {
          type: 'string',
          description: 'The unique identifier representing the subscription type.',
          example: '123456',
        },
        state: {
          type: 'string',
          description: 'The state of the subscription type.',
          enum: ['live', 'draft', 'archived'],
          example: 'live',
        },
        default_translation: {
          $ref: '#/components/schemas/translation',
        },
        translations: {
          type: 'array',
          description:
            'An array of translations objects with the localised version of the subscription type in each available locale within your translation settings.',
          items: {
            $ref: '#/components/schemas/translation',
          },
        },
        consent_type: {
          type: 'string',
          description: 'Describes the type of consent.',
          enum: ['opt_out', 'opt_in'],
          example: 'opt_in',
        },
        content_types: {
          type: 'array',
          description: 'The message types that this subscription supports - can contain `email` or `sms_message`.',
          items: {
            type: 'string',
            enum: ['email', 'sms_message'],
            example: 'email',
          },
        },
      },
    },
    subscription_type_list: {
      title: 'Subscription Types',
      type: 'object',
      description: 'A list of subscription type objects.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['list'],
          example: 'list',
        },
        data: {
          type: 'array',
          description: 'A list of subscription type objects associated with the workspace .',
          items: {
            $ref: '#/components/schemas/subscription_type',
          },
        },
      },
    },
    tag: {
      title: 'Tag',
      type: 'object',
      'x-tags': ['Tags'],
      description:
        'A tag allows you to label your contacts, companies, and conversations and list them using that tag.',
      properties: {
        type: {
          type: 'string',
          description: 'value is "tag"',
          example: 'tag',
        },
        id: {
          type: 'string',
          description: 'The id of the tag',
          example: '123456',
        },
        name: {
          type: 'string',
          description: 'The name of the tag',
          example: 'Test tag',
        },
        applied_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time when the tag was applied to the object',
          example: 1663597223,
        },
        applied_by: {
          $ref: '#/components/schemas/reference',
        },
      },
    },
    tag_company_request: {
      description: 'You can tag a single company or a list of companies.',
      type: 'object',
      title: 'Tag Company Request Payload',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the tag, which will be created if not found.',
          example: 'Independent',
        },
        companies: {
          type: 'array',
          items: {
            properties: {
              id: {
                type: 'string',
                description: 'The Intercom defined id representing the company.',
                example: '531ee472cce572a6ec000006',
              },
              company_id: {
                type: 'string',
                description: 'The company id you have defined for the company.',
                example: '6',
              },
            },
          },
          description: 'The id or company_id of the company can be passed as input parameters.',
        },
      },
      required: ['name', 'companies'],
    },
    tag_list: {
      title: 'Tags',
      type: 'object',
      description: 'A list of tags objects in the workspace.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['list'],
          example: 'list',
        },
        data: {
          type: 'array',
          description: 'A list of tags objects associated with the workspace .',
          items: {
            $ref: '#/components/schemas/tag',
          },
        },
      },
    },
    tag_multiple_users_request: {
      description: 'You can tag a list of users.',
      type: 'object',
      title: 'Tag Users Request Payload',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the tag, which will be created if not found.',
          example: 'Independent',
        },
        users: {
          type: 'array',
          items: {
            properties: {
              id: {
                type: 'string',
                description: 'The Intercom defined id representing the user.',
                example: '5f7f0d217289f8d2f4262080',
              },
            },
          },
        },
      },
      required: ['name', 'users'],
    },
    tags: {
      title: 'Tags',
      type: 'object',
      description: 'A list of tags objects associated with a conversation',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['tag.list'],
          example: 'tag.list',
        },
        tags: {
          type: 'array',
          description: 'A list of tags objects associated with the conversation.',
          items: {
            $ref: '#/components/schemas/tag',
          },
        },
      },
    },
    team: {
      title: 'Team',
      type: 'object',
      'x-tags': ['Teams'],
      description: 'Teams are groups of admins in Intercom.',
      properties: {
        type: {
          type: 'string',
          description: 'Value is always "team"',
          example: 'team',
        },
        id: {
          type: 'string',
          description: 'The id of the team',
          example: '814865',
        },
        name: {
          type: 'string',
          description: 'The name of the team',
          example: 'Example Team',
        },
        admin_ids: {
          type: 'array',
          description: 'The list of admin IDs that are a part of the team.',
          example: [493881],
          items: {
            type: 'integer',
          },
        },
        admin_priority_level: {
          $ref: '#/components/schemas/admin_priority_level',
        },
      },
    },
    team_list: {
      title: 'Team List',
      type: 'object',
      description: 'This will return a list of team objects for the App.',
      properties: {
        type: {
          type: 'string',
          description: 'The type of the object',
          enum: ['team.list'],
          example: 'team.list',
        },
        teams: {
          type: 'array',
          description: 'A list of team objects',
          items: {
            $ref: '#/components/schemas/team',
          },
        },
      },
    },
    team_priority_level: {
      title: 'Team Priority Level',
      type: 'object',
      nullable: true,
      description: 'Admin priority levels for teams',
      properties: {
        primary_team_ids: {
          type: 'array',
          description: 'The primary team ids for the team',
          nullable: true,
          example: [814865],
          items: {
            type: 'integer',
          },
        },
        secondary_team_ids: {
          type: 'array',
          description: 'The secondary team ids for the team',
          nullable: true,
          example: [493881],
          items: {
            type: 'integer',
          },
        },
      },
    },
    ticket: {
      title: 'Ticket',
      type: 'object',
      'x-tags': ['Tickets'],
      description: 'Tickets are how you track requests from your users.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: 'Always ticket',
          enum: ['ticket'],
          default: 'ticket',
          example: 'ticket',
        },
        id: {
          type: 'string',
          description: 'The unique identifier for the ticket which is given by Intercom.',
          example: '1295',
        },
        ticket_id: {
          type: 'string',
          description:
            'The ID of the Ticket used in the Intercom Inbox and Messenger. Do not use ticket_id for API queries.',
          example: '1390',
        },
        ticket_attributes: {
          $ref: '#/components/schemas/ticket_custom_attributes',
        },
        ticket_state: {
          type: 'string',
          description: 'The state the ticket is currenly in',
          enum: ['submitted', 'in_progress', 'waiting_on_customer', 'resolved'],
          example: 'submitted',
        },
        ticket_state_internal_label: {
          type: 'string',
          description: 'The state the ticket is currently in, in a human readable form - visible in Intercom',
        },
        ticket_state_external_label: {
          type: 'string',
          description:
            'The state the ticket is currently in, in a human readable form - visible to customers, in the messenger, email and tickets portal.',
        },
        ticket_type: {
          $ref: '#/components/schemas/ticket_type',
        },
        contacts: {
          $ref: '#/components/schemas/ticket_contacts',
        },
        admin_assignee_id: {
          type: 'string',
          description: 'The id representing the admin assigned to the ticket.',
          example: '1295',
        },
        team_assignee_id: {
          type: 'string',
          description: 'The id representing the team assigned to the ticket.',
          example: '1295',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the ticket was created as a UTC Unix timestamp.',
          example: 1663597223,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The last time the ticket was updated as a UTC Unix timestamp.',
          example: 1663597260,
        },
        ticket_parts: {
          $ref: '#/components/schemas/ticket_parts',
        },
        is_shared: {
          type: 'boolean',
          description: 'Whether or not the ticket is shared with the customer.',
          example: true,
        },
      },
    },
    ticket_contacts: {
      title: 'Contacts',
      type: 'object',
      'x-tags': ['Tickets'],
      description: 'The list of contacts affected by a ticket.',
      properties: {
        type: {
          type: 'string',
          description: 'always contact.list',
          enum: ['contact.list'],
          example: 'contact.list',
        },
        contacts: {
          type: 'array',
          description: 'The list of contacts affected by this ticket.',
          items: {
            $ref: '#/components/schemas/contact_reference',
          },
        },
      },
    },
    ticket_custom_attributes: {
      title: 'Ticket Attributes',
      type: 'object',
      description:
        'An object containing the different attributes associated to the ticket as key-value pairs. For the default title and description attributes, the keys are `_default_title_` and `_default_description_`.',
      additionalProperties: {
        anyOf: [
          {
            type: 'string',
            nullable: true,
          },
          {
            type: 'number',
          },
          {
            type: 'boolean',
          },
          {
            type: 'array',
          },
          {
            $ref: '#/components/schemas/file_attribute',
          },
        ],
      },
      example: {
        _default_title_: 'Found a bug',
        _default_description_: "The button's not working",
      },
    },
    ticket_note: {
      title: 'A Ticket Part representing a note',
      type: 'object',
      description: 'A Ticket Part representing a note in the ticket',
      properties: {
        type: {
          type: 'string',
          description: 'Always ticket_part',
          example: 'ticket_part',
          enum: ['ticket_part'],
        },
        id: {
          type: 'string',
          description: 'The id representing the note.',
          example: '3',
        },
        part_type: {
          type: 'string',
          description: 'Always note',
          example: 'note',
          enum: ['note'],
        },
        body: {
          type: 'string',
          nullable: true,
          description: 'The message body, which may contain HTML.',
          example: '<p>Okay!</p>',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the note was created.',
          example: 1663597223,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The last time the note was updated.',
          example: 1663597260,
        },
        author: {
          $ref: '#/components/schemas/ticket_part_author',
        },
        attachments: {
          title: 'Ticket part attachments',
          type: 'array',
          description: 'A list of attachments for the part.',
          items: {
            $ref: '#/components/schemas/part_attachment',
          },
        },
        redacted: {
          type: 'boolean',
          description: 'Whether or not the ticket part has been redacted.',
          example: false,
        },
      },
    },
    ticket_part: {
      title: 'Ticket Part',
      type: 'object',
      'x-tags': ['Tickets'],
      description: 'A Ticket Part represents a message in the ticket.',
      properties: {
        type: {
          type: 'string',
          description: 'Always ticket_part',
          example: 'ticket_part',
        },
        id: {
          type: 'string',
          description: 'The id representing the ticket part.',
          example: '3',
        },
        part_type: {
          type: 'string',
          description: 'The type of ticket part.',
          example: 'comment',
        },
        body: {
          type: 'string',
          nullable: true,
          description: 'The message body, which may contain HTML.',
          example: '<p>Okay!</p>',
        },
        previous_ticket_state: {
          type: 'string',
          enum: ['submitted', 'in_progress', 'waiting_on_customer', 'resolved'],
          description: 'The previous state of the ticket.',
          example: 'submitted',
        },
        ticket_state: {
          type: 'string',
          enum: ['submitted', 'in_progress', 'waiting_on_customer', 'resolved'],
          description: 'The state of the ticket.',
          example: 'submitted',
        },
        created_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The time the ticket part was created.',
          example: 1663597223,
        },
        updated_at: {
          type: 'integer',
          format: 'date-time',
          description: 'The last time the ticket part was updated.',
          example: 1663597260,
        },
        assigned_to: {
          $ref: '#/components/schemas/reference',
          nullable: true,
          description:
            'The id of the admin that was assigned the ticket by this ticket_part (null if there has been no change in assignment.)',
        },
        author: {
          $ref: '#/components/schemas/ticket_part_author',
        },
        attachments: {
          title: 'Ticket part attachments',
          type: 'array',
          description: 'A list of attachments for the part.',
          items: {
            $ref: '#/components/schemas/part_attachment',
          },
        },
        external_id: {
          type: 'string',
          nullable: true,
          description: 'The external id of the ticket part',
          example: 'abcd1234',
        },
        redacted: {
          type: 'boolean',
          description: 'Whether or not the ticket part has been redacted.',
          example: false,
        },
      },
    },
    ticket_part_author: {
      title: 'Ticket part author',
      type: 'object',
      description: 'The author that wrote or triggered the part. Can be a bot, admin, team or user.',
      properties: {
        type: {
          type: 'string',
          enum: ['admin', 'bot', 'team'],
        },
        id: {
          type: 'string',
          description: 'The id of the author',
          example: '274',
        },
        name: {
          type: 'string',
          nullable: true,
          description: 'The name of the author',
          example: 'Operator',
        },
        email: {
          type: 'string',
          format: 'email',
          description: 'The email of the author',
          example: 'operator+abcd1234@intercom.io',
        },
      },
    },
    ticket_parts: {
      title: 'Ticket Parts',
      type: 'object',
      description:
        'A list of Ticket Part objects for each note and event in the ticket. There is a limit of 500 parts.',
      properties: {
        type: {
          type: 'string',
          description: '',
          enum: ['ticket_part.list'],
          example: 'ticket_part.list',
        },
        ticket_parts: {
          title: 'Tickt Parts',
          type: 'array',
          description: 'A list of Ticket Part objects for each ticket. There is a limit of 500 parts.',
          items: {
            $ref: '#/components/schemas/ticket_part',
          },
        },
        total_count: {
          type: 'integer',
          description: '',
          example: 2,
        },
      },
    },
    ticket_request_custom_attributes: {
      title: 'Ticket Attributes',
      type: 'object',
      description:
        'The attributes set on the ticket. When setting the default title and description attributes, the attribute keys that should be used are `_default_title_` and `_default_description_`. When setting ticket type attributes of the list attribute type, the key should be the attribute name and the value of the attribute should be the list item id, obtainable by [listing the ticket type](ref:get_ticket-types). For example, if the ticket type has an attribute called `priority` of type `list`, the key should be `priority` and the value of the attribute should be the guid of the list item (e.g. `de1825a0-0164-4070-8ca6-13e22462fa7e`).',
      additionalProperties: {
        anyOf: [
          {
            type: 'string',
            nullable: true,
          },
          {
            type: 'number',
          },
          {
            type: 'boolean',
          },
          {
            type: 'array',
          },
        ],
      },
      example: {
        _default_title_: 'Found a bug',
        _default_description_: 'The button is not working',
      },
    },
    ticket_type: {
      title: 'Ticket Type',
      type: 'object',
      'x-tags': ['Tickets'],
      description: 'A ticket type, used to define the data fields to be captured in a ticket.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `ticket_type`.",
          example: 'ticket_type',
        },
        id: {
          type: 'string',
          description: 'The id representing the ticket type.',
          example: '1295',
        },
        name: {
          type: 'string',
          description: 'The name of the ticket type',
          example: 'Bug',
        },
        description: {
          type: 'string',
          description: 'The description of the ticket type',
          example: 'A bug that has been reported.',
        },
        icon: {
          type: 'string',
          description: 'The icon of the ticket type',
          example: '🐞',
        },
        workspace_id: {
          type: 'string',
          description: 'The id of the workspace that the ticket type belongs to.',
          example: 'ecahpwf5',
        },
        ticket_type_attributes: {
          $ref: '#/components/schemas/ticket_type_attribute_list',
        },
        archived: {
          type: 'boolean',
          description: 'Whether the ticket type is archived or not.',
          example: false,
        },
        created_at: {
          type: 'integer',
          format: 'timestamp',
          description: 'The date and time the ticket type was created.',
        },
        updated_at: {
          type: 'integer',
          format: 'timestamp',
          description: 'The date and time the ticket type was last updated.',
        },
      },
    },
    ticket_type_attribute: {
      title: 'Ticket Type Attribute',
      type: 'object',
      description: 'Ticket type attribute, used to define each data field to be captured in a ticket.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `ticket_type_attribute`.",
          example: 'ticket_type_attribute',
        },
        id: {
          type: 'string',
          description: 'The id representing the ticket type attribute.',
          example: '1',
        },
        workspace_id: {
          type: 'string',
          description: 'The id of the workspace that the ticket type attribute belongs to.',
          example: 'ecahpwf5',
        },
        name: {
          type: 'string',
          description: 'The name of the ticket type attribute',
          example: 'Title',
        },
        description: {
          type: 'string',
          description: 'The description of the ticket type attribute',
          example: 'Bug title.',
        },
        data_type: {
          type: 'string',
          description:
            'The type of the data attribute (allowed values: "string list integer decimal boolean datetime files")',
          example: 'string',
        },
        input_options: {
          type: 'object',
          description: 'Input options for the attribute',
          example: 'multiline: true',
        },
        order: {
          type: 'integer',
          description: 'The order of the attribute against other attributes',
          example: 1,
        },
        required_to_create: {
          type: 'boolean',
          description: 'Whether the attribute is required or not for teammates.',
          default: false,
          example: false,
        },
        required_to_create_for_contacts: {
          type: 'boolean',
          description: 'Whether the attribute is required or not for contacts.',
          default: false,
          example: false,
        },
        visible_on_create: {
          type: 'boolean',
          description: 'Whether the attribute is visible or not to teammates.',
          default: true,
          example: false,
        },
        visible_to_contacts: {
          type: 'boolean',
          description: 'Whether the attribute is visible or not to contacts.',
          default: true,
          example: false,
        },
        default: {
          type: 'boolean',
          description: 'Whether the attribute is built in or not.',
          example: true,
        },
        ticket_type_id: {
          type: 'integer',
          description: 'The id of the ticket type that the attribute belongs to.',
          example: 42,
        },
        archived: {
          type: 'boolean',
          description: 'Whether the ticket type attribute is archived or not.',
          example: false,
        },
        created_at: {
          type: 'integer',
          format: 'timestamp',
          description: 'The date and time the ticket type attribute was created.',
        },
        updated_at: {
          type: 'integer',
          format: 'timestamp',
          description: 'The date and time the ticket type attribute was last updated.',
        },
      },
    },
    ticket_type_attribute_list: {
      title: 'Ticket Type Attributes',
      type: 'object',
      description: 'A list of attributes associated with a given ticket type.',
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `ticket_type_attributes.list`.",
        },
        ticket_type_attributes: {
          type: 'array',
          description: 'A list of ticket type attributes associated with a given ticket type.',
          items: {
            $ref: '#/components/schemas/ticket_type_attribute',
          },
        },
      },
    },
    ticket_type_list: {
      title: 'Ticket Types',
      type: 'object',
      description: 'A list of ticket types associated with a given workspace.',
      properties: {
        type: {
          type: 'string',
          description: "String representing the object's type. Always has the value `ticket_type.list`.",
        },
        ticket_types: {
          type: 'array',
          description: 'A list of ticket_types associated with a given workspace.',
          items: {
            $ref: '#/components/schemas/ticket_type',
          },
        },
      },
    },
    translation: {
      title: 'Translation',
      type: 'object',
      description: 'A translation object contains the localised details of a subscription type.',
      properties: {
        name: {
          type: 'string',
          description: 'The localised name of the subscription type.',
          example: 'Announcements',
        },
        description: {
          type: 'string',
          description: 'The localised description of the subscription type.',
          example: 'Offers, product and feature announcements',
        },
        locale: {
          type: 'string',
          description: 'The two character identifier for the language of the translation object.',
          example: 'en',
        },
      },
    },
    untag_company_request: {
      description: 'You can tag a single company or a list of companies.',
      type: 'object',
      title: 'Untag Company Request Payload',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the tag which will be untagged from the company',
          example: 'Independent',
        },
        companies: {
          type: 'array',
          items: {
            properties: {
              id: {
                type: 'string',
                description: 'The Intercom defined id representing the company.',
                example: '531ee472cce572a6ec000006',
              },
              company_id: {
                type: 'string',
                description: 'The company id you have defined for the company.',
                example: '6',
              },
              untag: {
                type: 'boolean',
                description: 'Always set to true',
                example: 'true',
              },
            },
          },
          description: 'The id or company_id of the company can be passed as input parameters.',
        },
      },
      required: ['name', 'companies'],
    },
    update_article_request: {
      description: 'You can Update an Article',
      type: 'object',
      title: 'Update Article Request Payload',
      nullable: true,
      properties: {
        title: {
          type: 'string',
          description:
            "The title of the article.For multilingual articles, this will be the title of the default language's content.",
          example: 'Thanks for everything',
        },
        description: {
          type: 'string',
          description:
            "The description of the article. For multilingual articles, this will be the description of the default language's content.",
          example: 'Description of the Article',
        },
        body: {
          type: 'string',
          description:
            "The content of the article. For multilingual articles, this will be the body of the default language's content.",
          example: '<p>This is the body in html</p>',
        },
        author_id: {
          type: 'integer',
          description:
            "The id of the author of the article. For multilingual articles, this will be the id of the author of the default language's content. Must be a teammate on the help center's workspace.",
          example: 1295,
        },
        state: {
          type: 'string',
          description:
            "Whether the article will be `published` or will be a `draft`. Defaults to draft. For multilingual articles, this will be the state of the default language's content.",
          enum: ['published', 'draft'],
          example: 'draft',
        },
        parent_id: {
          type: 'string',
          description:
            "The id of the article's parent collection or section. An article without this field stands alone.",
          example: '18',
        },
        parent_type: {
          type: 'string',
          description: 'The type of parent, which can either be a `collection` or `section`.',
          example: 'collection',
        },
        translated_content: {
          $ref: '#/components/schemas/article_translated_content',
        },
      },
    },
    update_collection_request: {
      description: 'You can update a collection',
      type: 'object',
      title: 'Update Collection Request Payload',
      properties: {
        name: {
          type: 'string',
          description:
            "The name of the collection. For multilingual collections, this will be the name of the default language's content.",
          example: 'collection 51',
        },
        description: {
          type: 'string',
          description:
            "The description of the collection. For multilingual collections, this will be the description of the default language's content.",
          example: 'English description',
        },
        translated_content: {
          nullable: true,
          $ref: '#/components/schemas/group_translated_content',
        },
      },
    },
    update_contact_request: {
      description: 'You can update a contact',
      type: 'object',
      title: 'Update Contact Request Payload',
      properties: {
        role: {
          type: 'string',
          description: 'The role of the contact.',
        },
        external_id: {
          type: 'string',
          description: 'A unique identifier for the contact which is given to Intercom',
        },
        email: {
          type: 'string',
          description: 'The contacts email',
          example: 'jdoe@example.com',
        },
        phone: {
          type: 'string',
          nullable: true,
          description: 'The contacts phone',
          example: '+353871234567',
        },
        name: {
          type: 'string',
          nullable: true,
          description: 'The contacts name',
          example: 'John Doe',
        },
        avatar: {
          type: 'string',
          nullable: true,
          description: 'An image URL containing the avatar of a contact',
          example: 'https://www.example.com/avatar_image.jpg',
        },
        signed_up_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description: 'The time specified for when a contact signed up',
          example: 1571672154,
        },
        last_seen_at: {
          type: 'integer',
          format: 'date-time',
          nullable: true,
          description:
            'The time when the contact was last seen (either where the Intercom Messenger was installed or when specified manually)',
          example: 1571672154,
        },
        owner_id: {
          type: 'integer',
          nullable: true,
          description: 'The id of an admin that has been assigned account ownership of the contact',
          example: 123,
        },
        unsubscribed_from_emails: {
          type: 'boolean',
          nullable: true,
          description: 'Whether the contact is unsubscribed from emails',
          example: true,
        },
        custom_attributes: {
          type: 'object',
          nullable: true,
          description: 'The custom attributes which are set for the contact',
        },
      },
    },
    update_conversation_request: {
      title: 'Update Conversation Request',
      type: 'object',
      description: 'Payload of the request to update a conversation',
      properties: {
        read: {
          type: 'boolean',
          description: 'Mark a conversation as read within Intercom.',
          example: true,
        },
        custom_attributes: {
          $ref: '#/components/schemas/custom_attributes',
        },
      },
    },
    update_data_attribute_request: {
      description: '',
      type: 'object',
      title: 'Update Data Attribute Request',
      properties: {
        archived: {
          type: 'boolean',
          description: 'Whether the attribute is to be archived or not.',
          example: false,
        },
        description: {
          type: 'string',
          description: 'The readable description you see in the UI for the attribute.',
          example: 'My Data Attribute Description',
        },
        options: {
          type: 'array',
          description:
            'To create list attributes. Provide a set of hashes with `value` as the key of the options you want to make. `data_type` must be `string`.',
          items: {
            type: 'string',
          },
          example: ['option1', 'option2'],
        },
        messenger_writable: {
          type: 'boolean',
          description: 'Can this attribute be updated by the Messenger',
          example: false,
        },
      },
    },
    update_section_request: {
      description: 'You can update a Section',
      type: 'object',
      title: 'Update Section Request Payload',
      properties: {
        name: {
          type: 'string',
          description:
            "The name of the collection. For multilingual collections, this will be the name of the default language's content.",
          example: 'Section 51',
        },
        parent_id: {
          type: 'integer',
          description: 'The id for the collection this section will be within.',
          example: 18,
        },
        translated_content: {
          nullable: true,
          $ref: '#/components/schemas/group_translated_content',
        },
      },
    },
    update_ticket_request: {
      description: 'You can update a Ticket',
      type: 'object',
      title: 'Update Ticket Request Payload',
      properties: {
        ticket_attributes: {
          type: 'object',
          description: 'The attributes set on the ticket.',
          example: {
            _default_title_: 'example',
            _default_description_: 'having a problem',
          },
        },
        state: {
          type: 'string',
          enum: ['in_progress', 'waiting_on_customer', 'resolved'],
          description: 'The state of the ticket.',
          example: 'submitted',
        },
        is_shared: {
          type: 'boolean',
          description: 'Specify whether the ticket is visible to users.',
          example: true,
        },
        assignment: {
          type: 'object',
          properties: {
            admin_id: {
              type: 'string',
              description: 'The ID of the admin performing the action.',
              example: '123',
            },
            assignee_id: {
              type: 'string',
              description: 'The ID of the admin or team to which the ticket is assigned. Set this 0 to unassign it.',
              example: '123',
            },
          },
        },
      },
    },
    update_ticket_type_attribute_request: {
      description: 'You can update a Ticket Type Attribute',
      type: 'object',
      title: 'Update Ticket Type Attribute Request Payload',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the ticket type attribute',
          example: 'Bug Priority',
        },
        description: {
          type: 'string',
          description: 'The description of the attribute presented to the teammate or contact',
          example: 'Priority level of the bug',
        },
        required_to_create: {
          type: 'boolean',
          description:
            'Whether the attribute is required to be filled in when teammates are creating the ticket in Inbox.',
          default: false,
          example: false,
        },
        required_to_create_for_contacts: {
          type: 'boolean',
          description:
            'Whether the attribute is required to be filled in when contacts are creating the ticket in Messenger.',
          default: false,
          example: false,
        },
        visible_on_create: {
          type: 'boolean',
          description: 'Whether the attribute is visible to teammates when creating a ticket in Inbox.',
          default: true,
          example: true,
        },
        visible_to_contacts: {
          type: 'boolean',
          description: 'Whether the attribute is visible to contacts when creating a ticket in Messenger.',
          default: true,
          example: true,
        },
        multiline: {
          type: 'boolean',
          description: 'Whether the attribute allows multiple lines of text (only applicable to string attributes)',
          example: false,
        },
        list_items: {
          type: 'string',
          description: 'A comma delimited list of items for the attribute value (only applicable to list attributes)',
          example: 'Low Priority,Medium Priority,High Priority',
        },
        allow_multiple_values: {
          type: 'boolean',
          description:
            'Whether the attribute allows multiple files to be attached to it (only applicable to file attributes)',
          example: false,
        },
        archived: {
          type: 'boolean',
          description:
            'Whether the attribute should be archived and not shown during creation of the ticket (it will still be present on previously created tickets)',
          example: false,
        },
      },
    },
    update_ticket_type_request: {
      description:
        'The request payload for updating a ticket type.\nYou can copy the `icon` property for your ticket type from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)\n',
      type: 'object',
      title: 'Update Ticket Type Request Payload',
      nullable: true,
      properties: {
        name: {
          type: 'string',
          description: 'The name of the ticket type.',
          example: 'Bug',
        },
        description: {
          type: 'string',
          description: 'The description of the ticket type.',
          example: 'A bug has been occured',
        },
        icon: {
          type: 'string',
          description: 'The icon of the ticket type.',
          example: '🐞',
          default: '🎟️',
        },
        archived: {
          type: 'boolean',
          description: 'The archived status of the ticket type.',
          example: false,
        },
        is_internal: {
          type: 'boolean',
          description:
            'Whether the tickets associated with this ticket type are intended for internal use only or will be shared with customers. This is currently a limited attribute.',
          example: false,
          default: false,
        },
      },
    },
    update_visitor_request: {
      description: 'Update an existing visitor.',
      type: 'object',
      title: 'Update Visitor Request Payload',
      properties: {
        id: {
          type: 'string',
          description: 'A unique identified for the visitor which is given by Intercom.',
          example: '8a88a590-e',
        },
        user_id: {
          type: 'string',
          description: 'A unique identified for the visitor which is given by you.',
          example: '123',
        },
        name: {
          type: 'string',
          description: "The visitor's name.",
          example: 'Christian Bale',
        },
        custom_attributes: {
          type: 'object',
          description: 'The custom attributes which are set for the visitor.',
          additionalProperties: {
            type: 'string',
          },
          example: {
            paid_subscriber: true,
            monthly_spend: 155.5,
            team_mates: 9,
          },
        },
      },
      anyOf: [
        {
          required: ['id'],
        },
        {
          required: ['user_id'],
        },
      ],
    },
    visitor: {
      title: 'Visitor',
      type: 'object',
      description:
        'Visitors are useful for representing anonymous people that have not yet been identified. They usually represent website visitors. Visitors are not visible in Intercom platform. The Visitors resource provides methods to fetch, update, convert and delete.',
      nullable: true,
      properties: {
        type: {
          type: 'string',
          description: "Value is 'visitor'",
          default: 'visitor',
          example: 'visitor',
        },
        id: {
          type: 'string',
          description: 'The Intercom defined id representing the Visitor.',
          example: '530370b477ad7120001d',
        },
        user_id: {
          type: 'string',
          description: 'Automatically generated identifier for the Visitor.',
          example: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
        },
        anonymous: {
          type: 'boolean',
          description: 'Identifies if this visitor is anonymous.',
          example: false,
        },
        email: {
          type: 'string',
          format: 'email',
          description: 'The email of the visitor.',
          example: 'jane.doe@example.com',
        },
        phone: {
          type: 'string',
          nullable: true,
          description: 'The phone number of the visitor.',
          example: '555-555-5555',
        },
        name: {
          type: 'string',
          nullable: true,
          description: 'The name of the visitor.',
          example: 'Jane Doe',
        },
        pseudonym: {
          type: 'string',
          nullable: true,
          description: 'The pseudonym of the visitor.',
          example: 'Red Duck from Dublin',
        },
        avatar: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: '',
              default: 'avatar',
              example: 'avatar',
            },
            image_url: {
              type: 'string',
              format: 'uri',
              nullable: true,
              description: 'This object represents the avatar associated with the visitor.',
              example: 'https://example.com/avatar.png',
            },
          },
        },
        app_id: {
          type: 'string',
          description: 'The id of the app the visitor is associated with.',
          example: 'hfi1bx4l',
        },
        companies: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: 'The type of the object',
              enum: ['company.list'],
              example: 'company.list',
            },
            companies: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/company',
              },
            },
          },
        },
        location_data: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: '',
              default: 'location_data',
              example: 'location_data',
            },
            city_name: {
              type: 'string',
              description: 'The city name of the visitor.',
              example: 'Dublin',
            },
            continent_code: {
              type: 'string',
              description: 'The continent code of the visitor.',
              example: 'EU',
            },
            country_code: {
              type: 'string',
              description: 'The country code of the visitor.',
              example: 'IRL',
            },
            country_name: {
              type: 'string',
              description: 'The country name of the visitor.',
              example: 'Ireland',
            },
            postal_code: {
              type: 'string',
              description: 'The postal code of the visitor.',
              example: 'D02 N960',
            },
            region_name: {
              type: 'string',
              description: 'The region name of the visitor.',
              example: 'Leinster',
            },
            timezone: {
              type: 'string',
              description: 'The timezone of the visitor.',
              example: 'Europe/Dublin',
            },
          },
        },
        las_request_at: {
          type: 'integer',
          description: 'The time the Lead last recorded making a request.',
          example: 1663597260,
        },
        created_at: {
          type: 'integer',
          description: 'The time the Visitor was added to Intercom.',
          example: 1663597223,
        },
        remote_created_at: {
          type: 'integer',
          description: 'The time the Visitor was added to Intercom.',
          example: 1663597223,
        },
        signed_up_at: {
          type: 'integer',
          description: 'The time the Visitor signed up for your product.',
          example: 1663597223,
        },
        updated_at: {
          type: 'integer',
          description: 'The last time the Visitor was updated.',
          example: 1663597260,
        },
        session_count: {
          type: 'integer',
          description: 'The number of sessions the Visitor has had.',
          example: 1,
        },
        social_profiles: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: 'The type of the object',
              enum: ['social_profile.list'],
              example: 'social_profile.list',
            },
            social_profiles: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        owner_id: {
          type: 'string',
          nullable: true,
          description: 'The id of the admin that owns the Visitor.',
          example: '5169261',
        },
        unsubscribed_from_emails: {
          type: 'boolean',
          description: 'Whether the Visitor is unsubscribed from emails.',
          example: false,
        },
        marked_email_as_spam: {
          type: 'boolean',
          description: 'Identifies if this visitor has marked an email as spam.',
          example: false,
        },
        has_hard_bounced: {
          type: 'boolean',
          description: 'Identifies if this visitor has had a hard bounce.',
          example: false,
        },
        tags: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: 'The type of the object',
              enum: ['tag.list'],
              example: 'tag.list',
            },
            tags: {
              type: 'array',
              items: {
                properties: {
                  type: {
                    type: 'string',
                    description: 'The type of the object',
                    enum: ['tag'],
                    example: 'tag',
                  },
                  id: {
                    type: 'string',
                    description: 'The id of the tag.',
                    example: '8482',
                  },
                  name: {
                    type: 'string',
                    description: 'The name of the tag.',
                    example: 'tag_name',
                  },
                },
              },
            },
          },
        },
        segments: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              description: 'The type of the object',
              enum: ['segment.list'],
              example: 'segment.list',
            },
            segments: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
        custom_attributes: {
          type: 'object',
          description: 'The custom attributes you have set on the Visitor.',
          additionalProperties: {
            type: 'string',
          },
        },
        referrer: {
          type: 'string',
          nullable: true,
          description: 'The referer of the visitor.',
          example: 'https://www.google.com/',
        },
        utm_campaign: {
          type: 'string',
          nullable: true,
          description: 'The utm_campaign of the visitor.',
          example: 'intercom-link',
        },
        utm_content: {
          type: 'string',
          nullable: true,
          description: 'The utm_content of the visitor.',
          example: 'banner',
        },
        utm_medium: {
          type: 'string',
          nullable: true,
          description: 'The utm_medium of the visitor.',
          example: 'email',
        },
        utm_source: {
          type: 'string',
          nullable: true,
          description: 'The utm_source of the visitor.',
          example: 'Intercom',
        },
        utm_term: {
          type: 'string',
          nullable: true,
          description: 'The utm_term of the visitor.',
          example: 'messenger',
        },
        do_not_track: {
          type: 'boolean',
          nullable: true,
          description: 'Identifies if this visitor has do not track enabled.',
          example: false,
        },
      },
    },
    visitor_deleted_object: {
      title: 'Visitor Deleted Object',
      type: 'object',
      description: 'Response returned when an object is deleted',
      properties: {
        id: {
          type: 'string',
          description: 'The unique identifier for the visitor which is given by Intercom.',
          example: '530370b477ad7120001d',
        },
        type: {
          type: 'string',
          description: 'The type of object which was deleted',
          enum: ['visitor'],
          example: 'visitor',
        },
        user_id: {
          type: 'string',
          description: 'Automatically generated identifier for the Visitor.',
          example: '8a88a590-e1c3-41e2-a502-e0649dbf721c',
        },
      },
    },
  },
  securitySchemes: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
    },
  },
} as TComponents;