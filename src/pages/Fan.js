import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Fan = () => {
  return (
    <div>
      <div className="container bg-gray-800 p-0">
        <Header />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="my-10 px-10 text-white">
              <div className="row mb-10">
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
                <div className="col-md-4"></div>
              </div>

              <div className="text-white">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Fan;
