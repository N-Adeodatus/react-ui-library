import { useState } from 'react';

export default function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = '',
  ...rest
}) {
  const initialValue = defaultValue || tabs[0]?.value || tabs[0]?.label;
  const [internalValue, setInternalValue] = useState(initialValue);
  const activeValue = value !== undefined ? value : internalValue;

  const handleChange = (nextValue) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };

  return (
    <div className={`tabs ${className}`.trim()} {...rest}>
      <div className="tab-list" role="tablist">
        {tabs.map((tab) => {
          const tabValue = tab.value ?? tab.label;
          const isActive = tabValue === activeValue;
          return (
            <button
              key={tabValue}
              className={`tab-trigger ${isActive ? 'active' : ''}`}
              role="tab"
              aria-selected={isActive}
              onClick={() => handleChange(tabValue)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="tab-panels">
        {tabs.map((tab) => {
          const tabValue = tab.value ?? tab.label;
          if (tabValue !== activeValue) return null;
          return (
            <div key={tabValue} className="tab-panel" role="tabpanel">
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

