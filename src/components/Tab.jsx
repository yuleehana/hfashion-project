import '../components/sass/Tab.scss'
import { Link } from 'react-router-dom';

const Tab = ({ activeTab, handleTabClick }) => {
    // 탭 상태 정의: 기본값은 'detail' (상품상세정보)
    const tabs = [
        { id: 'detail', name: '상품상세정보' },
        { id: 'review', name: '리뷰(100)' },
        { id: 'qna', name: '상품Q&A(2)' }
    ];

    return (

        <ul className='tab-ver1' >
            {
                tabs.map((tab) => (
                    <li
                        key={tab.id}
                        // 현재 activeTab이 탭의 id와 같으면 'active' 클래스를 적용
                        className={activeTab === tab.id ? 'active' : ''}
                    >
                        {/* 클릭 시 handleTabClick 호출하여 activeTab 상태 변경 */}
                        <Link onClick={() => handleTabClick(tab.id)}>
                            {tab.name}
                        </Link>
                    </li>
                ))
            }
        </ul >

    )
}

export default Tab