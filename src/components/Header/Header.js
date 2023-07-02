import "./style.css";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { useState } from "react";
import ModalWindow from "../../ui/ModalWindow/ModalWindow";
import EditBlock from "../EditBlock/EditBlock";

const Header = ({ searchQuery, setSearchQuery, dispatch }) => {
  const [showModalAdd, setShowModalAdd] = useState(false);

  function addButtonHandler() {
    setShowModalAdd(true);
  }

  return (
    <div className="header-wrapper">
      <div className="header-content">
        <div className="search-wrapper">
          <Input
            type={"text"}
            value={searchQuery}
            placeholder={"Instant search"}
            action={(e) => setSearchQuery(e.target.value)}
          />

          <Button type={"clear"} action={() => setSearchQuery("")}>
            Clear
          </Button>
        </div>

        <Button type={"add"} action={addButtonHandler}>
          Add car
        </Button>
      </div>
      {showModalAdd && (
        <ModalWindow action={setShowModalAdd}>
          <EditBlock modalCancel={setShowModalAdd} dispatch={dispatch}>
            Add new car
          </EditBlock>{" "}
        </ModalWindow>
      )}
    </div>
  );
};

export default Header;
