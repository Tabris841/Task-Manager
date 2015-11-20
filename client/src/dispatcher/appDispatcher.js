/*
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file on the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file is the same directory.
 *
 * App Dispatcher
 *
 * A singleton that operates as the central hub for application updates
 */

var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();
