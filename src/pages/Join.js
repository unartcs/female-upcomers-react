import React from "react";
import "./Join.css";
function Join() {
  return (
    <div className="join-us-wrapper">
      <div className="join-us-title">Bliv Medlem</div>
      <div className="join-form-container">
        <form
          className="join-form"
          action="https://formsubmit.co/unartcs@gmail.com"
          method="POST"
        >
          <fieldset className="join_form_field">
            <input
              type="text"
              name="name"
              id="Name"
              placeholder="Navn..."
              required
            />
            <input
              type="email"
              name="email"
              id="Email"
              placeholder="Email..."
              required
            />
          </fieldset>
          <fieldset>
            <select
              aria-label="label for the select"
              id="education"
              name="education"
            >
              <option value="" selected disabled hidden>
                Udannelse...
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </fieldset>
          <fieldset>
            <textarea
              id="Join_Reason"
              name="Join_Reason"
              placeholder="Motivation for at blive en del af netværket..."
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <textarea
              id="What_Do_You_Expact_From_FemaleUpcomers"
              name="What_Do_You_Expact_From_FemaleUpcomers"
              placeholder="Motivation for at blive en del af netværket..."
              required
            ></textarea>
          </fieldset>
          <fieldset className="submit-btn-field">
            <button className="join-form-submit-button" type="submit">
              Tilmeld dig
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Join;
