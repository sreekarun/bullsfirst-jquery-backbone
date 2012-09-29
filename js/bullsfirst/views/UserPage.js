﻿/**
 * Copyright 2012 Archfirst
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * bullsfirst/views/UserPage
 *
 * @author Naresh Bhatia
 */
define(['bullsfirst/framework/MessageBus',
        'bullsfirst/framework/Page'],
       function(MessageBus, Page) {

    return Page.extend({
        el: '#user-page',

        events: {
            'click #sign-out': 'logout',
            'click #trade-button': 'trade',
            'click #transfer-button': 'transfer'
        },

        initialize: function() {
        },

        logout: function() {
            MessageBus.trigger('UserLoggedOutEvent');
            return false;
        },

        trade: function() {
            alert('Trade');
            return false;
        },

        transfer: function() {
            alert('Transfer');
            return false;
        }
    });
});