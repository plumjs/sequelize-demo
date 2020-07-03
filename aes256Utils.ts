import * as crypto from 'crypto'

const CRYPTO_MODE: string = 'aes-256-cbc'

interface encryptResponse {
  secretIv: string
  secret: string
}

function getKeyWidthIvBuffer(key: string, iv: string) {
  return {
    keyBuf: Buffer.alloc(32, key),
    ivBuf: Buffer.alloc(16, iv, 'base64'),
  }
}

function encrypt(key: string, data: string): encryptResponse {
  const keyBuf = Buffer.alloc(32, key)
  const ivBuf = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(CRYPTO_MODE, keyBuf, ivBuf)
  let encrypted = cipher.update(Buffer.from(data))
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return {
    secretIv: ivBuf.toString('base64'),
    secret: encrypted.toString('base64'),
  }
}
function decrypt(key: string, iv: string, data: string): string {
  const { keyBuf, ivBuf } = getKeyWidthIvBuffer(key, iv)
  const decipher = crypto.createDecipheriv(CRYPTO_MODE, keyBuf, ivBuf)
  let decrypted = decipher.update(Buffer.from(data, 'base64'))
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}

export { encrypt, decrypt }
