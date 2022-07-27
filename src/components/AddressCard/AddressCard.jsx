import { Link } from "react-router-dom";
import { AddressModal, CartSummary } from "../../components";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const AddressCard = () => {
  const [checkedAddressSelector, setCheckedAddressSelector] = useState(false);
  const initialAddressData = {
    id: uuid(),
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    city: "",
    state: "",
  };
  const dummyAddressData = {
    id: uuid(),
    name: "Manpreet",
    mobile: 123456789,
    pincode: 12243,
    address: "Model Town",
    city: "Delhi",
    state: "Delhi",
  };

  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState(initialAddressData);
  const [printAddressData, setPrintAddressData] = useState([]);
  const [isEdit, setIsEdit] = useState("");
  const [toggleBtn, setToggleBtn] = useState(true);

  const addDummyAddress = (e) => {
    e.preventDefault();
    setAddress(dummyAddressData);
  };

  const addressHandler = (e) => {
    e.preventDefault();
    if (!toggleBtn) {
      const getEditedData = printAddressData.map((curEle) =>
        curEle.id === isEdit.id ? address : curEle
      );
      setPrintAddressData(getEditedData);
      setToggleBtn(true);
      setShowModal(false);
      setAddress("");
    } else {
      setPrintAddressData((prev) => [...prev, address]);
      setShowModal(false);
      setAddress("");
    }
  };

  const removeAddress = (id) => {
    const removedAddress = printAddressData.filter((data) => data.id !== id);
    setPrintAddressData(removedAddress);
  };

  const editAddress = (id) => {
    const editedAddress = printAddressData.find((curEle) => curEle.id === id);
    setAddress(editedAddress);
    setIsEdit(editedAddress);
    setToggleBtn(false);
    setShowModal(true);
  };

  const changeHandler = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="address-btn-container">
        <button
          className="btn-default btn-primary"
          onClick={() => setShowModal(true)}
        >
          Add New Address
        </button>
      </div>

      <div className="show-address-card">
        <>
          {printAddressData.map((userInfo) => {
            const { id, name, address, mobile, city, state, pincode } =
              userInfo;
            return (
              <div className="address-card-container">
                <input
                  type="radio"
                  name="radio-selector"
                  onChange={() =>
                    setCheckedAddressSelector(!checkedAddressSelector)
                  }
                  checked={checkedAddressSelector}
                />
                <h2>{name}</h2>
                <p>{address}</p>
                <p>Ph:{mobile}</p>
                <p>Pin:{pincode}</p>
                <p>
                  {city},{state}
                </p>
                <button className="address-btn" onClick={() => editAddress(id)}>
                  Edit
                </button>
                <button
                  className="address-btn"
                  onClick={() => removeAddress(id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </>
      </div>

      {showModal && (
        <AddressModal
          userAddress={address}
          changeHandler={changeHandler}
          showModal={showModal}
          setShowModal={setShowModal}
          addDummyAddress={addDummyAddress}
          addressHandler={addressHandler}
          toggleBtn={toggleBtn}
        />
      )}
      <CartSummary
        checkedAddressSelector={checkedAddressSelector}
        printAddressData={printAddressData}
      />
    </>
  );
};

export default AddressCard;
