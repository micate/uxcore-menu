/**
 * only require other specs here
 */

const req = require.context('.', false, /\.spec\.jsx?$/);
req.keys().forEach(req);
