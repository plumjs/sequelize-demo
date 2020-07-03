//@ts-nocheck
import { ServiceModel } from '../models'
import { decrypt } from '../../aes256Utils'
/**
 * 返回 object[]
 */
;(async () => {
  const services = await ServiceModel.findAll({})
  const cServices = {}
  services.forEach((service) => {
    const {
      id,
      redirectUrl = '',
      pathPrefix = '',
      clientId = '',
      secret = '',
      secretIv = '',
    } = service
    cServices[id] = JSON.stringify({
      redirectUrl,
      pathPrefix,
      clientId,
      secret,
      secretIv,
    })
  })
  const rServices = {}
  Object.keys(cServices).forEach((id) => {
    const service = JSON.parse(cServices[id])
    rServices[id] = {
      redirectUrl: service.redirectUrl,
      pathPrefix: service.pathPrefix,
      clientId: service.clientId,
      secret: service.secret
        ? decrypt('<secret0>', service.secretIv, service.secret)
        : '',
    }
  })
  console.log('rServices:', rServices)
})()
