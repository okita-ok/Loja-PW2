echo "$NODE_ENV"
if [$NODE_ENV = "production"]; then
    echo "API inicializada em ambiente de producao"
    npm start
else
    echo "API inicializada em ambiente de desenvolvimento"
    npm run dev
fi