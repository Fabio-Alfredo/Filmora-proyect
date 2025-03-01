## 🎬 Filmora: ¡Descubre Todo Sobre Actores y Personajes!

__Filmora is an app designed to explore and discover detailed information about actors and characters from movies, TV shows, and books. In addition to allowing you to learn more about these characters, Filmora makes it easy to find new actors and their latest productions. Users can mark actors as “read” to keep track of their research. The app also features a secure registration and login system, ensuring that users’ information is protected.__

#🚀 Filmora Backend

## Facility
Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```

# setting
Try to generate the .env file to place the variables

```
PORT=your_port
DB_URI=db_url
JWT_SECRET= secret_key
```

# Wear

To start the API, run:
```
npm run dev
```
# Endpoints
The main API endpoints are detailed below:

### Create a new user
- **Method:** `POST`
- **Path:** `/auth/register`
- **Description:** Create a new user.

### Access
- **Method:** `POST`
- **Path:** `/auth/login`
- **Description:** Sign in and get an authentication token.

### Get user
- **Method:** `GET`
- **Path:** `/user/getUser`
- **Description:** Get the information of the user who logged in.

## Get Actors
- **Method:** `GET`
- **Path:** `/actor/authors`
- **Description:** Get information about all created actors.

## Create a new actor
- **Method:** `POST`
- **Path:** `/actor/create`
- **Description:** Create a new actor with information about his performances.

## Get Actor by name
- **Method:** `GET`
- **Path:** `/actor/getByName`
- **Description:** Get information about an actor from his name or similarities.

## Get readers
- **Method:** `GET`
- **Path:** `/reader/getReaders`
- **Description:** Get the data of the actors marked as read.

## Mark as a reader
- **Method:** `POST`
- **Path:** `/reader/postReader`
- **Description:** Mark a selected actor as read.

### Delete a note

- **Method:** `DELETE`
- **Path:** `/reader/deleteReader/:userId`
- **Description:** Remove an actor from the read list.

  ### Example request (using cURL)
- **curl http://localhost:3001/auth**


#🎨 Filmora Frontend
  
## Facility
Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```

# setting
Try to generate the .env file to place the variables

```
REACT_APP_API_URL=api_base_url
```

# Wear
To start the application, run:
```
npm run dev
```



