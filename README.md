# precificacao

Sumario:
  API para retornar o valor do metro quadrado
 
 Descrição
  A API de precificação serve para retornar um valor para servir de base para realizar um cálculo de preço de um determinado imóvel a partir de quantos metros quadrados ele tem.
  
  Estrutura
    
    A estrutura do projeto contém o seguinte fluxo
      
      - Dockerfile:
        Arquivo com as configurações do container Docker para ser executado
      
      - .dockerignore:
        Arquivo para ignorar jogar para o container do Docker a pasta node_modules
      
      - Pasta Test:
        Pasta contém os arquivos de testes unitários utilizando o framework Mocha
      
      -Pasta Bin:
        Pasta que contém o arquivo index.js para inicializar o serviço da API
       
       - SRC:
        pasta contém todo o código fonte da API a partir das subpastas e arquivos
          
          - Controllers
            Pasta contém todos os arquivos controladores de cada end-point da API
          
          - routes
            Pasta contém todos os arquivos de rotas da API, e com os comentários do Swagger para geração de documentos
          
          - Utils
            Pasta que contém o arquivo utils.js, funções públicas utilizado em toda API
          
          - app.js
            Arquivo responsável por instanciar todas as configurações da API, e instanciar as rotas da API
            
  Scripts de execução
  
    - npm start: Inicializa a API com o uso do framework nodemon para o desenvolvimento
    
    - docker build -t precificacao/dockernode . : Cria, e faz o build da API em um container no docker
    
    - docker run -p 3100:3100 -d marcelo2g/dockernode : executa o container no docker
    
    - docker-compose up: Comando que executa o container, e atualiza o código da máquina local para o container docker. docker-compose
    
    - npm test: comando para executar os testes unitários da API
  
  End-point
  
    - http://{host}:{porta}/
      Ao ser chamado o end-point, a API já retorna o preço do metro quadrado
     
     - http://{host}:{porta}/api/doc/
      Ao ser chamado o end-point, é retornado a documentação da API
   
    
    
