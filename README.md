# Villa Party Vue 3 + Element UI Plus project

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

---------------------------
## Deploy
cd to the project e.g `cd villa_project`
run `npm run dev`

for build
run `npm run build` but pay attention you need update the config IMG_URL to the server


## mock server
here I am using json-server for mock server
[json-server](https://www.npmjs.com/package/json-server)

cd to the mock_server folder `cd mock_server`
run `npm run server`

the API endpoint url is `http://localhost:3004`

### Json generation
Could copy `json_generation_template.txt` file code to [json-generator](https://json-generator.com/) to generate json data then copy the generate json data to our mock_server folder db.json

### Google map
For google map you might need to input your own api key  
more info:  
https://vue3-google-map.netlify.app/components/marker.html

### State management
We use vue reactive/provide/inject for state management
Something like viewmode, sort option, sort value, calendar which will be kept if from list view to detail and back from detail view

### Endpoint
Now we have 3 endpoints
| Method | Value       | parameter/data                                | Function                                    | Info                            |
|--------|-------------|-----------------------------------------------|---------------------------------------------|---------------------------------|
| GET    | /villas     | parameter: _sort, _limit, _order              | getVillas(show, availableDate, order, sort) | Search villas                   |
| GET    | /villas/:id | id: for villa                                 | getVilla(id)           | Search one villa                |
| PUT    | /villas/:id | id: for villa; data: which need to be updated | updateVilla(id, putElement)                                | Update villa with specific data |

### Config
| constant | default value                 | info                   |
|----------|-----------------------|------------------------|
| IMG_URL  | /src/assets/images/   | This is for images URL |
| API_URL  | http://localhost:3004 | This is for API URL    |
| MAP_ZOOM  | 4 | Villa detail page map zoom level    |

### doc
- There is swagger.yaml for API reference, open it in swagger
- Postman for api, import the collection `villas_tc_vue.postman_collection.json` to postman
- Add `villas_tc_vue.postman_environment.json` to above collection as well
- You could generate your ow json data:
Could copy `json_generation_template.txt` file code to [json-generator](https://json-generator.com/) to generate json data then copy the generate json data to our mock_server folder db.json

### Verification video
https://www.dropbox.com/s/vdm8vpqpwonspzf/villa_vue3.mp4?dl=0

### Check List  
[x] Setup the project  
  [x] Element UI Plus  
  [x] Router  
  [x] Sass  
  [x] Create mock json    
[x] Setup the mock server    
[x] Page/views  
  [x] 404  
  [x] Villas  
  [x] Villa  
[x] Split components    
  [x] Filter/Sort/Order bar  
  [x] Book/unbook confirmation Modal  
  [x] Book button  
  [x] Table  
  [x] Grid    
  [x] Detail  
[x] state management  
[x] doc  
  [x] swagger  
  [x] postman  
