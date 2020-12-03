
/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}

(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/**
 * Classe que representa um token de autorização.
 *
 * @constructor
 *
 * @param {string} token - A sequência de caracteres que representa o Token.
 * @param {number} expirationTime - Número de segundos que o token durará.
 * @param {string} scope - A lista de escopos (separados por espaço) que foi autorizado pelo usuário.
 */
export const Token = (value, expirationTimeInSeconds, scope) => {
  
  /* Atributos */

  var value = value;
  var startTime = new Date().getTime(); // O valor em milissegundos.
  var finishTime = new Date(startTime + expirationTimeInSeconds * 1000); // O objeto Date.
  var scope = scope;
  
  // Cria os cookies para o token, seu momento da expiração e seus escopos.
  
  if (!Cookies.get('sabiaToken')) {
    Cookies.set('sabiaToken', value, { expires: finishTime});
  } else {
    value = Cookies.get('sabiaToken');
  }

  if (!Cookies.get('sabiaTokenExpirationTime')) {
    Cookies.set('sabiaTokenExpirationTime', finishTime, { expires: finishTime});
  } else {
    finishTime = Cookies.get('sabiaTokenExpirationTime');
  }

  if (!Cookies.get('sabiaScope')) {
    Cookies.set('sabiaScope', scope, { expires: finishTime});
  } else {
    scope = Cookies.get('sabiaScope');
  }

  this.getValue = function() {
    return value;
  };

  this.getExpirationTime = function() {
    return finishTime;
  };

  this.getScope = function() {
    return scope;
  };

  this.isValid = function() {
    if (Cookies.get('sabiaToken') && value != null) {
      return true;
    }
    return false;
  };

  this.revoke = function() {

    value = null;
    startTime = null;
    finishTime = null;

    if (Cookies.get('sabiaToken')){
      Cookies.remove('sabiaToken');
    }

    if (Cookies.get('sabiaTokenExpirationTime')){
      Cookies.remove('sabiaTokenExpirationTime');
    }

    if (Cookies.get('sabiaScope')){
      Cookies.remove('sabiaScope');
    }

  };

};


/**
 * Classe principal do SDK e seu construtor, que inicializa os principais atributos.
 *
 * @constructor
 *
 * @param {string} authHost - URI do host de autenticação.
 * @param {string} clientID - ID da aplicação registrado no SabiaClient.
 * @param {string} redirectURI - URI de redirecionamento da aplicação cadastrada no SabiaClient.
 *
 */
export const SabiaClient = (authHost, clientID, redirectURI) => {

  /* Atributos privados */

  var authHost = authHost;
  var clientID = clientID;
  var redirectURI = redirectURI;

  var resourceURL = authHost + '/api/perfil/dados/';
  var authorizationURL = authHost + '/oauth/authorize/';
  var logoutURL = authHost + '/oauth/revoke_token/';

  var responseType = 'token';
  var grantType = 'implict'; // Necessário para utilizar Oauth2 com Javascript

  // Remove a '/' caso ela já esteja inserida no auth_host.
  if (authHost.charAt(authHost.length - 1) == '/') {
    authHost = authHost.substr(0, authHost.length - 1);
  }

  var dataJSON;
  var token;

  /* Métodos privados */

  /**
   * Extrai o token da URL e retorna-o.
   *
   * @return {string} O token de autorização presente na URL de retorno.
   */
  var extractToken = function() {
    var match = document.location.hash.match(/access_token=(\w+)/);
    if (match != null) {
      return !!match && match[1];
    }
    return null;
  };


  /**
   * Extrai os escopos autorizados da URL e retorna-os caso o usuário já esteja autenticado.
   * @return {string} Escopos autorizados pelo usuário (separados por espaço).
   */
  var extractScope = function() {
    var match = document.location.hash.match(/scope=(.*)/);
    if (match != null) {
      return match[1].split('+').join(' ');
    }
    return null;
  };

  /**
   * Extrai o tempo de duração do token (em segundos) da URL.
   * @return {number} Tempo de duração do token.
   */
  var extractDuration = function() {

    var match = document.location.hash.match(/expires_in=(\d+)/);

    if (match != null) {
      return Number(!!match && match[1]);
    }

    return 0;
  };

  var getCookie = function (name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  };


  /* Métodos públicos */

  /**
   * Inicializa os objetos token e o dataJSON.
   *
   */
  this.init = function() {
    token = new Token(extractToken(), extractDuration(), extractScope());
    dataJSON = {};
  };

  /**
   * Retorna o objeto token.
   *
   * @return {string} token se o usuário estiver autenticado; null caso contrário.
   */
  this.getToken = function() {
    return token;
  };


  /**
   * Retorna o objeto dataJSON, que contém os dados retornados após a requisição Ajax.
   *
   * @return {Object} O objeto JSON com os dados requisitados.
   */
  this.getDataJSON = function() {
    return dataJSON;
  };


  /**
   * Retorna a URI de redirecionamento.
   *
   * @return {string} URI de redirecionamento.
   */
  this.getRedirectURI = function() {
    return redirectURI;
  };

  /**
   * Retorna se o usuário está autenticado ou não com base no estado do token.
   * @return {Boolean} true se o usuário estiver autenticado; false caso contrário.
   */
  this.isAuthenticated = function() {
    return token.isValid();
  };


  /**
   * Cria a URL de login com todos os parâmetros da aplicação.
   * @return {string} A URL de login do SabiaClient.
   */
  this.getLoginURL = function() {
    var loginUrl = authorizationURL +
      "?response_type=" + responseType +
      "&grant_type="    + grantType +
      "&client_id="     + clientID +
      "&redirect_uri="  + redirectURI;
    return loginUrl;
  };


  /**
   * Cria a URL de cadastro com retorno.
   * @return {string} A URL de cadastro do SabiaClient.
   */
  this.getRegistrationURL = function() {
    var registrationUrl = authHost +
      "/register/" +
      "?redirect_uri="  + redirectURI;
    return registrationUrl;
  };

  this.getResource = function(scope, callback) {
  	$.ajax({
		url: resourceURL,
        data: {'scope': scope},
        headers: {"Authorization": "Bearer " + token.getValue(),
                  "Accept": "application/json"},
		type: 'POST',
		success: function(response) {
			callback(response);
		},
		error: function(response) {
			alert('Falha na comunicação com o Sabiá');
            console.log(response);
		}
    });
  };

  this.login = function() {
    window.location = this.getLoginURL();
  };
	
  this.logout = function() {
  	$.ajax({
		url: logoutURL,
        data: {'token': token.getValue(), 'client_id': clientID},
		type: 'POST',
		success: function(response) {
			token.revoke();
			window.location = redirectURI;
		},
		error: function(response) {
			alert('Falha na comunicação com o Sabiá');
            console.log(response);
		}
    });
  };
  
};