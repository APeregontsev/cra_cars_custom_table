import "./style.css";
import { useState } from "react";
import Select from "../../ui/Select/Select";
import ModalWindow from "../../ui/ModalWindow/ModalWindow";
import ConfirmPlate from "../../ui/ConfirmPlate/ConfirmPlate";
import EditBlock from "../EditBlock/EditBlock";

const Table = ({ data, dispatch }) => {
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [currentEntry, setCurrentEntry] = useState(null);

  function confirmDeteting() {
    dispatch({ type: "DELETE_CAR", id: currentEntry.id });
    setShowModalConfirm(false);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Company</th>
            <th>Model</th>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((entry) => {
            return (
              <tr key={entry.id}>
                <td className="cell-center">{entry.id}</td>
                <td>{entry.car}</td>
                <td>{entry.car_model}</td>
                <td>{entry.car_vin}</td>
                <td>{entry.car_color}</td>
                <td>{entry.car_model_year}</td>
                <td className="cell-right">{entry.price}</td>
                <td className="cell-center">{entry.availability && <span>&#x2705;</span>}</td>
                <td>
                  <Select
                    action={(actionType) => {
                      setCurrentEntry(entry);

                      if (actionType === "delete") {
                        setShowModalConfirm(true);
                      } else {
                        setShowModalEdit(true);
                      }
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showModalConfirm && (
        <ModalWindow action={setShowModalConfirm}>
          <ConfirmPlate actionCancel={setShowModalConfirm} actionConfirm={confirmDeteting} />
        </ModalWindow>
      )}

      {showModalEdit && (
        <ModalWindow action={setShowModalEdit}>
          <EditBlock
            modalCancel={setShowModalEdit}
            currentEntry={currentEntry}
            type="edit"
            dispatch={dispatch}
          >
            Edit car
          </EditBlock>{" "}
        </ModalWindow>
      )}
    </>
  );
};

export default Table;

// Experimental feature - under development

function insertMark(stringToMark, searchQuery) {
  if (!searchQuery) return stringToMark;

  const foundPosition = stringToMark.search(searchQuery);

  return (
    stringToMark.slice(0, foundPosition) +
    "<mark>" +
    stringToMark.slice(foundPosition, foundPosition + searchQuery.length) +
    "</mark>" +
    stringToMark.slice(foundPosition + searchQuery.length)
  );
}
