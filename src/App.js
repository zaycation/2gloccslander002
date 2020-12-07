import { Container, Row, Col } from "shards-react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <div>
      <Container className="container-fluid">
        <Row>
          <Col>
            <div className="header">
              <br />
              <div className="header-text">
                <br />
                <h4 className="text-center text-white">2glocs</h4>

                <h5 className="text-center text-white">
                  PS4 Twitch Streamer 🎮
                </h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="container-fluid">
        <Row>
          <Col>
            <h4 className="text-center text-white">2glocs</h4>

            <h5 className="text-center text-white">PS4 Twitch Streamer 🎮</h5>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container className="container-fluid">
        <Row>
          <Col>
            <div className="header3">
              <br />
              <div>

                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
