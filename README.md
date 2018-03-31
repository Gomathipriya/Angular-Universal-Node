
# Angular Universal Introduction

*  Supports Angular to run on both browser and server
*  Angular is just a Html parser which converts typescript into Javascript which in turn creates a parsed html on run time to render a page in browser
*  In Classical Angular - rendering html requires full angular framework to be downloaded but in universal - server creates a parsed html which is rendered in the browser (Pre-rendered before bootstrap)

# Benefits 

*  Search Engine optimization (SEO) - In Angular everything is javascript, which creates trouble for search engine in scrapping the content. Most search engine doesn't read Javascript. Angular universal render the application on the server and sends back the html for the client which helps the crawlers to index the page properly.
*  Social Media Embedding - Content scrappers like Facebook , Twitter and Reddit dont read Javascript which affects the shared link of the Angular page. In Angular Universal its a parsed HTML file and hence support these social media sharing.
*  User Experience - Size of the application is reduced which cause the application to load faster. Browser can immediately start rendering the page since the parsed html is served by the server. No need to wait for bootsrapping of the Angular.

Note: Both Search Engine and Social medias use HTML to utilize the meta tags and and relavent page content. They cannot determine when the javascript framework completes rendering the page.


# Creating a Sample project

*  Create separate module one for browser and one for server (app.module.ts)
*  Create two entry point (main.ts)
*  Change angular client json and tsconfig files
*  Setup dynamic rendering server using @ngUniversal/express-engine
*  Run using ng build --prod 
*  Enable pre-rendering if required

# Limitations 

## Pitfall 1 - Being Universal Compactible

*  Cant access directly the browser API's 
*  Cant use document, window, location or navigator

## Pitfall 2 - Http Request

*  Universal needs absolute url
*  Http Interceptors can be used on server side to handle the same

## Pitfall 3 - Handling third party API

* All the npm modules should be universal compactible
* Cant user hammer js ( polyfills can be used to avoid this problem)

## Pitfall 4 - API calls

*  API calls are made one on server side rendering and another on Angular bootstrap
*  Above caused 
  -   unnecessary server load 
  -   Reloading the page
  -   Causes flickering
*  Affects mobile view rendering
*  Can be fixed with Transfer state 
*  BrowserTransferState module and ServerTransferState module can be used to communicate between server and client.



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
  
  npm install -S @angular/platform-server@^5.0.0-rc.1 @nguniversal/express-engine 
  npm install -D ts-loader webpack-node-externals npm-run-all
  npm install
  
  </pre>
  
  # To run the application
  
  <pre>
  npm run build && node dist/server.js
  </pre>

  
