import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid"; 
import { IBooks } from "../../types";
import { FormContainer, Input, Button } from "./style";

interface FormProps {
  createNewPost: (post: IBooks) => void;
}

export function Form({ createNewPost }: FormProps) {
  const [formData, setFormData] = useState<IBooks>({
    id: "",
    title: "",
    author: "",
    category: "",
    registrationDate: "",
    yearPublication: "",
    gender: "",
    description: "",
  });

  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const currentYear = new Date().getFullYear();
    const yearPublicationNumber = parseInt(formData.yearPublication);

    // Validando ano de publicação
    if (isNaN(yearPublicationNumber) || yearPublicationNumber > currentYear) {
      alert("O ano de publicação não pode ser no futuro.");
      return;
    }

    setIsSubmiting(true);

    // simulando uma chamada API
    setTimeout(() => {
      // Gerando um id unico
      const formDataWithId = { ...formData, id: uuidv4() };
      createNewPost(formDataWithId);

      // Reset do formulário
      setFormData({
        id: "",
        title: "",
        author: "",
        category: "",
        registrationDate: "",
        yearPublication: "",
        gender: "",
        description: "",
      });
      setIsSubmiting(false);
    }, 2000);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // desestruturação para o value do formulário
  //const { author, category, date, title } = formData;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Título"
        name="title"
        onChange={handleInputChange}
        value={formData.title}
        required
      />

      <Input
        type="text"
        placeholder="Autor"
        name="author"
        onChange={handleInputChange}
        value={formData.author}
        required
      />

      <Input
        type="text"
        placeholder="Categoria"
        name="category"
        onChange={handleInputChange}
        value={formData.category}
        required
      />

      <Input
        type="text"
        placeholder="Ano de Publicação"
        name="yearPublication"
        onChange={handleInputChange}
        value={formData.yearPublication}
        required
      />

      <Input
        type="text"
        placeholder="Data de Cadastro"
        name="registrationDate"
        onChange={handleInputChange}
        value={formData.registrationDate}
        required
      />

      <Input
        type="text"
        placeholder="Gênero"
        name="gender"
        onChange={handleInputChange}
        value={formData.gender}
        required
      />

      <Input
        type="text"
        placeholder="Descrição"
        name="description"
        onChange={handleInputChange}
        value={formData.description}
        required
      />

      <Button variant="primary" disabled={isSubmiting}>
        {isSubmiting ? "Cadastrando...." : "Cadastrar Livro"}
      </Button>
    </FormContainer>
  );
}


