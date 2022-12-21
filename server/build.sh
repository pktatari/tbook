rm -rf view/*
cd ../client && npm run build
cp -r build/* ../server/view/
cd ../server
npm run start