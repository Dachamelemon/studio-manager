import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class DevicetypesController extends Controller {
  @tracked newType = '';
  @service store;
  @action
  async createType(event) {
    event.preventDefault();
    // create the new device
    let devicetypes = await this.store.findAll('devicetype');
    console.log({ devicetypes });
    const devicetype = this.store.createRecord('devicetype', {
      type: this.newType,
    });
    devicetype.save();
    devicetypes = await this.store.findAll('devicetype');
    console.log({ devicetypes });
    // clear the input fields
    this.newType = '';
  }

  @action
  removeType(deviceType, event) {
    event.preventDefault();
    deviceType.destroyRecord();
  }
}
