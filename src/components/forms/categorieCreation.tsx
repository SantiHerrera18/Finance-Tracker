import { useState } from "react";
import Dropdown from "../CategorieSelect";
import { BalanceInput, CategorieForm } from "@/interfaces/forms";

const CategorieCreation = () => {
  const [submited, setSubmited] = useState(false);
  const [formData, setFormData] = useState<CategorieForm>({
    name: "",
    categorieType: BalanceInput.expense,
  });

  const handleSubmit = () => {
    setSubmited(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-8"
    >
      <input
        type="text"
        value={formData.name}
        onChange={handleChange}
        name="name"
      />
      <Dropdown getSelectionValue={() => {}} submited={submited} />
      <button type="button">Add categorie</button>
    </form>
  );
};

export default CategorieCreation;
