# challenge-back-soil

Backend simples feito com Node.js, Knex, Typescript e Postgress


Esse projeto exercitei o uso da arquitetura limpa, separando em camadas as entidades, casos de uso e os elementos externos.

Nesse projeto, duas entidades foram criadas: Usuário e refeições. Estão armazenados em Entities.

A configuração do banco de dados pelo kinex está na pasta database, enquanto suas classes manipulações estão repositories

A integração com o Heroku foi concluída. Uma boa implmentação seria adição do teste automatico que ajudaria remover o estato de <i>pendding</i> ao fazer o deploy no heroku.
