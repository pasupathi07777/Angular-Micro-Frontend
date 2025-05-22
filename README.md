

npm install @angular-architects/module-federation -D
ng add @angular-architects/module-federation --project shell --port 4200 --type host
ng add @angular-architects/module-federation --project mfe1 --port 4201 --type remote
ng add @angular-architects/module-federation --project mfe2 --port 4202 --type remote

To run 
npm run start:all 
