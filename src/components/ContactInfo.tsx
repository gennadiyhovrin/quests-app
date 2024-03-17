const ContactInfo = () => (
    <div className="flex flex-col justify-between p-8  text-white">
      <div>
        <div className="mb-14">
          <h2 className="text-xl font-semibold">Address</h2>
          <p>Kyiv,</p>
          <p>Shevchenkivskyi, Khreshchatyk, 15</p>
        </div>
        <div className="mb-14">
          <h2 className="text-xl font-semibold">Operating hours</h2>
          <p>Daily, with 9:00 a.m. to 8:00 p.m</p>
        </div>
        <div className="mb-14">
          <h2 className="text-xl font-semibold">Phone</h2>
          <p>8 (800) 333-55-99</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">E-mail</h2>
          <p>info@escape-room.com</p>
        </div>
      </div>
    </div>
  );

export default ContactInfo;