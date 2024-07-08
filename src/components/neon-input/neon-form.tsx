import "./neon-form.css";

function NeonForm() {
  return (
    <div className="login-box neon-sign-purple">
      <h2>Form</h2>
      <form>
        <div className="user-box">
          <input type="text"></input>
          <label>Email</label>
        </div>
        <div className="user-box">
          <textarea></textarea>
          <label>Message</label>
        </div>
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
}

export default NeonForm;
