import { Refine, GitHubBanner } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import routerProvider, {
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router";
import { dataProvider } from "@/providers/data";
import { useNotificationProvider } from "./components/refine-ui/notification/use-notification-provider";
import { Toaster } from "./components/refine-ui/notification/toaster";
import { ThemeProvider } from "./components/refine-ui/theme/theme-provider";
import "./App.css";
import Dashboard from "./pages/dashboard";
import { BookOpen, GraduationCap, Home } from "lucide-react";
import {Layout} from "./components/refine-ui/layout/layout.tsx";
import SubjectsList from "./pages/subjects/list.tsx";
import ClassesList from "./pages/classes/list.tsx";
import ClassesCreate from "./pages/classes/create.tsx";
import ClassesShow from "./pages/classes/show.tsx";




function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "axU2GO-OJY9Ng-oo5yQ1",
              }}
              resources={[
                  {
                    name: "dashboard",
                    list: "/",
                    meta: { label: "Home", icon: <Home /> },
                  },
                  {
                    name: "subjects",
                    list: "/subjects",
                    meta: { label: "Subjects", icon: <BookOpen /> },
                  },
                  {
                    name: "classes",
                    list: "/classes",
                    create: "/classes/create",
                    show: "/classes/:id",
                    meta: { label: "Classes", icon: <GraduationCap /> },
                  }
                ]}
              >
              <Routes>
                <Route element={
                    <Layout>
                        <Outlet />
                    </Layout>
                }>
                    <Route path="/" element={<Dashboard />} />
                    
                    <Route path="subjects">
                        <Route index element={<SubjectsList />} />
                    </Route>
                    
                    <Route path="classes">
                        <Route index element={<ClassesList />} />
                        <Route path="create" element={<ClassesCreate />} />
                        <Route path=":id" element={<ClassesShow />} />
                    </Route>
                </Route>
                
              </Routes>

              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
