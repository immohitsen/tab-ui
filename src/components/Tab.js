import React, { useState } from 'react';

const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const triggers = React.Children.map(children, child =>
    child.type === TabsTrigger ? child : null
  );
  const contents = React.Children.map(children, child =>
    child.type === TabsContent ? child : null
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex border-b border-gray-200">
        {triggers.map(trigger =>
          React.cloneElement(trigger, {
            isActive: activeTab === trigger.props.value,
            onClick: () => setActiveTab(trigger.props.value),
          })
        )}
      </div>
      <div className="p-4 bg-white rounded-b-lg shadow">
        {contents.map(content =>
          activeTab === content.props.value ? content : null
        )}
      </div>
    </div>
  );
};

const TabsTrigger = ({ value, isActive, onClick, children }) => (
  <button
    className={`px-4 py-2 font-medium text-sm ${
      isActive
        ? 'text-blue-600 border-b-2 border-blue-600'
        : 'text-gray-500 hover:text-blue-600'
    } focus:outline-none`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children }) => <>{children}</>;

export { Tabs, TabsTrigger, TabsContent };
