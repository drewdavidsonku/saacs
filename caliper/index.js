'use strict'
// check ts

const saacs = require("@thesis/saacs");
const { default: createJITI } = require("jiti");

// const jiti = require("jiti")(__filename);
// const hlf = await import("hlftools");

saacs

const item =new hlf.pb.common.generic.AuthorizeOperationRequest({})

item.toJsonString({typeRegistry: hlf.utils.GlobalRegistry})



hlf.pb.common.generic.BootstrapRequest


console.log(hlf.utils.GlobalRegistry)
