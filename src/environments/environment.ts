// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUriAuth:"http://192.168.1.13:3000/auth/login",
  apiUriResetPass:"http://192.168.1.13:3000/auth/restPassword",
  apiUrlUser:"http://192.168.1.13:3000/user",
  apiUrlChangePass:"http://192.168.1.13:3000/auth/change_password",
  apiUrlGetToken:"http://192.168.1.13:3000/auth/get_token_password",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
