import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceinfoController extends Controller {
  @tracked deviceName = '';
  @tracked mydevice;

  @service store;

  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();
    try {
      this.mydevice = await this.store.findRecord(
        ResourceModel.DEVICE,
        new URLSearchParams(new URL(document.location).searchParams).get('s'),
        { include: 'channels' }
      );
      this.channels = await this.store.query(ResourceModel.CHANNEL, {device: this.mydevice});
      console.log(this.channels);
      this.deviceName = this.mydevice.brand + ' ' + this.mydevice.model;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async getLinkedChannelCount(channels) {
    let tests = 'yes';
    channels.forEach(
      (channel) =>
        async function () {
          let links = await this.store.findRecord(element.id);
        }
    );
    return tests;
  }
}
