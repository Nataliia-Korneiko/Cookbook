/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';

const rrd = require('react-router-dom');

rrd.HashRouter = ({ children }) => <div>{children}</div>;
module.exports = rrd;

test.skip('skip', () => {});
