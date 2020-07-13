#!/bin/bash

# Update software packages
apt update -y && apt upgrade -y

# Install essentials
apt install -y vim git htop debconf-utils

# Create link /var/nervMCP softlink
ln -s /vagrant /var/webui

apt install -y nginx
