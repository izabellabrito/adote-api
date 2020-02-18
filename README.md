#### adote-api
Node API that when registering a pet performs the sending of e-mail using the lib sendgrid
 
#### 1. clone the project

#### 2. install the depedencies

```
  npm install
```
 
#### 2. in _config.js_ file, make the following changes:

```
  module.exports = {
	  connectionString: '(your mongodb connection string)',
	  sendgridKey: '(your sendgrid api key)'
  };
``` 

#### 3. run the development server

```
  npm run dev
```

#### 4. application is now running on port 3000
