import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import {

  Input,
  Select,
  DatePicker,
  Button,
  Layout,
  Menu,
  Breadcrumb,
  theme,
} from "antd";

import { Search } from "lucide-react";

const { Option } = Select;
const { Content, Sider } = Layout;

interface Tender {
  id: string;
  image: string;
  title: string;
  category: string;
  closingDate: Date;
  postingDate: Date;
}

const tenders: Tender[] = [
  {
    id: "0000230",
    image: "https://picsum.photos/800/400?random=4",
    title: "Stay updated with the latest tenders in your area.",
    category: "Electronic home / Products",
    closingDate: new Date("2063-12-23"),
    postingDate: new Date("2055-04-05"),
  },
  {
    id: "0000231",
    image: "https://picsum.photos/800/400?random=5",
    title: "Find the best opportunities for your business.",
    category: "Construction / Services",
    closingDate: new Date("2063-12-23"),
    postingDate: new Date("2055-04-05"),
  },
];

const categories = [
  { name: "Education", count: 726 },
  { name: "Packaging", count: 805 },
  { name: "Supplier Registration", count: 10247 },
  {
    name: "Services (Financial / Insurance / Janitorial and other services)",
    count: 31969,
  },
  { name: "Expression of Interest (EOI)", count: 4501 },
  { name: "Medical", count: 6789 },
  { name: "Automobile and Transport", count: 20486 },
  { name: "Engineering and Construction", count: 39303 },
  { name: "IT and Electronics", count: 22086 },
  { name: "Power and Energy", count: 5696 },
  { name: "Aviation", count: 503 },
  { name: "Hardware, Machinery and Equipment", count: 37844 },
  { name: "Agriculture and Food", count: 11943 },
  { name: "Hotel and Hospitality", count: 975 },
  { name: "Printing, Packaging, Advertising & Stationeries", count: 1843 },
];

function TenderPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Navbar />

      <div className="mb-8">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white ">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Tenders List</h1>

          <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 max-w-6xl w-full mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input placeholder="Tender Code" />
              <Input placeholder="Tender Title / Keyword" />

              <Select placeholder="Select Paper" className="w-full">
                <Option value="gazette">Government Gazette</Option>
                <Option value="business">Business Daily</Option>
                <Option value="national">National News</Option>
              </Select>

              <DatePicker placeholder="Published Date" className="w-full" />
              <DatePicker
                picker="month"
                placeholder="Published Month"
                className="w-full"
              />
              <DatePicker
                picker="year"
                placeholder="Published Year"
                className="w-full"
              />
            </form>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <Button
                type="primary"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-200 shadow-md"
              >
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mb-12 ">
        <Layout>
          {/* Sidebar */}

          <div className="hidden md:block">
            <Sider width={280} style={{ background: colorBgContainer }}>
              <h3 className="p-4 font-semibold text-lg border-2 border-gray-200">
                Categories
              </h3>
              <Menu
                className="h-100vh overflow-y-auto"
                mode="inline"

                //   style={{ height: "100%", borderInlineEnd: 0 }}
              >
                {categories.map((cat, idx) => (
                  <Menu.Item key={idx}>
                    <div className="flex justify-between">
                      <span>{cat.name}</span>
                      <span className="text-gray-500">({cat.count})</span>
                    </div>
                  </Menu.Item>
                ))}
              </Menu>
            </Sider>
          </div>

          {/* Content */}
          <Layout>
            <Breadcrumb></Breadcrumb>

            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <div className="p-8 md:p-12">
                <h1 className="md:text-2xl text-md font-semibold">
                  Latest Tenders
                </h1>

                {tenders.map((tender, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 p-4 rounded-md md:mx-20 mt-4"
                  >
                    <div className="flex flex-col">
                      <h1 className="text-blue-500">{tender.id}</h1>

                      <div className="flex gap-4 md:items-center mt-2 flex-col md:flex-row items-start">
                        <div className="flex gap-4 md:items-center flex-1 flex-col md:flex-row items-start">
                          <div>
                            <img
                              src={tender.image}
                              alt="Tender"
                              className="w-12 h-12 rounded-full"
                            />
                          </div>
                          <div>
                            <h1 className="text-xl font-semibold">
                              {tender.title}
                            </h1>
                            <p className="text-sm text-primary">
                              {tender.category}
                            </p>
                          </div>
                        </div>

                        <Link to={`/tender/${tender.id}`}>
                          <button className="bg-primary rounded-md text-primary font-semibold px-4 h-10 hover:bg-gray-200 flex gap-2 items-center">
                            <Search /> <span>View</span>
                          </button>
                        </Link>

                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <p className="text-red-600">
                        Closing on {tender.closingDate.toLocaleDateString()}
                      </p>
                      <p>Post on {tender.postingDate.toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>

      <Footer />
    </div>
  );
}

export default TenderPage;
