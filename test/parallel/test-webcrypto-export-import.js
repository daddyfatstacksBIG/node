'use strict';

const common = require('../common');

if (!common.hasCrypto)
  common.skip('missing crypto');

if (common.hasOpenSSL3)
  common.skip('temporarily skipping for OpenSSL 3.0-alpha15');

const assert = require('assert');
const { subtle, getRandomValues } = require('crypto').webcrypto;

{
  async function test() {
    const keyData = getRandomValues(new Uint8Array(32));
    await Promise.all([1, null, undefined, {}, []].map((format) =>
      assert.rejects(
        subtle.importKey(format, keyData, {}, false, ['wrapKey']), {
          code: 'ERR_INVALID_ARG_TYPE'
        })
    ));
    await assert.rejects(
      subtle.importKey('not valid', keyData, {}, false, ['wrapKey']), {
        code: 'ERR_INVALID_ARG_VALUE'
      });
    await Promise.all([1, null, undefined, {}, []].map((keyData) =>
      assert.rejects(
        subtle.importKey('raw', keyData, {}, false, ['deriveBits']), {
          code: 'ERR_INVALID_ARG_TYPE'
        })
    ));
    await assert.rejects(
      subtle.importKey('raw', keyData, {
        name: 'HMAC'
      }, false, ['sign', 'verify']), {
        code: 'ERR_MISSING_OPTION'
      });
    await assert.rejects(
      subtle.importKey('raw', keyData, {
        name: 'HMAC',
        hash: 'SHA-256'
      }, false, ['deriveBits']), {
        name: 'SyntaxError',
        message: 'Unsupported key usage for an HMAC key'
      });
    await assert.rejects(
      subtle.importKey('node.keyObject', '', {
        name: 'HMAC',
        hash: 'SHA-256'
      }, false, ['sign', 'verify']), {
        code: 'ERR_INVALID_ARG_TYPE'
      });
    await assert.rejects(
      subtle.importKey('raw', keyData, {
        name: 'HMAC',
        hash: 'SHA-256',
        length: 0
      }, false, ['sign', 'verify']), {
        name: 'DataError',
        message: 'Zero-length key is not supported'
      });
    await assert.rejects(
      subtle.importKey('raw', keyData, {
        name: 'HMAC',
        hash: 'SHA-256',
        length: 1
      }, false, ['sign', 'verify']), {
        name: 'DataError',
        message: 'Invalid key length'
      });
    await assert.rejects(
      subtle.importKey('jwk', null, {
        name: 'HMAC',
        hash: 'SHA-256',
      }, false, ['sign', 'verify']), {
        name: 'DataError',
        message: 'Invalid JWK keyData'
      });
  }

  test().then(common.mustCall());
}

// Import/Export HMAC Secret Key
{
  async function test() {
    const keyData = getRandomValues(new Uint8Array(32));
    const key = await subtle.importKey(
      'raw',
      keyData, {
        name: 'HMAC',
        hash: 'SHA-256'
      }, true, ['sign', 'verify']);

    const raw = await subtle.exportKey('raw', key);

    assert.deepStrictEqual(
      Buffer.from(keyData).toString('hex'),
      Buffer.from(raw).toString('hex'));

    const jwk = await subtle.exportKey('jwk', key);
    assert.deepStrictEqual(jwk.key_ops, ['sign', 'verify']);
    assert(jwk.ext);
    assert.strictEqual(jwk.kty, 'oct');

    assert.deepStrictEqual(
      Buffer.from(jwk.k, 'base64').toString('hex'),
      Buffer.from(raw).toString('hex'));
  }

  test().then(common.mustCall());
}

// Import/Export AES Secret Key
{
  async function test() {
    const keyData = getRandomValues(new Uint8Array(32));
    const key = await subtle.importKey(
      'raw',
      keyData, {
        name: 'AES-CTR',
        length: 256,
      }, true, ['encrypt', 'decrypt']);

    const raw = await subtle.exportKey('raw', key);

    assert.deepStrictEqual(
      Buffer.from(keyData).toString('hex'),
      Buffer.from(raw).toString('hex'));

    const jwk = await subtle.exportKey('jwk', key);
    assert.deepStrictEqual(jwk.key_ops, ['encrypt', 'decrypt']);
    assert(jwk.ext);
    assert.strictEqual(jwk.kty, 'oct');

    assert.deepStrictEqual(
      Buffer.from(jwk.k, 'base64').toString('hex'),
      Buffer.from(raw).toString('hex'));
  }

  test().then(common.mustCall());
}

// Import/Export RSA Key Pairs
{
  async function test() {
    const { publicKey, privateKey } = await subtle.generateKey({
      name: 'RSA-PSS',
      modulusLength: 1024,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-384'
    }, true, ['sign', 'verify']);

    const [
      spki,
      pkcs8,
      publicJwk,
      privateJwk,
    ] = await Promise.all([
      subtle.exportKey('spki', publicKey),
      subtle.exportKey('pkcs8', privateKey),
      subtle.exportKey('jwk', publicKey),
      subtle.exportKey('jwk', privateKey),
    ]);

    assert(spki);
    assert(pkcs8);
    assert(publicJwk);
    assert(privateJwk);

    const [
      importedSpkiPublicKey,
      importedPkcs8PrivateKey,
      importedJwkPublicKey,
      importedJwkPrivateKey,
    ] = await Promise.all([
      subtle.importKey('spki', spki, {
        name: 'RSA-PSS',
        hash: 'SHA-384',
      }, true, ['verify']),
      subtle.importKey('pkcs8', pkcs8, {
        name: 'RSA-PSS',
        hash: 'SHA-384',
      }, true, ['sign']),
      subtle.importKey('jwk', publicJwk, {
        name: 'RSA-PSS',
        hash: 'SHA-384',
      }, true, ['verify']),
      subtle.importKey('jwk', privateJwk, {
        name: 'RSA-PSS',
        hash: 'SHA-384',
      }, true, ['sign']),
    ]);

    assert(importedSpkiPublicKey);
    assert(importedPkcs8PrivateKey);
    assert(importedJwkPublicKey);
    assert(importedJwkPrivateKey);
  }

  test().then(common.mustCall());
}

// Import/Export EC Key Pairs
{
  async function test() {
    const { publicKey, privateKey } = await subtle.generateKey({
      name: 'ECDSA',
      namedCurve: 'P-384'
    }, true, ['sign', 'verify']);

    const [
      spki,
      pkcs8,
      publicJwk,
      privateJwk,
    ] = await Promise.all([
      subtle.exportKey('spki', publicKey),
      subtle.exportKey('pkcs8', privateKey),
      subtle.exportKey('jwk', publicKey),
      subtle.exportKey('jwk', privateKey),
    ]);

    assert(spki);
    assert(pkcs8);
    assert(publicJwk);
    assert(privateJwk);

    const [
      importedSpkiPublicKey,
      importedPkcs8PrivateKey,
      importedJwkPublicKey,
      importedJwkPrivateKey,
    ] = await Promise.all([
      subtle.importKey('spki', spki, {
        name: 'ECDSA',
        namedCurve: 'P-384'
      }, true, ['verify']),
      subtle.importKey('pkcs8', pkcs8, {
        name: 'ECDSA',
        namedCurve: 'P-384'
      }, true, ['sign']),
      subtle.importKey('jwk', publicJwk, {
        name: 'ECDSA',
        namedCurve: 'P-384'
      }, true, ['verify']),
      subtle.importKey('jwk', privateJwk, {
        name: 'ECDSA',
        namedCurve: 'P-384'
      }, true, ['sign']),
    ]);

    assert(importedSpkiPublicKey);
    assert(importedPkcs8PrivateKey);
    assert(importedJwkPublicKey);
    assert(importedJwkPrivateKey);
  }

  test().then(common.mustCall());
}
