import { withTimeoutOption } from 'ipfs-core-utils/with-timeout-option'

/**
 * @param {Object} config
 * @param {import('libp2p/src/keychain')} config.keychain
 */
export function createRename ({ keychain }) {
  /**
   * @type {import('ipfs-core-types/src/key').API["rename"]}
   */
  const rename = async (oldName, newName) => {
    const key = await keychain.renameKey(oldName, newName)

    return {
      was: oldName,
      now: key.name,
      id: key.id,
      overwrite: false
    }
  }

  return withTimeoutOption(rename)
}
