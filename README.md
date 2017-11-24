# UniversalDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

# steps

<pre>

npm install -g @angular/cli
ng new --skip-install universal-demo
cd universal-demo

</pre>

# Update our package.json dependencies and developer dependencies

<pre>

"dependencies": {
    "@angular/animations": "^5.0.0",
    "@angular/common": "^5.0.0",
    "@angular/compiler": "^5.0.0",
    "@angular/core": "^5.0.0",
    "@angular/forms": "^5.0.0",
    "@angular/http": "^5.0.0",
    "@angular/platform-browser": "^5.0.0",
    "@angular/platform-browser-dynamic": "^5.0.0",
    "@angular/router": "^5.0.0",
    "core-js": "^2.5.1",
    "rxjs": "^5.5.2",
    "zone.js": "^0.8.18"
  },
  "devDependencies": {
    "@angular/cli": "1.5.0",
    "@angular/compiler-cli": "^5.0.0",
    "@angular/language-service": "^5.0.0",
    "@types/jasmine": "~2.6.2",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "~8.0.47",
    "codelyzer": "~4.0.0",
    "jasmine-core": "~2.8.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~1.7.1",
    "karma-chrome-launcher": "~2.2.0",
    "karma-cli": "~1.0.1",
    "karma-coverage-istanbul-reporter": "^1.3.0",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.2.0",
    "ts-node": "~3.3.0",
    "tslint": "~5.8.0",
    "typescript": "~2.4.2"
  }
  </pre>
  
  # setup our Server Module
  
  <pre>
  
  npm install -S @angular/platform-server@^5.0.0-rc.1 express 
  npm install -D ts-loader webpack-node-externals npm-run-all
  npm install
  
  </pre>
  
 # TO run the code 
 
 <pre>
 
 npm run build && node dist/server.js
 
 </pre>
  
