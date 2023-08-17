import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceTypeRoute extends Route {
  @service store;
  model() {
    return this.store.findAll(ResourceModel.DEVICETYPE);
  }
}
