const Footer = () => {
  return (
    <div className="w-full px-5 text-white bg-black h-fit">
      {/* //* links */}
      <div className="w-full flex justify-start items-start gap-25 text-xl pb-20">
        <div>
          <h4>About Us</h4>
          <h4 className="my-5">Support</h4>
          <h4 className="my-5">Privacy Policy</h4>
          <h4>Terms & Conditions</h4>
        </div>
        <div>
          <h4>Discord</h4>
          <h4 className="my-5">Pricing & Refund</h4>
        </div>
      </div>

      {/* //* brand name */}
      <h1 className="text-right text-[9rem] pb-1">DataSquare</h1>
    </div>
  );
};

export default Footer;
