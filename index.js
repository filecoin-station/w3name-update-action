import core from '@actions/core'
import * as Name from 'w3name'

const main = async () => {
  const value = core.getInput('value', { required: true })
  const privateKey = core.getInput('private-key', { required: true })
  const revisionEncoded = core.getInput('revision', { required: true })

  const name = await Name.from(Buffer.from(privateKey, 'hex'))
  const revision = Name.Revision.decode(Buffer.from(revisionEncoded, 'hex'))

  const nextRevision = await Name.increment(revision, value)
  await Name.publish(nextRevision, name.key)
}

main().catch(err => core.setFailed(err.message))
