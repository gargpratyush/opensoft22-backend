echo "Kill all the running PM2 actions"
pm2 kill

echo "Jump to app folder"
cd /home/ubuntu/AnyTimeFood

echo "Update app from Git"
git stash
git pull origin master

echo "Install app dependencies"
yarn

echo "Create build"
yarn build

echo "Run new PM2 action"
pm2 start dist/index.js

echo "Restart nginx"
sudo service nginx restart