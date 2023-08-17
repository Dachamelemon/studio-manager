import Ember from 'ember';

export function StringHelper() {
    let returnvalue = ''
    function isNullOrEmpty(value){
        if(value){
            returnvalue = false;
        }
        returnvalue = true;
    }
    return returnvalue;
  }
  
  export default Ember.Helper.helper(StringHelper);