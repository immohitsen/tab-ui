// components/Tab.js
import React, { useState } from "react";

const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const triggers = React.Children.toArray(children).filter(
    (child) => child.type === TabsTrigger
  );

  const contents = React.Children.toArray(children).filter(
    (child) => child.type === TabsContent
  );

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {triggers.map((trigger) =>
          React.cloneElement(trigger, {
            isActive: activeTab === trigger.props.value,
            onClick: () => setActiveTab(trigger.props.value),
          })
        )}
      </div>
      <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg shadow dark:shadow-gray-700/50">
        {contents.map((content) =>
          activeTab === content.props.value
            ? React.cloneElement(content, { key: content.props.value })
            : null
        )}
      </div>
    </div>
  );
};

const TabsTrigger = ({ value, isActive, onClick, children }) => (
  <button
    className={`px-4 py-2 font-medium text-sm ${
      isActive
        ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
        : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
    } focus:outline-none transition-colors duration-200`}
    onClick={onClick}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children }) => <div>{children}</div>;

export { Tabs, TabsTrigger, TabsContent };
