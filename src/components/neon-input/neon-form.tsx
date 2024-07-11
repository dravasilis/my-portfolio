import "./neon-form.css";

function NeonForm() {
  return (
    <div className="login-box neon-sign-purple">
      <h2>Form</h2>
      <form className=" flex flex-col gap-4">
        <div className="user-box   ">
          <label className="text-glow-blue text-[#00e1ff]">Email</label>
          <input type="text" className="neon-sign-blue rounded-xl p-2"></input>
        </div>
        <div className="user-box ">
          <label className="text-glow-blue text-[#00e1ff]">Message</label>
          <textarea className=" neon-sign-blue rounded-xl p-2"></textarea>
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
