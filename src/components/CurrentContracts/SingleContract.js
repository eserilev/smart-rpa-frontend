import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import CardImage from "../../videos/houseImage.jpg";
const SingleContract = (c) => {
  console.log(c.contract);
  return (
    <Card style={{ width: "18rem" }} className="singleContract ">
      <Card.Img variant="top" src={CardImage} />
      <Card.Body>
        <Card.Title>
          <span>
            ACTIVE OFFER: {JSON.stringify(c.contract.activeOffer).toUpperCase()}
          </span>
        </Card.Title>
        <Card.Text>OFFER RESPONSE : {c.contract.offerResponse}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          Offer URL: <a href="zillow.com">{c.contract.newUrl}</a>
        </ListGroupItem>
        <ListGroupItem>
          Days Til Expiration: {c.contract.newdaysTilExpiration}
        </ListGroupItem>
        <ListGroupItem>
          Offer Responded To:{" "}
          {JSON.stringify(c.contract.offerRespondedTo).toUpperCase()}
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.zillow.com/las-vegas-nv/sold/?searchQueryState=%7B%22pagination%22%3A%7B%7D%2C%22usersSearchTerm%22%3A%222101%20S%20Pioneer%20Way%2C%20Las%20Vegas%2C%20NV%2089117%22%2C%22mapBounds%22%3A%7B%22west%22%3A-115.2592983841896%2C%22east%22%3A-115.25532871484756%2C%22south%22%3A36.14569413963481%2C%22north%22%3A36.14887800198434%7D%2C%22regionSelection%22%3A%5B%7B%22regionId%22%3A18959%2C%22regionType%22%3A6%7D%5D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22price%22%3A%7B%22min%22%3A900000%7D%2C%22mp%22%3A%7B%22min%22%3A3005%7D%2C%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%2C%22fsba%22%3A%7B%22value%22%3Afalse%7D%2C%22fsbo%22%3A%7B%22value%22%3Afalse%7D%2C%22nc%22%3A%7B%22value%22%3Afalse%7D%2C%22fore%22%3A%7B%22value%22%3Afalse%7D%2C%22cmsn%22%3A%7B%22value%22%3Afalse%7D%2C%22auc%22%3A%7B%22value%22%3Afalse%7D%2C%22pmf%22%3A%7B%22value%22%3Afalse%7D%2C%22pf%22%3A%7B%22value%22%3Afalse%7D%2C%22rs%22%3A%7B%22value%22%3Atrue%7D%2C%22ah%22%3A%7B%22value%22%3Atrue%7D%7D%2C%22isListVisible%22%3Atrue%2C%22mapZoom%22%3A18%7D">
          View Listing On Zillow!
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default SingleContract;
