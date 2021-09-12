rm -rf company*
npm run build
mv dist company
tar -czvf company.tar.gz company
scp ./company.tar.gz root@47.104.11.142:/home
# Lyz@web123