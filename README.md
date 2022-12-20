# Welcome, This microservice is build for MicroTask 2

# ABOUT

This microservice provide Authentication and Visitor count APIs .

1. The authentication system uses JSON WEB token and hashing of password with salt to provide reliable security.

2. The visitor count system is a versatile visit counter with takes host name and record the count of the respective website in the Database

3. The Database used is MONGO DB

# Api is live 

https://pnxkhg.deta.dev/

# Authentication

# To create new user (signup)

Method: POST

Endpoint: '/api/auth/createUser'

Body parameter(in JSON)
1. name
2. email
3. password

# To login in the account

Method: POST

Endpoint: '/api/auth/login'

Body parameter(in JSON)
1. email
2. password

# To get the user info

Method: POST

Endpoint: '/api/auth/getuser'

Header parameter
1. auth-token

# To delete the account

Method: DELETE

Endpoint: "/api/auth/deleteuser"

Header parameter
1. auth-token

# To update the account info

Method: PUT

Endpoint: '/api/auth/updateuser'

Header parameter
1. auth-token

Body parameter (in JSON)
1. email
2. name
3. password

# Visitor API

# To get detail of the count of visitors

Method: POST

Endpoint: '/api/vis/info'

Body parameter (in JSON)
1. host

# To count the visitors

Method: POST

Endpoint: '/api/vis/count'

Body parameter (in JSON)
1. host

# To reset the Visiter counter

Method: PUT

Endpoint: '/api/vis/reset'

Body parameter (in JSON)
1. host

# To delete the visitor counter

Method: DELETE

Endpoint: '/api/vis/delete'

Body parameter (in JSON)
1. host
