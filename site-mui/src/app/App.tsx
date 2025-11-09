import { AppBarNavLayout } from '@erica/mui-web';
import { Box, Typography } from '@mui/material';
import { Route, Routes } from 'react-router';
import { ClickableLogo } from '../components/ClickableLogo';
import { Footer } from '../components/Footer';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';
import { AboutPage } from '../pages/AboutPage';
import { OfferingsPage } from '../pages/offerings/OfferingsPage';

export const App: React.FC = () => {
  return (
    <AppBarNavLayout
      containerProps={{ maxWidth: 'lg' }}
      logo={<ClickableLogo />}
      navItems={[{
        label: 'About', to: '/about'
      }, {
        label: 'Offerings', to: '/offerings'
      }, {
        label: 'Contact', to: '/contact'
      }]}
      footer={<Footer />}
      navItemDivider={<Typography>🙚</Typography>}
    >
      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/offerings" element={<OfferingsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
    </AppBarNavLayout>
  );
};