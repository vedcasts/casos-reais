# Casos Reais

## File Upload

### Instruções de instalação

1. Clonar este repositório e fazer checkout no branch `file-upload`

2. No Terminal, estando na pasta raiz do projeto, rodar:
    * `npm install` para instalação das dependências
    * `npm run dev` para rodar o web server

3. Acessar no browser http://localhost:8080

### Web service

Há uma aplicação Laravel num repositório separado. A aplicação é responsável por receber os arquivos e salva-los no file system.

O repositório é: https://github.com/vedcasts/webservice-file-upload

Após configurar a app Laravel, atualizar neste projeto o arquivo `/src/components/file-upload/filer-setup.js` trocando a URL `http://vedcasts-file-upload.app/api/files/upload` por sua própria URL.
