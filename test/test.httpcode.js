/* eslint-disable import/no-extraneous-dependencies */

import _ from 'lodash';
import {assert} from 'chai';

import {httpcode} from '../src/index';

describe('Test httpcode', () => {
    it('Test httpcode', () => {
        Object.keys(httpcode).forEach((key) => {
            const code = new httpcode[key]('Message');
            assert.ok(_.isError(code));
            assert.equal(code.HttpCode, +key.match(/^Http([\d]{3})/)[1]);
            assert.typeOf(code.HttpMessage, 'string');

            if (code.location) {
                assert.equal(code.location, 'Message');
            } else {
                assert.equal(code.message, 'Message');
            }
        });
    });
});
