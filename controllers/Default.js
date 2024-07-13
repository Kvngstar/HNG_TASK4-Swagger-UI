'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.blogsPOST = function blogsPOST (req, res, next, body) {
  Default.blogsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.invitationsAcceptPOST = function invitationsAcceptPOST (req, res, next, body) {
  Default.invitationsAcceptPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.invitationsPOST = function invitationsPOST (req, res, next, body) {
  Default.invitationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesPOST = function messagesPOST (req, res, next, body) {
  Default.messagesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.notificationsPOST = function notificationsPOST (req, res, next, body) {
  Default.notificationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organisationsOrganisationIdMembersPOST = function organisationsOrganisationIdMembersPOST (req, res, next, body, organisationId) {
  Default.organisationsOrganisationIdMembersPOST(body, organisationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.organisationsPOST = function organisationsPOST (req, res, next, body) {
  Default.organisationsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionsPOST = function transactionsPOST (req, res, next, body) {
  Default.transactionsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersLoginPOST = function usersLoginPOST (req, res, next, body) {
  Default.usersLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next, body) {
  Default.usersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPassword_resetPOST = function usersPassword_resetPOST (req, res, next, body) {
  Default.usersPassword_resetPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPassword_reset_requestPOST = function usersPassword_reset_requestPOST (req, res, next, body) {
  Default.usersPassword_reset_requestPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdMessagesGET = function usersUserIdMessagesGET (req, res, next, userId) {
  Default.usersUserIdMessagesGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdNotificationsGET = function usersUserIdNotificationsGET (req, res, next, userId) {
  Default.usersUserIdNotificationsGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdPATCH = function usersUserIdPATCH (req, res, next, body, userId) {
  Default.usersUserIdPATCH(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUserIdTransactionsGET = function usersUserIdTransactionsGET (req, res, next, userId) {
  Default.usersUserIdTransactionsGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersVerify_emailPOST = function usersVerify_emailPOST (req, res, next, body) {
  Default.usersVerify_emailPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
