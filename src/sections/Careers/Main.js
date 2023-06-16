import React, { useContext } from "react";
import { themeContext } from "../../theme/Provider";
import SectionContainer from "../../containers/SectionContainer";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";

const MainSection = ({ data, fullscreen, bgColor, vPadding, style }) => {
	const theme = useContext(themeContext);

	return (
		<SectionContainer
			fullscreen={fullscreen}
			bgColor={bgColor}
			vPadding={vPadding}
			style={style}>
			<div style={{ maxWidth: theme.maxWidth, paddingRight: "10vw" }}>
				<h1>We are recruiting</h1>

				<p>
					We are looking for a motivated Senior Full Stack Developer
					in the Ottawa, ON, Canada area. The ideal candidate is a
					self-starter, has fantastic attention to detail and has the
					ability to be extremely productive working remotely most of
					the time.
				</p>

				<p>
					As a Full Stack Developer, you will work on all parts of the
					product; front-end website and mobile app and back-end web
					APIs.
				</p>

				<p></p>

				<h3
					style={{
						marginTop: theme.spacers[8],
						marginBottom: theme.spacers[4],
					}}>
					Key Responsibilities:
				</h3>

				<ul>
					<li>
						Design, code/debug, and test new/existing software
						modules.
					</li>
					<li>
						Contribute towards the development of new approaches and
						techniques and perform code reviews for the team.
					</li>
					<li>
						Participate in the development of larger modules which
						may also include requirements analysis, adhering to
						secure coding practices and detailing design aspects
						under the direction of experienced engineers.
					</li>
					<li>
						Use source control tools and related
						processes/procedures and build mechanisms.
					</li>
					<li>
						Assist in creating documentation and created development
						best practices.
					</li>
				</ul>

				<h3
					style={{
						marginTop: theme.spacers[10],
						marginBottom: theme.spacers[4],
					}}>
					Required Skills and Experience (Must Haves):
				</h3>

				<ul>
					<li>
						4+ years experience in web and mobile application
						development (React Native)
					</li>
					<li>4+ years working with the following technologies</li>
					<ul>
						<li>JavaScript/Typescript</li>
						<li>NodeJS</li>
						<li>ReactJS & React Native </li>
						<li>MongoDB & Mongoose</li>
						<li>Android and IOS development</li>
						<li>GraphQL</li>
					</ul>
					<li>
						Goal-oriented, focused, self-starter, and a dedicated
						individual who strives for perfection
					</li>
					<li>Ability to work remotely and on-site periodically</li>
					<li>
						Flexible schedule that allows for meetings and
						engagement with international team members
					</li>
					<li>A great eye for design and user experience</li>
				</ul>

				<h3
					style={{
						marginTop: theme.spacers[10],
						marginBottom: theme.spacers[4],
					}}>
					Preferred Skills (Nice to Have):
				</h3>

				<ul>
					<li>
						Experience working with c#, asp.net core and Azure is an
						asset
					</li>
					<li>Apollo (client, server)</li>
					<li>Firebase</li>
					<li>React Native Maps</li>
					<li>Knowledge of game development theory</li>
					<li>
						Learning agility, with excellent analytical, and
						communication skills
					</li>
					<li>
						Native iOS and Android development (Swift/Objective-C
						and Java/Kotlin)
					</li>
					<li>A passion for arm-wrestling is a big plus</li>
				</ul>
				<br />
				<br />
				<p>
					If you meet our requirements and are intrested, please send
					us an email with your resume.
				</p>
				<br />
				<Button href={"mailto:careers@armbet.com"} onClick={() => {}}>
					Apply for the job
				</Button>
			</div>
		</SectionContainer>
	);
};

export default MainSection;
