const Contacts = () => {
  return (<main className="section">
    <div className="container">
      <h1 className="title-1">Contacts</h1>

      <ul className="content-list">
        <li className="content-list__item">
          <h2 className="title-2">Location</h2>
          <p>Bishkek, Kyrgyzstan</p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Telegram / WhatsApp</h2>
          <p><a href="tel:+996702101012">+996 702 10-10-12</a></p>
        </li>
        <li className="content-list__item">
          <h2 className="title-2">Email</h2>
          <p><a href="mailto:chikabv1@gmail.com">chikabv1@gmail.com</a></p>
        </li>
      </ul>

    </div>
  </main> );
}

export default Contacts;
