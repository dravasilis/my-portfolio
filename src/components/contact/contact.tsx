import NeonForm from "../neon-input/neon-form";
import NeonInput from "../neon-input/neon-form";
import "./contact.css";
interface contactProps {}

function Contact() {
  return (
    <div className=" flex flex-col gap-12">
      <span className="text-5xl text-teal-200 font-bold neon-sign-purple w-max rounded-xl p-4">
        {" "}
        &lt; Contact / &gt;
      </span>

      <div className="removePadding flex w-full items-center justify-center">
        <NeonForm />
      </div>
    </div>
  );
}
export default Contact;
