ionic-firebase-auth-starter
=====

A mobile app template built with ionic framework.

Generate app: 
```
$ $ npm install -g cordova ionic
$ ionic start ionic-firebase-auth-starter sidemenu
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

or to test in browser run `$ ionic serve`

Add to config.xml:

```
<!-- do not autohide the splash screen -->
<preference name="AutoHideSplashScreen" value="false" />
```

Add splash screen plugin:

```
$ cordova plugin add org.apache.cordova.splashscreen
```


add `http://localhost/callback` in facebook settings --> "Valid OAuth redirect URIs"
