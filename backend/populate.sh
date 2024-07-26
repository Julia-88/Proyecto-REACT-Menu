#!/bin/bash

# Define the base URL
BASE_URL="https://669d6e8615704bb0e3061150.mockapi.io/food"

# Define the content type
CONTENT_TYPE="Content-Type: application/json"

curl -X POST $BASE_URL -H "$CONTENT_TYPE" -d '{
    "name":"pollo asado",
    "dayWeek": "lunes",
    "type": "carne",
    "description": "pollo asado con patatas",
    "image": "https://i.pinimg.com/736x/de/63/69/de6369bd5e109603fddb725943655a3e.jpg"
}'

curl -X POST $BASE_URL -H "$CONTENT_TYPE" -d '{
    "name":"macarrones",
    "dayWeek": "martes",
    "type": "pasta",
    "description": "macarrones con tomate",
    "image": "https://imag.bonviveur.com/presentacion-principal-de-los-macarrones-con-champinones-tomate-y-queso.webp"
}'

curl -X POST $BASE_URL -H "$CONTENT_TYPE" -d '{
    "name":"lentejas",
    "dayWeek": "miercoles",
    "type": "verduras",
    "description": "lentejas con chorizo",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OFS0VqcGENuvnAPDb1gCLrB3kewtQY4D3w&s"
}'

curl -X POST $BASE_URL -H "$CONTENT_TYPE" -d '{
    "name":"sepia",
    "dayWeek": "jueves",
    "type": "pescado",
    "description": "sepia la horno con salsa de soja",
    "image": "https://jetextramar.com/wp-content/uploads/2022/08/receta-de-sepia-india-u1_optimized.jpg"
}'

curl -X POST $BASE_URL -H "$CONTENT_TYPE" -d '{
    "name":"pizza",
    "dayWeek": "viernes",
    "type": "pasta",
    "description": "pizaa 4 quesos",
    "image": "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-4663.jpeg"
}'

curl -X POST $BASE_URL -H "$CONTENT_TYPE" -d '{
    "name":"secreto iberico",
    "dayWeek": "sabado",
    "type": "carne",
    "description": "secreto iberico con esparragos y salsa de naranja",
    "image": "https://www.cocinatis.com/archivos/202308/ctis0999-receta-secreto-iberico-a-la-parrilla-749x388x80xX.jpg"
}'

curl -X POST $BASE_URL -H "$CONTENT_TYPE" -d '{
    "name":"Crema de calabaza",
    "dayWeek": "domingo",
    "type": "verduras",
    "description": "Crema de calabaza con almendras",
    "image": "https://content-cocina.lecturas.com/medio/2018/07/19/crema-de-calabaza-asada-al-curry_50d4e4db_800x800.jpg"
}'