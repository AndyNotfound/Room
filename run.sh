#!/bin/sh
clear

echo "Hi there!"

#Detecting the package manager then installing python3 and pip
packagesNeeded='npm'
if [ -x "$(command -v apk)" ];       then sudo apk add --no-cache $packagesNeeded
elif [ -x "$(command -v apt-get)" ]; then sudo apt-get install $packagesNeeded
elif [ -x "$(command -v dnf)" ];     then sudo dnf install $packagesNeeded
elif [ -x "$(command -v zypper)" ];  then sudo zypper install $packagesNeeded
else echo "FAILED TO INSTALL PACKAGE: Package manager not found. You must manually install: $packagesNeeded">&2; fi

clear

#Installing all the requirements
npm i
clear

#Notifying the user
echo ""
echo "All set!"
echo "Type npm start to start the project locally"