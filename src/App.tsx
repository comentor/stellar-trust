import '@mantine/core/styles.css';
import './App.css'
import {DataService} from "./services/data.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./components/dashboard/dashboard.tsx";
import {Badge} from "./components/badge.tsx";
import {Sidebar} from "./components/sidebar.tsx";
import {AppShell, Burger, createTheme, Group, MantineColorsTuple, MantineProvider} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Profile} from "./components/profile.tsx";

const dataService = new DataService()

const myColor: MantineColorsTuple = [
    '#f0f5fa',
    '#dfe6ee',
    '#bbccde',
    '#94b1cf',
    '#7499c3',
    '#5f8abb',
    '#5483b9',
    '#4471a3',
    '#3a6592',
    '#2b5782'
];

const theme = createTheme({
    colors: {
        myColor,
    }
});

function App() {

    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

    return <div className="App">
      <MantineProvider theme={theme}>
          <BrowserRouter>
              {dataService.isLoggedIn ? (
              <AppShell
                  header={{ height: 60 }}
                  navbar={{
                      width: 300,
                      breakpoint: 'sm',
                      collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
                  }}
                  padding="md"
              >
                  <AppShell.Header>
                      <Group h="100%" px="md">
                          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                          {/*<MantineLogo size={30} />*/}
                      </Group>
                  </AppShell.Header>
                  <AppShell.Navbar p="md" variant="filled">
                      <Sidebar />
                  </AppShell.Navbar>
                  <AppShell.Main>
                      <Routes>
                          <Route path='/' element={<Dashboard />} />
                          <Route path='/profile' element={<Profile />} />
                          <Route path='/badge' element={<Badge />} />
                      </Routes>
                  </AppShell.Main>
              </AppShell>
              ) : (
                  <Routes>
                      <Route path='/' element={<div>Login</div>} />
                  </Routes>
              )}
          </BrowserRouter>
      </MantineProvider>
    </div>
}

export default App
