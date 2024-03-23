if ["$NODE_ENV" = "production"]; then
    echo "Frontend inicializada em ambiente de producao"
    npm run build
    npm start
else
    echo "Frontend inicializada em ambiente de desenvolvimento"
    npm run dev
fi