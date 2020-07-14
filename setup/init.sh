#!/bin/bash

# Update software packages
apt update -y && apt upgrade -y

# Install essentials
apt install -y vim git htop debconf-utils
apt install -y nginx

# Replace defualt nginx site
rm /etc/nginx/sites-enabled/* /etc/nginx/sites-available/*
cp /vagrant/setup/nginx-conf/nuxt101 /etc/nginx/sites-available/nuxt101
ln -s /etc/nginx/sites-available/nuxt101 /etc/nginx/sites-enabled/nuxt101

# Restart nginx
service nginx restart
