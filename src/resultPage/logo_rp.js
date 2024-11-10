// Logo_qz.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { storage } from './firebase'; // firebase.js에서 storage 가져오기
// import { ref, getDownloadURL } from 'firebase/storage'; // Firebase Storage API에서 필요한 함수
import './logo_st.css';

function Logo_rp() {
    const [logoUrl, setLogoUrl] = useState(null);
    const navigate = useNavigate();

    // Firebase에서 로고 이미지 가져오기
    /*useEffect(() => {
        const fetchLogo = async () => {
            const logoRef = ref(storage, 'logos/your-logo.png'); // Firebase Storage에 저장된 로고 경로
            try {
                const url = await getDownloadURL(logoRef); // 로고 URL 가져오기
                setLogoUrl(url);
            } catch (error) {
                console.error("Error fetching logo: ", error);
            }
        };
        fetchLogo();
    }, []);*/

    // 로고 클릭 시 홈으로 이동
    const handleLogoClick = () => {
        navigate('/'); // 홈 화면으로 이동
    };

    return (
        <div className="logo-container">
            {logoUrl ? (
                <img 
                    src={logoUrl} 
                    alt="Logo" 
                    onClick={handleLogoClick} 
                    className="logo_image_qz" 
                />
            ) : (
                <div                                        //이부분나중에 삭제
                    className="logo_placeholder_qz" 
                    onClick={handleLogoClick}
                >
                    로고                                  
                </div>                                     //이부분 까지 나중에 삭제
            )}
        </div>
    );
}

export default Logo_rp;
