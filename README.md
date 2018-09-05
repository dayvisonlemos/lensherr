# X-LENSHERR
### Ambiente de desenvolvimento
- node v10.3.0
- npm 6.1.0
### Executando a api
```sh
# Baixar dependências
$ npm i

# Rodar Testes unitários e testes de integração
$ npm test

# Executar a api
$ npm start
```
**Alternativamente é possível executar a api via docker**
```sh
docker build -t xlensher . &&  docker run -p 3000:3000 -d xlensher
```
### Testar api
- Dois endpoints são expostos pela api:  `POST /mutant` e `GET /stats`
```ssh
# Verificar se uma sequência de DNA pertence a um mutante ou um humano
curl -H "Content-Type: application/json" \
--request POST \
-d '{ "dna":["ATGCGG","CAGTGT","TCTAAA","TGAAGA","GACCCC","TCCCCA"] }' \
http://127.0.0.1:3000/mutant
```

```ssh
# Verificar as estatísticas da api
curl --request GET http://127.0.0.1:3000/stats
# retorno: {"count_mutant_dna": 40,"count_human_dna": 100,"ratio": 0.4}
```
### Integração contínua
Foi configurada o travis-ci para automação do build do projeto. A cada push para o repositório, as seguintes ações são executas:
  - Execução dos testes de integração e unitário
  - Execução do coverage
  - Execução da verificação de formatação do projeto
  - Deploy automático para o servidor de produção
### Servidor de produção
O travis-ci faz o deploy para o servidor heroku automáticamente caso o build tenha o status `passed`.
- https://xlensherr.herokuapp.com/stats
