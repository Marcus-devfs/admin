import { Box } from '../atoms'
import { AppProvider } from '../context/AppContext'
import { ProtectRoute } from '../context/ProtectRoute'
import { Colors, LeftMenu } from '../organisms'
import '../styles/globals.css'

const menuItems = [
   { to: '/users/list', text: 'Clientes', icon: 'users_icon'},
   { to: '/', text: 'Orçamentos', icon: 'companies_icon'},
   { to: '/files/list', text: 'Arquivos', icon: 'files_icon'},
];

function App({ Component, pageProps }) {
   return (
      <AppProvider>
         <ProtectRoute>
            <Box sx={styles.bodyContainer}>
               <LeftMenu menuItems={menuItems} />
               <Box sx={styles.contentContainer}>
                  <Component {...pageProps} />
               </Box>
            </Box>
         </ProtectRoute>
      </AppProvider>
   )
}

export default App;

const styles = {
   bodyContainer: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "row",
      width: '100%',
   },
   contentContainer: {
      display: "flex",
      width: '100%',
      flexDirection: 'column',
      flex: 1,
      gap: `35px`,
      backgroundColor: Colors.background,
      padding: { xs: `30px`, xm: `25px`, md: `50px`, lg: `50px` },
      paddingBottom: `60px`,
      overflowY: 'hidden',
      marginTop: { xs: `60px`, xm: `0px`, md: `0px`, lg: `0px` }
   },
}