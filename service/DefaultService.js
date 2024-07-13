'use strict';


/**
 * Create Blog
 *
 * body Blogs_body 
 * returns inline_response_200_11
 **/
exports.blogsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "id" : 1,
    "title" : "My First Blog",
    "authorId" : 1,
    "content" : "This is the content of my first blog.",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Accept an invitation
 *
 * body Invitations_accept_body 
 * returns inline_response_200_15
 **/
exports.invitationsAcceptPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "invite_id" : 1,
    "is_accepted" : true,
    "invitee_id" : 2
  },
  "message" : "Invitation accepted successfully",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send an invitation to a user
 *
 * body Invitations_body 
 * returns inline_response_201
 **/
exports.invitationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "invite_id" : 1,
    "is_accepted" : false,
    "invitee_id" : 2
  },
  "message" : "Invitation sent successfully",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send Message
 *
 * body Messages_body 
 * returns inline_response_200_10
 **/
exports.messagesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "senderId" : 1,
    "receiverId" : 2,
    "id" : 1,
    "content" : "Hello, how are you?",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Notification
 *
 * body Notifications_body 
 * returns inline_response_200_9
 **/
exports.notificationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "id" : 1,
    "type" : "email",
    "message" : "Your account has been created.",
    "userId" : 1,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add Member to Organisation
 *
 * body OrganisationId_members_body 
 * organisationId Integer The ID of the organisation
 * returns inline_response_200_7
 **/
exports.organisationsOrganisationIdMembersPOST = function(body,organisationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "organisationId" : 1,
    "id" : 1,
    "userId" : 2,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Organisation
 *
 * body Organisations_body 
 * returns inline_response_200_6
 **/
exports.organisationsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "name" : "Kingsley's Organisation",
    "description" : "An organisation for Kingsley",
    "id" : 1,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Transaction
 *
 * body Transactions_body 
 * returns inline_response_200_8
 **/
exports.transactionsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "amount" : 100,
    "description" : "Payment for services",
    "id" : 1,
    "userId" : 1,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login a user
 *
 * body Users_login_body 
 * returns inline_response_200_1
 **/
exports.usersLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "user" : {
      "country" : "USA",
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "gender" : "male",
      "phone" : "1234567890",
      "name" : "John Doe",
      "id" : 1,
      "email" : "johndoe@example.com",
      "username" : "johndoe",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00"
    },
    "token" : "token"
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create User
 *
 * body Users_body 
 * returns inline_response_200
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "firstName" : "Kingsley",
    "lastName" : "okoronkwo",
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "id" : 1,
    "email" : "Kingsley.okoronkwo@example.com",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reset Password
 *
 * body Users_passwordreset_body 
 * returns inline_response_200_5
 **/
exports.usersPassword_resetPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Password reset successfully",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Request Password Reset
 *
 * body Users_passwordresetrequest_body 
 * returns inline_response_200_4
 **/
exports.usersPassword_reset_requestPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Password reset email sent successfully",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get User Messages
 *
 * userId Integer The ID of the user
 * returns inline_response_200_14
 **/
exports.usersUserIdMessagesGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "senderId" : 1,
    "receiverId" : 2,
    "id" : 1,
    "content" : "Hello, how are you?",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "senderId" : 1,
    "receiverId" : 2,
    "id" : 1,
    "content" : "Hello, how are you?",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get User Notifications
 *
 * userId Integer The ID of the user
 * returns inline_response_200_13
 **/
exports.usersUserIdNotificationsGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "id" : 1,
    "type" : "email",
    "message" : "Your account has been created.",
    "userId" : 2,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "id" : 1,
    "type" : "email",
    "message" : "Your account has been created.",
    "userId" : 2,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Change User Details
 *
 * body Users_userId_body 
 * userId Integer The ID of the user
 * returns inline_response_200_2
 **/
exports.usersUserIdPATCH = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "firstName" : "Kingsley",
    "lastName" : "okoronkwo",
    "id" : 1,
    "email" : "Kingsley.okoronkwo@example.com",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  },
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get User Transactions
 *
 * userId Integer The ID of the user
 * returns inline_response_200_12
 **/
exports.usersUserIdTransactionsGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "amount" : 100,
    "description" : "Payment for services",
    "id" : 1,
    "userId" : 1,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "amount" : 100,
    "description" : "Payment for services",
    "id" : 1,
    "userId" : 1,
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Email Verification
 *
 * body Users_verifyemail_body 
 * returns inline_response_200_3
 **/
exports.usersVerify_emailPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Email verified successfully",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

