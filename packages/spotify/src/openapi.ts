
            export default {
  "openapi": "3.0.3",
  "servers": [
    {
      "url": "https://api.spotify.com/v1"
    }
  ],
  "info": {
    "description": "You can use Spotify's Web API to discover music and podcasts, manage your Spotify library, control audio playback, and much more. Browse our available Web API endpoints using the sidebar at left, or via the navigation bar on top of this page on smaller screens.\n\nIn order to make successful Web API requests your app will need a valid access token. One can be obtained through <a href=\"https://developer.spotify.com/documentation/general/guides/authorization-guide/\">OAuth 2.0</a>.\n\nThe base URI for all Web API requests is `https://api.spotify.com/v1`.\n\nNeed help? See our <a href=\"https://developer.spotify.com/documentation/web-api/guides/\">Web API guides</a> for more information, or visit the <a href=\"https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer\">Spotify for Developers community forum</a> to ask questions and connect with other developers.\n",
    "termsOfService": "https://developer.spotify.com/terms/",
    "title": "Spotify Web API",
    "version": "1.0.0",
    "x-apisguru-categories": [
      "media"
    ],
    "x-logo": {
      "url": "https://logo-core.clearbit.com/spotify.com"
    },
    "x-origin": [
      {
        "format": "openapi",
        "url": "https://developer.spotify.com/_data/documentation/web-api/reference/open-api-schema.yml",
        "version": "3.0"
      }
    ],
    "x-providerName": "spotify.com"
  },
  "paths": {
    "/albums": {
      "get": {
        "description": "Get Spotify catalog information for multiple albums identified by their Spotify IDs.\n",
        "operationId": "get-multiple-albums",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryAlbumIds"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyAlbums"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Several Albums\n",
        "tags": [
          "Albums"
        ],
        "x-spotify-docs-console-url": "/console/get-several-albums/",
        "x-spotify-docs-endpoint-name": "Get Multiple Albums",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Albums",
      "x-spotify-docs-display-name": "several-albums"
    },
    "/albums/{id}": {
      "get": {
        "description": "Get Spotify catalog information for a single album.\n",
        "operationId": "get-an-album",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathAlbumId"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneAlbum"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Album\n",
        "tags": [
          "Albums"
        ],
        "x-spotify-docs-console-url": "/console/get-album/?id=0sNOF9WDwhWunNAHPD3Baj",
        "x-spotify-docs-endpoint-name": "Get an Album",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Albums",
      "x-spotify-docs-display-name": "album"
    },
    "/albums/{id}/tracks": {
      "get": {
        "description": "Get Spotify catalog information about an album’s tracks.\nOptional parameters can be used to limit the number of tracks returned.\n",
        "operationId": "get-an-albums-tracks",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathAlbumId"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingSimplifiedTrackObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Album Tracks\n",
        "tags": [
          "Albums",
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/get-album-tracks/",
        "x-spotify-docs-endpoint-name": "Get an Album's Tracks",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Albums",
      "x-spotify-docs-display-name": "album-tracks"
    },
    "/artists": {
      "get": {
        "description": "Get Spotify catalog information for several artists based on their Spotify IDs.\n",
        "operationId": "get-multiple-artists",
        "parameters": [
          {
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the artists. Maximum: 50 IDs.\n",
              "example": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
              "title": "Spotify Artist IDs",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyArtists"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Several Artists\n",
        "tags": [
          "Artists"
        ],
        "x-spotify-docs-console-url": "/console/get-several-artists/?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin",
        "x-spotify-docs-endpoint-name": "Get Multiple Artists",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Artists",
      "x-spotify-docs-display-name": "several-artists"
    },
    "/artists/{id}": {
      "get": {
        "description": "Get Spotify catalog information for a single artist identified by their unique Spotify ID.\n",
        "operationId": "get-an-artist",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathArtistId"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneArtist"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Artist\n",
        "tags": [
          "Artists"
        ],
        "x-spotify-docs-console-url": "/console/get-artist/?id=0OdUWJ0sBjDrqHygGUXeCF",
        "x-spotify-docs-endpoint-name": "Get an Artist",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Artists",
      "x-spotify-docs-display-name": "artist"
    },
    "/artists/{id}/albums": {
      "get": {
        "description": "Get Spotify catalog information about an artist's albums.\n",
        "operationId": "get-an-artists-albums",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathArtistId"
          },
          {
            "$ref": "#/components/parameters/QueryIncludeGroups"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingSimplifiedAlbumObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Artist's Albums\n",
        "tags": [
          "Artists",
          "Albums"
        ],
        "x-spotify-docs-console-url": "/console/get-artist-albums/?album_type=single&amp;limit=2&amp;market=ES&amp;id=1vCWHaC5f2uS3yhpwWbIA6",
        "x-spotify-docs-endpoint-name": "Get an Artist's Albums",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Artists",
      "x-spotify-docs-display-name": "artist-albums"
    },
    "/artists/{id}/related-artists": {
      "get": {
        "description": "Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's [listening history](http://news.spotify.com/se/2010/02/03/related-artists/).\n",
        "operationId": "get-an-artists-related-artists",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathArtistId"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyArtists"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Artist's Related Artists\n",
        "tags": [
          "Artists"
        ],
        "x-spotify-docs-console-url": "/console/get-artist-related-artists/?id=43ZHCT0cAZBISjO8DG9PnE",
        "x-spotify-docs-endpoint-name": "Get an Artist's Related Artists",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Artists",
      "x-spotify-docs-display-name": "artist-related-artists"
    },
    "/artists/{id}/top-tracks": {
      "get": {
        "description": "Get Spotify catalog information about an artist's top tracks by country.\n",
        "operationId": "get-an-artists-top-tracks",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathArtistId"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyTracks"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Artist's Top Tracks\n",
        "tags": [
          "Artists",
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/get-artist-top-tracks/?country=SE&amp;id=43ZHCT0cAZBISjO8DG9PnE",
        "x-spotify-docs-endpoint-name": "Get an Artist's Top Tracks",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Artists",
      "x-spotify-docs-display-name": "artist-top-tracks"
    },
    "/audio-analysis/{id}": {
      "get": {
        "description": "Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.\n",
        "operationId": "get-audio-analysis",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the track.\n",
              "example": "11dFghVXANMlKmJXsNCbNl",
              "title": "Spotify Track ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneAudioAnalysis"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Track's Audio Analysis\n",
        "tags": [
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/get-audio-analysis-track/?id=06AKEBrKUckW0KREUWRnvT",
        "x-spotify-docs-endpoint-name": "Get Audio Analysis for a Track"
      },
      "x-spotify-docs-category": "Tracks",
      "x-spotify-docs-display-name": "audio-analysis-track"
    },
    "/audio-features": {
      "get": {
        "description": "Get audio features for multiple tracks based on their Spotify IDs.\n",
        "operationId": "get-several-audio-features",
        "parameters": [
          {
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids)\nfor the tracks. Maximum: 100 IDs.\n",
              "example": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
              "title": "Spotify Track IDs",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyAudioFeatures"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Tracks' Audio Features\n",
        "tags": [
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/get-audio-features-several-tracks/?ids=4JpKVNYnVcJ8tuMKjAj50A,2NRANZE9UCmPAS5XVbXL40,24JygzOLM0EmRQeGtFcIcG",
        "x-spotify-docs-endpoint-name": "Get Audio Features for Several Tracks"
      },
      "x-spotify-docs-category": "Tracks",
      "x-spotify-docs-display-name": "audio-features-several-tracks"
    },
    "/audio-features/{id}": {
      "get": {
        "description": "Get audio feature information for a single track identified by its unique\nSpotify ID.\n",
        "operationId": "get-audio-features",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
              "example": "11dFghVXANMlKmJXsNCbNl",
              "title": "Spotify Track ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneAudioFeatures"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Track's Audio Features\n",
        "tags": [
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/get-audio-features-track/?id=06AKEBrKUckW0KREUWRnvT",
        "x-spotify-docs-endpoint-name": "Get Audio Features for a Track"
      },
      "x-spotify-docs-category": "Tracks",
      "x-spotify-docs-display-name": "audio-features-track"
    },
    "/audiobooks": {
      "get": {
        "description": "Get Spotify catalog information for several audiobooks identified by their Spotify IDs.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        "operationId": "get-multiple-audiobooks",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryAudiobookIds"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyAudiobooks"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Several Audiobooks\n",
        "tags": [
          "Audiobooks"
        ],
        "x-spotify-docs-console-url": "/console/get-several-audiobooks/?ids=5thw29eqjomhIDMY1XKsLk,2IEBhnu61ieYGFRPEJIO40",
        "x-spotify-docs-endpoint-name": "Get Several Audiobooks",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Audiobooks",
      "x-spotify-docs-display-name": "several-audiobooks"
    },
    "/audiobooks/{id}": {
      "get": {
        "description": "Get Spotify catalog information for a single audiobook.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        "operationId": "get-an-audiobook",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathAudiobookId"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneAudiobook"
          },
          "400": {
            "$ref": "#/components/responses/BadRequest"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "404": {
            "$ref": "#/components/responses/NotFound"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get an Audiobook\n",
        "tags": [
          "Audiobooks"
        ],
        "x-spotify-docs-console-url": "/console/get-audiobook/?id=5thw29eqjomhIDMY1XKsLk",
        "x-spotify-docs-endpoint-name": "Get an Audiobook",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Audiobooks",
      "x-spotify-docs-display-name": "audiobook"
    },
    "/audiobooks/{id}/chapters": {
      "get": {
        "description": "Get Spotify catalog information about an audiobook's chapters.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        "operationId": "get-audiobook-chapters",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathAudiobookId"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingSimplifiedChapterObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Audiobook Chapters\n",
        "tags": [
          "Audiobooks",
          "Chapters"
        ],
        "x-spotify-docs-console-url": "/console/get-audiobook-chapters/?id=5thw29eqjomhIDMY1XKsLk",
        "x-spotify-docs-endpoint-name": "Get an Audiobook's Chapters",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Audiobooks",
      "x-spotify-docs-display-name": "audiobook-chapters"
    },
    "/browse/categories": {
      "get": {
        "description": "Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).\n",
        "operationId": "get-categories",
        "parameters": [
          {
            "in": "query",
            "name": "country",
            "required": false,
            "schema": {
              "description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter if you want to narrow the list of returned categories to those relevant to a particular country. If omitted, the returned items will be globally relevant.\n",
              "example": "SE",
              "title": "Country",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "description": "The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning \"Spanish (Mexico)\". Provide this parameter if you want the category metadata returned in a particular language. <br/>\n_**Note**: if `locale` is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The `locale` parameter, combined with the `country` parameter, may give odd results if not carefully matched. For example `country=SE&locale=de_DE` will return a list of categories relevant to Sweden but as German language strings._\n",
              "example": "sv_SE",
              "title": "Locale",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagedCategories"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Several Browse Categories\n",
        "tags": [
          "Categories"
        ],
        "x-spotify-docs-console-url": "/console/get-browse-categories/",
        "x-spotify-docs-endpoint-name": "Get All Categories"
      },
      "x-spotify-docs-category": "Browse",
      "x-spotify-docs-display-name": "browse-categories"
    },
    "/browse/categories/{category_id}": {
      "get": {
        "description": "Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).\n",
        "operationId": "get-a-category",
        "parameters": [
          {
            "in": "path",
            "name": "category_id",
            "required": true,
            "schema": {
              "description": "The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.\n",
              "example": "dinner",
              "title": "Category ID",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "country",
            "required": false,
            "schema": {
              "description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter to ensure that the category exists for a particular country.\n",
              "example": "SE",
              "title": "Country",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "description": "The desired language, consisting of an [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code and an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning &quot;Spanish (Mexico)&quot;. Provide this parameter if you want the category strings returned in a particular language.<br/> _**Note**: if `locale` is not supplied, or if the specified language is not available, the category strings returned will be in the Spotify default language (American English)._\n",
              "example": "sv_SE",
              "title": "Locale",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneCategory"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Single Browse Category\n",
        "tags": [
          "Categories"
        ],
        "x-spotify-docs-console-url": "/console/get-browse-category/",
        "x-spotify-docs-endpoint-name": "Get a Category"
      },
      "x-spotify-docs-category": "Browse",
      "x-spotify-docs-display-name": "browse-category"
    },
    "/browse/categories/{category_id}/playlists": {
      "get": {
        "description": "Get a list of Spotify playlists tagged with a particular category.\n",
        "operationId": "get-a-categories-playlists",
        "parameters": [
          {
            "in": "path",
            "name": "category_id",
            "required": true,
            "schema": {
              "description": "The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) for the category.\n",
              "example": "dinner",
              "title": "Category ID",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "country",
            "required": false,
            "schema": {
              "description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter to ensure that the category exists for a particular country.\n",
              "example": "SE",
              "title": "Country",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagedFeaturedPlaylists"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Category's Playlists\n",
        "tags": [
          "Playlists",
          "Categories"
        ],
        "x-spotify-docs-console-url": "/console/get-category-playlists/?country=BR&amp;category_id=party&amp;limit=2",
        "x-spotify-docs-endpoint-name": "Get a Category's Playlists"
      },
      "x-spotify-docs-category": "Browse",
      "x-spotify-docs-display-name": "category-playlists"
    },
    "/browse/featured-playlists": {
      "get": {
        "description": "Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).\n",
        "operationId": "get-featured-playlists",
        "parameters": [
          {
            "in": "query",
            "name": "country",
            "required": false,
            "schema": {
              "description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.\n",
              "example": "SE",
              "title": "Country",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "locale",
            "required": false,
            "schema": {
              "description": "The desired language, consisting of a lowercase [ISO 639-1 language code](http://en.wikipedia.org/wiki/ISO_639-1) and an uppercase [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), joined by an underscore. For example: `es_MX`, meaning \"Spanish (Mexico)\". Provide this parameter if you want the results returned in a particular language (where available). <br/>\n_**Note**: if `locale` is not supplied, or if the specified language is not available, all strings will be returned in the Spotify default language (American English). The `locale` parameter, combined with the `country` parameter, may give odd results if not carefully matched. For example `country=SE&locale=de_DE` will return a list of categories relevant to Sweden but as German language strings._\n",
              "example": "sv_SE",
              "title": "Locale",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "timestamp",
            "required": false,
            "schema": {
              "description": "A timestamp in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601): `yyyy-MM-ddTHH:mm:ss`. Use this parameter to specify the user's local time to get results tailored for that specific date and time in the day. If not provided, the response defaults to the current UTC time. Example: \"2014-10-23T09:00:00\" for a user whose local time is 9AM. If there were no featured playlists (or there is no data) at the specified time, the response will revert to the current UTC time.\n",
              "example": "2014-10-23T09:00:00",
              "title": "Timestamp",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagedFeaturedPlaylists"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Featured Playlists\n",
        "tags": [
          "Playlists"
        ],
        "x-spotify-docs-console-url": "/console/get-featured-playlists/?country=SE&amp;limit=2",
        "x-spotify-docs-endpoint-name": "Get All Featured Playlists",
        "x-spotify-policy-list": [
          {
            "$ref": "#/components/x-spotify-policy/MultipleIntegrations"
          }
        ]
      },
      "x-spotify-docs-category": "Browse",
      "x-spotify-docs-display-name": "featured-playlists"
    },
    "/browse/new-releases": {
      "get": {
        "description": "Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).\n",
        "operationId": "get-new-releases",
        "parameters": [
          {
            "in": "query",
            "name": "country",
            "required": false,
            "schema": {
              "description": "A country: an [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Provide this parameter if you want the list of returned items to be relevant to a particular country. If omitted, the returned items will be relevant to all countries.\n",
              "example": "SE",
              "title": "Country",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagedAlbums"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get New Releases\n",
        "tags": [
          "Albums"
        ],
        "x-spotify-docs-console-url": "/console/get-new-releases/?country=SE",
        "x-spotify-docs-endpoint-name": "Get All New Releases",
        "x-spotify-policy-list": [
          {
            "$ref": "#/components/x-spotify-policy/MultipleIntegrations"
          }
        ]
      },
      "x-spotify-docs-category": "Browse",
      "x-spotify-docs-display-name": "new-releases"
    },
    "/chapters": {
      "get": {
        "description": "Get Spotify catalog information for several chapters identified by their Spotify IDs.<br />\n**Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        "operationId": "get-several-chapters",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryChapterIds"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyChapters"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Several Chapters\n",
        "tags": [
          "Chapters"
        ],
        "x-spotify-docs-console-url": "/console/get-several-chapters/?ids=2i47HuOBSV2XaJNy0NCZXM,2GUbORsUnP1qVVlLwd9DzP",
        "x-spotify-docs-endpoint-name": "Get Several Chapters",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Chapters",
      "x-spotify-docs-display-name": "several-chapters"
    },
    "/chapters/{id}": {
      "get": {
        "description": "Get Spotify catalog information for a single chapter.<br />\n**Note: Chapters are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        "operationId": "get-a-chapter",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathChapterId"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneChapter"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get a Chapter\n",
        "tags": [
          "Chapters"
        ],
        "x-spotify-docs-console-url": "/console/get-chapter/?id=2i47HuOBSV2XaJNy0NCZXM",
        "x-spotify-docs-endpoint-name": "Get a Chapter",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Chapters",
      "x-spotify-docs-display-name": "chapters"
    },
    "/episodes": {
      "get": {
        "description": "Get Spotify catalog information for several episodes based on their Spotify IDs.\n",
        "operationId": "get-multiple-episodes",
        "parameters": [
          {
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.\n",
              "example": "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
              "title": "Ids",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyEpisodes"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-playback-position"
            ]
          }
        ],
        "summary": "Get Several Episodes\n",
        "tags": [
          "Episodes"
        ],
        "x-spotify-docs-console-url": "/console/get-several-episodes/?ids=77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
        "x-spotify-docs-endpoint-name": "Get Multiple Episodes",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Episodes",
      "x-spotify-docs-display-name": "several-episodes"
    },
    "/episodes/{id}": {
      "get": {
        "description": "Get Spotify catalog information for a single episode identified by its\nunique Spotify ID.\n",
        "operationId": "get-an-episode",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.",
              "example": "512ojhOuo1ktJprKbVcKyQ",
              "title": "Get an Episode",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneEpisode"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-playback-position"
            ]
          }
        ],
        "summary": "Get Episode\n",
        "tags": [
          "Episodes"
        ],
        "x-spotify-docs-console-url": "/console/get-episode/?id=512ojhOuo1ktJprKbVcKyQ",
        "x-spotify-docs-endpoint-name": "Get an Episode",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Episodes",
      "x-spotify-docs-display-name": "episode"
    },
    "/markets": {
      "get": {
        "description": "Get the list of markets where Spotify is available.\n",
        "operationId": "get-available-markets",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "markets": {
                      "example": [
                        "CA",
                        "BR",
                        "IT"
                      ],
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
            "description": "A markets object with an array of country codes"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Available Markets\n",
        "tags": [
          "Markets"
        ],
        "x-spotify-docs-console-url": "/console/get-available-markets/",
        "x-spotify-docs-endpoint-name": "Get Available Markets"
      },
      "x-spotify-docs-category": "Markets",
      "x-spotify-docs-display-name": "available-markets"
    },
    "/me": {
      "get": {
        "description": "Get detailed profile information about the current user (including the\ncurrent user's username).\n",
        "operationId": "get-current-users-profile",
        "responses": {
          "200": {
            "$ref": "#/components/responses/OnePrivateUser"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-private",
              "user-read-email"
            ]
          }
        ],
        "summary": "Get Current User's Profile\n",
        "tags": [
          "Users"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user/",
        "x-spotify-docs-endpoint-name": "Get Current User's Profile"
      },
      "x-spotify-docs-category": "Users Profile",
      "x-spotify-docs-display-name": "current-user"
    },
    "/me/albums": {
      "delete": {
        "description": "Remove one or more albums from the current user's 'Your Music' library.\n",
        "operationId": "remove-albums-user",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryAlbumIds"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "properties": {
                  "ids": {
                    "description": "A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Album(s) have been removed from the library"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Remove Users' Saved Albums\n",
        "tags": [
          "Albums",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/delete-current-user-saved-albums/?ids=07bYtmE3bPsLB6ZbmmFi8d%2C48JYNjh7GMie6NjqYHMmtT%2C27cZdqrQiKt3IT00338dws",
        "x-spotify-docs-endpoint-name": "Remove Albums for Current User"
      },
      "get": {
        "description": "Get a list of the albums saved in the current Spotify user's 'Your Music' library.\n",
        "operationId": "get-users-saved-albums",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingSavedAlbumObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read"
            ]
          }
        ],
        "summary": "Get User's Saved Albums\n",
        "tags": [
          "Albums",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-saved-albums/?limit=1",
        "x-spotify-docs-endpoint-name": "Get User's Saved Albums"
      },
      "put": {
        "description": "Save one or more albums to the current user's 'Your Music' library.\n",
        "operationId": "save-albums-user",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryAlbumIds"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "properties": {
                  "ids": {
                    "description": "A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "The album is saved"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Save Albums for Current User\n",
        "tags": [
          "Albums",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/put-current-user-saved-albums/?ids=07bYtmE3bPsLB6ZbmmFi8d%2C48JYNjh7GMie6NjqYHMmtT%2C27cZdqrQiKt3IT00338dws",
        "x-spotify-docs-endpoint-name": "Save Albums for Current User"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-saved-albums"
    },
    "/me/albums/contains": {
      "get": {
        "description": "Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.\n",
        "operationId": "check-users-saved-albums",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryAlbumIds"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ArrayOfBooleans"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read"
            ]
          }
        ],
        "summary": "Check User's Saved Albums\n",
        "tags": [
          "Albums",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-contains-saved-albums/?ids=0pJJgBzj26qnE1nSQUxaB0%2C5ZAKzV4ZIa5Gt7z29OYHv0",
        "x-spotify-docs-endpoint-name": "Check User's Saved Albums"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-contains-saved-albums"
    },
    "/me/audiobooks": {
      "delete": {
        "description": "Remove one or more audiobooks from the Spotify user's library.\n",
        "operationId": "remove-audiobooks-user",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryAudiobookIds"
          }
        ],
        "responses": {
          "200": {
            "description": "Audiobook(s) have been removed from the library"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Remove User's Saved Audiobooks\n",
        "tags": [
          "Audiobooks",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/delete-current-user-saved-audiobooks/?ids=07bYtmE3bPsLB6ZbmmFi8d%2C48JYNjh7GMie6NjqYHMmtT%2C27cZdqrQiKt3IT00338dws",
        "x-spotify-docs-endpoint-name": "Remove Audiobooks for Current User"
      },
      "get": {
        "description": "Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.\n",
        "operationId": "get-users-saved-audiobooks",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingSimplifiedAudiobookObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read"
            ]
          }
        ],
        "summary": "Get User's Saved Audiobooks\n",
        "tags": [
          "Audiobooks",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-saved-audiobooks/?limit=1",
        "x-spotify-docs-endpoint-name": "Get User's Saved Audiobooks"
      },
      "put": {
        "description": "Save one or more audiobooks to the current Spotify user's library.\n",
        "operationId": "save-audiobooks-user",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryAudiobookIds"
          }
        ],
        "responses": {
          "200": {
            "description": "Audiobook(s) are saved to the library"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Save Audiobooks for Current User\n",
        "tags": [
          "Audiobooks",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/put-current-user-saved-audiobooks/?ids=07bYtmE3bPsLB6ZbmmFi8d%2C48JYNjh7GMie6NjqYHMmtT%2C27cZdqrQiKt3IT00338dws",
        "x-spotify-docs-endpoint-name": "Save Audiobooks for Current User"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-saved-audiobooks"
    },
    "/me/audiobooks/contains": {
      "get": {
        "description": "Check if one or more audiobooks are already saved in the current Spotify user's library.\n",
        "operationId": "check-users-saved-audiobooks",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryAudiobookIds"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ArrayOfBooleans"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read"
            ]
          }
        ],
        "summary": "Check User's Saved Audiobooks\n",
        "tags": [
          "Audiobooks",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-contains-saved-audiobooks/?ids=0pJJgBzj26qnE1nSQUxaB0%2C5ZAKzV4ZIa5Gt7z29OYHv0",
        "x-spotify-docs-endpoint-name": "Check User's Saved Audiobooks"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-contains-saved-audiobooks"
    },
    "/me/episodes": {
      "delete": {
        "description": "Remove one or more episodes from the current user's library.<br/>\nThis API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).\n",
        "operationId": "remove-episodes-user",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryTrackIds"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "properties": {
                  "ids": {
                    "description": "A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Episode removed"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Remove User's Saved Episodes\n",
        "tags": [
          "Episodes",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/delete-current-user-saved-episodes/?ids=77o6BIVlYM3msb4MMIL1jH%2C0Q86acNRm6V9GYx55SXKwf",
        "x-spotify-docs-endpoint-name": "Remove User's Saved Episodes"
      },
      "get": {
        "description": "Get a list of the episodes saved in the current Spotify user's library.<br/>\nThis API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).\n",
        "operationId": "get-users-saved-episodes",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingSavedEpisodeObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read",
              "user-read-playback-position"
            ]
          }
        ],
        "summary": "Get User's Saved Episodes\n",
        "tags": [
          "Episodes",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-saved-episodes/",
        "x-spotify-docs-endpoint-name": "Get User's Saved Episodes"
      },
      "put": {
        "description": "Save one or more episodes to the current user's library.<br/>\nThis API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).\n",
        "operationId": "save-episodes-user",
        "parameters": [
          {
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). Maximum: 50 IDs.\n",
              "example": "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
              "title": "Spotify Episodes IDs",
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "properties": {
                  "ids": {
                    "description": "A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "uris"
                ],
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Episode saved"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Save Episodes for Current User\n",
        "tags": [
          "Episodes",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/put-current-user-saved-episodes/?ids=77o6BIVlYM3msb4MMIL1jH%2C0Q86acNRm6V9GYx55SXKwf",
        "x-spotify-docs-endpoint-name": "Save Episodes for Current User"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-saved-episodes"
    },
    "/me/episodes/contains": {
      "get": {
        "description": "Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>\nThis API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..\n",
        "operationId": "check-users-saved-episodes",
        "parameters": [
          {
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the episodes. Maximum: 50 IDs.\n",
              "example": "77o6BIVlYM3msb4MMIL1jH,0Q86acNRm6V9GYx55SXKwf",
              "title": "Spotify Episode IDs",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ArrayOfBooleans"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read"
            ]
          }
        ],
        "summary": "Check User's Saved Episodes\n",
        "tags": [
          "Episodes",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-contains-saved-episodes/?ids=77o6BIVlYM3msb4MMIL1jH%2C0Q86acNRm6V9GYx55SXKwf",
        "x-spotify-docs-endpoint-name": "Check User's Saved Episodes"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-contains-saved-episodes"
    },
    "/me/following": {
      "delete": {
        "description": "Remove the current user as a follower of one or more artists or other Spotify users.\n",
        "operationId": "unfollow-artists-users",
        "parameters": [
          {
            "in": "query",
            "name": "type",
            "required": true,
            "schema": {
              "description": "The ID type: either `artist` or `user`.\n",
              "enum": [
                "artist",
                "user"
              ],
              "example": "artist",
              "title": "Item Type",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n",
              "example": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
              "title": "Spotify IDs",
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "properties": {
                  "ids": {
                    "description": "A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:[\"74ASZWbe4lXaubB36ztrGX\", \"08td7MxkoHQkXnWAYD8d6Q\"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Artist or user unfollowed"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-follow-modify"
            ]
          }
        ],
        "summary": "Unfollow Artists or Users\n",
        "tags": [
          "Users",
          "Artists",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/delete-following/?type=user&amp;ids=exampleuser01",
        "x-spotify-docs-endpoint-name": "Unfollow Artists or Users"
      },
      "get": {
        "description": "Get the current user's followed artists.\n",
        "operationId": "get-followed",
        "parameters": [
          {
            "in": "query",
            "name": "type",
            "required": true,
            "schema": {
              "description": "The ID type: currently only `artist` is supported.\n",
              "enum": [
                "artist"
              ],
              "example": "artist",
              "title": "Item Type",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "after",
            "required": false,
            "schema": {
              "description": "The last artist ID retrieved from the previous request.\n",
              "example": "0I2XqVXqHScXjHhk6AYYRe",
              "title": "After",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "default": 20,
              "description": "The maximum number of items to return. Default: 20\\. Minimum: 1\\. Maximum: 50\\.\n",
              "example": 10,
              "maximum": 50,
              "minimum": 0,
              "title": "Limit",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/CursorPagedArtists"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-follow-read"
            ]
          }
        ],
        "summary": "Get Followed Artists\n",
        "tags": [
          "Users",
          "Library",
          "Artists"
        ],
        "x-spotify-docs-console-url": "/console/get-following/?type=artist&amp;limit=20",
        "x-spotify-docs-endpoint-name": "Get User's Followed Artists"
      },
      "put": {
        "description": "Add the current user as a follower of one or more artists or other Spotify users.\n",
        "operationId": "follow-artists-users",
        "parameters": [
          {
            "in": "query",
            "name": "type",
            "required": true,
            "schema": {
              "description": "The ID type.\n",
              "enum": [
                "artist",
                "user"
              ],
              "example": "artist",
              "title": "Item Type",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).\nA maximum of 50 IDs can be sent in one request.\n",
              "example": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
              "title": "Spotify IDs",
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "properties": {
                  "ids": {
                    "description": "A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).\nFor example: `{ids:[\"74ASZWbe4lXaubB36ztrGX\", \"08td7MxkoHQkXnWAYD8d6Q\"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "ids"
                ],
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Artist or user followed"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-follow-modify"
            ]
          }
        ],
        "summary": "Follow Artists or Users\n",
        "tags": [
          "Users",
          "Artists",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/put-following/?type=user&amp;ids=exampleuser01",
        "x-spotify-docs-endpoint-name": "Follow Artists or Users"
      },
      "x-spotify-docs-category": "Follow",
      "x-spotify-docs-display-name": "following"
    },
    "/me/following/contains": {
      "get": {
        "description": "Check to see if the current user is following one or more artists or other Spotify users.\n",
        "operationId": "check-current-user-follows",
        "parameters": [
          {
            "in": "query",
            "name": "type",
            "required": true,
            "schema": {
              "description": "The ID type: either `artist` or `user`.\n",
              "enum": [
                "artist",
                "user"
              ],
              "example": "artist",
              "title": "Item Type",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "description": "A comma-separated list of the artist or the user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) to check. For example: `ids=74ASZWbe4lXaubB36ztrGX,08td7MxkoHQkXnWAYD8d6Q`. A maximum of 50 IDs can be sent in one request.\n",
              "example": "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6",
              "title": "Spotify IDs",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ArrayOfBooleans"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-follow-read"
            ]
          }
        ],
        "summary": "Check If User Follows Artists or Users\n",
        "tags": [
          "Users",
          "Artists",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-following-contains/?type=user&amp;ids=exampleuser01",
        "x-spotify-docs-endpoint-name": "Get Following State for Artists/Users"
      },
      "x-spotify-docs-category": "Follow",
      "x-spotify-docs-display-name": "following-contains"
    },
    "/me/player": {
      "get": {
        "description": "Get information about the user’s current playback state, including track or episode, progress, and active device.\n",
        "operationId": "get-information-about-the-users-current-playback",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryAdditionalTypes"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneCurrentlyPlaying"
          },
          "204": {
            "description": "Playback not available or active"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-playback-state"
            ]
          }
        ],
        "summary": "Get Playback State\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/get-user-player/",
        "x-spotify-docs-endpoint-name": "Get Information About The User's Current Playback",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "put": {
        "description": "Transfer playback to a new device and determine if it should start playing.\n",
        "operationId": "transfer-a-users-playback",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "example": {
                  "device_ids": [
                    "74ASZWbe4lXaubB36ztrGX"
                  ]
                },
                "properties": {
                  "device_ids": {
                    "description": "A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:[\"74ASZWbe4lXaubB36ztrGX\"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  },
                  "play": {
                    "additionalProperties": true,
                    "description": "**true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.\n",
                    "type": "boolean"
                  }
                },
                "required": [
                  "device_ids"
                ],
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Playback transferred"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Transfer Playback\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/put-user-player",
        "x-spotify-docs-endpoint-name": "Transfer a User's Playback",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "user-player"
    },
    "/me/player/currently-playing": {
      "get": {
        "description": "Get the object currently being played on the user's Spotify account.\n",
        "operationId": "get-the-users-currently-playing-track",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryAdditionalTypes"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneCurrentlyPlayingTrack"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-currently-playing"
            ]
          }
        ],
        "summary": "Get Currently Playing Track\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/get-users-currently-playing-track/",
        "x-spotify-docs-endpoint-name": "Get the User's Currently Playing Track",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "users-currently-playing-track"
    },
    "/me/player/devices": {
      "get": {
        "description": "Get information about a user’s available devices.\n",
        "operationId": "get-a-users-available-devices",
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyDevices"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-playback-state"
            ]
          }
        ],
        "summary": "Get Available Devices\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/get-users-available-devices/",
        "x-spotify-docs-endpoint-name": "Get a User's Available Devices"
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "users-available-devices"
    },
    "/me/player/next": {
      "post": {
        "description": "Skips to next track in the user’s queue.\n",
        "operationId": "skip-users-playback-to-next-track",
        "parameters": [
          {
            "in": "query",
            "name": "device_id",
            "required": false,
            "schema": {
              "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
              "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              "title": "Device ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Command sent"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Skip To Next\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/post-next/",
        "x-spotify-docs-endpoint-name": "Skip User’s Playback To Next Track",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "next"
    },
    "/me/player/pause": {
      "put": {
        "description": "Pause playback on the user's account.\n",
        "operationId": "pause-a-users-playback",
        "parameters": [
          {
            "in": "query",
            "name": "device_id",
            "required": false,
            "schema": {
              "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n",
              "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              "title": "Device ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Playback paused"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Pause Playback\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/put-pause/",
        "x-spotify-docs-endpoint-name": "Pause a User's Playback",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "pause"
    },
    "/me/player/play": {
      "put": {
        "description": "Start a new context or resume current playback on the user's active device.\n",
        "operationId": "start-a-users-playback",
        "parameters": [
          {
            "in": "query",
            "name": "device_id",
            "required": false,
            "schema": {
              "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.",
              "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              "title": "Device ID",
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "example": {
                  "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                  "offset": {
                    "position": 5
                  },
                  "position_ms": 0
                },
                "properties": {
                  "context_uri": {
                    "additionalProperties": true,
                    "description": "Optional. Spotify URI of the context to play.\nValid contexts are albums, artists & playlists.\n`{context_uri:\"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT\"}`\n",
                    "type": "string"
                  },
                  "offset": {
                    "additionalProperties": true,
                    "description": "Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object\n\"position\" is zero based and can’t be negative. Example: `\"offset\": {\"position\": 5}`\n\"uri\" is a string representing the uri of the item to start at. Example: `\"offset\": {\"uri\": \"spotify:track:1301WleyT98MSxVHPZCA6M\"}`\n",
                    "type": "object"
                  },
                  "position_ms": {
                    "additionalProperties": true,
                    "description": "integer",
                    "type": "integer"
                  },
                  "uris": {
                    "description": "Optional. A JSON array of the Spotify track URIs to play.\nFor example: `{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\", \"spotify:track:1301WleyT98MSxVHPZCA6M\"]}`\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "204": {
            "description": "Playback started"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Start/Resume Playback\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/put-play/",
        "x-spotify-docs-endpoint-name": "Start/Resume a User's Playback",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "play"
    },
    "/me/player/previous": {
      "post": {
        "description": "Skips to previous track in the user’s queue.\n",
        "operationId": "skip-users-playback-to-previous-track",
        "parameters": [
          {
            "in": "query",
            "name": "device_id",
            "required": false,
            "schema": {
              "description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              "title": "Device ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Command sent"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Skip To Previous\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/post-previous/",
        "x-spotify-docs-endpoint-name": "Skip User’s Playback To Previous Track",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "previous"
    },
    "/me/player/queue": {
      "get": {
        "description": "Get the list of objects that make up the user's queue.\n",
        "operationId": "get-queue",
        "responses": {
          "200": {
            "$ref": "#/components/responses/Queue"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-playback-state"
            ]
          }
        ],
        "summary": "Get the User's Queue\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/get-queue/",
        "x-spotify-docs-endpoint-name": "Get the User's Queue",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "post": {
        "description": "Add an item to the end of the user's current playback queue.\n",
        "operationId": "add-to-queue",
        "parameters": [
          {
            "in": "query",
            "name": "uri",
            "required": true,
            "schema": {
              "description": "The uri of the item to add to the queue. Must be a track or an episode uri.\n",
              "example": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
              "title": "Spotify URI",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "device_id",
            "required": false,
            "schema": {
              "description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              "title": "Device ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Command received"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Add Item to Playback Queue\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/post-queue/",
        "x-spotify-docs-endpoint-name": "Add an item to queue",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "queue"
    },
    "/me/player/recently-played": {
      "get": {
        "description": "Get tracks from the current user's recently played tracks.\n_**Note**: Currently doesn't support podcast episodes._\n",
        "operationId": "get-recently-played",
        "parameters": [
          {
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "default": 20,
              "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
              "example": 10,
              "maximum": 50,
              "minimum": 0,
              "title": "Limit",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "after",
            "required": false,
            "schema": {
              "description": "A Unix timestamp in milliseconds. Returns all items\nafter (but not including) this cursor position. If `after` is specified, `before`\nmust not be specified.\n",
              "example": 1484811043508,
              "title": "After",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "before",
            "required": false,
            "schema": {
              "description": "A Unix timestamp in milliseconds. Returns all items\nbefore (but not including) this cursor position. If `before` is specified,\n`after` must not be specified.\n",
              "title": "Before",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/CursorPagedPlayHistory"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-recently-played"
            ]
          }
        ],
        "summary": "Get Recently Played Tracks\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/get-recently-played/",
        "x-spotify-docs-endpoint-name": "Get Current User's Recently Played Tracks",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "recently-played"
    },
    "/me/player/repeat": {
      "put": {
        "description": "Set the repeat mode for the user's playback. Options are repeat-track,\nrepeat-context, and off.\n",
        "operationId": "set-repeat-mode-on-users-playback",
        "parameters": [
          {
            "in": "query",
            "name": "state",
            "required": true,
            "schema": {
              "description": "**track**, **context** or **off**.<br/>\n**track** will repeat the current track.<br/>\n**context** will repeat the current context.<br/>\n**off** will turn repeat off.\n",
              "example": "context",
              "title": "State",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "device_id",
            "required": false,
            "schema": {
              "description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              "title": "Device ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Command sent"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Set Repeat Mode\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/put-repeat/",
        "x-spotify-docs-endpoint-name": "Set Repeat Mode On User’s Playback"
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "repeat"
    },
    "/me/player/seek": {
      "put": {
        "description": "Seeks to the given position in the user’s currently playing track.\n",
        "operationId": "seek-to-position-in-currently-playing-track",
        "parameters": [
          {
            "in": "query",
            "name": "position_ms",
            "required": true,
            "schema": {
              "description": "The position in milliseconds to seek to. Must be a\npositive number. Passing in a position that is greater than the length of\nthe track will cause the player to start playing the next song.\n",
              "example": 25000,
              "title": "Position (ms)",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "device_id",
            "required": false,
            "schema": {
              "description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              "title": "Device ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Command sent"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Seek To Position\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/put-seek/",
        "x-spotify-docs-endpoint-name": "Seek To Position In Currently Playing Track",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/playerPolicyList"
        }
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "seek"
    },
    "/me/player/shuffle": {
      "put": {
        "description": "Toggle shuffle on or off for user’s playback.\n",
        "operationId": "toggle-shuffle-for-users-playback",
        "parameters": [
          {
            "in": "query",
            "name": "state",
            "required": true,
            "schema": {
              "description": "**true** : Shuffle user's playback.<br/>\n**false** : Do not shuffle user's playback.\n",
              "example": true,
              "title": "State",
              "type": "boolean"
            }
          },
          {
            "in": "query",
            "name": "device_id",
            "required": false,
            "schema": {
              "description": "The id of the device this command is targeting. If\nnot supplied, the user's currently active device is the target.\n",
              "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              "title": "Device ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Command sent"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Toggle Playback Shuffle\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/put-shuffle/?state=true",
        "x-spotify-docs-endpoint-name": "Toggle Shuffle For User’s Playback"
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "shuffle"
    },
    "/me/player/volume": {
      "put": {
        "description": "Set the volume for the user’s current playback device.\n",
        "operationId": "set-volume-for-users-playback",
        "parameters": [
          {
            "in": "query",
            "name": "volume_percent",
            "required": true,
            "schema": {
              "description": "The volume to set. Must be a value from 0 to 100 inclusive.\n",
              "example": 50,
              "title": "Volume %",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "device_id",
            "required": false,
            "schema": {
              "description": "The id of the device this command is targeting. If not supplied, the user's currently active device is the target.\n",
              "example": "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
              "title": "Device ID",
              "type": "string"
            }
          }
        ],
        "responses": {
          "204": {
            "description": "Command sent"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-modify-playback-state"
            ]
          }
        ],
        "summary": "Set Playback Volume\n",
        "tags": [
          "Player"
        ],
        "x-spotify-docs-console-url": "/console/put-volume/",
        "x-spotify-docs-endpoint-name": "Set Volume For User's Playback"
      },
      "x-spotify-docs-category": "Player",
      "x-spotify-docs-display-name": "volume"
    },
    "/me/playlists": {
      "get": {
        "description": "Get a list of the playlists owned or followed by the current Spotify\nuser.\n",
        "operationId": "get-a-list-of-current-users-playlists",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "default": 0,
              "description": "'The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the\nnext set of playlists.'\n",
              "example": 5,
              "title": "Offset",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagedPlaylists"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-read-private"
            ]
          }
        ],
        "summary": "Get Current User's Playlists\n",
        "tags": [
          "Playlists",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-playlists/",
        "x-spotify-docs-endpoint-name": "Get a List of Current User's Playlists"
      },
      "x-spotify-docs-category": "Playlists",
      "x-spotify-docs-display-name": "current-user-playlists"
    },
    "/me/shows": {
      "delete": {
        "description": "Delete one or more shows from current Spotify user's library.\n",
        "operationId": "remove-shows-user",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryShowIds"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "description": "Show removed"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Remove User's Saved Shows\n",
        "tags": [
          "Shows",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/delete-current-user-saved-shows/?ids=5AvwZVawapvyhJUIx71pdJ%2C6ups0LMt1G8n81XLlkbsPo%2C5AvwZVawapvyhJUIx71pdJ",
        "x-spotify-docs-endpoint-name": "Remove User's Saved Shows"
      },
      "get": {
        "description": "Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.\n",
        "operationId": "get-users-saved-shows",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingSavedShowObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read"
            ]
          }
        ],
        "summary": "Get User's Saved Shows\n",
        "tags": [
          "Shows",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-saved-shows/",
        "x-spotify-docs-endpoint-name": "Get User's Saved Shows"
      },
      "put": {
        "description": "Save one or more shows to current Spotify user's library.\n",
        "operationId": "save-shows-user",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryShowIds"
          }
        ],
        "responses": {
          "200": {
            "description": "Show saved"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Save Shows for Current User\n",
        "tags": [
          "Shows",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/put-current-user-saved-shows/?ids=5AvwZVawapvyhJUIx71pdJ%2C6ups0LMt1G8n81XLlkbsPo%2C5AvwZVawapvyhJUIx71pdJ",
        "x-spotify-docs-endpoint-name": "Save Shows for Current User"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-saved-shows"
    },
    "/me/shows/contains": {
      "get": {
        "description": "Check if one or more shows is already saved in the current Spotify user's library.\n",
        "operationId": "check-users-saved-shows",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryShowIds"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ArrayOfBooleans"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read"
            ]
          }
        ],
        "summary": "Check User's Saved Shows\n",
        "tags": [
          "Shows",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-contains-saved-shows/?ids=5AvwZVawapvyhJUIx71pdJ%2C6ups0LMt1G8n81XLlkbsPo%2C5AvwZVawapvyhJUIx71pdJ",
        "x-spotify-docs-endpoint-name": "Check User's Saved Shows"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-contains-saved-shows"
    },
    "/me/top/{type}": {
      "get": {
        "description": "Get the current user's top artists or tracks based on calculated affinity.\n",
        "operationId": "get-users-top-artists-and-tracks",
        "parameters": [
          {
            "in": "path",
            "name": "type",
            "required": true,
            "schema": {
              "description": "The type of entity to return. Valid values: `artists` or `tracks`\n",
              "enum": [
                "artists",
                "tracks"
              ],
              "title": "Type",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "time_range",
            "required": false,
            "schema": {
              "default": "medium_term",
              "description": "Over what time frame the affinities are computed. Valid values: `long_term` (calculated from several years of data and including all new data as it becomes available), `medium_term` (approximately last 6 months), `short_term` (approximately last 4 weeks). Default: `medium_term`\n",
              "example": "medium_term",
              "title": "Time Range",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingArtistOrTrackObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-top-read"
            ]
          }
        ],
        "summary": "Get User's Top Items\n",
        "tags": [
          "Users",
          "Tracks",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-top-artists-and-tracks/?type=artists",
        "x-spotify-docs-endpoint-name": "Get a User's Top Artists and Tracks"
      },
      "x-spotify-docs-category": "Personalization",
      "x-spotify-docs-display-name": "current-user-top-artists-and-tracks"
    },
    "/me/tracks": {
      "delete": {
        "description": "Remove one or more tracks from the current user's 'Your Music' library.\n",
        "operationId": "remove-tracks-user",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryTrackIds"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "properties": {
                  "ids": {
                    "description": "A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Track removed"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Remove User's Saved Tracks\n",
        "tags": [
          "Tracks",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/delete-current-user-saved-tracks/?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B",
        "x-spotify-docs-endpoint-name": "Remove User's Saved Tracks"
      },
      "get": {
        "description": "Get a list of the songs saved in the current Spotify user's 'Your Music' library.\n",
        "operationId": "get-users-saved-tracks",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingSavedTrackObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read"
            ]
          }
        ],
        "summary": "Get User's Saved Tracks\n",
        "tags": [
          "Tracks",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-saved-tracks/",
        "x-spotify-docs-endpoint-name": "Get User's Saved Tracks"
      },
      "put": {
        "description": "Save one or more tracks to the current user's 'Your Music' library.\n",
        "operationId": "save-tracks-user",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryTrackIds"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "properties": {
                  "ids": {
                    "description": "A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `[\"4iV5W9uYEdYUVa79Axb7Rh\", \"1301WleyT98MSxVHPZCA6M\"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "uris"
                ],
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Track saved"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-modify"
            ]
          }
        ],
        "summary": "Save Tracks for Current User\n",
        "tags": [
          "Tracks",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/put-current-user-saved-tracks/?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B",
        "x-spotify-docs-endpoint-name": "Save Tracks for User"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-saved-tracks"
    },
    "/me/tracks/contains": {
      "get": {
        "description": "Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.\n",
        "operationId": "check-users-saved-tracks",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryTrackIds"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ArrayOfBooleans"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-library-read"
            ]
          }
        ],
        "summary": "Check User's Saved Tracks\n",
        "tags": [
          "Tracks",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/get-current-user-contains-saved-tracks/?ids=0udZHhCi7p1YzMlvI4fXoK%2C3SF5puV5eb6bgRSxBeMOk9",
        "x-spotify-docs-endpoint-name": "Check User's Saved Tracks"
      },
      "x-spotify-docs-category": "Library",
      "x-spotify-docs-display-name": "current-user-contains-saved-tracks"
    },
    "/playlists/{playlist_id}": {
      "get": {
        "description": "Get a playlist owned by a Spotify user.\n",
        "operationId": "get-playlist",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "in": "query",
            "name": "fields",
            "required": false,
            "schema": {
              "description": "Filters for the query: a comma-separated list of the\nfields to return. If omitted, all fields are returned. For example, to get\njust the playlist''s description and URI: `fields=description,uri`. A dot\nseparator can be used to specify non-reoccurring fields, while parentheses\ncan be used to specify reoccurring fields within objects. For example, to\nget just the added date and user ID of the adder: `fields=tracks.items(added_at,added_by.id)`.\nUse multiple parentheses to drill down into nested objects, for example: `fields=tracks.items(track(name,href,album(name,href)))`.\nFields can be excluded by prefixing them with an exclamation mark, for example:\n`fields=tracks.items(track(name,href,album(!name,href)))`\n",
              "example": "items(added_by.id,track(name,href,album(name,href)))",
              "title": "Fields",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryAdditionalTypes"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OnePlaylist"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Playlist\n",
        "tags": [
          "Playlists"
        ],
        "x-spotify-docs-console-url": "/console/get-playlist/?playlist_id=59ZbFPES4DQwEjBpWHzrtC&amp;user_id=spotify",
        "x-spotify-docs-endpoint-name": "Get a Playlist",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "put": {
        "description": "Change a playlist's name and public/private state. (The user must, of\ncourse, own the playlist.)\n",
        "operationId": "change-playlist-details",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "example": {
                  "description": "Updated playlist description",
                  "name": "Updated Playlist Name",
                  "public": false
                },
                "properties": {
                  "collaborative": {
                    "description": "If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>\n_**Note**: You can only set `collaborative` to `true` on non-public playlists._\n",
                    "type": "boolean"
                  },
                  "description": {
                    "description": "Value for playlist description as displayed in Spotify Clients and in the Web API.\n",
                    "type": "string"
                  },
                  "name": {
                    "description": "The new name for the playlist, for example `\"My New Playlist Title\"`\n",
                    "type": "string"
                  },
                  "public": {
                    "description": "If `true` the playlist will be public, if `false` it will be private.\n",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Playlist updated"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-modify-public",
              "playlist-modify-private"
            ]
          }
        ],
        "summary": "Change Playlist Details\n",
        "tags": [
          "Playlists",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/put-playlist/",
        "x-spotify-docs-endpoint-name": "Change a Playlist's Details"
      },
      "x-spotify-docs-category": "Playlists",
      "x-spotify-docs-display-name": "playlist"
    },
    "/playlists/{playlist_id}/followers": {
      "delete": {
        "description": "Remove the current user as a follower of a playlist.\n",
        "operationId": "unfollow-playlist",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          }
        ],
        "responses": {
          "200": {
            "description": "Playlist unfollowed"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-modify-public",
              "playlist-modify-private"
            ]
          }
        ],
        "summary": "Unfollow Playlist\n",
        "tags": [
          "Users",
          "Playlists"
        ],
        "x-spotify-docs-console-url": "/console/delete-playlist-followers/?playlist_id=2v3iNvBX8Ay1Gt2uXtUKUT&amp;user_id=jmperezperez",
        "x-spotify-docs-endpoint-name": "Unfollow Playlist"
      },
      "put": {
        "description": "Add the current user as a follower of a playlist.\n",
        "operationId": "follow-playlist",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "example": {
                  "public": false
                },
                "properties": {
                  "public": {
                    "description": "Defaults to `true`. If `true` the playlist will be included in user's public playlists, if `false` it will remain private.\n",
                    "type": "boolean"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Playlist followed"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-modify-public",
              "playlist-modify-private"
            ]
          }
        ],
        "summary": "Follow Playlist\n",
        "tags": [
          "Users",
          "Playlists"
        ],
        "x-spotify-docs-console-url": "/console/put-playlist-followers/?playlist_id=2v3iNvBX8Ay1Gt2uXtUKUT&amp;body-json=%7B%0D%0A++%22public%22%3A+true%0D%0A%7D&amp;user_id=jmperezperez",
        "x-spotify-docs-endpoint-name": "Follow a Playlist"
      },
      "x-spotify-docs-category": "Follow",
      "x-spotify-docs-display-name": "playlist-followers"
    },
    "/playlists/{playlist_id}/followers/contains": {
      "get": {
        "description": "Check to see if one or more Spotify users are following a specified playlist.\n",
        "operationId": "check-if-user-follows-playlist",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          },
          {
            "in": "query",
            "name": "ids",
            "required": true,
            "schema": {
              "description": "A comma-separated list of [Spotify User IDs](/documentation/web-api/concepts/spotify-uris-ids) ; the ids of the users that you want to check to see if they follow the playlist. Maximum: 5 ids.\n",
              "example": "jmperezperez,thelinmichael,wizzler",
              "title": "Spotify user IDs",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ArrayOfBooleans"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Check if Users Follow Playlist\n",
        "tags": [
          "Users",
          "Playlists"
        ],
        "x-spotify-docs-console-url": "/console/get-playlist-followers-contains/?ids=possan,elogain&amp;user_id=jmperezperez&amp;playlist_id=2v3iNvBX8Ay1Gt2uXtUKUT",
        "x-spotify-docs-endpoint-name": "Check if Users Follow a Playlist"
      },
      "x-spotify-docs-category": "Follow",
      "x-spotify-docs-display-name": "playlist-followers-contains"
    },
    "/playlists/{playlist_id}/images": {
      "get": {
        "description": "Get the current image associated with a specific playlist.\n",
        "operationId": "get-playlist-cover",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ArrayOfImages"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Playlist Cover Image\n",
        "tags": [
          "Playlists"
        ],
        "x-spotify-docs-console-url": "/console/get-playlist-images?playlist_id=3cEYpjA9oz9GiPac4AsH4n",
        "x-spotify-docs-endpoint-name": "Get a Playlist Cover Image",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "put": {
        "description": "Replace the image used to represent a specific playlist.\n",
        "operationId": "upload-custom-playlist-cover",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          }
        ],
        "requestBody": {
          "content": {
            "image/jpeg": {
              "schema": {
                "description": "Base64 encoded JPEG image data, maximum payload size is 256 KB.",
                "example": "/9j/2wCEABoZGSccJz4lJT5CLy8vQkc9Ozs9R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHCcnMyYzPSYmPUc9Mj1HR0dEREdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//dAAQAAf/uAA5BZG9iZQBkwAAAAAH/wAARCAABAAEDACIAAREBAhEB/8QASwABAQAAAAAAAAAAAAAAAAAAAAYBAQAAAAAAAAAAAAAAAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwAAARECEQA/AJgAH//Z",
                "format": "byte",
                "type": "string"
              }
            }
          }
        },
        "responses": {
          "202": {
            "description": "Image uploaded"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "ugc-image-upload",
              "playlist-modify-public",
              "playlist-modify-private"
            ]
          }
        ],
        "summary": "Add Custom Playlist Cover Image\n",
        "tags": [
          "Playlists"
        ],
        "x-spotify-docs-console-url": "/console/put-playlist-images?playlist_id=3cEYpjA9oz9GiPac4AsH4n",
        "x-spotify-docs-endpoint-name": "Upload a Custom Playlist Cover Image"
      },
      "x-spotify-docs-category": "Playlists",
      "x-spotify-docs-display-name": "playlist-images"
    },
    "/playlists/{playlist_id}/tracks": {
      "delete": {
        "description": "Remove one or more items from a user's playlist.\n",
        "operationId": "remove-tracks-playlist",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "properties": {
                  "snapshot_id": {
                    "description": "The playlist's snapshot ID against which you want to make the changes.\nThe API will validate that the specified items exist and in the specified positions and make the changes,\neven if more recent changes have been made to the playlist.\n",
                    "type": "string"
                  },
                  "tracks": {
                    "description": "An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.\nFor example: `{ \"tracks\": [{ \"uri\": \"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\" },{ \"uri\": \"spotify:track:1301WleyT98MSxVHPZCA6M\" }] }`. A maximum of 100 objects can be sent at once.\n",
                    "items": {
                      "properties": {
                        "uri": {
                          "description": "Spotify URI",
                          "type": "string"
                        }
                      },
                      "type": "object"
                    },
                    "type": "array"
                  }
                },
                "required": [
                  "tracks"
                ],
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/PlaylistSnapshotId"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-modify-public",
              "playlist-modify-private"
            ]
          }
        ],
        "summary": "Remove Playlist Items\n",
        "tags": [
          "Playlists",
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/delete-playlist-tracks/",
        "x-spotify-docs-endpoint-name": "Remove Items from a Playlist"
      },
      "get": {
        "description": "Get full details of the items of a playlist owned by a Spotify user.\n",
        "operationId": "get-playlists-tracks",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "in": "query",
            "name": "fields",
            "required": false,
            "schema": {
              "description": "Filters for the query: a comma-separated list of the\nfields to return. If omitted, all fields are returned. For example, to get\njust the total number of items and the request limit:<br/>`fields=total,limit`<br/>A\ndot separator can be used to specify non-reoccurring fields, while parentheses\ncan be used to specify reoccurring fields within objects. For example, to\nget just the added date and user ID of the adder:<br/>`fields=items(added_at,added_by.id)`<br/>Use\nmultiple parentheses to drill down into nested objects, for example:<br/>`fields=items(track(name,href,album(name,href)))`<br/>Fields\ncan be excluded by prefixing them with an exclamation mark, for example:<br/>`fields=items.track.album(!external_urls,images)`\n",
              "example": "items(added_by.id,track(name,href,album(name,href)))",
              "title": "Fields",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          },
          {
            "$ref": "#/components/parameters/QueryAdditionalTypes"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingPlaylistTrackObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-read-private"
            ]
          }
        ],
        "summary": "Get Playlist Items\n",
        "tags": [
          "Playlists",
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/get-playlist-tracks/?playlist_id=21THa8j9TaSGuXYNBU5tsC&amp;user_id=spotify_espa%C3%B1a",
        "x-spotify-docs-endpoint-name": "Get a Playlist's Items",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "post": {
        "description": "Add one or more items to a user's playlist.\n",
        "operationId": "add-tracks-to-playlist",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          },
          {
            "in": "query",
            "name": "position",
            "required": false,
            "schema": {
              "description": "The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0`; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they are listed in the query string or request body.\n",
              "example": 0,
              "title": "Position (append by default)",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "uris",
            "required": false,
            "schema": {
              "description": "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add, can be track or episode URIs. For example:<br/>`uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh, spotify:track:1301WleyT98MSxVHPZCA6M, spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be added in one request. <br/>\n_**Note**: it is likely that passing a large number of item URIs as a query parameter will exceed the maximum length of the request URI. When adding a large number of items, it is recommended to pass them in the request body, see below._\n",
              "example": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
              "title": "Spotify Track URIs",
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "properties": {
                  "position": {
                    "description": "The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\",\"spotify:track:1301WleyT98MSxVHPZCA6M\"], \"position\": 3}`\n",
                    "type": "integer"
                  },
                  "uris": {
                    "description": "A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{\"uris\": [\"spotify:track:4iV5W9uYEdYUVa79Axb7Rh\",\"spotify:track:1301WleyT98MSxVHPZCA6M\", \"spotify:episode:512ojhOuo1ktJprKbVcKyQ\"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._\n",
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/PlaylistSnapshotId"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-modify-public",
              "playlist-modify-private"
            ]
          }
        ],
        "summary": "Add Items to Playlist\n",
        "tags": [
          "Playlists",
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/post-playlist-tracks/",
        "x-spotify-docs-endpoint-name": "Add Items to a Playlist"
      },
      "put": {
        "description": "Either reorder or replace items in a playlist depending on the request's parameters.\nTo reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.\nTo replace items, include `uris` as either a query parameter or in the request's body.\nReplacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.\n<br/>\n**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.\nThese operations can't be applied together in a single request.\n",
        "operationId": "reorder-or-replace-playlists-tracks",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathPlaylistId"
          },
          {
            "in": "query",
            "name": "uris",
            "required": false,
            "schema": {
              "description": "A comma-separated list of [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to set, can be track or episode URIs. For example: `uris=spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M,spotify:episode:512ojhOuo1ktJprKbVcKyQ`<br/>A maximum of 100 items can be set in one request.\n",
              "title": "Spotify Track URIs",
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "example": {
                  "insert_before": 3,
                  "range_length": 2,
                  "range_start": 1
                },
                "properties": {
                  "insert_before": {
                    "description": "The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.\n",
                    "type": "integer"
                  },
                  "range_length": {
                    "description": "The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.\n",
                    "type": "integer"
                  },
                  "range_start": {
                    "description": "The position of the first item to be reordered.\n",
                    "type": "integer"
                  },
                  "snapshot_id": {
                    "description": "The playlist's snapshot ID against which you want to make the changes.\n",
                    "type": "string"
                  },
                  "uris": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array"
                  }
                },
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/PlaylistSnapshotId"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-modify-public",
              "playlist-modify-private"
            ]
          }
        ],
        "summary": "Update Playlist Items\n",
        "tags": [
          "Playlists",
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/put-playlist-tracks/",
        "x-spotify-docs-endpoint-name": "Reorder or Replace a Playlist's Items"
      },
      "x-spotify-docs-category": "Playlists",
      "x-spotify-docs-display-name": "playlist-tracks"
    },
    "/recommendations": {
      "get": {
        "description": "Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.\n\nFor artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.\n",
        "operationId": "get-recommendations",
        "parameters": [
          {
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "default": 20,
              "description": "The target size of the list of recommended tracks. For seeds with unusually small pools or when highly restrictive filtering is applied, it may be impossible to generate the requested number of recommended tracks. Debugging information for such cases is available in the response. Default: 20\\. Minimum: 1\\. Maximum: 100.\n",
              "example": 10,
              "maximum": 100,
              "minimum": 1,
              "title": "Limit",
              "type": "integer"
            }
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "in": "query",
            "name": "seed_artists",
            "required": true,
            "schema": {
              "description": "A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for seed artists.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.\n",
              "example": "4NHQUGzhtTLFvgF5SZesLK",
              "title": "Spotify Artist ID Seeds",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "seed_genres",
            "required": true,
            "schema": {
              "description": "A comma separated list of any genres in the set of [available genre seeds](#available-genre-seeds).  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.\n",
              "example": "classical,country",
              "title": "Genres Seeds",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "seed_tracks",
            "required": true,
            "schema": {
              "description": "A comma separated list of [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for a seed track.  Up to 5 seed values may be provided in any combination of `seed_artists`, `seed_tracks` and `seed_genres`.\n",
              "example": "0c6xIDDpzE81m2q797ordA",
              "title": "Spotify Track ID Seeds",
              "type": "string"
            }
          },
          {
            "in": "query",
            "name": "min_acousticness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Min. Acousticness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "max_acousticness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Max. Acousticness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "target_acousticness",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Target Acousticness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "min_danceability",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Min. Danceability",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "max_danceability",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Max. Danceability",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "target_danceability",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Target Danceability",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "min_duration_ms",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "title": "Min. Duration (ms)",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "max_duration_ms",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "title": "Max. Duration (ms)",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "target_duration_ms",
            "required": false,
            "schema": {
              "description": "Target duration of the track (ms)",
              "title": "Target Duration (ms)",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "min_energy",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Min. Energy",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "max_energy",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Max. Energy",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "target_energy",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Target Energy",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "min_instrumentalness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Min. Instrumentalness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "max_instrumentalness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Max. Instrumentalness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "target_instrumentalness",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Target Instrumentalness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "min_key",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 11,
              "minimum": 0,
              "title": "Min. Key",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "max_key",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 11,
              "minimum": 0,
              "title": "Max. Key",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "target_key",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 11,
              "minimum": 0,
              "title": "Target Key",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "min_liveness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Min. Liveness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "max_liveness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Max. Liveness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "target_liveness",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Target Liveness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "min_loudness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "title": "Min. Loudness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "max_loudness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "title": "Max. Loudness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "target_loudness",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "title": "Target Loudness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "min_mode",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Min. Mode",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "max_mode",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Max. Mode",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "target_mode",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Target Mode",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "min_popularity",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 100,
              "minimum": 0,
              "title": "Min. Popularity",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "max_popularity",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 100,
              "minimum": 0,
              "title": "Max. Popularity",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "target_popularity",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 100,
              "minimum": 0,
              "title": "Target Popularity",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "min_speechiness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Min. Speechiness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "max_speechiness",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Max. Speechiness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "target_speechiness",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Target Speechiness",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "min_tempo",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "title": "Min. Tempo",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "max_tempo",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "title": "Max. Tempo",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "target_tempo",
            "required": false,
            "schema": {
              "description": "Target tempo (BPM)",
              "title": "Target Tempo",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "min_time_signature",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 11,
              "title": "Min. Time Signature",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "max_time_signature",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "title": "Max. Time Signature",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "target_time_signature",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "title": "Target Time Signature",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "min_valence",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard floor on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `min_tempo=140` would restrict results to only those tracks with a tempo of greater than 140 beats per minute.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Min. Valence",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "max_valence",
            "required": false,
            "schema": {
              "description": "For each tunable track attribute, a hard ceiling on the selected track attribute’s value can be provided. See tunable track attributes below for the list of available options. For example, `max_instrumentalness=0.35` would filter out most tracks that are likely to be instrumental.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Max. Valence",
              "type": "number"
            }
          },
          {
            "in": "query",
            "name": "target_valence",
            "required": false,
            "schema": {
              "description": "For each of the tunable track attributes (below) a target value may be provided. Tracks with the attribute values nearest to the target values will be preferred. For example, you might request `target_energy=0.6` and `target_danceability=0.8`. All target values will be weighed equally in ranking results.\n",
              "maximum": 1,
              "minimum": 0,
              "title": "Target Valence",
              "type": "number"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneRecommendations"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Recommendations\n",
        "tags": [
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/get-recommendations/?seed_artists=4NHQUGzhtTLFvgF5SZesLK&amp;seed_tracks=0c6xIDDpzE81m2q797ordA&amp;min_energy=0.4&amp;min_popularity=50&amp;market=US",
        "x-spotify-docs-endpoint-name": "Get Recommendations"
      },
      "x-spotify-docs-category": "Browse",
      "x-spotify-docs-display-name": "recommendations"
    },
    "/recommendations/available-genre-seeds": {
      "get": {
        "description": "Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).\n",
        "operationId": "get-recommendation-genres",
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyGenres"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Available Genre Seeds\n",
        "tags": [
          "Genres"
        ],
        "x-spotify-docs-console-url": "/console/get-available-genre-seeds/",
        "x-spotify-docs-endpoint-name": "Get Recommendation Genres"
      },
      "x-spotify-docs-category": "Browse",
      "x-spotify-docs-display-name": "available-genre-seeds"
    },
    "/search": {
      "get": {
        "description": "Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks\nthat match a keyword string.<br />\n**Note: Audiobooks are only available for the US, UK, Ireland, New Zealand and Australia markets.**\n",
        "operationId": "search",
        "parameters": [
          {
            "in": "query",
            "name": "q",
            "required": true,
            "schema": {
              "description": "Your search query.\n\nYou can narrow down your search using field filters. The available filters are `album`, `artist`, `track`, `year`, `upc`, `tag:hipster`, `tag:new`, `isrc`, and `genre`. Each field filter only applies to certain result types.\n\nThe `artist` and `year` filters can be used while searching albums, artists and tracks. You can filter on a single `year` or a range (e.g. 1955-1960).<br />\nThe `album` filter can be used while searching albums and tracks.<br />\nThe `genre` filter can be used while searching artists and tracks.<br />\nThe `isrc` and `track` filters can be used while searching tracks.<br />\nThe `upc`, `tag:new` and `tag:hipster` filters can only be used while searching albums. The `tag:new` filter will return albums released in the past two weeks and `tag:hipster` can be used to return only albums with the lowest 10% popularity.<br />\n",
              "example": "remaster%20track:Doxy%20artist:Miles%20Davis",
              "title": "Query",
              "type": "string"
            }
          },
          {
            "explode": false,
            "in": "query",
            "name": "type",
            "required": true,
            "schema": {
              "description": "A comma-separated list of item types to search across. Search results include hits\nfrom all the specified item types. For example: `q=abacab&type=album,track` returns\nboth albums and tracks matching \"abacab\".\n",
              "items": {
                "enum": [
                  "album",
                  "artist",
                  "playlist",
                  "track",
                  "show",
                  "episode",
                  "audiobook"
                ],
                "type": "string"
              },
              "title": "Item type",
              "type": "array"
            }
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "in": "query",
            "name": "limit",
            "required": false,
            "schema": {
              "default": 20,
              "description": "The maximum number of results to return in each item type.\n",
              "example": 10,
              "maximum": 50,
              "minimum": 0,
              "title": "Limit",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "default": 0,
              "description": "The index of the first result to return. Use\nwith limit to get the next page of search results.\n",
              "example": 5,
              "maximum": 1000,
              "minimum": 0,
              "title": "Offset",
              "type": "integer"
            }
          },
          {
            "in": "query",
            "name": "include_external",
            "required": false,
            "schema": {
              "description": "If `include_external=audio` is specified it signals that the client can play externally hosted audio content, and marks\nthe content as playable in the response. By default externally hosted audio content is marked as unplayable in the response.\n",
              "enum": [
                "audio"
              ],
              "title": "Include External",
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/SearchItems"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Search for Item\n",
        "tags": [
          "Search"
        ],
        "x-spotify-docs-console-url": "/console/get-search-item/?q=tania+bowra&amp;type=artist",
        "x-spotify-docs-endpoint-name": "Search for an Item"
      },
      "x-spotify-docs-category": "Search",
      "x-spotify-docs-display-name": "search-item"
    },
    "/shows": {
      "get": {
        "description": "Get Spotify catalog information for several shows based on their Spotify IDs.\n",
        "operationId": "get-multiple-shows",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryShowIds"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManySimplifiedShows"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Several Shows\n",
        "tags": [
          "Shows"
        ],
        "x-spotify-docs-console-url": "/console/get-several-shows/?ids=5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
        "x-spotify-docs-endpoint-name": "Get Multiple Shows",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Shows",
      "x-spotify-docs-display-name": "several-shows"
    },
    "/shows/{id}": {
      "get": {
        "description": "Get Spotify catalog information for a single show identified by its\nunique Spotify ID.\n",
        "operationId": "get-a-show",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/PathShowId"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneShow"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-playback-position"
            ]
          }
        ],
        "summary": "Get Show\n",
        "tags": [
          "Shows"
        ],
        "x-spotify-docs-console-url": "/console/get-show/?id=38bS44xjbVVZ3No3ByF1dJ",
        "x-spotify-docs-endpoint-name": "Get a Show",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Shows",
      "x-spotify-docs-display-name": "show"
    },
    "/shows/{id}/episodes": {
      "get": {
        "description": "Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.\n",
        "operationId": "get-a-shows-episodes",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathShowId"
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "$ref": "#/components/parameters/QueryOffset"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagingSimplifiedEpisodeObject"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "user-read-playback-position"
            ]
          }
        ],
        "summary": "Get Show Episodes\n",
        "tags": [
          "Shows",
          "Episodes"
        ],
        "x-spotify-docs-console-url": "/console/get-show-episodes/",
        "x-spotify-docs-endpoint-name": "Get a Show's Episodes",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Shows",
      "x-spotify-docs-display-name": "show-episodes"
    },
    "/tracks": {
      "get": {
        "description": "Get Spotify catalog information for multiple tracks based on their Spotify IDs.\n",
        "operationId": "get-several-tracks",
        "parameters": [
          {
            "$ref": "#/components/parameters/QueryMarket"
          },
          {
            "$ref": "#/components/parameters/QueryTrackIds"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/ManyTracks"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Several Tracks\n",
        "tags": [
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/get-several-tracks/?ids=3n3Ppam7vgaVa1iaRUc9Lp,3twNvmDtFQtAd5gMKedhLD",
        "x-spotify-docs-endpoint-name": "Get Several Tracks",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Tracks",
      "x-spotify-docs-display-name": "several-tracks"
    },
    "/tracks/{id}": {
      "get": {
        "description": "Get Spotify catalog information for a single track identified by its\nunique Spotify ID.\n",
        "operationId": "get-track",
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the track.\n",
              "example": "11dFghVXANMlKmJXsNCbNl",
              "title": "Spotify Track ID",
              "type": "string"
            }
          },
          {
            "$ref": "#/components/parameters/QueryMarket"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OneTrack"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get Track\n",
        "tags": [
          "Tracks"
        ],
        "x-spotify-docs-console-url": "/console/get-track/?id=3n3Ppam7vgaVa1iaRUc9Lp",
        "x-spotify-docs-endpoint-name": "Get a Track",
        "x-spotify-policy-list": {
          "$ref": "#/components/x-spotify-policy/metadataPolicyList"
        }
      },
      "x-spotify-docs-category": "Tracks",
      "x-spotify-docs-display-name": "track"
    },
    "/users/{user_id}": {
      "get": {
        "description": "Get public profile information about a Spotify user.\n",
        "operationId": "get-users-profile",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathUserId"
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/OnePublicUser"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": []
          }
        ],
        "summary": "Get User's Profile\n",
        "tags": [
          "Users"
        ],
        "x-spotify-docs-console-url": "/console/get-users-profile/?user_id=wizzler",
        "x-spotify-docs-endpoint-name": "Get a User's Profile"
      },
      "x-spotify-docs-category": "Users Profile",
      "x-spotify-docs-display-name": "users-profile"
    },
    "/users/{user_id}/playlists": {
      "get": {
        "description": "Get a list of the playlists owned or followed by a Spotify user.\n",
        "operationId": "get-list-users-playlists",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathUserId"
          },
          {
            "$ref": "#/components/parameters/QueryLimit"
          },
          {
            "in": "query",
            "name": "offset",
            "required": false,
            "schema": {
              "default": 0,
              "description": "The index of the first playlist to return. Default:\n0 (the first object). Maximum offset: 100.000\\. Use with `limit` to get the\nnext set of playlists.\n",
              "example": 5,
              "title": "Offset",
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "$ref": "#/components/responses/PagedPlaylists"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-read-private",
              "playlist-read-collaborative"
            ]
          }
        ],
        "summary": "Get User's Playlists\n",
        "tags": [
          "Playlists",
          "Users"
        ],
        "x-spotify-docs-console-url": "/console/get-playlists/?user_id=wizzler",
        "x-spotify-docs-endpoint-name": "Get a List of a User's Playlists"
      },
      "post": {
        "description": "Create a playlist for a Spotify user. (The playlist will be empty until\nyou [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)\n",
        "operationId": "create-playlist",
        "parameters": [
          {
            "$ref": "#/components/parameters/PathUserId"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "additionalProperties": true,
                "example": {
                  "description": "New playlist description",
                  "name": "New Playlist",
                  "public": false
                },
                "properties": {
                  "collaborative": {
                    "description": "Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._\n",
                    "type": "boolean"
                  },
                  "description": {
                    "description": "value for playlist description as displayed in Spotify Clients and in the Web API.\n",
                    "type": "string"
                  },
                  "name": {
                    "description": "The name for the new playlist, for example `\"Your Coolest Playlist\"`. This name does not need to be unique; a user may have several playlists with the same name.\n",
                    "type": "string"
                  },
                  "public": {
                    "description": "Defaults to `true`. If `true` the playlist will be public, if `false` it will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes)\n",
                    "type": "boolean"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              }
            }
          }
        },
        "responses": {
          "201": {
            "$ref": "#/components/responses/OnePlaylist"
          },
          "401": {
            "$ref": "#/components/responses/Unauthorized"
          },
          "403": {
            "$ref": "#/components/responses/Forbidden"
          },
          "429": {
            "$ref": "#/components/responses/TooManyRequests"
          }
        },
        "security": [
          {
            "oauth_2_0": [
              "playlist-modify-public",
              "playlist-modify-private"
            ]
          }
        ],
        "summary": "Create Playlist\n",
        "tags": [
          "Playlists",
          "Library"
        ],
        "x-spotify-docs-console-url": "/console/post-playlists/",
        "x-spotify-docs-endpoint-name": "Create a Playlist"
      },
      "x-spotify-docs-category": "Playlists",
      "x-spotify-docs-display-name": "playlists"
    }
  },
  "components": {
    "parameters": {
      "PathAlbumId": {
        "in": "path",
        "name": "id",
        "required": true,
        "schema": {
          "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the album.\n",
          "example": "4aawyAB9vmqN3uQ7FjRGTy",
          "title": "Spotify Album ID",
          "type": "string"
        }
      },
      "PathArtistId": {
        "in": "path",
        "name": "id",
        "required": true,
        "schema": {
          "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the artist.\n",
          "example": "0TnOYISbd1XYRBk9myaseg",
          "title": "Spotify Artist ID",
          "type": "string"
        }
      },
      "PathAudiobookId": {
        "in": "path",
        "name": "id",
        "required": true,
        "schema": {
          "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the audiobook.\n",
          "example": "7iHfbu1YPACw6oZPAFJtqe",
          "title": "Spotify Audiobook ID",
          "type": "string"
        }
      },
      "PathChapterId": {
        "in": "path",
        "name": "id",
        "required": true,
        "schema": {
          "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the chapter.\n",
          "example": "0D5wENdkdwbqlrHoaJ9g29",
          "title": "Spotify Chapter ID",
          "type": "string"
        }
      },
      "PathPlaylistId": {
        "in": "path",
        "name": "playlist_id",
        "required": true,
        "schema": {
          "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) of the playlist.\n",
          "example": "3cEYpjA9oz9GiPac4AsH4n",
          "title": "Playlist ID",
          "type": "string"
        }
      },
      "PathShowId": {
        "in": "path",
        "name": "id",
        "required": true,
        "schema": {
          "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids)\nfor the show.\n",
          "example": "38bS44xjbVVZ3No3ByF1dJ",
          "title": "Spotify Show ID",
          "type": "string"
        }
      },
      "PathUserId": {
        "in": "path",
        "name": "user_id",
        "required": true,
        "schema": {
          "description": "The user's [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids).\n",
          "example": "smedjan",
          "title": "User ID",
          "type": "string"
        }
      },
      "QueryAdditionalTypes": {
        "in": "query",
        "name": "additional_types",
        "required": false,
        "schema": {
          "description": "A comma-separated list of item types that your client supports besides the default `track` type. Valid types are: `track` and `episode`.<br/>\n_**Note**: This parameter was introduced to allow existing clients to maintain their current behaviour and might be deprecated in the future._<br/>\nIn addition to providing this parameter, make sure that your client properly handles cases of new types in the future by checking against the `type` field of each object.\n",
          "title": "Additional Types",
          "type": "string"
        }
      },
      "QueryAlbumIds": {
        "in": "query",
        "name": "ids",
        "required": true,
        "schema": {
          "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the albums. Maximum: 20 IDs.\n",
          "example": "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
          "title": "Spotify Album IDs",
          "type": "string"
        }
      },
      "QueryAudiobookIds": {
        "in": "query",
        "name": "ids",
        "required": true,
        "schema": {
          "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ`. Maximum: 50 IDs.\n",
          "example": "18yVqkdbdRvS24c0Ilj2ci,1HGw3J3NxZO1TP1BTtVhpZ,7iHfbu1YPACw6oZPAFJtqe",
          "title": "Spotify Audiobook IDs",
          "type": "string"
        }
      },
      "QueryChapterIds": {
        "in": "query",
        "name": "ids",
        "required": true,
        "schema": {
          "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU`. Maximum: 50 IDs.\n",
          "example": "0IsXVP0JmcB2adSE338GkK,3ZXb8FKZGU0EHALYX6uCzU,0D5wENdkdwbqlrHoaJ9g29",
          "title": "Spotify Chapter IDs",
          "type": "string"
        }
      },
      "QueryIncludeGroups": {
        "in": "query",
        "name": "include_groups",
        "required": false,
        "schema": {
          "description": "A comma-separated list of keywords that will be used to filter the response. If not supplied, all album types will be returned. <br/>\nValid values are:<br/>- `album`<br/>- `single`<br/>- `appears_on`<br/>- `compilation`<br/>For example: `include_groups=album,single`.\n",
          "example": "single,appears_on",
          "title": "Groups to include (single, album, appears_on, compilation)",
          "type": "string"
        }
      },
      "QueryLimit": {
        "in": "query",
        "name": "limit",
        "required": false,
        "schema": {
          "default": 20,
          "description": "The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n",
          "example": 10,
          "maximum": 50,
          "minimum": 0,
          "title": "Limit",
          "type": "integer"
        }
      },
      "QueryMarket": {
        "in": "query",
        "name": "market",
        "required": false,
        "schema": {
          "description": "An [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).\n  If a country code is specified, only content that is available in that market will be returned.<br/>\n  If a valid user access token is specified in the request header, the country associated with\n  the user account will take priority over this parameter.<br/>\n  _**Note**: If neither market or user country are provided, the content is considered unavailable for the client._<br/>\n  Users can view the country that is associated with their account in the [account settings](https://www.spotify.com/se/account/overview/).\n",
          "example": "ES",
          "title": "Market",
          "type": "string"
        }
      },
      "QueryOffset": {
        "in": "query",
        "name": "offset",
        "required": false,
        "schema": {
          "default": 0,
          "description": "The index of the first item to return. Default: 0 (the first item). Use with limit to get the next set of items.\n",
          "example": 5,
          "title": "Offset",
          "type": "integer"
        }
      },
      "QueryShowIds": {
        "in": "query",
        "name": "ids",
        "required": true,
        "schema": {
          "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids) for the shows. Maximum: 50 IDs.\n",
          "example": "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ",
          "title": "Ids",
          "type": "string"
        }
      },
      "QueryTrackIds": {
        "in": "query",
        "name": "ids",
        "required": true,
        "schema": {
          "description": "A comma-separated list of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M`. Maximum: 50 IDs.\n",
          "example": "7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B",
          "title": "Spotify Track IDs",
          "type": "string"
        }
      }
    },
    "responses": {
      "ArrayOfBooleans": {
        "content": {
          "application/json": {
            "schema": {
              "example": [
                false,
                true
              ],
              "items": {
                "type": "boolean"
              },
              "type": "array"
            }
          }
        },
        "description": "Array of booleans"
      },
      "ArrayOfImages": {
        "content": {
          "application/json": {
            "schema": {
              "items": {
                "$ref": "#/components/schemas/ImageObject"
              },
              "type": "array"
            }
          }
        },
        "description": "A set of images"
      },
      "BadRequest": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "error": {
                  "$ref": "#/components/schemas/ErrorObject"
                }
              },
              "required": [
                "error"
              ],
              "type": "object"
            }
          }
        },
        "description": "The request contains malformed data in path, query parameters, or body.\n"
      },
      "CursorPagedArtists": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "artists": {
                  "$ref": "#/components/schemas/CursorPagingSimplifiedArtistObject"
                }
              },
              "required": [
                "artists"
              ],
              "type": "object"
            }
          }
        },
        "description": "A paged set of artists"
      },
      "CursorPagedPlayHistory": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/CursorPagingPlayHistoryObject"
            }
          }
        },
        "description": "A paged set of tracks"
      },
      "Forbidden": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "error": {
                  "$ref": "#/components/schemas/ErrorObject"
                }
              },
              "required": [
                "error"
              ],
              "type": "object"
            }
          }
        },
        "description": "Bad OAuth request (wrong consumer key, bad nonce, expired\ntimestamp...). Unfortunately, re-authenticating the user won't help here.\n"
      },
      "ManyAlbums": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "albums": {
                  "items": {
                    "$ref": "#/components/schemas/AlbumObject"
                  },
                  "type": "array"
                }
              },
              "required": [
                "albums"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of albums"
      },
      "ManyArtists": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "artists": {
                  "items": {
                    "$ref": "#/components/schemas/ArtistObject"
                  },
                  "type": "array"
                }
              },
              "required": [
                "artists"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of artists"
      },
      "ManyAudioFeatures": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "audio_features": {
                  "items": {
                    "$ref": "#/components/schemas/AudioFeaturesObject"
                  },
                  "type": "array"
                }
              },
              "required": [
                "audio_features"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of audio features"
      },
      "ManyAudiobooks": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "audiobooks": {
                  "items": {
                    "$ref": "#/components/schemas/AudiobookObject"
                  },
                  "type": "array"
                }
              },
              "required": [
                "audiobooks"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of audiobooks"
      },
      "ManyChapters": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "chapters": {
                  "items": {
                    "$ref": "#/components/schemas/ChapterObject"
                  },
                  "type": "array"
                }
              },
              "required": [
                "chapters"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of chapters"
      },
      "ManyDevices": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "devices": {
                  "items": {
                    "$ref": "#/components/schemas/DeviceObject"
                  },
                  "type": "array"
                }
              },
              "required": [
                "devices"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of devices"
      },
      "ManyEpisodes": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "episodes": {
                  "items": {
                    "$ref": "#/components/schemas/EpisodeObject"
                  },
                  "type": "array"
                }
              },
              "required": [
                "episodes"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of episodes"
      },
      "ManyGenres": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "genres": {
                  "example": [
                    "alternative",
                    "samba"
                  ],
                  "items": {
                    "type": "string"
                  },
                  "type": "array"
                }
              },
              "required": [
                "genres"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of genres"
      },
      "ManySimplifiedShows": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "shows": {
                  "items": {
                    "$ref": "#/components/schemas/SimplifiedShowObject"
                  },
                  "type": "array"
                }
              },
              "required": [
                "shows"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of shows"
      },
      "ManyTracks": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "tracks": {
                  "items": {
                    "$ref": "#/components/schemas/TrackObject"
                  },
                  "type": "array"
                }
              },
              "required": [
                "tracks"
              ],
              "type": "object"
            }
          }
        },
        "description": "A set of tracks"
      },
      "NotFound": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "error": {
                  "$ref": "#/components/schemas/ErrorObject"
                }
              },
              "required": [
                "error"
              ],
              "type": "object"
            }
          }
        },
        "description": "The requested resource cannot be found.\n"
      },
      "OneAlbum": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/AlbumObject"
            }
          }
        },
        "description": "An album"
      },
      "OneArtist": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ArtistObject"
            }
          }
        },
        "description": "An artist"
      },
      "OneAudioAnalysis": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/AudioAnalysisObject"
            }
          }
        },
        "description": "Audio analysis for one track"
      },
      "OneAudioFeatures": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/AudioFeaturesObject"
            }
          }
        },
        "description": "Audio features for one track"
      },
      "OneAudiobook": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/AudiobookObject"
            }
          }
        },
        "description": "An Audiobook"
      },
      "OneCategory": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/CategoryObject"
            }
          }
        },
        "description": "A category"
      },
      "OneChapter": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ChapterObject"
            }
          }
        },
        "description": "A Chapter"
      },
      "OneCurrentlyPlaying": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/CurrentlyPlayingContextObject"
            }
          }
        },
        "description": "Information about playback"
      },
      "OneCurrentlyPlayingTrack": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/CurrentlyPlayingContextObject"
            }
          }
        },
        "description": "Information about the currently playing track"
      },
      "OneEpisode": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/EpisodeObject"
            }
          }
        },
        "description": "An episode"
      },
      "OnePlaylist": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PlaylistObject"
            }
          }
        },
        "description": "A playlist"
      },
      "OnePrivateUser": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PrivateUserObject"
            }
          }
        },
        "description": "A user"
      },
      "OnePublicUser": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PublicUserObject"
            }
          }
        },
        "description": "A user"
      },
      "OneRecommendations": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/RecommendationsObject"
            }
          }
        },
        "description": "A set of recommendations"
      },
      "OneShow": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ShowObject"
            }
          }
        },
        "description": "A show"
      },
      "OneTrack": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/TrackObject"
            }
          }
        },
        "description": "A track"
      },
      "PagedAlbums": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "albums": {
                  "$ref": "#/components/schemas/PagingSimplifiedAlbumObject"
                }
              },
              "required": [
                "albums"
              ],
              "type": "object"
            }
          }
        },
        "description": "A paged set of albums"
      },
      "PagedCategories": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "categories": {
                  "$ref": "#/components/schemas/PagingObject"
                }
              },
              "required": [
                "categories"
              ],
              "type": "object"
            }
          }
        },
        "description": "A paged set of categories"
      },
      "PagedFeaturedPlaylists": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingFeaturedPlaylistObject"
            }
          }
        },
        "description": "A paged set of playlists"
      },
      "PagedPlaylists": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingPlaylistObject"
            }
          }
        },
        "description": "A paged set of playlists"
      },
      "PagingArtistOrTrackObject": {
        "content": {
          "application/json": {
            "schema": {
              "allOf": [
                {
                  "$ref": "#/components/schemas/PagingObject"
                },
                {
                  "properties": {
                    "items": {
                      "items": {
                        "discriminator": {
                          "propertyName": "type"
                        },
                        "oneOf": [
                          {
                            "$ref": "#/components/schemas/ArtistObject"
                          },
                          {
                            "$ref": "#/components/schemas/TrackObject"
                          }
                        ],
                        "type": "object"
                      },
                      "type": "array"
                    }
                  },
                  "type": "object"
                }
              ],
              "type": "object"
            }
          }
        },
        "description": "Pages of artists or tracks"
      },
      "PagingPlaylistTrackObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingPlaylistTrackObject"
            }
          }
        },
        "description": "Pages of tracks"
      },
      "PagingSavedAlbumObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSavedAlbumObject"
            }
          }
        },
        "description": "Pages of albums"
      },
      "PagingSavedEpisodeObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSavedEpisodeObject"
            }
          }
        },
        "description": "Pages of episodes"
      },
      "PagingSavedShowObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSavedShowObject"
            }
          }
        },
        "description": "Pages of shows"
      },
      "PagingSavedTrackObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSavedTrackObject"
            }
          }
        },
        "description": "Pages of tracks"
      },
      "PagingSimplifiedAlbumObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSimplifiedAlbumObject"
            }
          }
        },
        "description": "Pages of albums"
      },
      "PagingSimplifiedArtistObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSimplifiedArtistObject"
            }
          }
        },
        "description": "Pages of artists"
      },
      "PagingSimplifiedAudiobookObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSimplifiedAudiobookObject"
            }
          }
        },
        "description": "Pages of audiobooks"
      },
      "PagingSimplifiedChapterObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSimplifiedChapterObject"
            }
          }
        },
        "description": "Pages of chapters"
      },
      "PagingSimplifiedEpisodeObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSimplifiedEpisodeObject"
            }
          }
        },
        "description": "Pages of episodes"
      },
      "PagingSimplifiedShowObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSimplifiedShowObject"
            }
          }
        },
        "description": "Pages of shows"
      },
      "PagingSimplifiedTrackObject": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/PagingSimplifiedTrackObject"
            }
          }
        },
        "description": "Pages of tracks"
      },
      "PlaylistSnapshotId": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "snapshot_id": {
                  "example": "abc",
                  "type": "string"
                }
              },
              "type": "object"
            }
          }
        },
        "description": "A snapshot ID for the playlist"
      },
      "Queue": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/QueueObject"
            }
          }
        },
        "description": "Information about the queue"
      },
      "SearchItems": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "albums": {
                  "$ref": "#/components/schemas/PagingSimplifiedAlbumObject"
                },
                "artists": {
                  "$ref": "#/components/schemas/PagingArtistObject"
                },
                "audiobooks": {
                  "$ref": "#/components/schemas/PagingSimplifiedAudiobookObject"
                },
                "episodes": {
                  "$ref": "#/components/schemas/PagingSimplifiedEpisodeObject"
                },
                "playlists": {
                  "$ref": "#/components/schemas/PagingPlaylistObject"
                },
                "shows": {
                  "$ref": "#/components/schemas/PagingSimplifiedShowObject"
                },
                "tracks": {
                  "$ref": "#/components/schemas/PagingTrackObject"
                }
              },
              "type": "object"
            }
          }
        },
        "description": "Search response"
      },
      "TooManyRequests": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "error": {
                  "$ref": "#/components/schemas/ErrorObject"
                }
              },
              "required": [
                "error"
              ],
              "type": "object"
            }
          }
        },
        "description": "The app has exceeded its rate limits.\n"
      },
      "Unauthorized": {
        "content": {
          "application/json": {
            "schema": {
              "properties": {
                "error": {
                  "$ref": "#/components/schemas/ErrorObject"
                }
              },
              "required": [
                "error"
              ],
              "type": "object"
            }
          }
        },
        "description": "Bad or expired token. This can happen if the user revoked a token or\nthe access token has expired. You should re-authenticate the user.\n"
      }
    },
    "schemas": {
      "AlbumBase": {
        "properties": {
          "album_type": {
            "description": "The type of the album.\n",
            "enum": [
              "album",
              "single",
              "compilation"
            ],
            "example": "compilation",
            "type": "string"
          },
          "available_markets": {
            "description": "The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._\n",
            "example": [
              "CA",
              "BR",
              "IT"
            ],
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "copyrights": {
            "description": "The copyright statements of the album.\n",
            "items": {
              "$ref": "#/components/schemas/CopyrightObject"
            },
            "type": "array"
          },
          "external_ids": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalIdObject"
              }
            ],
            "description": "Known external IDs for the album.\n"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known external URLs for this album.\n"
          },
          "genres": {
            "description": "A list of the genres the album is associated with. If not yet classified, the array is empty.\n",
            "example": [
              "Egg punk",
              "Noise rock"
            ],
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the album.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.\n",
            "example": "2up3OPMp9Tb4dAKM2erWXQ",
            "type": "string"
          },
          "images": {
            "description": "The cover art for the album in various sizes, widest first.\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "label": {
            "description": "The label associated with the album.\n",
            "type": "string"
          },
          "name": {
            "description": "The name of the album. In case of an album takedown, the value may be an empty string.\n",
            "type": "string"
          },
          "popularity": {
            "description": "The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.\n",
            "type": "integer"
          },
          "release_date": {
            "description": "The date the album was first released.\n",
            "example": "1981-12",
            "type": "string"
          },
          "release_date_precision": {
            "description": "The precision with which `release_date` value is known.\n",
            "enum": [
              "year",
              "month",
              "day"
            ],
            "example": "year",
            "type": "string"
          },
          "restrictions": {
            "allOf": [
              {
                "$ref": "#/components/schemas/AlbumRestrictionObject"
              }
            ],
            "description": "Included in the response when a content restriction is applied.\n"
          },
          "total_tracks": {
            "description": "The number of tracks in the album.",
            "example": 9,
            "type": "integer"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "album"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.\n",
            "example": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
            "type": "string"
          }
        },
        "required": [
          "album_type",
          "total_tracks",
          "available_markets",
          "external_urls",
          "href",
          "id",
          "images",
          "name",
          "release_date",
          "release_date_precision",
          "type",
          "uri"
        ],
        "type": "object"
      },
      "AlbumObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/AlbumBase"
          },
          {
            "properties": {
              "artists": {
                "description": "The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.\n",
                "items": {
                  "$ref": "#/components/schemas/ArtistObject"
                },
                "type": "array"
              },
              "tracks": {
                "$ref": "#/components/schemas/PagingSimplifiedTrackObject",
                "description": "The tracks of the album.\n"
              }
            },
            "type": "object"
          }
        ],
        "x-spotify-docs-type": "AlbumObject"
      },
      "AlbumRestrictionObject": {
        "properties": {
          "reason": {
            "description": "The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.\nAdditional reasons may be added in the future.\n",
            "enum": [
              "market",
              "product",
              "explicit"
            ],
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "AlbumRestrictionObject"
      },
      "ArtistObject": {
        "properties": {
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known external URLs for this artist.\n"
          },
          "followers": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FollowersObject"
              }
            ],
            "description": "Information about the followers of the artist.\n"
          },
          "genres": {
            "description": "A list of the genres the artist is associated with. If not yet classified, the array is empty.\n",
            "example": [
              "Prog rock",
              "Grunge"
            ],
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the artist.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.\n",
            "type": "string"
          },
          "images": {
            "description": "Images of the artist in various sizes, widest first.\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "name": {
            "description": "The name of the artist.\n",
            "type": "string"
          },
          "popularity": {
            "description": "The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.\n",
            "type": "integer"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "artist"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "ArtistObject"
      },
      "AudioAnalysisObject": {
        "properties": {
          "bars": {
            "description": "The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats.",
            "items": {
              "$ref": "#/components/schemas/TimeIntervalObject"
            },
            "type": "array"
          },
          "beats": {
            "description": "The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums.",
            "items": {
              "$ref": "#/components/schemas/TimeIntervalObject"
            },
            "type": "array"
          },
          "meta": {
            "properties": {
              "analysis_time": {
                "description": "The amount of time taken to analyze this track.",
                "example": 6.93906,
                "type": "number"
              },
              "analyzer_version": {
                "description": "The version of the Analyzer used to analyze this track.",
                "example": "4.0.0",
                "type": "string"
              },
              "detailed_status": {
                "description": "A detailed status code for this track. If analysis data is missing, this code may explain why.",
                "example": "OK",
                "type": "string"
              },
              "input_process": {
                "description": "The method used to read the track's audio data.",
                "example": "libvorbisfile L+R 44100->22050",
                "type": "string"
              },
              "platform": {
                "description": "The platform used to read the track's audio data.",
                "example": "Linux",
                "type": "string"
              },
              "status_code": {
                "description": "The return code of the analyzer process. 0 if successful, 1 if any errors occurred.",
                "example": 0,
                "type": "integer"
              },
              "timestamp": {
                "description": "The Unix timestamp (in seconds) at which this track was analyzed.",
                "example": 1495193577,
                "type": "integer"
              }
            },
            "type": "object"
          },
          "sections": {
            "description": "Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness.",
            "items": {
              "$ref": "#/components/schemas/SectionObject"
            },
            "type": "array"
          },
          "segments": {
            "description": "Each segment contains a roughly conisistent sound throughout its duration.",
            "items": {
              "$ref": "#/components/schemas/SegmentObject"
            },
            "type": "array"
          },
          "tatums": {
            "description": "A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments).",
            "items": {
              "$ref": "#/components/schemas/TimeIntervalObject"
            },
            "type": "array"
          },
          "track": {
            "properties": {
              "analysis_channels": {
                "description": "The number of channels used for analysis. If 1, all channels are summed together to mono before analysis.",
                "example": 1,
                "type": "integer"
              },
              "analysis_sample_rate": {
                "description": "The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify.",
                "example": 22050,
                "type": "integer"
              },
              "code_version": {
                "description": "A version number for the Echo Nest Musical Fingerprint format used in the codestring field.",
                "example": 3.15,
                "type": "number"
              },
              "codestring": {
                "description": "An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track.",
                "type": "string"
              },
              "duration": {
                "description": "Length of the track in seconds.",
                "example": 207.95985,
                "type": "number"
              },
              "echoprint_version": {
                "description": "A version number for the EchoPrint format used in the echoprintstring field.",
                "example": 4.15,
                "type": "number"
              },
              "echoprintstring": {
                "description": "An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track.",
                "type": "string"
              },
              "end_of_fade_in": {
                "description": "The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0.",
                "example": 0,
                "type": "number"
              },
              "key": {
                "$ref": "#/components/schemas/Key"
              },
              "key_confidence": {
                "description": "The confidence, from 0.0 to 1.0, of the reliability of the `key`.",
                "example": 0.408,
                "maximum": 1,
                "minimum": 0,
                "type": "number"
              },
              "loudness": {
                "$ref": "#/components/schemas/Loudness"
              },
              "mode": {
                "$ref": "#/components/schemas/Mode"
              },
              "mode_confidence": {
                "description": "The confidence, from 0.0 to 1.0, of the reliability of the `mode`.",
                "example": 0.485,
                "maximum": 1,
                "minimum": 0,
                "type": "number"
              },
              "num_samples": {
                "description": "The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`.",
                "example": 4585515,
                "type": "integer"
              },
              "offset_seconds": {
                "description": "An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.)",
                "example": 0,
                "type": "integer"
              },
              "rhythm_version": {
                "description": "A version number for the Rhythmstring used in the rhythmstring field.",
                "example": 1,
                "type": "number"
              },
              "rhythmstring": {
                "description": "A Rhythmstring for this track. The format of this string is similar to the Synchstring.",
                "type": "string"
              },
              "sample_md5": {
                "description": "This field will always contain the empty string.",
                "type": "string"
              },
              "start_of_fade_out": {
                "description": "The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length.",
                "example": 201.13705,
                "type": "number"
              },
              "synch_version": {
                "description": "A version number for the Synchstring used in the synchstring field.",
                "example": 1,
                "type": "number"
              },
              "synchstring": {
                "description": "A [Synchstring](https://github.com/echonest/synchdata) for this track.",
                "type": "string"
              },
              "tempo": {
                "$ref": "#/components/schemas/Tempo"
              },
              "tempo_confidence": {
                "description": "The confidence, from 0.0 to 1.0, of the reliability of the `tempo`.",
                "example": 0.73,
                "maximum": 1,
                "minimum": 0,
                "type": "number"
              },
              "time_signature": {
                "$ref": "#/components/schemas/TimeSignature"
              },
              "time_signature_confidence": {
                "description": "The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`.",
                "example": 0.994,
                "maximum": 1,
                "minimum": 0,
                "type": "number"
              },
              "window_seconds": {
                "description": "The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.)",
                "example": 0,
                "type": "integer"
              }
            },
            "type": "object"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "AudioAnalysisObject"
      },
      "AudioFeaturesObject": {
        "properties": {
          "acousticness": {
            "description": "A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.\n",
            "example": 0.00242,
            "format": "float",
            "maximum": 1,
            "minimum": 0,
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "analysis_url": {
            "description": "A URL to access the full audio analysis of this track. An access token is required to access this data.\n",
            "example": "https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B\n",
            "type": "string"
          },
          "danceability": {
            "description": "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.\n",
            "example": 0.585,
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "duration_ms": {
            "description": "The duration of the track in milliseconds.\n",
            "example": 237040,
            "type": "integer"
          },
          "energy": {
            "description": "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.\n",
            "example": 0.842,
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "id": {
            "description": "The Spotify ID for the track.\n",
            "example": "2takcwOaAZWiXQijPHIx7B",
            "type": "string"
          },
          "instrumentalness": {
            "description": "Predicts whether a track contains no vocals. \"Ooh\" and \"aah\" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \"vocal\". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.\n",
            "example": 0.00686,
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "key": {
            "$ref": "#/components/schemas/Key"
          },
          "liveness": {
            "description": "Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.\n",
            "example": 0.0866,
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "loudness": {
            "$ref": "#/components/schemas/Loudness"
          },
          "mode": {
            "$ref": "#/components/schemas/Mode"
          },
          "speechiness": {
            "description": "Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.\n",
            "example": 0.0556,
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "tempo": {
            "$ref": "#/components/schemas/Tempo"
          },
          "time_signature": {
            "$ref": "#/components/schemas/TimeSignature"
          },
          "track_href": {
            "description": "A link to the Web API endpoint providing full details of the track.\n",
            "example": "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B\n",
            "type": "string"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "audio_features"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The Spotify URI for the track.\n",
            "example": "spotify:track:2takcwOaAZWiXQijPHIx7B",
            "type": "string"
          },
          "valence": {
            "description": "A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).\n",
            "example": 0.428,
            "format": "float",
            "maximum": 1,
            "minimum": 0,
            "type": "number",
            "x-spotify-docs-type": "Float"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "AudioFeaturesObject"
      },
      "AudiobookBase": {
        "properties": {
          "authors": {
            "description": "The author(s) for the audiobook.\n",
            "items": {
              "$ref": "#/components/schemas/AuthorObject"
            },
            "type": "array"
          },
          "available_markets": {
            "description": "A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "copyrights": {
            "description": "The copyright statements of the audiobook.\n",
            "items": {
              "$ref": "#/components/schemas/CopyrightObject"
            },
            "type": "array"
          },
          "description": {
            "description": "A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.\n",
            "type": "string"
          },
          "edition": {
            "description": "The edition of the audiobook.\n",
            "example": "Unabridged",
            "type": "string"
          },
          "explicit": {
            "description": "Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).\n",
            "type": "boolean"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "External URLs for this audiobook.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the audiobook.\n",
            "type": "string"
          },
          "html_description": {
            "description": "A description of the audiobook. This field may contain HTML tags.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.\n",
            "type": "string"
          },
          "images": {
            "description": "The cover art for the audiobook in various sizes, widest first.\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "languages": {
            "description": "A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.\n",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "media_type": {
            "description": "The media type of the audiobook.\n",
            "type": "string"
          },
          "name": {
            "description": "The name of the audiobook.\n",
            "type": "string"
          },
          "narrators": {
            "description": "The narrator(s) for the audiobook.\n",
            "items": {
              "$ref": "#/components/schemas/NarratorObject"
            },
            "type": "array"
          },
          "publisher": {
            "description": "The publisher of the audiobook.\n",
            "type": "string"
          },
          "total_chapters": {
            "description": "The number of chapters in this audiobook.\n",
            "type": "integer"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "audiobook"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.\n",
            "type": "string"
          }
        },
        "required": [
          "authors",
          "available_markets",
          "copyrights",
          "description",
          "explicit",
          "external_urls",
          "href",
          "html_description",
          "id",
          "images",
          "languages",
          "media_type",
          "name",
          "narrators",
          "publisher",
          "total_chapters",
          "type",
          "uri"
        ],
        "type": "object"
      },
      "AudiobookObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/AudiobookBase"
          },
          {
            "properties": {
              "chapters": {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/PagingSimplifiedChapterObject"
                  }
                ],
                "description": "The chapters of the audiobook.\n",
                "type": "object"
              }
            },
            "required": [
              "chapters"
            ],
            "type": "object"
          }
        ],
        "x-spotify-docs-type": "AudiobookObject"
      },
      "AuthorObject": {
        "properties": {
          "name": {
            "description": "The name of the author.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "AuthorObject"
      },
      "CategoryObject": {
        "properties": {
          "href": {
            "description": "A link to the Web API endpoint returning full details of the category.\n",
            "type": "string"
          },
          "icons": {
            "description": "The category icon, in various sizes.\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "id": {
            "description": "The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of the category.\n",
            "example": "equal",
            "type": "string"
          },
          "name": {
            "description": "The name of the category.\n",
            "example": "EQUAL",
            "type": "string"
          }
        },
        "required": [
          "href",
          "icons",
          "id",
          "name"
        ],
        "type": "object",
        "x-spotify-docs-type": "CategoryObject"
      },
      "ChapterBase": {
        "properties": {
          "audio_preview_url": {
            "description": "A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.\n",
            "example": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
            "type": "string",
            "x-spotify-policy-list": [
              {
                "$ref": "#/components/x-spotify-policy/StandalonePreview"
              }
            ]
          },
          "available_markets": {
            "description": "A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "chapter_number": {
            "description": "The number of the chapter\n",
            "example": 1,
            "type": "integer"
          },
          "description": {
            "description": "A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.\n",
            "example": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
            "type": "string"
          },
          "duration_ms": {
            "description": "The episode length in milliseconds.\n",
            "example": 1686230,
            "type": "integer"
          },
          "explicit": {
            "description": "Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).\n",
            "type": "boolean"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "External URLs for this episode.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the episode.\n",
            "example": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
            "type": "string"
          },
          "html_description": {
            "description": "A description of the episode. This field may contain HTML tags.\n",
            "example": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.\n",
            "example": "5Xt5DXGzch68nYYamXrNxZ",
            "type": "string"
          },
          "images": {
            "description": "The cover art for the episode in various sizes, widest first.\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "is_playable": {
            "description": "True if the episode is playable in the given market. Otherwise false.\n",
            "type": "boolean"
          },
          "languages": {
            "description": "A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.\n",
            "example": [
              "fr",
              "en"
            ],
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "name": {
            "description": "The name of the episode.\n",
            "example": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
            "type": "string"
          },
          "release_date": {
            "description": "The date the episode was first released, for example `\"1981-12-15\"`. Depending on the precision, it might be shown as `\"1981\"` or `\"1981-12\"`.\n",
            "example": "1981-12-15",
            "type": "string"
          },
          "release_date_precision": {
            "description": "The precision with which `release_date` value is known.\n",
            "enum": [
              "year",
              "month",
              "day"
            ],
            "example": "day",
            "type": "string"
          },
          "restrictions": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ChapterRestrictionObject"
              }
            ],
            "description": "Included in the response when a content restriction is applied.\n"
          },
          "resume_point": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ResumePointObject"
              }
            ],
            "description": "The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.\n"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "episode"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.\n",
            "example": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
            "type": "string"
          }
        },
        "required": [
          "audio_preview_url",
          "chapter_number",
          "description",
          "html_description",
          "duration_ms",
          "explicit",
          "external_urls",
          "href",
          "id",
          "images",
          "is_playable",
          "languages",
          "name",
          "release_date",
          "release_date_precision",
          "resume_point",
          "type",
          "uri"
        ],
        "type": "object"
      },
      "ChapterObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ChapterBase"
          },
          {
            "properties": {
              "audiobook": {
                "$ref": "#/components/schemas/SimplifiedAudiobookObject",
                "description": "The audiobook for which the chapter belongs.\n"
              }
            },
            "required": [
              "audiobook"
            ],
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "ChapterObject"
      },
      "ChapterRestrictionObject": {
        "properties": {
          "reason": {
            "description": "The reason for the restriction. Supported values:\n- `market` - The content item is not available in the given market.\n- `product` - The content item is not available for the user's subscription type.\n- `explicit` - The content item is explicit and the user's account is set to not play explicit content.\n- `payment_required` - Payment is required to play the content item.\n\nAdditional reasons may be added in the future.\n**Note**: If you use this field, make sure that your application safely handles unknown values.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "ChapterRestrictionObject"
      },
      "ContextObject": {
        "properties": {
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "External URLs for this context."
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the track.",
            "type": "string"
          },
          "type": {
            "description": "The object type, e.g. \"artist\", \"playlist\", \"album\", \"show\".\n",
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "ContextObject"
      },
      "CopyrightObject": {
        "properties": {
          "text": {
            "description": "The copyright text for this content.\n",
            "type": "string"
          },
          "type": {
            "description": "The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "CopyrightObject"
      },
      "CurrentlyPlayingContextObject": {
        "properties": {
          "actions": {
            "allOf": [
              {
                "$ref": "#/components/schemas/DisallowsObject"
              }
            ],
            "description": "Allows to update the user interface based on which playback actions are available within the current context.\n"
          },
          "context": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ContextObject"
              }
            ],
            "description": "A Context Object. Can be `null`."
          },
          "currently_playing_type": {
            "description": "The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.\n",
            "type": "string"
          },
          "device": {
            "allOf": [
              {
                "$ref": "#/components/schemas/DeviceObject"
              }
            ],
            "description": "The device that is currently active.\n"
          },
          "is_playing": {
            "description": "If something is currently playing, return `true`.",
            "type": "boolean"
          },
          "item": {
            "description": "The currently playing track or episode. Can be `null`.",
            "discriminator": {
              "propertyName": "type"
            },
            "oneOf": [
              {
                "$ref": "#/components/schemas/TrackObject"
              },
              {
                "$ref": "#/components/schemas/EpisodeObject"
              }
            ],
            "x-spotify-docs-type": "TrackObject | EpisodeObject"
          },
          "progress_ms": {
            "description": "Progress into the currently playing track or episode. Can be `null`.",
            "type": "integer"
          },
          "repeat_state": {
            "description": "off, track, context",
            "type": "string"
          },
          "shuffle_state": {
            "description": "If shuffle is on or off.",
            "type": "boolean"
          },
          "timestamp": {
            "description": "Unix Millisecond Timestamp when data was fetched.",
            "type": "integer"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "CurrentlyPlayingContextObject"
      },
      "CurrentlyPlayingObject": {
        "properties": {
          "context": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ContextObject"
              }
            ],
            "description": "A Context Object. Can be `null`."
          },
          "currently_playing_type": {
            "description": "The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.\n",
            "type": "string"
          },
          "is_playing": {
            "description": "If something is currently playing, return `true`.",
            "type": "boolean"
          },
          "item": {
            "description": "The currently playing track or episode. Can be `null`.",
            "discriminator": {
              "propertyName": "type"
            },
            "oneOf": [
              {
                "$ref": "#/components/schemas/TrackObject"
              },
              {
                "$ref": "#/components/schemas/EpisodeObject"
              }
            ],
            "x-spotify-docs-type": "TrackObject | EpisodeObject"
          },
          "progress_ms": {
            "description": "Progress into the currently playing track or episode. Can be `null`.",
            "type": "integer"
          },
          "timestamp": {
            "description": "Unix Millisecond Timestamp when data was fetched",
            "type": "integer"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "CurrentlyPlayingObject"
      },
      "CursorObject": {
        "properties": {
          "after": {
            "description": "The cursor to use as key to find the next page of items.",
            "type": "string"
          },
          "before": {
            "description": "The cursor to use as key to find the previous page of items.",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "CursorObject"
      },
      "CursorPagingObject": {
        "properties": {
          "cursors": {
            "allOf": [
              {
                "$ref": "#/components/schemas/CursorObject"
              }
            ],
            "description": "The cursors used to find the next set of items."
          },
          "href": {
            "description": "A link to the Web API endpoint returning the full result of the request.",
            "type": "string"
          },
          "limit": {
            "description": "The maximum number of items in the response (as set in the query or by default).",
            "type": "integer"
          },
          "next": {
            "description": "URL to the next page of items. ( `null` if none)",
            "type": "string"
          },
          "total": {
            "description": "The total number of items available to return.",
            "type": "integer"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "CursorPagingObject"
      },
      "CursorPagingPlayHistoryObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CursorPagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/PlayHistoryObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingTrackObject"
      },
      "CursorPagingSimplifiedArtistObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/CursorPagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/ArtistObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingArtistObject"
      },
      "DeviceObject": {
        "properties": {
          "id": {
            "description": "The device ID.",
            "nullable": true,
            "type": "string"
          },
          "is_active": {
            "description": "If this device is the currently active device.",
            "type": "boolean"
          },
          "is_private_session": {
            "description": "If this device is currently in a private session.",
            "type": "boolean"
          },
          "is_restricted": {
            "description": "Whether controlling this device is restricted. At present if this is \"true\" then no Web API commands will be accepted by this device.",
            "type": "boolean"
          },
          "name": {
            "description": "A human-readable name for the device. Some devices have a name that the user can configure (e.g. \\\"Loudest speaker\\\") and some devices have a generic name associated with the manufacturer or device model.",
            "example": "Kitchen speaker",
            "type": "string"
          },
          "type": {
            "description": "Device type, such as \"computer\", \"smartphone\" or \"speaker\".",
            "example": "computer",
            "type": "string"
          },
          "volume_percent": {
            "description": "The current volume in percent.",
            "example": 59,
            "maximum": 100,
            "minimum": 0,
            "nullable": true,
            "type": "integer"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "DeviceObject"
      },
      "DevicesObject": {
        "properties": {
          "devices": {
            "description": "A list of 0..n Device objects",
            "items": {
              "$ref": "#/components/schemas/DeviceObject"
            },
            "type": "array"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "DevicesObject"
      },
      "DisallowsObject": {
        "properties": {
          "interrupting_playback": {
            "description": "Interrupting playback. Optional field.",
            "type": "boolean"
          },
          "pausing": {
            "description": "Pausing. Optional field.",
            "type": "boolean"
          },
          "resuming": {
            "description": "Resuming. Optional field.",
            "type": "boolean"
          },
          "seeking": {
            "description": "Seeking playback location. Optional field.",
            "type": "boolean"
          },
          "skipping_next": {
            "description": "Skipping to the next context. Optional field.",
            "type": "boolean"
          },
          "skipping_prev": {
            "description": "Skipping to the previous context. Optional field.",
            "type": "boolean"
          },
          "toggling_repeat_context": {
            "description": "Toggling repeat context flag. Optional field.",
            "type": "boolean"
          },
          "toggling_repeat_track": {
            "description": "Toggling repeat track flag. Optional field.",
            "type": "boolean"
          },
          "toggling_shuffle": {
            "description": "Toggling shuffle flag. Optional field.",
            "type": "boolean"
          },
          "transferring_playback": {
            "description": "Transfering playback between devices. Optional field.",
            "type": "boolean"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "DisallowsObject"
      },
      "EpisodeBase": {
        "properties": {
          "audio_preview_url": {
            "description": "A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.\n",
            "example": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
            "type": "string",
            "x-spotify-policy-list": [
              {
                "$ref": "#/components/x-spotify-policy/StandalonePreview"
              }
            ]
          },
          "description": {
            "description": "A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.\n",
            "example": "A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.\n",
            "type": "string"
          },
          "duration_ms": {
            "description": "The episode length in milliseconds.\n",
            "example": 1686230,
            "type": "integer"
          },
          "explicit": {
            "description": "Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).\n",
            "type": "boolean"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "External URLs for this episode.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the episode.\n",
            "example": "https://api.spotify.com/v1/episodes/5Xt5DXGzch68nYYamXrNxZ",
            "type": "string"
          },
          "html_description": {
            "description": "A description of the episode. This field may contain HTML tags.\n",
            "example": "<p>A Spotify podcast sharing fresh insights on important topics of the moment—in a way only Spotify can. You’ll hear from experts in the music, podcast and tech industries as we discover and uncover stories about our work and the world around us.</p>\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.\n",
            "example": "5Xt5DXGzch68nYYamXrNxZ",
            "type": "string"
          },
          "images": {
            "description": "The cover art for the episode in various sizes, widest first.\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "is_externally_hosted": {
            "description": "True if the episode is hosted outside of Spotify's CDN.\n",
            "type": "boolean"
          },
          "is_playable": {
            "description": "True if the episode is playable in the given market. Otherwise false.\n",
            "type": "boolean"
          },
          "language": {
            "deprecated": true,
            "description": "The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.\n",
            "example": "en",
            "type": "string"
          },
          "languages": {
            "description": "A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.\n",
            "example": [
              "fr",
              "en"
            ],
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "name": {
            "description": "The name of the episode.\n",
            "example": "Starting Your Own Podcast: Tips, Tricks, and Advice From Anchor Creators\n",
            "type": "string"
          },
          "release_date": {
            "description": "The date the episode was first released, for example `\"1981-12-15\"`. Depending on the precision, it might be shown as `\"1981\"` or `\"1981-12\"`.\n",
            "example": "1981-12-15",
            "type": "string"
          },
          "release_date_precision": {
            "description": "The precision with which `release_date` value is known.\n",
            "enum": [
              "year",
              "month",
              "day"
            ],
            "example": "day",
            "type": "string"
          },
          "restrictions": {
            "allOf": [
              {
                "$ref": "#/components/schemas/EpisodeRestrictionObject"
              }
            ],
            "description": "Included in the response when a content restriction is applied.\n"
          },
          "resume_point": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ResumePointObject"
              }
            ],
            "description": "The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.\n"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "episode"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.\n",
            "example": "spotify:episode:0zLhl3WsOCQHbe1BPTiHgr",
            "type": "string"
          }
        },
        "required": [
          "audio_preview_url",
          "description",
          "html_description",
          "duration_ms",
          "explicit",
          "external_urls",
          "href",
          "id",
          "images",
          "is_externally_hosted",
          "is_playable",
          "languages",
          "name",
          "release_date",
          "release_date_precision",
          "resume_point",
          "type",
          "uri"
        ],
        "type": "object"
      },
      "EpisodeObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EpisodeBase"
          },
          {
            "properties": {
              "show": {
                "$ref": "#/components/schemas/SimplifiedShowObject",
                "description": "The show on which the episode belongs.\n"
              }
            },
            "required": [
              "show"
            ],
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "EpisodeObject"
      },
      "EpisodeRestrictionObject": {
        "properties": {
          "reason": {
            "description": "The reason for the restriction. Supported values:\n- `market` - The content item is not available in the given market.\n- `product` - The content item is not available for the user's subscription type.\n- `explicit` - The content item is explicit and the user's account is set to not play explicit content.\n\nAdditional reasons may be added in the future.\n**Note**: If you use this field, make sure that your application safely handles unknown values.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "EpisodeRestrictionObject"
      },
      "ErrorObject": {
        "properties": {
          "message": {
            "description": "A short description of the cause of the error.\n",
            "type": "string"
          },
          "status": {
            "description": "The HTTP status code (also returned in the response header; see [Response Status Codes](/documentation/web-api/concepts/api-calls#response-status-codes) for more information).\n",
            "maximum": 599,
            "minimum": 400,
            "type": "integer"
          }
        },
        "required": [
          "status",
          "message"
        ],
        "type": "object",
        "x-spotify-docs-type": "ErrorObject"
      },
      "ExplicitContentSettingsObject": {
        "properties": {
          "filter_enabled": {
            "description": "When `true`, indicates that explicit content should not be played.\n",
            "type": "boolean"
          },
          "filter_locked": {
            "description": "When `true`, indicates that the explicit content setting is locked and can't be changed by the user.\n",
            "type": "boolean"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "ExplicitContentSettingsObject"
      },
      "ExternalIdObject": {
        "properties": {
          "ean": {
            "description": "[International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)\n",
            "type": "string"
          },
          "isrc": {
            "description": "[International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)\n",
            "type": "string"
          },
          "upc": {
            "description": "[Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "ExternalIdObject"
      },
      "ExternalUrlObject": {
        "properties": {
          "spotify": {
            "description": "The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the object.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "ExternalUrlObject"
      },
      "FollowersObject": {
        "properties": {
          "href": {
            "description": "This will always be set to null, as the Web API does not support it at the moment.\n",
            "nullable": true,
            "type": "string"
          },
          "total": {
            "description": "The total number of followers.\n",
            "type": "integer"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "FollowersObject"
      },
      "ImageObject": {
        "properties": {
          "height": {
            "description": "The image height in pixels.\n",
            "example": 300,
            "nullable": true,
            "type": "integer"
          },
          "url": {
            "description": "The source URL of the image.\n",
            "example": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
            "type": "string"
          },
          "width": {
            "description": "The image width in pixels.\n",
            "example": 300,
            "nullable": true,
            "type": "integer"
          }
        },
        "required": [
          "url",
          "height",
          "width"
        ],
        "type": "object",
        "x-spotify-docs-type": "ImageObject"
      },
      "Key": {
        "description": "The key the track is in. Integers map to pitches using standard [Pitch Class notation](https://en.wikipedia.org/wiki/Pitch_class). E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1.\n",
        "example": 9,
        "maximum": 11,
        "minimum": -1,
        "type": "integer"
      },
      "LinkedTrackObject": {
        "properties": {
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known external URLs for this track.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the track.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
            "type": "string"
          },
          "type": {
            "description": "The object type: \"track\".\n",
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "LinkedTrackObject"
      },
      "Loudness": {
        "description": "The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db.\n",
        "example": -5.883,
        "format": "float",
        "type": "number",
        "x-spotify-docs-type": "Float"
      },
      "Mode": {
        "description": "Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0.\n",
        "example": 0,
        "type": "integer"
      },
      "NarratorObject": {
        "properties": {
          "name": {
            "description": "The name of the Narrator.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "NarratorObject"
      },
      "PagingArtistObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/ArtistObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingArtistObject"
      },
      "PagingFeaturedPlaylistObject": {
        "properties": {
          "message": {
            "type": "string"
          },
          "playlists": {
            "$ref": "#/components/schemas/PagingPlaylistObject"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "PagingFeaturedPlaylistObject"
      },
      "PagingObject": {
        "properties": {
          "href": {
            "description": "A link to the Web API endpoint returning the full result of the request\n",
            "example": "https://api.spotify.com/v1/me/shows?offset=0&limit=20\n",
            "type": "string"
          },
          "limit": {
            "description": "The maximum number of items in the response (as set in the query or by default).\n",
            "example": 20,
            "type": "integer"
          },
          "next": {
            "description": "URL to the next page of items. ( `null` if none)\n",
            "example": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
            "nullable": true,
            "type": "string"
          },
          "offset": {
            "description": "The offset of the items returned (as set in the query or by default)\n",
            "example": 0,
            "type": "integer"
          },
          "previous": {
            "description": "URL to the previous page of items. ( `null` if none)\n",
            "example": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
            "nullable": true,
            "type": "string"
          },
          "total": {
            "description": "The total number of items available to return.\n",
            "example": 4,
            "type": "integer"
          }
        },
        "required": [
          "href",
          "items",
          "limit",
          "next",
          "offset",
          "previous",
          "total"
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingObject"
      },
      "PagingPlaylistObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SimplifiedPlaylistObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingPlaylistObject"
      },
      "PagingPlaylistTrackObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/PlaylistTrackObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingPlaylistTrackObject"
      },
      "PagingSavedAlbumObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SavedAlbumObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingSavedAlbumObject"
      },
      "PagingSavedEpisodeObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SavedEpisodeObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingEpisodeObject"
      },
      "PagingSavedShowObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SavedShowObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingShowObject"
      },
      "PagingSavedTrackObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SavedTrackObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingTrackObject"
      },
      "PagingSimplifiedAlbumObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SimplifiedAlbumObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingAlbumObject"
      },
      "PagingSimplifiedArtistObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SimplifiedArtistObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingArtistObject"
      },
      "PagingSimplifiedAudiobookObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SimplifiedAudiobookObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingAudiobookObject"
      },
      "PagingSimplifiedChapterObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SimplifiedChapterObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingSimplifiedChapterObject"
      },
      "PagingSimplifiedEpisodeObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SimplifiedEpisodeObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingEpisodeObject"
      },
      "PagingSimplifiedShowObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SimplifiedShowObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingShowObject"
      },
      "PagingSimplifiedTrackObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/SimplifiedTrackObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingTrackObject"
      },
      "PagingTrackObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PagingObject"
          },
          {
            "properties": {
              "items": {
                "items": {
                  "$ref": "#/components/schemas/TrackObject"
                },
                "type": "array"
              }
            },
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "PagingTrackObject"
      },
      "PlayHistoryObject": {
        "properties": {
          "context": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ContextObject"
              }
            ],
            "description": "The context the track was played from."
          },
          "played_at": {
            "description": "The date and time the track was played.",
            "format": "date-time",
            "type": "string",
            "x-spotify-docs-type": "Timestamp"
          },
          "track": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TrackObject"
              }
            ],
            "description": "The track the user listened to."
          }
        },
        "type": "object",
        "x-spotify-docs-type": "PlayHistoryObject"
      },
      "PlayerErrorObject": {
        "properties": {
          "message": {
            "description": "A short description of the cause of the error.\n",
            "type": "string"
          },
          "reason": {
            "allOf": [
              {
                "$ref": "#/components/schemas/PlayerErrorReasons"
              }
            ]
          },
          "status": {
            "description": "The HTTP status code. Either `404 NOT FOUND` or `403 FORBIDDEN`.  Also returned in the response header.\n",
            "type": "integer"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "PlayerErrorObject"
      },
      "PlayerErrorReasons": {
        "description": "* `NO_PREV_TRACK` - The command requires a previous track, but there is none in the context.\n* `NO_NEXT_TRACK` - The command requires a next track, but there is none in the context.\n* `NO_SPECIFIC_TRACK` - The requested track does not exist.\n* `ALREADY_PAUSED` - The command requires playback to not be paused.\n* `NOT_PAUSED` - The command requires playback to be paused.\n* `NOT_PLAYING_LOCALLY` - The command requires playback on the local device.\n* `NOT_PLAYING_TRACK` - The command requires that a track is currently playing.\n* `NOT_PLAYING_CONTEXT` - The command requires that a context is currently playing.\n* `ENDLESS_CONTEXT` - The shuffle command cannot be applied on an endless context.\n* `CONTEXT_DISALLOW` - The command could not be performed on the context.\n* `ALREADY_PLAYING` - The track should not be restarted if the same track and context is already playing, and there is a resume point.\n* `RATE_LIMITED` - The user is rate limited due to too frequent track play, also known as cat-on-the-keyboard spamming.\n* `REMOTE_CONTROL_DISALLOW` - The context cannot be remote-controlled.\n* `DEVICE_NOT_CONTROLLABLE` - Not possible to remote control the device.\n* `VOLUME_CONTROL_DISALLOW` - Not possible to remote control the device's volume.\n* `NO_ACTIVE_DEVICE` - Requires an active device and the user has none.\n* `PREMIUM_REQUIRED` - The request is prohibited for non-premium users.\n* `UNKNOWN` - Certain actions are restricted because of unknown reasons.\n",
        "enum": [
          "NO_PREV_TRACK",
          "NO_NEXT_TRACK",
          "NO_SPECIFIC_TRACK",
          "ALREADY_PAUSED",
          "NOT_PAUSED",
          "NOT_PLAYING_LOCALLY",
          "NOT_PLAYING_TRACK",
          "NOT_PLAYING_CONTEXT",
          "ENDLESS_CONTEXT",
          "CONTEXT_DISALLOW",
          "ALREADY_PLAYING",
          "RATE_LIMITED",
          "REMOTE_CONTROL_DISALLOW",
          "DEVICE_NOT_CONTROLLABLE",
          "VOLUME_CONTROL_DISALLOW",
          "NO_ACTIVE_DEVICE",
          "PREMIUM_REQUIRED",
          "UNKNOWN"
        ],
        "type": "string"
      },
      "PlaylistObject": {
        "properties": {
          "collaborative": {
            "description": "`true` if the owner allows other users to modify the playlist.\n",
            "type": "boolean"
          },
          "description": {
            "description": "The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.\n",
            "nullable": true,
            "type": "string"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known external URLs for this playlist.\n"
          },
          "followers": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FollowersObject"
              }
            ],
            "description": "Information about the followers of the playlist."
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the playlist.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.\n",
            "type": "string"
          },
          "images": {
            "description": "Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "name": {
            "description": "The name of the playlist.\n",
            "type": "string"
          },
          "owner": {
            "allOf": [
              {
                "$ref": "#/components/schemas/PlaylistOwnerObject"
              }
            ],
            "description": "The user who owns the playlist\n"
          },
          "public": {
            "description": "The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n",
            "type": "boolean"
          },
          "snapshot_id": {
            "description": "The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version\n",
            "type": "string"
          },
          "tracks": {
            "allOf": [
              {
                "$ref": "#/components/schemas/PagingPlaylistTrackObject"
              }
            ],
            "description": "The tracks of the playlist.\n",
            "type": "object"
          },
          "type": {
            "description": "The object type: \"playlist\"\n",
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "PlaylistObject"
      },
      "PlaylistOwnerObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/PlaylistUserObject"
          },
          {
            "properties": {
              "display_name": {
                "description": "The name displayed on the user's profile. `null` if not available.\n",
                "nullable": true,
                "type": "string"
              }
            },
            "type": "object"
          }
        ]
      },
      "PlaylistTrackObject": {
        "properties": {
          "added_at": {
            "description": "The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._\n",
            "format": "date-time",
            "type": "string",
            "x-spotify-docs-type": "Timestamp"
          },
          "added_by": {
            "allOf": [
              {
                "$ref": "#/components/schemas/PlaylistUserObject"
              }
            ],
            "description": "The Spotify user who added the track or episode. _**Note**: some very old playlists may return `null` in this field._\n"
          },
          "is_local": {
            "description": "Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.\n",
            "type": "boolean"
          },
          "track": {
            "description": "Information about the track or episode.",
            "discriminator": {
              "propertyName": "type"
            },
            "oneOf": [
              {
                "$ref": "#/components/schemas/TrackObject"
              },
              {
                "$ref": "#/components/schemas/EpisodeObject"
              }
            ],
            "x-spotify-docs-type": "TrackObject | EpisodeObject"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "PlaylistTrackObject"
      },
      "PlaylistTracksRefObject": {
        "properties": {
          "href": {
            "description": "A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.\n",
            "type": "string"
          },
          "total": {
            "description": "Number of tracks in the playlist.\n",
            "type": "integer"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "PlaylistTracksRefObject"
      },
      "PlaylistUserObject": {
        "properties": {
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known public external URLs for this user.\n"
          },
          "followers": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FollowersObject"
              }
            ],
            "description": "Information about the followers of this user.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint for this user.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.\n",
            "type": "string"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "user"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "PlaylistUserObject"
      },
      "PrivateUserObject": {
        "properties": {
          "country": {
            "description": "The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._\n",
            "type": "string"
          },
          "display_name": {
            "description": "The name displayed on the user's profile. `null` if not available.\n",
            "type": "string"
          },
          "email": {
            "description": "The user's email address, as entered by the user when creating their account. _**Important!** This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._\n",
            "type": "string"
          },
          "explicit_content": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExplicitContentSettingsObject"
              }
            ],
            "description": "The user's explicit content settings. _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._\n"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known external URLs for this user."
          },
          "followers": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FollowersObject"
              }
            ],
            "description": "Information about the followers of the user."
          },
          "href": {
            "description": "A link to the Web API endpoint for this user.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the user.\n",
            "type": "string"
          },
          "images": {
            "description": "The user's profile image.",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "product": {
            "description": "The user's Spotify subscription level: \"premium\", \"free\", etc. (The subscription level \"open\" can be considered the same as \"free\".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._\n",
            "type": "string"
          },
          "type": {
            "description": "The object type: \"user\"\n",
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the user.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "PrivateUserObject"
      },
      "PublicUserObject": {
        "properties": {
          "display_name": {
            "description": "The name displayed on the user's profile. `null` if not available.\n",
            "nullable": true,
            "type": "string"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known public external URLs for this user.\n"
          },
          "followers": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FollowersObject"
              }
            ],
            "description": "Information about the followers of this user.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint for this user.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.\n",
            "type": "string"
          },
          "images": {
            "description": "The user's profile image.\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "user"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "PublicUserObject"
      },
      "QueueObject": {
        "properties": {
          "currently_playing": {
            "description": "The currently playing track or episode. Can be `null`.",
            "discriminator": {
              "propertyName": "type"
            },
            "oneOf": [
              {
                "$ref": "#/components/schemas/TrackObject"
              },
              {
                "$ref": "#/components/schemas/EpisodeObject"
              }
            ],
            "x-spotify-docs-type": "TrackObject | EpisodeObject"
          },
          "queue": {
            "description": "The tracks or episodes in the queue. Can be empty.",
            "items": {
              "discriminator": {
                "propertyName": "type"
              },
              "oneOf": [
                {
                  "$ref": "#/components/schemas/TrackObject"
                },
                {
                  "$ref": "#/components/schemas/EpisodeObject"
                }
              ],
              "x-spotify-docs-type": "TrackObject | EpisodeObject"
            },
            "type": "array"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "QueueObject"
      },
      "RecommendationSeedObject": {
        "properties": {
          "afterFilteringSize": {
            "description": "The number of tracks available after min\\_\\* and max\\_\\* filters have been applied.\n",
            "type": "integer"
          },
          "afterRelinkingSize": {
            "description": "The number of tracks available after relinking for regional availability.\n",
            "type": "integer"
          },
          "href": {
            "description": "A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`.\n",
            "type": "string"
          },
          "id": {
            "description": "The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.\n",
            "type": "string"
          },
          "initialPoolSize": {
            "description": "The number of recommended tracks available for this seed.\n",
            "type": "integer"
          },
          "type": {
            "description": "The entity type of this seed. One of `artist`, `track` or `genre`.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "RecommendationSeedObject"
      },
      "RecommendationsObject": {
        "properties": {
          "seeds": {
            "description": "An array of recommendation seed objects.\n",
            "items": {
              "$ref": "#/components/schemas/RecommendationSeedObject"
            },
            "type": "array"
          },
          "tracks": {
            "description": "An array of track object (simplified) ordered according to the parameters supplied.\n",
            "items": {
              "$ref": "#/components/schemas/TrackObject"
            },
            "type": "array"
          }
        },
        "required": [
          "seeds",
          "tracks"
        ],
        "type": "object",
        "x-spotify-docs-type": "RecommendationsObject"
      },
      "ResumePointObject": {
        "properties": {
          "fully_played": {
            "description": "Whether or not the episode has been fully played by the user.\n",
            "type": "boolean"
          },
          "resume_position_ms": {
            "description": "The user's most recent position in the episode in milliseconds.\n",
            "type": "integer"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "ResumePointObject"
      },
      "SavedAlbumObject": {
        "properties": {
          "added_at": {
            "description": "The date and time the album was saved\nTimestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.\nIf the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.\n",
            "format": "date-time",
            "type": "string",
            "x-spotify-docs-type": "Timestamp"
          },
          "album": {
            "allOf": [
              {
                "$ref": "#/components/schemas/AlbumObject"
              }
            ],
            "description": "Information about the album."
          }
        },
        "type": "object",
        "x-spotify-docs-type": "SavedAlbumObject"
      },
      "SavedEpisodeObject": {
        "properties": {
          "added_at": {
            "description": "The date and time the episode was saved.\nTimestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.\n",
            "format": "date-time",
            "type": "string",
            "x-spotify-docs-type": "Timestamp"
          },
          "episode": {
            "allOf": [
              {
                "$ref": "#/components/schemas/EpisodeObject"
              }
            ],
            "description": "Information about the episode."
          }
        },
        "type": "object",
        "x-spotify-docs-type": "SavedEpisodeObject"
      },
      "SavedShowObject": {
        "properties": {
          "added_at": {
            "description": "The date and time the show was saved.\nTimestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.\nIf the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.\n",
            "format": "date-time",
            "type": "string",
            "x-spotify-docs-type": "Timestamp"
          },
          "show": {
            "allOf": [
              {
                "$ref": "#/components/schemas/SimplifiedShowObject"
              }
            ],
            "description": "Information about the show."
          }
        },
        "type": "object",
        "x-spotify-docs-type": "SavedShowObject"
      },
      "SavedTrackObject": {
        "properties": {
          "added_at": {
            "description": "The date and time the track was saved.\nTimestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.\nIf the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.\n",
            "format": "date-time",
            "type": "string",
            "x-spotify-docs-type": "Timestamp"
          },
          "track": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TrackObject"
              }
            ],
            "description": "Information about the track."
          }
        },
        "type": "object",
        "x-spotify-docs-type": "SavedTrackObject"
      },
      "SectionObject": {
        "properties": {
          "confidence": {
            "description": "The confidence, from 0.0 to 1.0, of the reliability of the section's \"designation\".",
            "example": 1,
            "maximum": 1,
            "minimum": 0,
            "type": "number"
          },
          "duration": {
            "description": "The duration (in seconds) of the section.",
            "example": 6.97092,
            "type": "number"
          },
          "key": {
            "description": "The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1.",
            "example": 9,
            "type": "integer"
          },
          "key_confidence": {
            "description": "The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field.",
            "example": 0.297,
            "maximum": 1,
            "minimum": 0,
            "type": "number"
          },
          "loudness": {
            "description": "The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks.",
            "example": -14.938,
            "type": "number"
          },
          "mode": {
            "description": "Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for \"minor\", a 1 for \"major\", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches.",
            "enum": [
              -1,
              0,
              1
            ],
            "type": "number"
          },
          "mode_confidence": {
            "description": "The confidence, from 0.0 to 1.0, of the reliability of the `mode`.",
            "example": 0.471,
            "maximum": 1,
            "minimum": 0,
            "type": "number"
          },
          "start": {
            "description": "The starting point (in seconds) of the section.",
            "example": 0,
            "type": "number"
          },
          "tempo": {
            "description": "The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.",
            "example": 113.178,
            "type": "number"
          },
          "tempo_confidence": {
            "description": "The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field.",
            "example": 0.647,
            "maximum": 1,
            "minimum": 0,
            "type": "number"
          },
          "time_signature": {
            "$ref": "#/components/schemas/TimeSignature"
          },
          "time_signature_confidence": {
            "description": "The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field.",
            "example": 1,
            "maximum": 1,
            "minimum": 0,
            "type": "number"
          }
        },
        "type": "object"
      },
      "SegmentObject": {
        "properties": {
          "confidence": {
            "description": "The confidence, from 0.0 to 1.0, of the reliability of the segmentation. Segments of the song which are difficult to logically segment (e.g: noise) may correspond to low values in this field.\n",
            "example": 0.435,
            "maximum": 1,
            "minimum": 0,
            "type": "number"
          },
          "duration": {
            "description": "The duration (in seconds) of the segment.",
            "example": 0.19891,
            "type": "number"
          },
          "loudness_end": {
            "description": "The offset loudness of the segment in decibels (dB). This value should be equivalent to the loudness_start of the following segment.",
            "example": 0,
            "type": "number"
          },
          "loudness_max": {
            "description": "The peak loudness of the segment in decibels (dB). Combined with `loudness_start` and `loudness_max_time`, these components can be used to describe the \"attack\" of the segment.",
            "example": -14.25,
            "type": "number"
          },
          "loudness_max_time": {
            "description": "The segment-relative offset of the segment peak loudness in seconds. Combined with `loudness_start` and `loudness_max`, these components can be used to desctibe the \"attack\" of the segment.",
            "example": 0.07305,
            "type": "number"
          },
          "loudness_start": {
            "description": "The onset loudness of the segment in decibels (dB). Combined with `loudness_max` and `loudness_max_time`, these components can be used to describe the \"attack\" of the segment.",
            "example": -23.053,
            "type": "number"
          },
          "pitches": {
            "description": "Pitch content is given by a “chroma” vector, corresponding to the 12 pitch classes C, C#, D to B, with values ranging from 0 to 1 that describe the relative dominance of every pitch in the chromatic scale. For example a C Major chord would likely be represented by large values of C, E and G (i.e. classes 0, 4, and 7).\n\nVectors are normalized to 1 by their strongest dimension, therefore noisy sounds are likely represented by values that are all close to 1, while pure tones are described by one value at 1 (the pitch) and others near 0.\nAs can be seen below, the 12 vector indices are a combination of low-power spectrum values at their respective pitch frequencies.\n![pitch vector](https://developer.spotify.com/assets/audio/Pitch_vector.png)\n",
            "example": [
              0.212,
              0.141,
              0.294
            ],
            "items": {
              "maximum": 1,
              "minimum": 0,
              "type": "number"
            },
            "type": "array"
          },
          "start": {
            "description": "The starting point (in seconds) of the segment.",
            "example": 0.70154,
            "type": "number"
          },
          "timbre": {
            "description": "Timbre is the quality of a musical note or sound that distinguishes different types of musical instruments, or voices. It is a complex notion also referred to as sound color, texture, or tone quality, and is derived from the shape of a segment’s spectro-temporal surface, independently of pitch and loudness. The timbre feature is a vector that includes 12 unbounded values roughly centered around 0. Those values are high level abstractions of the spectral surface, ordered by degree of importance.\n\nFor completeness however, the first dimension represents the average loudness of the segment; second emphasizes brightness; third is more closely correlated to the flatness of a sound; fourth to sounds with a stronger attack; etc. See an image below representing the 12 basis functions (i.e. template segments).\n![timbre basis functions](https://developer.spotify.com/assets/audio/Timbre_basis_functions.png)\n\nThe actual timbre of the segment is best described as a linear combination of these 12 basis functions weighted by the coefficient values: timbre = c1 x b1 + c2 x b2 + ... + c12 x b12, where c1 to c12 represent the 12 coefficients and b1 to b12 the 12 basis functions as displayed below. Timbre vectors are best used in comparison with each other.\n",
            "example": [
              42.115,
              64.373,
              -0.233
            ],
            "items": {
              "type": "number"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "ShowBase": {
        "properties": {
          "available_markets": {
            "description": "A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "copyrights": {
            "description": "The copyright statements of the show.\n",
            "items": {
              "$ref": "#/components/schemas/CopyrightObject"
            },
            "type": "array"
          },
          "description": {
            "description": "A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.\n",
            "type": "string"
          },
          "explicit": {
            "description": "Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).\n",
            "type": "boolean"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "External URLs for this show.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the show.\n",
            "type": "string"
          },
          "html_description": {
            "description": "A description of the show. This field may contain HTML tags.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.\n",
            "type": "string"
          },
          "images": {
            "description": "The cover art for the show in various sizes, widest first.\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "is_externally_hosted": {
            "description": "True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.\n",
            "type": "boolean"
          },
          "languages": {
            "description": "A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.\n",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "media_type": {
            "description": "The media type of the show.\n",
            "type": "string"
          },
          "name": {
            "description": "The name of the episode.\n",
            "type": "string"
          },
          "publisher": {
            "description": "The publisher of the show.\n",
            "type": "string"
          },
          "total_episodes": {
            "description": "The total number of episodes in the show.\n",
            "type": "integer"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "show"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show.\n",
            "type": "string"
          }
        },
        "required": [
          "available_markets",
          "copyrights",
          "description",
          "explicit",
          "external_urls",
          "href",
          "html_description",
          "id",
          "images",
          "is_externally_hosted",
          "languages",
          "media_type",
          "name",
          "publisher",
          "total_episodes",
          "type",
          "uri"
        ],
        "type": "object"
      },
      "ShowObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ShowBase"
          },
          {
            "properties": {
              "episodes": {
                "allOf": [
                  {
                    "$ref": "#/components/schemas/PagingSimplifiedEpisodeObject"
                  }
                ],
                "description": "The episodes of the show.\n",
                "type": "object"
              }
            },
            "required": [
              "episodes"
            ],
            "type": "object"
          }
        ],
        "x-spotify-docs-type": "ShowObject"
      },
      "SimplifiedAlbumObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/AlbumBase"
          },
          {
            "properties": {
              "album_group": {
                "description": "The field is present when getting an artist's albums. Compare to album_type this field represents relationship between the artist and the album.\n",
                "enum": [
                  "album",
                  "single",
                  "compilation",
                  "appears_on"
                ],
                "example": "compilation",
                "type": "string"
              },
              "artists": {
                "description": "The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.\n",
                "items": {
                  "$ref": "#/components/schemas/SimplifiedArtistObject"
                },
                "type": "array"
              }
            },
            "required": [
              "artists"
            ],
            "type": "object"
          }
        ],
        "x-spotify-docs-type": "SimplifiedAlbumObject"
      },
      "SimplifiedArtistObject": {
        "properties": {
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known external URLs for this artist.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the artist.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.\n",
            "type": "string"
          },
          "name": {
            "description": "The name of the artist.\n",
            "type": "string"
          },
          "type": {
            "description": "The object type.\n",
            "enum": [
              "artist"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "SimplifiedArtistObject"
      },
      "SimplifiedAudiobookObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/AudiobookBase"
          },
          {
            "type": "object"
          }
        ],
        "x-spotify-docs-type": "SimplifiedAudiobookObject"
      },
      "SimplifiedChapterObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ChapterBase"
          },
          {
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "SimplifiedChapterObject"
      },
      "SimplifiedEpisodeObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/EpisodeBase"
          },
          {
            "type": "object"
          }
        ],
        "type": "object",
        "x-spotify-docs-type": "SimplifiedEpisodeObject"
      },
      "SimplifiedPlaylistObject": {
        "properties": {
          "collaborative": {
            "description": "`true` if the owner allows other users to modify the playlist.\n",
            "type": "boolean"
          },
          "description": {
            "description": "The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.\n",
            "type": "string"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known external URLs for this playlist.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the playlist.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.\n",
            "type": "string"
          },
          "images": {
            "description": "Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._\n",
            "items": {
              "$ref": "#/components/schemas/ImageObject"
            },
            "type": "array"
          },
          "name": {
            "description": "The name of the playlist.\n",
            "type": "string"
          },
          "owner": {
            "allOf": [
              {
                "$ref": "#/components/schemas/PlaylistOwnerObject"
              }
            ],
            "description": "The user who owns the playlist\n"
          },
          "public": {
            "description": "The playlist's public/private status: `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)\n",
            "type": "boolean"
          },
          "snapshot_id": {
            "description": "The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version\n",
            "type": "string"
          },
          "tracks": {
            "allOf": [
              {
                "$ref": "#/components/schemas/PlaylistTracksRefObject"
              }
            ],
            "description": "A collection containing a link ( `href` ) to the Web API endpoint where full details of the playlist's tracks can be retrieved, along with the `total` number of tracks in the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.\n"
          },
          "type": {
            "description": "The object type: \"playlist\"\n",
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "SimplifiedPlaylistObject"
      },
      "SimplifiedShowObject": {
        "allOf": [
          {
            "$ref": "#/components/schemas/ShowBase"
          },
          {
            "type": "object"
          }
        ],
        "x-spotify-docs-type": "SimplifiedShowObject"
      },
      "SimplifiedTrackObject": {
        "properties": {
          "artists": {
            "description": "The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.",
            "items": {
              "$ref": "#/components/schemas/SimplifiedArtistObject"
            },
            "type": "array"
          },
          "available_markets": {
            "description": "A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "disc_number": {
            "description": "The disc number (usually `1` unless the album consists of more than one disc).",
            "type": "integer"
          },
          "duration_ms": {
            "description": "The track length in milliseconds.",
            "type": "integer"
          },
          "explicit": {
            "description": "Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).",
            "type": "boolean"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "External URLs for this track.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the track.",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
            "type": "string"
          },
          "is_local": {
            "description": "Whether or not the track is from a local file.\n",
            "type": "boolean"
          },
          "is_playable": {
            "description": "Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.\n",
            "type": "boolean"
          },
          "linked_from": {
            "allOf": [
              {
                "$ref": "#/components/schemas/LinkedTrackObject"
              }
            ],
            "description": "Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track."
          },
          "name": {
            "description": "The name of the track.",
            "type": "string"
          },
          "preview_url": {
            "description": "A URL to a 30 second preview (MP3 format) of the track.\n",
            "type": "string",
            "x-spotify-policy-list": [
              {
                "$ref": "#/components/x-spotify-policy/StandalonePreview"
              }
            ]
          },
          "restrictions": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TrackRestrictionObject"
              }
            ],
            "description": "Included in the response when a content restriction is applied.\n"
          },
          "track_number": {
            "description": "The number of the track. If an album has several discs, the track number is the number on the specified disc.\n",
            "type": "integer"
          },
          "type": {
            "description": "The object type: \"track\".\n",
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "SimplifiedTrackObject"
      },
      "Tempo": {
        "description": "The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.\n",
        "example": 118.211,
        "format": "float",
        "type": "number",
        "x-spotify-docs-type": "Float"
      },
      "TimeIntervalObject": {
        "properties": {
          "confidence": {
            "description": "The confidence, from 0.0 to 1.0, of the reliability of the interval.",
            "example": 0.925,
            "maximum": 1,
            "minimum": 0,
            "type": "number"
          },
          "duration": {
            "description": "The duration (in seconds) of the time interval.",
            "example": 2.18749,
            "type": "number"
          },
          "start": {
            "description": "The starting point (in seconds) of the time interval.",
            "example": 0.49567,
            "type": "number"
          }
        },
        "type": "object"
      },
      "TimeSignature": {
        "description": "An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of \"3/4\", to \"7/4\".",
        "example": 4,
        "maximum": 7,
        "minimum": 3,
        "type": "integer"
      },
      "TrackObject": {
        "properties": {
          "album": {
            "allOf": [
              {
                "$ref": "#/components/schemas/SimplifiedAlbumObject"
              }
            ],
            "description": "The album on which the track appears. The album object includes a link in `href` to full information about the album.\n"
          },
          "artists": {
            "description": "The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.\n",
            "items": {
              "$ref": "#/components/schemas/ArtistObject"
            },
            "type": "array"
          },
          "available_markets": {
            "description": "A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.\n",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "disc_number": {
            "description": "The disc number (usually `1` unless the album consists of more than one disc).\n",
            "type": "integer"
          },
          "duration_ms": {
            "description": "The track length in milliseconds.\n",
            "type": "integer"
          },
          "explicit": {
            "description": "Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).\n",
            "type": "boolean"
          },
          "external_ids": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalIdObject"
              }
            ],
            "description": "Known external IDs for the track.\n"
          },
          "external_urls": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExternalUrlObject"
              }
            ],
            "description": "Known external URLs for this track.\n"
          },
          "href": {
            "description": "A link to the Web API endpoint providing full details of the track.\n",
            "type": "string"
          },
          "id": {
            "description": "The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
            "type": "string"
          },
          "is_local": {
            "description": "Whether or not the track is from a local file.\n",
            "type": "boolean"
          },
          "is_playable": {
            "description": "Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied. If `true`, the track is playable in the given market. Otherwise `false`.\n",
            "type": "boolean"
          },
          "linked_from": {
            "description": "Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied, and the requested track has been replaced with different track. The track in the `linked_from` object contains information about the originally requested track.\n",
            "type": "object"
          },
          "name": {
            "description": "The name of the track.\n",
            "type": "string"
          },
          "popularity": {
            "description": "The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _**Note**: the popularity value may lag actual popularity by a few days: the value is not updated in real time._\n",
            "type": "integer"
          },
          "preview_url": {
            "description": "A link to a 30 second preview (MP3 format) of the track. Can be `null`\n",
            "type": "string",
            "x-spotify-policy-list": [
              {
                "$ref": "#/components/x-spotify-policy/StandalonePreview"
              }
            ]
          },
          "restrictions": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TrackRestrictionObject"
              }
            ],
            "description": "Included in the response when a content restriction is applied.\n"
          },
          "track_number": {
            "description": "The number of the track. If an album has several discs, the track number is the number on the specified disc.\n",
            "type": "integer"
          },
          "type": {
            "description": "The object type: \"track\".\n",
            "enum": [
              "track"
            ],
            "type": "string"
          },
          "uri": {
            "description": "The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "TrackObject"
      },
      "TrackRestrictionObject": {
        "properties": {
          "reason": {
            "description": "The reason for the restriction. Supported values:\n- `market` - The content item is not available in the given market.\n- `product` - The content item is not available for the user's subscription type.\n- `explicit` - The content item is explicit and the user's account is set to not play explicit content.\n\nAdditional reasons may be added in the future.\n**Note**: If you use this field, make sure that your application safely handles unknown values.\n",
            "type": "string"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "TrackRestrictionObject"
      },
      "TuneableTrackObject": {
        "properties": {
          "acousticness": {
            "description": "A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.\n",
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "danceability": {
            "description": "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.\n",
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "duration_ms": {
            "description": "The duration of the track in milliseconds.\n",
            "type": "integer"
          },
          "energy": {
            "description": "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.\n",
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "instrumentalness": {
            "description": "Predicts whether a track contains no vocals. \"Ooh\" and \"aah\" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \"vocal\". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.\n",
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "key": {
            "$ref": "#/components/schemas/Key"
          },
          "liveness": {
            "description": "Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.\n",
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "loudness": {
            "$ref": "#/components/schemas/Loudness"
          },
          "mode": {
            "$ref": "#/components/schemas/Mode"
          },
          "popularity": {
            "description": "The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are. _**Note**: When applying track relinking via the `market` parameter, it is expected to find relinked tracks with popularities that do not match `min_*`, `max_*`and `target_*` popularities. These relinked tracks are accurate replacements for unplayable tracks with the expected popularity scores. Original, non-relinked tracks are available via the `linked_from` attribute of the [relinked track response](/documentation/web-api/concepts/track-relinking)._\n",
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "speechiness": {
            "description": "Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.\n",
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          },
          "tempo": {
            "$ref": "#/components/schemas/Tempo"
          },
          "time_signature": {
            "$ref": "#/components/schemas/TimeSignature"
          },
          "valence": {
            "description": "A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).\n",
            "format": "float",
            "type": "number",
            "x-spotify-docs-type": "Float"
          }
        },
        "type": "object",
        "x-spotify-docs-type": "TuneableTrackObject"
      }
    },
    "securitySchemes": {
      "oauth_2_0": {
        "description": "Spotify supports OAuth 2.0 for authenticating all API requests.",
        "flows": {
          "authorizationCode": {
            "authorizationUrl": "https://accounts.spotify.com/authorize",
            "scopes": {
              "app-remote-control": "Communicate with the Spotify app on your device.\n",
              "playlist-modify-private": "Manage your private playlists.\n",
              "playlist-modify-public": "Manage your public playlists.\n",
              "playlist-read-collaborative": "Access your collaborative playlists.\n",
              "playlist-read-private": "Access your private playlists.\n",
              "streaming": "Play content and control playback on your other devices.\n",
              "ugc-image-upload": "Upload images to Spotify on your behalf.\n",
              "user-follow-modify": "Manage your saved content.\n",
              "user-follow-read": "Access your followers and who you are following.\n",
              "user-library-modify": "Manage your saved content.\n",
              "user-library-read": "Access your saved content.\n",
              "user-modify-playback-state": "Control playback on your Spotify clients and Spotify Connect devices.\n",
              "user-read-currently-playing": "Read your currently playing content.\n",
              "user-read-email": "Get your real email address.\n",
              "user-read-playback-position": "Read your position in content you have played.\n",
              "user-read-playback-state": "Read your currently playing content and Spotify Connect devices information.\n",
              "user-read-private": "Access your subscription details.\n",
              "user-read-recently-played": "Access your recently played items.\n",
              "user-top-read": "Read your top artists and content.\n"
            },
            "tokenUrl": "https://accounts.spotify.com/api/token"
          }
        },
        "type": "oauth2"
      }
    },
    "x-spotify-policy": {
      "$ref": "../policies.yaml",
      "Attribution": {},
      "Broadcasting": {},
      "CommercialStreaming": {},
      "ContentAlteration": {},
      "Downloading": {},
      "MultipleIntegrations": {},
      "StandalonePreview": {},
      "Synchronization": {},
      "VisualAlteration": {},
      "metadataPolicyList": [
        {
          "$ref": "#/components/x-spotify-policy/Downloading"
        },
        {
          "$ref": "#/components/x-spotify-policy/VisualAlteration"
        },
        {
          "$ref": "#/components/x-spotify-policy/Attribution"
        }
      ],
      "playerPolicyList": [
        {
          "$ref": "#/components/x-spotify-policy/CommercialStreaming"
        },
        {
          "$ref": "#/components/x-spotify-policy/ContentAlteration"
        },
        {
          "$ref": "#/components/x-spotify-policy/Synchronization"
        },
        {
          "$ref": "#/components/x-spotify-policy/Broadcasting"
        }
      ]
    }
  }
} as const
            