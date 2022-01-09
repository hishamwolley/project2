import React from "react";
import logo from "../../images/logo-interim.png";
import { BsSearch } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";

const Header = () => {
	return (
		<header
			className="vw-100"
			style={{
				borderBottom: "1px solid #d3d3d3",
			}}
		>
			<div className="headerContainer">
				<nav className="headerNav">
					<div className="d-flex w-75 h-100 align-items-center">
						<img src={logo} style={{ height: "65px" }} alt="logo"></img>
					</div>
					<section className="w-25 h-100 d-flex align-items-center profileNavPlacement">
						<div className="d-none d-md-flex h-100 d-flex align-items-center w-60">
							<div className="headerSearch">
								<input
									type="text"
									placeholder="Search"
									className="headerInput"
								></input>
								<BsSearch size="1.25rem" />
							</div>
						</div>
						<div className="w-35 d-flex align-items-center justify-content-center">
							<div>
								<RiUser3Line size="1.25rem" />
							</div>
							<div>
								<AiOutlineMenu size="1.375rem" />
							</div>
						</div>
					</section>
				</nav>
			</div>
			<nav
				className="d-flex align-items-center justify-content-start w-100"
				style={{
					height: "40px",
					borderBottom: "2px solid #d3d3d3",
				}}
			>
				<ul className="headerSubNav">
					<li
						className=" text-center font-weight-bold"
						style={{
							color: "#02509a",
							minWidth: "105px",
						}}
					>
						Blockchain
					</li>
					<li
						style={{ color: "#02509a", width: "105px" }}
						className="d-none d-md-block text-center "
					>
						Products
					</li>

					<li
						style={{ color: "#02509a", width: "105px" }}
						className="d-none d-md-block text-center"
					>
						Services
					</li>
					<li
						style={{ color: "#02509a", width: "105px" }}
						className="d-none d-md-block text-center"
					>
						Learn
					</li>
					<li className="d-none d-md-block text-center">
						<Dropdown className="btn">
							<Dropdown.Toggle
								style={{
									color: "#02509a",
									minWidth: "105px",
									textAlign: "center",
								}}
								className="btn"
								tag="text"
								variant="none"
							>
								Solutions
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
					<li className="d-none d-md-block text-center">
						<Dropdown className="btn">
							<Dropdown.Toggle
								style={{
									color: "#02509a",
									minWidth: "105px",
									textAlign: "center",
								}}
								className="btn"
								tag="text"
								variant="none"
							>
								Explore More
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
