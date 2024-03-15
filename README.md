Proyecto realizado con next.js
Se utiliza https://ui.shadcn.com/ para componente armados
Se utilizo https://kinde.com/ para autentificacion de las cuentas

Se crea una base en supabase
y se conecta con prisma:
En prisma se ejecutan los siguientes comandos en este orden:
npm i -D prisma
npm i @prisma/client
npx prisma init
luego se pone la variable de entorno correspondiente a la db
se crean los modelos que van a ser futuras tablas

npx prisma db push
