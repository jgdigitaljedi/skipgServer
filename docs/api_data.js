define({ "api": [
  {
    "type": "delete",
    "url": "/api/admin/deleteuser",
    "title": "Delete a user",
    "name": "DeleteUser",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>userId</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Deletes a user from DB</p>",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{id: 123456789}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n  {\n    _id: \"23405986723045897\",\n    name: \"Text McText\",\n    email: \"test@test.com\",\n    admin: false,\n    salt: \"h9834hf87w0h45u\",\n    hash: \"asdf982345n89asdf8h39845n98sdfh\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Something went wrong with deleting the user.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/admin.routes.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/api/admin/listusers",
    "title": "Get list of users",
    "name": "ListUsers",
    "group": "Admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Returns list of users from DB</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n  {\n    _id: \"23405986723045897\",\n    name: \"Text McText\",\n    email: \"test@test.com\",\n    admin: false\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Something went wrong with fetching list of users.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/admin.routes.js",
    "groupTitle": "Admin"
  },
  {
    "type": "patch",
    "url": "/api/photos/comment/:id",
    "title": "Add comment to photo",
    "name": "AddCommentToPhoto",
    "group": "Photos",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{comment: \"This is a comment.\"}",
        "type": "json"
      }
    ],
    "description": "<p>Gets photos uploaded by a user using their name</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  tags: [],\n  comments: [{name: \"Tester\", content: \"This is a comment.\"}],\n  _id: \"9823745982374598237458\",\n  uploadedBy: {\n    email: \"test@test.com\",\n    name: \"Tester\"\n  },\n  uploadDate: \"07/11/2018 11:30 am\",\n  __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Problem with saving comment.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photos.routes.js",
    "groupTitle": "Photos"
  },
  {
    "type": "delete",
    "url": "/api/photos",
    "title": "Delete photo",
    "name": "DeletePhoto",
    "group": "Photos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of photo to delete</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Deletes photo file, thumb, and DB entry</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  tags: [],\n  comments: [],\n  _id: \"9823745982374598237458\",\n  uploadedBy: {\n    email: \"test@test.com\",\n    name: \"Tester\"\n  },\n  uploadDate: \"07/11/2018 11:30 am\",\n  __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Problem deleting photo.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photos.routes.js",
    "groupTitle": "Photos"
  },
  {
    "type": "get",
    "url": "/api/photos/info/:id",
    "title": "Get info about photo",
    "name": "GetPhotoInfo",
    "group": "Photos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>photoId</p>"
          }
        ]
      }
    },
    "description": "<p>Gets info about photo from id</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  tags: [],\n  comments: [],\n  _id: \"9823745982374598237458\",\n  uploadedBy: {\n    email: \"test@test.com\",\n    name: \"Tester\"\n  },\n  uploadDate: \"07/11/2018 11:30 am\",\n  __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Error fetching photo info!'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photos.routes.js",
    "groupTitle": "Photos"
  },
  {
    "type": "post",
    "url": "/api/photos/tag",
    "title": "Get photos by tag",
    "name": "GetPhotosByTag",
    "group": "Photos",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{tag: \"pool\"}",
        "type": "json"
      }
    ],
    "description": "<p>Gets photos by tag</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n  {\n    tags: ['pool'],\n    comments: [],\n    _id: \"9823745982374598237458\",\n    uploadedBy: {\n      email: \"test@test.com\",\n      name: \"Tester\"\n    },\n    uploadDate: \"07/11/2018 11:30 am\",\n    __v: 0\n  }\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Problem parsing photos data.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photos.routes.js",
    "groupTitle": "Photos"
  },
  {
    "type": "post",
    "url": "/api/photos/uploader/id",
    "title": "Get photos by uploader ID",
    "name": "GetPhotosByUploaderId",
    "group": "Photos",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{id: 9823745982374598237458}",
        "type": "json"
      }
    ],
    "description": "<p>Gets photos uploaded by a user using their ID</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n  {\n    tags: [],\n    comments: [],\n    _id: \"9823745982374598237458\",\n    uploadedBy: {\n      email: \"test@test.com\",\n      name: \"Tester\"\n    },\n    uploadDate: \"07/11/2018 11:30 am\",\n    __v: 0\n  }\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Problem parsing photos by uploader id.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photos.routes.js",
    "groupTitle": "Photos"
  },
  {
    "type": "patch",
    "url": "/api/photos/tag/:id",
    "title": "Change tags for photo",
    "name": "GetPhotosByUploaderId",
    "group": "Photos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of photo to edit tags for</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example request body:",
        "content": "{tags: [\"pool\", \"Red Sox\"]}",
        "type": "json"
      }
    ],
    "description": "<p>Sets tags array for a photo</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  tags: [\"pool\", \"Red Sox\"],\n  comments: [],\n  _id: \"9823745982374598237458\",\n  uploadedBy: {\n    email: \"test@test.com\",\n    name: \"Tester\"\n  },\n  uploadDate: \"07/11/2018 11:30 am\",\n  __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Problem fetching photo from DB to edit tags.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photos.routes.js",
    "groupTitle": "Photos"
  },
  {
    "type": "post",
    "url": "/api/photos/uploader/name",
    "title": "Get photos by uploader name",
    "name": "GetPhotosByUploaderName",
    "group": "Photos",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{name: \"Tester\"}",
        "type": "json"
      }
    ],
    "description": "<p>Gets photos uploaded by a user using their name</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n  {\n    tags: [],\n    comments: [],\n    _id: \"9823745982374598237458\",\n    uploadedBy: {\n      email: \"test@test.com\",\n      name: \"Tester\"\n    },\n    uploadDate: \"07/11/2018 11:30 am\",\n    __v: 0\n  }\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Problem parsing photos by uploader name.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photos.routes.js",
    "groupTitle": "Photos"
  },
  {
    "type": "get",
    "url": "/api/photospublic/:id",
    "title": "Download photo file",
    "name": "DownloadPhoto",
    "group": "PhotosPublic",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{id: 893465708237465}",
        "type": "json"
      }
    ],
    "description": "<p>Downloads a photo</p>",
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Problem sending file.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photosPublic.routes.js",
    "groupTitle": "PhotosPublic"
  },
  {
    "type": "get",
    "url": "/api/photospublic",
    "title": "Get array of photos from DB",
    "name": "GetPhotos",
    "group": "PhotosPublic",
    "description": "<p>Gets list of photos from DB and returns as array of objects</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n  {\n    tags: [],\n    comments: [],\n    _id: \"9823745982374598237458\",\n    uploadedBy: {\n      email: \"test@test.com\",\n      name: \"Tester\"\n    },\n    uploadDate: \"07/11/2018 11:30 am\",\n    __v: 0\n  }\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Error fetching photos list!'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photosPublic.routes.js",
    "groupTitle": "PhotosPublic"
  },
  {
    "type": "post",
    "url": "/api/photos",
    "title": "Upload a photo",
    "name": "UploadPhoto",
    "group": "Photos",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{photo: <actual multipart-form data with photo file>}",
        "type": "json"
      }
    ],
    "description": "<p>Uploads a photo, strips exif metadata, creates 300px wide thumb, and save info to DB</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  tags: [],\n  comments: [],\n  _id: \"9823745982374598237458\",\n  uploadedBy: {\n    email: \"test@test.com\",\n    name: \"Tester\"\n  },\n  uploadDate: \"07/11/2018 11:30 am\",\n  __v: 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: An error occurred with the photo upload process.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/photos.routes.js",
    "groupTitle": "Photos"
  },
  {
    "type": "get",
    "url": "/api/profile",
    "title": "Get user profile",
    "name": "GetProfile",
    "group": "Profile",
    "description": "<p>Gets user profile information from DB; Uses user ID from JWT</p>",
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n  {\n    name: \"Text McText\",\n    email: \"test@test.com\",\n    admin: false\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Error fetching user profile.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/profile.routes.js",
    "groupTitle": "Profile"
  },
  {
    "type": "patch",
    "url": "/api/profile",
    "title": "Update user profile",
    "name": "UpdateProfile",
    "group": "Profile",
    "description": "<p>Updates user name or email in DB; Uses user ID from JWT</p>",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{name: \"Tester McTest\"}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "[\n  {\n    name: \"Text McText\",\n    email: \"test@test.com\",\n    admin: false\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Error updating user data.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/profile.routes.js",
    "groupTitle": "Profile"
  },
  {
    "type": "post",
    "url": "/api/users/devuser",
    "title": "Test password and token creation",
    "group": "Users",
    "name": "DevUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>encrpted user password</p>"
          }
        ]
      }
    },
    "description": "<p>For dev purposes ONLY: Returns salt and hash for creds given.</p>",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{name: \"Test McTest\", email: \"test@test.com\", password: \"5g6a65867er5654f\"}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  token: \"n9iuas0dfg8uq348tuhas0d8f7ha38475hb0a8s7dfq8374th8a\",\n  user: {\n    _id: \"8723459872354\",\n    name: \"Text McText\",\n    email: \"test@test.com\",\n    admin: false,\n    salt: \"98h2345usbgdf987b345f\",\n    hash: \"nsdfg98hj3456indfg98ha23i45no09g8yuha[092a345asdf87uh83475h\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/users.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "User login route",
    "group": "Users",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>encrpted user password</p>"
          }
        ]
      }
    },
    "description": "<p>Run user login and returns JWT if successful</p>",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{email: \"test@test.com\", password: \"5g6a65867er5654f\"}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  token: \"n9iuas0dfg8uq348tuhas0d8f7ha38475hb0a8s7dfq8374th8a\",\n  admin: false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Problem logging in.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/users.routes.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Register new user",
    "name": "RegisterUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>encrpted user password</p>"
          }
        ]
      }
    },
    "description": "<p>Registers a new user</p>",
    "examples": [
      {
        "title": "Example request body:",
        "content": "{name: \"Test McTest\", email: \"test@test.com\", password: \"5g6a65867er5654f\"}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success response:",
          "content": "{\n  token: \"n9iuas0dfg8uq348tuhas0d8f7ha38475hb0a8s7dfq8374th8a\",\n  admin: false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error response:",
          "content": "{error: <system error message>, message: 'ERROR: Problem saving new user to DB.'}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/routes/users.routes.js",
    "groupTitle": "Users"
  }
] });
