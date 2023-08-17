import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceinfoRoute extends Route {
    queryParams = {s: { refreshModel: false } }
    model(param){
        return {param: param};
    }

   
}