# Iron Community App (React Frontend)

Este é o código-fonte do frontend para o aplicativo Iron Community, desenvolvido com React e Vite.

## Funcionalidades Implementadas (Simuladas)

O aplicativo simula as seguintes funcionalidades descritas no documento original:

- Cadastro e Autenticação de Usuários
- Perfil de Usuário (Visualização e Edição)
- Feed de Postagens (Texto, Imagem, Vídeo - com upload simulado)
- Calendário e Eventos (Visualização e Inscrição simulada)
- Sistema de Mensagens Privadas (Simulado)
- Ranking e Níveis de Usuários (Baseado em pontos simulados)
- Conselhos (Visualização de grupos)
- Galeria de Fotos (Visualização e Upload simulado para Admin)
- Exercícios e Treinos (Compartilhamento simulado)
- Sistema de Tarefas e Pontuação (Visualização e Conclusão simulada)
- Dashboard de Administradores (Métricas e gestão simuladas)
- Controle de Visibilidade (Simulado via lógica de admin)
- Notificações (Simuladas)

**Importante:** Todas as interações com o backend (como salvar dados no Supabase, enviar emails, notificações push reais) são **simuladas** usando `localStorage`, estado local e `setTimeout` para imitar a comunicação de rede. Nenhuma conexão real com banco de dados ou API externa foi implementada.

## Estrutura do Projeto

O projeto segue a estrutura definida no arquivo `ARCHITECTURE.md`, organizada por funcionalidades (`src/features`) e tipos de arquivos (`src/components`, `src/contexts`, `src/layouts`, etc.).

- `src/`: Contém todo o código-fonte da aplicação.
- `src/features/`: Módulos específicos como Auth, Feed, Events, Admin, etc.
- `src/components/`: Componentes de UI genéricos e reutilizáveis.
- `src/contexts/`: Contextos React para gerenciamento de estado global (Auth, Notifications).
- `src/layouts/`: Layouts principais da aplicação (MainLayout, AuthLayout, AdminLayout).
- `src/pages/`: Componentes de página de nível superior (agrupados dentro de `features`).
- `src/routes/`: (Ainda a ser implementado) Configuração do roteamento com React Router.
- `src/services/`: (Simulado) Funções que imitariam chamadas de API.

## Tecnologias Utilizadas

- React 19
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM (necessário instalar e configurar para navegação completa)
- date-fns (para formatação de datas)
- ESLint + Prettier (para qualidade e formatação de código)

## Configuração e Execução

1.  **Pré-requisitos:** Node.js (versão 20+) e npm instalados.
2.  **Instalar Dependências:** Navegue até a pasta raiz do projeto (`iron-community-app`) e execute:
    ```bash
    npm install
    ```
3.  **Executar em Desenvolvimento:**
    ```bash
    npm run dev
    ```
    Isso iniciará o servidor de desenvolvimento Vite e abrirá o aplicativo no seu navegador (geralmente em `http://localhost:5173`).

4.  **Build para Produção:**
    ```bash
    npm run build
    ```
    Isso criará uma pasta `dist` com os arquivos otimizados para deploy.

## Próximos Passos (Sugestões)

- Implementar o roteamento completo usando `react-router-dom`.
- Substituir a simulação de backend por chamadas reais a uma API (ex: Supabase).
- Implementar testes unitários e de integração.
- Refinar a interface do usuário e a experiência do usuário.
- Adicionar funcionalidades mais complexas (edição/exclusão de posts, comentários reais, notificações push, etc.).
- Implementar completamente as funcionalidades de gerenciamento no painel administrativo.

