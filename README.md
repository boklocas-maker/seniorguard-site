Painel web do projeto Senior Guard, uma solução para aumentar a segurança e facilitar o cuidado de pessoas idosas.

O Senior Guard possui um sistema web, um aplicativo e um dispositivo vestível em formato de óculos. O dispositivo utiliza Arduino/ESP32 e sensores para coletar informações e identificar possíveis situações de risco.

Arduino que sera incrementado: Os sensores sao:

    MAX30102: monitora batimentos cardíacos e oxigenação do sangue.

    MPU6050: identifica movimentos, inclinações e possíveis quedas.

    NEO-M8N: fornece a localização por GPS.

    APDS-9960: identifica proximidade e movimentos.

    VL53L1X: mede a distância de objetos.

    ESP32-CAM: captura imagens do ambiente.

    ESP32 recebe as informações dos sensores e envia os dados para serem utilizados pelo sistema.
O objetivo do Senior Guard é facilitar o acompanhamento de pessoas idosas, organizar informações importantes e ajudar o cuidador a identificar situações de risco.

O sistema permite acompanhar medicamentos, lembretes, dispositivos e informações dos sensores.

Autenticação

Cadastro, login e logout de cuidadores.

Medicamentos

Permite cadastrar medicamentos, horários e lembretes.

Sobre

Apresenta informações sobre o projeto, os óculos, os sensores e as tecnologias utilizadas.

Navegação

As principais páginas são:

/login: login.

/cadastro: cadastro.

/principal: página inicial - cadastro dos lembretes e dos remedios pro backend, para o idoso acessar no mobile

/principal/sobre: informações do projeto.

Tecnologias utilizadas

React, TypeScript, Vite, React Router DOM, Firebase Authentication, Cloud Firestore, React Hook Form, Zod, React Icons e CSS Modules.

Firebase

O Firebase é utilizado para autenticação e armazenamento dos dados.

O Firebase Authentication controla os usuários.

O Cloud Firestore armazena os dados dos cuidadores, idosos, medicamentos, lembretes e dispositivos.

O painel web possui autenticação, cadastro de medicamentos e lembretes.

A integração completa entre o painel, aplicativo, óculos, ESP32 e sensores ainda está em desenvolvimento.

Equipe

Arthur Conteiro: pesquisa e documentação.

Daniel Santos: banco de dados e hardware.

Davi Tomaz: desenvolvimento de telas.

Caua Palatin: desenvolvimento do projeto.

Contexto acadêmico

Projeto desenvolvido pela turma 3DSAA da Etec de Hortolândia.