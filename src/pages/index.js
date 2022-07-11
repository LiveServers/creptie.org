import React from "react";
import PropTypes from "prop-types";
import MainLayout from "../layout/MainLayout";
import AppHeader from "../containers/AppHeader";
import HeroSection from "../containers/HeroSection";
import AboutUsSection from "../containers/AboutUsSection";
import CurriculumSection from "../containers/CurriculumSection";
import CoursesSection from "../containers/CoursesSection";
import ProgrammingToolsSection from "../containers/ProgrammingToolsSection";
import PatnersSection from "../containers/PatnersSection";
import TeamSection from "../containers/TeamSection";
import TestimonialsSection from "../containers/TestimonialsSection";
import ContactSection from "../containers/ContactSection";
import FooterSection from "../containers/FooterSection";

const Home = ({
  isMobileTablet,
  isLargeScreen,
  contactRef,
  aboutRef,
  curriculumRef,
  coursesRef,
  teamRef,
  heroRef,
}) => {
  return (
    <MainLayout isMobileTablet={isMobileTablet} heroRef={heroRef}>
      <AppHeader
        contactRef={contactRef}
        isMobileTablet={isMobileTablet}
        aboutRef={aboutRef}
        curriculumRef={curriculumRef}
        coursesRef={coursesRef}
        teamRef={teamRef}
      />
      <HeroSection
        heroRef={heroRef}
        isLargeScreen={isLargeScreen}
        isMobileTablet={isMobileTablet}
        aboutRef={aboutRef}
      />
      <AboutUsSection aboutRef={aboutRef} isMobileTablet={isMobileTablet} />
      <CurriculumSection curriculumRef={curriculumRef} />
      <CoursesSection isMobileTablet={isMobileTablet} coursesRef={coursesRef} />
      <ProgrammingToolsSection />
      <PatnersSection />
      <TeamSection teamRef={teamRef} isMobileTablet={isMobileTablet} />
      <TestimonialsSection />
      <ContactSection contactRef={contactRef} isMobileTablet={isMobileTablet} />
      <FooterSection
        contactRef={contactRef}
        isMobileTablet={isMobileTablet}
        aboutRef={aboutRef}
        curriculumRef={curriculumRef}
        coursesRef={coursesRef}
        teamRef={teamRef}
      />
    </MainLayout>
  );
};

export default React.memo(Home);

Home.propTypes = {
  isMobileTablet: PropTypes.bool.isRequired,
  isLargeScreen: PropTypes.bool.isRequired,
};
