A3 - Calculadora de Recalque

Website;
Linguagens HTML, CSS e TypeScript utilizando o Framework ANGULAR;
Cálculos necessários: a definir;

IDEIAS:
layout deve seguir com tema escuro (cores a definir);
Home deve conter cards com cálculos. O usuário deve selecionar qual cálculo vai utilizar e seleciona-lo;
Irá aparecer uma tela com apenas o calculo selecionado, sua formula e legenda;
Usuário poderá preencher inputs com os valores que possui e será calculado pelo sistema comforme a formula selecionada.

PONTOS A SEREM LEVANTADOS:
Terá login?
Por termos pouco tempo, podemos utilizar o armazenamento temporario de dados no proprio navegador ao inves de utilizar um banco de dados estruturado
Como será feito a hospedagem? (sugestão: github pages - aberto a outras ideias)


# Calculadora de Sistemas Fluidomecânicos

> Projeto acadêmico da **Universidade São Judas Tadeu**, desenvolvido para a unidade curricular de **Sistemas Fluidomecânicos** utilizando o framework **Angular**.

Esse projeto é uma ferramenta de código aberto que aplica conceitos de desenvolvimento web na resolução de problemas de engenharia. O objetivo é criar uma calculadora funcional e intuitiva para auxiliar nos estudos de sistemas hidráulicos e de bombeamento, simplificando o processo de cálculo de parâmetros essenciais como perda de carga, potência de bomba e NPSH.

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como trabalho prático para a disciplina de Sistemas Fluidomecânicos na **Universidade São Judas Tadeu**. A principal motivação é utilizar os conhecimentos de programação para construir uma interface que sirva como uma ferramenta de apoio para estudantes e profissionais da área, traduzindo as complexas fórmulas da mecânica dos fluidos em uma interface interativa e amigável.

## ✨ Funcionalidades Principais

  **Painel de Cálculos:** Acesso rápido a todas as calculadoras disponíveis.
  **Interface Interativa:** Visualize a fórmula, suas legendas e insira os dados em um só lugar.
  **Design Moderno:** Modo escuro para conforto visual e um layout limpo.
  **Cálculos Essenciais:**
  * Vazão e Velocidade do Fluido
  * Número de Reynolds
  * Fator de Atrito (Equação de Swamee-Jain)
  * Perda de Carga (Equação de Darcy-Weisbach)
  * Carga Manométrica (Altura da Bomba)
  * Potência Requerida pela Bomba
  * Análise de Cavitação (NPSH Disponível)

## 🛠️ Tecnologias Utilizadas

  **Angular:** O principal framework para a construção da interface e gerenciamento dos componentes.
  **TypeScript:** A linguagem base para o desenvolvimento com Angular, garantindo um código mais robusto e tipado.
  **HTML & SCSS:** Para a estruturação e estilização da aplicação, seguindo as melhores práticas de componentização.

## 💻 Interface do Projeto

### Tela Principal (Dashboard)

A tela inicial oferece um menu visual com todos os tipos de cálculo que podem ser realizados.

### Tela de Cálculo (Exemplo: Perda de Carga)

Cada calculadora possui uma página dedicada, com a fórmula em destaque, a legenda de cada variável e os campos para entrada de dados.

## 🚀 Guia de Instalação e Execução Local

Para baixar e executar este projeto em seu computador, siga os passos detalhados abaixo.

### **Pré-requisitos**

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas:

  * **Node.js:** Essencial para executar o ambiente JavaScript. Recomenda-se a versão LTS. [Faça o download aqui](https://nodejs.org/).
  * **Angular CLI:** A ferramenta de linha de comando oficial do Angular. Para instalar, abra seu terminal e execute:
    ```bash
    npm install -g @angular/cli
    ```
  * **Git (Opcional):** Recomendado para clonar o repositório, mas você também pode baixar o código-fonte como um arquivo ZIP. [Faça o download aqui](https://git-scm.com/).

### **Passo a Passo**

#### **Passo 1: Obter o Código-Fonte**

Você tem duas opções para baixar os arquivos do projeto.

  * **Opção A (Recomendado, via Git)**
    No seu terminal, navegue até a pasta onde deseja salvar o projeto e execute o comando `git clone`. Lembre-se de substituir a URL pelo link do seu repositório.

    ```bash
    git clone https://github.com/MarianaNonato04/Settlement-calculator
    ```

  * **Opção B (Alternativa, Download direto)**

    1.  Acesse a página do repositório no GitHub.
    2.  Clique no botão verde **"\< \> Code"**.
    3.  Selecione a opção **"Download ZIP"**.
    4.  Extraia o arquivo `.zip` para uma pasta de sua preferência.

#### **Passo 2: Instalar as Dependências**

Após baixar os arquivos, você precisa instalar as bibliotecas que o projeto utiliza.

1.  Abra o terminal e navegue para dentro da pasta do projeto que você acabou de baixar:
    ```bash
    cd fluidflow-calc
    ```
2.  Execute o seguinte comando para que o `npm` (gerenciador de pacotes do Node.js) instale todas as dependências listadas no arquivo `package.json`:
    ```bash
    npm install
    ```
    *Este processo pode levar alguns minutos.*

#### **Passo 3: Executar a Aplicação**

Com tudo instalado, basta iniciar o servidor de desenvolvimento do Angular.

1.  Ainda no terminal, dentro da pasta do projeto, execute:
    ```bash
    ng serve
    ```
2.  Este comando irá compilar o projeto e iniciar um servidor local. Utilizando seu navegador padrão na página **`http://localhost:4200/`**.

Pronto\! A aplicação estará rodando em sua máquina. Qualquer alteração que você fizer nos arquivos do código-fonte fará com que a página recarregue automaticamente.

## 🗺️ Roadmap Futuro (Próximos Passos)

  - [ ] Desenvolver o back-end e a lógica de cálculo para todas as fórmulas.
  - [ ] Adicionar conversor de unidades integrado (ex: L/min para m³/s, pol para mm).

## 🤝 Como Contribuir

Como este é um projeto acadêmico, a colaboração é bem-vinda, especialmente na forma de sugestões e feedbacks. Se encontrar algum problema ou tiver uma ideia, sinta-se à vontade para abrir uma **Issue** no repositório do projeto.

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
