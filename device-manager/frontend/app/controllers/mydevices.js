import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class MyDeviceController extends Controller {
  @tracked mydevices = '';

  @service store;

  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();
    try {
      this.mydevices = await this.store.findAll(ResourceModel.DEVICE, {
        include: 'device-type,channels',
      });
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
