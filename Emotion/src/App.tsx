import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentCard from './components/ContentCard/ContentCard';
import Section from './components/ContentCard/Section/Section';
import ServiceList from './components/ContentCard/ServiceList/ServiceList';
import TeamMembers from './components/ContentCard/TeamMembers/TeamMembers';
import BlogPosts from './components/ContentCard/BlogPosts/BlogPosts';
import ContactForm from './components/ContentCard/ContactForm/ContactForm';
import {lightTheme, darkTheme} from './Styles/StylesVariables';

import './Styles/App.css';

const companyData = {
	name: "Acme Corporation",
	slogan: "Innovation at its best",
	about:
		"We are a leading provider of innovative solutions in various industries. Our team is dedicated to delivering high-quality products and services to our clients worldwide.",
	services: [
		{
		id: 1,
		name: "Web Development",
		description: "Creating modern and responsive websites.",
		},
		{
		id: 2,
		name: "Mobile App Development",
		description: "Building mobile applications for iOS and Android.",
		},
		{
		id: 3,
		name: "UI/UX Design",
		description:
			"Designing intuitive user interfaces for optimal user experience.",
		},
		{
		id: 4,
		name: "Digital Marketing",
		description:
			"Promoting products and services through various online channels.",
		},
	],
	teamMembers: [
		{
		id: 1,
		name: "Alice Young",
		position: "CEO",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et nisi cursus, sit amet laoreet odio rutrum.",
		image: "https://via.placeholder.com/150",
		},
		{
		id: 2,
		name: "Jane Smith",
		position: "CTO",
		bio: "Duis aliquam purus ac ante volutpat, nec lobortis tortor sagittis. Sed finibus eleifend efficitur.",
		image: "https://via.placeholder.com/150",
		},
		{
		id: 3,
		name: "Alice Johnson",
		position: "Lead Designer",
		bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris consectetur, velit et efficitur fringilla, ligula felis dignissim.",
		image: "https://via.placeholder.com/150",
		},
	],
	blogPosts: [
		{
		id: 1,
		title: "The Future of Technology",
		date: "March 10, 2024",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et nisi cursus, sit amet laoreet odio rutrum.",
		},
		{
		id: 2,
		title: "Design Trends for 2024",
		date: "February 28, 2024",
		content:
			"Duis aliquam purus ac ante volutpat, nec lobortis tortor sagittis. Sed finibus eleifend efficitur.",
		},
		{
		id: 3,
		title: "The Power of Social Media",
		date: "February 15, 2024",
		content:
			"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris consectetur, velit et efficitur fringilla, ligula felis dignissim.",
		},
		{
		id: 4,
		title: "Artificial Intelligence in Business",
		date: "January 30, 2024",
		content:
			"Suspendisse eget sapien vitae eros tincidunt ultrices. Morbi nec sem nisi. Nulla ultrices odio et eros varius, a eleifend velit tristique.",
		},
		{
		id: 5,
		title: "The Impact of Virtual Reality",
		date: "January 15, 2024",
		content:
			"Integer auctor neque mauris, eget sagittis justo tristique sit amet. Nam at nibh et nulla suscipit blandit eu nec mi.",
		},
	],
};

const Portfolio = styled.div`
	${({theme}) => `background: ${theme.color.backgroundColor};
	color: ${theme.color.primaryColor};
	`}
	margin: 0 auto;
`

export default function App() {
	const [theme, setTheme] = useState(darkTheme);

	const toggleTheme = () => {
		const newTheme = theme.type === "light" ? darkTheme : lightTheme;
		setTheme(newTheme);
	};

  return (
	<ThemeProvider theme = {theme}>
		<Portfolio>
			<NavBar toggleTheme={toggleTheme} theme={theme.type}/>
			<Header id="header" companyName={companyData.name} companySlogan={companyData.slogan} />
			<ContentCard>
				<Section title='About Us' id="about">
					<p>{companyData.about}</p>
				</Section>
				<Section title='Our Services' id="services">
					<ServiceList services={companyData.services} />
				</Section>
				<Section title='Meet Our Team' id="team">
					<TeamMembers teamMembers={companyData.teamMembers}/>
				</Section>
				<Section title='Latest Blog Posts' id="blog">
					<BlogPosts blogPosts={companyData.blogPosts}/>
				</Section>
				<Section title='Contact Us' id="contact">
					<ContactForm/>
				</Section>
			</ContentCard>
			<Footer companyName={companyData.name}/>
		</Portfolio>
	</ThemeProvider>
  );
};