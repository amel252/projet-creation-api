import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const { Header, Content, Footer } = Layout;

const contentStyle = {
    display: "flex",
    flexWrap: "wrap",
    padding: "3rem",
    justifyContent: "center",
};

const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "1.5rem",
    fontSize: "1.1rem",
    lineHeight: "1.4",
};

const menuItems = [
    { key: "1", label: <Link to="/">Home</Link> },
    { key: "2", label: <Link to="/rooms">Rooms</Link> },
    { key: "3", label: <Link to="/about">About us</Link> },
    { key: "4", label: <Link to="/services">Services</Link> },
    { key: "5", label: <Link to="/contact">Contact</Link> },
];

const MLLayout = ({ children }) => {
    return (
        <Layout>
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={menuItems} // Utilisation correcte de items
                />
            </Header>

            <Content style={contentStyle}>{children}</Content>

            <Footer style={footerStyle}>
                <div className="footer-about">
                    <a
                        href="index.html"
                        className="logo d-flex align-items-center"
                    >
                        <span className="sitename">Grandoria</span>
                    </a>
                    <div className="footer-contact pt-3">
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                        <p className="mt-3">
                            <strong>Phone:</strong>{" "}
                            <span>+1 5589 55488 55</span>
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <span>info@example.com</span>
                        </p>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Terms of service</a>
                        </li>
                        <li>
                            <a href="#">Privacy policy</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Social media</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <FaFacebookF /> <a href="#">Facebook</a>
                        </li>
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <FaInstagram /> <a href="#">Instagram</a>
                        </li>
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <FaTiktok /> <a href="#">Tiktok</a>
                        </li>
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <FaTwitter /> <a href="#">Twitter</a>
                        </li>
                    </ul>
                </div>
            </Footer>
        </Layout>
    );
};

export default MLLayout;
