// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:"http://192.168.1.13:3000/",
  apiUriAuth:"http://192.168.1.13:3000/auth/login",
  apiUriResetPass:"http://192.168.1.13:3000/auth/restPassword",
  apiUrlUser:"http://192.168.1.13:3000/user",
  apiUrlUserAvatar:"http://192.168.1.13:3000/user/userUploadAvatar",
  apiUrlNewUserAvatar:"http://192.168.1.13:3000/user/upload_avatar_for_new_user",
  apiUrlChangePass:"http://192.168.1.13:3000/auth/change_password",
  apiUrlGetToken:"http://192.168.1.13:3000/auth/get_token_password",
  apiUrlRegister:"http://192.168.1.13:3000/user/register",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
