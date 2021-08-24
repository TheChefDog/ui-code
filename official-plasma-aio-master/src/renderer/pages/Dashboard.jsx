import Base from "../components/Base";
import Sidebar from "../components/Dashboard/SideBar";
import Title from "../components/Dashboard/Title";
import Time from "../components/Dashboard/Time";
import Statistics from "../components/Dashboard/Statistics";
import Chart from "../components/Dashboard/Chart";
import Checkouts from "../components/Checkout/Checkouts";
import Log from "../components/Checkout/Log";
import useStore from "../util/utils";


function Dashboard() {
  return (
          <Base>
            <Sidebar SelectedTab={1} />
            <div className="-ml-7">
              <Title name="Dashboard">
                <Time className="h-8" />
                <Statistics carted="22" checkouts="42" declines="10" spent="$36,457" />
                <div className="pt-10 -ml-6">
                  <Chart YDataKey="Pairs_Copped" XDataKey="Month" data={data} />
                </div>
              </Title>
            </div>
            <Checkouts>
            <Log Product="Jordan 4 'Taupe Haze'" Date="April 6, 2021" Details="Footlocker - Size 10.5" Image="https://cdn.webshopapp.com/shops/292955/files/358773601/air-jordan-4-taupe-haze.jpg" />
              <Log Product="Jordan 4 'Taupe Haze'" Date="April 6, 2021" Details="Footlocker - Size 10.5" Image="https://cdn.webshopapp.com/shops/292955/files/358773601/air-jordan-4-taupe-haze.jpg" />
              <Log Product="Jordan 4 'Taupe Haze'" Date="April 6, 2021" Details="Footlocker - Size 10.5" Image="https://cdn.webshopapp.com/shops/292955/files/358773601/air-jordan-4-taupe-haze.jpg" />
              <Log Product="Jordan 4 'Taupe Haze'" Date="April 6, 2021" Details="Footlocker - Size 10.5" Image="https://cdn.webshopapp.com/shops/292955/files/358773601/air-jordan-4-taupe-haze.jpg" />
              <Log Product="Jordan 4 'Taupe Haze'" Date="April 6, 2021" Details="Footlocker - Size 10.5" Image="https://cdn.webshopapp.com/shops/292955/files/358773601/air-jordan-4-taupe-haze.jpg" />
              <Log Product="Jordan 4 'Taupe Haze'" Date="April 6, 2021" Details="Footlocker - Size 10.5" Image="https://cdn.webshopapp.com/shops/292955/files/358773601/air-jordan-4-taupe-haze.jpg" />
              <Log Product="Jordan 4 'Taupe Haze'" Date="April 6, 2021" Details="Footlocker - Size 10.5" Image="https://cdn.webshopapp.com/shops/292955/files/358773601/air-jordan-4-taupe-haze.jpg" />
              <Log Product="Jordan 4 'Taupe Haze'" Date="April 6, 2021" Details="Footlocker - Size 10.5" Image="https://cdn.webshopapp.com/shops/292955/files/358773601/air-jordan-4-taupe-haze.jpg" />
              <Log Product="Jordan 4 'Taupe Haze'" Date="April 6, 2021" Details="Footlocker - Size 10.5" Image="https://cdn.webshopapp.com/shops/292955/files/358773601/air-jordan-4-taupe-haze.jpg" />
            </Checkouts>
          </Base>
  );
}

export default Dashboard;

var data = [
  {
    Pairs_Copped: 134,
    Month: "January",
  },
  {
    Pairs_Copped: 42,
    Month: "February",
  },
  {
    Pairs_Copped: 93,
    Month: "March",
  }
]