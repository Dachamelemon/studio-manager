import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';
import { sort } from '@ember/object/computed';

export default class DeviceinfoRoute extends Route {
  queryParams = { s: { refreshModel: false } };
  @service store
  async model(param) {
    let channels = [];

    let device = await this.store.findRecord(
      ResourceModel.DEVICE,
      param.device_id,
      { include: 'channels' });

    const deviceName = device.model + ' ' + device.brand;
    
    return {
      deviceModel: device,
      deviceName: deviceName,
      channels: device.channels
    } 

   
  }
}
