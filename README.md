## Step 1: `psql postgres`
Connect to the default postgres database

## Step 2: `psotgres-# CREATE ROLE baraka WITH LOGIN PASSWORD 'baraka';`
Create a role called `baraka` with a password of `baraka`

## Step 3: `psotgres-# ALTER ROLE baraka CREATEDB;`
Give premission to `baraka` to create a database

## Step 4: `psotgres-# \q`
Exit the postgres shell.

## Step 5: `psotgres-# psql -U baraka -d baraka`
Log in as superuser `baraka`.

## Step 6: `postgres=> CREATE DATABASE api;`
Create a database called `api`.

## Step 7: `postgres=> \c api`
Connect to the `api` database.

## Step  8: `postgres=> CREATE TABLE users (id SERIAL PRIMARY KEY, firstname text, lastname text);`
Create table to store users.

## Step 9: `postgres=> INSERT INTO users (firstname, lastname) VALUES ('Emelie', 'Fernandez');`
Insert sample user.

## Step 10: `git clone https://github.com/Baraka-Assignment/Backend`
Clone repository.

## Step 11: `cd Backend`
Go into the repository.

## Step 12: `npm install`
Install dependencies.

## Step 13: `node index.js`
Start the server.
