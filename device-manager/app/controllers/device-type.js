import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceTypeController extends Controller {
  @tracked newType = '';
  @service store;
  @action
  async createType(event) {
    event.preventDefault();
    // create the new device
    const deviceType = this.store.createRecord(ResourceModel.DEVICETYPE, {
      type: this.newType,
    });
    deviceType.save();
    // clear the input fields
    this.newType = '';
  }

  @action
  removeType(deviceType, event) {
    event.preventDefault();
    deviceType.destroyRecord();
  }
}
