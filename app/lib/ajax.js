export default class AJAX {
  static headers = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'dataType' : 'json',

  }

  static xhr(host, route, params, verb) {
    const uri = host + route;
    let init = {
      method:verb,
      body:params?JSON.stringify(params):null,
      headers:AJAX.headers,
    }
    return fetch(uri, init).then(res => {
      //if(res.ok) return res.json();
      return res.json()
    })
  }

  static encodeURI(params)  {
      let out = Object.keys(params).map(k=> {
        if(typeof params[k] === 'object') {
          let obj={};
          for(let l in params[k]) {
            obj[k+'['+l+']'] = params[k][l];
          }
          return queryParams(obj);
        } else {
          return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
        }
      }).join('&');
      return out;
  }

  static get(host, route="", params="") {
    const uri = host + route + (params?`?${AJAX.encodeURI(params)}`:"");
    return AJAX.xhr(uri, '', null, 'GET');
  }

  static post(host, route, params) {
    return AJAX.xhr(host, route, params, 'POST');
  }

  static put(host, route, params) {
    return AJAX.xhr(host, route, params, 'PUT');
  }

  static delete(host, route, params) {
    return AJAX.xhr(host, route, params, 'DELETE');
  }

}
