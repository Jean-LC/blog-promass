import { ChangeEvent, FormEvent, useState } from "react";
import { BlogEntry, SaveBlogEntry } from "../../../../interface";
import "./newEntry.css";
import InputEntry from "./InputEntry";
import axios from "axios";

interface Props {
  close: () => void;
  updateEntries: (entry: BlogEntry) => void;
}

export default function NewEntry({ close, updateEntries }: Props) {
  const [data, setData] = useState<SaveBlogEntry>({
    title: "",
    author: "",
    createdAt: new Date().toLocaleDateString("es-MX", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }),
    content: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios.post(
      "https://65b1952ed16d31d11bdf0ef1.mockapi.io/blog/blogEntries",
      data
    );
    updateEntries(response.data);
    close();
  };

  return (
    <div className="background-dialog">
      <div className="modal-div">
        <form onSubmit={handleSubmit}>
          <InputEntry
            label={"Título"}
            handleChange={handleChange}
            name={"title"}
          />
          <InputEntry
            label={"Autor"}
            handleChange={handleChange}
            name={"author"}
          />
          <InputEntry
            label={"Contenido"}
            handleChange={handleChange}
            name={"content"}
          />

          <div className="buttons-div">
            <button className="cancel-btn" type="button" onClick={close}>
              cancelar
            </button>
            <button className="submit-btn" type="submit">
              aceptar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
