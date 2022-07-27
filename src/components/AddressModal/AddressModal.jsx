import { useState } from "react";
export const AddressModal = ({
  userAddress,
  setShowModal,
  showModal,
  addDummyAddress,
  addressHandler,
  changeHandler,
  toggleBtn,
}) => {
  const { name, mobile, pincode, address, city, state } = userAddress;
  const [closeModal, setCloseModal] = useState(true);
  return (
    <>
      {showModal && (
        <div className="modal-wrapper">
          <form className="address-form" onSubmit={addressHandler}>
            <label className="label" htmlFor="">
              Name
              <input
                className="user-input"
                name="name"
                value={name}
                type="text"
                placeholder="Name"
                required
                onChange={changeHandler}
              />
            </label>

            <label className="label" htmlFor="">
              Mobile Number
              <input
                className="user-input"
                name="mobile"
                value={mobile}
                type="number"
                placeholder="Mobile Number"
                required
                onChange={changeHandler}
              />
            </label>
            <label className="label" htmlFor="">
              Address
              <input
                name="address"
                value={address}
                className="user-input"
                type="text"
                placeholder="Address (H.NO, Building,Street,Area"
                required
                onChange={changeHandler}
              />
            </label>
            <label className="label" htmlFor="">
              City/District/Town
              <input
                name="city"
                value={city}
                type="text"
                className="user-input"
                placeholder="City/District/Town"
                required
                onChange={changeHandler}
              />
            </label>
            <label className="label" htmlFor="">
              State
              <input
                className="user-input"
                name="state"
                value={state}
                type="text"
                placeholder="State"
                required
                onChange={changeHandler}
              />
            </label>
            <label className="label" htmlFor="">
              Pincode
              <input
                className="user-input"
                name="pincode"
                value={pincode}
                type="number"
                placeholder="Pincode"
                required
                onChange={changeHandler}
              />
            </label>
            <div>
              {toggleBtn ? (
                <button className="btn-default" onClick={addressHandler}>
                  Save
                </button>
              ) : (
                <button className="btn-default" onClick={addressHandler}>
                  Update
                </button>
              )}

              <button
                className="btn-default"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
            <button
              className="btn-default btn-dark cart-btn"
              onClick={addDummyAddress}
            >
              Add Dummy Address
            </button>
          </form>
        </div>
      )}
    </>
  );
};
