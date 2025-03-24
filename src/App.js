import React from 'react';
import { Tabs, TabsTrigger, TabsContent } from './components/Tab';

const App = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <Tabs defaultValue="account">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
      <TabsContent value="account">
        <p className="text-gray-700">Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-gray-700">Change your password here.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p className="text-gray-700">Change your settings here.</p>
      </TabsContent>
    </Tabs>
  </div>
);

export default App;
