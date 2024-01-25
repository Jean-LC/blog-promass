import { ChangeEvent, useEffect, useState } from "react";
import CardsTemplate from "./Cards";
import { BlogEntry } from "../../../interface";
import NewEntry from "./NewEntry";
import "./sectionPosts.css";
import axios from "axios";
import InputSearch from "./InputSearch";

export default function SectionPosts() {
  const [entries, setEntries] = useState<BlogEntry[]>([]);
  const [openNewEntry, setOpenNewEntry] = useState(false);
  const [search, setSearch] = useState<{ str: string; data: BlogEntry[] }>({
    str: "",
    data: [],
  });
  const [load, setLoad] = useState(false);

  const updateEntries = (entry: BlogEntry) => {
    setEntries([entry, ...entries]);
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toLowerCase();
    setSearch({
      str: e.target.value,
      data: entries.filter(
        (entr) =>
          entr.author.toLowerCase().includes(val) ||
          entr.content.toLowerCase().includes(val) ||
          entr.title.toLowerCase().includes(val)
      ),
    });
  };

  useEffect(() => {
    setLoad(true);
    axios
      .get("https://65b1952ed16d31d11bdf0ef1.mockapi.io/blog/blogEntries")
      .then((res) => {
        setLoad(false);
        setEntries(res.data);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {load ? (
        <p>Cargando publicaciones</p>
      ) : (
        <>
          <div>
            <button className="buttonNew" onClick={() => setOpenNewEntry(true)}>
              Nueva entrada
            </button>
            <InputSearch
              label={"Buscar"}
              handleChange={handleChangeSearch}
              name={"search"}
            />
          </div>
          {openNewEntry && (
            <NewEntry
              close={() => setOpenNewEntry(false)}
              updateEntries={updateEntries}
            />
          )}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexFlow: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {search.str === ""
              ? entries.map((entry) => (
                  <CardsTemplate entry={entry} key={entry.id} />
                ))
              : search.data.map((entry) => (
                  <CardsTemplate entry={entry} key={entry.id} />
                ))}
          </div>
        </>
      )}
    </div>
  );
}
