import { Toast } from 'native-base';

export function showToast(text,type){
     Toast.show({
       text: text,
       position: 'bottom',
       buttonText: 'Okay',
       type: type,
     });
  }
