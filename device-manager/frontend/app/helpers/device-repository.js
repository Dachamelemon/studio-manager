import { ResourceModel } from './resource-models';

export default class DeviceRepository {
  constructor(store) {
    this.store = store;
  }

  async getAll() {
    return this.store.findAll(ResourceModel.DEVICE).then((devices) => devices);
  }
}
