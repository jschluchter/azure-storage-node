// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
}

exports.scopes = [[],
[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a79931eb-0001-0013-7d1c-83a3e6000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a79931eb-0001-0013-7d1c-83a3e6000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'eceb3f22-0001-002c-6f1c-83143a000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'eceb3f22-0001-002c-6f1c-83143a000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1f5c4ea6-0001-0026-281c-836d02000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1f5c4ea6-0001-0026-281c-836d02000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f04bbb66-0001-0018-1b1c-83db23000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f04bbb66-0001-0018-1b1c-83db23000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b0da21cb-0001-0004-451c-836385000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b0da21cb-0001-0004-451c-836385000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'babc06c0-0001-001d-541c-834fed000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'babc06c0-0001-001d-541c-834fed000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fb339699-0001-0039-5d1c-83b612000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fb339699-0001-0039-5d1c-83b612000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '065f2a8d-0001-002c-551c-83748b000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '065f2a8d-0001-002c-551c-83748b000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e41d5537-0001-003f-2a1c-8321db000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e41d5537-0001-003f-2a1c-8321db000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '164c5860-0001-0030-5d1c-83cc2d000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '164c5860-0001-0030-5d1c-83cc2d000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '57348da8-0001-0011-661c-83c1ad000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '57348da8-0001-0011-661c-83c1ad000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'eb0bd2c5-0001-0009-6e1c-83ec38000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat-secondary.blob.core.windows.net:443')
  .head('/secondarytestscontainer?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'eb0bd2c5-0001-0009-6e1c-83ec38000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 21 Mar 2016 02:48:58 GMT',
  connection: 'close' });
 return result; }]];