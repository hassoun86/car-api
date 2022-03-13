# Car API

Car API is an CRUD for managing cars .  

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install car-api.


```
git clone https://github.com/hassoun86/car-api
cd car-api
npm install
npm run dev
```


#### Routes API
#### Cars
Routes | HTTP | Description
--- | --- | ---
**/cars** | `GET` | Get all cars
**/cars/:id** | `GET` | Get Single car
**/cars** | `POST` | Create a car
**/cars/:id** | `DELETE` | Delete a car
**/cars/:id** | `PATCH` | Update data of a car


## Usage with docker
Navigate where the docker-compose.yml is located and build the image (you can customize your image name in the docker-compose.yml file)
```
docker-compose build
```

To run the backend and the db:

```
docker-compose up -d
```

navigate to http://localhost:3000/cars and we are good to go .
