# Meeting Room Booking System

## Project Description:

This Project aim to offer co-working spaces for meetings and discussions. To streamline the booking process, i've decided to develop a web application for managing room reservations.

## [`Backend Live Link`](coming)
## [`Describe Video Of The Project`](coming)

## Backend Test Account Credentials

#### Role: Admin

- Email : `test@gmail.com`
- Password : `joy123`

#### Role: User

- Email : `joy@gmail.com`
- Password : `joy123`


## 💨 Technology Used

- **Core Technology**
- [Node.js](https://nodejs.org/) - The JavaScript runtime used on the back-end
- [MongoDB](https://www.mongodb.com/) - The database used to store data
- [Express](https://expressjs.com/) - The back-end web framework used to build the API
- [TypeScript](https://www.typescriptlang.org/) - Runtime error checking
- [Moongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js

- **Npm Package**
  - Bcrypt
  - Dot Env
  - Http Status
  -Jwt token
  -Zod
  -cors
  -Prettier
  -Es Lint


### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository

```
git clone https://github.com/ZahirulIslamJoy/meeting-room-booking-system-backend.git
```

2. Install dependencies

```
npm i
```
3.Add a .env file in the root folder and modified it as follows:
```
NODE_ENV=development
SALT=Any Number
PORT=Any Port
DATABASE_URL="Your Mongodb connection url"
JWT_ACCESS = "Any access token(64 bit string preferable)"
```
3. Start the development server

```
npm run start:dev
```
4.Hit the desired End Points

## Features

*   **Admin Features:** Administrators have the privilege of creating, updating, and deleting rooms. They can specify details like the room's name, room number, floor number, capacity, price per slot, and available amenities. Additionally, admins are responsible for creating time slots for each room. They set the date, start time, and end time for these slots, ensuring that users have a range of options to choose from. Through the web interface, admins can effortlessly manage the co-working space inventory and slot availability, ensuring accurate and up-to-date information for users.
*   **User Features:** On the user side, individuals can create bookings by selecting from the available time slots for their desired meeting times. They input the date and select specific slots for their sessions, along with their preferred room selection. The system automatically calculates the total amount based on the number of slots selected and the price per slot. Users receive real-time feedback on the availability of rooms and slots, ensuring smooth booking experiences without conflicts.

As the development progresses, I tried to robust validation and error handling mechanisms to enhance the application's reliability. Users receive informative messages in case of booking conflicts or validation errors, guiding them towards successful interactions with the platform

## 💨 Api End Points Descriptions


### User Routes

1. **User Sign Up**
-   _*Route:*_ `/api/auth/signup` (POST)
-   **Request Body:**

```json
{
  "name": "Joy",
  "email": "joy@gmail.com",
  "password": "joy1234",
  "phone": "1234567890",
  "role": "user", //role can be user or admin
  "address": "Dhaka , Gazipur"
}
  
```

-   **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User registered successfully",
  "data": {
    "_id": "60629b8e8cfcd926384b6e5e",
    "name": "Joy",
    "email": "joy@gmail.com",
    "phone": "1234567890",
    "role": "user",
    "address": "Dhaka , Gazipur"
  }
}
```

**2\. User Login**

-   _*Route:*_ `/api/auth/login` (POST)
-   **Request Body:**

```json
{
    "email": "joy@gmail.com",
    "password": "joy-1234",
}
```

- Response:

```json
{
    "success": true,
    "statusCode": 200,
    "message": "User logged in successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDYyOWI4ZThjZmNkOTI2Mzg0YjZlNWUiLCJuYW1lIjoiUHJvZ3JhbW1pbmcgSGVyb3MiLCJlbWFpbCI6IndlYkBwcm9ncmFtbWluZy1oZXJvLmNvbSIsInBob25lIjoiMTIzNDU2Nzg5MCIsInJvbGUiOiJhZG1pbiIsImFkZHJlc3MiOiIxMjMgTWFpbiBTdHJlZXQsIENpdHksIENvdW50cnkiLCJpYXQiOjE2MjQ1MTY2MTksImV4cCI6MTYyNDUyMDYxOX0.kWrEphO6lE9P5tvzrNBwx0sNogNuXpdyG-YoN9fB1W8",
    "data": {
        "_id": "60629b8e8cfcd926384b6e5e",
        "name": "Joy",
        "email": "joy@gmail.com",
        "phone": "1234567890",
        "role": "user",
        "address": "Dhaka , Gazipur"
    }
}
```

###   

### Room Routes

  

**3\. Create Room (Only Accessible by Admin)**

-   _*Route:*_ `/api/rooms` (POST)
-   **Request Headers:**

```plain
Authorization: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```
-    _*Request Body:*_

```json
{
  "name": "Conference Room",
  "roomNo": 201,
  "floorNo": 1,
  "capacity": 20,
  "pricePerSlot": 100,
  "amenities": ["Projector", "Whiteboard"]
}


```

-   _*Response:*_

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Room added successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Conference Room",
    "roomNo": 201,
    "floorNo": 1,
    "capacity": 20,
    "pricePerSlot": 100,
    "amenities": ["Projector", "Whiteboard"],
    "isDeleted": false
  }
}


```

**4\. Get a Room**

-    _*Route:*_ `/api/rooms/:id` (GET)
-    _*Response:*_

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Room retrieved successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Conference Room",
    "roomNo": 201,
    "floorNo": 1,
    "capacity": 20,
    "pricePerSlot": 100,
    "amenities": ["Projector", "Whiteboard"],
    "isDeleted": false
  }
}


```

**5\. Get All Rooms**

-    _*Route:*_ `/api/rooms` (GET)
-    **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Rooms retrieved successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Conference Room",
      "roomNo": 201,
      "floorNo": 1,
      "capacity": 20,
      "pricePerSlot": 100,
      "amenities": ["Projector", "Whiteboard"],
      "isDeleted": false
    },
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c6",
      "name": "Meeting Room",
      "roomNo": 301,
      "floorNo": 2,
      "capacity": 10,
      "pricePerSlot": 200,
      "amenities": ["Whiteboard"],
      "isDeleted": false
    }
    // Other available rooms
  ]
}
```

  

**6\. Update Room (Only Accessible by Admin)**

-    _*Route:*_ `/api/rooms/:id` (PUT)
-   **Request Headers:**

```plain
Authorization: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```

-    **Request Body:**

```json
{
  "pricePerSlot": 200 //we can update any field dynamically, (e.g., name, roomNo, floorNo, capacity, pricePerSlot, amenities)..
}
```

-    **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Room updated successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Conference Room",
    "roomNo": 201,
    "floorNo": 1,
    "capacity": 20,
    "pricePerSlot": 200,
    "amenities": ["Projector", "Whiteboard"],
    "isDeleted": false
  }
}
```

**7\. Delete a Room (Soft Delete, Only Accessible by Admin)**

-   _*Route:*_ `/api/rooms/:id` (DELETE)
-   **Request Headers:**

```plain
Authorization: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```

-    **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Room deleted successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c5",
    "name": "Conference Room",
    "roomNo": 201,
    "floorNo": 1,
    "capacity": 20,
    "pricePerSlot": 200,
    "amenities": ["Projector", "Whiteboard"],
    "isDeleted": true
  }
}
```

###   

### Slot Routes

  

8\. **Create Slot (Only Accessible by Admin)**

-   _*Route:*_ `/api/slots`(**POST**)

**Request Headers:**

```javascript
Authorization: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```

**Request Body:**

```json
{
    "room": "60d9c4e4f3b4b544b8b8d1c5",
    "date": "2024-06-15",
    "startTime": "09:00",
    "endTime": "14:00"
}
```

**Response Body:**

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Slots created successfully",
    "data": [
        {
            "_id": "60d9c4e4f3b4b544b8b8d1c6",
            "room": "60d9c4e4f3b4b544b8b8d1c5",
            "date": "2024-06-15",
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false
        },
        {
            "_id": "60d9c4e4f3b4b544b8b8d1c7",
            "room": "60d9c4e4f3b4b544b8b8d1c5",
            "date": "2024-06-15",
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false
        },
        {
            "_id": "60d9c4e4f3b4b544b8b8d1c8",
            "room": "60d9c4e4f3b4b544b8b8d1c5",
            "date": "2024-06-15",
            "startTime": "11:00",
            "endTime": "12:00",
            "isBooked": false
        },
        {
            "_id": "60d9c4e4f3b4b544b8b8d1c9",
            "room": "60d9c4e4f3b4b544b8b8d1c5",
            "date": "2024-06-15",
            "startTime": "12:00",
            "endTime": "13:00",
            "isBooked": false
        },
        {
            "_id": "60d9c4e4f3b4b544b8b8d1ca",
            "room": "60d9c4e4f3b4b544b8b8d1c5",
            "date": "2024-06-15",
            "startTime": "13:00",
            "endTime": "14:00",
            "isBooked": false
        }
    ]
}


``` 
**9\. Get available slots**

**Route:** `/api/slots/availability`(**GET**)

**Query Parameters:**

*   `date`: The specific date for which available slots are requested (format: YYYY-MM-DD).
*   `roomId`: ID of the room for which available slots are requested.
If we hit `/api/slots/availability` without any query params then we can get all the slots that are not booked ( isBooked: false)
**Request endpoint example**

`/api/slots/availability?date=2024-06-15&roomId=60d9c4e4f3b4b544b8b8d1c5`

or

`/api/slots/availability`

**Response:**

```json
{
    "success": true,
    "statusCode": 200,
    "message": "Available slots retrieved successfully",
    "data": [
        {
            "_id": "60d9c4e4f3b4b544b8b8d1c6",
            "room": {
                "_id": "60d9c4e4f3b4b544b8b8d1c5",
                "name": "Conference Room",
                "roomNo": 201,
                "floorNo": 1,
                "capacity": 20,
                "pricePerSlot": 100,
                "amenities": ["Projector", "Whiteboard"],
                "isDeleted": false
            },
            "date": "2024-06-15",
            "startTime": "09:00",
            "endTime": "10:00",
            "isBooked": false
        },
        {
            "_id": "60d9c4e4f3b4b544b8b8d1c7",
            "room": {
                "_id": "60d9c4e4f3b4b544b8b8d1c5",
                "name": "Conference Room",
                "roomNo": 201,
                "floorNo": 1,
                "capacity": 20,
                "pricePerSlot": 100,
                "amenities": ["Projector", "Whiteboard"],
                "isDeleted": false
            },
            "date": "2024-06-15",
            "startTime": "10:00",
            "endTime": "11:00",
            "isBooked": false
        }
    ]
}



```

###   

### Booking Routes

  

**10\. Create a Booking (Only Accessible by Authenticated User)**

-    _*Route:*_ `/api/bookings` (POST)
-   **Request Headers:**

```javascript
Authorization: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```

-    **Request Body:**

```json
{
  "date": "2024-06-15",
  "slots": ["60d9c4e4f3b4b544b8b8d1c6", "60d9c4e4f3b4b544b8b8d1c7"],
  "room": "60d9c4e4f3b4b544b8b8d1c5",
  "user": "60d9c4e4f3b4b544b8b8d1c4"
}
```

-   **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Booking created successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c9",
    "date": "2024-06-15",
    "slots": [
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c6",
        "room": "60d9c4e4f3b4b544b8b8d1c5",
        "date": "2024-06-15",
        "startTime": "09:00",
        "endTime": "10:00",
        "isBooked": true
      },
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c7",
        "room": "60d9c4e4f3b4b544b8b8d1c5",
        "date": "2024-06-15",
        "startTime": "10:00",
        "endTime": "11:00",
        "isBooked": true
      }
    ],
    "room": {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Conference Room",
      "roomNo": 201,
      "floorNo": 1,
      "capacity": 20,
      "pricePerSlot": 100,
      "amenities": ["Projector", "Whiteboard"],
      "isDeleted": false
    },
    "user": {
      "_id": "60d9c4e4f3b4b544b8b8d1c4",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890",
      "address": "123 Main St, Anytown, USA",
      "role": "user"
    },
    "totalAmount": 200,
    "isConfirmed": "unconfirmed",
    "isDeleted": false
  }
}

```

**11\. Get All Bookings (Only Accessible by Admin)**

-   _*Route:*_ `/api/bookings` (GET)
-   **Request Headers:**

```javascript
Authorization: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```

-   **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "All bookings retrieved successfully",
  "data": [
    {
    "_id": "60d9c4e4f3b4b544b8b8d1c9",
    "date": "2024-06-15",
    "slots": [
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c6",
        "room": "60d9c4e4f3b4b544b8b8d1c5",
        "date": "2024-06-15",
        "startTime": "09:00",
        "endTime": "10:00",
        "isBooked": true
      },
      {
        "_id": "60d9c4e4f3b4b544b8b8d1c7",
        "room": "60d9c4e4f3b4b544b8b8d1c5",
        "date": "2024-06-15",
        "startTime": "10:00",
        "endTime": "11:00",
        "isBooked": true
      }
    ],
    "room": {
      "_id": "60d9c4e4f3b4b544b8b8d1c5",
      "name": "Conference Room",
      "roomNo": 201,
      "floorNo": 1,
      "capacity": 20,
      "pricePerSlot": 100,
      "amenities": ["Projector", "Whiteboard"],
      "isDeleted": false
    },
    "user": {
      "_id": "60d9c4e4f3b4b544b8b8d1c4",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890",
      "address": "123 Main St, Anytown, USA",
      "role": "user"
    },
    "totalAmount": 200,
    "isConfirmed": "unconfirmed",
    "isDeleted": false
  },
   // other bookings 
  ]
}


```

**12\. Get User's Bookings (Only Accessible by Authenticated User)**

-   _*Route:*_ `/api/my-bookings`(**GET**)
-   **Request Headers:**

```javascript
Authorization: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 
```

-   **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User bookings retrieved successfully",
  "data": [
       {
         "_id": "60d9c4e4f3b4b544b8b8d1ca",
         "date": "2024-06-15",
         "slots": [
              {
                "_id": "60d9c4e4f3b4b544b8b8d1c6",
                "room": "60d9c4e4f3b4b544b8b8d1c5",
                "date": "2024-06-15",
                "startTime": "09:00",
                "endTime": "10:00",
                "isBooked": true
              },
              {
                "_id": "60d9c4e4f3b4b544b8b8d1c7",
                "room": "60d9c4e4f3b4b544b8b8d1c5",
                "date": "2024-06-15",
                "startTime": "10:00",
                "endTime": "11:00",
                "isBooked": true
              }
            ],
            "room": {
              "_id": "60d9c4e4f3b4b544b8b8d1c5",
              "name": "Conference Room",
              "roomNo": 201,
              "floorNo": 1,
              "capacity": 20,
              "pricePerSlot": 100,
              "amenities": ["Projector", "Whiteboard"],
              "isDeleted": false
            },
      "totalAmount": 200,
      "isConfirmed": "unconfirmed",
      "isDeleted": false
    }
  ]
}


```

  

**13\. Update Booking (Only Accessible by Admin)**

-   _*Route:*_ `/api/bookings/:id` (PUT)
-   **Request Headers:**

```javascript
Authorization: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```

-   **Request Body:**

```json
{
  "isConfirmed": "confirmed"
}
```

**Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Booking updated successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1ca",
    "date": "2024-06-15",
    "slots": ["60d9c4e4f3b4b544b8b8d1c6", "60d9c4e4f3b4b544b8b8d1c7"],
    "totalAmount": 200,
    "room": "60d9c4e4f3b4b544b8b8d1c5",
    "user": "60d9c4e4f3b4b544b8b8d1c4",
    "isConfirmed": "confirmed",
    "isDeleted": false
  }
}


```

  

**14\. Delete Booking (Soft Delete, Only Accessible by Admin)**

-   _*Route:*_ `/api/bookings/:id` (DELETE)
-   **Request Headers:**

```javascript
Authorization: 
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmF
tZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

```

-   **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Booking deleted successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1ca",
    "date": "2024-06-15",
    "slots": ["60d9c4e4f3b4b544b8b8d1c6", "60d9c4e4f3b4b544b8b8d1c7"],
    "totalAmount": 200,
    "room": "60d9c4e4f3b4b544b8b8d1c5",
    "user": "60d9c4e4f3b4b544b8b8d1c4",
    "isConfirmed": "confirmed",
    "isDeleted": true
  }
}

```

























## Roles:
1. **Admin**
2. **User**