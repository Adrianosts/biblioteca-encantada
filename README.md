# Biblioteca Encantada

Link do projeto - https://biblioteca-encantada.vercel.app/

![Captura de tela 2024-10-26 120730](https://github.com/user-attachments/assets/82874bb4-160c-4ab5-9118-0120cf786870)

Esse código é um componente React que gerencia um CRUD (Create, Read, Update, Delete) de livros com a funcionalidade de pesquisa, edição e exclusão. Aqui está um resumo passo a passo do que ele faz:

### Importações:
- Importa diversos elementos e funções necessárias, como hooks do React (useState), componentes de estilo e um modal para editar livros.


### Estados do Componente:
- books: Armazena a lista de livros cadastrados.
- modalIsOpen: Controla a abertura e fechamento do modal de edição.
- selectedBook: Armazena o livro selecionado para edição.
- serchItem: Guarda o termo de pesquisa digitado pelo usuário


### Funções para Gerenciamento dos Livros:
- handleCreateNewPost: Adiciona um novo livro à lista.
- handleDeletePost: Remove um livro da lista após a confirmação do usuário.
- handleEditPost: Abre o modal com as informações do livro para edição.
- handleSaveEditedBook: Salva as alterações feitas no livro no modal e fecha o modal.
- closeModal: Fecha o modal de edição e limpa o livro selecionado.
- handleSearchChange: Atualiza o estado da pesquisa conforme o usuário digita.


### Filtragem e Renderização de Livros:
- filteredBooks: Filtra os livros com base no título ou autor que correspondem ao termo de busca.
- generateColorCard: Aplica cores diferentes a cada livro renderizado.


### Renderização da lista de livros:
- Os livros são exibidos em uma lista, cada um com suas informações, e dois botões: um para excluir e outro para editar o livro.
- Se não houver livros correspondentes à busca, exibe "Nenhum livro encontrado."


### Modal de Edição (EditModal):
- Se o modal estiver aberto (modalIsOpen), ele exibe um formulário para editar o livro selecionado.
- O modal inclui campos para alterar título, autor, categoria, ano de publicação, gênero e descrição.
- Ao salvar, o código verifica se o ano de publicação é válido (não pode ser no futuro), e se tudo estiver correto, ele atualiza o livro.
- Inclui botões para salvar as alterações ou cancelar a edição.


### Fechamento do modal:
- O modal pode ser fechado sem salvar as alterações, retornando ao estado anterior.


O código combina o uso de estados do React para gerenciar a interface, eventos para manipular a lista de livros, e a biblioteca <i>Modal</i> para facilitar a edição dos itens.
