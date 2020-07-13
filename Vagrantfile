# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/bionic64"

    # Network Settings
    config.vm.network "forwarded_port", guest: 80, host: 80
    config.vm.network "forwarded_port", guest: 443, host: 443

    # VirtualBox Provider Settings
    config.vm.provider "virtualbox" do |vb|
      vb.name = "nuxt101"
      vb.memory = "2048"
    end

    # Shell Provision Settings
    config.vm.provision :shell, :path => "setup/init.sh"

end
