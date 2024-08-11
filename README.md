# ActoPedia-proyect


## ActoPedia-Backend

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


## ActoPedia-Frontend
  
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



