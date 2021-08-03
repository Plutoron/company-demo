git add .
git commit -m 'deploy'
git push origin dev
rm -rf dist
npm run build
git checkout main
rm -rf `ls  |egrep -v '(dist|node_modules)'`   
mv dist/* ./
git add .
git commit -m 'publish ++'
git push origin main
git checkout dev