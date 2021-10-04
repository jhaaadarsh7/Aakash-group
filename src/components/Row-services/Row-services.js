import logo from "../images/logo.jpg";
import "./Row-services.scss";
const contents = [
  {
    image: logo,
    heading: "Loan Investment",
    para: `We've devoted our careers to providing the holistic wealth
        management that helps clients reach their financial goals`,
  },
  {
    image: logo,
    heading: "Loan Investment",
    para: `We've devoted our careers to providing the holistic wealth
        management that helps clients reach their financial goals`,
  },
  {
    image: logo,
    heading: "Loan Investment",
    para: `We've devoted our careers to providing the holistic wealth
        management that helps clients reach their financial goals`,
  },
  {
    image: logo,
    heading: "Loan Investment",
    para: `We've devoted our careers to providing the holistic wealth
        management that helps clients reach their financial goals`,
  },
  {
    image: logo,
    heading: "Loan Investment",
    para: `We've devoted our careers to providing the holistic wealth
        management that helps clients reach their financial goals`,
  },
  {
    image: logo,
    heading: "Loan Investment",
    para: `We've devoted our careers to providing the holistic wealth
        management that helps clients reach their financial goals`,
  },
  {
    image: logo,
    heading: "Loan Investment",
    para: `We've devoted our careers to providing the holistic wealth
        management that helps clients reach their financial goals`,
  },
  {
    image: logo,
    heading: "Loan Investment",
    para: `We've devoted our careers to providing the holistic wealth
        management that helps clients reach their financial goals`,
  },
  {
    image: logo,
    heading: "Loan Investment",
    para: `We've devoted our careers to providing the holistic wealth
        management that helps clients reach their financial goals`,
  },
];

export default function RowServices() {
  return (
    <div className="container">
      <div className="row">
        <div className="themesflat-headings style-2 clearfix text-center">
          <h1>Our Ananlysis covers</h1>
          <p>
            We have knowledgeable practitioners including a Certified Financial
            Planner, a Certified Investment Management Analyst, an attorney, and
            a tax practitioner.
          </p>
          <div className="line"></div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          {contents.map((content, index) => (
            <div className="row" key={index}>
              <div className="icon-wrap">
                <img src={content.image} alt="content." />
              </div>
              <div>
                <h3>{content.heading}</h3>

                <p>{content.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
