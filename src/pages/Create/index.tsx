import { useState } from "react";
import { SubTitle, BookList, Title, Input, Div } from "./styles";

import { IBooks } from "../../types";
import { Form } from "../../components/Form";

import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root");

export function Create() {
  const [books, setPosts] = useState<IBooks[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<IBooks | null>(null);
  const [serchItem, setserchItem] = useState(""); 

  function handleCreateNewPost(book: IBooks) {
    setPosts((prevState) => [...prevState, book]);
  }

  function handleDeletePost(id: string) {
    const isConfirmed = window.confirm(
      "Tem certeza que deseja excluir este livro?"
    );

    if (isConfirmed) {
      setPosts((prevState) => prevState.filter((book) => book.id !== id));
    }
  }

  function handleEditPost(book: IBooks) {
    setSelectedBook(book);
    setModalIsOpen(true);
  }

  function handleSaveEditedBook(updatedBook: IBooks) {
    setPosts((prevState) =>
      prevState.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    setModalIsOpen(false);
  }

  // Função que fecha o modal
  function closeModal() {
    setModalIsOpen(false);
    setSelectedBook(null);
  }

  // Função para lidar com a alteração no campo de pesquisa
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setserchItem(event.target.value);
  }

  // Filtrar os livros com base no termo de pesquisa (título ou autor)
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(serchItem.toLowerCase()) ||
      book.author.toLowerCase().includes(serchItem.toLowerCase())
  );

  // Aplicar cores diferentes para cada livro reenderizado.
  function generateColorCard(index: number) {
    const colors = ["#e3f2fd", "#e8f5e9", "#fff3e0", "#f3e5f5", "#fffde7"];
    return colors[index % colors.length];
  }

  return (
    <>
      <Title>Cadastrar Livros</Title>
      <Form createNewPost={handleCreateNewPost} />

      <SubTitle>Biblioteca Encantada</SubTitle>

      <Div>
        <Input
          type="text"
          placeholder="Buscar por título ou autor..."
          value={serchItem}
          onChange={handleSearchChange}
        />
      </Div>

      <BookList>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={book.id}
              style={{
                backgroundColor: generateColorCard(index),
              }}
            >
              <h3>{book.title} 📚</h3>
              <p>Autor: {book.author}</p>
              <p>Categoria: {book.category}</p>
              <p>Ano de Publicação: {book.yearPublication}</p>
              <p>Data de Cadastro: {book.registrationDate}</p>
              <p>Gênero: {book.gender}</p>
              <p>Descrição: {book.description}</p>
              <p>ID: {book.id}</p>

              <button
                className="deleteButton"
                onClick={() => handleDeletePost(book.id)}
              >
                Deletar
              </button>
              <button
                className="editButton"
                onClick={() => handleEditPost(book)}
              >
                Editar
              </button>
            </div>
          ))
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </BookList>

      {modalIsOpen && selectedBook && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <EditModal
            book={selectedBook}
            onClose={closeModal}
            onSave={handleSaveEditedBook}
          />
        </Modal>
      )}
    </>
  );

  // Tipo para os campos do formulário de edição
  interface IEditModalProps {
    book: IBooks;
    onClose: () => void;
    onSave: (updatedBook: IBooks) => void;
  }

  function EditModal({ book, onClose, onSave }: IEditModalProps) {
    const [editedBook, setEditedBook] = useState<IBooks>({ ...book });

    function handleChange(
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
      const { name, value } = event.target;
      setEditedBook((prevBook) => ({
        ...prevBook,
        [name]: value,
      }));
    }

    function handleSave() {
      const currentYear = new Date().getFullYear();
      const year = parseInt(editedBook.yearPublication, 10);

      if (year > currentYear) {
        alert("O ano de publicação não pode ser no futuro.");
        return;
      }

      onSave(editedBook);
      onClose();
    }

    // Modal para editar os livros
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Editar Livro</h2>
          <input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleChange}
            placeholder="Título"
          />
          <input
            type="text"
            name="author"
            value={editedBook.author}
            onChange={handleChange}
            placeholder="Autor"
          />
          <input
            type="text"
            name="category"
            value={editedBook.category}
            onChange={handleChange}
            placeholder="Categoria"
          />
          <input
            type="number"
            name="yearPublication"
            value={editedBook.yearPublication}
            onChange={handleChange}
            placeholder="Ano de Publicação"
          />
          <input
            type="text"
            name="registrationDate"
            value={editedBook.registrationDate}
            onChange={handleChange}
            placeholder="Data de Cadastro"
            disabled
          />
          <input
            type="text"
            name="gender"
            value={editedBook.gender}
            onChange={handleChange}
            placeholder="Gênero"
          />
          <textarea
            name="description"
            value={editedBook.description}
            onChange={handleChange}
            placeholder="Descrição"
          />

          <input
            name="id"
            value={editedBook.id}
            onChange={handleChange}
            disabled
          />

          <button className="editButton" onClick={handleSave}>
            Salvar
          </button>

          <button className="editButton cancel" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    );
  }
}
