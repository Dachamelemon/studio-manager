import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceController extends Controller {
  @tracked newDevice = '';
  @tracked newBrand = '';
  @tracked selectedChannel = '';
  @tracked channelCount = '';
  @tracked selectedType = '';
  @tracked listOfTypes = '';
  @tracked allChannels = '';
  @tracked channelList = '';
  @tracked message = '';
  @tracked typeIsSelected = false;
  @tracked hasData = false;

  @service store;

  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();
    try {
      this.listOfTypes = await this.store.findAll(ResourceModel.DEVICETYPE);
      this.allChannels = await this.store.findAll(ResourceModel.CHANNEL);
    } catch (e) {
      this.message = 'Error fetching types:' + e;
      this.showBlock('errorMessage')
    }
  }

  @action
  async updateLinkedType(type) {
    console.log('this: ' + type.id);
  }

  @action
  async createDevice(event) {
    event.preventDefault();
    if(!this.typeIsSelected){
      this.message = 'There was no type selected. Please select a type for your device';
      this.showBlock('typeMissingError');
      return;
    }
    // create the new device
    const device = await this.store.createRecord(ResourceModel.DEVICE, {
      model: this.newDevice,
      brand: this.newBrand,
    });
    device.deviceType = this.selectedType;
    console.log(this.channelList);

    device.channels = this.channelList;

    try {
      await device.save();
      this.message = 'Your device ' + device.model + 'has successfully been created';
      this.showBlock('successMessage');
    } catch (e) {
      this.message = 'Something went wrong while creating your device: ' + e;
      this.showBlock('errorMessage');
    }

    console.log(device);

    this.newDevice = '';
    this.newBrand = '';
    this.selectedChannel = '';
    this.channelCount = '';
    this.selectedType = '';
    this.channelList = '';
    this.typeIsSelected = false;
  }

  @action successMessage() {
    document.getElementById('');
  }

  @action
  setChannelType(value) {
    this.selectedChannel = value;
    let channelCountField = document.getElementById('channelcount');
    if (value.audiotype.includes('MIDI')) {
      this.channelCount = 1;
      channelCountField.setAttribute('disabled', true);
      return;
    }
    channelCountField.removeAttribute('disabled');
  }

  @action
  removeDevice(device, event) {
    event.preventDefault();
    device.destroyRecord();
  }

  @action
  setType(value) {
    this.selectedType = value;
    this.typeIsSelected = true;
  }

  @action
  addChannel() {
    for (let i = 0; i < this.channelCount; i++) {
      this.channelList = [...this.channelList, this.selectedChannel];
    }
    this.selectedChannel = '';
    this.channelCount = '';
    return this.channelList;
  }

  @action
  removeChannels() {
    let checkboxes = document.getElementsByClassName('channel');
    for (var i = 0; i < checkboxes.length; i++) {
      // And stick the checked ones onto an array...
      if (checkboxes[i].checked) {
        console.log(i);
        console.log(this.channelList.length);
        let item = this.channelList.indexOf(this.channelList[i]);
        if (item > -1) {
          this.channelList = this.channelList.splice(item, 1);
        }
        console.log(this.channelList);
      }
    }
    console.log(this.channelList.length);
  }

  @action
  hideBlock(blockId){
    console.log(blockId);
    let block = document.getElementById(blockId);
    block.style.display = "none"; 
  }

  @action
  showBlock(blockId){
    let block = document.getElementById(blockId);
    block.style.display = "block"; 
  }
}
