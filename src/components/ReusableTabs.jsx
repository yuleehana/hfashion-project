import React, { useState } from 'react';
import './sass/Tab.scss'

// 탭 컴포넌트의 props로 외부에서 데이터를 받습니다.
const ReusableTabs = ({ tabsData }) => {
    const [activeTab, setActiveTab] = useState(tabsData[0]?.id || '');
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    // 현재 활성화된 탭의 내용을 찾습니다.
    const activeContent = tabsData.find(tab => tab.id === activeTab)?.content;

    return (
        <div className="tab-container">
            {/* --- 탭 버튼 영역 --- */}
            <ul className="tab-ver1">
                {/* tabsData 배열을 map으로 돌면서 탭 버튼을 렌더링합니다. */}
                {tabsData.map((tab) => (
                    <li
                        key={tab.id}
                        className={tab.id === activeTab ? 'active' : ''}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <a href="#!">{tab.title}</a>
                    </li>
                ))}
            </ul>

            {/* --- 탭 내용 영역 (조건부 렌더링) --- */}
            <div className="tab-content" style={{ border: '1px solid #ccc', padding: '20px', marginTop: '10px' }}>
                {/* 외부에서 전달된 activeContent를 보여줍니다. */}
                {activeContent}
            </div>
        </div>
    );
};

export default ReusableTabs;