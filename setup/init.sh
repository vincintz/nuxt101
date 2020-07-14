#!/bin/bash

# Config vars
COMMON_NAME=localhost
APP_NAME=nuxt101

# Update software packages
apt update -y && apt upgrade -y

# Install essentials
apt install -y vim git htop debconf-utils
apt install -y nginx

# Replace defualt nginx site
rm /etc/nginx/sites-enabled/* /etc/nginx/sites-available/*
cp /vagrant/setup/nginx-conf/nuxt101 /etc/nginx/sites-available/nuxt101
ln -s /etc/nginx/sites-available/nuxt101 /etc/nginx/sites-enabled/nuxt101

# Setup SSL cert - for DEV/TEST only. do not deploy to PROD
mkdir -p /etc/nginx/ssl/
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout "/etc/nginx/ssl/$APP_NAME.key" -out "/etc/nginx/ssl/$APP_NAME.crt" -subj "/C=US/ST=VA/L=Arlington/O=SimplyRFID/OU=Development/CN=$COMMON_NAME"

# Restart nginx
service nginx restart
