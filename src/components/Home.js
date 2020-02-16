import React, { Component } from 'react';
import '../styles/Home.css';
import homepage1 from "../img/about.jpeg"
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      string: ""
    }
  }

  render() {
    return (
      <div className="about">
        <div id="showcase">
          <img src={homepage1} alt="" />
        </div>

        <div id="home-info">
          <div className="container">
            <div className="info-content">
              <h2>Meet Bernie</h2>
              <iframe className="speeches" width="800" height="515" src="https://www.youtube.com/embed/SYxZfksAyco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Bernie Sanders is a U.S. Senator from Vermont and candidate to become the next President of the United States. In 2006, he was elected to the U.S. Senate after 16 years as Vermont’s sole congressman in the House of Representatives. Bernie is now serving his third term in the U.S. Senate after winning re-election in 2018 with 67 percent of the vote. Born in Brooklyn, New York, he attended James Madison High School, Brooklyn College, and the University of Chicago. After graduating, he moved to Vermont where he worked as a carpenter and documentary filmmaker. In 1981, he was elected as mayor of Burlington, the state’s largest city, by a mere 10 votes.</p>
              <p>As mayor, Bernie’s leadership helped transform Burlington into one of the most exciting and livable small cities in America. Under his administration, the city made major strides in affordable housing, progressive taxation, environmental protection, child care, women’s rights, youth programs and the arts.</p>
              <p>In Congress, Bernie has fought tirelessly for working families, focusing on the shrinking middle class and growing gap between the rich and everyone else. Bernie has been called a “practical and successful legislator” and he was dubbed the “amendment king” in the House of Representatives for passing more amendments than any other member of Congress. As chairman of the Senate Committee on Veterans’ Affairs, Bernie worked across the aisle to “bridge Washington’s toxic partisan divide and cut one of the most significant deals in years.” In 2015, Democratic leadership tapped Bernie to serve as the caucus’ ranking member on the Senate Budget Committee.</p>

              <p>Bernie lives in Burlington, Vermont with his wife Jane. He has four children and seven grandchildren.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
