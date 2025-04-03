import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    Zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally Printing the details of the Form data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">FirstName</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={changeHandler}
          placeholder="Arun"
          value={formData.firstName}
          className="outline"
        />

        <br />
        <br />

        <label htmlFor="lastName">LastName</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={changeHandler}
          placeholder="Bavimane"
          value={formData.lastName}
          className="outline"
        />

        <br />
        <br />

        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          onChange={changeHandler}
          placeholder="abc@gmail.com"
          value={formData.email}
          className="outline"
        />

        <br />
        <br />

        <label htmlFor="country">Country </label>
        <br />
        <select
          name="country"
          id="country"
          onChange={changeHandler}
          value={formData.country}
          className="outline"

        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>


        <br />
        <br />

        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          onChange={changeHandler}
          placeholder="1234 main st"
          value={formData.streetAddress}
          className="outline"
        />

        <br />
        <br />

        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          onChange={changeHandler}
          placeholder="Shivamogga"
          value={formData.city}
          className="outline"
        />

        <br />
        <br />

        <label htmlFor="state">State / Provience</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          onChange={changeHandler}
          placeholder="Karnataka"
          value={formData.state}
          className="outline"
        />

        <br />
        <br />

        <label htmlFor="Zip">Zip / PostalCode</label>
        <br />
        <input
          type="text"
          name="Zip"
          id="Zip"
          onChange={changeHandler}
          placeholder="577223"
          value={formData.Zip}
          className="outline"
        />

        <br />
        <br />

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones post a comment on posting</p>
            </div>
          </div>

          <br />



          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidates applies for a job</p>
            </div>
          </div>

          <br />



          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when candidates accepts or rejects an offers </p>
            </div>
          </div>
        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend>Push Notifications</legend>
          <p>this delivered via SMS to your mobile phone </p>

          <br />

          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor="pushEverything">EveryThing</label>

          <br />

          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as Email"
            onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Same as Email</label>

          <br />

          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notifications</label>
        </fieldset>

        <button
          className="bg-blue-500 text-white rounded-md py-2 px-4 font-bold"
        >Save</button>

      </form>
    </div>
  );
}

export default App;
