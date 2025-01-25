import HeaderMobile from "../pageSegments/HeaderMobile";
import FooterMobile from "../pageSegments/FooterMobile";
import Background from "../pageSegments/Background";
import Paper from "@mui/material/Paper";
import grey from "@mui/material/colors/grey";

const Resume = () => {
  return (
    <>
      <HeaderMobile />

      <div
        className="p-3 text-primary-emphasis container-md"
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "#cccccc",
          backgroundImage:
            "linear-gradient(rgb(63, 67, 87), rgb(82, 128, 199), rgb(63, 67, 87))",
        }}
      >
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
              <p style={{ margin: 20 }}>
                {" "}
                <br></br>
                <h3>Education:</h3>
                <h5>Oakland University</h5>
                318 Meadow Brook Rd, Rochester, MI 48309<br></br>
                Bachelor of Science in Computer Science
                <br></br>
                <br></br>
                <h5>Macomb Community College</h5>
                14500 Twelve Mile Rd, Warren, MI 48088<br></br>
                Associate's Degree in General Studies
                <br></br> <br></br>{" "}
              </p>
            </Paper>
          </div>
          <div className="col-1" />
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
              <p style={{ margin: 20 }}>
                {" "}
                <br></br>
                <h3>Work Experience:</h3>
                I've worked a part time job since I graduated high school as I
                worked towards my degree. I've worked a customer service job as
                a cashier and sales clerk as well as physically demanding
                shipping and receiving jobs.
                <br></br> <br></br>I am currently beginning work as an
                independant contractor where I have mostly dealt with analyzing
                how well an ai handles prompts related to Python code.
                <br></br> <br></br>{" "}
              </p>
            </Paper>
          </div>
          <div className="col-1" />
        </div>

        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
              <p style={{ margin: 20 }}>
                {" "}
                <br></br>
                <h3>Tech Skills:</h3>
                <ul>
                  <h5>
                    <strong>Computer Languages:</strong>
                  </h5>
                  <li>
                    <strong>C++</strong>
                  </li>
                  <li>
                    <strong>C#</strong>
                  </li>
                  <li>
                    <strong>Java Script</strong>
                  </li>
                  <li>
                    <strong>Type Script</strong>
                  </li>
                  <li>
                    <strong>Python</strong>
                  </li>
                  <li>
                    <strong>HTML</strong>
                  </li>
                  <li>
                    <strong>CSS</strong>
                  </li>
                  <li>
                    <strong>XML</strong>
                  </li>
                  <li>
                    <strong>SQL</strong>
                  </li>
                </ul>
                <ul>
                  <h5>
                    <strong>Machine Learning:</strong>
                  </h5>
                  <li>
                    <strong>Pytorch</strong>
                  </li>
                  <li>
                    <strong>TensorFlow</strong>
                  </li>
                  <li>
                    <strong>Keras</strong>
                  </li>
                  <li>
                    <strong>Image Classification</strong>
                  </li>
                  <li>
                    <strong>Neural Networks</strong>
                  </li>
                  <li>
                    <strong>Algorithm Optimization</strong>
                  </li>
                </ul>
                <ul>
                  <h5>
                    <strong>Web Development:</strong>
                  </h5>
                  <li>
                    <strong>React</strong>
                  </li>
                  <li>
                    <strong>Django</strong>
                  </li>
                  <li>
                    <strong>SQLite</strong>
                  </li>
                  <li>
                    <strong>PostgreSQL</strong>
                  </li>
                  <li>
                    <strong>Node.js</strong>
                  </li>
                  <li>
                    <strong>Google Chrome Extension</strong>
                  </li>
                  <li>
                    <strong>REST API</strong>
                  </li>
                  <li>
                    <strong>YouTube API</strong>
                  </li>
                  <li>
                    <strong>OpenAI API</strong>
                  </li>
                </ul>
                <ul>
                  <h5>
                    <strong>Other:</strong>
                  </h5>
                  <li>
                    <strong>Unity</strong>
                  </li>
                  <li>
                    <strong>Agile Development</strong>
                  </li>
                  <li>
                    <strong>Database Design</strong>
                  </li>
                  <li>
                    <strong>Jupyter Notebook</strong>
                  </li>
                  <li>
                    <strong>Playwright Testing</strong>
                  </li>
                </ul>
                <br></br>{" "}
              </p>
            </Paper>
          </div>
          <div className="col-1" />
        </div>

        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
              <p style={{ margin: 20 }}>
                {" "}
                <br></br>
                <h3>Math and Sciences:</h3>
                <ul>
                  <li>
                    <strong>Linear Algebra</strong>
                  </li>
                  <li>
                    <strong>Trigonometry</strong>
                  </li>
                  <li>
                    <strong>Geometry</strong>
                  </li>
                  <li>
                    <strong>Calculus</strong>
                  </li>
                  <li>
                    <strong>Chemistry</strong>
                  </li>
                  <li>
                    <strong>Physics</strong>
                  </li>
                  <li>
                    <strong>Biology</strong>
                  </li>
                </ul>
                <br></br>{" "}
              </p>
            </Paper>
          </div>
          <div className="col-1" />
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <Paper elevation={10} sx={{ backgroundColor: grey[300] }}>
              <p style={{ margin: 20 }}>
                {" "}
                <br></br>
                <h3>Other Skills:</h3>
                <ul>
                  <li>
                    <strong>Customer Service</strong> - I always try to remain
                    polite and professional even on the more stressful days.
                  </li>
                  <li>
                    <strong>Informative and Persuasive Writing</strong> - I am
                    very confident in my ability to find reasonable conclusions
                    and articulate said conclusions to others.
                  </li>
                  <li>
                    <strong>Problem Solving</strong> - I love a good puzzle.
                  </li>
                  <li>
                    <strong>Optimization</strong> - I always am trying to work
                    out the most efficient and effective way for the team to do
                    tasks.
                  </li>
                  <li>
                    <strong>Project Leadership</strong> - I often defaulted to
                    team lead in my course projects for my inititive in putting
                    forth ideas.
                  </li>
                  <li>
                    <strong>Informal Workplace Leadership</strong> - Coworkers
                    often look for me to make calls when there are no managers
                    available.
                  </li>
                </ul>
                <br></br>{" "}
              </p>
            </Paper>
          </div>
          <div className="col-1" />
        </div>
        <div className="row" style={{ height: 100 }}></div>
      </div>
      <FooterMobile />
      <Background />
    </>
  );
};

export default Resume;
