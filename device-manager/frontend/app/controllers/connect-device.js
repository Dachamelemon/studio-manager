import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class ConnectDeviceController extends Controller {
  @service store;
  @tracked deviceName = '';
  @tracked channel = '';
  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();
    try {
      this.mydevice = '';
      
      this.deviceName = this.model.thischannel.device.brand + " " + this.model.thischannel.device.brand;
      this.channel = this.model.thischannel.position + " " + this.model.thischannel.channel.type;   

      let channels = this.model.allchannels;
      return a - b;
      console.log(channels);

      this.deviceName = this.mydevice.brand + ' ' + this.mydevice.model;
    } catch (e) {
      console.log(e);
    }
  }
}
