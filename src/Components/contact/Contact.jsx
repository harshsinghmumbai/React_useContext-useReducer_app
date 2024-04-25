import Form_Validation from "./Form_Validation";

const Contact = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold mt-3 font-serif text-center mb-3">
          Feel free to contact
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.7118066709345!2d73.07701247374246!3d19.27785104560761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd8590ac6aff%3A0x9f410b6946168f3d!2sArihant%20City%201%20Wing-H2%2C%20Arihant%20City%201%2C%201%2C%20Bhadwad%2C%20Bhadwad%20Gaon%2C%20Villege%2C%20Bhiwandi%2C%20Maharashtra%20421302!5e1!3m2!1sen!2sin!4v1710171499100!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <Form_Validation />
      </div>
    </>
  );
};

export default Contact;
